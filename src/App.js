import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
        <div>
          HEADER
        </div>
      <Switch>
        <Route path="/about">
          <div>
            Nosotros
          </div>
        </Route>
        <Route path="/">
            <div>
              HOME
            </div>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
