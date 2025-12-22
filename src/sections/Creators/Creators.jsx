import React from "react";
import "./Creators.css";
import CreatorCard from "../../components/CreatorCard/CreatorCard";
import { creatorInfo } from "../../constants/content";

const Creators = () => {
  return (
    <section className="container">
      <div className="creators-card">
        {creatorInfo.map((info) => (
          <CreatorCard key={info.id} {...info} />
        ))}
      </div>
    </section>
  );
};

export default Creators;
