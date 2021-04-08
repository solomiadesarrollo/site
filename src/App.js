import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Store } from "./store";
import "./App.css";
import Navbar from './components/Navbar';
import HomePage from './pages/Home';
import Carousel from './components/Carousel/Carousel';
import { carouselData } from './components/Carousel/carouselData';


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
        <Carousel slides={carouselData}/>
        <Switch>
          <Route path="/about">
            <div>Nosotros</div>
          </Route>
          <Route path="/contact">
            <div>Contacto</div>
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </Store.Provider>
  );
}

export default App;
