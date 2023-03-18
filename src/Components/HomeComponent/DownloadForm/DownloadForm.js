import React, { useState } from "react";
import "./DownloadForm.css";
import { HiUser } from "react-icons/hi";
import { IoIosLock } from "react-icons/io";

import { ImDownload2 } from "react-icons/im";
let userName = "sharifali";
let myPassword = "admin123";
const DownloadForm = ({ closeDownloadFormButton }) => {
  const [inputbox, setInputBox] = useState({
    username: "",
    password: "",
  });
  const [buttonCondition, setButtonCondition] = useState(true);
  const [error, setError] = useState(false);
  const handleOnchange = (e) => {
    setInputBox({ ...inputbox, [e.target.name]: e.target.value });
    setButtonCondition(true);
  };
  const handleDownloadButton = (e) => {
    e.preventDefault();
    setError(true);
    if (userName === inputbox.username && myPassword === inputbox.password) {
      setButtonCondition(false);
      setError(false);
    }
  };
  return (
    <>
      <div className="download-form-box ">
        <div className="container ">
          <div className="row download-form-childbox">
            <div className="col-lg-4">
              <div className="row">
                <div className="col-md-12 ">
                  <form className="download-form">
                    <button
                      className="form-cv-close-button"
                      onClick={() => closeDownloadFormButton()}
                    >
                      x
                    </button>
                    <h3 className="download-text">Download Resume</h3>
                    <div
                      className="username-box my-3"
                      style={{
                        border: error
                          ? "1px solid red"
                          : "1px solid rgb(84, 83, 83)",
                      }}
                    >
                      <label className="download-form-text">
                        {" "}
                        <HiUser className="download-form-icon" />
                        {/* Username : */}
                      </label>
                      <input
                        type="text"
                        className="download-input-tag"
                        placeholder="Enter User Name"
                        autoComplete={"false"}
                        name="username"
                        value={inputbox.username}
                        onChange={handleOnchange}
                      />
                    </div>

                    <div
                      className="password-box"
                      style={{
                        border: error
                          ? "1px solid red"
                          : "1px solid rgb(84, 83, 83)",
                      }}
                    >
                      <label className="download-form-text">
                        <IoIosLock className="download-form-icon" />
                        {/* Password :  */}
                      </label>
                      <input
                        type="password"
                        className="download-input-tag"
                        placeholder="Enter Password"
                        autoComplete={"false"}
                        name="password"
                        value={inputbox.password}
                        onChange={handleOnchange}
                      />
                    </div>
                    <div className="download-cv-box my-3">
                      {buttonCondition ? (
                        <button
                          className="download-cv-button "
                          onClick={handleDownloadButton}
                        >
                          <span className="download-cv-link">
                            <ImDownload2
                              style={{ fontSize: "1.1rem", marginRight: "5px" }}
                            />{" "}
                            Download CV
                          </span>
                        </button>
                      ) : (
                        <button className="download-cv-button ">
                          <a
                            href="../Resume/Jabed Ali Mollah Resume.pdf"
                            download="Jabed Ali Mollah Resume"
                            className="download-cv-link"
                          >
                            <ImDownload2
                              style={{ fontSize: "1.1rem", marginRight: "5px" }}
                            />{" "}
                            Continue
                          </a>
                        </button>
                      )}
                    </div>
                  </form>
                </div>
                <div className="col-md-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DownloadForm;
