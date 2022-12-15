import React from "react";
import './TimeLine.css';
import EducationElements from "./EducationElements";

const educationList = [
  {
    schoolName: 'Saint Xavier University',
    degree: "Master's Degree",
    date: 'December 2021 - December 2022',
    description: "Majored in compupter science, specialized in software design and full stack development. Developed numerous cross platform web projects and mobile applications in group assignments, including a universal drive-thru application software. Tested DDoS programs for analysis.",
    key: "s1"
  },
  {
    schoolName: 'Saint Xavier University',
    degree: "Bachelor's Degree",
    date: 'August 2019 - December 2021',
    description: "Developed my skills in software development processes and algorithm design. Built several Java projects, such as a casino games application that keeps track of wins, loses, and current money. developed data analyzing tools such as SQL and RStudio.",
    key: "s2"
  },
  {
    schoolName: 'Moraine Valley',
    degree: "Associate's Degree",
    date: 'August 2017 - August 2019',
    description: "Studied engineering concepts in mechanical engineering, architecture, and additive engineering.",
    key: "s3"
  },
  {
    schoolName: 'Carl Sandburg Highschool',
    degree: "High School Degree",
    date: 'August 2013 - May 2017',
    description: "Graduated in class of 2017. Won 3rd Place for Additive Engineering in Skills USA 2017. Studied and developed numerous models in additive engineering.",
    key: "s4"
  }
];

const EducationTimeline = () => {
  return (
    <div className="timeline">
    <h1 className="listTitle">Education</h1>
    <ul>
      {
        educationList.map((education) => <EducationElements key={education.key} schoolName={education.schoolName} degree={education.degree} date={education.date} description={education.description} />) 
      }
    </ul>
  </div>
  )
}

export default EducationTimeline;