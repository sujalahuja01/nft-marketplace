import React, { useState } from "react";
import logo from "@assets/psychoart.svg";
import search from "@assets/search.svg";
import ham from "@assets/hamburger.svg";
import cross from "@assets/cross.svg";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="container header-cnt">
      <nav className="header">
        <div className="logo" onClick={() => setIsOpen(false)}>
          <img src={logo} alt="" />
        </div>
        <div className="search-bar" onClick={() => setIsOpen(false)}>
          <img src={search} alt="" />
          <input type="text" placeholder="Search items and collections" />
        </div>

        <div className="nav-ul desktop">
          <ul>
            <li className="nav-link">
              <a href="#collection">Collections</a>
            </li>
            <li className="nav-link">
              <a href="#features">Features</a>
            </li>
            <li className="nav-link">
              <a href="#faqs">FAQ</a>
            </li>
            <button className="btn">Select Wallet</button>
          </ul>
        </div>
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <img src={isOpen ? cross : ham} alt="" />
        </div>
      </nav>

      {isOpen && (
        <div className="mobile-menu">
          <ul>
            <li className="nav-link" onClick={() => setIsOpen(false)}>
              <a href="#collection">Collections</a>
            </li>
            <li className="nav-link" onClick={() => setIsOpen(false)}>
              <a href="#features">Features</a>
            </li>
            <li className="nav-link" onClick={() => setIsOpen(false)}>
              <a href="#faqs">FAQ</a>
            </li>
            <button className="btn">Select Wallet</button>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
