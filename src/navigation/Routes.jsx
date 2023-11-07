// Routes.js
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from "../components/Home/Home";
import {Login} from '../components/Login/Login';

const Routing = () => {
  useEffect(() => {
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
