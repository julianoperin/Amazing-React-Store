import React, { useEffect } from "react";

//! Redux
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import { detailsUser } from "../actions/userActions";

import Rating from "../components/Rating";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Product from "../components/Product";

const SellerScreen = (props) => {
  const sellerId = props.match.params.id;

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const productList = useSelector((state) => state.productList);
  const {
    loading: loadingProducts,
    error: errorProducts,
    products,
  } = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsUser(sellerId));
    dispatch(listProducts({ seller: sellerId }));
  }, [dispatch, sellerId]);

  return (
    <div className="row top wrap-container ">
      <div className="col-1">
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <ul className="card card-body card-body-profile card-border">
            <li>
              <div className="row start">
                <div className="p-1">
                  <img
                    className="profile-img"
                    src={user.seller.logo}
                    alt={user.seller.name}
                  />
                </div>
                <div className="p-1">
                  <h1>{user.seller.name}</h1>
                </div>
              </div>
            </li>
            <li>
              <Rating
                rating={user.seller.rating}
                numReviews={user.seller.numReviews}
              ></Rating>
            </li>
            <li>
              <a href={`mailto:${user.email}`} target="_blank" rel="noreferrer">
                <i className="fas fa-envelope"></i> Contact Vendor
              </a>
            </li>
            <li>
              <strong>Description: </strong>
              {user.seller.description}
            </li>
          </ul>
        )}
      </div>
      <div className="col-3">
        {loadingProducts ? (
          <LoadingBox></LoadingBox>
        ) : errorProducts ? (
          <MessageBox variant="danger">{errorProducts}</MessageBox>
        ) : (
          <>
            {products.length === 0 && (
              <MessageBox>No Products Found</MessageBox>
            )}
            <div className="row center">
              {products.map((product) => (
                <Product key={product._id} product={product} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SellerScreen;
