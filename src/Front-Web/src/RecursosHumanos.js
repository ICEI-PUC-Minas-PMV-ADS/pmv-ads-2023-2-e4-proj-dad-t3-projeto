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
  //variaveis do seletor de data
  const date = new Date();
  const dataAtual = [date.getFullYear(), date.getMonth() + 1];
  const [data, setData] = useState(dataAtual);
  //variavel que armazena os dados da requisição
  const [employe, setEmploye] = useState(null); //alterar para setRH
  const token = localStorage.getItem('token');
  //hook personalizado para requisições
  const { response, loading, error } = useAxios({
    method: 'get',
    url: `Rh/data?Ano=${data[0]}&Mes=${data[1]}`,
    headers: JSON.stringify({
      Authorization: 'Bearer ' + token,
    }),
  });

  useEffect(() => {
    if (response && !error) {
      setEmploye(response); //alterar para setRH
    } else if (error) {
      console.log(error);
      setEmploye(null); //alterar para setRH
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
          titulo="Cadastrar Funcionário"
          url="Rh"
          data={data}
          editId={editId}
          resetId={setEditId}
          //passar os inputs que o modal terá - name precisa ser exatamente que nem o nome da propriedade do objeto
          inputs={[
            { name: 'nome', label: 'Nome do Funcionário', type: 'text' },
            {
              name: 'cargo',
              label: 'Cargo',
              type: 'text',
            },
            {
              name: 'setor',
              label: 'Setor',
              type: 'text',
            },
            {
              name: 'salarioBruto',
              label: 'Salário Bruto',
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
              data={employe}
              openModal={setModalOpen}
              setEditData={setEditId}
              url="Rh"
              labels={[
                'Nome',
                'Cargo',
                'Setor',
                'Salário Bruto',
                'Salário Líquido',
              ]} // Títulos das colunas
              valores={[
                'nome',
                'cargo',
                'setor',
                'salarioBruto',
                'salarioLiquido',
              ]} // Propriedades do objeto
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

export default RecursosHumanos;
