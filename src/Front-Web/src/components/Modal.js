import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

axios.defaults.baseURL = 'https://localhost:7162/api/';

function Modal(props) {
  const inputs = props.inputs;
  const data = props.data;
  const token = localStorage.getItem('token');
  const [inputValues, setInputValues] = useState({
    mesLancamento: data[1],
    anoLancamento: data[0],
  });
  const itemId = props.editId; //id do item que será editado, caso seja passado por props
  const [editData, setEditData] = useState(null); //retorno da requisição get para o item que será editado
  const hasSelect = props.select;
  const [selectValue, setSelectValue] = useState(0);

  useEffect(() => {
    //Caso esteja no modo de edição, faz uma requisição get para o item que será editado
    if (itemId !== null) {
      axios
        .get(`${props.url}/${itemId}`, {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        })
        .then((res) => {
          setEditData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [itemId]);

  //Loop pelos inputs passados por props
  const inputsRender = inputs.map((input) => {
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
          {...(editData && { defaultValue: editData[input.name] })} //Caso esteja no modo de edição, o valor do input é recuperado
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

  const putDataHandler = (e) => {
    e.preventDefault();
    let permission = true;
    const putEditData = { ...editData };

    Object.keys(editData).forEach((item) => {
      if (inputValues[item] !== undefined) {
        putEditData[item] = inputValues[item];
      }
    });

    putEditData.anoLancamento = Number(putEditData.anoLancamento);
    putEditData.mesLancamento = Number(putEditData.mesLancamento);

    axios
      .put(`${props.url}/${itemId}`, putEditData, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        if (
          (err.response && err.response.status === 401) ||
          err.response.status === 403
        ) {
          console.log('AAAAAAAAAAAAAAAAAAAAAAAAA');
          permission = false;
          console.log(permission);
          alert('Você não possui permissão para realizar esta tarefa');
        }
      })
      .finally(() => {
        if (permission) {
          window.location.reload();
        }
      });
  };

  const postDataHandler = (e) => {
    e.preventDefault();
    let permission = true;
    const finalValue = { ...inputValues, tipoCusto: selectValue };
    setInputValues({
      ...inputValues,
      anoLancamento: Number(data[0]),
      mesLancamento: Number(data[1]),
    });
    axios
      .post(`${props.url}`, hasSelect ? finalValue : inputValues, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        if (
          (err.response && err.response.status === 401) ||
          err.response.status === 403
        ) {
          console.log('AAAAAAAAAAAAAAAAAAAAAAAAA');
          permission = false;
          console.log(permission);
          alert('Você não possui permissão para realizar esta tarefa');
        }
      })
      .finally(() => {
        if (permission) {
          window.location.reload();
        }
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
      <form
        onSubmit={itemId ? putDataHandler : postDataHandler}
        className="form-modal"
      >
        <div className="modal-inputs">
          {hasSelect && (
            <select
              onChange={(e) => {
                setSelectValue(Number(e.target.value));
              }}
            >
              <option value={0}>Fixo</option>
              <option value={1}>Variável</option>
            </select>
          )}
          {inputsRender}
        </div>
        <div>
          <button className="add-button" type="submit">
            {itemId ? 'Atualizar' : 'Adicionar'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Modal;
