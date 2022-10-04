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
    { type: "HTML5/CSS", level: 80},
  ];
  const colors ={
    bar: '#708090',
    title:{
      text:'white',
      background: '#708090'
    }
  }
  return (
    <div
      id="skills"
      className="bg-transparent p-2 md:h-full md:mt-10 mb-10 "
    >
      <h1 className="md:text-8xl text-6xl font-[Branch] tracking-widest md:text-center text-center md:mb-10">
        Skills
      </h1>
      <div className="md:flex grid md:justify-between justify-center md:text-center p-3 text-slate-100 rounded-md space-x-2">
        <div className="justify-center text-center md:w-full md:h-auto h-auto p-5 bg-slate-900 rounded-lg">
          <h1 className="text-4xl md:text-4xl font-[Branch] ">Technologies</h1>
          <p className=" bg-transparent text-center tracking-tighter md:text-xl text-sm flex p-5">
            As a Proficient Engineer, I have explored quite a
            handful of Techs & Tools shown below
          </p>
          <div className="border-black border-spacing-3 m-2 bg-transparent px-10">
            <div className="text-4xl md:text-5xl justify-between flex">
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
          <div className=" m-2 bg-transparent px-10">
            <div className="flex text-4xl md:text-5xl justify-between">
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
          <div className="border-black border-spacing-3 m-2 bg-transparent px-10">
            <div className="flex text-4xl md:text-5xl justify-between ">
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
          <div className="border-black border-spacing-3 m-2 bg-transparent px-10">
            <div className="flex text-4xl md:text-5xl justify-between">
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
        <div className=" justify-center text-center h-auto md:w-full md:h-auto p-5 text-4xl bg-transparent mt-5 md:mt-0 bg-slate-900 rounded-lg">
          <h1 className=" md:text-4xl text-4xl tracking-tighter font-[Branch] md:mx-4 mx-10">Language Proficiency</h1>
          <p>

          </p>
          <div className="text-xl p-5">
          <SkillBar className='md:text-lg text-md' skills={skills} colors={colors} height={25} animationDelay={0} animationDuration={2000}/>
          </div>
        </div>
      </div>
    </div>
  );
}
