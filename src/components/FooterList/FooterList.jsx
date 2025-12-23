import React from "react";
import "./FooterList.css";
import Socials from "../Socials/Socials";

const FooterList = ({ head, list }) => {
  return (
    <div className="footer-about">
      <h3 className="footer-head">{head}</h3>
      <ul className="footer-list">
        {list.map((item, idx) => (
          <li key={idx}>
            <a className="footer-item" href={item.link}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      {list.map(
        (item, idx) => item.type === "social" && <Socials key={idx} {...item} />
      )}
    </div>
  );
};

export default FooterList;
