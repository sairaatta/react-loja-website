import React from 'react'
import aboutimg from '../assets/images/about1.png';
import cloth2 from '../assets/images/cloth2.png';
import cloth3 from '../assets/images/cloth3.png';
import cloth4 from '../assets/images/cloth4.png';
import im1 from '../assets/images/im1.png';
import im2 from '../assets/images/im2.png';
import im3 from '../assets/images/im3.png';
import im4 from '../assets/images/im4.png';
import im5 from '../assets/images/im5.png';
import im6 from '../assets/images/im6.png';
import about2 from '../assets/images/about2.png';
import about3 from '../assets/images/about3.png';
import about4 from '../assets/images/about4.png';
import fashion from '../assets/images/fashion.png'

const Aboutus = () => {
  return (
    <>
      <section className='flex items-center justify-center min-h-screen '>
        <div className='flex  justify-center'>
          <img src={aboutimg} alt="" />
        </div>
      </section>

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
      <div className='flex items-center justify-center p-8'>
        <button className='p-4 bg-customTerracotta rounded-xl px-8 py-3 text-white font-normal hover:bg-opacity-90'> OWN BY LOJA </button>
      </div>


      {/* images section */}
      <section className='flex flex-wrap md:flex-nowrap p-12'>
        <div className='row-span-3'>
          <div>
            <img src={im1} alt="" />
          </div>
          <div className='flex'>
            <span className=''>
              <img src={im2} alt="" />
            </span>
            <span>
              <img src={im3} alt="" />
            </span>
          </div>

        </div>
        <div className='flex'>
          <div>
            <span>
              <img src={im4} alt="" />
            </span>
            <span>
              <img src={im5} alt="" />
            </span>
          </div>

          <div>
            <img src={im6} alt="" />
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center space-x-24 p-16">
        <div className="flex flex-col items-center">
          <img src={about2} alt="Siddique Trade Center" className="mb-4" />
          <h1 className="text-center text-2xl font-medium">SIDDIQUE TRADE CENTER</h1>
        </div>
        <div className="flex flex-col items-center">
          <img src={about3} alt="Imperial Mall" className="mb-4" />
          <h1 className="text-center text-2xl font-medium">IMPERIAL MALL</h1>
        </div>
        <div className="flex flex-col items-center">
          <img src={about4} alt="Xinhua Mall" className="mb-4" />
          <h1 className="text-center text-2xl font-medium">XINHUA MALL</h1>
        </div>
      </section>

      {/* fashion sale  */}
      <section className="flex justify-center items-center min-h-screen">
        <div className='flex justify-center'>
          <img src={fashion} alt="" />
        </div>
      </section>




    </>
  )
}

export default Aboutus