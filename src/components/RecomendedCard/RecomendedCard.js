import React from 'react';
import { Link } from 'react-router-dom';
import { parseCurrency } from "../../utils/currency";
import { useViewport } from "../ViewportProvider/ViewportProvider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './RecomendedCard.css';

function RecomendedCard({ title, imgUrl, slug, price }) {

  const { width } = useViewport();

  const breakpoint = 768;

  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
  };

  return (
    <Slider {...settings}>

      <div className="product__card-container">
        <Link to={`/producto/${slug}`}>
          <img src={imgUrl} className="productcard__img" alt="Product Recomended" />
        </Link>
        <p className="product__card-title">{title}</p>
        <p className="product__card-price">{parseCurrency(price)}</p>
      </div>
    </Slider>

  );

};
export default RecomendedCard;