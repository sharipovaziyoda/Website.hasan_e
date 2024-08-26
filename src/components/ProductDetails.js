import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import products from "./products";
import "./ProductDetails.js";

const ProductDetails = ({ handleAddToCart }) => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const loadProduct = () => {
      const foundProduct = products.find((p) => p.id === parseInt(id));
      setProduct(foundProduct);
      setLoading(false);
    };

    setTimeout(loadProduct, 1000); // Simulating loading time
  }, [id]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />
      <div className="details">
        <h1>{product.text}</h1>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Category: {product.category}</p>
        <p className="price"> ${product.price}</p>
        <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
