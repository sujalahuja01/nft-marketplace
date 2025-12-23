import React from "react";
import "./Sponsers.css";
import binance from "@assets/binance.svg";
import ethereum from "@assets/ethereum.svg";
import blockchain from "@assets/blockchain.svg";

const Sponsers = () => {
  return (
    <section className="container">
      <div className="sponsers">
        <img className="spons-logo" src={binance} alt="" />
        <img className="spons-logo" src={ethereum} alt="" />
        <img className="spons-logo" src={blockchain} alt="" />
      </div>
    </section>
  );
};

export default Sponsers;
