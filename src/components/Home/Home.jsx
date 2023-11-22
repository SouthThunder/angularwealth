import React, { useEffect } from "react";
import Button from "../Common/Buttons/Button";
import Header from "../Common/Header/Header";
import Footer from "../Common/Footer/Footer";
import asesoramientoImage from "../../assets/img/asesoramiento.jpg";
import finanzasImage from "../../assets/img/finanzas.webp";
import roadImage from "../../assets/img/Road.png";
import "./Home.css";

export const Home = () => {
  useEffect(() => {}, []);
  return (
    <>
      <Header />
      <div className="home">
        <div className="n1">
          <div className="container">
            <h1 className="first-header">Tu camino hacia un futuro sólido y próspero</h1>
            <p className="first-paragraph">
              En Angular Wealth te ayudamos a tomar las mejores decisiones de
              inversión para que puedas alcanzar tus metas financieras.
            </p>
            <Button text="Más Información" />
          </div>
        </div>
        <div className="n1">
          <div className="container">
            <div className="left">
              <h1>Utiliza nuestros servicios financieros</h1>
              <p>
                Consejos personalizados y recursos educativos para un fácil
                acceso a una variedad de servicios financieros, incluyendo
                inversiones, ahorro y gestión de deudas.
              </p>
            </div>
            <div className="right">
              <img
                src={asesoramientoImage}
                alt=""
              />
            </div>
          </div>
          <div className="container">
            <div className="left">
              <img
                src={roadImage}
                alt=""
              />
            </div>
            <div className="right">
              <h1>Obtén una orientación personalizada </h1>
              <p>
                Orientación personalizada según el estilo de vida y las metas de
                cada cliente, dando recomendaciones precisas de gastos e
                inversiones que permiten administrar sus ingresos y gastos de
                manera eficiente.
              </p>
            </div>
          </div>
        </div>
        <div className="n1">
          <div className="container">
            <div className="left">
              <h1>Datos interactivos de tus finanzas</h1>
              <p>
                Estadísticas y graficas que te ayudan a planificar el mes según
                ingresos, estrategias de ahorro, organización por categorías,
                que ayudan a reflejar tus gastos y deudas.
              </p>
            </div>
            <div className="right">
              <img
                src={finanzasImage}
                alt=""
                style={{objectFit: "contain"}}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
