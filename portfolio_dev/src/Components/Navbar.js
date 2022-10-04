import React from "react";
import { Link } from "react-scroll";
function Navbar() {
  return (
    <>
      <div className="bg-slate-900 backdrop-blur-lg w-full h-12 sticky top-0 z-10 font-[Branch] transition ease-in-out hover:bg-slate-100 hover:text-slate-900 hover:text-2xl duration-100 ">
        <div className="justify-center md:justify-between flex">
          <div className="space-x-5 mt-2 pl-3 text-2xl hover:scale-105 transition ease-in-out hover:cursor-pointer duration-400 hidden md:block font-[youngr]">
            <h1 className="hover:cursor-pointer">Yahya</h1>
          </div>
          <div className=" text-xl m-2 pr-2">
            <nav
              id="nav"
              className="space-x-4 md:space-x-12 justify-center"
            >
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={-50}
                duration={1000}
                activeClass="active"
                className="nav-class transition ease-in-out hover:scale-110 cursor-pointer"
              >
                Home
              </Link>

              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-50}
                duration={1000}
                activeClass="active"
                className="nav-class transition ease-in-out hover:scale-110 cursor-pointer"
              >
                About
              </Link>

              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-10}
                duration={1000}
                activeClass="active"
                className="nav-class transition ease-in-out hover:scale-110 cursor-pointer"
              >
                Projects
              </Link>

              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-60}
                duration={1000}
                activeClass="active"
                className="nav-class transition ease-in-out hover:scale-110 cursor-pointer"
              >
                Skills
              </Link>

              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
                activeClass="active"
                className="nav-class transition ease-in-out hover:scale-110 cursor-pointer"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
