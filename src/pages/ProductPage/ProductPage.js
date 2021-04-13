import { useParams } from "react-router";
import { useState, useEffect } from "react";
import sanityClient from "../../client";
import ProductDetail from "../../components/ProductDetail";
import { urlFor } from "../../utils/images"
import { parseCurrency } from "../../utils/currency";

const ProductPage = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    console.log(slug);
    sanityClient
      .fetch(
        `*[_type=="product" && slug.current=="${slug}" ]{
        title,
        slug,
        description,
        defaultProductVariant{
            title,
            price,
            images
        }
    }
    `
      )
      .then((prod) => {

        console.log(prod)
        let firstImg = prod[0].defaultProductVariant.images[0];
        let upadtedProd = {
          title: prod[0].title,
          price: parseCurrency(prod[0].defaultProductVariant.price),
          imgUrl: urlFor(firstImg).url(),
          description: prod[0].description
        };
        setProduct(upadtedProd);
      });
  }, []);

  return (
    <div>
      <ProductDetail
        title={product.title}
        price={product.price}
        imageUrl={product.imgUrl}
        description={product.description}
      />
    </div>
  );
};

export default ProductPage;
