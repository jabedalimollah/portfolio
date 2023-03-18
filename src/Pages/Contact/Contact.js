import React, { useEffect, useState } from "react";
import "./Contact.css";
import Phone from "../../images/smartphone.png";
import Email from "../../images/email.png";
import House from "../../images/house.png";
import { FaUserAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";
import { FaHeadset } from "react-icons/fa";
import Lottie from "lottie-react";
import ContactImage from "../../images/contactImage2.json";
import { useNavigate } from "react-router-dom";
import AboutDB from "../../Database/AboutDB.json";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../../Layout/Footer/Footer";
const Contact = () => {
  const [data, setData] = useState({});
  const Navigate = useNavigate();
  const formSubmitBtn = (e) => {
    e.preventDefault();
    Navigate("/contact/underConstruction");
  };
  useEffect(() => {
    setData(AboutDB);
    AOS.init();
  }, []);
  return (
    <>
      <div className="contact_info ">
        <div className="container">
          <div className="row d-flex mt-5">
            <div className="col-lg-4  ">
              {/* phone number */}
              <div className="contact-info-item py-3 px-3 d-flex align-items-center">
                <img src={Phone} alt="phone" className="contact-icons" />

                <div className="contact-info-content m-2">
                  <div className="contact-info-tile">Phone</div>
                  <div className="contact-info-text">
                    {data.phone}
                    {/* 9232-3293-13 */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 ">
              {/* email  */}
              <div className="contact-info-item py-3 px-3 d-flex align-items-center">
                <img src={Email} alt="email" className="contact-icons" />

                <div className="contact-info-content m-2">
                  <div className="contact-info-tile">Email</div>
                  <div className="contact-info-text">
                    {data.email}
                    {/* jabed@test.com */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 ">
              {/* address  */}
              <div className="contact-info-item py-3 px-3 d-flex align-items-center">
                <img src={House} alt="house" className="contact-icons" />

                <div className="contact-info-content m-2">
                  <div className="contact-info-tile">Address</div>
                  <div className="contact-info-text">
                    {data.place}
                    {/* Bankura, West Bengal, India */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* contact us form */}
        <div className="contact-form mt-5 ">
          <div className="container ">
            <div className="row  ">
              <div className="contact-form-data  col-lg-10 offset-lg-1">
                <div className="row  mt-3 mb-4">
                  <div className="col-lg-10 text-center">
                    <div className="contact-form-title">
                      <h3 className="page-title get-in-touch-title mt-5 my-4">
                        <div>
                          {" "}
                          <FaHeadset /> Get in{" "}
                          <span className="text-purple"> Touch</span>
                        </div>{" "}
                        <div className="slide-line"></div>
                      </h3>
                      {/* Get in Touch */}
                    </div>
                  </div>
                </div>

                <form id="contact-form ">
                  <div className="row  d-flex justify-content-center">
                    <div className="col-lg-4 ">
                      <div className="row ">
                        <div
                          className="col-md-12"
                          data-aos="flip-right"
                          data-aos-duration="2000"
                        >
                          <div className="contact-form-name my-2 ">
                            <FaUserAlt className="mx-3 contact-react-icon" />
                            <input
                              type="text"
                              name="name"
                              id="name"
                              className="contact-name "
                              placeholder="Your Name"
                            />
                          </div>
                        </div>
                        <div
                          className="col-md-12"
                          // data-aos="fade-left"
                          data-aos="flip-left"
                          data-aos-duration="2000"
                        >
                          <div className="contact-form-email my-2">
                            <GrMail className="mx-3 contact-react-icon" />
                            <input
                              type="email"
                              name="email"
                              id="email"
                              className="contact-email"
                              placeholder="Your Email"
                            />
                          </div>
                        </div>
                        <div
                          className="col-md-12"
                          // data-aos="fade-right"
                          data-aos="flip-right"
                          data-aos-duration="2000"
                        >
                          <div className="contact-form-phone my-2">
                            <FaPhoneAlt className="mx-3 contact-react-icon" />
                            <input
                              type="text"
                              name="phone"
                              id="phone"
                              className="contact-phone"
                              placeholder="Your Phone Number"
                            />
                          </div>
                        </div>
                        <div
                          className="col-md-12 "
                          // data-aos="fade-left"
                          data-aos="flip-left"
                          data-aos-duration="2000"
                        >
                          <div className="contact-message d-flex my-2">
                            <RiMessage2Fill className="mx-3 contact-react-icon my-2" />
                            <textarea
                              name="message"
                              placeholder="Message"
                              className="contact-message-box"
                            ></textarea>
                          </div>
                        </div>

                        <div
                          className="col-md-12 contact-form-button my-2 "
                          data-aos="zoom-in"
                          data-aos-duration="2000"
                        >
                          <button
                            type="submit"
                            className="button contact-submit-button"
                            onClick={formSubmitBtn}
                          >
                            Send Message
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5 ">
                      <Lottie
                        animationData={ContactImage}
                        className="contact-lottie-image"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
