import React from "react";
import "./Itemlist.css";

function ItemList({ text, items }) {
  const [option, setOption] = React.useState(null);
  console.log(option);
  return (
    <div className="itemlist">
      <h2>{text}</h2>
      <div className="options">
        <p tabIndex="0" onClick={() => setOption(0)} onKeyDown={() => setOption(0)}>Gastos</p>
        <p tabIndex="0" onClick={() => setOption(1)} onKeyDown={() => setOption(1)}>Ingresos</p>
      </div>
      <hr />
      {items && items.length > 0 ? (
        items[option].map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </div>
        ))
      ) : (
        <div className="noData">
          <p>No hay datos</p>
        </div>
      )}
    </div>
  );
}

export default ItemList;
