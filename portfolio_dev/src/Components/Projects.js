import React, { Component } from "react";
import { Element } from "react-scroll";
import { Parallax } from "react-parallax";

export default function Projects() {
  return (
    <div
      id="projects"
      className="grid text-center w-full h-screen bg-slate-300 text-slate-900 mb-20 justify-center p-3 font-[Branch] pt-10"
    >
      <div className="text-6xl tracking-widest mb-5">
        <h1>Projects</h1>
      </div>
      <div className="grid md:justify-center justify-center md:space-x-0 md:space-y-1  text-white backdrop-blur-md">
        <div className="flex z-20 md:space-x-3 space-x-2 justify-center">
        <div
          aria-details="card"
          class="relative flex md:w-[250px] w-[200px] hover:w-[400px] hover:md:w-[500px] transition-all duration-1000 ease-in-out md:h-[250px] h-[200px] overflow-hidden bg-slate-700 shadow-2xl font-[Branch] mb-2"
        >
          <div
            aria-details="image"
            class="relative min-w-xm  w-[200px] md:w-[250px] scale-50 h-full bg-transparent flex justify-center items-center z-10"
          >
            <h1 className="w-[200px] md:w-[250px] md:text-5xl text-4xl text-center text-white flex">
              Rakht-Spot
            </h1>
          </div>
          <div
            aria-details="details"
            class="bg-white text-slate-600 relative min-w-sm h-full flex md:p-5 p-2 flex-col justify-center transition delay-700 ease-in-out tracking-tighter"
          >
            <h1 class="text-xl font-extrabold tracking-tight text-slate-900 md:text-xl text-start">
              Blood Donation Application
            </h1>
            <p class="text-xs font-sans tracking-tighter text-justify md:text-sm">
              A simple Blood Donation Application built to bridge the gap between donors and recipient
            </p>
            <br />
            <p className="flex space-x-2 ">
              <span className="bg-slate-700 text-white rounded-full p-1 text-xs">
                #AndroidStudio
              </span>
              <span className="bg-slate-700 text-white rounded-full p-1 text-xs">
                #Firebase
              </span>
              <span className="bg-slate-700 text-white rounded-full p-1 text-xs">
                #Java
              </span>
            </p>
          </div>
        </div>
        <div
          aria-details="card"
          class="relative flex md:w-[250px] w-[200px] hover:w-[400px] hover:md:w-[500px] transition-all duration-1000 ease-in-out md:h-[250px] h-[200px] overflow-hidden bg-slate-700 shadow-2xl font-[Branch] mb-2"
        >
          <div
            aria-details="image"
            class="relative min-w-xm  w-[200px] md:w-[250px] scale-50 h-full bg-transparent flex justify-center items-center z-10"
          >
            <h1 className="w-[200px] md:w-[250px] md:text-5xl text-3xl text-center text-white flex ">
            Alisa, Voice Assistant

            </h1>
          </div>
          <div
            aria-details="details"
            class="bg-white text-slate-600 relative min-w-sm h-full flex md:p-5 p-2 flex-col justify-center transition delay-700 ease-in-out tracking-tighter"
          >
            <h1 class="text-xl font-extrabold tracking-tight text-slate-900 md:text-xl text-start">
              Personal Voice Assistant
            </h1>
            <p class="text-xs font-sans tracking-tighter text-justify md:text-sm">
              NLP based voice Assistant built to create a better productive life, built for programmers and students
            </p>
            <br />
            <p className="flex space-x-2 ">
              <span className="bg-slate-600 text-white rounded-full p-1 text-xs">
                #NLP
              </span>
              <span className="bg-slate-600 text-white rounded-full p-1 text-xs">
                #kivy
              </span>
              <span className="bg-slate-600 text-white rounded-full p-1 text-xs">
                #python
              </span>
            </p>
          </div>
        </div>
        </div>
        <div className="flex md:space-x-3 space-x-2 justify-center">      
        <div
          aria-details="card"
          class="relative flex md:w-[250px] w-[200px] hover:w-[400px] hover:md:w-[500px] transition-all duration-1000 ease-in-out md:h-[250px] h-[200px] overflow-hidden bg-slate-700 shadow-2xl font-[Branch] mb-2"
        >
          <div
            aria-details="image"
            class="relative min-w-xm  w-[200px] md:w-[250px] scale-50 h-full bg-transparent flex justify-center items-center z-10"
          >
            <h1 className="w-[200px] md:w-[250px] md:text-6xl text-4xl text-center text-white flex">
              100 coderpedia
            </h1>
          </div>
          <div
            aria-details="details"
            class="bg-white text-slate-600 relative min-w-sm h-full flex md:p-5 p-2 flex-col justify-center transition delay-700 ease-in-out tracking-tighter"
          >
            <h1 class="text-xl font-extrabold tracking-tight text-slate-900 md:text-2xl text-start">
              Code source articles Website
            </h1>
            <p class="text-xs font-sans tracking-tighter text-justify md:text-sm">
              A website built using django and react that extracts related sources from top CS textbooks and displays it on website (working project)
            </p>
            <br />
            <p className="flex space-x-2 ">
              <span className="bg-slate-600 text-white rounded-full p-1 text-xs">
                #Django
              </span>
              <span className="bg-slate-600 text-white rounded-full p-1 text-xs">
                #Python-scraping
              </span>
              <span className="bg-slate-600 text-white rounded-full p-1 text-xs">
                #React
              </span>
            </p>
          </div>
        </div>
        <div
          aria-details="card"
          class="relative flex md:w-[250px] w-[200px] hover:w-[400px] hover:md:w-[500px] transition-all duration-1000 ease-in-out md:h-[250px] h-[200px] overflow-hidden bg-slate-700 shadow-2xl font-[Branch] mb-2"
        >
          <div
            aria-details="image"
            class="relative min-w-xm  w-[200px] md:w-[250px] scale-50 h-full bg-transparent flex justify-center items-center z-10"
          >
            <h1 className="w-[200px] md:w-[250px] md:text-6xl text-4xl text-center text-white flex">
              Portfolio Website
            </h1>
          </div>
          <div
            aria-details="details"
            class="bg-white text-slate-600 relative min-w-sm h-full flex md:p-5 p-2 flex-col justify-center transition delay-700 ease-in-out tracking-tighter"
          >
            <h1 class="text-xl font-extrabold tracking-tight text-slate-900 md:text-xl text-start">
              A Portfolio website
            </h1>
            <p class="text-xs font-sans tracking-tighter text-justify md:text-sm">
              Simple portfolio website created using react and tailwind, hosted using firebase.
            </p>
            <br />
            <p className="flex space-x-2 ">
              <span className="bg-slate-600 text-white rounded-full p-1 text-xs">
                #Reactjs
              </span>
              <span className="bg-slate-600 text-white rounded-full p-1 text-xs">
                #tailwind
              </span>
              <span className="bg-slate-600 text-white rounded-full p-1 text-xs">
                #firebase
              </span>
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <h1 className="h-auto text-8xl text-red-600 tracking-widest font-[branch] w-1/4 bg-transparent text-center md:pt-72 p-3 ml-20">
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
                class="relative min-w-xm w-[300px] sm:w-[100] sm:h-[100] scale-50 h-full bg-transparent flex justify-center items-center"
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
                  </Parallax> */
}
