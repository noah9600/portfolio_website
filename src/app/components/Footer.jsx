import React from "react";
import { FaInstagram, FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-14 footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between items-center">
        <span className="mr-12">TKG</span>
        <div className="flex flex-row items-center space-x-9">
          <a
            href="https://www.linkedin.com/in/mao-tabuchi-9b7698240/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            <FaLinkedinIn size="50px" />
          </a>
          <a
            href="https://github.com/noah9600"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-600"
          >
            <FaGithub size="50px" />
          </a>
        </div>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
