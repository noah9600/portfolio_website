import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const SocialMediaSection = () => {
  return (
    <div className="container p-12 flex justify-between relative">
      <span className="mr-12">TKG</span>
      <div className="flex flex-row items-center">
        <a
          href="https://twitter.com/your_twitter_handle"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-600 ml-9 "
        >
          <FaTwitter size="50px" />
        </a>
        <a
          href="https://www.instagram.com/your_instagram_handle"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-400 hover:text-red-600 ml-9"
        >
          <FaInstagram size="50px" />
        </a>
        <a
          href="https://www.linkedin.com/in/your_linkedin_profile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 ml-9"
        >
          <FaLinkedinIn size="50px" />
        </a>
      </div>
    </div>
  );
};

export default SocialMediaSection;
