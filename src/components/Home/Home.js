import React from "react";
import "./Home.css";
import { BsArrowDownCircle } from "react-icons/bs";
import {GrLinkedinOption, GrFacebookOption} from 'react-icons/gr'
import {AiFillGithub} from 'react-icons/ai'
import {IoLogoGoogle} from 'react-icons/io'

const Home = () => {
  return (
    <div>
      <div className="h-screen banner-extra-style relative flex justify-center items-center">
        <div>
          <h1 className="text-white text-center text-4xl md:text-6xl font-semibold">Front End developer</h1>
          <div className="text-white text-2xl flex justify-center mt-8 items-center">
              <span>
                  <GrFacebookOption></GrFacebookOption>
              </span>
              <span className="ml-3">
                  <AiFillGithub></AiFillGithub>
              </span>
              <span className="ml-3">
                  <IoLogoGoogle></IoLogoGoogle>
              </span>
              <span className="ml-3">
                  <GrLinkedinOption></GrLinkedinOption>
              </span>
           
          </div>
        </div>
        <a
          href="#kk"
          className="text-4xl text-warning absolute top-[900px] left-[49%]"
        >
          <BsArrowDownCircle></BsArrowDownCircle>
        </a>
      </div>
    </div>
  );
};

export default Home;
