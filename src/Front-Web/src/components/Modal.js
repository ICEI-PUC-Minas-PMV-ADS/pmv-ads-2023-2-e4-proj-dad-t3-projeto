import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function Modal(props) {
  //Loop pelos inputs passados por props
  const inputs = props.inputs.map((input) => {
    return (
      <div>
        <label htmlFor={input.name} className="modal-labels">
          {input.label}
        </label>
        <input type={input.type} id={input.name} name={input.name} />
      </div>
    );
  });
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
      <div className="modal-inputs">{inputs}</div>
      <div>
        <button className="add-button">Adicionar</button>
      </div>
    </div>
  );
}

export default Modal;
