import React, { useState, useEffect } from "react";

import "./Projects.css";

import { AiOutlineClose } from "react-icons/ai";
import ProjectDB from "../../Database/ProjectDB.json";
import AOS from "aos";
import "aos/dist/aos.css";
const Projects = () => {
  const [infoButton, setInfoButton] = useState();
  const [data, setData] = useState([]);
  const getInfoHandle = (index) => {
    setInfoButton(index);
  };
  useEffect(() => {
    setData(ProjectDB);
    AOS.init();
  }, []);

  return (
    <>
      <div className="projects-page">
        <h3 className="page-title mt-4">
          <div>
            My <span className="text-purple">Project</span>
          </div>{" "}
          <div className="slide-line"></div>
        </h3>
        <div className="container mt-5">
          <div className="row d-flex  justify-content-center align-items-center">
            {data.map((items, index) => {
              return (
                <div
                  key={index}
                  data-aos="zoom-in"
                  className="col-lg-3 col-8 mx-5 my-3 project-image-tag  d-flex  justify-content-center align-items-center"
                  style={{
                    backgroundImage: `url(${items.project_image})`,
                  }}
                >
                  {!(infoButton === index) ? (
                    <div className="div-box  project-info d-flex flex-column  justify-content-center align-items-center">
                      <h3 className="project-name">
                        {/* Crud App */}
                        {items.project_name}
                      </h3>
                      <div
                        className={
                          " d-flex  justify-content-center align-items-center"
                        }
                      >
                        <a
                          // href="http://"
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
                    <div className={"info-description"}>
                      <button
                        className="info-close-btn"
                        onClick={getInfoHandle}
                      >
                        <AiOutlineClose />
                      </button>
                      <p className="info-para">
                        {/* Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Aliquam asperiores saepe, aut ex facere sed
                        laborum ratione excepturi cupiditate provident
                        praesentium doloribus est ut fugiat minima laboriosam
                        molestias dicta officia! */}
                        {items.project_info}
                      </p>
                    </div>
                  )}
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
