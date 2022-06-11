import React from "react";
import "./PersonalInfo.css";

const PersonalInfo = () => {
  return (
    <div className="personal-info-container">
      <div className="max-w-[1200px] mx-auto lg:pl-10 scroll-mt-20" id="personal-information">
        <h1 className="text-3xl font-semibold text-primary">Personal Information</h1>
        <div className="mx-auto mt-10">
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="lg:w-[40%] ml-7 lg:mx-auto lg:ml-0">
              <p className="text-xl font-semibold">
                Name: <span className="text-red-700">Mir Jakariya</span>
              </p>
              <p className="text-xl font-semibold mt-3">
                Age: <span className="text-red-700">25</span>
              </p>
              <p className="text-xl font-semibold mt-3">
                Qualification:{" "}
                <span className="text-red-700">BSc in Engineering</span>
              </p>
              <p className="text-xl font-semibold mt-3">
                Profession:{" "}
                <span className="text-red-700">Front End Developer</span>
              </p>
              <p className="text-xl font-semibold mt-3">
                Language:{" "}
                <span className="text-red-700">Bangla, English</span>
              </p>
            </div>
            <div className="lg:w-[60%]">
              <h1 className="text-2xl ml-[-160px] text-center text-teal-900 font-semibold">
                Educational Background
              </h1>
              <div className="flex justify-center">
                <ul className="steps steps-vertical">
                  <li data-content="🎓" className="step step-warning">
                    <span>
                      <span className="text-red-700 font-semibold">Graduation</span>: BSc in
                      EEE at Daffodil International University
                    </span>
                  </li>
                  <li data-content="🎓" className="step step-secondary">
                    <span>
                      <span className="text-red-700 font-semibold">HSC</span>: Science at MEH
                      Arif College
                    </span>
                  </li>
                  <li data-content="🎓" className="step step-accent">
                    <span>
                      <span className="text-red-700 font-semibold">SSC</span>: Science at
                      Rajabari High School
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
