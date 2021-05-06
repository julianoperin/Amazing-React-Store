import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

export default function Product(props) {
  const { product } = props;
  return (
    <div key={product._id} className="card">
      <Link to={`/product/${product._id}`}>
        <img className="medium" src={product.image} alt={product.name} />
      </Link>

      <div className="card-body">
        <Link to={`/product/${product._id}`}>
          <h2 className="card-title">{product.name}</h2>
        </Link>

        <Rating
          rating={product.rating}
          numReviews={product.numReviews}
        ></Rating>

        <div className="card-price">${product.price}</div>

        <div>
          {product.seller?._id && product.seller?.seller?.name && (
            <Link className="card-seller" to={`/seller/${product.seller._id}`}>
              <strong>
                <i class="fas fa-shopping-bag"></i> Vendor:
              </strong>{" "}
              {product.seller.seller.name}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
