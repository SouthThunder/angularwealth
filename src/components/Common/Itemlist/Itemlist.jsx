import { useState } from "react";
import "./Itemlist.css";

function ItemList({ text, items }) {
  const [option, setOption] = useState(null);
  console.log(items)
  return (
    <div className="itemlist">
      <h2>{text}</h2>
      <div className="options">
        <p tabIndex="0" onClick={() => setOption(0)} onKeyDown={() => setOption(0)}>Gastos</p>
        <p tabIndex="0" onClick={() => setOption(1)} onKeyDown={() => setOption(1)}>Ingresos</p>
      </div>
      <hr />
      {items && items.length > 0 ? (
        items.map((item) => (
          <div key={item.id_gasto} className="listItem">
            <div className="item">
              <div className="icon"></div>
            </div>
            <div className="item">
              <h2>{item.descripcion_gasto}</h2>
            </div>
            <div className="item">
              <p>{item.monto_gasto}</p>
            </div>
            <div className="item">
              <p>{item.fecha_gasto}</p>
            </div>
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
