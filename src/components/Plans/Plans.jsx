import React from "react";
import { Sidebar } from "../Common/Sidebar/Sidebar";
import Button from "../Common/Buttons/Button";
import "./Plans.css";

export const Plans = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="dashboard-container">
        <h1 className="title">Planes Financieros</h1>
        <hr />

        <div className="holder">
          <div className="cards">
            <div className="title">
              <h3>Plan gratis</h3>
              <hr />
            </div>
            <div className="price">
              <h1>$ 0</h1>
              <p>Mensuales</p>
              <hr />
            </div>
            <div className="info">
              <h3>Ideal para hogares</h3>
              <ul>
                <li>
                  <p>Acceso básico</p>
                </li>
                <li>
                  <p>Educación financiera</p>
                </li>
                <li>
                  <p>Atención al cliente</p>
                </li>
              </ul>
            </div>

            <Button text="Iniciar Ahora" />
          </div>
          <div className="cards">
            <div className="title">
              <h3>Plan Estándar</h3>
              <hr />
            </div>
            <div className="price">
              <h1>$ 25,000</h1>
              <p>Mensuales</p>
              <hr />
            </div>
            <div className="info">
              <h3>Ve un poco más allá</h3>
              <ul>
                <li>
                  <p>Caracteristicas premium</p>
                </li>
                <li>
                  <p>Sincronización con múltiples cuentas Bancarias</p>
                </li>
                <li>
                  <p>Alertas y recordatorios personalizados</p>
                </li>
                <li>
                  <p>Acceso prioritario al Soporte</p>
                </li>
              </ul>
            </div>

            <Button text="Iniciar Ahora" />
          </div>
          <div className="cards">
            <div className="title">
              <h3>Plan Empresarial</h3>
              <hr />
            </div>
            <div className="price">
              <h1>$ 75,000</h1>
              <p>Mensuales</p>
              <hr />
            </div>
            <div className="info">
              <h3>Libera a tu empresa de las finanzas</h3>
              <ul>
                <li>
                  <p>Gestión de gastos para empresas</p>
                </li>
                <li>
                  <p>Seguridad avanzada</p>
                </li>
                <li>
                  <p>Personalización de marca</p>
                </li>
                <li>
                  <p>Capacitación y soporte empresarial</p>
                </li>
              </ul>
            </div>

            <Button text="Iniciar Ahora" />
          </div>
        </div>
        <div className="data">
          <ul>
            <li>
              <p>
                <p>Caracteristicas premium</p>
                Desbloquea características adicionales, como la categorización
                automática de gastos, generación de informes detallados y
                análisis de tendencias financieras.
              </p>
            </li>
            <li>
              <p>
                <p>Sincronización con Múltiples Cuentas Bancarias:</p>
                Permite a los usuarios vincular varias cuentas bancarias y de
                inversión para una vista consolidada de su situación financiera.
              </p>
            </li>
            <li>
              <p>
                <p>Alertas y Recordatorios Personalizados:</p>
                Configura alertas de gastos, recordatorios de pagos y
                notificaciones personalizadas.
              </p>
            </li>
            <li>
              <p>
                <p>Acceso Prioritario al Soporte:</p>
                Ofrece un servicio de atención al cliente más rápido o un tiempo
                de respuesta garantizado.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
