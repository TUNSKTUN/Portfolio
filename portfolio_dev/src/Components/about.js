import React, { Component } from "react";
import CHAR from "../Assets/char.svg"
import { Parallax } from "react-parallax";
import { useEffect } from "react";
import { Switch, useLocation } from 'react-router-dom'

function about(){

    return (
         
      <div id="about" className=" bg-transparent h-screen md:my-8 ">
            <div className="jusitfy-center w-full md:h-auto font-[Branch] text-white grid justify-center bg-transparent">
              <div className="w-full md:mt-16 md:text-8xl text-6xl tracking-widest justify-center text-center bg-transparent pt-20 md:p-3">
                <h1>About</h1>
              </div>
              <div className="w-full mt-10 md:text-xl text-lg justify-center text-justify bg-transparent tracking-tighter">
                <p className="md:w-96 w-80 justify-center ">
                  I am an Aspiring Software Engineer from
                  Hyderabad, India. I have acquired my Bachelors Degree from
                  Global Institute of Engineering & Technology (Tier-3) and
                  selected Computer Science as my Major. As a Practicing Engineer,
                  I am vastly interested in emerging technologies. A Self-paced Programmer who is looking for challenges in programming career.
                  I am on a journey to expand my knowledge and to become valuable asset for the organization. I aim to become a better Engineer!.
                </p>
              </div>
            </div>
        </div>
         
  );
}
export default about;
