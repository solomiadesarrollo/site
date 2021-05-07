import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import whatsapp_icon from "../../assets/icons/whatsapp_icon.svg";
import facebook_icon from "../../assets/icons/facebook_icon.svg";
import ig_icon from "../../assets/icons/ig_icon.svg";
import { useViewport } from "../ViewportProvider";
import "./Navbar.css";

const Navbar = () => {
  const { width } = useViewport();

  const breakpoint = 768;

  const mobile = breakpoint >= width ? "mobile" : "";

  return (
    <nav className={`navbar-container ${mobile}`}>
      <Link
        to={{
          pathname: "/",
          state: {
            toHome: true,
          },
        }}
      >
        <img
          src={logo}
          className={`navbar-logo ${mobile}`}
          alt="ENOLA BAIRES"
        />
      </Link>

      {mobile !== "" ? (
        ""
      ) : (
        <>
          <div className="navbar-menu">
            <ul>
              <Link
                to={{
                  pathname: "/",
                  state: {
                    toHome: true,
                  },
                }}
                className="navbar__link"
              >
                <li className="nav__item">HOME</li>
              </Link>
              <Link
                to={{
                  pathname: "/",
                  state: {
                    toCategories: true,
                  },
                }}
                className="navbar__link"
              >
                <li className="nav__item">COLECCIÓN</li>
              </Link>
              <Link
                to={{
                  pathname: "/",
                  state: {
                    toAboutUs: true,
                  },
                }}
                className="navbar__link"
              >
                <li className="nav__item">NOSOTRAS</li>
              </Link>
            </ul>
          </div>
          <div className={`navbar-social ${mobile}`}>
            <ul>
              <li>
                <a
                  className=""
                  href="https://web.whatsapp.com/send?phone=5491158496538"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={whatsapp_icon}
                    className={`social-icons ${mobile}`}
                    alt="whatsapp icon"
                  />
                </a>
              </li>
              <li>
                <a
                  className=""
                  href="https://www.instagram.com/enola.baires/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={ig_icon}
                    className={`social-icons ${mobile}`}
                    alt="instagram icon"
                  />
                </a>
              </li>
              <li>
                <a
                  className=""
                  href="https://www.facebook.com/Enola-Baires-105404571634738"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={facebook_icon}
                    className={`social-icons ${mobile}`}
                    alt="facebook icon"
                  />
                </a>
              </li>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
