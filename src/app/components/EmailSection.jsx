"use client"
import React, { useState } from 'react';
import SocialMediaSection from './SocialMediaSection';

const EmailSection = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log('Submitted email:', email);
    console.log('Submitted subject:', subject);
    console.log('Submitted message:', message);
    // You can add further logic like sending the form data to a server
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10 relative top-10" id='contact'> 
      <h2 className="text-white text-2xl font-bold mb-2">Contact Me</h2>
      <form onSubmit={handleSubmit} className="flex flex-col w-1/2">
        <label className="mb-2 text-white font-bold">Your Email</label>
        <input
          type="email"
          placeholder="Your email"
          className="border p-2 mb-4 outline-none rounded-md"
          value={email}
          onChange={handleEmailChange}
          required
        />

        <label className="mb-2 text-white font-bold">Subject</label>
        <input
          type="text"
          placeholder="Subject"
          className="border p-2 mb-4 outline-none rounded-md"
          value={subject}
          onChange={handleSubjectChange}
          required
        />

        <label className="mb-4 text-white font-bold">Message</label>
        <textarea 
          placeholder="Your message"
          className="border p-2 mb-4 outline-none resize-none rounded-md"
          rows="4"
          value={message}
          onChange={handleMessageChange}
          required
        />

        <button
          type="submit"
          className="font-bold bg-gradient-to-br from-blue-500 to-blue-600 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300 mb-3 mt-3"
        >
          Submit
        </button>
      </form>
      
    </div>
  );
};

export default EmailSection;
