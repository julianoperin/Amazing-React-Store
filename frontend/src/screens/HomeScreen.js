import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { carousel } from "react-responsive-carousel";
import Product from "../components/Product";
import MessageBox from "../components/MessageBox";
import LoadingBox from "../components/LoadingBox";

//! Redux
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../actions/productActions";
import { listTopSellers } from "../actions/userActions";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;

  useEffect(() => {
    dispatch(listProducts({}));
    dispatch(listTopSellers());
  }, [dispatch]);

  const topSellers = useSelector((state) => state.topSellers);
  const { topSellersProducts } = topSellers;
  console.log(topSellersProducts);

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          {products.length > 0 ? (
            products.map((product) => (
              <Product key={product._id} product={product} />
            ))
          ) : (
            <h2>No Products Found</h2>
          )}
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
