import React from "react";
import "./Header.scss";
import { NavLink, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>

      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/" className="option">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Header;
