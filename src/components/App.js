import React from "react";
import AboutMe from "./AboutMe";
import '../styles/App.css';
import Header from "./Header";
import Credentials from "./Credentials";
import Navbar from "./Navbar";

const App = () => {
  return (
    <div id="appStyling">
      <Navbar />
      <Header />
      <AboutMe />
      <h1>Filler</h1>
      <h1>Filler</h1>
      <h1>Filler</h1>
      
      <Credentials />
      
    </div>
  );

};

export default App;