import React from "react";
import logo from "../../images/logo.png";
import "./Footer.css";

const Footer = () => (
  <div className="footer">
    <div className="footer-content">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="links-container">
        <p className="link">Market</p>
        <p className="link">Exchange</p>
        <p className="link">Tutorials</p>
        <p className="link">Wallets</p>
      </div>
    </div>

    <div className="footer-info">
      <p className="info-text">Come join us and hear for the unexpected miracle</p>
      <p className="info-email">info@kryptomastery.com</p>
    </div>

    <div className="divider" />

    <div className="footer-bottom">
      <p className="footer-text">@kryptomastery2022</p>
      <p className="footer-text">All rights reserved</p>
    </div>
  </div>
);

export default Footer;
