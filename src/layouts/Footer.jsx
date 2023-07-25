// Importing necessary dependencies and assets
import React from "react";
import Facebook from "../assets/social/facebook.svg";
import Telegram from "../assets/social/telegram-1.svg";
import Linkedin from "../assets/social/linkedin.svg";
import Instagram from "../assets/social/instagram.svg";
import Logo from "../assets/shared/spe-logo-2020.png";
import { useUser } from "../contexts/UserContext";

// Defining the Footer component
const Footer = () => {
  // Accessing the language data from the UserContext using the useUser hook
  const { language } = useUser();

  return (
    <footer>
      {/* Section for fast links */}
      <div className="fast-links">
        {/* Displaying the heading for fast links */}
        <h5>{language.FOOTER.FASTLINKS}</h5>
        {/* Displaying links for different sections of the website */}
        <a>{language.FOOTER.HOME}</a>
        <a>{language.FOOTER.COURSES}</a>
        <a>{language.FOOTER.INSTRUCTORS}</a>
        <a>{language.FOOTER.MEMBERSHIP}</a>
        <a>{language.FOOTER.ABOUT}</a>
      </div>

      {/* Section about SPE */}
      <div className="about-spe">
        {/* Displaying the SPE logo */}
        <img src={Logo} alt="SPE Logo" width="50" height="50" />
        {/* Displaying some information about SPE */}
        <p>{language.FOOTER.ABOUT_TEXT}</p>
      </div>

      {/* Section for social media links */}
      <div className="social-links">
        {/* Link to the Facebook page */}
        <a href="https://www.facebook.com/spebuog" target="_blank">
          <img src={Facebook} alt="Facebook Page" />
        </a>
        {/* Link to the Instagram account */}
        <a href="https://www.instagram.com/spebuog" target="_blank">
          <img src={Instagram} alt="Instagram Account" />
        </a>
        {/* Link to the Telegram channel */}
        <a href="https://t.me/SPEBUOG" target="_blank">
          <img src={Telegram} alt="Telegram Channel" />
        </a>
        {/* Link to the LinkedIn page */}
        <a
          href="https://www.linkedin.com/company/buog-spe-student-chapter"
          target="_blank"
        >
          <img src={Linkedin} alt="Linkedin Page" />
        </a>
      </div>
    </footer>
  );
};

// Exporting the Footer component as the default export
export default Footer;
