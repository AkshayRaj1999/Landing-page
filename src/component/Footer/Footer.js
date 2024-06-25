import React from "react";
import "./Footer.css";
import WaveLogo from "../../images/icons/WavesLogo.svg";
import { FaFacebook, FaInstagram, FaLinkedin,FaBehanceSquare  } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div className="container-fluid footer-wrapper">
        <div className="footer-waves-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#070707"
              fill-opacity="1"
              d="M0,128L60,160C120,192,240,256,360,261.3C480,267,600,213,720,208C840,203,960,245,1080,234.7C1200,224,1320,160,1380,128L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="container">
          <div className="footer-content-wrapper">
            <div className="footer-logo-wrapper">
              <img src={WaveLogo} alt="Wave-logo" />
            </div>
            <div className="footer-clickable-links-wrapper">
            <ul className="footer-clickable-links">
              <li>
                <a href="./">About</a>
              </li>
              <li>
                <a href="./">Service</a>
              </li>
              <li>
                <a href="./">Project</a>
              </li>
              <li>
                <a href="./">News</a>
              </li>
            </ul>
            <ul className="footer-clickable-social-media">
              <li>
                <a href="./">
                  <FaFacebook style={{color:"white",fontSize:"26px"}}/>
                </a>
              </li>
              <li>
                <a href="./">
                  <FaInstagram style={{color:"white",fontSize:"26px"}}/>
                </a>
              </li>
              <li>
                <a href="./">
                  <FaLinkedin style={{color:"white",fontSize:"26px"}}/>
                </a>
              </li>
              <li>
                <a href="./">
                  <FaBehanceSquare style={{color:"white",fontSize:"26px"}} />
                </a>
              </li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
