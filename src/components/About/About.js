import React from "react";
import Profile from "../../images/profile.jpg";

const About = () => {
  return (
    <div className="my-32 scroll-mt-20" id="about">
      <div className="max-w-[1200px] mx-auto md:flex">
        <div className="md:w-[40%] w-full">
          <img
            src={Profile}
            alt=""
            className="md:w-full w-[95%] mx-auto h-[500px] md:max-w-[400px] object-cover rounded-lg"
          />
        </div>
        <div className="md:w-[60%] w-full flex items-center">
          <div className="md:mt-[-80px] md:w-full w-[90%] mx-auto mt-2">
            <h1 className="md:text-4xl text-3xl font-semibold">
              I am <span className="text-secondary">Mir Jakariya</span>,<br></br> Front End Web Developer<br></br> from
              Dhaka, Bangladesh
            </h1>
            <p className="mt-4">
            Greetings!!! Thank you for taking the time to go through my website. In 2020, I graduated with a bachelor's degree in Electrical and Electronic Engineering. During my studies, I studied the fundamentals of C and Assembly languages, which I thoroughly enjoyed. Rather than electrical engineering, I thought I was more passionate about programming. Following graduation, I began to study programming. I tried python and Java for a few days, but I had no idea how to apply them in real life. I discovered the prospects in the web development carrier after doing some research so without wasting any time, I enrolled in Programming Hero's Complete Web Development course, which I recently completed successfully. HTML5, CSS3, Javascript, React, Node.js, Express.js, and MongoDb are among my web development skills.
            </p>
            <a href="#contactme" className="btn btn-primary btn-sm mt-4">
              contact me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
