import React from "react";
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logo.svg';
import whatsapp_icon from '../../assets/icons/whatsapp_icon.svg';
import ig_icon from '../../assets/icons/ig_icon.svg';
import facebook_icon from '../../assets/icons/facebook_icon.svg';
import line from '../../assets/icons/line.svg';


import "./Navbar.css"

const Navbar = () => {


    return (

        <nav className="navbar__container">
            <Link to="/">
                <img src={logo} className="navbar__logo" alt="logo" />
            </Link>
            <div className="items__container">
                <ul className="nav__list">
                    <li className="nav__item">
                        <Link to="/" className="nav__link text__style active">
                            Home                        
                        </Link>
                    </li>
                    <li>
                        <img className="nav__line" src={line} alt="line"></img>
                    </li>
                    <li className="nav__item">
                        <Link to="/" className="nav__link text__style active">
                            Categorias                        
                        </Link>
                    </li>
                    <li>
                        <img className="nav__line" src={line} alt="line"></img>
                    </li>
                    <li className="nav__item">
                        <Link to="/" className="nav__link text__style active">
                            Nosotras
                        </Link>
                    </li>
                    <li>
                        <img className="nav__line" src={line} alt="line"></img>
                    </li>
                    <li className="nav__item">
                        <Link to="/" className="nav__link text__style active">
                            Cómo comprar
                        </Link>
                    </li>
                </ul>
                <div className="contact__container">
                    <Link className="contact__item" to="/">
                        <img src={whatsapp_icon} className="navbar__icon" alt="phone icon" />
                    </Link>
                    <Link className="contact__item" to="/">
                        <img src={ig_icon} className="navbar__icon" alt="instagram icon" />
                    </Link>
                    <Link className="contact__item" to="/">
                        <img src={facebook_icon} className="navbar__icon" alt="facebook icon" />
                    </Link>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;