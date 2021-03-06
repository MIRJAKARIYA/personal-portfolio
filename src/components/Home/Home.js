import React from "react";
import "./Home.css";
import { RiArrowDownSLine } from 'react-icons/ri';
import { GrLinkedinOption, GrFacebookOption } from "react-icons/gr";
import { AiFillGithub } from "react-icons/ai";
import { IoLogoGoogle } from "react-icons/io";
import Resume from "./Mir Jakariya's Resume.pdf";
import Typed from "react-typed"

const Home = () => {
  return (
    <div>
      <div
        className="h-screen banner-extra-style relative flex justify-center items-center scroll-mt-0"
        id="home"
      >
        <div className="text-center">
          <h1 className="text-white text-center text-4xl md:text-6xl font-semibold mb-4">
          <Typed
      strings={[
            "Mir Jakariya",
            "I'm a Frontend Developer",
            "I Love building interactive UI's",
          ]}
          typeSpeed={150}
          backSpeed={100}
          loop
        />
          </h1>
          <a
            href={Resume}
            className="btn btn-xs btn-outline btn-warning font-semibold mt-3"
            download={true}
          >
            download resume
          </a>
          <div className="text-white text-2xl flex justify-center mt-6 items-center">
            <a
              href="https://www.facebook.com/MIRJAKARIYA239"
              target="_blank"
              rel="noreferrer"
            >
              <GrFacebookOption></GrFacebookOption>
            </a>
            <a
              className="ml-3"
              href="https://github.com/MIRJAKARIYA"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub></AiFillGithub>
            </a>
            <a className="ml-3" href="mailto:mirjakriya239@gmail.com">
              <IoLogoGoogle></IoLogoGoogle>
            </a>
            <a
              className="ml-3"
              href="https://www.linkedin.com/in/mir-jakariya-99b777229/"
              target="_blank"
              rel="noreferrer"
            >
              <GrLinkedinOption></GrLinkedinOption>
            </a>
          </div>
        </div>
        <a
          href="#about"
          className="text-4xl text-white absolute top-[800px] left-[49%] extra-arrow-style"
        >
          <RiArrowDownSLine></RiArrowDownSLine>
        </a>
      </div>
    </div>
  );
};

export default Home;
