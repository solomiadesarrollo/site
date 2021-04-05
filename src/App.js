import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Store } from "./store";
import "./App.css";
import Navbar from './components/Navbar';

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
          <Route path="/">
            <HomnePage />
          </Route>
        </Switch>
      </Router>
    </Store.Provider>
  );
}

export default App;
