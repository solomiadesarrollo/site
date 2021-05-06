import { useEffect, useState } from "react";
import sanityClient from "../../client.js";
import "../Features/ProductsFeatures.css";
import { urlFor } from "../../utils/images.js";
import FeaturesCard from "../FeaturesCard/FeaturesCard";

const ProductsFeatures = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="category" && title== "Destacados" ]{
          title,
          slug,
          "products": *[_type=="product" && references(^._id)]
      }
      `
      )
      .then((data) => {
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
      <div className="title__features-container">
        <h2 className="features__title">destacados</h2>
        <div className="category-container">
          {products.map((item) => {
            console.log(item);
            return (
              <div>
                <FeaturesCard
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
