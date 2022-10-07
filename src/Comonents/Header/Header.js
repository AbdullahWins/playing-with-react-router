import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="nav">
      <Link to="/home">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Header;
