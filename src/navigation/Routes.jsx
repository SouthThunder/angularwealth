// Routes.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../components/Home/Home";
import { Login } from "../components/Login/Login";
import { Register } from "../components/Register/Register";
import { Saldo } from "../components/Saldo/Saldo";
import { Estadisticas } from "../components/Estadisticas/Estadisticas";
import { Tarjetas } from "../components/Tarjetas/Tarjetas";
import PrivateRoutes from "../utils/PrivateRoute";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/inicio" element={<Saldo />} />
          <Route path="/estadisticas" element={<Estadisticas />} />
          <Route path="/tarjetas" element={<Tarjetas />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
