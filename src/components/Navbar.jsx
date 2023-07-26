import React, { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const showMenuHandler = () => setShowMenu((prev) => !prev);
  return (
    <nav className="w-full flex justify-between items-center py-6 navbar">
      <img
        src={logo}
        alt="hoobank"
        className="w-[124px] h-[32px] cursor-pointer"
      />

      {/* Nav links for large screens */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal text-[16px] cursor-pointer text-white ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* Navbar for Mobile screen */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={showMenu ? close : menu}
          alt="humburger button"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={showMenuHandler}
        />

        {/* div for showing the links */}
        <div
          className={`${
            showMenu ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal text-[16px] cursor-pointer text-white hover:text-blue-400 ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-4"
                }`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
