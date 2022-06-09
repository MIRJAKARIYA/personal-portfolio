import React from "react";
import { send } from 'emailjs-com';
import "./ContactMe.css";

const ContactMe = () => {

  const handleContact = (e) =>{
    e.preventDefault()
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    const subject = e.target.subject.value;
    send(
      'service_vvms9za',
      'template_71p1sc4',
      {
        sender_name:name,
        sender_email:email,
        message:message,
        sender_subject: subject,
        sender_phone: phone,
      },
      'vSIPicX-JygQnDR_c'
    )
    .then((res)=>{
      console.log('Message sent successfully',res.status,res.text)
    })
    .catch((err)=>{
      console.log('Failed', err)
    })
  }

  return (
<div className="contact-me-container">
<div className="max-w-[1200px] mx-auto lg:pl-10">
      <h1 className="text-4xl">Contact me</h1>
      <form action="" className="mt-4 md:w-full" onSubmit={handleContact}>
        <div className="md:flex">
          <input type="text" placeholder="Name*" name="name" className="p-4 pl-0" required/>
          <input type="number" className="md:ml-8 p-4 pl-0" name="phone" placeholder="Phone*" required/>
        </div>
        <div className="md:flex">
          <input type="email" placeholder="Email*" name="email" className="md:mt-4 p-4 pl-0" required/>
          <input type="text" placeholder="Subject*" name="subject" className="md:ml-8 p-4 md:mt-4 pl-0" required/>
        </div>
        <textarea rows={4} type="text" name="message" className="mt-4 p-4 pl-0" placeholder="Message*" required/>
        <button type="submit" className="btn btn-primary btn-sm">send message</button>
      </form>
    </div>
</div>
  );
};

export default ContactMe;
