import React from "react";
import "./Socials.css";

const Socials = ({ type, socialMedia }) => {
  return (
    <div className="socials">
      {socialMedia.map((item, idx) => (
        <a href={item.link} key={idx}>
          <img src={item.src} alt="" />
        </a>
      ))}
    </div>
  );
};

export default Socials;
