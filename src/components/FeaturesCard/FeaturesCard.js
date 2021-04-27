import React from 'react';
import { Link } from 'react-router-dom';
import { parseCurrency } from "../../utils/currency";

import './FeaturesCard.css';

function CategoryCard({ title, imgUrl, slug, price }) {
    return (
      <div className="product__card-container">
        <Link to={`/producto/${slug}`}>
          <img src={imgUrl} className="productcard__img" alt="Product Featured" />
        </Link>
        <p className="product__card-title">{title}</p>
        <p className="product__card-price">{parseCurrency(price)}</p>
      </div>
    );

};
export default CategoryCard;


