import React from "react";
import {
  FaHome,
  FaDollarSign,
  FaCreditCard,
  FaUserCircle,
} from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { FiHelpCircle, FiBarChart2 } from "react-icons/fi";
import { BsBell, BsFolder } from "react-icons/bs";
import { MdShowChart } from "react-icons/md";

import "./Sidebar.css";
import Button from "../Buttons/Button";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <h1>Angular Wealth</h1>
        <img src="./companyLogo/angularwealth.png" alt="" />
      </div>
      <div className="user">
        <FaUserCircle />
        <h3>Nombre de Usuario</h3>
        <BsBell />
      </div>
      <div className="section">
        <h4>Mis Datos</h4>
        <ul>
          <li>
            <FaHome />
            <Button text="Inicio"> </Button>
          </li>
          <li>
            <FaDollarSign />
            <Button text="Deudas" />
          </li>
          <li>
            <FiBarChart2 />
            <Button text="Estadisticas" />
          </li>
          <li>
            <FaCreditCard />
            <Button text="Tarjetas" />
          </li>
        </ul>
      </div>
      <hr />
      <div className="section">
        <h4>Oportunidades</h4>
        <ul>
          <li>
          <MdShowChart/>
            <Button text="Inversiones" />
          </li>
        </ul>
      </div>
      <hr />
      <div className="section">
        <h4>Categorías</h4>
        <ul>
          <li>
          <BsFolder/>
            <Button text="Item 1" />
          </li>
          <li>
          <BsFolder/>
            <Button text="Item 2" />
          </li>
        </ul>
      </div>
      <hr />
      <div className="section">
        <ul>
          <li>
            <FaGear />
            <Button text="Configuracion" />
          </li>
          <li>
            <FiHelpCircle />
            <Button text="Ayuda" />
          </li>
        </ul>
      </div>
    </div>
  );
};
