import { FaBars, FaTimes } from "react-icons/fa";
import { SocialBar } from "./";
import { useState } from "react";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [menuExpanded, setMenuExpanded] = useState(false);

  const toggleMenu = () => setMenuExpanded((prevState) => !prevState);

  return (
    <div
      id="navbar-wrapper"
      className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0A192F] text-gray-400"
    >
      <div id="logo-wrapper" className="h-full">
        <img
          id="am-logo"
          src={Logo}
          alt="Logo image"
          className="h-full p-[10px]"
        />
      </div>
      <div id="menu-wrapper" className="hidden md:flex">
        <ul className="hidden md:flex">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
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
          <li className="py-6">Home</li>
          <li className="py-6">About</li>
          <li className="py-6">Skills</li>
          <li className="py-6">Work</li>
          <li className="py-6">Contact</li>
        </ul>
      </div>
      <SocialBar />
    </div>
  );
};

export default Navbar;
