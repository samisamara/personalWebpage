import React from "react";
import '../styles/TimeLine.css';

const EducationElements = ({ schoolName, degree, date, description }) => {
  return (
    <div>
      <li>
        <span>{date}</span>
        <div className="content">
          <h2 className="locationName">{schoolName}</h2>
          <h3>{degree}</h3>
          <p>
            {description}
          </p>
        </div>
      </li>
    </div>
  );
};

export default EducationElements;