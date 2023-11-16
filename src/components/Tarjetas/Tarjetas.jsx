import React from "react";
import { Sidebar } from "../Common/Sidebar/Sidebar";
import  CreditCardUi  from "../Common/CreditCardUI/CreditCardUI";

export const Tarjetas = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="dashboard-container">
        <h1 className="title">Tarjetas</h1>
        <hr />
        <div className="top">
            <CreditCardUi />
        </div>
        <div className="bottom">
          <h2>Ingresos</h2>
          <p className="value">$ 569,230.03</p>
          <p>+18 % esta semana</p>
        </div>
      </div>
    </div>
  );
};
