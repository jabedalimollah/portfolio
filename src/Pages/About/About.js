import React, { useEffect, useState, useCallback } from "react";
import "./About.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import Typewriter from "typewriter-effect";

import AboutDB from "../../Database/AboutDB.json";
import EducationDB from "../../Database/EducationDB.json";
import SkillsDB from "../../Database/SkillsDB.json";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSelector } from "react-redux";
const About = () => {
  const [text, setText] = useState();

  const [data, setData] = useState({});
  const [educationData, setEducationData] = useState([]);
  const [skillsData, setSkillsData] = useState([]);
  const theme = useSelector((state) => state.theme.value);
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);
  useEffect(() => {
    setData(AboutDB);
    setText(AboutDB.degree);
    setEducationData(EducationDB);
    setSkillsData(SkillsDB);
    AOS.init();
  }, [educationData, skillsData]);

  return (
    <>
      <div
        className={`about-us-page py-5 ${
          theme ? "about-us-page-dark" : "about-us-page-light"
        }`}
      >
        <div className="container  ">
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
                  value: "#800080",
                },
                links: {
                  color: "#191825",
                  distance: 150,
                  enable: false,
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
                  value: 40,
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
          <div className="row  d-flex  justify-content-center align-items-center">
            <div
              className="col-lg-6 mb-4 about-hero d-flex flex-column justify-content-center align-items-start"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <h2 className={`name ${theme ? "name-dark" : "name-light"}`}>
                {data.name}
                {/* Jabed Ali Mollah */}
              </h2>
              <h5 className="degree">
                {/* Frontend Developer */}
                <Typewriter
                  options={{
                    strings: text,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h5>
              <p
                className={`about-description ${
                  theme ? "about-description-dark" : "about-description-light"
                }`}
              >
                {data.about_description}
                {/* Hi, I’m a Front-End developer. I spend my whole day, practically
                every day, experimenting with HTML, CSS, JavaScript, Bootstrap
                and React JS .My interests are in Web development .I’m curious,
                and I enjoy work that challenges me to learn something new and
                stretch in a different direction. */}
              </p>
              <div className="info row d-flex  flex-row">
                <div className="col-lg-6">
                  <div className="">
                    <span className="age">Date of Birth : </span>{" "}
                    <span
                      className={` ${
                        theme
                          ? "about-description-dark"
                          : "about-description-light"
                      }`}
                    >
                      {data.age}
                      {/* 23 */}
                    </span>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="">
                    <span className="email">Email : </span>
                    <span
                      className={` ${
                        theme
                          ? "about-description-dark"
                          : "about-description-light"
                      }`}
                    >
                      {data.email}
                      {/* jabedalimollah7@gmail.com */}
                    </span>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="">
                    {" "}
                    <span className="phone">Phone : </span>{" "}
                    <span
                      className={` ${
                        theme
                          ? "about-description-dark"
                          : "about-description-light"
                      }`}
                    >
                      {data.phone}
                      {/* +91 629-596-5896 */}
                    </span>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="">
                    {" "}
                    <span className="place">Place : </span>{" "}
                    <span
                      className={` ${
                        theme
                          ? "about-description-dark"
                          : "about-description-light"
                      }`}
                    >
                      {data.place}
                      {/* Bankura, West Bengal, India */}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 d-flex s justify-content-center align-items-start"
              data-aos="zoom-out-left"
            >
              <div
                className={`mainBox ${
                  theme ? "mainBox_dark_mode" : "mainBox_light_mode"
                }`}
              >
                <div className={`leftAni `}>Hire</div>
                {/* <Image
          src="/myself.png"
          width={"400"}
          height={"400"}
          className={styles.pic}
        ></Image> */}
                <img
                  src={AboutDB.profile_pic}
                  alt="profile-pic"
                  className={`profile-pic profile_picture ${
                    theme ? "profile-pic-dark" : "profile-pic-light"
                  }`}
                />
                <div
                  className={`rightAni ${
                    theme ? "rightAni_dark_mode" : "rightAni_light_mode"
                  }`}
                >
                  Me
                </div>
              </div>
              {/* <img
                src={AboutDB.profile_pic}
                alt="profile-pic"
                className={`profile-pic ${
                  theme ? "profile-pic-dark" : "profile-pic-light"
                }`}
              /> */}
            </div>
          </div>
        </div>
        <h3 className="page-title mt-5">
          <div>
            My <span className="text-purple">Skills</span>
          </div>
          <div
            className={`slide-line ${
              theme ? "slide-line-dark" : "slide-line-light "
            }`}
          ></div>
        </h3>
        <div className="container mt-3 mb-5">
          <div className="row  d-flex   justify-content-center align-items-center">
            {skillsData.map((items, index) => {
              return (
                <div
                  className={`col-md-2 mx-md-4 my-md-3 mt-3 col-5 mx-2 skill-box d-flex flex-column   justify-content-center align-items-center ${
                    theme ? "skill-box-dark " : "skill-box-light"
                  }`}
                  data-aos="zoom-in"
                  key={index}
                >
                  <img
                    src={items.skill_image}
                    alt={items.skill_image}
                    className="skill-image"
                  />
                  <div className=" d-flex flex-column  justify-content-center align-items-center">
                    <h4 className="skill-title">{items.skill_title}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="container u-margin-bottom">
          {/* <h3 className="education"> My Education</h3> */}
          <h3 className="page-title mt-5 my-4">
            <div>
              My <span className="text-purple">Education</span>
            </div>{" "}
            <div
              className={`slide-line ${
                theme ? "slide-line-dark" : "slide-line-light "
              }`}
            ></div>
          </h3>
          <div className="row d-flex   justify-content-center align-items-center">
            {EducationDB.map((items, index) => {
              return (
                <div className="col-md-8 col-10 education-box my-3" key={index}>
                  <div
                    className={`row education-details ${
                      theme
                        ? "education-details-dark"
                        : "education-details-light"
                    }`}
                  >
                    <div className="col-md-4 institution-pic">
                      <img src={items.institution_pic} alt="abs" />
                      {/* <img src={abs} alt="abs" /> */}
                    </div>
                    <div className="col-md-8">
                      <h4
                        className={`institute-degree mt-3 ${
                          theme
                            ? "institute-degree-dark"
                            : "institute-degree-light"
                        }`}
                      >
                        {items.institute_degree}
                        {/* Diploma in Computer Science and Technology */}
                      </h4>
                      <h6 className="institute-name">
                        {items.institute_name}
                        {/* ABS Academy of Polytechnic | WBSCT&VE&SD */}
                      </h6>
                      <h5
                        className={`passing-year ${
                          theme ? "passing-year-dark" : "passing-year-light"
                        }`}
                      >
                        {items.passing_year}
                        {/* 2019-2022 | Completed */}
                      </h5>
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

export default About;
