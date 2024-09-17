import React from 'react'
import appliance1 from '../assets/images/a1.png';
import appliance2 from '../assets/images/a2.png';
import appliance3 from '../assets/images/a3.png';
import appliance4 from '../assets/images/a4.png';
import appliance5 from '../assets/images/a5.png';
import appliance6 from '../assets/images/a6.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import sale from '../assets/images/sale.png';
import appliance7 from '../assets/images/b1.png';
import appliance8 from '../assets/images/b2.png';
import appliance9 from '../assets/images/b3.png';

const Appliances = () => {
  return (
    <>
      <section className="grid grid-cols-3 gap-8 p-8">
        <div className="text-center max-w-xs md:max-w-sm lg:max-w-md mx-auto scale-90 md:scale-95 lg:scale-100">
          <img src={appliance1} alt="T-shirt" className="w-full h-auto object-cover rounded-lg" />
          <h1 className="mt-4 text-lg font-normal text-start">T-SHIRT</h1>
          <span className="flex justify-between items-center mt-0">
            <h1 className="text-xl font-semibold text-customTerracotta">$99</h1>
            <button className="bg-transparent text-black px-6 py-2 rounded-lg hover:bg-opacity-90 transition duration-300 border-2 border-black">
              ADD TO CART
              <FontAwesomeIcon icon={faShoppingCart} className="text-xl" />
            </button>
          </span>
        </div>


        <div className="text-center max-w-xs md:max-w-sm lg:max-w-md mx-auto scale-90 md:scale-95 lg:scale-100">
          <img src={appliance2} alt="T-shirt" className="w-full h-auto object-cover rounded-lg" />
          <h1 className="mt-4 text-lg font-normal text-start">T-SHIRT</h1>
          <span className="flex justify-between items-center mt-0">
            <h1 className="text-xl font-semibold text-customTerracotta">$99</h1>
            <button className="bg-transparent text-black px-6 py-2 rounded-lg hover:bg-opacity-90 transition duration-300 border-2 border-black">
              ADD TO CART
              <FontAwesomeIcon icon={faShoppingCart} className="text-xl" />
            </button>
          </span>
        </div>


        <div className="text-center max-w-xs md:max-w-sm lg:max-w-md mx-auto scale-90 md:scale-95 lg:scale-100">
          <img src={appliance3} alt="T-shirt" className="w-full h-auto object-cover rounded-lg" />
          <h1 className="mt-4 text-lg font-normal text-start">T-SHIRT</h1>
          <span className="flex justify-between items-center mt-0">
            <h1 className="text-xl font-semibold text-customTerracotta">$99</h1>
            <button className="bg-transparent text-black px-6 py-2 rounded-lg hover:bg-opacity-90 transition duration-300 border-2 border-black">
              ADD TO CART
              <FontAwesomeIcon icon={faShoppingCart} className="text-xl" />
            </button>
          </span>
        </div>


        <div className="text-center max-w-xs md:max-w-sm lg:max-w-md mx-auto scale-90 md:scale-95 lg:scale-100">
          <img src={appliance4} alt="T-shirt" className="w-full h-auto object-cover rounded-lg" />
          <h1 className="mt-4 text-lg font-normal text-start">T-SHIRT</h1>
          <span className="flex justify-between items-center mt-0">
            <h1 className="text-xl font-semibold text-customTerracotta">$99</h1>
            <button className="bg-transparent text-black px-6 py-2 rounded-lg hover:bg-opacity-90 transition duration-300 border-2 border-black">
              ADD TO CART
              <FontAwesomeIcon icon={faShoppingCart} className="text-xl" />
            </button>
          </span>
        </div>


        <div className="text-center max-w-xs md:max-w-sm lg:max-w-md mx-auto scale-90 md:scale-95 lg:scale-100">
          <img src={appliance5} alt="T-shirt" className="w-full h-auto object-cover rounded-lg" />
          <h1 className="mt-4 text-lg font-normal text-start">T-SHIRT</h1>
          <span className="flex justify-between items-center mt-0">
            <h1 className="text-xl font-semibold text-customTerracotta">$99</h1>
            <button className="bg-transparent text-black px-6 py-2 rounded-lg hover:bg-opacity-90 transition duration-300 border-2 border-black">
              ADD TO CART
              <FontAwesomeIcon icon={faShoppingCart} className="text-xl" />
            </button>
          </span>
        </div>


        <div className="text-center max-w-xs md:max-w-sm lg:max-w-md mx-auto scale-90 md:scale-95 lg:scale-100">
          <img src={appliance6} alt="T-shirt" className="w-full h-auto object-cover rounded-lg" />
          <h1 className="mt-4 text-lg font-normal text-start">T-SHIRT</h1>
          <span className="flex justify-between items-center mt-0">
            <h1 className="text-xl font-semibold text-customTerracotta">$99</h1>
            <button className="bg-transparent text-black px-6 py-2 rounded-lg hover:bg-opacity-90 transition duration-300 border-2 border-black">
              ADD TO CART
              <FontAwesomeIcon icon={faShoppingCart} className="text-xl" />
            </button>
          </span>
        </div>



      </section>
      <div className='flex justify-center items-center mb-8'>
        <button className='bg-customTerracotta px-8 py-3 rounded-xl'>
          SHOP MORE
        </button>
      </div>

      {/* sales */}
      <section className='flex justify-center items-center min-h-screen'>
        <div className='flex justify-center'>
          <img src={sale} alt="" />
        </div>
      </section>

      {/* last sec */}
      
      <section className="flex p-8 space-x-8  items-center justify-center">
        <div className="relative">
          <img src={appliance7} alt="Women's Clothes" className="w-full h-auto object-cover rounded-lg" />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 text-white ">
            <h1 className="text-xl font-bold mb-3">HOME APPLIANCES</h1>
            <button className="bg-customTerracotta px-4 py-2 rounded-lg hover:bg-opacity-90 transition duration-300">
              LEARN MORE
            </button>
          </div>
        </div>

        <div className="relative">
          <img src={appliance8} alt="Men's Clothes" className="w-full h-auto object-cover rounded-lg" />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 text-white">
            <h1 className="text-xl font-bold mb-3">OFFICE APPLIANCES </h1>
            <button className="bg-customTerracotta px-4 py-2 rounded-lg hover:bg-opacity-90 transition duration-300">
              LEARN MORE
            </button>
          </div>
        </div>

        <div className="relative">
          <img src={appliance9} alt="Accessories" className="w-full h-auto object-cover rounded-lg" />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 text-white">
            <h1 className="text-xl font-bold mb-3">SMART PHONES </h1>
            <button className="bg-customTerracotta px-4 py-2 rounded-lg hover:bg-opacity-90 transition duration-300">
              LEARN MORE
            </button>
          </div>
        </div>
      </section>

    </>
  )
}

export default Appliances