import React from "react";
import { Link } from "react-router-dom";
import products from "./products";
import "./ProductList.js";
import { IoCartOutline } from "react-icons/io5";

const ProductList = ({ handleAddToCart }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt={product.name} />
          </Link>
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => handleAddToCart(product)}>
            <IoCartOutline className="savat"/>
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
