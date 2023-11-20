import React from "react";
import { Sidebar } from "../Common/Sidebar/Sidebar";
import { Piechart } from "../Common/Piechart/Piechart";
import ItemList from "../Common/Itemlist/Itemlist";
import Button from "../Common/Buttons/Button";
import { AddExpense } from "../Common/AddExpense/AddExpense";
import "./Saldo.css";

export const Saldo = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="dashboard-container">
        <h1 className="title">Saldo</h1>
        <hr />
        <div className="top">
          <GastosIngresos />
          <Piechart />
        </div>
        <div className="bottom">
          <ItemList text='Historial de actividades' />
          <Button text= 'Añadir Gasto'/>
          <AddExpense />
        </div>
      </div>
    </div>
  );
};

export default Saldo;

const GastosIngresos = () => {
  return (
    <div className="gastos-ingresos">
      <div className="holder">
        <h2>Gastos</h2>
        <p className="value">$ 213,068.98</p>
        <p>-12 % esta semana</p>
      </div>
      <div className="holder">
        <h2>Ingresos</h2>
        <p className="value">$ 569,230.03</p>
        <p>+18 % esta semana</p>
      </div>
    </div>
  );
};
