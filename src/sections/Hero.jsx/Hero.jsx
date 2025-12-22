import React from "react";
import heroImg from "@assets/heroimage.png";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="container hero-cnt ">
      <div className="left">
        <div className="left-top">
          <h1>Create, Sell & Collect Your Own Creative NFT</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit.
          </p>
        </div>
        <div className="left-mid">
          <button className="btn">Explore Now</button>
          <button className="btn  hero-btn2">Sell NFT</button>
        </div>

        <div className="left-bottom">
          <div className="info-box">
            <h3>37k+</h3>
            <p>Artworks</p>
          </div>
          <div className="info-box">
            <h3>20k+</h3>
            <p>Artist</p>
          </div>
          <div className="info-box">
            <h3>99k+</h3>
            <p>Auctions</p>
          </div>
        </div>
      </div>
      <div className="right">
        <img src={heroImg} alt="" />
      </div>
    </section>
  );
};

export default Hero;
