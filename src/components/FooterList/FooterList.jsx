import React from "react";
import "./FooterList.css";

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
    </div>
  );
};

export default FooterList;
