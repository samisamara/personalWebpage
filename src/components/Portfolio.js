import React from "react";
import '../styles/Portfolio.css';

const projects = [
  {
    name: "AtlasIMS",
    type: "Web Development",
    description: "Designed UI for business front page. Created a webpage with the Mobile-First design philosophy and designed the website structure to be both interactive and informative of Atlas IMS and their business operations."
  },
  {
    
  }
]

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="content">
        <h1 className="portfolioTitle">Portfolio</h1>
        <h3 className="portfolioSubTitle">Check out some of my Projects!</h3>
      </div>
    </div>
  );
};

export default Portfolio;