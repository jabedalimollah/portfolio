import React from "react";
import "./Footer.css";
import lily from "../../images/water-lily.png";
import { useSelector } from "react-redux";
const Footer = () => {
  const theme = useSelector((state) => state.theme.value);
  return (
    <>
      <footer className={`footer ${theme ? "footer-dark" : "footer-light"}`}>
        <div className="footer-box">
          <div className="footer-image-box">
            <img
              src={lily}
              alt="lily"
              className={`footer-image  ${
                theme ? "footer-image-dark" : "footer-image-light"
              } `}
            />
          </div>
          <div className="footer-text">
            <span
              className={`footer-title ${
                theme ? "footer-first-text-dark" : "footer-first-text-light"
              }`}
            >
              <span
                className={
                  theme ? "footer-first-text-dark" : "footer-first-text-light"
                }
              >
                {" "}
                Designed With
              </span>{" "}
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
