import React from "react";
import "./ErrorPage.css";
import Errorpage from "../../images/ErrorPage.json";
import Lottie from "lottie-react";
import { NavLink } from "react-router-dom";
const ErrorPage = () => {
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-12 ">
            <Lottie
              animationData={Errorpage}
              loop={true}
              style={{ height: "400px" }}
            />
          </div>
          <div className="col-lg-3  d-flex justify-content-center">
            <NavLink to="/" className="btn btn-outline-primary">
              Back To Home Page
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
