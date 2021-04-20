import React from 'react';
import { Link } from 'react-router-dom';
import whatsapp_icon from "../../assets/icons/whatsapp_icon.svg"
import ig_icon from "../../assets/icons/ig_icon.svg"
import google_icon from "../../assets/icons/google_icon.svg"
import logo from "../../assets/icons/logo2.svg"
import "./Footer.css"

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__element">
                <h2>Ayuda</h2>
                <div>
                    <Link className="footer__link" to="/"><p className="footer__paragraph">Cómo comprar</p></Link>
                    <Link className="footer__link" to="/"><p className="footer__paragraph">Cambios y Devoluciones</p></Link>
                </div>
            </div>
            <div className="footer__element">
                <h2>Nosotras</h2>
                <div>
                    <Link className="footer__link" to="/about"><p className="footer__paragraph">Quiénes somos</p></Link>
                    <Link className="footer__link" to="/"><p className="footer__paragraph">Catálogo</p></Link>
                    <Link className="footer__link" to="/"><p className="footer__paragraph">Contacto</p></Link>
                </div>
            </div>
            <div className="footer__element">
                <h2>Seguinos</h2>
                <div className="footer__elementBody footer__elementBody--redes">
                    <Link className="footer__link" to="/"><img className="footer__iconosRedes" src={whatsapp_icon} alt="phone"></img></Link>
                    <Link className="footer__link" to="/"><img className="footer__iconosRedes" src={ig_icon} alt="instagram"></img></Link>
                    <Link className="footer__link" to="/"><img className="footer__iconosRedes" src={google_icon} alt="google"></img></Link>
                </div>
            </div>
            <div className="footer__element footer__element--logo">
                <img src={logo} alt="enolabaires" className="footer__logo"></img>
                <p className="footer__copyright">© 2021 ENOLA BAIRES</p>
                <p className="footer__copyright">TODOS LOS DERECHOS RESERVADOS</p>
            </div>
        </footer>
    )
}

export default Footer