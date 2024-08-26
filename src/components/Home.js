import React from "react";
import ProductList from "./ProductList";
import "./Home.js";

const Home = ({ handleAddToCart }) => {
  return (
    <div>
      <div className="hero-image">
        <img src="./image.png" width="100%" />
        <h1 className="text">PRODUCTS</h1>
      </div>
      <ProductList handleAddToCart={handleAddToCart} />
    </div>
  );
};

export default Home;
