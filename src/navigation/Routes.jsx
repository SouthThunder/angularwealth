import { useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../components/Home/Home";
import { Login } from "../components/Login/Login";
import { Register } from "../components/Register/Register";
import { Saldo } from "../components/Saldo/Saldo";
import { Estadisticas } from "../components/Estadisticas/Estadisticas";
import { Tarjetas } from "../components/Tarjetas/Tarjetas";
import { Plans } from "../components/Plans/Plans";
import PrivateRoutes from "../utils/PrivateRoute";
import Cookie from "js-cookie";
import { authToken } from "../services/users";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";

const Routing = () => {
  const [auth, setAuth] = useState(false);
  const firstLoad = useRef(true)
  const dispatch = useDispatch();

  const verifyToken = async () => {
    const res = await authToken(Cookie.get("token"));
    if (res?.status === 200) {
      dispatch(login(res.data));
      setAuth(true);
    } else {
      setAuth(false);
    }
  };

  useEffect(() => {
    if(Cookie.get("token") && firstLoad.current){
      verifyToken();
      firstLoad.current = false;
    }
  }, []);

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
          <Route path="/plans" element={<Plans />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
