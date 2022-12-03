import React from "react";
import './TimeLine.css';

const WorkElement = ({ jobTitle, business, date, description }) => {
  return (
    <div>
      <li>
        <span>{date}</span>
        <div className="content">
          <h2 className="locationName">{business}</h2>
          <h3>{jobTitle}</h3>
          <p>
            {description}
          </p>
        </div>
      </li>
    </div>
  );
};

export default WorkElement;