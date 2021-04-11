import React from "react";
import CheckoutSteps from "../components/CheckoutSteps";
import { cartReducer } from "../reducers/cartReducers";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const PlaceOrderScreen = (props) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress, paymentMethod, cartItems } = cart;

  if (!paymentMethod) {
    props.history.push("/payment");
  }

  //! Order Summary
  const toPrice = (num) => Number(num.toFixed(2)); // 5.123 => "5.12" => 5.12
  cart.itemsPrice = toPrice(
    cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  );
  cart.shippingPrice = cart.itemsPrice > 100 ? toPrice(0) : toPrice(10);
  cart.taxPrice = toPrice(0.15 * cart.itemsPrice);
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;
  const placeOrderHandler = () => {
    // TODO: dispatch place order action
  };

  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      <div className="row top">
        <div className="col-2">
          <ul>
            <li>
              <div>
                <div className="card card-body">
                  <h2>Shipping</h2>
                  <p>
                    <strong>Name: </strong>
                    {cart.shippingAddress.fullName} <br />
                    <strong>Address: </strong>
                    {shippingAddress.address} <br />
                    <strong>City: </strong>
                    {shippingAddress.city} <br />
                    <strong>Postal Code: </strong>
                    {shippingAddress.postalCode} <br />
                    <strong>Country: </strong>
                    {shippingAddress.country} <br />
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div>
                <div className="card card-body">
                  <h2>Payment</h2>
                  <p>
                    <strong>Payment Method: </strong>
                    {cart.paymentMethod} <br />
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div>
                <div className="card card-body">
                  <h2>Order Items</h2>
                  <ul>
                    {cartItems.map((item) => (
                      <li key={item.product}>
                        <div className="row">
                          <div>
                            <img
                              src={item.image}
                              alt={item.name}
                              className="small"
                            />
                          </div>
                          <div className="min-30">
                            <Link to={`/product/${item.product}`}>
                              {item.name}
                            </Link>
                          </div>

                          <div>
                            {item.qty} x $ {item.price} = $
                            {item.qty * item.price}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-1">
                  <div className="card card-body">
                    <ul>
                      <li>
                        <h2>
                          Subtotal (
                          {cartItems.reduce((acc, cv) => acc + cv.qty, 0)}{" "}
                          items) : ${" "}
                          {cartItems.reduce(
                            (acc, cv) => acc + cv.price * cv.qty,
                            0
                          )}
                        </h2>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <h2>Order Summary</h2>
              </li>
              <li>
                <div className="row">
                  <div>Items</div>
                  <div>${cart.itemsPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Shipping </div>
                  <div>${cart.shippingPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Tax</div>
                  <div>${cart.taxPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>
                    <strong> Order Total</strong>
                  </div>
                  <div>
                    <strong>${cart.totalPrice.toFixed(2)}</strong>
                  </div>
                </div>
              </li>
              <li>
                <button
                  type="button"
                  onClick={placeOrderHandler}
                  className="primary block"
                  disabled={cart.cartItems.length === 0}
                >
                  Place Order
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrderScreen;
