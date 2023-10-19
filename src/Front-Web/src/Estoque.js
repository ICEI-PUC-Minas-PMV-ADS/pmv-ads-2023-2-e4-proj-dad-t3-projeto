import { useEffect, useState } from 'react';
import axios from 'axios';
import './Style.css';
import Sidebar from './Sidebar';
import Modal from './components/Modal';
import Backdrop from './components/Backdrop';
import ValorModulos from './components/ValorModulos';
import SeletorData from './components/SeletorData';
import useAxios from './hooks/useAxios';

function Estoque() {
  const [modalOpen, setModalOpen] = useState(false);
  const date = new Date();
  const [data, setData] = useState([date.getMonth(), date.getFullYear()]);
  const [products, setProducts] = useState(null);
  const token = localStorage.getItem('token');
  const { response, loading, error } = useAxios({
    method: 'get',
    url: `Estoque/data?Ano=${data[0]}&Mes=${data[1]}`,
    headers: JSON.stringify({
      Authorization: 'Bearer ' + token,
    }),
  });

  useEffect(() => {
    if (response && !error) {
      setProducts(response.produtos);
    } else if (error) {
      console.log(error);
      setProducts(null);
    }
  }, [data, response, error]);

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
          {response ? (
            <ValorModulos
              data={products}
              labels={['Nome', 'Quantidade', 'Preço']} // Títulos das colunas
              valores={['nome', 'quantidade', 'preco']} // Propriedades do objeto
            />
          ) : loading ? (
            <p>Carregando...</p>
          ) : (
            <h2>Nenhum dado foi encontrado...</h2>
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
