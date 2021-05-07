import React from 'react';
import { Link } from 'react-router-dom';
import whatsapp_icon from "../../assets/icons/whatsapp_icon.svg"
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
                    <Link className="footer__link" to="/"><p className="footer__paragraph">¿Cómo comprar?</p></Link>
                </div>
            </div>
            <div className="footer__element">
                <h2>Seguinos</h2>
                <div className="footer__elementBody footer__elementBody--redes">
                    <Link className="footer__link footer__link--redes nav__item" to="/"><img className="footer__iconosRedes" src={ig_icon} alt="instagram"></img><p className="footer__paragraph">Instagram</p></Link>
                    <Link className="footer__link footer__link--redes nav__item" to="/"><img className="footer__iconosRedes" src={facebook_icon} alt="facebook"></img><p className="footer__paragraph">Facebook</p></Link>
                </div>
            </div>
            <div className="footer__element footer__element--logo">
                <img src={logo} alt="enolabaires" className="footer__logo"></img>
                <div className="footer__copyright--container">
                    <p className="footer__copyright">© 2021 ENOLA BAIRES</p>
                    <p className="footer__copyright">TODOS LOS DERECHOS RESERVADOS</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer