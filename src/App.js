import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import Footer from "./components/Footer/Footer";
import ViewportProvider from "./components/ViewportProvider";
import Sidebar from "./components/Sidebar";
import "./App.css";
import WaButton from "./components/WaButton";
import Modal from "./components/Modal/Modal";
import { useState } from "react";

function App() {
  const [active, setActive] = useState(true);

  const toggle = () => {
    setActive(!active);
  }

  return (
    <ViewportProvider>
      <div id="router-container">
        <Modal active={active} toggle={toggle}>
          <h2 className="modal__title">¿Cómo comprar?</h2>
          <p className="modal__text">
            Elegí el producto que más te guste de nuestra tienda y contáctanos
             por What's App para finalizar el proceso.</p>
        </Modal>
        <Router>
          <Sidebar
            pageWrapId={"page-wrap"}
            outerContainerId={"outer-container"}
          />
          <Navbar />
          <WaButton />
          <Switch>
            <Route path="/categoria/:slug">
              <CategoryPage />
            </Route>
            <Route path="/producto/:slug">
              <ProductPage />
            </Route>
            <Route path="/about"></Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    </ViewportProvider>
  );
}

export default App;
