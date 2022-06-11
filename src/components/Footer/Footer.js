import React from "react";
import "./Footer.css";
import { GrLinkedinOption, GrFacebookOption } from "react-icons/gr";
import { AiFillGithub } from "react-icons/ai";
import { IoLogoGoogle } from "react-icons/io";



const Footer = () => {
  return (
    <div className="footer-container">
      <div className="max-w-[270px] mx-auto">
        <div className="flex justify-between">
          <a data-aos="zoom-in" data-aos-duration="300" href="https://www.facebook.com/MIRJAKARIYA239" target="_blank"
              rel="noreferrer" className="w-[50px] h-[50px] border-2 rounded-full text-2xl flex justify-center items-center hover:border-black duration-300">
            <GrFacebookOption></GrFacebookOption>
          </a>
          <a data-aos="zoom-in" data-aos-duration="300" data-aos-delay="300" href="https://github.com/MIRJAKARIYA" target="_blank"
              rel="noreferrer" className="w-[50px] h-[50px] border-2 rounded-full text-2xl flex justify-center hover:border-black duration-300 items-center">
          <AiFillGithub></AiFillGithub>
          </a>
          <a data-aos="zoom-in" data-aos-duration="300" data-aos-delay="600" href="mailto:mirjakriya239@gmail.com" className="w-[50px] h-[50px] border-2 rounded-full text-2xl flex justify-center items-center hover:border-black duration-300">
          <IoLogoGoogle></IoLogoGoogle>
          </a>
          <a data-aos="zoom-in" data-aos-duration="300" data-aos-delay="900" href="https://www.linkedin.com/in/mir-jakariya-99b777229/" target="_blank"
              rel="noreferrer" className="w-[50px] h-[50px] border-2 rounded-full text-2xl flex justify-center items-center hover:border-black duration-300">
          <GrLinkedinOption></GrLinkedinOption>
          </a>
        </div>
        <p className="mt-4 text-sm text-center text-slate-500">&#169; 2022 Jakariya. all rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
