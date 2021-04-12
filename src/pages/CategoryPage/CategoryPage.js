import sanityClient from "../../client.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import imageUrlBuilder from "@sanity/image-url";

import ProductCard from "../../components/ProductCard/ProductCard.js";

import "./CategoryPage.css";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

const CategoryPage = () => {
  let { slug } = useParams();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    console.log(slug);
    sanityClient
      .fetch(
        `*[_type=="category" && slug.current=="${slug}" ]{
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
            price: product.defaultProductVariant.price,
            imgUrl: urlFor(firstImg).url(),
          };
        });
        setProducts(updatedProds);
      });
  }, []);

  return (
    <>
      <div className="category-header">
        <h1>{category.toUpperCase()}</h1>
      </div>
      <div className="category-prods-container">
        {products.map((item) => {
          return (
            <>
              <div>
                <ProductCard
                  title={item.title}
                  imgUrl={item.imgUrl}
                  price={item.price}
                />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default CategoryPage;
