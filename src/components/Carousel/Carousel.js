import React, { useState, useEffect } from "react";
import sanityClient from "../../client";
import { urlFor } from "../../utils/images.js";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
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
                  slug,
                  image,
                  mobileimage
              }
              `
      )
      .then((data) => {
        let imagenes = data.map((sli) => {
          console.log(sli);
          return {
            slug: sli.slug.current,
            image: urlFor(sli.image).url(),
            mobileImage: urlFor(sli.mobileimage).url(),
          };
        });
        setSlides(imagenes);
      });
  }, []);

  const items = slides.map((slide) => {
    return (
      <div className="item">
        <a href={slide.slug}>
          {mobile ? <img src={slide.mobileImage} /> : <img src={slide.image} />}
        </a>
      </div>
    );
  });

  const responsive = {
    0: { items: 1 },
    768: { items: 1 },
  };

  return (
    <div className="slider-container">
      <AliceCarousel
        autoPlay
        autoPlayStrategy="default"
        autoPlayInterval={3000}
        animationDuration={1000}
        mouseTracking
        items={items}
        responsive={responsive}
        disableButtonsControls
        infinite
        controlsStrategy="alternate"
      />
    </div>
  );
};
export default Carousel;
