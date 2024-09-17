import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import logo1 from '../assets/images/logo1.png';
const Footer = () => {
  return (
    <footer className='bg-customTerracotta text-white py-10'>
      <div className='max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8'>
        {/* left side section*/}
        <div className="col-span-1">
          <h1 className='text-3xl font-bold mb-4'>
            <img src={logo1} className='rounded-xl' />
          </h1>
          {/* Menu  */}
          <div className="">
            <h2 className='text-xl font-semibold mb-2'>Menu</h2>
            <hr className='border-white mb-4' />
            <ul className='flex flex-wrap md:flex-row space-y-2 md:space-x-20'>
              <div className="space-y-2 mt-2">
                <li>
                  <a href="/" className='hover:text-gray-200'>HOME</a>
                </li>
                <li>
                  <a href="/about" className='hover:text-gray-200'>ABOUT</a>
                </li>
                <li>
                  <a href="/contact" className='hover:text-gray-200'>CONTACT</a>
                </li>
              </div>
              <div className="space-y-2 mt-4">
                <li>
                  <a href="/accessories" className='hover:text-gray-200'>ACCESSORIES</a>
                </li>
                <li>
                  <a href="/appliances" className='hover:text-gray-200'>APPLIANCES</a>
                </li>
                <li>
                  <a href="/products" className='hover:text-gray-200'>LOJA PRODUCTS </a>
                </li>
              </div>
            </ul>
          </div>
        </div>

        <div className="container mx-auto flex justify-between items-start">
          {/* Left-side sections can go here if needed */}

          {/* Right-side section */}
          <div className="flex flex-col items-end space-y-4 ml-96">
            {/* Social Media Icons */}
            <div className="flex space-x-4 mb-4 ml-96">
              <Link to="/" className="hover:text-gray-200">
                <FaInstagram size={24} />
              </Link>
              <Link to="/" className="hover:text-gray-200">
                <FaFacebook size={24} />
              </Link>
              <Link to="/" className="hover:text-gray-200">
                <FaLinkedin size={24} />
              </Link>
            </div>

            {/* Description and Buttons Section */}
            <div className="text-left bg-customTerracotta bg-opacity-10 border-0 shadow-xl outline-none rounded-xl p-4">
              <h1 className="text-2xl font-semibold mb-2">Lorem ipsum sit ametero irseo</h1>
              <p className="text-gray-200 mb-4 w-full max-w-96 mt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla integer.
              </p>
              <div className="space-x-8 mt-6">
                <button className="px-4 py-4 bg-white text-black rounded-3xl  hover:bg-gray-300 text-base font-medium">lorem ipsum</button>
                <button className="px-4 py-4 bg-white text-black rounded-3xl  hover:bg-gray-300 text-base font-medium">lorem ipsum</button>
              </div>
            </div>


          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
