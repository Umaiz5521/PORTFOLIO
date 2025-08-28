import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="flex items-center h-22 w-[94%] ml-[3%] bg-gray-800 rounded-2xl justify-between px-3 py-4 font-serif text-[23px] bg-black text-white fixed top-0 left-0 z-50">
      {/* Logo */}
      <h1 className="text-lg font-semibold font-serif bg-sky-950 px-2 py-2 rounded-4xl text-xl">Umaiz brand</h1>

      {/* Mobile Menu Button */}
      <button className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
        <img src={assets.menu_icon} alt="Menu" className="w-8 h-8 white-200 " />
      </button>

      {/* Navigation Links */}
      <ul
        className={`${
          isOpen ? "flex" : "hidden"
        } absolute md:static left-0 top-20 w-full md:w-auto h-[400px] md:h-auto md:flex bg-gray-800 md:bg-transparent flex-col md:flex-row items-center text-center transition-all duration-300 ease-in-out`}
      >
        {navItems.map((item, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.2 }}
            className={`cursor-pointer transition-colors duration-200 py-2 md:py-0 px-4 ${
              location.pathname === item.path
                ? "text-yellow-400"
                : "hover:text-yellow-400"
            }`}
            onClick={() => setIsOpen(false)}
          >
            <Link to={item.path}>{item.name}</Link>
          </motion.li>
        ))}

        {/* Hire Me Button (Mobile) */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-gradient-to-r from-teal-400 to-amber-500 px-4 py-2 rounded-lg text-black shadow-lg font-medium md:hidden mt-4"
          onClick={() => setIsOpen(false)}
        >
          Hire Me
        </motion.button>
      </ul>

      {/* Hire Me Button (Desktop) */}
       <Link to={"/contact"}  > <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-sky-950 px-4 py-1  rounded-4xl text-white shadow-lg font-medium hidden md:block"
      >
        Hire Me
      </motion.button>
      </Link>
    </nav>
  );
};

export default Navbar;
