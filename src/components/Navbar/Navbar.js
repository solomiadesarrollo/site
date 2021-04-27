import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import whatsapp_icon from "../../assets/icons/whatsapp_icon.svg";
import ig_icon from "../../assets/icons/ig_icon.svg";
import google_icon from "../../assets/icons/google_icon.svg";
import line from "../../assets/icons/line.svg";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <img src={logo} />
      <div className="navbar-menu">
        <ul>
          <li>HOME</li>
          <li>CATEGORIAS</li>
          <li>NUESTRO PROYECTO</li>
          <li>COMO COMPRAR</li>
        </ul>
      </div>
      <div className="navbar-social">
        <ul>
          <li>
            <img src={whatsapp_icon} />
          </li>
          <li>
            <img src={ig_icon} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
