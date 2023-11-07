import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

function Header() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h1>Angular Wealth</h1>
      <nav ref={navRef}>
        <ul>
          <li>
            <a className="active" href="/">
              Home
            </a>
          </li>
          <li>
            <a href="/login">Ingresar</a>
          </li>
          <li>
            <a href="/register">Registrarse</a>
          </li>
          <button className="nav-btn nav-close-btn" onClick={showNavBar}>
            <FaTimes />
          </button>
        </ul>
      </nav>
      <div className="burger-menu">
        <button className="nav-btn" onClick={showNavBar}>
          <FaBars />
        </button>
      </div>
    </header>
  );
}

export default Header;
