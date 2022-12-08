import React, { useState } from "react";
import "./Project.css";
import Modal from "../Modal/Modal";

const Project = ({ name, type, description, image }) => {
  const [isOpen, setIsOpen] = useState(false);

  const projectEvents = (e) => {
    console.log(name);
    setIsOpen(true);
  };

  return (
    <div className="project">
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        image={image}
        name={name}
        description={description}
        type={type}
      >
        {name}
      </Modal>
      <img
        src={image}
        alt={name}
        className="projectImage"
        onClick={projectEvents}
      />
    </div>
  );
};

export default Project;
