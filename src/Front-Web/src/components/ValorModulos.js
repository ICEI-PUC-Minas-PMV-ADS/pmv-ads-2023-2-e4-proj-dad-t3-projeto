export default function ValorModulos(props) {
  const result = props.data;

  if (result !== null && result.length > 0) {
    return (
      <div className="valor-modulos">
        <table className="table">
          <thead>
            <tr className="labels-cabecalho">
              {props.labels.map((label, index) => (
                <th key={index}>{label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {result.map((item) => (
              <tr key={item.id} id={item.id}>
                {props.valores.map((campo, index) => {
                  const uniqueKey = `${item.id}-${campo}`;
                  return <td key={uniqueKey}>{item[campo]}</td>;
                })}
                <td>
                  <div className="table-buttons">
                    <button
                      className="edit-button"
                      onClick={(e) => {
                        props.setEditData(item.id);
                        props.openModal((prev) => !prev);
                      }}
                    >
                      Editar
                    </button>
                    <button className="delete-button">Excluir</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
      <div className="resultado-negativo">
        <h2>Nenhum dado foi encontrado...</h2>
      </div>
    );
  }
}
