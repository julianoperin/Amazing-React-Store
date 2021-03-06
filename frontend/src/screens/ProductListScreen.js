import React, { useEffect } from "react";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

import { PRODUCT_CREATE_RESET } from "../constant/productConstants";
import { PRODUCT_DELETE_RESET } from "../constant/productConstants";

//! Redux
import { useDispatch, useSelector } from "react-redux";
import {
  createProduct,
  deleteProduct,
  listProducts,
} from "../actions/productActions";

const ProductListScreen = (props) => {
  const sellerMode = props.match.path.indexOf("seller") >= 0;

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  //! Product Create
  const productCreate = useSelector((state) => state.productCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  //! Product Delete
  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete;

  const dispatch = useDispatch();

  useEffect(() => {
    if (!userSignin) {
      props.history.push("/");
    }
    if (successCreate) {
      dispatch({ type: PRODUCT_CREATE_RESET });
      props.history.push(`/product/${createdProduct._id}/edit`);
    }
    if (successDelete) {
      dispatch({ type: PRODUCT_DELETE_RESET });
    }
    dispatch(listProducts({ seller: sellerMode ? userInfo._id : "" }));
  }, [
    createdProduct,
    dispatch,
    props.history,
    sellerMode,
    successCreate,
    successDelete,
    userInfo._id,
  ]);

  const deleteHandler = (product) => {
    if (window.confirm("Are you sure you want to delete this product?"))
      dispatch(deleteProduct(product._id));
  };

  const createHandler = () => {
    dispatch(createProduct());
  };

  return (
    <div className="wrap-container">
      <div className="row">
        <h1>Products</h1>
        <button type="button" className="primary" onClick={createHandler}>
          Create Product
        </button>
      </div>
      {loadingDelete && <LoadingBox></LoadingBox>}
      {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}
      {loadingCreate && <LoadingBox></LoadingBox>}
      {errorCreate && <MessageBox variant="danger">{errorCreate}</MessageBox>}
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <table className="table__product__list__screen">
          <thead>
            <tr>
              <th>Image</th>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Brand</th>
              <th>EDIT / DELETE</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="small"
                  />
                </td>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>{product.category}</td>
                <td>{product.brand}</td>
                <td>
                  <button
                    type="button"
                    className="small"
                    onClick={() =>
                      props.history.push(`/product/${product._id}/edit`)
                    }
                  >
                    <i className="fas fa-edit"></i>
                  </button>
                  <button
                    type="button"
                    className="small"
                    onClick={() => deleteHandler(product)}
                  >
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductListScreen;
