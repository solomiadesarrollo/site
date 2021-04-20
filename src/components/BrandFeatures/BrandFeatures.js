import React from 'react';
import artesanal from "../../assets/icons/artesanal.svg";
import ecologico from "../../assets/icons/ecologico.svg";
import tendencia from "../../assets/icons/tendencia.svg";
import "./BrandFeatures.css";


function BrandFeatures(){
    return (
        <div className="brandFeatures">
            <div className="brandFeatures__cards">
                <img src={artesanal} alt="artesanal" className="brandFeatures__images"></img>
                <p className="brandFeatures__paragraph">Diseño artesanal</p>
            </div>
            <div className="brandFeatures__cards">
                <img src={ecologico} alt="ecologico" className="brandFeatures__images"></img>
                <p className="brandFeatures__paragraph">Productos ecológicos</p>
            </div>
            <div className="brandFeatures__cards">
                <img src={tendencia} alt="tendencia" className="brandFeatures__images"></img>
                <p className="brandFeatures__paragraph">Tendencias de moda</p>
            </div>
        </div>
    )
}

export default BrandFeatures