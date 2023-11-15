"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const handleDownload = () => {
  const confirmed = window.confirm("Are you sure you want to download your resume?");

  if (confirmed) {
    // Trigger the download
    const link = document.createElement("a");
    link.href = "/path/to/your/resume.pdf"; // fake path
    link.download = "your_resume_filename.pdf"; // fake path
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    // Handle if the user cancels the download
    console.log("Download canceled");
  }
};




const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Mao",
                1000,
                "SE Stundent",
                1000,
                "Web Developer",
                1000,
                "Dog Lover",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Unlimited passion. Always motivated. Continuous hardwork.
          </p>
          <div>
            <Link
              href="/contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-cyan-500 to-blue-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <a
              href="/public/assets/Mao_Tabuchi_Resume.pdf"
              download="Mao_Tabuchi_Resume.pdf" 
              onClick={handleDownload}        
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-gradient-to-br from-cyan-200 to-blue-300 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/amongus.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;