import React, { useState, useEffect } from "react";

import "./Projects.css";

import { AiOutlineClose } from "react-icons/ai";
import ProjectDB from "../../Database/ProjectDB.json";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSelector } from "react-redux";
const Projects = () => {
  const [infoButton, setInfoButton] = useState();
  const [data, setData] = useState([]);
  const theme = useSelector((state) => state.theme.value);
  const getInfoHandle = (index) => {
    setInfoButton(index);
  };
  useEffect(() => {
    setData(ProjectDB);
    AOS.init();
  }, []);

  return (
    <>
      <div
        className={`projects-page  ${
          theme ? "projects-page-dark" : "projects-page-light"
        }`}
      >
        <h3 className="page-title py-4">
          <div>
            <span className={`${theme ? "text-dark" : "text-light"}`}> My</span>{" "}
            <span className="text-purple">Project</span>
          </div>{" "}
          <div
            className={`slide-line ${
              theme ? "slide-line-dark" : "slide-line-light"
            }`}
          ></div>
        </h3>
        <div className="container">
          <div className="row d-flex  justify-content-center align-items-center">
            {data.map((items, index) => {
              return (
                <div
                  key={index}
                  // data-aos="zoom-in"
                  className={`col-lg-3 col-md-8 col-8 mx-5 my-3 project-image-tags py-3 d-flex flex-column justify-content-start align-items-start pt-2  `}
                  // className={`col-lg-3 col-8 mx-5 my-3 project-image-tag  d-flex  justify-content-center align-items-center  `}
                >
                  <div className="project_image">
                    <img src={items.project_image} alt={items.project_image} />
                  </div>
                  {/* <div>Name</div> */}

                  <div className="project-coponent">
                    <h3
                      className={`my-2 project-name ${
                        theme ? "project-name-dark " : "project-name-light"
                      }`}
                    >
                      {items.project_name}
                    </h3>
                    <div className="project_link_box">
                      <a
                        href={items.github}
                        target="_blank"
                        className="github-project-link"
                      >
                        Github
                      </a>
                      <a
                        href={items.live_button}
                        target="_blank"
                        className="project-link"
                      >
                        Live
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;

{
  /* <div
                  key={index}
                  data-aos="zoom-in"
                  className={`col-lg-3 col-8 mx-5 my-3 project-image-tag  d-flex  justify-content-center align-items-center  `}
                  style={{
                   
                    backgroundImage: theme
                      ? `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url(${items.project_image})`
                      : `url(${items.project_image})
                    `,
                  }}
                >
                  {!(infoButton === index) ? (
                    <div
                      className={`div-box  project-info d-flex flex-column  justify-content-center align-items-center ${
                        theme ? "project-info-dark" : "project-info-light"
                      }`}
                    >
                      <h3
                        className={`project-name ${
                          theme ? "project-name-dark " : "project-name-light"
                        }`}
                      >
                     
                        {items.project_name}
                      </h3>
                      <div
                        className={
                          " d-flex  justify-content-center align-items-center"
                        }
                      >
                        <a
                         
                          href={items.live_button}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="live-button mx-2"
                        >
                          Live
                        </a>
                        <button
                          className="get-info-button mx-2"
                          onClick={() => getInfoHandle(index)}
                        >
                          Info
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div
                      className={`info-description ${
                        theme
                          ? "info-description-dark"
                          : "info-description-light"
                      }`}
                    >
                      <button
                        className="info-close-btn"
                        onClick={getInfoHandle}
                      >
                        <AiOutlineClose />
                      </button>
                      <p className="info-para">
                        
                        {items.project_info}
                      </p>
                    </div>
                  )}
                </div> */
}
