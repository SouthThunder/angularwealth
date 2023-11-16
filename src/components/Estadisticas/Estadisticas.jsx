import React from "react";
import "./Estadisticas.css";
import { Sidebar } from "../Common/Sidebar/Sidebar";
import { Piechart } from "../Common/Piechart/Piechart";
import { Linechart } from "../Common/Linechart/Linechart";
import { BarChart } from "../Common/Barchart/Barchart";

function Estadisticas() {
  return (
    <div className="container">
      <Sidebar />
      <div className="estadisticas">
        <h1 className="title">Estadísticas</h1>
        <hr />
        <div className="top">
          <Linechart />
          <Piechart />
        </div>
        <div className="bottom">
          <h2>Tus categorías</h2>
          <BarChart />
        </div>
      </div>
    </div>
  );
}

export default Estadisticas;
