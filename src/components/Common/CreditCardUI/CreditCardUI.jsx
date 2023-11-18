import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import "./CreditCardUI.css";

const CreditCard = () => {
  const [card, setCard] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    focus: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Limitar la longitud del número de la tarjeta a 16 dígitos
    if (name === "number" && value.length <= 16) {
      setCard({ ...card, [name]: value });
    }
    else if (name === "cvc" && value.length <= 3) {
      setCard({ ...card, [name]: value });
    }
    else if (name === "expiry" && value.length <= 4) {
      setCard({ ...card, [name]: value });
    }
    else {
        setCard({ ...card, [name]: value });
      }
  };

  const handleFocus = (e) => {
    setCard({ ...card, focus: e.target.name });
  };

  return (
    <div className="card">
      <div className="rccs__card rccs__card--unknown">
        <Cards
          number={card.number}
          name={card.name}
          expiry={card.expiry}
          cvc={card.cvc}
          focused={card.focus}
        />
      </div>

      <br />
      <form>
        <div className="row">
          <div className="row-col">
            <label htmlFor="name">Card Number</label>
            <input
              type="text"
              className="form-control"
              value={card.number}
              name="number"
              onChange={handleChange}
              onFocus={handleFocus}
            ></input>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="row-col">
            <label htmlFor="name">Card Name</label>
            <input
              type="text"
              className="form-control"
              value={card.name}
              name="name"
              onChange={handleChange}
              onFocus={handleFocus}
            ></input>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="row-col">
            <label htmlFor="name">Expiration Date</label>
            <input
              type="text"
              name="expiry"
              className="form-control"
              value={card.expiry}
              onChange={handleChange}
              onFocus={handleFocus}
            ></input>
          </div>
          <div className="row-col">
            <label htmlFor="name">CVV</label>
            <input
              type="tel"
              name="cvc"
              className="card"
              value={card.cvc}
              onChange={handleChange}
              onFocus={handleFocus}
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreditCard;
