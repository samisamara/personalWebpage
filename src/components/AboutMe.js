import React from "react";
import '../styles/AboutMe.css';
import selfPicture from "../images/selfPicture.jpeg";

const AboutMe = () => {
  return (
    <div id="aboutMe">
      <h1>About Me</h1>
      <div>
        <p>I am a software engineer 
        </p>
        <img id="selfPicture" src={selfPicture} />
        <h3>Profile</h3>
        <p>I am a new graduate, and currently looking for full time positions in Computer Science and Software Egineering. If you are interested in me, please reach out via </p>
        <a href="mailto:samisamara548@gmail.com">samisamara548@gmail.com</a>

        
      </div>
      <div>
        <h3>Skills</h3>
        <p>I have developed my skills in Computer Science over the years, as well as other varying skills centered around design. Below are highlights of those technical skills.</p>
        <ul>
          <li>JavaScript/React</li>
          <li>Java</li>
          <li>C#</li>
          <li>MySQL</li>
          <li>Git and GitHub</li>
          <li>AutoDesk Inventor</li>
          <li>Adobe Illutrator/Adobe Photoshop</li>
        </ul>
      </div>
      <div>
        <button>Hire Me</button>
        <button>Download Resume</button>
      </div>
    </div>
  )
};

export default AboutMe;