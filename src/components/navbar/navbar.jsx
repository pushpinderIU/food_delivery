import React, { useState } from "react";
import logo from "../../assets/nav_bar/logo.png";
import { Link } from "react-router-dom";
import Login from "../login_page/login";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(true);

  {
    /*togglemenu for smaller screens that has hamburger menu */
  }
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  {
    /*closemenu for smaller screens that has hamburger menu */
  }
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-transparent p-4 flex justify-between items-center">
      {/*Homepage logo which redirects to the homepage */}
      <div className="text-white">
        <a href="#">
          <img
            src={logo}
            alt="Logo"
            className="mr-2 2xl:w-24 xl:w-24 lg:w-24 md: w-16 sm:w-15 cursor-pointer"
          />
        </a>
      </div>

      {/*cart and hamburger button for smaller screen */}
      <div className="lg:hidden md:hidden xl:hidden 2xl:hidden ">
        <div className="flex items-center justify-between w-24">
          <div className="block md:hidden lg:hidden xl:hidden 2xl:hidden">
            <button
              className="border border-white text-white font-semibold
                        text-xs p-2 rounded-xl justify-around"
            >
              Cart
            </button>
          </div>
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {/*hamburger menu and its closing functionality for smaller devices */}
      {isOpen && (
        <div className="flex justify-end items-end fixed inset-0 z-50">
          {/* Mobile menu */}
          <div
            className="fixed inset-y-0 right-0 bg-gradient-to-r from-[#ffb800]
                        via-[#ffa902] via-[#ffa303] via-[#ff9706] to-[#ff8809] 
                          w-full z-50 flex flex-col items-center p-8 "
          >
            {/* Cross button */}
            <button onClick={closeMenu} className="text-white self-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <a
              href="#"
              className={`text-white text-2xl uppercase font-semibold hover:text-gray-300 my-2 
                          ${isSelected == true ? "text-black" : ""} `}
            >
              Home
            </a>
            <a
              href="#"
              className="text-white text-2xl uppercase font-semibold hover:text-gray-300 my-2"
            >
              Shop
            </a>
            <a
              href="#"
              className="text-white text-2xl uppercase font-semibold hover:text-gray-300 my-2"
            >
              About
            </a>
            <a
              href="#"
              className="text-white text-2xl uppercase font-semibold hover:text-gray-300 my-2"
            >
              LogIn
            </a>
          </div>
        </div>
      )}
      {/*navbar menu to navigate different pages for larger screens */}
      <div
        className="hidden md:flex md:gap-4 lg:gap-6 lg:items-center
                  xl:flex xl:gap-8 2xl:flex 2xl:gap-10 
                  border border-white rounded-lg p-2"
      >
        <a
          href="#"
          className="text-white uppercase font-semibold lg:text-lg xl:text-lg 2xl:text-xl
                      hover:border-b-2 border-transparent hover:border-white transition duration-100"
        >
          Shop
        </a>
        <a
          href="#"
          className="text-white uppercase font-semibold lg:text-lg xl:text-lg 2xl:text-xl
                      hover:border-b-2 border-transparent hover:border-white transition duration-100"
        >
          About
        </a>
      </div>
      {/*cart button to navigate to cart for larger screens */}
      <div className="hidden md:flex lg:flex xl:flex 2xl:flex justify-between">
        <div className="flex space-x-4 ">
          <Link
            to="/login"
            className=" shadow-2xl border-white text-white font-semibold
                    hover:bg-white hover:text-black border-b-2 border-transparent
                      lg:rounded-2xl lg:p-3 lg:text-lg
                      sm:text-sm sm:p-2 sm:rounded-md md:text-md md:p-2 md:rounded-lg"
          >
            Login
          </Link>

          <Link
            className=" shadow-2xl border-white text-white font-semibold
                    hover:bg-white hover:text-black border-b-2 border-transparent
                      lg:rounded-2xl lg:p-3 lg:text-lg
                      sm:text-sm sm:p-2 sm:rounded-md md:text-md md:p-2 md:rounded-lg"
          >
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
