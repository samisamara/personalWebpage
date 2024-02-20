import React from "react";
import { DiGithubBadge  } from 'react-icons/di';
import { FaLinkedin } from 'react-icons/fa';
import "./Header.css";

const Header = () => {
  return (
    <div id="header" className="home">
      <div className="header-content">
        <h1 className="title">Sami Samara</h1>
        <h3 className="title-alias">
          Software Engineer | React Developer | iOS Developer
        </h3>
        <div className="iconCollection">
          <a href="https://www.github.com/samisamara" className="iconAnchor" target="_blank" rel="noopener noreferrer">
            <DiGithubBadge className="headerIcon" size={50} />
          </a>
          <a href="https://www.linkedin.com/in/sami-samara" className="iconAnchor" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="headerIcon" size={50} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;