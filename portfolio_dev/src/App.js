import React, {Fragment, useEffect, useState} from "react";
import Test from "./Components/test"
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import About from "./Components/about"
import Projects from "./Components/Projects"
import Skills from "./Components/skills"
import Splash from "./Components/splash"
import {Route} from "react-router-dom"

function App(){
    return(
      <Fragment>
       {/* <Splash/> */}
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Skills/>
     </Fragment> 
   
    );
}

export default App;