import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="nav">
      <NavLink
        className={({ isActive }) => (isActive ? "active" : undefined)}
        to="/home"
      >
        Home
      </NavLink>
      <NavLink to="/shop">Shop</NavLink>
      <NavLink to="/posts">Posts</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  );
};

export default Header;
