import React, { useState, useRef } from "react";

import { Flex, GridItem, Link, Grid, Hide } from "@chakra-ui/react";

import RightArrowIcon from "../assets/arrow-right-blue.svg";
import CloseIcon from "../assets/close.svg";
import ContactIcon from "../assets/navbar/contact.svg";
import "./Navbar.css";

import SPEImg from "../assets/shared/spe_vert_white.svg";

import SearchIcon from "../assets/search-white.svg";
import GlobeIcon from "../assets/navbar/globe.svg";

import { useUser } from "../contexts/UserContext";

import SPELogo from "../assets/shared/spe-logo-2020.png";
import SPELogoWhite from "../assets/shared/spe_vert_white.svg";
import HamburgerIcon from "../assets/navbar/hamburger.svg";

const NavbarSLB = () => {
  const { language, toggleLanguage } = useUser();

  const [selected, setSelected] = useState();

  const toggleSelect = (e) => {
    // e.stopImmediatePropagation()

    let target = e.target;
    while (target.tagName !== "LI") {
      target = target.parentNode;

      if (target.tagName === "NAV") {
        break;
      }
    }

    if (target.tagName === "LI") {
      if (target.classList.contains("selected-button")) {
        target.classList.remove("selected-button");
      } else {
        document
          .getElementsByClassName("selected-button")[0]
          ?.classList.toggle("selected-button");
        target.classList.add("selected-button");
      }
    }
  };

  const toggleMenu = () => {
    document.getElementById("navbar-menu").classList.toggle("active");
  };

  return (
    <nav>
      <a href="/" className="navbar-logo desktop-only" id="navbar-logo">
        <img src={SPELogo} className="nohover" width="110" height="32" />
        <img src={SPELogoWhite} className="onhover" width="110" height="32" />
      </a>
      <ul id="navbar-menu" className="navbar-menu">
        <a href="/" className="navbar-logo small-device ">
          <img src={SPELogo} className="nohover" width="110" height="32" />
          <img src={SPELogoWhite} className="onhover" width="110" height="32" />
        </a>
        <li className="home selected-link primary desktop-only">
          <a href="/">{language.NAVBAR.HOME}</a>
          <ul className="home-submenu">
            <li>
              <a href="#">{language.NAVBAR.RESERVOIR}</a>
            </li>
            <li>
              <a href="#">{language.NAVBAR.DRILLING}</a>
            </li>
            <li>
              <a href="#">{language.NAVBAR.PRODUCTION}</a>
            </li>
            <li>
              <a href="#">{language.NAVBAR.SAFETY}</a>
            </li>
          </ul>
        </li>
        <li className="primary desktop-only">
          <a href="/courses">{language.NAVBAR.COURSES}</a>
        </li>
        <li className="primary desktop-only">
          <a href="/instructors">{language.NAVBAR.INSTRUCTORS}</a>
        </li>
        <li className="primary desktop-only">
          <a href="/membership">{language.NAVBAR.MEMBERSHIP}</a>
        </li>
        <li className="primary desktop-only">
          <a href="/about">{language.NAVBAR.ABOUT}</a>
        </li>
        <li className="language-link" onClick={toggleLanguage}>
          <a>
            <span className="desktop-only">
              {language.lang === "ar" ? "English" : "العربية"}
            </span>
            <img
              className="small-device"
              src={GlobeIcon}
              alt="Language"
              width="24"
              height="24"
            />
          </a>
        </li>
        <li className="contact-link desktop-only" onClick={toggleSelect}>
          <a>{language.NAVBAR.CONTACT}</a>
        </li>
        <li className="search-link" onClick={toggleSelect}>
          <a>
            <img src={SearchIcon} width="24" height="24" />
          </a>
        </li>
        <li className="hamburger-menu small-device" onClick={toggleMenu}>
          <a>
            <img src={HamburgerIcon} width="24" height="24" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarSLB;
