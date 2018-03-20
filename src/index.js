import "purecss/build/pure.css";
import ReactDOM from "react-dom";
import React from "react";
import "./styles/style.css";
import Loadable from "react-loadable";
import About from "./components/About";
import Product from "./components/Product";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
  Switch
} from "react-router-dom";

// import Loading from "./components/Loading";

// const AboutLoaderComp = Loadable({
//   loader: () => import("./components/About"),
//   loading: Loading
// });
// const ProductLoaderComp = Loadable({
//   loader: () => import("./components/Product"),
//   loading: Loading
// });

const App = () => {
  return (
    <div>
      <h2>App...</h2>
    </div>
  );
};

const Routes = (
  <div>
    <Router>
      <div>
        <div className="pure-menu pure-menu-horizontal">
          <a href="#" className="pure-menu-heading pure-menu-link">
            React!!
          </a>

          <ul className="pure-menu-list">
            <li className="pure-menu-item">
              <NavLink
                exact
                activeClassName="active"
                to="/"
                className="pure-menu-link"
              >
                Home
              </NavLink>
            </li>
            <li className="pure-menu-item">
              <NavLink
                activeClassName="active"
                to="/about"
                className="pure-menu-link"
              >
                About
              </NavLink>
            </li>
            <li className="pure-menu-item">
              <NavLink
                activeClassName="active"
                to="/products"
                className="pure-menu-link"
              >
                Products
              </NavLink>
            </li>
          </ul>
        </div>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/about" render={About} />
          <Route path="/products" component={Product} />
        </Switch>
      </div>
    </Router>
  </div>
);

ReactDOM.render(<div>{Routes}</div>, document.getElementById("app"));
if (module.hot) {
  module.hot.accept();
}
