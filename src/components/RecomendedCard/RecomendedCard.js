import React from "react";
import { Link } from "react-router-dom";
import { parseCurrency } from "../../utils/currency";

import "./RecomendedCard.css";

function RecomendedCard({ title, imgUrl, slug, price }) {
  return (
    <div className="product__card-container">
      <Link to={`/producto/${slug}`}>
        <img
          src={imgUrl}
          className="productcard__img"
          alt="Product Recomended"
        />
        <p className="product__card-title">{title}</p>
        <p className="product__card-price">{parseCurrency(price)}</p>
      </Link>
    </div>
  );
}
export default RecomendedCard;
