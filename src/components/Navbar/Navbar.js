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

        <nav className="navbar__container">
            <Link to="/">
                <img src={logo} className="navbar__logo" alt="logo" />
            </Link>
            <ul>
                <li className="nav__item">

                    <Link to="/" className="nav__link--home text__style active">
                        Home
                        </Link>
                        <img className="line" src={line}></img>
                </li>
                
                <li className="nav__item">

                    <Link to="/" className="nav__link--cat text__style active">
                        Categorias
                        </Link>
                        <img className="line__2" src={line}></img>
                </li>
                <li className="nav__item">

                    <Link to="/" className="nav__link--proyecto text__style active">
                        Nuestro Proyecto
                        </Link>
                        <img className="line__3" src={line}></img>
                </li>
                <li className="nav__item">

                    <Link to="/" className="nav__link--como--comprar text__style active">
                        cómo comprar
                        </Link>

                </li>
                

            </ul>
            <div className="contact__container">
                <Link to="/">
                    <img src={phone_icon} className="navbar__icon--1" alt="phone icon" />
                </Link>
                <Link to="/">
                    <img src={ig_icon} className="navbar__icon--2" alt="instagram icon" />
                </Link>
                <Link to="/">
                    <img src={google_icon} className="navbar__icon--3" alt="google icon" />
                </Link>

            </div>
        </nav>

    )
}

export default Navbar;