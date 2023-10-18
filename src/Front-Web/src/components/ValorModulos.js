export default function ValorModulos(props) {
  const result = props.data;

  if (result.length >= 1) {
    return result.map((item) => {
      return (
        <div className="product-card" key={item.id}>
          <div className="product-info">
            {props.valores.map((campo, index) => {
              const uniqueKey = `${item.id}-${campo}`;
              return (
                <>
                  <h4 className="campos-modulos" key={uniqueKey}>
                    {item[campo]}
                  </h4>
                  <h4>{props.labels[index]}</h4>
                </>
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
    return <h2>Nenhum dado foi encontrado...</h2>;
  }
}
