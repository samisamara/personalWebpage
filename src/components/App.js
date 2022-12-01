import React from "react";
import AboutMe from "./AboutMe";
import '../styles/App.css';
import Header from "./Header";
import Credentials from "./Credentials";
import Portfolio from "./Portfolio";
import Navbar from "./Navbar";

const App = () => {
  return (
    <div id="appStyling">
      <Navbar />
      <Header />
      <AboutMe />
      <Portfolio />
      <Credentials />
      
    </div>
  );

};

export default App;