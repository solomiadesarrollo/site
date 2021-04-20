import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Store } from "./store";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import Footer from './components/Footer/Footer';
import AboutUs from './components/AboutUs/AboutUs';
import BrandFeatures from './components/BrandFeatures/BrandFeatures';

function App() {
  const [data, setData] = useState({
    cart: {
      total: 0,
      itemsQty: 0,
      items: [],
    },
  });

  return (
    <Store.Provider value={[data, setData]}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/about">
            <div>Nosotros</div>
          </Route>
          <Route path="/categoria/:slug">
            <CategoryPage />
          </Route>
          <Route path="/producto/:slug">
            <ProductPage />
          </Route>
          <Route path="/contact">
            <div>Contacto</div>
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>        
        <Footer />
        <AboutUs />
        <BrandFeatures />
      </Router>
    </Store.Provider>
  );
}

export default App;
