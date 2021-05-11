import React from 'react';
import { Link } from 'react-router-dom';
import ig_icon from "../../assets/icons/ig_icon.svg"
import facebook_icon from "../../assets/icons/facebook_icon.svg"
import logo from "../../assets/icons/logo.svg"
import "./Footer.css"

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__element">
                <h2>Info</h2>
                <div>
                    <Link className="footer__link" to={{
                        pathname: '/',
                        state: {
                            toAboutUs: true
                        }
                    }}><p className="footer__paragraph">Nosotras</p></Link>
                    <Link className="footer__link" to={{
                        pathname: '/',
                        state: {
                            toCategories: true
                        }
                    }}><p className="footer__paragraph">Colección</p></Link>
                    {/* <Link className="footer__link" to="/"><p className="footer__paragraph">¿Cómo comprar?</p></Link> */}
                </div>
            </div>
            <div className="footer__element">
                <h2>Seguinos</h2>
                <div className="footer__elementBody footer__elementBody--redes">
                    <li>
                        <a
                            className="footer__link footer__link--redes nav__item"
                            href="https://www.instagram.com/enola.baires/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src={ig_icon}
                                className="footer__iconosRedes"
                                alt="instagram icon"
                            />
                            <p className="footer__paragraph">Instagram</p>
                        </a>
                        
                    </li>
                    <li>
                        <a
                            className="footer__link footer__link--redes nav__item"
                            href="https://www.facebook.com/Enola-Baires-105404571634738"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src={facebook_icon}
                                className="footer__iconosRedes"
                                alt="facebook icon"
                            />
                            <p className="footer__paragraph">Facebook</p>
                            
                        </a>
                    </li>
                </div>

            </div>
            <div className="footer__element footer__element--logo">
                <Link to="/">
                <img src={logo} alt="enolabaires" className="footer__logo"></img>
                </Link>
                <div className="footer__copyright--container">
                    <p className="footer__copyright">© 2021 ENOLA BAIRES</p>
                    <p className="footer__copyright">TODOS LOS DERECHOS RESERVADOS</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;




