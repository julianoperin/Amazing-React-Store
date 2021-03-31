import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">
              Amazing
            </a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
          </div>
        </header>
        <main>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          {/* <Route exact path="/" component={HomeScreen} /> */}
          <HomeScreen />
          <ProductScreen />
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </Router>
  );
};

export default App;
