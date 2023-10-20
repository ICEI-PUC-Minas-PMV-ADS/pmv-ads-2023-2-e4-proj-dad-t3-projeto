import { useEffect, useState } from 'react';
import './Style.css';
import Sidebar from './Sidebar';
import Modal from './components/Modal';
import Backdrop from './components/Backdrop';
import ValorModulos from './components/ValorModulos';
import SeletorData from './components/SeletorData';
import useAxios from './hooks/useAxios';

function RecursosHumanos() {
  const [modalOpen, setModalOpen] = useState(false);
  const date = new Date();
  const [data, setData] = useState([date.getMonth(), date.getFullYear()]);
  const [enplye, setEnplye] = useState(null);//alterar para setRH
  const token = localStorage.getItem('token');
  const { response, loading, error } = useAxios({
    method: 'get',
    url: `Rh/data?Ano=${data[0]}&Mes=${data[1]}`,
    headers: JSON.stringify({
      Authorization: 'Bearer ' + token,
    }),
  });

  useEffect(() => {
    if (response && !error) {
      setEnplye(response);//alterar para setRH
    } else if (error) {
      console.log(error);
      setEnplye(null);//alterar para setRH
    }
  }, [data, response, error]);

  return (
    <div className="main-all">
      {/* Código Sidebar e Modal */}
      <Sidebar />
      {modalOpen && (
        <Modal
          titulo="Cadastrar Funcionário"
          //passar os inputs que o modal terá
          inputs={[
            { name: 'Nome', 
              label: 'Nome do Funcionário', 
              type: 'text' 
            },
            {
              name: 'Cargo',
              label: 'Cargo',
              type: 'text',
            },
            {
              name: 'Setor',
              label: 'Setor',
              type: 'text',
            },
            {
              name: 'Salário',
              label: 'Salário',
              type: 'number',
            },
          ]}
          setModalOpen={setModalOpen}
        />
      )}
      <Backdrop show={modalOpen} closeModal={setModalOpen} />
      <main>
        <div className="main-header">
          <h1 className="main-title">Recursos Humanos</h1>
          <h2 className="main-subtitle">Gerencia de pessoal</h2>
        </div>

        <div className="main-container">
          <div className="page-header">
            <h1 className="main-title2">Funcionários Cadastrados</h1>
            <SeletorData getDate={setData} />
          </div>
          {response ? (
            <ValorModulos
              data={enplye}
              labels={['Nome', 'Cargo', 'Setor', 'Salário']} // Títulos das colunas
              valores={['nome', 'cargo', 'setor', 'salarioBruto']} // Propriedades do objeto
            />
          ) : loading ? (
            <p>Carregando...</p>
          ) : (
            <div className="modulo-vazio">
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
  
  export default RecursosHumanos;