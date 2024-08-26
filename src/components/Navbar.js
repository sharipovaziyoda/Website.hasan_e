import React from "react";
import { Link } from "react-router-dom";
import { TbHexagonLetterH } from "react-icons/tb";
import { MdOutlineShoppingBag } from "react-icons/md";
const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        <TbHexagonLetterH className="icon" />
      </Link>
      <Link to="/cart" className="nav-link">
        <MdOutlineShoppingBag className="icon1" />
        {cartCount > 0 && <span className="cart-count">({cartCount})</span>}
      </Link>
    </nav>
  );
};

export default Navbar;
