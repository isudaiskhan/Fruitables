import React from 'react';
import image1 from '../Assets/featur-1.jpg';
import image2 from '../Assets/featur-2.jpg';
import image3 from '../Assets/featur-3.jpg';


const Cards = () => {
  return (
    <div className='max-w-[1240px] mx-auto mt-36'>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-12 gap-6 px-5 ">
        {/* Card 1  */}
        <a href='#' className="block">
          <div className="bg-white border hover:shadow-2xl hover:shadow-[#ffb524] border-[#ffb524] rounded-lg overflow-hidden shadow-md">
            <img className="w-full object-cover" src={image1} alt="Image 1" />
             <div className='w-full flex justify-center'>
             <div className='w-64 -mt-14 text-center relative rounded-xl sm:p-7 p-4 bg-[#81c408]'>
              <h1 className='text-2xl text-white'>Fresh Apples</h1>
              <p className='text-3xl text-gray-500 font-medium mt-1'>20% OFF</p>        
            </div>
            </div>
            <div className="h-36 -mt-20 bg-[#ffb524]"></div>
         </div>
        </a>


        {/* Card 2 */}
        <a href='#' className="block">
          <div className="bg-white border hover:shadow-2xl hover:shadow-gray-700 border-gray-700 rounded-lg overflow-hidden shadow-md">
            <img className="w-full object-cover" src={image2} alt="Image 2" />
             <div className='w-full flex justify-center'>
             <div className='w-64  -mt-14 text-center relative rounded-xl p-7 bg-white'>
              <h1 className='text-2xl text-[#81c408]'>Tasty Fruits</h1>
              <p className='text-3xl text-gray-500 font-medium mt-1'>Free Delivery</p>        
            </div>
            </div>
            <div className="h-36 -mt-20 bg-gray-700"></div>
         </div>
        </a>
        

        {/* Card 3  */}
        <a href='#' className="block">
          <div className="bg-white border hover:shadow-2xl hover:shadow-[#81c408] border-[#81c408] rounded-lg overflow-hidden shadow-md">
            <img className="w-full object-cover" src={image3} alt="Image 3" />
             <div className='w-full flex justify-center'>
             <div className='w-64  -mt-14 text-center relative rounded-xl p-7 bg-[#ffb524]'>
              <h1 className='text-2xl text-white'>Exotic Vegetable</h1>
              <p className='text-3xl text-gray-500 font-medium mt-1'>Discount 30$</p>        
            </div>
            </div>
            <div className="h-36 -mt-20 bg-[#81c408]"></div>
         </div>
        </a>
      </div>
    </div>
  );
}

export default Cards;