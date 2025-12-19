import React from "react";

const CollectionCard = ({ name, imgLink, type, bid }) => {
  return (
    <div className="card">
      <img src={imgLink} alt="" />
      <div className="card-info">
        <div className="info-left">
          <h6>{name}</h6>
          <p>{type}</p>
        </div>
        <div className="info-right">
          <h6>Current Bid</h6>
          <p>{bid}</p>
        </div>
      </div>
      <button>Place a bid</button>
    </div>
  );
};

export default CollectionCard;
