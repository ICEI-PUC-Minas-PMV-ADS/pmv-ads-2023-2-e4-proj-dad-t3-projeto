import { useEffect, useState } from 'react';
import './Style.css';
import Sidebar from './Sidebar';
import Modal from './components/Modal';
import Backdrop from './components/Backdrop';
import ValorModulos from './components/ValorModulos';
import SeletorData from './components/SeletorData';
import useAxios from './hooks/useAxios';

function Despesas() {
  const [modalOpen, setModalOpen] = useState(false);
  //variaveis do seletor de data
  const date = new Date();
  const dataAtual = [date.getFullYear(), date.getMonth() + 1];
  const [data, setData] = useState(dataAtual);
  //variavel que armazena os dados da requisição
  const [cost, setCost] = useState(null);
  const token = localStorage.getItem('token');
  //hook personalizado para requisições
  const { response, loading, error } = useAxios({
    method: 'get',
    url: `Custo/data?Ano=${data[0]}&Mes=${data[1]}`,
    headers: JSON.stringify({
      Authorization: 'Bearer ' + token,
    }),
  });

  useEffect(() => {
    if (response && !error) {
      setCost(response);
    } else if (error) {
      console.log(error);
      setCost(null);
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
      
      {modalOpen && (
        <Modal
          titulo="Adicionar Custo"
          url="Custo"
          data={data}
          editId={editId}
          resetId={setEditId}
          select={true}
          //passar os inputs que o modal terá - name precisa ser exatamente que nem o nome da propriedade do objeto
          inputs={[
            { name: 'nome', label: 'Nome', type: 'text' },
            {
              name: 'valor',
              label: 'Valor',
              type: 'number',
            },
            {
              name: 'observacao',
              label: 'Observação',
              type: 'text',
            },
          ]}
          setModalOpen={setModalOpen}
        />
      )}
      <Backdrop show={modalOpen} closeModal={setModalOpen} />
      <main>
        <div className="main-header">
          <h1 className="main-title">Despesas</h1>
          <h2 className="main-subtitle">Gerencie Suas Despesas</h2>
        </div>

        <div className="main-container">
          <div className="page-header">
            <h1 className="main-title2">Tipos de Despesas</h1>
            <SeletorData getDate={setData} />
          </div>

          {response ? (
            <ValorModulos
              data={cost}
              openModal={setModalOpen}
              setEditData={setEditId}
              url="Custo"
              labels={['Tipo', 'Nome', 'Valor (R$)', 'Observação']} // Títulos das colunas
              valores={['tipoCusto', 'nome', 'valor', 'observacao']} // Propriedades do objeto
              valorSelect={{ 0: 'Fixo', 1: 'Variável' }}
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


export default Despesas;
