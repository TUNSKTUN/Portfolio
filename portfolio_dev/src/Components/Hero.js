import React from "react";
import Image from "../Assets/Anim.gif";
import { FaGithub } from "react-icons/fa";
import TextTransition, { presets } from "react-text-transition";
import { GrInstagram, GrLinkedin } from "react-icons/gr";
import {BsArrowRight} from 'react-icons/bs';
const Texts = ["a Programmer", "an Engineer", "an Artist"];
const Hero = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <div id="hero" className="Background w-full h-screen bg-transparent font-[Branch] text-red-600">
      <div className="Container bg-transparent md:flex justify-between p-10 rounded">
        <div className="left-container md:text-5xl text-3xl md:w-1/2 justify-center text-center md:mt-16 bg-transparent grid pt-20">
          <div>
          <h1>Greetings, My name is Yahya.</h1>
          </div>
          <div className="flex md:justify-start justify-center space-x-3 md:ml-28">
            <h3>
              I'm
              </h3>
              
              <TextTransition springConfig={presets.gentle}>
                {Texts[index % Texts.length]}
              </TextTransition>
          </div>
          <div className="justify-center space-x-10 text-skin-darkest pr-2 pl-2 font-bold rounded-md mt-0.5 md:flex pt-5">
              <h1 className="text-xl mt-2 flex">Socials<BsArrowRight className="text-xl mt-1 ml-2"/></h1>
            <button type="link" className="md:flex rounded-full">
              <span className="transition ease-in-out hover:text-pink-600 hover:scale-110 duration-200">
                <a href="https://www.instagram.com/solo_perfecto24/">
                  {<GrInstagram className="text-5xl" />}
                </a>
              </span>
            </button>
            <button type="link" className="md:flex rounded-full">
              <span className="transition ease-in-out hover:text-gray-900 hover:scale-110 duration-200">
                <a href="https://github.com/TUNSKTUN">
                  {<FaGithub className="text-5xl" />}
                </a>
              </span>
            </button>
            <button type="link" className="md:flex rounded-full">
              <span className="transition ease-in-out hover:text-cyan-700 hover:scale-110 duration-200">
                <a href="https://www.linkedin.com/in/yahya-khan-638654198/">
                  {<GrLinkedin className="text-5xl" />}
                </a>
              </span>
            </button>
          </div>
        </div>
        <div className="right-container w-100% sm:w-auto  bg-transparent justify-center">
          <img src={Image} alt="Me"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
