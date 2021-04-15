import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryCard.css';

function categoryCard({ title, image, slug }) {
    return (
        <div className="category-image-container">

            <img src={image} alt="category"></img>
            <Link to={`/categoria/${slug}`}><h3 className="category-title">{title}</h3></Link>

        </div>




    )

}
export default categoryCard;