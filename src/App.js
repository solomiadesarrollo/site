import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Store } from "./store";
import "./App.css";

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
        <div>HEADER</div>
        <Switch>
          <Route path="/about">
            <div>Nosotros</div>
          </Route>
          <Route path="/">
            <div>HOME</div>
          </Route>
        </Switch>
      </Router>
    </Store.Provider>
  );
}

export default App;
