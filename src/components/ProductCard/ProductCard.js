import "./ProductCard.css";
import { parseCurrency } from "../../utils/currency";
import { Link } from "react-router-dom";

const ProductCard = ({ title, price, imgUrl, slug }) => {
  return (
    <div className="productcard-container">
      <Link to={`/producto/${slug}`} style={{ textDecoration: "none" }}>
        <img src={imgUrl} className="productcard-img" />
      </Link>
      <p className="productcard-title">{title}</p>
      <p className="productcard-price">{parseCurrency(price)}</p>
      <div className="productcard-color-variant"></div>
    </div>
  );
};

export default ProductCard;
