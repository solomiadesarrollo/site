import React from 'react';
import "./AboutUs.css"

function AboutUs() {
    return (
        <div className="aboutUs" id="aboutus">
            <h2 className="aboutUs__title">SOBRE NOSOTRAS</h2>
            <div className="aboutUs__bothParagraphs">
                <p className="aboutUs__paragraph">Somos dos amigas, casi hermanas, ahora tambien socias en Enola Baires, donde buscamos plasmar nuestro amor y pasión por la moda en cada producto, elegiendolos y pensandolos para la mujer de hoy.
                </p>
                <p className="aboutUs__paragraph">Nuestro accionar lo basamos en la palaba <b>MERAKI</b> cuyo significado es el de hacer algo con alma, creatividad o amor dejando  una parte de ti en tu trabajo.
                </p>
            </div>
        </div>
    )
}

export default AboutUs