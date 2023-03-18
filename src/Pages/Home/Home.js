import React, { useCallback, useEffect, useState } from "react";
import "./Home.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Lottie from "lottie-react";
import Typewriter from "typewriter-effect";
import HomePage from "../../images/HomePage.json";

import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { MdFileDownload } from "react-icons/md";
import DownloadForm from "../../Components/HomeComponent/DownloadForm/DownloadForm";
import HomeDB from "../../Database/HomeDB.json";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const [data, setData] = useState({});
  const [text, setText] = useState([]);

  const [downloadFormCondition, setDownloadFormCondition] = useState(false);
  const closeDownloadFormButton = () => {
    setDownloadFormCondition(false);
  };
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);
  useEffect(() => {
    setData(HomeDB);
    setText(data.text_group);
    AOS.init();
  }, [text, data]);

  return (
    <>
      <div className="home-page ">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#4D455D",
              },
              links: {
                color: "#191825",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                directions: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 60,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
        <div className="container mobile-margin">
          <div className="row d-flex justify-content-center">
            <div
              className="col-lg-6  d-flex justify-content-center flex-column align-items-start px-5 "
              data-aos="fade-right"
            >
              <div className="text-contant ">
                <h3 className="text">
                  {/* Hello */}
                  {data.text}
                </h3>
                <h1 className="d-flex  flex-row align-items-center">
                  {/* I'm */}
                  <span>{data.static_text}</span>

                  <span className="text-animated">
                    <Typewriter
                      options={{
                        strings: text,

                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </span>
                </h1>
              </div>{" "}
              <p className="home-description">
                {/* My name is Jabed Ali Mollah. */}
                {data.home_description}
              </p>
              <button
                onClick={() => setDownloadFormCondition(true)}
                className="download-Resume-button"
                // download="Jabed Ali Mollah"
              >
                <MdFileDownload
                  style={{ fontSize: "1.2rem" }}
                  className="download-animation-icon"
                />{" "}
                <span className="download-resume-text">
                  {/* Download Resume */}
                  {data.download_resume_text}
                </span>
              </button>
              <ul className="social-media-component mt-5">
                <li className="social-media-tag">
                  <a
                    // href="https://www.instagram.com/iam_sharif7/"
                    href={data.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-media-handle"
                  >
                    <BsInstagram />
                  </a>
                </li>
                <li className="social-media-tag">
                  <a
                    // href="http://"
                    href={data.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-media-handle"
                  >
                    <FaFacebookF />
                  </a>
                </li>
                <li className="social-media-tag">
                  <a
                    // href="http://"
                    href={data.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-media-handle"
                  >
                    <BsGithub />
                  </a>
                </li>
                <li className="social-media-tag">
                  <a
                    // href="http://"
                    href={data.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-media-handle"
                  >
                    <BsLinkedin />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 d-flex justify-content-center flex-column align-items-center">
              <Lottie animationData={HomePage} className="Home-lottie-image" />
            </div>
          </div>
        </div>{" "}
      </div>{" "}
      {downloadFormCondition ? (
        <DownloadForm closeDownloadFormButton={closeDownloadFormButton} />
      ) : null}
    </>
  );
};

export default Home;
