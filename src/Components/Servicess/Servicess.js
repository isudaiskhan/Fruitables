import React from 'react'
import { FaUsers } from "react-icons/fa6";

const Servicess = () => {
  return (
    <>
       <div className='mt-48 max-w-[1240px] mx-auto p-12 rounded-lg bg-gray-100'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7'>
        
        {/* Box 1 */}
        <div className='bg-gray-100 rounded-xl h-80 flex flex-col items-center relative transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 duration-500 shadow-lg shadow-gray-500'>
        <div className='py-7 px-7 mt-6 rounded-full bg-[#ffb524] relative z-10'>
        <FaUsers className='text-6xl text-white' />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-5 bg-gray-100"></div>
        <h1 className='text-2xl p-3 text-center text-[#81C408] tracking-wide font-medium mt-4'>SATISFIED CUSTOMERS</h1>
        <p className='mt-1 text-gray-500 text-4xl font-semibold font-mono text-center'>1963</p>
      </div>


        {/* Box 2 */}
        <div className='bg-gray-100 rounded-xl h-80 flex flex-col items-center relative transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 duration-500 shadow-lg shadow-gray-500'>
        <div className='py-7 px-7 mt-6 rounded-full bg-[#ffb524] relative z-10'>
        <FaUsers className='text-6xl text-white' />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-5 bg-gray-100"></div>
        <h1 className='text-2xl p-3 text-center text-[#81C408] tracking-wide font-medium mt-4'>QUALITY OF SERVICE</h1>
        <p className='mt-1 text-gray-500 text-4xl font-semibold font-mono text-center'>99%</p>
      </div>



        {/* Box 3 */}
        <div className='bg-gray-100 rounded-xl h-80 flex flex-col items-center relative transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 duration-500 shadow-lg shadow-gray-500'>
        <div className='py-7 px-7 mt-6 rounded-full bg-[#ffb524] relative z-10'>
        <FaUsers className='text-6xl text-white' />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-5 bg-gray-100"></div>
        <h1 className='text-2xl p-3 text-center text-[#81C408] tracking-wide font-medium mt-4'>QUALITY CERTIFICATES</h1>
        <p className='mt-1 text-gray-500 text-4xl font-semibold font-mono text-center'>33</p>
      </div>

 

        {/* Box 4 */}
        <div className='bg-gray-100 rounded-xl h-80 flex flex-col items-center relative transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 duration-500 shadow-lg shadow-gray-500'>
        <div className='py-7 px-7 mt-6 rounded-full bg-[#ffb524] relative z-10'>
        <FaUsers className='text-6xl text-white' />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-5 bg-gray-100"></div>
        <h1 className='text-2xl p-3 text-center text-[#81C408] tracking-wide font-medium mt-4'>AVAILABLE PRODUCTS</h1>
        <p className='mt-1 text-gray-500 text-4xl font-semibold font-mono text-center'>789</p>
       </div>
        </div>
        </div>
    </>
  )
}

export default Servicess
