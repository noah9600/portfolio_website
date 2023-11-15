import React, { useEffect } from 'react';
import anime from 'animejs';

const AnimeLetter = () => {
  useEffect(() => {
    const textWrapper = document.querySelector('.ml6 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    anime.timeline({ loop: true })
      .add({
        targets: '.ml6 .letter',
        translateY: ["1.1em", 0],
        translateZ: 0,
        duration: 750,
        delay: (el, i) => 50 * i
      }).add({
        targets: '.ml6',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 600
      });
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <div className="ml6">
      <div className="letters">About Me
    </div>
    </div>
  );
};

export default AnimeLetter;
