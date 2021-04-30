import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import whatsapp_icon from "../../assets/icons/whatsapp_icon.svg";
import { slide as Menu } from "react-burger-menu";
import ig_icon from "../../assets/icons/ig_icon.svg";
import { useViewport } from "../ViewportProvider";
import line from "../../assets/icons/line.svg";
import Sidebar from "../Sidebar";

import "./Navbar.css";

const Navbar = () => {
  const { width } = useViewport();

  const breakpoint = 768;

  const mobile = breakpoint > width ? "mobile" : "";

  return (
    <nav className={`navbar-container ${mobile}`}>
      <img src={logo} className={`navbar-logo ${mobile}`} />

      {mobile !== "" ? (
        ""
      ) : (
        <>
          <div className="navbar-menu">
            <ul>
              <li>HOME</li>
              <li>CATEGORIAS</li>
              <li>NUESTRO PROYECTO</li>
              <li>COMO COMPRAR</li>
            </ul>
          </div>
          <div className={`navbar-social ${mobile}`}>
            <ul>
              <li>
                <img src={whatsapp_icon} className={`social-icons ${mobile}`} />
              </li>
              <li>
                <img src={ig_icon} className={`social-icons ${mobile}`} />
              </li>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
