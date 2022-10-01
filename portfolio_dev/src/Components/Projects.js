import React, {Component} from "react";
import { Element } from "react-scroll";
import { Parallax } from "react-parallax";


export default function Projects(){

    return (
      <div id="projects" className="w-full h-screen bg-transparent mb-10 flex justify-between p-3">
          <h1 className="h-auto text-8xl text-red-600 tracking-widest font-[branch] w-1/4 bg-transparent text-center pt-72 p-3">
            Projects
             </h1>
        <Parallax strength={100} blur={1}>

        <div className="grid backdrop-blur-sm h-auto p-2 justify-center pt-8 z-20">
          <div className="w-full justify-center flex space-x-5">
            <div
              aria-details="card"
              class="relative flex w-[300px] hover:w-[600px] transition-all duration-1000 ease-in-out h-[300px] overflow-hidden bg-red-600 shadow-2xl font-[Branch] mb-2"
              >
              <div
                aria-details="image"
                class="relative min-w-xm w-[300px] scale-50 h-full bg-transparent flex justify-center items-center z-10"
                >
                <img
                  class="h-[300px] max-w-xs transition duration-300 ease-out hover:-rotate-12 hover:-translate-x-5"
                  src=""
                  />
                <h1 className="w-[300px] text-6xl text-center text-white flex">
                  Rakht-Spot
                </h1>
              </div>
              <div
                aria-details="details"
                class="bg-white text-red-600 relative min-w-sm h-full flex p-5 flex-col justify-center transition delay-700 ease-in-out"
                >
                <h1 class="text-2xl font-extrabold tracking-tight text-red-900 sm:text-3xl">
                  Rakht-Spot
                </h1>
                <p class="text-md font-sans text-center tracking-tighter">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Placeat qui aliquid error.
                </p>
                <br />
                <p className="flex space-x-2">
                  <span className="bg-red-600 text-white rounded-full p-1 text-xs">
                    #AndroidStudio
                  </span>
                  <span className="bg-red-600 text-white rounded-full p-1 text-xs">
                    #Firebase
                  </span>
                  <span className="bg-red-600 text-white rounded-full p-1 text-xs">
                    #Java
                  </span>
                </p>
              </div>
            </div>
            <div
              aria-details="card"
              class="relative flex w-[300px] hover:w-[600px] transition-all duration-1000 ease-in-out h-[300px] overflow-hidden bg-red-600 shadow-2xl font-[Branch]"
              >
              <div
                aria-details="image"
                class="relative min-w-xm w-[300px] scale-50 h-full bg-transparent flex justify-center items-center"
                >
                <img
                  class="h-[300px] max-w-xs transition duration-300 ease-out hover:-rotate-12 hover:-translate-x-5"
                  src=""
                  />
                <h1 className="w-[300px] text-6xl text-center tracking-normal text-white flex">
                  Alisa Voice Assistant
                </h1>
              </div>
              <div
                aria-details="details"
                class="bg-white text-red-600 relative min-w-sm h-full flex p-5 flex-col justify-center transition delay-700 ease-in-out"
                >
                <h1 class="text-2xl font-extrabold tracking-tight text-red-900 sm:text-3xl">
                  Alisa Voice Assistant
                </h1>
                <p class="text-md font-sans text-center tracking-tighter ">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Placeat qui aliquid error.
                </p>
                <br />
                <p className="flex space-x-2">
                  <span className="bg-red-600 text-white rounded-full p-1 text-xs">
                    #Kivy
                  </span>
                  <span className="bg-red-600 text-white rounded-full p-1 text-xs">
                    #Python
                  </span>
                  <span className="bg-red-600 text-white rounded-full p-1 text-xs">
                    #NLP
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="justify-center flex space-x-5 w-full">
            <div
              aria-details="card"
              class="relative flex w-[300px] hover:w-[600px] transition-all duration-1000 ease-in-out h-[300px] overflow-hidden bg-red-600 shadow-2xl font-[Branch] mb-2"
              >
              <div
                aria-details="image"
                class="relative min-w-xm w-[300px] scale-50 h-full bg-transparent flex justify-end items-center"
                >
                <img
                  class="h-[300px] max-w-xs transition duration-300 ease-out hover:-rotate-12 hover:-translate-x-5"
                  src=""
                  />
                <h1 className="w-[300px] text-6xl text-center tracking-normal text-white flex">
                  Portfolio Website
                </h1>
              </div>
              <div
                aria-details="details"
                class="bg-white text-red-600 relative min-w-sm h-full flex p-5 flex-col justify-center transition delay-700 ease-in-out"
                >
                <h1 class="text-2xl font-extrabold tracking-tight text-red-900 sm:text-3xl">
                  Portfolio Website
                </h1>
                <p class="text-md font-sans text-center tracking-tighter">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Placeat qui aliquid error.
                </p>
                <br />
                <p className="flex space-x-2">
                  <span className="bg-red-600 text-white rounded-full p-1 text-xs">
                    #ReactJS
                  </span>
                  <span className="bg-red-600 text-white rounded-full p-1 text-xs">
                    #Tailwind
                  </span>
                </p>
              </div>
            </div>
            <div
              aria-details="card"
              class="relative flex w-[300px] hover:w-[600px] transition-all duration-1000 ease-in-out h-[300px] overflow-hidden bg-red-600 shadow-2xl font-[Branch]"
              >
              <div
                aria-details="image"
                class="relative min-w-xm w-[300px] scale-50 h-full bg-transparent flex justify-center items-center"
                >
                <img
                  class="h-[300px] max-w-xs transition duration-300 ease-out hover:-rotate-12 hover:-translate-x-5"
                  src=""
                  />
                <h1 className="w-[300px] text-6xl text-center tracking-normal text-white">
                  Al-Faniya{" "}
                  <span className="text-4xl font-thin italic">
                    Artists Workplace
                  </span>
                </h1>
              </div>
              <div
                aria-details="details"
                class="bg-white text-red-600 relative min-w-sm h-full flex p-5 flex-col justify-center transition delay-700 ease-in-out"
                >
                <h1 class="text-2xl font-extrabold tracking-tight text-red-900 sm:text-3xl">
                  Al-Faniya
                </h1>
                <p class="text-md font-sans text-center tracking-tighter">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Placeat qui aliquid error.
                </p>
                <br />
                <p className="flex space-x-2">
                  <span className="bg-red-600 text-white rounded-full p-1 text-xs">
                    #Spring
                  </span>
                  <span className="bg-red-600 text-white rounded-full p-1 text-xs">
                    #Java
                  </span>
                  <span className="bg-red-600 text-white rounded-full p-1 text-xs">
                    #ReactJS
                  </span>
                  <span className="bg-red-600 text-white rounded-full p-1 text-xs">
                    #Intellij
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
                  </Parallax>
      </div>
  );
}
