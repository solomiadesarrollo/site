import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logo.svg';
import phone_icon from '../../assets/icons/phone_icon.svg';
import ig_icon from '../../assets/icons/ig_icon.svg';
import google_icon from '../../assets/icons/google_icon.svg';
import line from '../../assets/icons/line.svg';
import React from "react";

import "./Navbar.css"

const Navbar = () => {
    

    return (

        <nav className="navbar-container">
            <Link to="/">
                <img src={logo} className="navbar-logo" alt="logo" />
            </Link>
            <ul>
                <li className="nav-item">

                    <Link to="/" className="nav-link-home text-style active">
                        Home
                        </Link>
                        <img className="line" src={line}></img>
                </li>
                
                <li className="nav-item">

                    <Link to="/" className="nav-link-cat text-style active">
                        Categorias
                        </Link>
                        <img className="line2" src={line}></img>
                </li>
                <li className="nav-item">

                    <Link to="/" className="nav-link-proyecto text-style active">
                        Nuestro Proyecto
                        </Link>
                        <img className="line3" src={line}></img>
                </li>
                <li className="nav-item">

                    <Link to="/" className="nav-link-como-comprar text-style active">
                        cómo comprar
                        </Link>

                </li>
                

            </ul>
            <div className="contact-container">
                <Link to="/">
                    <img src={phone_icon} className="navbar-icon1" alt="phone icon" />
                </Link>
                <Link to="/">
                    <img src={ig_icon} className="navbar-icon2" alt="instagram icon" />
                </Link>
                <Link to="/">
                    <img src={google_icon} className="navbar-icon3" alt="google icon" />
                </Link>

            </div>
        </nav>

    )
}

export default Navbar;