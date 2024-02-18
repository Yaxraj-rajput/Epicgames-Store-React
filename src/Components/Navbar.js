import React from "react";
import Devider from "./UI/Devider";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <button className="back-btn">
          <i class="fa-solid fa-angle-left"></i>
        </button>
        <div className="search-bar">
          <i className="fa-solid fa-search"></i>
          <input type="text" placeholder="Search Store" />
        </div>
        <div className="links">
          <ul>
            <li>
              <NavLink activeClassName="active" to="/">
                Discover
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/browse">
                Browse
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/news">
                News
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="right">
        <div className="links">
          <ul>
            <li>
              <NavLink to="#">Wishlist</NavLink>
            </li>
            <li>
              <NavLink to="#">Cart</NavLink>
              <span className="cart-amt">2</span>
            </li>
          </ul>
        </div>

        <Devider />

        <div className="buttons">
          <button>
            <i class="fa-solid fa-user-group"></i>
            <span>1</span>
          </button>
          <button className="login-btn">U</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
