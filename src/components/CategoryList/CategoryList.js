import { useEffect, useState } from "react";
import sanityClient from "../../client.js";
import CategoryCard from "../CategoryCard/CategoryCard.js";
import "../CategoryList/CategoryList.css";
import { urlFor } from "../../utils/images.js";
import Slider from "react-slick";
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

  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: width < breakpoint ? 1 : 4,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="title__container">
        <h2 className="category__title">colección</h2>
      </div>

      <Slider {...settings}>
        {categorias.map((categoria) => {
          console.log(categoria);
          return (
            <CategoryCard
              title={categoria.title}
              image={categoria.image}
              slug={categoria.slug.current}
            />
          );
        })}
      </Slider>
    </>
  );
};

export default CategoryList;
