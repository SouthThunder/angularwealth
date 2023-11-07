import React, { useState } from "react";
import Button from "../Common/Buttons/Button";
import { Password } from "../Common/PasswordInput/Password";
import "./Login.css";

export const Login = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const handleLoginFormChange = (event) => {
    setLoginForm({
      ...loginForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${loginForm.email}, Password: ${loginForm.password}`);
  };

  return (
    <div className="login-register">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>Inicia Sesión</h1>

          <input
            name="email"
            type="email"
            placeholder="Correo electronico"
            onChange={handleLoginFormChange}
          />
          <Password handleInputChange={handleLoginFormChange} text='Contraseña' name='password'/>
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
