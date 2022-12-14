import React from "react";
import "./TimeLine.css";
import WorkElement from "./WorkElement";

const jobs = [
  {
    jobTitle: 'Store Manager',
    business: 'UPS',
    date: 'March 2020 - Present',
    description: "Managed UPS packaging and shipment operations. I also maintained privacy policies to abide with UPS's goal of maintaining customer's privacy, Operated all software programs on Point of Sale, MS Office System, and internal project management systems to meet with time sensitive tasks, and managed employment within the facility.",
    key: "w1"
  },
  {
    jobTitle: 'Technical Sales Consultant',
    business: 'Best Buy',
    date: 'August 2019 - December 2019',
    description: "Operated departments for numerous products and services, such as routers, security systems, etc. I also grew sales and boosted profits by implementing proactive management strategies, and trained and developed new hires in company processes.",
    key: "w2"
  },
  {
    jobTitle: 'Store Associate and Delivery Services',
    business: 'Panera Bread',
    date: 'August 2018 - August 2019',
    description: "Provided attentive service and proactively assessed guest needs. Also trained new employees in operational proceedures and modeled duties for front and back house positions.",
    key: "w3"
  },
  {
    jobTitle: 'Party Facilitator and Safety',
    business: 'Sky Zone',
    date: 'August 2016 - August 2018',
    description: "Managed event logistics and operations of event planning and booking. Also coordinated schedules and timeline for events. Attentively monitored harness equipment with standards, policies, and regulatory guidelines to promote a safe environment.",
    key: "w4"
  }
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