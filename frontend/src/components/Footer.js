import React from "react";
// import "./Footer.scss";

import BackToTop from "../components/BackToTop";

const Footer = () => {
  return (
    <footer className="footer">
      <BackToTop />
      <div className="container-footer">
        <div className="row-footer">
          <div className="footer-col">
            <h4>company</h4>
            <ul>
              <li>
                <a href="#">about us</a>
              </li>
              <li>
                <a href="#">our services</a>
              </li>
              <li>
                <a href="#">privacy policy</a>
              </li>
              <li>
                <a href="#">affiliate program</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>get help</h4>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">shipping</a>
              </li>
              <li>
                <a href="#">returns</a>
              </li>
              <li>
                <a href="#">order status</a>
              </li>
              <li>
                <a href="#">payment options</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>indoor plants</h4>
            <ul>
              <li>
                <a href="#">outdoor plants</a>
              </li>
              <li>
                <a href="#">referrals</a>
              </li>
              <li>
                <a href="#">gift card</a>
              </li>
              <li>
                <a href="#">careers</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>indoor plants</h4>
            <ul>
              <li>
                <a href="#">outdoor plants</a>
              </li>
              <li>
                <a href="#">referrals</a>
              </li>
              <li>
                <a href="#">gift card</a>
              </li>
              <li>
                <a href="#">careers</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
