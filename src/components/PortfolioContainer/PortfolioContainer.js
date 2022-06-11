import React from "react";
import About from "../About/About";
import ContactMe from "../ContactMe/ContactMe";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

const PortfolioContainer = () => {
  return (
    <div>
      <Home></Home>
      <About></About>
      <PersonalInfo></PersonalInfo>
      <Skills></Skills>
      <Projects></Projects>
      <ContactMe></ContactMe>
      <Footer></Footer>
    </div>
  );
};

export default PortfolioContainer;
