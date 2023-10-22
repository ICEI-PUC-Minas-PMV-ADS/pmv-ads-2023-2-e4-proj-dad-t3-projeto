import { useEffect, useState } from 'react';
import './Style.css';
import Sidebar from './Sidebar';
import Modal from './components/Modal';
import Backdrop from './components/Backdrop';
import ValorModulos from './components/ValorModulos';
import SeletorData from './components/SeletorData';
import useAxios from './hooks/useAxios';

function Estoque() {
  const [modalOpen, setModalOpen] = useState(false);
  //variaveis do seletor de data
  const date = new Date();
  const dataAtual = [date.getFullYear(), date.getMonth() + 1];
  const [data, setData] = useState(dataAtual);
  //variavel que armazena os dados da requisição
  const [products, setProducts] = useState(null);
  const token = localStorage.getItem('token');
  //hook personalizado para requisições
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

  const [editId, setEditId] = useState(null);

  useEffect(() => {
    if (modalOpen === false) {
      setEditId(null);
    }
  }, [modalOpen]);

  return (
    <div className="main-all">
      {/* Código Sidebar e Modal */}
      <Sidebar />
      {modalOpen && (
        <Modal
          titulo="Adicionar Produto"
          url="Estoque"
          data={data}
          editId={editId}
          resetId={setEditId}
          //passar os inputs que o modal terá - name precisa ser exatamente que nem o nome da propriedade do objeto
          inputs={[
            { name: 'nome', label: 'Nome do Produto', type: 'text' },
            {
              name: 'quantidade',
              label: 'Quantidade do Produto',
              type: 'number',
            },
            {
              name: 'preco',
              label: 'Preço do Produto',
              type: 'number',
            },
          ]}
          setModalOpen={setModalOpen}
        />
      )}
      <Backdrop show={modalOpen} closeModal={setModalOpen} />
      <main>
        <div className="main-header">
          <h1 className="main-title">Estoque</h1>
          <h2 className="main-subtitle">Gerencie Seus Produtos</h2>
        </div>

        <div className="main-container">
          <div className="page-header">
            <h1 className="main-title2">Produtos Cadastrados</h1>
            <SeletorData getDate={setData} />
          </div>
          {response ? (
            <ValorModulos
              data={products}
              openModal={setModalOpen}
              setEditData={setEditId}
              url="Estoque"
              labels={['Nome', 'Quantidade', 'Preço (R$)', 'Valor Total (R$)']} // Títulos das colunas
              valores={['nome', 'quantidade', 'preco', 'valorTotal']} // Propriedades do objeto
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

export default Estoque;
