import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const NavBar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <h1 className="w-full text-3xl font-bold text-[#0056a0]">
        Greg O'Donnell
      </h1>
      <ul className="hidden md:flex text-2xl">
        <li className="p-4">
          <Link
            to="/"
            className="border-b-2 border-transparent hover:border-current transition-all duration-200 ease-in-out"
          >
            Home
          </Link>
        </li>

        <li className="p-4">
          <Link
            to="/about"
            className="border-b-2 border-transparent hover:border-current transition-all duration-200 ease-in-out"
          >
            About
          </Link>
        </li>

        <li className="p-4">
          <Link
            to="/landing"
            className="border-b-2 border-transparent hover:border-current transition-all duration-200 ease-in-out"
          >
            Course
          </Link>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={32} /> : <AiOutlineMenu size={32} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#001F3F] text-white ease-in-out duration-500"
            : "fixed left-[-100%] top-0 w-[60%] h-full ease-in duration-500"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#ffffff] m-4">
          Greg O'Donnell
        </h1>
        <ul className=" uppercase p-4">
          <li className="p-4 border-b border-gray-600 ">
            <Link to="/">Home</Link>
          </li>

          <li className="p-4 border-b border-gray-600">
            <Link to="/about">About</Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to="/landing">Course</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
