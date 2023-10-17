import { useEffect, useState } from 'react';
import axios from 'axios';
import './Style.css';
import Sidebar from './Sidebar';
import Modal from './components/Modal';
import Backdrop from './components/Backdrop';
import ValorModulos from './components/ValorModulos';
import SeletorData from './components/SeletorData';

function Estoque() {
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
          `https://localhost:7162/api/Estoque/data?Ano=${data[0]}&Mes=${data[1]}`
        )
        .then((response) => {
          setProducts(response.data);
          setIsLoaded(false);
        })
        .catch((error) => {
          console.log(error.response.status);
          console.log(error);
          setIsLoaded(false);
        });
    };
    fetchData();
  }, [data]);

  return (
    <div className="Estoque">
      {/* Código Sidebar e Modal */}
      <Sidebar />
      {modalOpen && (
        <Modal
          titulo="Adicionar Produto"
          //passar os inputs que o modal terá
          inputs={[
            { name: 'Nome', label: 'Nome do Produto', type: 'text' },
            {
              name: 'Quantidade',
              label: 'Quantidade do Produto',
              type: 'number',
            },
            {
              name: 'Preço',
              label: 'Preço do Produto',
              type: 'number',
            },
          ]}
          setModalOpen={setModalOpen}
        />
      )}
      <Backdrop show={modalOpen} closeModal={setModalOpen} />
      <main>
        <div className="estoque-header">
          <h1 className="estoque-title">Estoque</h1>
          <h2 className="estoque-subtitle">Gerencie Seus Produtos</h2>
        </div>

        <div className="estoque-container">
          <div className="page-header">
            <h1 className="estoque-title2">Produtos Cadastrados</h1>
            <SeletorData getDate={setData} />
          </div>
          {products.produtos ? (
            <ValorModulos
              data={products.produtos}
              labels={['Quantidade', 'Valor']} // Título das colunas
              valores={['nome', 'quantidade', 'preco']} // Valores do objeto
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

export default Estoque;
