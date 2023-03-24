import React from "react";
import Lottie from "lottie-react";
import "./UnderConstruction.css";
import UnderConstructionImage from "../../images/UnderConstruction.json";
import UnderConstructionImageDark from "../../images/6873-under-maintenance.json";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const UnderConstruction = () => {
  const theme = useSelector((state) => state.theme.value);
  const Navigate = useNavigate();
  const handleBackBtn = () => {
    Navigate("/contact");
  };
  return (
    <>
      <div
        className={theme ? "underConstruction-dark" : "underConstruction-light"}
      >
        <div className="container ">
          <div className="row under-construction-box  ">
            <div className="col-lg-4 ">
              {/* {theme ? (
                <Lottie
                  animationData={UnderConstructionImageDark}
                  className="UnderConstruction-lottie-image"
                />
              ) : (
                <Lottie
                  animationData={UnderConstructionImage}
                  className="UnderConstruction-lottie-image"
                />
              )} */}
              <Lottie
                animationData={UnderConstructionImage}
                className="UnderConstruction-lottie-image"
              />
            </div>
            <div className="col-lg-3 col-10 ">
              <div
                className={`coming-soon-box ${
                  theme ? "coming-soon-box-dark" : "coming-soon-box-light"
                }`}
              >
                Coming Soon
              </div>
              <div className="under-construction-back-box">
                <button
                  className="under-construction-back-button"
                  onClick={handleBackBtn}
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UnderConstruction;
