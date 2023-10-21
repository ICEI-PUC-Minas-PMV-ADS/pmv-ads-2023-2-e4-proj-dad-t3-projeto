import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

axios.defaults.baseURL = 'https://localhost:7162/api/';

function Modal(props) {
  const data = props.data;
  const token = localStorage.getItem('token');
  const [inputValues, setInputValues] = useState({
    mesLancamento: data[1],
    anoLancamento: data[0],
  });
  //Loop pelos inputs passados por props
  const inputsRender = props.inputs.map((input) => {
    return (
      <div>
        <label htmlFor={input.name} className="modal-labels">
          {input.label}
        </label>
        <input
          required
          type={input.type}
          id={input.name}
          name={input.name}
          onChange={(e) => {
            if (input.type === 'number') {
              setInputValues({
                ...inputValues,
                [input.name]: Number(e.target.value),
              });
            } else {
              setInputValues({
                ...inputValues,
                [input.name]: e.target.value,
              });
            }
          }}
        />
      </div>
    );
  });

  const postDataHandler = (e) => {
    setInputValues({
      ...inputValues,
      anoLancamento: Number(data[0]),
      mesLancamento: Number(data[1]),
    });
    console.log(inputValues);
    axios
      .post(`${props.url}`, inputValues, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="modal-container">
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
      <h3>{props.titulo}</h3>
      <form onSubmit={postDataHandler} className="form-modal">
        <div className="modal-inputs">{inputsRender}</div>
        <div>
          <button className="add-button" type="submit">
            Adicionar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Modal;
