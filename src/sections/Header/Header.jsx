import React, { useState, useEffect } from "react";
import logo from "@assets/psychoart.svg";
import search from "@assets/search.svg";
import ham from "@assets/hamburger.svg";
import cross from "@assets/cross.svg";
import "./Header.css";

function Naigation({ onClick }) {
  return (
    <ul className="nav-ul">
      <li className="nav-link" onClick={onClick}>
        <a href="#collection">Collections</a>
      </li>
      <li className="nav-link" onClick={onClick}>
        <a href="#features">Features</a>
      </li>
      <li className="nav-link" onClick={onClick}>
        <a href="#faqs">FAQ</a>
      </li>
      <button className="btn header-btn ">Select Wallet</button>
    </ul>
  );
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  return (
    <header className="header-cnt ">
      <nav className="header ">
        <div className="logo" onClick={() => setIsOpen(false)}>
          <a href="#hero">
            <img src={logo} alt="" />
          </a>
        </div>

        <div className="search-bar" onClick={() => setIsOpen(false)}>
          <img src={search} alt="" />
          <input type="text" placeholder="Search items and collections" />
        </div>

        <div className="desktop-nav">
          <Naigation />
        </div>
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <img src={isOpen ? cross : ham} alt="" />
        </div>
      </nav>
      {isOpen && (
        <div className="mobile-menu   show ">
          <div className="mobile-menu-right">
            <div className="menu-search-bar ">
              <img src={search} alt="" />
              <input type="text" placeholder="Search items and collections" />
            </div>
            <Naigation onClick={() => setIsOpen(false)} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
