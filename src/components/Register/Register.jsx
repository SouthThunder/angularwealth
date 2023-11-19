import React, { useState } from "react";
import Button from "../Common/Buttons/Button";
import Header from "../Common/Header/Header";
import Footer from "../Common/Footer/Footer";
import { Password } from "../Common/PasswordInput/Password";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { createUser } from "../../services/users";

export const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [formError, setFormError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar campos vacíos
    for (const key in formData) {
      if (formData[key].trim() === "") {
        setFormError("No dejes campos vacíos");
        return; // Detener la validación si se encuentra un campo vacío
      }
    }

    // Validar que el campo de correo electrónico tenga un formato válido
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(formData.email)) {
      setFormError("Ingresa un correo electrónico válido");
      return; // Detener la validación si el correo no es válido
    }

    if (formData.password !== formData.confirmPassword) {
      setFormError("Las contraseñas no coinciden");
      return; // Detener la validación si las contraseñas no coinciden
    }

    // Si no hay errores, continuar con el envío del formulario
    postData();
    setFormError(null);
    setPasswordsMatch(true);
  };

  const postData = async () => {
    const response = await createUser(
      formData.firstName,
      formData.lastName,
      formData.email,
      formData.password
    );
    console.log(response);
  };

  return (
    <>
      <Header />
      <div
        className="login-register"
        style={{ marginTop: "1%", marginBottom: "1%" }}
      >
        <div className="container">
          <form onSubmit={handleSubmit}>
            <h1>Registrate</h1>
            <input
              type="text"
              placeholder="Nombre"
              name="firstName"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Apellido"
              name="lastName"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <Password
              handleInputChange={handleChange}
              text="Contraseña"
              name="password"
            />
            <Password
              handleInputChange={handleChange}
              text="Confirmar contraseña"
              name="confirmPassword"
            />
            {!passwordsMatch && (
              <p className="error-message">Las contraseñas no coinciden</p>
            )}
            {formError && <p className="error-message">{formError}</p>}
            <Button text="Registrate" />
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
