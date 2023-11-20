import { useEffect, useRef, useState } from "react";
import Button from "../Buttons/Button";
import { createGasto } from "../../../services/gastos";
import { formatDate } from "../../../utils/helpers";
import {useSelector}  from 'react-redux' 

import "./AddExpense.css";

export const AddExpense = ({visibility}) => {
  const popup = useRef();
  const user = useSelector(state => state.user)
  const [form, setForm] = useState({
    tipo_gasto: "Fijo",
    descripcion_gasto: "",
    monto_gasto: "",
  });

  const visible = () => {
    visibility(false)
  }

  useEffect(() => {
    let handler = (event) => {
      if (!popup.current?.contains(event.target)) {
        visible()
      }
    }
    document.addEventListener("mousedown", handler);
  }, []);
  
  const [error, setError] = useState({
    tipo_gasto: "",
    descripcion_gasto: "",
    monto_gasto: "",
  });
  
  const handleExpenseChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    // Limpiar el error del campo cuando se modifica el valor
    setError({
      ...error,
      [e.target.name]: "",
    });
  };
  
  const handleCategoryChange = (e) => {
    setForm({
      ...form,
      tipo_gasto: e.target.value,
    });
    // Limpiar el error del campo cuando se modifica el valor
    setError({
      ...error,
      tipo_gasto: "",
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Validar campos antes de enviar el formulario
    let hasError = false;
    const newError = { ...error };
  
    if (form.tipo_gasto === "") {
      newError.tipo_gasto = "Campo requerido";
      hasError = true;
    }
  
    if (form.descripcion_gasto === "") {
      newError.descripcion_gasto = "Campo requerido";
      hasError = true;
    }
  
    if (form.monto_gasto === "") {
      newError.monto_gasto = "Campo requerido";
      hasError = true;
    }
  
    if (hasError) {
      setError(newError);
      console.log("Hay errores en el formulario");
    } else {
      createGasto(formatDate(), user.id ,form);
    }
  };
  
  return (
    <div className="addExpense" ref={popup}>
      <h2>Añadir Gasto</h2>
      <form onSubmit={handleSubmit}>
        <div className="box">
          <label htmlFor="expense">Categoria:</label>
          <select
            id="expense"
            name="tipo_gasto"
            onChange={handleCategoryChange}
            value={form.tipo_gasto}
          >
            <option value="Fijo">Fijo</option>
            <option value="Variable">Variable</option>
          </select>
          <span className="error-message">{error.tipo_gasto}</span>
        </div>
        <div className="box">
          <label htmlFor="monto">Monto:</label>
          <input
            type="number"
            id="monto"
            name="monto_gasto"
            value={form.monto_gasto}
            onChange={handleExpenseChange}
          />
          <span className="error-message">{error.monto_gasto}</span>
        </div>
        <div className="box">
          <label htmlFor="descripcion">Descripcion:</label>
          <textarea
            id="descripcion"
            name="descripcion_gasto"
            value={form.descripcion_gasto}
            onChange={handleExpenseChange}
            maxLength={64}
          ></textarea>
          <span className="error-message">{error.descripcion_gasto}</span>
        </div>
        <Button text="Añadir" />
      </form>
    </div>
  );
  
  
};
