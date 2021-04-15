import { useEffect, useState } from "react";
import sanityClient from "../../client.js";
import CategoryCard from "../CategoryCard/CategoryCard.js";
import '../CategoryList/CategoryList.css';
import { urlFor } from "../../utils/images.js";

const CategoryList = () => {
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type=="category" ]{
                title,
                slug,
                image
            }
            `
            )
            .then((data) => {

                let cat = data.map(cat => {
                    
                    return {
                        title: cat.title,
                        slug: cat.slug,
                        image: urlFor(cat.image).url()
                    }
                    
                    
                });
                setCategorias(cat);

            });
    }, []);


    return (
        <div><h2 className="category-section-title">categorías</h2>
            <div className="category-container">
                {categorias.map(categoria => {

                    return (
                        <CategoryCard
                            title={categoria.title}
                            image={categoria.image}

                        />


                    );

                })}


            </div>
        </div>


    )

};

export default CategoryList;