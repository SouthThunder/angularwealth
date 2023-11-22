import { useState } from "react";
import Button from "../Common/Buttons/Button";
import Header from "../Common/Header/Header";
import Footer from "../Common/Footer/Footer";
import { Password } from "../Common/PasswordInput/Password";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { getToken } from "../../services/users";
import Cookies from "js-cookie";

import "./Login.css";

export const Login = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [formError, setFormError] = useState(null);

  const handleLoginFormChange = (event) => {
    setLoginForm({
      ...loginForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Verificar campos vacíos
    for (const key in loginForm) {
      if (loginForm[key].trim() === "") {
        setFormError("No dejes campos vacíos");
        return; // Detener la validación si se encuentra un campo vacío
      }
    }

    fetchData();
    setFormError(null);
  };

  const fetchData = async () => {
    const token = await getToken(loginForm.email, loginForm.password);
    if(token.status === 404){
      setFormError("Usuario o contraseña incorrectos");
    }else if(token.status === 500){
      setFormError("Error en el servidor");
    }else if(token.status === 200){
      Cookies.set("token", token.data.token, { expires: 7, secure: true });
      window.location.href = "/";
    }
  };

  return (
    <>
      <Header />
      <div className="login-register">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <h1>Inicia Sesión</h1>
            <input
              name="email"
              type="email"
              placeholder="Correo electrónico"
              onChange={handleLoginFormChange}
            />
            <Password
              handleInputChange={handleLoginFormChange}
              text="Contraseña"
              name="password"
            />
            {formError && <p className="error-message">{formError}</p>}

            <Button text="Iniciar" />
            <p>O continua con</p>
            <div className="logopt">
              <FaFacebook />
              <FaGoogle />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};
