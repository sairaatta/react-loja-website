import React from 'react'
import hero1 from '../assets/images/hero1.png';
import hero2 from '../assets/images/hero2.png';
import hero3 from '../assets/images/hero3.png';
import hero4 from '../assets/images/hero4.png';
import img1 from '../assets/images/img1.png';
import img2 from '../assets/images/img2.png';
import img3 from '../assets/images/img3.png';
import im1 from '../assets/images/im1.png';
import im2 from '../assets/images/im2.png';
import im3 from '../assets/images/im3.png';
import im4 from '../assets/images/im4.png';
import im5 from '../assets/images/im5.png';
import im6 from '../assets/images/im6.png';
import home from '../assets/images/home.png';
import clothes from '../assets/images/tshirt.png'
import accessories from '../assets/images/woman-bag.png';
import appliances from '../assets/images/fridge.png';
import logo from '../assets/images/logo.png';
import seller from '../assets/images/seller.png';
import shop from '../assets/images/shop.png'
const Home = () => {
  return (
    <>
      {/* hero section */}
      <section className='flex flex-wrap md:flex-nowrap p-12'>
        <div className='flex-1 flex'>
          <img src={hero1} alt="" className='w-full max-w-96 h-full object-cover mx-auto' />
        </div>
        <div className='flex-1 flex flex-col'>
          <div className='flex-1 mb-4'>
            <img src={hero2} alt="" className='w-full h-full object-cover' />
          </div>
          <div className='flex flex-wrap gap-4 flex-1'>
            <span className='flex-1'>
              <img src={hero3} alt="" className='w-full h-full object-cover' />
            </span>
            <span className='flex-1'>
              <img src={hero4} alt="" className='w-full h-full object-cover' />
            </span>
          </div>
        </div>
      </section>

      {/* img categories section */}
      <section className='flex flex-wrap md:flex-nowrap p-12'>
        <div className='p-4 mx-auto '>
          <div>
            <img src={img1} alt="" />
          </div>
          <h1 className='text-center text-2xl font-sem'>CLOTHING </h1>
        </div>
        <div className='p-4'>
          <div>
            <img src={img2} alt="" />
          </div>

          <h1 className='text-center text-2xl font-sem'>ACCESSORIES </h1>
        </div>
        <div className='p-4'>
          <div>
            <img src={img3} alt="" />
          </div>
          <h1 className='text-center text-2xl font-sem'>LOJA PRODUCTS </h1>
        </div>
      </section>

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

      {/* categories section */}

      <section className='p-12'>
        <h1 className='font-semibold text-3xl text-center mb-8'>CATEGORIES</h1>
        <div className='flex flex-wrap justify-center gap-36'>
          <div className='flex flex-col items-center text-center'>
            <img src={home} alt="Home" className='w-24 h-24 mb-4 object-cover' />
            <h1 className='text-lg font-medium'>HOME</h1>
          </div>
          <div className='flex flex-col items-center text-center'>
            <img src={clothes} alt="Clothes" className='w-24 h-24 mb-4 object-cover' />
            <h1 className='text-lg font-medium'>CLOTHES</h1>
          </div>
          <div className='flex flex-col items-center text-center'>
            <img src={accessories} alt="Accessories" className='w-24 h-24 mb-4 object-cover' />
            <h1 className='text-lg font-medium'>ACCESSORIES</h1>
          </div>
          <div className='flex flex-col items-center text-center'>
            <img src={appliances} alt="Appliances" className='w-24 h-24 mb-4 object-cover' />
            <h1 className='text-lg font-medium'>APPLIANCES</h1>
          </div>
          <div className='flex flex-col items-center text-center'>
            <img src={logo} alt="Loja Products" className='w-44 h-20 mb-4 mt-3 object-cover' />
            <h1 className='text-lg font-medium'>LOJA PRODUCTS</h1>
          </div>
        </div>

        <div className='flex flex-col items-center mt-10'>
          <img src={seller} alt="Seller" className='mb-4' />
          <button className='px-6 py-3 bg-customTerracotta text-white rounded-xl'>
            BECOME A SELLER
          </button>
        </div>

      </section>

      {/* shop now section  */}
      <section className='flex flex-col md:flex-row p-16 items-center md:items-center bg-gray-300  shadow-slate-500 shadow-xl rounded-lg m-8' >
        {/* Left Side (Text and Button) */}
        <div className='flex flex-col items-center md:items-items-center text-center md:text-left w-full md:w-1/2'>
          <h1 className='text-5xl font-medium italic mb-2 '>Casual</h1>
          <h1 className='text-5xl font-serif mb-2'>DAILY STYLE</h1>
          <h2 className='text-xl mb-4 text-customTerracotta font-bold'>ENJOY UP TO 50% OFF</h2>
          <button className='px-6 py-3 bg-customTerracotta text-white rounded-lg hover:bg-customTerracottaDark'>
            SHOP NOW
          </button>
        </div>
        {/* Right Side (Image) */}
        <div className='flex justify-center md:justify-center w-full md:w-1/2 mt-8 md:mt-0'>
          <img src={shop} alt="Shop" className='w-full max-w-md h-auto object-cover rounded-2xl shadow-2xl' />
        </div>
      </section>
    </>

  )
}

export default Home