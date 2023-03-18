import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";

import { ImAddressBook } from "react-icons/im";
import "./Header.css";
import Logo from "../../images/logo.png";
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo">
          <NavLink to="/">
            <img src={Logo} alt="logo" />
          </NavLink>
        </div>
      </div>
      <nav className=" menu ">
        <ul className="navbar-icon">
          <li className="nav-icon">
            <NavLink to="/" className="navlink home">
              <AiFillHome className="home-icon" />
            </NavLink>
          </li>
          <li className="nav-icon">
            <NavLink to="/project" className="navlink project">
              <BsFillBriefcaseFill className="project-icon" />
            </NavLink>
          </li>
          <li className="nav-icon">
            <NavLink to="/about" className="navlink about">
              <FaUserAlt className="about-icon" />
            </NavLink>
          </li>
          <li className="nav-icon">
            <NavLink to="/contact" className="navlink contact">
              <ImAddressBook className="contact-icon" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
