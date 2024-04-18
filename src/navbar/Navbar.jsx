import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <img
          className="log_img"
          src="/smallapplicationsquarelogo.png"
          alt="log-img"
        />
      </div>
      <div className="menu_list">
        <ul className="list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/pricing">Request Pricing</Link>
          </li>
          <li>
            <Link to="/career">Career</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="search_icon">
          <i className="fa fa-search"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
