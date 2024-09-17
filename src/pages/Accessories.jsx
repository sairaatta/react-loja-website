import React from 'react'
import cloth5 from '../assets/images/cloth5.png';
import cloth6 from '../assets/images/cloth6.png';
import cloth7 from '../assets/images/cloth7.png';
import cloth8 from '../assets/images/cloth8.png';
import cloth9 from '../assets/images/cloth9.png';
import cloth10 from '../assets/images/cloth10.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import fashion from '../assets/images/fashion.png'
import cloth2 from '../assets/images/cloth2.png';
import cloth3 from '../assets/images/cloth3.png';
import cloth4 from '../assets/images/cloth4.png';
const Products = () => {
  return (
    <>
      {/* cart products  */}
      <section className="grid grid-cols-3 gap-8 p-8">
        <div className="text-center">
          <img src={cloth5} alt="T-shirt" className="w-full h-auto object-cover rounded-lg" />
          <h1 className="mt-4 text-lg font-normal text-start">T-SHIRT</h1>
          <span className="flex justify-between items-center mt-0">
            <h1 className="text-xl font-semibold text-customTerracotta">$99</h1>
            <button className=" bg-transparent text-black px-6 py-2 rounded-lg hover:bg-opacity-90 transition duration-300 border-2 border-black ">
              ADD TO CART
              <FontAwesomeIcon icon={faShoppingCart} className="text-xl " />
            </button>
          </span>
        </div>

        <div className="text-center">
          <img src={cloth6} alt="T-shirt" className="w-full h-auto object-cover rounded-lg" />
          <h1 className="mt-4 text-lg font-normal text-start">T-SHIRT</h1>
          <span className="flex justify-between items-center mt-0">
            <h1 className="text-xl font-semibold text-customTerracotta">$99</h1>
            <button className="bg-transparent text-black px-6 py-2 rounded-lg hover:bg-opacity-90 transition duration-300 border-2 border-black">
              ADD TO CART
              <FontAwesomeIcon icon={faShoppingCart} className="text-xl " />

            </button>
          </span>
        </div>

        <div className="text-center">
          <img src={cloth7} alt="T-shirt" className="w-full h-auto object-cover rounded-lg" />
          <h1 className="mt-4 text-lg font-normal text-start">T-SHIRT</h1>
          <span className="flex justify-between items-center mt-0">
            <h1 className="text-xl font-semibold text-customTerracotta">$99</h1>
            <button className="bg-transparent text-black px-6 py-2 rounded-lg hover:bg-opacity-90 transition duration-300 border-2 border-black">
              ADD TO CART
              <FontAwesomeIcon icon={faShoppingCart} className="text-xl " />

            </button>
          </span>
        </div>

        <div className="text-center">
          <img src={cloth8} alt="T-shirt" className="w-full h-auto object-cover rounded-lg" />
          <h1 className="mt-4 text-lg font-normal text-start">T-SHIRT</h1>
          <span className="flex justify-between items-center mt-0">
            <h1 className="text-xl font-semibold text-customTerracotta">$99</h1>
            <button className="bg-transparent text-black px-6 py-2 rounded-lg hover:bg-opacity-90 transition duration-300 border-2 border-black">
              ADD TO CART
              <FontAwesomeIcon icon={faShoppingCart} className="text-xl " />

            </button>
          </span>
        </div>

        <div className="text-center">
          <img src={cloth9} alt="T-shirt" className="w-full h-auto object-cover rounded-lg" />
          <h1 className="mt-4 text-lg font-normal text-start">T-SHIRT</h1>
          <span className="flex justify-between items-center mt-0">
            <h1 className="text-xl font-semibold text-customTerracotta">$99</h1>
            <button className="bg-transparent text-black px-6 py-2 rounded-lg hover:bg-opacity-90 transition duration-300 border-2 border-black">
              ADD TO CART
              <FontAwesomeIcon icon={faShoppingCart} className="text-xl " />

            </button>
          </span>
        </div>

        <div className="text-center">
          <img src={cloth10} alt="T-shirt" className="w-full h-auto object-cover rounded-lg" />
          <h1 className="mt-4 text-lg font-normal text-start">T-SHIRT</h1>
          <span className="flex justify-between items-center mt-0">
            <h1 className="text-xl font-semibold text-customTerracotta">$99</h1>
            <button className="bg-transparent text-black px-6 py-2 rounded-lg hover:bg-opacity-90 transition duration-300 border-2 border-black">
              ADD TO CART
              <FontAwesomeIcon icon={faShoppingCart} className="text-xl " />

            </button>
          </span>
        </div>


      </section>
      <div className='flex justify-center items-center mb-8'>
        <button className='bg-customTerracotta px-8 py-3 rounded-xl'>
          SHOP MORE
        </button>
      </div>

      {/* fashion sale  */}
      <section className="flex justify-center items-center min-h-screen">
        <div className='flex justify-center'>
          <img src={fashion} alt="" />
        </div>
      </section>

      {/* last section */}

      <section className="flex p-8 space-x-8">
        <div className="relative">
          <img src={cloth2} alt="Women's Clothes" className="w-full h-auto object-cover rounded-lg" />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 text-white">
            <h1 className="text-xl font-bold mb-3">WOMEN'S CLOTHES</h1>
            <button className="bg-customTerracotta px-4 py-2 rounded-lg hover:bg-opacity-90 transition duration-300">
              LEARN MORE
            </button>
          </div>
        </div>

        <div className="relative">
          <img src={cloth3} alt="Men's Clothes" className="w-full h-auto object-cover rounded-lg" />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 text-white">
            <h1 className="text-xl font-bold mb-3">MEN'S CLOTHES</h1>
            <button className="bg-customTerracotta px-4 py-2 rounded-lg hover:bg-opacity-90 transition duration-300">
              LEARN MORE
            </button>
          </div>
        </div>

        <div className="relative">
          <img src={cloth4} alt="Accessories" className="w-full h-auto object-cover rounded-lg" />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 text-white">
            <h1 className="text-xl font-bold mb-3">ACCESSORIES</h1>
            <button className="bg-customTerracotta px-4 py-2 rounded-lg hover:bg-opacity-90 transition duration-300">
              LEARN MORE
            </button>
          </div>
        </div>
      </section>

    </>
  )
}

export default Products