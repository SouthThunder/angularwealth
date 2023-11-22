import { Sidebar } from "../Common/Sidebar/Sidebar";
import { Piechart } from "../Common/Piechart/Piechart";
import { FaHome, FaCar } from "react-icons/fa";
import { PiHandbag } from "react-icons/pi";
import { SlNotebook } from "react-icons/sl";

import Button from "../Common/Buttons/Button";

import "./Deudas.css";

export const Deudas = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="dashboard-container">
        <h1 className="title">Deudas</h1>
        <hr />
        <div className="top">
          <div className="top-left">
            <h2>Deudas</h2>
            <Piechart
              inputs={[
                { name: "Deuda", value: 50 },
                { name: "Pagado", value: 50 },
                { name: "Total", value: 100 },
              ]}
            />
            <div className="holder">
              <div className="card">
                <p>Total</p>
                <p>$6000</p>
              </div>
              <div className="card">
                <p>Pagado</p>
                <p>$2000</p>
              </div>
              <div className="card">
                <p>Deuda</p>
                <p>$2000</p>
              </div>
            </div>
          </div>
          <div className="top-right">
            <h2>Prestamos recomendados</h2>
            <div className="holder">
              <div className="item">
                <div className="icon">
                  <FaHome />
                </div>
                <div className="info">
                  <p>Casa</p>
                  <p>Cantidad: $ 12000</p>
                </div>
                <Button text="Aplicar" />
              </div>
              <div className="item">
                <div className="icon">
                  <PiHandbag />
                </div>
                <div className="info">
                  <p>Negocio</p>
                  <p>Cantidad: $ 15000</p>
                </div>
                <Button text="Aplicar" />
              </div>
              <div className="item">
                <div className="icon">
                  <SlNotebook />
                </div>
                <div className="info">
                  <p>Educacion</p>
                  <p>Cantidad: $ 8000</p>
                </div>
                <Button text="Aplicar" />
              </div>
              <div className="item">
                <div className="icon">
                  <FaCar />
                </div>
                <div className="info">
                  <p>Vehículo</p>
                  <p>Cantidad: $ 9000</p>
                </div>
                <Button text="Aplicar" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
