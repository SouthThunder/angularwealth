// Routes.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from "../components/Home/Home";
import {Login} from '../components/Login/Login';
import {Register} from '../components/Register/Register';
import { Saldo } from "../components/Saldo/Saldo";
import Estadisticas from "../components/Estadisticas/Estadisticas";

// const PrivateRoute = ({ component: Component, authenticated }) => (
//   <Route
//     render={(props) =>
//       authenticated ? (
//         <Component {...props} />
//       ) : (
//         <Navigate to="/login" />
//       )
//     }
//   />
// );

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path="/inicio" element={<Saldo/>}/>
        <Route path="/estadisticas" element={<Estadisticas/>}/>
        {/* <PrivateRoute
          path="/debt"
          component={Saldo}
          authenticated={authenticated}
        /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
