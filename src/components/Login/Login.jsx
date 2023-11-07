import React, { useState } from "react";
import Button from "../Common/Buttons/Button";
import "./Login.css";

export const Login = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [values, setValues] = useState(false);

  const handleLoginFormChange = (event) => {
    setLoginForm({
      ...loginForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleClickShowPassword = () => {
    setValues(!values);
};

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${loginForm.email}, Password: ${loginForm.password}`);
  };

  return (
    <div className="login">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>Inicia Sesión</h1>

          <input
            type="email"
            placeholder="Correo electronico"
            onChange={handleLoginFormChange}
          />

          <input
            type={
              values ? 'text' : 'password'
            }
            placeholder="Contraseña"
            onChange={handleLoginFormChange}
          />
          <Button text='Iniciar'/>
          <p>O continua con</p>
          <div className="logopt">
            <img src="https://i.ibb.co/1J6w2PM/google.png" alt="google" />
            <img src="https://i.ibb.co/1J6w2PM/google.png" alt="google" />
          </div>
        </form>
      </div>
    </div>
  );
};
