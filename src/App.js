import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import Footer from "./components/Footer/Footer";
import ViewportProvider from "./components/ViewportProvider";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  return (
    <ViewportProvider>
      <div id="outer-container">
        <Router>
          <Sidebar
            pageWrapId={"page-wrap"}
            outerContainerId={"outer-container"}
          />
          <Navbar />
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
