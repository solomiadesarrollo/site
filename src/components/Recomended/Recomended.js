import { useEffect, useState } from "react";
import sanityClient from "../../client.js";
import "./Recomended.css";
import { urlFor } from "../../utils/images.js";
import RecomendedCard from "../RecomendedCard/RecomendedCard";

const ProductsFeatures = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="category" && title== "Recomendados" ]{
          title,
          slug,
          "products": *[_type=="product" && references(^._id)]
      }
      `
      )
      .then((data) => {
        setCategory(data[0].title);
        let updatedProds = data[0].products.map((product) => {
          let firstImg = product.defaultProductVariant.images[0];
          return {
            title: product.title,
            slug: product.slug,
            price: product.defaultProductVariant.price,
            imgUrl: urlFor(firstImg).url(),
          };
        });
        setProducts(updatedProds);
      });
  }, []);



  return (
    <>
      <div className="title__recomended-container">
        <h2 className="recomended__title">recomendados</h2>
        <div className="recomended-container">

          {products.map((item) => {
            console.log(item);
            return (

              <div>
                <RecomendedCard


                  title={item.title}
                  imgUrl={item.imgUrl}
                  price={item.price}
                  slug={item.slug.current}


                />
              </div>

            );
          })}
        </div>
      </div>
    </>

  );
};

export default ProductsFeatures;