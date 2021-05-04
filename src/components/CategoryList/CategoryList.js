import { useEffect, useState } from "react";
import sanityClient from "../../client.js";
import CategoryCard from "../CategoryCard/CategoryCard.js";
import "../CategoryList/CategoryList.css";
import { urlFor } from "../../utils/images.js";
import AliceCarousel from "react-alice-carousel";
import { useViewport } from "../ViewportProvider/ViewportProvider.js";

const CategoryList = () => {
  const [categorias, setCategorias] = useState([]);
  const { width } = useViewport();

  const breakpoint = 768;

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="category" && featured!=true]{
                title,
                slug,
                image
            }
            `
      )
      .then((data) => {
        let cat = data.map((cat) => {
          return {
            title: cat.title,
            slug: cat.slug,
            image: urlFor(cat.image).url(),
          };
        });
        setCategorias(cat);
      });
  }, []);

  const items = categorias.map((categoria) => {
    return (
      <CategoryCard
        title={categoria.title}
        image={categoria.image}
        slug={categoria.slug.current}
      />
    );
  });

  const responsive = {
    0: { items: 1 },
    768: { items: 4 },
  };

  return (
    <>
      <div className="title__container">
        <h2 className="category__title">colección</h2>
      </div>

      <AliceCarousel
        autoPlay
        autoPlayStrategy="none"
        autoPlayInterval={1000}
        animationDuration={1000}
        infinite
        mouseTracking
        items={items}
        responsive={responsive}
        disableButtonsControls
        controlsStrategy="alternate"
      />
    </>
  );
};

export default CategoryList;
