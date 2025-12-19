import React from "react";
import "./About.css";
import aboutImg from "@assets/about.png";

const About = () => {
  return (
    <section className="container about-cnt">
      <div className="top">
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="bottom">
        <div className="bottom-left">
          <img src={aboutImg} alt="" />
        </div>
        <div className="bottom-right">
          <h3>Get Popular NFT</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar.
          </p>
          <button className="about-btn">Show more</button>
        </div>
      </div>
    </section>
  );
};

export default About;
