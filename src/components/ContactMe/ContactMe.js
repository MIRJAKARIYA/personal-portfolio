import React from "react";
import "./ContactMe.css";

const ContactMe = () => {
  return (
<div className="contact-me-container">
<div className="max-w-[1200px] mx-auto lg:pl-10">
      <h1 className="text-4xl">Contact me</h1>
      <form action="" className="mt-4 md:w-full">
        <div className="md:flex">
          <input type="text" placeholder="Name*" className="p-4 pl-0" />
          <input type="number" className="md:ml-8 p-4 pl-0" placeholder="Phone*" />
        </div>
        <div className="md:flex">
          <input type="email" placeholder="Email*" className="md:mt-4 p-4 pl-0" />
          <input type="text" placeholder="Subject*" className="md:ml-8 p-4 md:mt-4 pl-0" />
        </div>
        <textarea rows={4} type="text" className="mt-4 p-4 pl-0" placeholder="Message*" />
        <button className="btn btn-primary btn-sm">send message</button>
      </form>
    </div>
</div>
  );
};

export default ContactMe;
