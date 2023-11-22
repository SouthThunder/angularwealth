import { Sidebar } from "../Common/Sidebar/Sidebar";
import { Piechart } from "../Common/Piechart/Piechart";
import { FaHome, FaCar } from "react-icons/fa";
import { PiHandbag } from "react-icons/pi";
import { SlNotebook } from "react-icons/sl";

import Button from "../Common/Buttons/Button";

import "./Inversiones.css";

export const Inversiones = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="dashboard-container">
        <h1 className="title">Inversiones</h1>
        <hr />
        <div className="top">
          <div className="top-left">
            <h2>Inversiones</h2>
            <div className="holder">
              <div className="card">
                <p>Inversión Total</p>
                <p>$6000</p>
              </div>
              <div className="card">
                <p>Valor del Portafolio</p>
                <p>$2000</p>
              </div>
              <div className="card">
                <p>Reembolso</p>
                <p>$2000</p>
              </div>
            </div>
            <Piechart
              inputs={[
                { name: "Inversión Total", value: 50 },
                { name: "Valor del Portafolio", value: 50 },
                { name: "Reembolso", value: 100 },
              ]}
            />
          </div>
          <div className="top-right">
            <h2>Inversiones recomendadas</h2>
            <div className="holder">
              <div className="item">
                <div className="icon">
                  <FaHome />
                </div>
                <div className="info">
                  <p>Acciones banco Popular</p>
                  <p>Cantidad: $ 12000</p>
                </div>
                <Button text="Ver" />
              </div>
              <div className="item">
                <div className="icon">
                  <PiHandbag />
                </div>
                <div className="info">
                  <p>Finca Raiz</p>
                  <p>Cantidad: $ 15000</p>
                </div>
                <Button text="Ver" />
              </div>
              <div className="item">
                <div className="icon">
                  <SlNotebook />
                </div>
                <div className="info">
                  <p>Acciones BBVA</p>
                  <p>Cantidad: $ 8000</p>
                </div>
                <Button text="Ver" />
              </div>
            </div>
          </div>
        </div>
        {/* Nueva sección de inversiones */}
        <div className="bottom">
          <h2>Inversiones</h2>
          <div className="investment-container">
            {/* Primera inversión */}
            <div className="investment">
              <p>Nombre de la inversión: Acciones XYZ</p>
              <p>Valor del Portafolio: $5000</p>
              <p>Crecimiento: 15%</p>
              <p>Inversión: $3000</p>
              <p>Ganancia: $2000</p>
              {/* Gráfica de ejemplo */}
              <div className="example-chart">
                <div className="line-chart">Gráfica Lineal</div>
              </div>
            </div>

            {/* Segunda inversión */}
            <div className="investment">
              <p>Nombre de la inversión: Bonos ABC</p>
              <p>Valor del Portafolio: $8000</p>
              <p>Crecimiento: -5%</p>
              <p>Inversión: $5000</p>
              <p>Ganancia: -$1000</p>
              {/* Gráfica lineal de ejemplo */}
              <div className="example-chart">
                <div className="line-chart">Otra Gráfica Lineal</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};