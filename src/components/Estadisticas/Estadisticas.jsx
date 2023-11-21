import { useEffect, useRef, useState } from "react";
import { Sidebar } from "../Common/Sidebar/Sidebar";
import { Piechart } from "../Common/Piechart/Piechart";
import { Linechart } from "../Common/Linechart/Linechart";
import { BarChart } from "../Common/Barchart/Barchart";
import {
  getGastosByUserIdAndCurrentMonth,
  getPredictByIA,
} from "../../services/gastos";
import { useSelector } from "react-redux";

export const Estadisticas = () => {
  const user = useSelector((state) => state.user);
  const [inputs, setInputs] = useState(null);
  const [budget, setBudget] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const firstLoad = useRef(true);

  useEffect(() => {
    if (firstLoad.current) {
      Promise.all([
        getGastosByUserIdAndCurrentMonth(user.id),
        getPredictByIA(user.id),
      ])
        .then((results) => {
          setInputs(() => {
            return results[0].map((gasto) => {
              return {
                name: gasto.descripcion_gasto,
                value: gasto.monto_gasto,
              };
            });
          });
          setBudget(results[1]);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
      firstLoad.current = false;
    }
  }, [inputs, budget]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error al cargar los datos</p>;
  }

  return (
    <div className="container">
      <Sidebar />
      <div className="dashboard-container">
        <h1 className="title">Estadísticas</h1>
        <hr />
        <div className="top">
          <Linechart data={budget}/>
          <Piechart inputs={inputs} />
        </div>
        <div className="bottom">
          <h2>Tus categorías</h2>
          <BarChart />
        </div>
      </div>
    </div>
  );
};
