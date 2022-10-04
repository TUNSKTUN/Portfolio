import React from "react";
import Image from "../Assets/Anim.gif";
import { FaGithub } from "react-icons/fa";
import TextTransition, { presets } from "react-text-transition";
import { GrInstagram, GrLinkedin } from "react-icons/gr";
const Texts = ["a Programmer", "an Engineer", "an Artist"];
const Hero = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <div id="hero" className="Background w-full h-screen bg-transparent font-[Branch] md:mt-20">
      <div className="Container bg-transparent md:flex md:justify-between md:p-10 p-2  rounded justify-between">
        <div className="left-container md:text-5xl text-4xl md:w-1/2 w-auto h-1/2 md:h-auto justify-center text-center md:mt-16 bg-transparent grid p-10 pb-0">
          <h1>Greetings, My name is Yahya.</h1>
          <div className="flex md:justify-start justify-center space-x-3 md:ml-28">
            <h3>
              I'm
              </h3>
              
              <TextTransition springConfig={presets.wobbly}>
                {Texts[index % Texts.length]}
              </TextTransition>
          </div>
          <div className="justify-center space-x-10 pr-2 pl-2 font-bold rounded-md mt-0.5 pt-5 md:mb-20 mb-5 md:flex hidden ">
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
        <div className="container md:max-w-lg bg-transparent flex justify-center text-center">
          <img src={Image} alt="Me" className="md:max-w-lg max-w-xs bg-transparent"/>
        </div>
        <div className="justify-center text-center space-x-10 px-5 font-bold mt-0.5 flex  md:mb-20 text-center md:hidden bg-slate-500 p-3 w-60 items-center rounded-full">
            <button type="link" className="md:flex rounded-full">
              <span className="transition ease-in-out hover:text-pink-600 hover:scale-110 duration-200">
                <a href="https://www.instagram.com/solo_perfecto24/">
                  {<GrInstagram className="text-4xl" />}
                </a>
              </span>
            </button>
            <button type="link" className="md:flex rounded-full">
              <span className="transition ease-in-out hover:text-gray-900 hover:scale-110 duration-200">
                <a href="https://github.com/TUNSKTUN">
                  {<FaGithub className="text-4xl" />}
                </a>
              </span>
            </button>
            <button type="link" className="md:flex rounded-full">
              <span className="transition ease-in-out hover:text-cyan-700 hover:scale-110 duration-200">
                <a href="https://www.linkedin.com/in/yahya-khan-638654198/">
                  {<GrLinkedin className="text-4xl" />}
                </a>
              </span>
            </button>
          </div>
      </div>
    </div>
  );
};

export default Hero;
