import "./styles.css";

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);
    if (exists) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...exists, quantity: exists.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  };

  return (
    <Router>
      <Navbar
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
      />
      <Routes>
        <Route path="/" element={<Home handleAddToCart={handleAddToCart} />} />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              handleRemoveFromCart={handleRemoveFromCart}
              handleAddToCart={handleAddToCart}
            />
          }
        />
        <Route
          path="/product/:id"
          element={<ProductDetails handleAddToCart={handleAddToCart} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
