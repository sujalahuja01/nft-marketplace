import React from "react";
import "./CollectionCard.css";

const CollectionCard = ({ name, imgLink, nft, bid }) => {
  return (
    <div className="card">
      <img className="card-img" src={imgLink} alt="" />
      <div className="card-info">
        <div className="info-left">
          <h6 className="name">@{name}</h6>
          <p className="nft">{nft}</p>
        </div>
        <div className="info-right">
          <h6 className="bid-head">Current Bid</h6>
          <p className="bid">{bid}</p>
        </div>
      </div>
      <button className="btn card-btn">Place a bid</button>
    </div>
  );
};

export default CollectionCard;
