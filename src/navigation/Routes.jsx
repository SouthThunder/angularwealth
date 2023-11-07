// Routes.js
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from "../components/Home/Home";

const Routing = () => {
  useEffect(() => {
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
