import React, { Component } from "react";
import CHAR from "../Assets/char.svg"
import { Parallax } from "react-parallax";
import { useEffect } from "react";
import { Switch, useLocation } from 'react-router-dom'

function about(){

    return (
      <div id="about" className="mb-20 bg-transparent">
          <Parallax bgImage={CHAR} strength={150}>
            <div className="jusitfy-center bg-skiner w-full md:h-auto font-[Branch] text-red-600 grid justify-center bg-transparent">
              <div className="w-full mt-16 text-8xl tracking-widest justify-center text-center bg-transparent">
                <h1>About</h1>
              </div>
              <div className="w-full mt-12 text-xl justify-center text-justify bg-transparent tracking-tighter p-10 m-5 mb-36   ">
                <p className="w-96">
                  I am an Aspiring Software Engineer from
                  Hyderabad, India. I have acquired my Bachelors Degree from
                  Global Institute of Engineering & Technology (Tier-3) and
                  selected Computer Science as my Major. As a Practicing Engineer,
                  I am vastly interested in emerging technologies. A Self-paced Programmer who is looking for challenges in programming career.
                  I am on a journey to expand my knowledge and to become valuable asset for the organization. I aim to become a better Engineer!.
                </p>
              </div>
            </div>
          </Parallax>
        </div>
  );
}
export default about;
