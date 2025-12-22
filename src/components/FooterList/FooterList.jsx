import React from "react";
import "./FooterList.css";
import Socials from "../Socials/Socials";

const FooterList = ({ head, list }) => {
  return (
    <div className="footer-about">
      <h3 className="footer-head">{head}</h3>
      <ul className="footer-list">
        {list.map((item) => (
          <li key={item.name}>
            <a className="footer-item" href={item.link}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      {list.map((item) => item.type === "social" && <Socials {...item} />)}
    </div>
  );
};

export default FooterList;
