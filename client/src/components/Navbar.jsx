import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiHeart, CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="flex justify-between items-center p-4 bg-white">
      <span className="logo text-2xl md:text-3xl font-bold">Exclusive</span>

      {/* Hamburger Menu Button (visible on mobile) */}
      <div className="md:hidden">
        <button onClick={toggleMobileMenu} className="text-2xl">
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Menu Items (show on larger screens or when menu is open) */}
      <nav
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } absolute md:relative top-16 left-0 md:top-0 w-full md:w-auto bg-white md:bg-transparent z-10 md:flex md:items-center`}
      >
        <ul className="flex flex-col md:flex-row gap-4 md:gap-10 p-4 md:p-0">
          <li>
            <Link
              to="/home"
              className="hover:text-gray-400 hover:border-b-2 border-gray-400"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-gray-400 hover:border-b-2 border-gray-400"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="hover:text-gray-400 hover:border-b-2 border-gray-400"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-gray-400 hover:border-b-2 border-gray-400"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Icons Section */}
      <div className="hidden md:flex items-center space-x-4">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-2 border bg-[#F5F5F5] rounded-md text-black w-full md:w-auto"
          />
          <CiSearch className="text-xl hover:text-gray-400 cursor-pointer relative right-8 md:right-6" />
        </div>
        <CiHeart className="text-xl hover:text-gray-400 cursor-pointer" />
        <IoCartOutline className="text-xl hover:text-gray-400 cursor-pointer" />
      </div>
    </header>
  );
}

export default Navbar;
