import React from "react";
import logo from "@assets/psychoart.svg";
import search from "@assets/search.svg";

import "./Header.css";
const Header = () => {
  return (
    <header className="container header-cnt">
      <nav className="header">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="search-bar">
          <img src={search} alt="" />
          <input type="text" placeholder="Search items and collections" />
        </div>
        <div className="nav-ul">
          <ul>
            <li className="nav-link">
              <a href="">Collections</a>
            </li>
            <li className="nav-link">
              <a href="">Features</a>
            </li>
            <li className="nav-link">
              <a href="">FAQ</a>
            </li>
            <button className="btn">Select Wallet</button>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
