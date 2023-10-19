import { useEffect, useState } from 'react';
import './Style.css';
import Sidebar from './Sidebar';
import Modal from './components/Modal';
import Backdrop from './components/Backdrop';
import ValorModulos from './components/ValorModulos';
import SeletorData from './components/SeletorData';
import useAxios from './hooks/useAxios';

function Faturamento() {
  const [modalOpen, setModalOpen] = useState(false);
  const date = new Date();
  const [data, setData] = useState([date.getMonth(), date.getFullYear()]);
  const [result, setResults] = useState([]);

  const { response, loading, error } = useAxios({
    method: 'get',
    url: `Faturamento/data?Ano=${data[0]}&Mes=${data[1]}`,
  });

  useEffect(() => {
    if (response && !error) {
      setResults(response);
    } else {
      console.log(error);
      setResults(null);
    }
  }, [data, response, error]);

  return (
    <div className="faturamento">
      <Sidebar />
      {modalOpen && (
        <Modal
          titulo="Adicionar Compra"
          //passar os inputs que o modal terá
          inputs={[
            {
              name: 'ClientesAtendidos',
              label: 'Clientes Atendidos',
              type: 'number',
            },
            {
              name: 'NumeroVendas',
              label: 'Número de Vendas',
              type: 'number',
            },
            {
              name: 'numeroItensVendidos',
              label: 'Quantidade Vendida',
              type: 'number',
            },
            {
              name: 'valorFaturadoMes',
              label: 'Valor Faturado',
              type: 'number',
            },
          ]}
          setModalOpen={setModalOpen}
        />
      )}
      <Backdrop show={modalOpen} closeModal={setModalOpen} />
      <main>
        <div className="estoque-header">
          <h1 className="estoque-title">Faturamento</h1>
          <h2 className="estoque-subtitle">Gerencie Suas Vendas</h2>
        </div>

        <div className="estoque-container">
          <div className="page-header">
            <h1 className="estoque-title2">Vendas Realizadas</h1>
            <SeletorData getDate={setData} />
          </div>
          {result ? (
            <ValorModulos
              data={result}
              labels={[
                'Clientes Atendidos',
                'Número de Vendas',
                'Taxa de Conversão',
                'Itens Vendidos',
                'Valor Médio',
                'Valor total Mês',
              ]} // Título das colunas
              valores={[
                'clientesAtendidos',
                'numeroVendas',
                'taxaConversao',
                'numeroItensVendidos',
                'precoMedioProduto',
                'valorFaturadoMes',
              ]} // Valores do objeto
            />
          ) : (
            loading && <p>Carregando...</p>
          )}
          <div className="container-add-button">
            <button
              className="add-button"
              onClick={() => {
                setModalOpen((prev) => !prev);
              }}
            >
              Adicionar +
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Faturamento;
