import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryCard.css';

function CategoryCard({ title, image, slug }) {
    return (
        <div className="category-image-container">
            <Link to={`/categoria/${slug}`}><h3 className="category-title">{title}</h3>
                <img src={image} alt="category"></img>
            </Link>

        </div>




    )

}
export default CategoryCard;