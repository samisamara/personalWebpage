import React from "react";
import "./TimeLine.css";
import WorkElement from "./WorkElement";

const jobs = [
  {
    jobTitle: 'Software Engineer',
    business: 'Urban Communications',
    date: 'April 2025 - Present',
    description: "Built a LaTeX–Python pipeline to auto-generate PDF template documents from HTML form data, Integrated SMS with Opt-In/Opt-Out functionality into a CRM using PHP, Created CRM workflows to send SMS/email templates, auto-assign cases, and delete obsolete data, Migrated business data from a legacy CRM to a new system while preserving integrity, Optimized backend services to support seamless data flow, reducing server load times from 500ms to 120ms",
    key: "w1"
  },
  {
    jobTitle: 'Intern Backend Engineer',
    business: 'Changed App',
    date: 'October 2023 - October 2024',
    description: "Designed a comprehensive business admin application for admins to view end-user stats, enhancing business analytics, engineered backend functions and a Firebase database segregating user data by ABA numbers, optimizing client data management Spearheaded the creation of an intuitive and user-friendly interface for the Business Admin App, thereby significantly enhancing user experience and engagement with the platform Implemented a secure sign-in process, enhancing user trust and app security",
    key: "w2"
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