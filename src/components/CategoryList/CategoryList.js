import { useEffect, useState } from "react";
import sanityClient from "../../client.js";
import CategoryCard from "../CategoryCard/CategoryCard.js";
import "../CategoryList/CategoryList.css";
import { urlFor } from "../../utils/images.js";

const CategoryList = () => {
  const [categorias, setCategorias] = useState([]);

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

  return (
    <>

      <div className="title__container">
        <h1 className="category__title">categorias</h1>
      </div>
      <div className="category-list-container">

        {categorias.map((categoria) => {
          return (
            <CategoryCard
              title={categoria.title}
              image={categoria.image}
              slug={categoria.slug.current}
            />
          );
        })}

      </div>
    </>

  );
};

export default CategoryList;
