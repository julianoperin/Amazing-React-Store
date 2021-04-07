import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CartScreen from "./screens/CartScreen";

//! Redux
import { useSelector, useDispatch } from "react-redux";
import SigninScreen from "./screens/SigninScreen";

const App = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  return (
    <Router>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              Amazing
            </Link>
          </div>
          <div>
            <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            <Link to="/signin">Sign In</Link>
          </div>
        </header>
        <main>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart/:id?" component={CartScreen} />
          <Route exact path="/signin" component={SigninScreen} />
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </Router>
  );
};

export default App;
