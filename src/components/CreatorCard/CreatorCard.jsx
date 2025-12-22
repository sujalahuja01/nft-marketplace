import React from "react";
import "./CreatorCard.css";

const CreatorCard = ({ bgLink, imgLink, name, description }) => {
  return (
    <div className="creator-card">
      <div className="top">
        <img className="creator-bg" src={bgLink} alt="" />
      </div>
      <div className="middle"></div>
      <div className="bottom">
        <img className="creator-img" src={imgLink} alt="" />
        <h4 className="creator-name">{name}</h4>
        <p className="desc">{description}</p>
        <button className="btn follow-btn"> + Follow</button>
      </div>
    </div>
  );
};

export default CreatorCard;
