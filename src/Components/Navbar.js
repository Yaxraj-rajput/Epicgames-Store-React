import React from "react";

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
              <a className="active" href="#">
                Discover
              </a>
            </li>
            <li>
              <a href="#">Browse</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="right">
        <div className="links">
          <ul>
            <li>
              <a href="#">Wishlist</a>
            </li>
            <li>
              <a href="#">Cart</a>
              <span className="cart-amt">2</span>
            </li>
          </ul>
        </div>

        <div className="devider"></div>

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
