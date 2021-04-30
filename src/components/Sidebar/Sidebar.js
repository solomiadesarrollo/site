import { elastic as Menu } from "react-burger-menu";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <Menu right>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/salads">
        Productos
      </a>
      <a className="menu-item" href="/pizzas">
        Nuestro Proyecto
      </a>
      <a className="menu-item" href="/desserts">
        Como Comprar
      </a>
    </Menu>
  );
};

export default Sidebar;
