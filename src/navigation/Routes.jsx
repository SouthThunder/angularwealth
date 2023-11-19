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
import Cookie from "js-cookie";

const Routing = () => {
  const token = Cookie.get("token");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={token? <Saldo/>: <Home />} />
        <Route path="/login" element={token? <Saldo/>:<Login />} />
        <Route path="/register" element={token? <Saldo/>:<Register />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Saldo />} />
          <Route path="/estadisticas" element={<Estadisticas />} />
          <Route path="/tarjetas" element={<Tarjetas />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
