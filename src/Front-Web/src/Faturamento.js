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
  //variaveis do seletor de data
  const date = new Date();
  const dataAtual = [date.getFullYear(), date.getMonth() + 1];
  const [data, setData] = useState(dataAtual);
  //variavel que armazena os dados da requisição
  const [salesData, setsalesData] = useState([]);
  const token = localStorage.getItem('token');
  //hook personalizado para requisições
  const { response, loading, error } = useAxios({
    method: 'get',
    url: `Faturamento/data?Ano=${data[0]}&Mes=${data[1]}`,
    headers: JSON.stringify({
      Authorization: 'Bearer ' + token,
    }),
  });

  useEffect(() => {
    if (response && !error) {
      setsalesData(response);
    } else if (error) {
      console.log(error);
    }
  }, [response, error]);

  const [editId, setEditId] = useState(null);

  useEffect(() => {
    if (modalOpen === false) {
      setEditId(null);
    }
  }, [modalOpen]);

  return (
    <div className="main-all">
      <Sidebar />
      {modalOpen && (
        <Modal
          titulo="Adicionar Compra"
          data={data} //passar a data para o modal
          url="Faturamento" //passar a url para o modal
          setModalOpen={setModalOpen}
          editId={editId}
          resetId={setEditId}
          //passar os inputs que o modal terá - name precisa ser exatamente que nem o nome da propriedade do objeto
          inputs={[
            {
              name: 'clientesAtendidos',
              label: 'Clientes Atendidos',
              type: 'number',
            },
            {
              name: 'numeroVendas',
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
        />
      )}
      <Backdrop show={modalOpen} closeModal={setModalOpen} />
      <main>
        <div className="main-header">
          <h1 className="main-title">Faturamento</h1>
          <h2 className="main-subtitle">Gerencie Suas Vendas</h2>
        </div>

        <div className="main-container">
          <div className="page-header">
            <h1 className="main-title2">Vendas Realizadas</h1>
            <SeletorData getDate={setData} />
          </div>
          {salesData ? (
            <ValorModulos
              data={salesData}
              openModal={setModalOpen}
              setEditData={setEditId}
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
          ) : loading ? (
            <p>Carregando...</p>
          ) : (
            <div className="resultado-negativo">
              <h2>Nenhum dado foi encontrado...</h2>
            </div>
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
