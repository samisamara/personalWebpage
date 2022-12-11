import React from "react";
import "./Portfolio.css";
import Project from "../Project/Project";
import atlasims from "../../images/portfolioImages/atlasims.png";
import casino_games from "../../images/portfolioImages/casino_games.png";
import chatroom from "../../images/portfolioImages/chatroom.png";
import donut_dasher from "../../images/portfolioImages/donut_dasher.png";
import driveThru from "../../images/portfolioImages/driveThru.png";
import pokemon_quiz from "../../images/portfolioImages/pokemon_quiz.png";
import smash_website from "../../images/portfolioImages/smash_website.png";
import video_player from "../../images/portfolioImages/video_player.png";
import weather_app from "../../images/portfolioImages/weather_app.png";

const projects = [
  {
    name: "AtlasIMS",
    type: "Web Development",
    description:
      "Designed UI layout for Atlas IMS's business front page. Created a webpage with the Mobile-First design philosophy and designed the website structure to be both interactive and informative of Atlas IMS and their business operations.",
    picture: atlasims,
    link: "https://github.com/whitesand230/atlasiam-site"
  },
  {
    name: "Drive-Thru App",
    type: "Web Development",
    description:
      "Designed the functionality of a drive thru app a fast food corporation would utilize to speed up the process order and delivery. This project used Starbucks as an example of how their own drive thru app would function.",
    picture: driveThru,
    link: "https://github.com/samisamara/driveThruApp"
  },
  {
    name: "Donut Dasher",
    type: "Android App",
    description:
      "Mobile Application for a hypthetical donut delivery service. Users can customize donuts to their own preference, and the price would be calculated based on the user's choices.",
    picture: donut_dasher,
    link: "https://github.com/samisamara/DonutDasher"
  },
  {
    name: "Casino Games",
    type: "Java",
    description:
      "Collection of card and dice games built in Java. Users can select different games to play, such as Blackjack and Ceelo, view instructions, or go back to the main menu. The program tracks wins, loses, and money throughout the project.",
    picture: casino_games,
    link: "https://github.com/samisamara/casinogames"
  },
  {
    name: "Video Player",
    type: "Web Page",
    description:
      "Video playing webpage that pulls YouTube videos from YouTube's API. The website defaults to a video about React.js upon launch, and users can search for videos and view recommended videos based on the results.",
    picture: video_player,
    link: "https://github.com/samisamara/reactVideoPlayer"
  },
  {
    name: "Pokemon Quiz",
    type: "Web Page",
    description:
      "A web quiz on the 'Pokemon' series. Questions range from easy to hard. When users submits the quiz, and animated test score appears on the page.",
    picture: pokemon_quiz,
    link: "https://github.com/samisamara/pokemonQuiz"
  },
  {
    name: "Super Smash Bros Webpage",
    type: "Web Page",
    description:
      "A web page showcasing all the content available in the 'Super Smash Bros Ultimate' video game. The webpage has custom text for each character, item, mode, and button combinations. The website also allows users to watch the official trailer for the game.",
    picture: smash_website,
    link: "https://github.com/samisamara/smashwebsite"
  },
  {
    name: "Real-Time-Chatroom",
    type: "Web Page",
    description:
      "Discord-like webpage that allows for several different users to send messages to a variety of different servers/chatrooms.",
    picture: chatroom,
    link: "https://github.com/samisamara/real-time-chatroom"
  },
  {
    name: "Weather App",
    type: "Web Page",
    description:
      "Weather application that uses user's location to find the correct weather, and display that information on screen, with CSS styling that changes depending on the weather conditions of the user's area.",
    picture: weather_app,
    link: "https://github.com/samisamara/WeatherApp"
  },
];

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="PortfolioContent">
        <h1 className="portfolioTitle">Portfolio</h1>
        <h3 className="portfolioSubTitle">Check out some of my Projects!</h3>



        <div className="animation-top-layer">
          <div className="projectContainerOuterlayer">
            <div className="projectContainerInnerlayer animate">
              {projects.map((project) => (
                <Project
                  name={project.name}
                  type={project.type}
                  description={project.description}
                  image={project.picture}
                  link={project.link}
                />
              ))}
              {projects.map((project) => (
                <Project
                  name={project.name}
                  type={project.type}
                  description={project.description}
                  image={project.picture}
                  link={project.link}
                />
              ))}
            </div>
        </div>


        </div>
      </div>
    </div>
  );
};

export default Portfolio;
