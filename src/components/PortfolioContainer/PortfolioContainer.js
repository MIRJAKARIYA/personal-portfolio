import React from "react";
import About from "../About/About";
import ContactMe from "../ContactMe/ContactMe";
import Home from "../Home/Home";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

const PortfolioContainer = () => {
  return (
    <div>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <ContactMe></ContactMe>
    </div>
  );
};

export default PortfolioContainer;
