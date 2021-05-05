import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import whatsapp_icon from "../../assets/icons/whatsapp_icon.svg";
import facebook_icon from "../../assets/icons/facebook_icon.svg";
import { slide as Menu } from "react-burger-menu";
import ig_icon from "../../assets/icons/ig_icon.svg";
import { useViewport } from "../ViewportProvider";
import line from "../../assets/icons/line.svg";
import Sidebar from "../Sidebar";
import "./Navbar.css";

const Navbar = () => {
  const { width } = useViewport();

  const breakpoint = 768;

  const mobile = breakpoint >= width ? "mobile" : "";

  return (
    <nav className={`navbar-container ${mobile}`}>
      <img src={logo} className={`navbar-logo ${mobile}`} />

      {mobile !== "" ? (
        ""
      ) : (
        <>
          <div className="navbar-menu">
            <ul>
              <Link to="/" className="navbar__link">
                <li className="nav__item">HOME</li>
              </Link>
              <Link to="/categoria" className="navbar__link">
                <li className="nav__item">CATEGORIAS</li>
              </Link>
              <Link to="/about" className="navbar__link">
                <li className="nav__item">NUESTRO PROYECTO</li>
              </Link>
              <Link className="navbar__link">
                <li className="nav__item">COMO COMPRAR</li>
              </Link>
            </ul>
          </div>
          <div className={`navbar-social ${mobile}`}>
            <ul>
              <li>
                <Link className="" to="/"><img src={whatsapp_icon} className={`social-icons ${mobile}`} /></Link>
              </li>
              <li>
                <Link className="" to="/"><img src={ig_icon} className={`social-icons ${mobile}`} /></Link>
              </li>
              <li>
                <Link className="" to="/"><img src={facebook_icon} className={`social-icons ${mobile}`} /></Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
