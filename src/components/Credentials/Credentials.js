import React from "react";
import WorkTimeline from "../WorkTimeline"
import EducationTimeline from "../EducationTimeline";
import './Credentials.css';

const Credentials = () => {

  return (
    <div id="resume">
      <h1 className="resumeTitle">Resume</h1>
      <h2 className="resumeSubTitle">More of my credentials</h2>
      <WorkTimeline />
      <EducationTimeline />
    </div>
  );
};

export default Credentials;