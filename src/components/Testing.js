import React from "react";
import atlasims from "../images/portfolioImages/atlasims.png";
import casino from "../images/portfolioImages/casino_games.png";
import chatroom from "../images/portfolioImages/chatroom.png";
import donut_dasher from "../images/portfolioImages/donut_dasher.png";
import driveThru from "../images/portfolioImages/driveThru.png";
import pokemon_quiz from "../images/portfolioImages/pokemon_quiz.png";
import smash_website from "../images/portfolioImages/smash_website.png";
import video_player from "../images/portfolioImages/video_player.png";
import weather_app from "../images/portfolioImages/weather_app.png";

import hat from "../images/hat.png";
import "./Testing.css";

// const images = [atlasims, casino, chatroom, donut_dasher, driveThru, pokemon_quiz, smash_website, video_player, weather_app];
const images = [hat, hat, hat, hat, hat, hat, hat, hat, hat];

const Testing = () => {
  return (
    <div className="top-layer">
      {/* 1. */}
      <div className="outer-layer">
        {/* 2. */}
        <div className="inner-layer animate">
          {/* 3 */}
          {images.map((i) => {
            return (
              <div className="img-content">
                <img src={i} />
              </div>
            );
          })}
          {images.map((i) => {
            return (
              <div className="img-content">
                <img src={i} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testing;