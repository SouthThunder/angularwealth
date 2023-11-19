import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../components/Home/Home";
import { Login } from "../components/Login/Login";
import { Register } from "../components/Register/Register";
import { Saldo } from "../components/Saldo/Saldo";
import { Estadisticas } from "../components/Estadisticas/Estadisticas";
import { Tarjetas } from "../components/Tarjetas/Tarjetas";
import PrivateRoutes from "../utils/PrivateRoute";
import Cookie from "js-cookie";
import { authToken } from "../services/users";

const Routing = () => {
  const [auth, setAuth] = useState(false);
  const token = Cookie.get("token");
  const verifyToken = async () => {
    const res = await authToken(token);
    if (res?.status === 200) {
      console.log(res.data)
      setAuth(true);
    } else {
      setAuth(false);
    }
  };

  useEffect(() => {
    if(token){
      verifyToken();
    }
  }, [token]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={auth ? <Saldo /> : <Home />} />
        <Route path="/login" element={auth ? <Saldo /> : <Login />} />
        <Route path="/register" element={auth ? <Saldo /> : <Register />} />
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
