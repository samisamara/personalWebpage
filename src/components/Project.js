import React from "react";
import "../styles/Project.css";

const Project = ({ name, type, description, image }) => {
  return (
    <div className="project">
      <h1>{name}</h1>
    </div>
  );
};

export default Project;