import React from "react";
import "./Cart.js";
import { RiDeleteBin6Line } from "react-icons/ri";

const Cart = ({ cartItems, handleRemoveFromCart, handleAddToCart }) => {
  return (
    <div className="cart">
      <h2>SHOPPING CART</h2>
      {cartItems.length === 0 ? (
        <p>There is no product in your cart!</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <div className="quantity-control">
              <button
                onClick={() => handleAddToCart(item, -1)}
                disabled={item.quantity === 1}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => handleAddToCart(item, 1)}>+</button>
            </div>
            <button onClick={() => handleRemoveFromCart(item)}>
              <RiDeleteBin6Line className="delete" />
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
