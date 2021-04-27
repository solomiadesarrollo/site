import React, { useState, useEffect } from "react";
import sanityClient from "../../client";
import { urlFor } from "../../utils/images.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

const Carousel = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="slideshow"]{
                  title,
                  description,
                  image
              }
              `
      )
      .then((data) => {
        let imagenes = data.map((sli) => {
          return {
            title: sli.title,
            slug: sli.slug,
            image: urlFor(sli.image).url(),
          };
        });
        setSlides(imagenes);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <Slider {...settings}>
      {slides.map((slide) => {
        return (
          <div>
            {/* {slide.description} */}
            <img src={slide.image} />
          </div>
        );
      })}
    </Slider>
  );
};
export default Carousel;
