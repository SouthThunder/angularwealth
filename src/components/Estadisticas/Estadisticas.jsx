import React from "react";
import "./Estadisticas.css";
import { Sidebar } from "../Common/Sidebar/Sidebar";
import { Piechart } from "../Common/Piechart/Piechart";
import { Linechart } from "../Common/Linechart/Linechart";

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
      </div>
    </div>
  );
}

export default Estadisticas;
