import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

axios.defaults.baseURL = 'https://localhost:7162/api/';

export default function ModalExcluir(props) {
  const itemId = props.itemId;
  const url = props.url;
  const token = localStorage.getItem('token');

  const deleteDataHandler = () => {
    axios
      .delete(`${url}/${itemId}`, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then((res) => {
        console.log(res);
        props.setModalOpen((prev) => !prev);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="modal-container-fechar">
      {
        <div className="fecharModal">
          <FontAwesomeIcon
            icon={faXmark}
            size="lg"
            style={{ color: 'FF0000 ', cursor: 'pointer' }}
            onClick={() => {
              props.setModalOpen((prev) => !prev);
            }}
          />
        </div>
      }
      <h3>Tem certeza?</h3>
      <div className="modal-inputs"></div>
      <div className="buttons-modal-fechar">
        <button
          className="add-button"
          type="submit"
          onClick={() => {
            props.setModalOpen((prev) => !prev);
          }}
        >
          Não
        </button>
        <button
          className="add-button"
          type="submit"
          onClick={deleteDataHandler}
        >
          Sim
        </button>
      </div>
    </div>
  );
}
