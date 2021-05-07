import React from "react";
import { parseCurrency } from "../../utils/currency";
import { useHistory } from "react-router-dom";
import "./RecomendedCard.css";

function RecomendedCard({ title, imgUrl, slug, price, handleClick }) {
  let history = useHistory();
  handleClick = () => {
    history.push(`/producto/${slug}`);
    history.go(0);
  };
  return (
    <div className="product__card-container" onClick={handleClick}>
      <img src={imgUrl} className="productcard__img" alt="Product Recomended" />
      <p className="product__card-title">{title}</p>
      <p className="product__card-price">{parseCurrency(price)}</p>
    </div>
  );
}
export default RecomendedCard;
