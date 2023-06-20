import React from "react";
import './TimeLine.css';
import EducationElements from "./EducationElements";

const educationList = [
  {
    schoolName: 'Saint Xavier University',
    degree: "Master's Degree",
    date: 'December 2021 - December 2022',
    description: "Majored in computer science, specializing in software design and full stack development. During group assignments, I developed numerous cross-platform web projects and mobile applications, including a universal drive-thru application software. I also conducted testing on DDoS programs for analysis.",
    key: "s1"
  },
  {
    schoolName: 'Saint Xavier University',
    degree: "Bachelor's Degree",
    date: 'August 2019 - December 2021',
    description: "Developed my skills in software development processes and algorithm design. I built several Java projects, including a casino games application that keeps track of wins, losses, and current funds. Additionally, I developed my skills in data analyzing tools such as SQL and RStudio.",
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
    description: "Graduated in the class of 2017 and won 3rd place for Additive Engineering in Skills USA 2017. During my studies, I focused on and developed numerous models in additive engineering.",
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