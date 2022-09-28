import React from "react";
import Experience from "./Experience";

const Credentials = () => {

  const educations = [
    {
      name: 'g',
      educationTime: 'August 2013 - August 2017'
    }
  ];

  return (
    <div>
      <h4>Resume</h4>
      <h2>More of my credentials</h2>
      <p className="lead">This is some text</p>
      
      <div className="col-twelve">
        <div className="timeline-block">
          <p>this is even more text</p>
        </div>
        <Experience />
      </div>
    </div>
  );
};

export default Credentials;