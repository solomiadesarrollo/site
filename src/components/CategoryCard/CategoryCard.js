import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryCard.css';

function CategoryCard({ title, image, slug }) {
    return (
        <div>
            <Link className="category-link" to={`/categoria/${slug}`}>
                <div className="category-link-container">
                    <img className="category-link-image" src={image} alt="category"></img>
                    <h3 className="category-link-title">{title}</h3>
                </div>
            </Link>
        </div>




    )

}
export default CategoryCard;