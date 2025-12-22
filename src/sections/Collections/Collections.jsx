import React from "react";
import "./Collections.css";
import CollectionCard from "../../components/CollectionCard/CollectionCard";
import { cardInfo } from "../../constants/content";
const Collections = () => {
  const catagories = ["Art", "Sports", "Photography", "Pattern"];
  return (
    <section className="container collection-cnt">
      <div className="clc-text">
        <h2 className="clc-heading">Collections</h2>
        <p className="clc-para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="clc-catagories">
        {catagories.map((cat) => (
          <button className=" clc-btn" key={cat}>
            {cat}
          </button>
        ))}
      </div>
      <div className="clc-cards">
        {cardInfo.map((info) => (
          <CollectionCard key={info.id} {...info} />
        ))}
      </div>
    </section>
  );
};

export default Collections;
