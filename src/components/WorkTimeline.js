import React from "react";
import "./TimeLine.css";
import WorkElement from "./WorkElement";

const jobs = [
  {
    jobTitle: 'Intern Backend Engineer',
    business: 'ChangEd',
    date: 'October 2023 - Present',
    description: "Designed a comprehensive business admin application for admins to view end-user stats, enhancing business analytics, engineered backend functions and a Firebase database segregating user data by ABA numbers, optimizing client data management Spearheaded the creation of an intuitive and user-friendly interface for the Business Admin App, significantly enhancing user experience and engagement with the platform Implemented a secure sign-in process, enhancing user trust and app security",
    key: "w1"
  },
  {
    jobTitle: 'Contract Software Engineer',
    business: 'Atlas IMS',
    date: 'August 2021 - September 2022',
    description: "Designed, developed, and maintained software applications to meet project requirements, collaborated with cross-functional teams to gather and analyze user needs and system specifications, worked with version control systems to manage and track changes in the codebase participated in code reviews, providing constructive feedback and ensuring code quality and adherence to coding standards",
    key: "w2"
  },
  {
    jobTitle: 'Store Manager',
    business: 'UPS',
    date: 'March 2020 - Present',
    description: "Managed UPS packaging and shipment operations. I also maintained privacy policies to abide with UPS's goal of maintaining customer's privacy, Operated all software programs on Point of Sale, MS Office System, and internal project management systems to meet with time sensitive tasks, and managed employment within the facility.",
    key: "w3"
  },
  {
    jobTitle: 'Technical Sales Consultant',
    business: 'Best Buy',
    date: 'August 2019 - December 2019',
    description: "Operated departments for numerous products and services, such as routers, security systems, etc. I also grew sales and boosted profits by implementing proactive management strategies, and trained and developed new hires in company processes.",
    key: "w4"
  },
];

const WorkTimeline = () => {
  return (
    <div className="timeline">
    <h1 className="listTitle">Work Experience</h1>
    <ul>
      {
        jobs.map((job) => <WorkElement key={job.key} jobTitle={job.jobTitle} business={job.business} date={job.date} description={job.description} />)
      }
    </ul>
  </div>
  )

}

export default WorkTimeline;