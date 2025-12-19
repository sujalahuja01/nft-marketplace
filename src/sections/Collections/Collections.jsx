import React from "react";
import CollectionCard from "../../components/CollectionCard/CollectionCard";
import { cardInfo } from "../../constants/content";
const Collections = () => {
  return (
    <div>
      {cardInfo.map((info) => {
        <CollectionCard key={info.id} cardInfo={info} />;
      })}
    </div>
  );
};

export default Collections;
