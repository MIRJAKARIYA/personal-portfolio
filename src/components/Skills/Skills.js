import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiPhotopea } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { SiNetlify, SiFirebase } from "react-icons/si";
import './Skills.css';

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="max-w-[1200px] mx-auto lg:pl-10 scroll-mt-20" id="skills">
        <h1 className="text-3xl text-primary font-semibold mb-4">Skills</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div data-aos-duration="300" data-aos="fade-up" className="card shadow-xl bg-slate-900 text-white">
            <div className="text-center pt-4">
              <div
                className="radial-progress text-white"
                style={{ "--value": 100 }}
              >
                100%
              </div>
            </div>
            <div className="card-body mt-[-15px]">
              <h2 className="text-center">Front End Development</h2>
              <div className="grid grid-cols-4 justify-items-center">
                <div>
                  <p className="text-3xl flex justify-center text-orange-500">
                    <AiFillHtml5 />
                  </p>
                  <p className="text-sm">HTML5</p>
                </div>
                <div>
                  <p className="text-3xl flex justify-center text-blue-500">
                    <DiCss3 />
                  </p>
                  <p className="text-sm">CSS3</p>
                </div>
                <div>
                  <p className="text-3xl flex justify-center text-yellow-500">
                    <IoLogoJavascript />
                  </p>
                  <p className="text-sm">JAVASCRIPT</p>
                </div>
                <div>
                  <p className="text-3xl flex justify-center text-blue-300">
                    <FaReact />
                  </p>
                  <p className="text-sm">REACT.JS</p>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="300" className="card shadow-xl bg-slate-900 text-white">
            <div className="text-center pt-4">
              <div
                className="radial-progress text-white"
                style={{ "--value": 50 }}
              >
                50%
              </div>
            </div>
            <div className="card-body mt-[-15px]">
              <h2 className="text-center">Back End Development</h2>
              <div className="grid grid-cols-3 justify-items-center">
                <div>
                  <p className="text-3xl flex justify-center text-green-500">
                    <FaNodeJs />
                  </p>
                  <p className="text-sm">NODE.JS</p>
                </div>
                <div>
                  <p className="text-3xl flex justify-center text-blue-500">
                    <SiExpress />
                  </p>
                  <p className="text-sm">EXPRESS.JS</p>
                </div>
                <div>
                  <p className="text-3xl flex justify-center text-green-500">
                    <DiMongodb />
                  </p>
                  <p className="text-sm ">MONGODB</p>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="600" data-aos-duration="300" className="card shadow-xl bg-slate-900 text-white">
            <div className="text-center pt-4">
              <div
                className="radial-progress text-white"
                style={{ "--value": 100 }}
              >
                100%
              </div>
            </div>
            <div className="card-body mt-[-15px]">
              <h2 className="text-center">Other Technologies</h2>
              <div className="grid grid-cols-4 justify-items-center">
                <div>
                  <p className="text-3xl flex justify-center text-white">
                    <AiFillGithub />
                  </p>
                  <p className="text-sm">GITHUB</p>
                </div>
                <div>
                  <p className="text-3xl flex justify-center text-yellow-500">
                    <SiFirebase />
                  </p>
                  <p className="text-sm">FIREBASE</p>
                </div>
                <div>
                  <p className="text-3xl flex justify-center text-cyan-500">
                    <SiNetlify />
                  </p>
                  <p className="text-sm">NETLIFY</p>
                </div>
                <div>
                  <p className="text-3xl flex justify-center text-blue-300">
                    <SiPhotopea />
                  </p>
                  <p className="text-sm">PHOTOPEA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
