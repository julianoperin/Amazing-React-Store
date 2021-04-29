import { useEffect, useState } from "react";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import logo from "./assets/logo1.svg";
import logoMobile from "./assets/mobile-logo.svg";
import cartt from "./assets/cart.svg";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CartScreen from "./screens/CartScreen";
import Footer from "./components/Footer";

//! Private Routes
import PrivateRoute from "./components/PrivateRoute";
import AdminRoute from "./components/AdminRoute";
import SellerRoute from "./components/SellerRoute";
import SearchBox from "./components/SearchBox";

//! Redux
import { useSelector, useDispatch } from "react-redux";
import SigninScreen from "./screens/SigninScreen";
import RegisterScreen from "./screens/RegisterScreen";
import { signout } from "./actions/userActions";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";
import PaymentMethodScreen from "./screens/PaymentMethodScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import OrderHistoryScreen from "./screens/OrderHistoryScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import SellerScreen from "./screens/SellerScreen";
import SearchScreen from "./screens/SearchScreen";
import { listProductsCategories } from "./actions/productActions";
import LoadingBox from "./components/LoadingBox";
import MessageBox from "./components/MessageBox";

const App = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();

  const signoutHandler = () => {
    dispatch(signout());
    setSidebarIsOpen(false);
  };

  //! To use side categories on side list
  useEffect(() => {
    dispatch(listProductsCategories());
  }, [dispatch]);

  return (
    <Router>
      <div className="grid-container">
        <nav className="header">
          {/* LOGO  */}
          <Link to="/" className="main__logo">
            <img className="header__logo" src={logo} alt="Amazing" />
          </Link>

          {/* Address */}

          {/* Burger Menu */}
          <button
            type="button"
            className="open-sidebar"
            onClick={() => setSidebarIsOpen(true)}
          >
            <i className="fa fa-bars"></i>
          </button>

          {/* Mobile Logo */}
          <Link className="mobile__logo" to="/">
            <img
              className="header__logo__mobile"
              src={logoMobile}
              alt="Amazing"
            />
          </Link>

          {/* SEARCH BOX */}
          <Route
            render={({ history }) => <SearchBox history={history}></SearchBox>}
          ></Route>

          {/* Links and cart */}
          <div className="header__nav">
            <div className="dropdown-section">
              {userInfo ? (
                <div className="dropdown">
                  <Link to="#" className="header__option">
                    <span className="header__optionLineOne">
                      Hello, {userInfo.name}
                    </span>
                    <span className="header__optionLineTwo">
                      Account & Orders <i className="fa fa-caret-down"></i>
                    </span>
                  </Link>
                  <ul className="dropdown-content">
                    <li>
                      <Link to="/orderhistory">Order History</Link>
                    </li>
                    <li>
                      <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                      <Link to="#signout" onClick={signoutHandler}>
                        Sign Out
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                <Link className="header__option" to="/signin">
                  <span className="header__optionLineOne">Hello, Sign in</span>
                  <span className="header__optionLineTwo">
                    Account & Orders <i className="fa fa-caret-down"></i>
                  </span>
                </Link>
              )}

              {userInfo && userInfo.isAdmin && (
                <div className="dropdown">
                  <Link to="#admin" className="header__option">
                    <span className="header__optionLineOne">Admin</span>
                    <span className="header__optionLineTwo">
                      & Manage <i className="fa fa-caret-down"></i>
                    </span>
                  </Link>
                  <ul className="dropdown-content-small">
                    {/* <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li> */}
                    <li>
                      <Link to="/productlist">Products</Link>
                    </li>
                    <li>
                      <Link to="/orderlist">Orders</Link>
                    </li>
                    <li>
                      <Link to="/userlist">Users</Link>
                    </li>
                  </ul>
                </div>
              )}

              {userInfo && userInfo.isSeller && (
                <div className="dropdown">
                  <Link to="#seller" className="header__option">
                    <span className="header__optionLineOne">Seller</span>
                    <span className="header__optionLineTwo">
                      & Products <i className="fa fa-caret-down"></i>
                    </span>
                  </Link>
                  <ul className="dropdown-content-small">
                    {/* <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li> */}
                    <li>
                      <Link to="/productlist/seller">Products</Link>
                    </li>
                    <li>
                      <Link to="/orderlist/seller">Orders</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="cart-all">
            <Link to="/cart" className="cart">
              <img className="cart-icon" src={cartt} alt="cart" />
              {cartItems.length > 0 ? (
                <span className="badge">{cartItems.length}</span>
              ) : (
                <span className="badge">0</span>
              )}
            </Link>
          </div>
        </nav>

        {/*** ASIDE ****/}
        <aside className={sidebarIsOpen ? "open" : ""}>
          <div className="dropdown-section-mobile">
            <button
              onClick={() => setSidebarIsOpen(false)}
              className="close-sidebar"
              type="button"
            >
              <i className="fa fa-close"></i>
            </button>

            {userInfo ? (
              <div className="dropdown-mobile">
                <Link to="#">
                  <span className="gretting">Hello</span>, {userInfo.name}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link
                      to="/orderhistory"
                      onClick={() => setSidebarIsOpen(false)}
                    >
                      <i class="fas fa-caret-right"></i> Order History
                    </Link>
                  </li>
                  <li>
                    <Link to="/profile" onClick={() => setSidebarIsOpen(false)}>
                      <i class="fas fa-caret-right"></i> Profile
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              ""
            )}

            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin" className="gretting">
                  Admin
                </Link>
                <ul className="dropdown-content-small">
                  {/* <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li> */}
                  <li>
                    <Link
                      to="/productlist"
                      onClick={() => setSidebarIsOpen(false)}
                    >
                      <i class="fas fa-caret-right"></i> Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/orderlist"
                      onClick={() => setSidebarIsOpen(false)}
                    >
                      <i class="fas fa-caret-right"></i> Orders
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/userlist"
                      onClick={() => setSidebarIsOpen(false)}
                    >
                      <i class="fas fa-caret-right"></i> Users
                    </Link>
                  </li>
                </ul>
              </div>
            )}
            {userInfo && userInfo.isSeller && (
              <div className="dropdown">
                <Link to="#seller" className="gretting">
                  Seller
                </Link>
                <ul className="dropdown-content-small">
                  {/* <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li> */}
                  <li>
                    <Link
                      to="/productlist/seller"
                      onClick={() => setSidebarIsOpen(false)}
                    >
                      <i class="fas fa-caret-right"></i> Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/orderlist/seller"
                      onClick={() => setSidebarIsOpen(false)}
                    >
                      <i class="fas fa-caret-right"></i> Orders
                    </Link>
                  </li>
                </ul>
              </div>
            )}

            {userInfo ? (
              <div className="dropdown">
                <Link to="#signout" onClick={signoutHandler} className="user">
                  <i class="fas fa-sign-out-alt"></i> Sign Out
                </Link>
              </div>
            ) : (
              <div className="dropdown">
                <Link
                  to="/signin"
                  className="user"
                  onClick={() => setSidebarIsOpen(false)}
                >
                  <i class="fas fa-user-plus"></i> Sign In
                </Link>
              </div>
            )}
          </div>
        </aside>
        <main>
          <Route path="/seller/:id" component={SellerScreen} />
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/product/:id/edit" component={ProductEditScreen} />
          <Route exact path="/search/name/:name?" component={SearchScreen} />

          <Route
            exact
            path="/search/category/:category"
            component={SearchScreen}
          />
          <Route
            exact
            path="/search/category/:category/name/:name"
            component={SearchScreen}
          />
          <Route
            path="/search/category/:category/name/:name/min/:min/max/:max/rating/:rating/order/:order"
            component={SearchScreen}
            exact
          ></Route>

          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/signin" component={SigninScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/shipping" component={ShippingAddressScreen} />
          <Route path="/payment" component={PaymentMethodScreen} />
          <Route path="/placeorder" component={PlaceOrderScreen} />
          <Route path="/order/:id" component={OrderScreen} />
          <Route path="/orderhistory" component={OrderHistoryScreen} />
          <PrivateRoute path="/profile" component={ProfileScreen} />
          <AdminRoute exact path="/productlist" component={ProductListScreen} />
          <AdminRoute exact path="/orderlist" component={OrderListScreen} />
          <AdminRoute path="/userlist" component={UserListScreen} />
          <AdminRoute path="/user/:id/edit" component={UserEditScreen} />
          <SellerRoute
            path="/productlist/seller"
            component={ProductListScreen}
          />
          <SellerRoute path="/orderlist/seller" component={OrderListScreen} />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
