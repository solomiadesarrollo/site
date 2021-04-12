

import "./ProductCard.css"

const ProductCard = ({ title, price, imgUrl}) => {
    return(
        <div className="productcard-container">
            <img src={imgUrl} className="productcard-img" />
            <p className="productcard-title">{title}</p>
            <p className="productcard-price">${price}</p>
            <div className="productcard-color-variant"></div>
        </div>
    )
}

export default ProductCard