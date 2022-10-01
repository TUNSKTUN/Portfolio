import React, { Component } from "react";
import NavLink, { Link } from "react-scroll";
import App from "../App";
function Navbar() {
  return (
    <>
      <div className="bg-transparent backdrop-blur-lg text-red-600 w-full h-12 sticky top-0 z-10 font-[Branch] transition ease-in-out hover:bg-red-600 hover:text-white hover:text-2xl duration-200">
        <div className="md:flex justify-between">
          <div className="flex space-x-5 mt-2 pl-3 text-3xl font-[Branch]">
            <h1>YK.</h1>
          </div>
          <div className="md:flex justify-between border-none">
            <div className="flex space-x-16 text-xl m-2 pr-2">
              <nav className="justify-between space-x-10 flex">
                <Link
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={1000}
                  activeClass="active"
                  className="transition ease-in-out hover:scale-110 cursor-pointer"
                >
                  Home
                </Link>

                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={1000}
                  className="transition ease-in-out hover:scale-110 cursor-pointer"
                >
                  About
                </Link>

                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-30}
                  duration={1000}
                  className="transition ease-in-out hover:scale-110 cursor-pointer"
                >
                  Projects
                </Link>

                <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={1000}
                  className="transition ease-in-out hover:scale-110 cursor-pointer"
                >
                  Skills
                </Link>

                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={1000}
                  className="transition ease-in-out hover:scale-110 cursor-pointer"
                >
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
