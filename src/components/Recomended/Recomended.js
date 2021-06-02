import { useEffect, useState } from "react";
import sanityClient from "../../client.js";
import { urlFor } from "../../utils/images.js";
import RecomendedCard from "../RecomendedCard/RecomendedCard";
import AliceCarousel from "react-alice-carousel";
import "./Recomended.css";

const ProductsFeatures = () => {
  const [products, setProducts] = useState([]);

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

  const handleProdClick = (slug) => {
    console.log(slug);
  };

  const items = products.map((item) => {
    return (
      <RecomendedCard
        key={item.title}
        title={item.title}
        imgUrl={item.imgUrl}
        price={item.price}
        slug={item.slug.current}
      />
    );
  });

  const responsive = {
    0: { items: 1 },
    768: { items: 4 },
  };

  return (
    <>
      {items.length > 0 ? (
        <>
          <div className="title__recomended-container">
            <h2 className="recomended__title">recomendados</h2>
          </div>
          <div className="recomended-container">
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
              handleClick={(s) => handleProdClick(s)}
            />
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default ProductsFeatures;
