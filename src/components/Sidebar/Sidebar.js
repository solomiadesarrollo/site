import { elastic as Menu } from "react-burger-menu";
import "./Sidebar.css";
import {Link} from "react-router-dom";

const Sidebar = () => {
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
      <a className="menu-item">
        Home
      </a>
      </Link>
      <Link
                to={{
                  pathname: "/",
                  state: {
                    toCategories: true,
                  },
                }}
                
              >
      <a className="menu-item">
       Colección
      </a>
      </Link>
      <Link
                to={{
                  pathname: "/",
                  state: {
                    toAboutUs: true,
                  },
                }}
               
              >
      <a className="menu-item" >
        Nosotras
      </a>
      </Link>
      
    </Menu>
  );
};

export default Sidebar;
