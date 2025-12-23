import React from "react";
import "./Footer.css";
import logo from "@assets/psychoart.svg";
import { footer_links } from "../../utils/content";
import FooterList from "../../components/FooterList/FooterList";
import Rights from "../../sections/Rights/Rights";

const Footer = () => {
  return (
    <section className="container footer-cnt">
      <div className="footer">
        <div className="footer-text">
          <img className="about-logo" src={logo} alt="" />
          <p className="about-para">
            The best NFT marketplace website in the world and feel your
            experience in selling or buy our work
          </p>
        </div>
        <div className="footer-content">
          {footer_links.map((link) => (
            <FooterList key={link.id} {...link} />
          ))}
        </div>
      </div>
      <div className="rights ">
        <h2 className="rights-head">
          Created by <span className="rights-span">Zarror</span> | All Right
          Reserved!
        </h2>
      </div>
    </section>
  );
};

export default Footer;
