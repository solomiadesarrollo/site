import sanityClient from "../../client.js";
import { useEffect, useState } from "react";

const CategoryPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="category" && title=="Riñoneras" ]{
            title,
            "products": *[_type=="product" && references(^._id)]
        }
        `
      )
      .then((data) => {
          console.log(data)
        setProducts(data);
      });
  }, []);

  return (
    <div>
      {products.map((item) => {
        return (
          <div>
            <h1>{item.title}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryPage;
