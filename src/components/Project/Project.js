import React from "react";
import "./Project.css";

const Project = ({ name, type, description, image }) => {
  return (
    <div className="project">
      <img src={image} alt={name} className="projectImage"/>
    </div>
  );
};

export default Project;