import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeItemFromCart } from "../actions/cartActions";
import { Link } from "react-router-dom";

import MessageBox from "../components/MessageBox";

//! Redux

const CartScreen = (props) => {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;

  const cart = useSelector((state) => state.cart);
  const { cartItems, error } = cart;

  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const checkOutHandler = () => {
    props.history.push("/signin?redirect=shipping");
  };

  return (
    <div className="row top wrap-container">
      <div className="col-2">
        <h1>Shopping Cart</h1>
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        {cartItems.length === 0 ? (
          <MessageBox>
            Cart is empty. <Link to="/">Go Shopping</Link>
          </MessageBox>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.product}>
                <div className="row card-border cart-items-screen">
                  <div>
                    <img src={item.image} alt={item.name} className="small" />
                  </div>
                  <div>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </div>
                  <div>
                    <select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {" "}
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>$ {item.price}</div>
                  <button
                    type="button"
                    onClick={() => removeFromCartHandler(item.product)}
                  >
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="col-1">
        <div className="card card-body card-border">
          <ul>
            <li>
              <h2>
                Subtotal ({cartItems.reduce((acc, cv) => acc + cv.qty, 0)}{" "}
                items) : ${" "}
                {cartItems
                  .reduce((acc, cv) => acc + cv.price * cv.qty, 0)
                  .toFixed(2)}
              </h2>
            </li>
            <li>
              <button
                type="button"
                onClick={checkOutHandler}
                className="primary block"
                disabled={cartItems.length === 0}
              >
                Proceed to Checkout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
