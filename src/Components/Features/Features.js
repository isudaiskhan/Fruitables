import React from 'react'
import { FaCarSide, FaExchangeAlt, FaUserShield } from 'react-icons/fa';
import { FaPhone } from "react-icons/fa6";


const Features = () => {
  return (
    <>
       
        <div className='mt-44 max-w-[1240px] mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 ps-12 pe-12 sm:ps-28 sm:pe-16 lg:ps-0 lg:pe-0 lg:grid-cols-4 gap-7'>
        
        {/* Box 1 */}
        <div className='bg-gray-100 rounded-xl h-72 flex flex-col items-center relative transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 duration-500 shadow-lg shadow-gray-500'>
        <div className='py-7 px-7 mt-8 rounded-full bg-[#ffb524] relative z-10'>
        <FaCarSide className='text-6xl text-white' />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-5 bg-gray-100"></div>
        <h1 className='text-xl text-gray-600 text-center tracking-wide font-medium mt-6'>Free Shipping</h1>
        <p className='mt-2 text-gray-500 text-lg text-center'>Free on order over $300</p>
        <div className="absolute bottom-0 left-0 right-0 h-6 bg-[#ffb524]"></div>
      </div>



        {/* Box 2 */}
        <div className='bg-gray-100 rounded-xl h-72 flex flex-col items-center relative transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 duration-500 shadow-lg shadow-gray-500'>
        <div className='py-7 px-7 mt-8 rounded-full bg-[#ffb524] relative z-10'>
        <FaUserShield className='text-6xl text-white' />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-5 bg-gray-100"></div>
        <h1 className='text-xl text-gray-600 tracking-wide text-center font-medium mt-6'>Security Payment</h1>
        <p className='mt-2 text-gray-500 text-lg text-center'>100% security payment</p>
        <div className="absolute bottom-0 left-0 right-0 h-6 bg-[#ffb524]"></div>
        </div>



        {/* Box 3 */}
        <div className='bg-gray-100 rounded-xl h-72 flex flex-col items-center relative transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 duration-500 shadow-lg shadow-gray-500'>
        <div className='py-7 px-7 mt-8 rounded-full bg-[#ffb524] relative z-10'>
        <FaExchangeAlt className='text-6xl text-white' />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-5 bg-gray-100"></div>
        <h1 className='text-xl text-gray-600 tracking-wide text-center font-medium mt-6'>30 Day Return</h1>
        <p className='mt-2 text-gray-500 text-lg text-center'>30 day money guarantee</p>
        <div className="absolute bottom-0 left-0 right-0 h-6 bg-[#ffb524]"></div>
        </div>

 

        {/* Box 4 */}
        <div className='bg-gray-100 rounded-xl h-72 flex flex-col items-center relative transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 duration-500 shadow-lg shadow-gray-500'>
        <div className='py-7 px-7 mt-8 rounded-full bg-[#ffb524] relative z-10'>
        <FaPhone className='text-6xl text-white' />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-5 bg-gray-100"></div>
        <h1 className='text-xl text-gray-600 tracking-wide text-center font-medium mt-6'>24/7 Support</h1>
        <p className='mt-2 text-gray-500 text-lg text-center'>Support every time fast</p>
        <div className="absolute bottom-0 left-0 right-0 h-6 bg-[#ffb524]"></div>
        </div>
        </div>
        </div>
    </>
  )
}

export default Features