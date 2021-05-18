import { useState, useEffect } from "react";
import { elastic as Menu } from "react-burger-menu";
import sanityClient from "../../client.js";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="category" && featured!=true]{
                title,
                slug,
            }
            `
      )
      .then((data) => {
        let cat = data.map((cat) => {
          return {
            title: cat.title,
            slug: cat.slug.current,
          };
        });
        console.log(cat);
        setCategorias(cat);
      });
  }, []);

  return (
    <Menu right>
      <Link
        to={{
          pathname: "/",
          state: {
            toHome: true,
          },
        }}
      >
        <a className="menu-item">Home</a>
      </Link>

      {categorias.map((cat) => (
        <a className="menu-item" href={`/categoria/${cat.slug}`}>
          {cat.title}
        </a>
      ))}
      <Link
        to={{
          pathname: "/",
          state: {
            toAboutUs: true,
          },
        }}
      >
        <a className="menu-item">Nosotras</a>
      </Link>
    </Menu>
  );
};

export default Sidebar;
