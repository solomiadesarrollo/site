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
  };

  return (
    <Router>
      <ViewportProvider>
        <div id="router-container">
          <Modal active={active} toggle={toggle}>
            <h2 className="modal__title">¿Cómo comprar?</h2>
            <p className="modal__text">
              Elegí el producto que más te guste de nuestra tienda y contáctanos
              por WhatsApp para finalizar el proceso.
            </p>
          </Modal>
          <Sidebar
            pageWrapId={"page-wrap"}
            outerContainerId={"outer-container"}
          />
          <Navbar />
          <WaButton />
          <Switch>
            <Route
              path="/producto/:slug"
              component={(props) => (
                <ProductPage
                  timestamp={new Date().getTime().toString()}
                  {...props}
                />
              )}
            />
            <Route exact path="/categoria/:slug" component={CategoryPage} />
            <Route exact path="/nosotras" />
            <Route exact path="/" component={HomePage} />
          </Switch>
          <Footer />
        </div>
      </ViewportProvider>
    </Router>
  );
}

export default App;
