// Routes.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";


const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" component={Home} />
        {/* <Route path="/products" component={ProductList} />
        <Route path="/products/:id" component={ProductDetail} /> */}
        {/* Otras rutas aquí */}
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
