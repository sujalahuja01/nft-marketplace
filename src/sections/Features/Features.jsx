import React from "react";
import "./Features.css";
import { cardInfo } from "../../utils/content";
import CollectionCard from "../../components/CollectionCard/CollectionCard";

const Features = () => {
  const featuredCard = cardInfo.slice(0, 3);
  return (
    <section className="container feature-cnt" id="features">
      <div className="text">
        <div className="head-text">
          <h2 className="head">Featured Artwork</h2>
          <p className="para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="featured-cards">
          {featuredCard.map((info) => (
            <CollectionCard key={info.id} {...info} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
