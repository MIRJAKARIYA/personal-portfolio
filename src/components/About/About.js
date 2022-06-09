import React from "react";
import Profile from "../../images/profile.jpg";

const About = () => {
  return (
    <div className="my-32">
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
              I am Mir Jakariya,<br></br> Front End Web Developer<br></br> from
              Dhaka, Bangladesh
            </h1>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              dignissimos voluptatem, cum similique quisquam ex quia ducimus
              quam aliquam ullam maxime quae asperiores ab, vero quod officiis
              repellat quos doloremque assumenda eius? Obcaecati architecto
              accusamus error? Labore explicabo quisquam vitae rem laudantium
              delectus, quos ut ex magni temporibus eveniet perspiciatis.
            </p>
            <button className="btn btn-primary btn-sm mt-4">
              download resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
