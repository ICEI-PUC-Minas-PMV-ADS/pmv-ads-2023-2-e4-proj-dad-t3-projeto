import { useState, useEffect } from 'react';
import axios from 'axios';
import useAxios from './hooks/useAxios';
import Backdrop from './components/Backdrop';

export default function Admin() {
  const token = localStorage.getItem('token');
  const [users, setUsers] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteItems, setDeleteItems] = useState([]);
  const { response, loading, error } = useAxios({
    method: 'get',
    url: `User`,
    headers: JSON.stringify({
      Authorization: 'Bearer ' + token,
    }),
  });

  useEffect(() => {
    if (response && !error) {
      setUsers(response);
    } else if (error) {
      console.log(error);
      setUsers(null);
    }
  }, [response, error]);

  const handleDeleteUser = (id) => {
    if (deleteItems.includes(id)) {
      axios.delete(`https://localhost:7162/api/User/${id}`, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
      setDeleteItems((prev) => prev.filter((item) => item !== id));
      window.location.reload();
    } else {
      setDeleteItems((prev) => [...prev, id]);
    }
  };

  const handleCreateUser = (e) => {
    const nome = e.target.nome.value;
    const email = e.target.email.value;
    const senha = e.target.senha.value;
    const perfil = e.target.perfil.value;

    const body = {
      nome: nome,
      email: email,
      senha: senha,
      perfil: +perfil,
    };

    console.log(body);

    axios
      .post('https://localhost:7162/api/User', body, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      })
      .then((res) => {
        if (res.ok) {
          setModalOpen((prev) => !prev);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const modalAdmin = (
    <div className="modal-admin">
      <form className="form-admin" onSubmit={handleCreateUser}>
        <label htmlFor="nome">Nome</label>
        <input type="text" id="nome" name="nome" />
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" />
        <label htmlFor="senha">Senha</label>
        <input type="password" id="senha" name="senha" />
        <label htmlFor="perfil">Perfil</label>
        <select name="perfil" id="perfil">
          <option value="0">Usuario</option>
          <option value="1">AdminRh</option>
          <option value="2">AdminEstoque</option>
          <option value="3">AdminGeral</option>
          <option value="4">AdminCusto</option>
          <option value="5">AdminSistema</option>
        </select>
        <button className="add-button">Salvar</button>
      </form>
    </div>
  );

  return (
    <>
      {modalOpen && modalAdmin}
      <Backdrop show={modalOpen} closeModal={setModalOpen} />
      {users ? (
        <div className="main-admin">
          <h1>Usuários</h1>
          <div className="add-button-admin">
            <button
              className="add-button"
              onClick={() => {
                setModalOpen((prev) => !prev);
              }}
            >
              Adicionar
            </button>
          </div>
          <div className="main-container">
            <table className="tabela-admin">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Email</th>
                  <th>Tipo Perfil</th>
                  <th>Deletar</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.nome}</td>
                    <td>{user.email}</td>
                    <td>{user.perfil}</td>
                    <td>
                      <button
                        className={`delete-button admin-button`}
                        onClick={() => {
                          handleDeleteUser(user.id);
                        }}
                      >
                        {deleteItems.includes(user.id)
                          ? 'Tem Certeza?'
                          : 'Deletar'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="main-admin">
          <h3 style={{ color: 'wine' }}>Sem Permissão</h3>
        </div>
      )}
    </>
  );
}
