import { useParams } from "react-router";
import { useState, useEffect } from "react";
import sanityClient from "../../client";
import ProductDetail from "../../components/ProductDetail";
import { urlFor } from "../../utils/images";
import { parseCurrency } from "../../utils/currency";
import Recomended from "../../components/Recomended/Recomended";

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
        size,
        cares,
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
        console.log(prod);
        let firstImg = prod[0].defaultProductVariant.images[0];
        let upadtedProd = {
          title: prod[0].title,
          size: prod[0].size,
          cares: prod[0].cares,
          price: parseCurrency(prod[0].defaultProductVariant.price),
          imgUrl: urlFor(firstImg).url(),
          description: prod[0].description,
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
        size={product.size}
        cares={product.cares}
      />
      <Recomended />
    </div>
  );
};

export default ProductPage;
