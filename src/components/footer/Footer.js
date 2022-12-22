import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h4>
        <a href="/contact">Questions? Contact Us</a>
      </h4>
      <div className="footerBox">
        <a href="/">FAQ</a>
        <a href="/">Privacy</a>
        <a href="/">Speedtest</a>
        <a href="/">Help Center</a>
        <a href="/">Cookie Preferences</a>
        <a href="/">Legal Notices</a>
        <a href="/">Account</a>
        <a href="/">Terms of Use</a>
        <a href="/contact">Contact Us</a>
      </div>
    </div>
  );
};

export default Footer;
