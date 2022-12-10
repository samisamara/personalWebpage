import React from "react";
import "./AboutMe.css";
import SkillBar from "../SkillBar/SkillBar.js";
import selfPicture from "../../images/selfPicture.jpeg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import resume from "../../images/Samara_Sami_Resume.pdf";

const AboutMe = () => {
  return (
    <div id="aboutMe">
      <div className="aboutMeContent">
        <h1 className="aboutMeHeader">About Me</h1>
        <div className="introSection">
          <img id="selfPicture" className="rounded-circle" src={selfPicture} />
          <p className="introText">
            Hello! I'm a software engineer seeking employment in the computer
            science industry. I graduated in Saint Xavier University with my
            Master's degree in Computer Science. My primary goal is software
            engineering, however, I also have a great interest in UX design,
            mobile applications, cyber security, and many others.
          </p>
        </div>
        <Row>
          <Col key={1}>
            <div className="profileSection">
              <h3 className="segmentTitle">PROFILE</h3>
              <p className="aboutText">
                I am a new graduate, and currently looking for full time
                positions in Computer Science and Software Egineering. If you
                are interested in me, please reach out via{" "}
                <a className="anchor" href="mailto:samisamara548@gmail.com">
                  samisamara548@gmail.com
                </a>
              </p>

              <div className="personalDetail">
                <h4 className="detailLabel">FULL NAME</h4>
                <p className="detail">Sami Samara</p>
              </div>
              <div className="personalDetail">
                <h4 className="detailLabel">BIRTH DATE</h4>
                <p className="detail">May 16th, 1999</p>
              </div>
              <div className="personalDetail">
                <h4 className="detailLabel">EMAIL</h4>
                <p className="detail">samisamara548@gmail.com</p>
              </div>
            </div>
          </Col>
          <Col key={2}>
            <div className="skills">
              <h3 className="segmentTitle">SKILLS</h3>
              <p className="skillsText">
                I have developed my skills in Computer Science over the years,
                as well as other varying skills centered around design. Below
                are highlights of those technical skills.
              </p>
              <SkillBar />
            </div>
          </Col>
        </Row>
        <div className="aboutMeButtons">

          {/* <button className="button btn-1">Hire Me</button> */}

          <a className="button btn-1 resumeButton">Hire Me</a>
          <a href={resume} download className="button resumeButton">
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
