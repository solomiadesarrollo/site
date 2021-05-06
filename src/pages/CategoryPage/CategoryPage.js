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
        console.log(products);
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
      <div className="category-header">
        <h1>{category.toUpperCase()}</h1>
      </div>
      <div className="category-prods-container">
        {products.length === 0 ? (
          <div className="no-products">
            <h3>NO HAY PRODUCTOS PARA LA CATEGORIA SELECCIONADA</h3>
          </div>
        ) : (
          products.map((item) => {
            console.log(item);
            return (
              <>
                <div>
                  <ProductCard
                    title={item.title}
                    imgUrl={item.imgUrl}
                    price={item.price}
                    slug={item.slug.current}
                  />
                </div>
              </>
            );
          })
        )}
      </div>
    </>
  );
};

export default CategoryPage;
