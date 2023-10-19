import { useEffect, useState } from 'react';
import axios from 'axios';
import './Style.css';
import Sidebar from './Sidebar';
import Modal from './components/Modal';
import Backdrop from './components/Backdrop';
import ValorModulos from './components/ValorModulos';
import SeletorData from './components/SeletorData';

function Faturamento() {
  const [modalOpen, setModalOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const date = new Date();
  const [data, setData] = useState([date.getMonth(), date.getFullYear()]);

  useEffect(() => {
    setIsLoaded(true);

    const fetchData = async () => {
      //Lógica por fazer a requisição para a API... Sem questão de token integrada por agora...
      const response = await axios
        .get(
          `https://localhost:7162/api/Faturamento/data?Ano=${data[0]}&Mes=${data[1]}`
        )
        .then((response) => {
          setProducts(response.data);
          setIsLoaded(false);
        })
        .catch((error) => {
          console.log(error);
          setIsLoaded(false);
        });
    };
    fetchData();
  }, [data]);
  
  return (
    <div className="faturamento">
      <Sidebar />
      {modalOpen && (
        <Modal
          titulo="Adicionar Compra"
          //passar os inputs que o modal terá
          inputs={[
            { name: 'ClientesAtendidos', label: 'Clientes Atendidos', type: 'number' },
            {
              name: 'NumeroVendas', label: 'Número de Vendas', type: 'number',
            },
            {
              name: 'numeroItensVendidos', label: 'Quantidade Vendida', type: 'number',
            },
            {
              name: 'valorFaturadoMes', label: 'Valor Faturado', type: 'number',
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
          {products.produtos ? (
            <ValorModulos
              data={products.produtos}
              labels={['Clientes Atendidos', 'Número de Vendas', 'Taxa de Conversão', 'Itens Vendidos', 'Valor Médio', 'Valor total Mês']} // Título das colunas
              valores={['clientesAtendidos', 'numeroVendas', 'taxaConversao','numeroItensVendidos','precoMedioProduto','valorFaturadoMes']} // Valores do objeto
            />
          ) : (
            isLoaded && <p>Carregando...</p>
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