import React from "react";
import SkillBar from 'react-skillbars'
import { Parallax } from "react-parallax";
import {
  SiElectron,
  SiFirebase,
  SiAndroidstudio,
  SiJava,
  SiDjango,
  SiPython,
  SiPycharm,
  SiMysql,
  SiCisco,
  SiKalilinux,
  SiWireshark,
  SiUbuntu,
  SiVirtualbox,
  SiSpring,
  SiFigma,
  SiAdobephotoshop,
  SiVisualstudio,
  SiReact,
  SiGradle,
  SiApachemaven,
  SiPypi,
  SiAnaconda,
  SiJupyter,
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
} from "react-icons/si";

export default function skills() {
  const skills = [
    { type: "Javascript", level: 70 },
    { type: "Java", level: 87 },
    { type: "C++", level: 82 },
    { type: "Python", level: 70 },
    { type: "React", level: 50 },
    { type: "HTML5", level: 80},
    { type: "CSS", level: 68 },
    { type: "JQuery", level: 65 },
    { type: "Linux Scripting", level: 65 },
  ];
  const colors ={
    bar: '#E64848',
    title:{
      text:'white',
      background: '#E64848'
    }
  }
  return (
    <div
      id="skills"
      className="bg-transparent text-red-600 p-2 mt-20 h-full p-5 "
    >
      <h1 className="text-8xl font-[Branch] tracking-widest text-center">
        Skills
      </h1>
      <div className="flex justify-between text-start p-3">
        <div className="justify-center text-center text-3xl w-1/2 bg-transparent backdrop-blur-md">
          <h1 className="text-4xl font-[Branch]">Technologies</h1>
          <p className=" bg-transparent text-center tracking-tighter text-xl flex p-5">
            As a Proficient Engineer, I have explored and Understood quite a
            handful of Techs & Tools mentioned below
          </p>
          <div className="border-black border-spacing-3 m-2 bg-transparent p-3">
            <div className="text-6xl justify-between flex">
              <span className="transition ease-in-out hover:scale-110 duration-500 text-cyan-600">
                <SiReact />
              </span>
              <span className="transition ease-in-out hover:scale-110 duration-500 text-blue-800">
                <SiElectron />
              </span>
              <span className="transition ease-in-out hover:scale-110 duration-500 text-amber-900">
                <SiExpress />
              </span>
              <span className="transition ease-in-out hover:scale-110 duration-500 text-green-600">
                <SiSpring />
              </span>
              <span className="transition ease-in-out hover:scale-110 duration-500 text-blue-900">
                <SiTailwindcss />
              </span>
              <span className="transition ease-in-out hover:scale-110 duration-500 text-purple-500">
                <SiBootstrap />
              </span>
              <span className="transition ease-in-out hover:scale-110 duration-500 text-blue-500">
                <SiVisualstudio />
              </span>
            </div>
          </div>
          <div className="border-black border-spacing-3 m-2 bg-transparent p-3">
            <div className="flex text-6xl justify-between">
              <span className="transition ease-in-out hover:scale-110 duration-500 text-green-800">
                <SiAndroidstudio />
              </span>
              <span className="transition ease-in-out hover:scale-110 duration-500 text-orange-500">
                <SiFirebase />
              </span>
              <span className="transition ease-in-out hover:scale-110 duration-500 ">
                <SiJava />
              </span>
              <span className="transition ease-in-out hover:scale-110 duration-500 text-green-400">
                <SiGradle />
              </span>
              <span className="transition ease-in-out hover:scale-110 duration-500 text-pink-400 bg-white rounded-full">
                <SiApachemaven />
              </span>
              <span className="transition ease-in-out hover:scale-110 duration-500 text-cyan-900">
                <SiMysql />
              </span>
            </div>
          </div>
          <div className="border-black border-spacing-3 m-2 bg-transparent p-3">
            <div className="flex text-6xl justify-between space-x-4">
              <span className="transition ease-in-out hover:scale-110 duration-500 text-gray-700">
                <SiPycharm />
              </span>
              <span className="transition ease-in-out hover:scale-110 duration-500 text-blue-600">
                <SiPython />
              </span>
              <span className="transition ease-in-out hover:scale-110 duration-500 text-green-900">
                <SiDjango />
              </span>
              <span className="transition ease-in-out hover:scale-110 duration-500 text-blue-700">
                <SiPypi />
              </span>
              <span className="transition ease-in-out hover:scale-110 duration-500 text-green-500">
                <SiAnaconda />
              </span>
              <span className="transition ease-in-out hover:scale-110 duration-500 text-orange-400">
                <SiJupyter />
              </span>
            </div>
          </div>
          <div className="border-black border-spacing-3 m-2 bg-transparent p-3">
            <div className="flex text-6xl justify-between space-x-4">
              <span className="transition ease-in-out hover:scale-110 duration-500 text-black">
                <SiKalilinux />
              </span>
              <span className="transition ease-in-out hover:scale-110 duration-500 text-orange-600">
                <SiUbuntu />
              </span>
              <span className="transition ease-in-out hover:scale-110 duration-500 text-cyan-800">
                <SiCisco />
              </span>
              <span className="transition ease-in-out hover:scale-110 duration-500 text-black">
                <SiFigma />
              </span>
              <span className="transition ease-in-out hover:scale-110 duration-500 text-blue-800">
                <SiAdobephotoshop />
              </span>
              <span className="transition ease-in-out hover:scale-110 duration-500  text-blue-900">
                <SiVirtualbox />
              </span>
              <span className="transition ease-in-out hover:scale-110 duration-500  text-blue-900">
                <SiWireshark />
              </span>
            </div>
          </div>
        </div>
        <div className=" justify-center text-center w-1/2 text-4xl bg-transparent backdrop-blur-md">
          <h1 className=" text-4xl tracking-tighter font-[Branch]">Language Proficiency</h1>
          <p>

          </p>
          <div className="m-5 text-xl">
          <SkillBar className='text-lg' skills={skills} colors={colors} height={35} animationDelay={0} animationDuration={2000}/>
          </div>
        </div>
      </div>
    </div>
  );
}
