"use client"

import React, { useState } from 'react';
import { sendEmail } from '../api/send/route';

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      await sendEmail(data);
      console.log("Message sent.");
      setEmailSubmitted(true);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
  <section id='contact'>
    <div className=" flex items-center justify-center ">
      <form className="flex flex-col w-64 lg:w-1/3 mt-10" onSubmit={handleSubmit}>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="text-white block mb-2 text-sm font-medium"
        >
          Your email
        </label>
        <input
          name="email"
          type="email"
          id="email"
          required
          className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          placeholder="Enter Your Email Address"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="subject"
          className="text-white block text-sm mb-2 font-medium"
        >
          Subject
        </label>
        <input
          name="subject"
          type="text"
          id="subject"
          required
          className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          placeholder="Subject"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="message"
          className="text-white block text-sm mb-2 font-medium"
        >
          Message
        </label>
        <textarea
          name="message"
          id="message"
          className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          placeholder="Message"
        />
      </div>
      <button
        type="submit"
        className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
      >
        Send Message
      </button>
    </form>
  </div>
  </section>
  );
};

export default EmailSection;
