import React from "react";
import loader from "../assets/loader.gif";

const LoadingBox = () => {
  return (
    <div className="loading">
      <img src={loader} alt="loader" />
    </div>
  );
};

export default LoadingBox;
