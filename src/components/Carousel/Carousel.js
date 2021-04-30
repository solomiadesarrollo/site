import React, { useState, useEffect } from "react";
import sanityClient from "../../client";
import { urlFor } from "../../utils/images.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import { useViewport } from "../ViewportProvider";

const Carousel = () => {
  const [slides, setSlides] = useState([]);
  const { width } = useViewport();

  const breakpoint = 768;
  const mobile = breakpoint > width;

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="slideshow"]{
                  title,
                  description,
                  image,
                  mobileimage
              }
              `
      )
      .then((data) => {
        let imagenes = data.map((sli) => {
          return {
            title: sli.title,
            slug: sli.slug,
            image: urlFor(sli.image).url(),
            mobileImage: urlFor(sli.mobileimage).url(),
          };
        });
        setSlides(imagenes);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slides.map((slide) => {
          console.log(slide);

          return (
            <div class="slide-container">
              {mobile ? (
                <img src={slide.mobileImage} />
              ) : (
                <img src={slide.image} />
              )}
              <button class="slide-btn">SHOP NOW</button>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
export default Carousel;
