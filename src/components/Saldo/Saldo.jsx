import {useEffect, useRef, useState} from "react";
import { Sidebar } from "../Common/Sidebar/Sidebar";
import { Piechart } from "../Common/Piechart/Piechart";
import ItemList from "../Common/Itemlist/Itemlist";
import Button from "../Common/Buttons/Button";
import { AddExpense } from "../Common/AddExpense/AddExpense";
import {useSelector}  from 'react-redux' 
import { getSumOfGastosByMonthAndUserId, getFijoGastosByUserId } from "../../services/gastos";
import "./Saldo.css";

export const Saldo = () => {
  const [showPopup, setShowPopup] = useState(false);
  const user = useSelector(state => state.user)
  const [gastosSum, setGastosSum] = useState(null);
  const [itemList, setItemList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const firstLoad = useRef(true);


  useEffect(() => {
    if (firstLoad.current) {
      Promise.all([
        getSumOfGastosByMonthAndUserId(user.id),
        getFijoGastosByUserId(user.id),
      ])
        .then((results) => {
          setGastosSum(results[0]);
          setItemList(results[1]);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
      firstLoad.current = false;
    }
  }, [gastosSum, itemList]);

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
        <h1 className="title">Saldo</h1>
        <hr />
        <div className="top">
          <GastosIngresos inputs= {gastosSum}/>
          <Piechart inputs={gastosSum}/>
        </div>
        <div className="bottom">
          <ItemList text='Historial de actividades' items={itemList}/>
          <Button text= 'Añadir Gasto' onClick={() => setShowPopup(true)}/>
          {
            showPopup ? <AddExpense visibility={setShowPopup}/> : null
          }
        </div>
      </div>
    </div>
  );
};

export default Saldo;

const GastosIngresos = ({inputs}) => {
  const user = useSelector(state => state.user)

  return (
    <div className="gastos-ingresos">
      <div className="holder">
        <h2>Gastos</h2>
        <p className="value">$ {inputs?.monto_gasto}</p>
        <p>-12 % esta semana</p>
      </div>
      <div className="holder">
        <h2>Ingresos</h2>
        <p className="value">$ {user?.sueldo}</p>
        <p>+18 % esta semana</p>
      </div>
    </div>
  );
};
