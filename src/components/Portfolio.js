import React from "react";
import '../styles/Portfolio.css';
import Project from "./Project";

const projects = [
  {
    name: "AtlasIMS",
    type: "Web Development",
    description: "Designed UI for business front page. Created a webpage with the Mobile-First design philosophy and designed the website structure to be both interactive and informative of Atlas IMS and their business operations."
  },
  {
    name: "driveThruApp",
    type: "Web Development",
    description: "Designed the functionality of a drive thru app a fast food corporation would utilize to speed up the process order and delivery. This project used Starbucks as an example of how their own drive thru app would function."
  },
  {
    name: "Donut Dasher",
    type: "Android App",
    description: "Mobile Application for a hypthetical donut delivery service. Users can customize donuts to their own preference, and the price would be calculated based on the user's choices."
  },
  {
    name: "Casino Games",
    type: "Java",
    description: "Collection of card and dice games built in Java. Users can select different games to play, such as Blackjack and Ceelo, view instructions, or go back to the main menu. The program tracks wins, loses, and money throughout the project."
  },
  {
    name: "Video Player",
    type: "Web Page",
    description: "Video playing webpage that pulls YouTube videos from YouTube's API. The website defaults to a video about React.js upon launch, and users can search for videos and view recommended videos based on the results."
  },
  {
    name: "Image Search",
    type: "Web Page",
    description: "Web page that allows users to view images based on the user's search term. This website utilizes Google's API to perform search actions."
  },
  {
    name: "Pokemon Quiz",
    type: "Web Page",
    description: "A web quiz on the 'Pokemon' series. Questions range from easy to hard. When users submits the quiz, and animated test score appears on the page."
  },
  {
    name: "Super Smash Bros Webpage",
    type: "Web Page",
    description: "A web page showcasing all the content available in the 'Super Smash Bros Ultimate' video game. The webpage has custom text for each character, item, mode, and button combinations. The website also allows users to watch the official trailer for the game."
  },
  {
    name: "Real-Time-Chatroom",
    type: "Web Page",
    description: "Discord-like webpage that allows for several different users to send messages to a variety of different servers/chatrooms."
  },
  {
    name: "Weather App",
    type: "Web Page",
    description: "Weather application that uses user's location to find the correct weather, and display that information on screen, with CSS styling that changes depending on the weather conditions of the user's area."
  }
];

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="content">
        <h1 className="portfolioTitle">Portfolio</h1>
        <h3 className="portfolioSubTitle">Check out some of my Projects!</h3>
        <div className="">
          {
            projects.map(project => <Project />)
          }
        </div>
      </div>
    </div>
  );
};

export default Portfolio;