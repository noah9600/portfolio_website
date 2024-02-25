import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import anime from "animejs";

const handleDownload = () => {
  const confirmed = window.confirm("Are you sure you want to download your resume?");

  if (confirmed) {
    const link = document.createElement("a");
    link.href = "/path/to/your/resume.pdf";
    link.download = "your_resume_filename.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    console.log("Download canceled");
  }
};

const HeroSection = () => {
  useEffect(() => {
    const textWrapper = document.querySelector(".ml6 .letters");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    anime.timeline({ loop: true })
      .add({
        targets: '.ml6 .letter',
        translateY: ["1.1em", 0],
        translateZ: 0,
        duration: 500,
        delay: (el, i) => 50 * i
      }).add({
        targets: '.ml6',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 400
      });
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <section className="">
      <div className="flex items-center justify-center mt-15 mb-15">
        <div className="col-span-8 place-self-center text-center">
          <h1 className="ml6 text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold m16">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-red-300 via-yellow-200 letters">
              Hello, I am Mao
            </span>
            <br />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Unlimited passion. Always motivated. Continuous hard work.
          </p>
          <div>
            
            <a
              href="/public/assets/Mao_Tabuchi_Resume.pdf"
              download="Mao_Tabuchi_Resume.pdf"
              onClick={handleDownload}
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-r from-blue-300 to-red-300 via-yellow-200 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
