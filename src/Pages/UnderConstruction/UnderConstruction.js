import React from "react";
import Lottie from "lottie-react";
import "./UnderConstruction.css";
import UnderConstructionImage from "../../images/UnderConstruction.json";
import { useNavigate } from "react-router-dom";
const UnderConstruction = () => {
  const Navigate = useNavigate();
  const handleBackBtn = () => {
    Navigate("/contact");
  };
  return (
    <>
      <div className="container ">
        <div className="row under-construction-box  ">
          <div className="col-lg-4 ">
            <Lottie
              animationData={UnderConstructionImage}
              className="UnderConstruction-lottie-image"
            />
          </div>
          <div className="col-lg-3 col-10 ">
            <div className="coming-soon-box">Coming Soon</div>
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
    </>
  );
};

export default UnderConstruction;
