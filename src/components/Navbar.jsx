// src/components/Navbar.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaChevronDown } from 'react-icons/fa';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <nav className="bg-customTerracotta text-white p-4 w-full">
        <div className="container mx-auto flex items-center justify-between flex-wrap">
          <div className="flex items-center space-x-4">
            <div className="relative ml-4 sm:ml-16">
              <button
                onClick={toggleDropdown}
                className="flex items-center text-lg font-semibold focus:outline-none"
              >
                COUNTRY
                <FaChevronDown
                  className={`ml-2 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                  size={16}
                />
              </button>
              {isDropdownOpen && (
                <ul className="absolute top-full mt-2 bg-white text-black rounded shadow-lg w-48">
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-200">USA</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-200">Canada</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-200">UK</a>
                  </li>
                </ul>
              )}
            </div>
            <div className="text-sm">
              FREE DELIVERY
            </div>
          </div>

          <div className="mt-4 sm:mt-0">
            <ul className="flex space-x-4 justify-center">
              <li>
                <a href="#" className="hover:text-gray-300">
                  <FaInstagram size={24} />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  <FaFacebook size={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="bg-gray-100 p-4">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row justify-center items-center mb-4 sm:space-x-56 space-y-4 sm:space-y-0">
            <div>
              <h1 className="text-2xl sm:text-3xl font-sans text-gray-700 text-center sm:text-left">Contact Us</h1>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-700 text-center sm:text-left">
                <img src={logo} alt="Logo" />
              </h1>
            </div>
            <div className="space-x-2">
              <Link to="/login">
                <span className="text-gray-700 hover:text-blue-500 cursor-pointer text-xl sm:text-2xl">LOGIN</span>
              </Link>
              <span className="text-gray-700 hover:text-blue-500 cursor-pointer text-xl sm:text-2xl">REGISTER</span>
            </div>
          </div>

          {/* Navigation links */}
          <div className='w-full'>
            <ul className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8 border-b border-t border-black py-2 w-full shadow-lg">
              <li>
                <Link to="/" className="text-gray-700 hover:text-blue-500 text-lg text-center">Home</Link>
              </li>
              <li>
                <Link to="/clothes" className="text-gray-700 hover:text-blue-500 text-lg text-center">Clothes</Link>
              </li>
              <li>
                <Link to="/accessories" className="text-gray-700 hover:text-blue-500 text-lg text-center">Accessories</Link>
              </li>
              <li>
                <Link to="/appliances" className="text-gray-700 hover:text-blue-500 text-lg text-center">Appliances</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-700 hover:text-blue-500 text-lg text-center">Loja Products</Link>
              </li>
              <li>
                <Link to="/aboutus" className="text-gray-700 hover:text-blue-500 text-lg text-center">About Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;
