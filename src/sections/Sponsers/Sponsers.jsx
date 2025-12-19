import React from "react";
import "./Sponsers.css";
import binance from "@assets/binance.svg";
import ethereum from "@assets/ethereum.svg";
import blockchain from "@assets/blockchain.svg";

const Sponsers = () => {
  return (
    <section className="container">
      <div className="sponsers">
        <img src={binance} alt="" />
        <img src={ethereum} alt="" />
        <img src={blockchain} alt="" />
      </div>
    </section>
  );
};

export default Sponsers;
