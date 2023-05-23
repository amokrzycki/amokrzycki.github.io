import { FaBars, FaTimes } from "react-icons/fa";
import { SocialBar } from "./";
import { useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menuExpanded, setMenuExpanded] = useState(false);

  const toggleMenu = () => setMenuExpanded((prevState) => !prevState);

  return (
    <div
      id="navbar-wrapper"
      className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0A192F] text-gray-400 z-10"
    >
      <div id="logo-wrapper" className="h-full">
        <Link to="home" smooth={true} duration={700}>
          <img
            id="am-logo"
            src={Logo}
            alt="Logo image"
            className="h-full p-[10px] cursor-pointer"
          />
        </Link>
      </div>
      <div id="menu-wrapper" className="hidden md:flex">
        <ul className="hidden md:flex">
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div
        onClick={toggleMenu}
        id="hambuger-menu-wrapper"
        className="md:hidden z-10 cursor-pointer"
      >
        {menuExpanded ? <FaTimes /> : <FaBars />}
      </div>
      <div
        id="mobile-menu-wrapper"
        className={
          menuExpanded
            ? "absolute top-0 left-0 w-full h-screen bg-[#0A192F] flex flex-col justify-center items-center text-center text-5xl"
            : "hidden"
        }
      >
        <ul>
          <li className="py-6">
            <Link onClick={toggleMenu} to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="py-6">
            <Link onClick={toggleMenu} to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="py-6">
            <Link onClick={toggleMenu} to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className="py-6">
            <Link onClick={toggleMenu} to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className="py-6">
            <Link
              onClick={toggleMenu}
              to="contact"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <SocialBar />
    </div>
  );
};

export default Navbar;
