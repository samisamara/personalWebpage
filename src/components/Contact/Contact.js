import React from "react";
import "./Contact.css";
import { FaLocationArrow, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div id="contact">
      <h1 className="contactHeader">Contact</h1>
      <h2 className="contactSubtext">Interested in me? Here's how you can reach out!</h2>
      <div className="connections">
        <div className="connectionDiv">
          <FaLocationArrow size={50} className="connectionIcon"/>
          <h3 className="conHeader">Where to find me</h3>
          <p className="conText">Orland Park, IL 60462</p>
        </div>
        <div className="connectionDiv">
          <FaEnvelope size={50} className="connectionIcon"/>
          <h3 className="conHeader">Email me at</h3>
          <p className="conText">samisamara548@gmail.com</p>
        </div>
        <div className="connectionDiv">
          <FaLinkedin size={50} className="connectionIcon"/>
          <div className="anchorThing">
            <h3 className="conHeader">Get in touch!</h3>
            <p className="conText"><a href="https://www.linkedin.com/in/sami-samara" className="conText conAnchor" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Contact;