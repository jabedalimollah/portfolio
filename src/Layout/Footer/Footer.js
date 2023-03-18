import React from "react";
import "./Footer.css";
import lily from "../../images/water-lily.png";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-box">
          <div className="footer-image-box">
            <img src={lily} alt="lily" className="footer-image" />
          </div>
          <div className="footer-text">
            <span className="footer-title">
              <span className="footer-first-text"> Designed With</span>{" "}
              <span className="red"> &#10084; </span> By{" "}
              <span className="footer-second-text">Jabed Ali Mollah</span>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
