import React, { useEffect, useState } from "react";
import "../assets/css/components.scss";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <div className="navbar_wrapper">
      <div className="nav_section">
        <div className="logo">
          <NavLink to="/">
            <img className="img1" src={logo} />
          </NavLink>
        </div>

        <NavLink
          to="/home"
          className={`${location.pathname === "/" ? "active " : ""}`}
        >
          Home
        </NavLink>

        <NavLink to="/about-us">About Us</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/recipes">Recipes</NavLink>
        <NavLink to="/outlets">Outlets</NavLink>
        <NavLink to="/contact">keep in Touch</NavLink>
      </div>
    </div>
  );
}

export default Navbar;
