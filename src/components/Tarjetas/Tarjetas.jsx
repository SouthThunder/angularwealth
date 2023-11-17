import React from "react";
import { Sidebar } from "../Common/Sidebar/Sidebar";
import CreditCardUi from "../Common/CreditCardUI/CreditCardUI";
import ItemList from "../Common/Itemlist/Itemlist";
import List from "../Common/TipoCambio/Tipocambio";

export const Tarjetas = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="dashboard-container">
        <h1 className="title">Tarjetas</h1>
        <hr />
        <div className="top">
          <div className="card">
            <CreditCardUi />
          </div>
        <ItemList/>
        </div>
        <div className="bottom">
          <List />
        </div>
      </div>
    </div>
  );
};
