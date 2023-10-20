export default function ValorModulos(props) {
  const result = props.data;

  if (result !== null && result.length > 0) {
    return result.map((item) => {
      return (
        <div className="product-card" key={item.id}>
          <div className="product-info">
            {props.valores.map((campo, index) => {
              const uniqueKey = `${item.id}-${campo}`;
              return (
                <div className="campo-modulo" key={uniqueKey}>
                  <h4>{props.labels[index]}</h4>
                  <h4 className="campos-modulos">{item[campo]}</h4>
                </div>
              );
            })}
            <div className="product-buttons">
              <button className="edit-button">Editar</button>
              <button className="delete-button">Excluir</button>
            </div>
          </div>
        </div>
      );
    });
  } else {
    return <div className="resultado-negativo"><h2>Nenhum dado foi encontrado...</h2></div>;
  }
}
