import React, {Fragment, useEffect, useState} from "react";
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import About from "./Components/about"
import Projects from "./Components/Projects"
import Skills from "./Components/skills"
import Contact from './Components/Contact'

function App(){
    return(
      <div className=" bg-slate-800 text-white">
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Skills/>
     <Contact/>
      </div>
       
   
    );
}

export default App;