import React, { useState } from "react";
import "./Collections.css";
import CollectionCard from "../../components/CollectionCard/CollectionCard";
import { cardInfo } from "../../utils/content";
const Collections = () => {
  const catagories = ["All", "Sports", "Photography", "Pattern"];

  const [activeCatagory, setActiveCatagory] = useState("all");

  const filteredCard =
    activeCatagory === "all"
      ? cardInfo
      : cardInfo.filter((info) => info.catagory === activeCatagory);

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
          <button
            className=" clc-btn"
            key={cat}
            onClick={() => setActiveCatagory(cat.toLocaleLowerCase())}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="clc-cards">
        {filteredCard.map((info) => (
          <CollectionCard key={info.id} {...info} />
        ))}
      </div>
    </section>
  );
};

export default Collections;
