import React from "react";
import './SkillBar.css';

const SkillBar = () => {
  return (
    <div className="container">

      <div className="skill-box">
        <span className="title">React/JavaScript</span>
        <div className="skill-bar">
          <span className="skill-per reactjs">
            <span className="tooltip">90%</span>
          </span>
        </div>
      </div>

      <div className="skill-box">
        <span className="title">React Native</span>
        <div className="skill-bar">
          <span className="skill-per reactNative">
            <span className="tooltip">80%</span>
          </span>
        </div>
      </div>

      <div className="skill-box">
        <span className="title">Node.js/Express</span>
        <div className="skill-bar">
          <span className="skill-per nodeExpress">
            <span className="tooltip">80%</span>
          </span>
        </div>
      </div>

      <div className="skill-box">
        <span className="title">HTML5/CSS</span>
        <div className="skill-bar">
          <span className="skill-per htmlcss">
            <span className="tooltip">90%</span>
          </span>
        </div>
      </div>

      <div className="skill-box">
        <span className="title">Java</span>
        <div className="skill-bar">
          <span className="skill-per java">
            <span className="tooltip">80%</span>
          </span>
        </div>
      </div>

      <div className="skill-box">
        <span className="title">Redux</span>
        <div className="skill-bar">
          <span className="skill-per redux">
            <span className="tooltip">70%</span>
          </span>
        </div>
      </div>

      <div className="skill-box">
        <span className="title">MongoDB</span>
        <div className="skill-bar">
          <span className="skill-per mongoDB">
            <span className="tooltip">70%</span>
          </span>
        </div>
      </div>

      <div className="skill-box">
        <span className="title">MySQL</span>
        <div className="skill-bar">
          <span className="skill-per mysql">
            <span className="tooltip">70%</span>
          </span>
        </div>
      </div>

      <div className="skill-box">
        <span className="title">Git</span>
        <div className="skill-bar">
          <span className="skill-per git">
            <span className="tooltip">85%</span>
          </span>
        </div>
      </div>

      <div className="skill-box">
        <span className="title">Android Studio</span>
        <div className="skill-bar">
          <span className="skill-per androidStudio">
            <span className="tooltip">60%</span>
          </span>
        </div>
      </div>

      <div className="skill-box">
        <span className="title">R Language</span>
        <div className="skill-bar">
          <span className="skill-per r">
            <span className="tooltip">60%</span>
          </span>
        </div>
      </div>

      <div className="skill-box">
        <span className="title">AutoDesk Inventor</span>
        <div className="skill-bar">
          <span className="skill-per autodesk">
            <span className="tooltip">85%</span>
          </span>
        </div>
      </div>

      <div className="skill-box">
        <span className="title">Adobe Illutrator/Photoshop</span>
        <div className="skill-bar">
          <span className="skill-per adobe">
            <span className="tooltip">80%</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default SkillBar;