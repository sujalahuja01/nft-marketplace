import React from "react";
import "./Footer.css";
import logo from "@assets/psychoart.svg";
import { footer_links } from "../../utils/content";
import FooterList from "../../components/FooterList/FooterList";

const Footer = () => {
  return (
    <section className="container footer-cnt">
      <div className="">
        <img className="about-logo" src={logo} alt="" />
        <p className="about-para">
          The best NFT marketplace website in the world and feel your experience
          in selling or buy our work
        </p>
      </div>
      <div className="footer-content">
        {footer_links.map((link) => (
          <FooterList key={link.id} {...link} />
        ))}
      </div>
    </section>
  );
};

export default Footer;
