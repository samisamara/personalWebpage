import React from "react";
import AboutMe from "./AboutMe/AboutMe.js";
import "./App.css";
import Header from "./Header/Header.js";
import Credentials from "./Credentials/Credentials.js";
import Portfolio from "./Portfolio/Portfolio.js";
import Navbar from "./Navbar/Navbar.js";
import Testing from "./Testing.js";

const App = () => {
  return (
    <div id="appStyling">
      <Navbar />
      <Header />
      <AboutMe />
      <Portfolio />
      <Testing />
      <Credentials />
      
    </div>
  );
};

export default App;
