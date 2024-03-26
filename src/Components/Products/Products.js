import React from 'react'
import { LiaStarSolid } from "react-icons/lia";
import { FaCartPlus } from 'react-icons/fa';
import image1 from '../Assets/product1.jpg'
import image2 from '../Assets/product2.jpg'
import image3 from '../Assets/product3.jpg'
import image4 from '../Assets/product4.jpg'
import image5 from '../Assets/product5.jpg'
import image6 from '../Assets/product6.jpg'



const Products = () => {
  return (
    <>
    <div className='max-w-[1240px] mt-40 mx-auto'>

    <div className='text-center sm:w-3/5 mx-auto'>
        <h1 className='sm:text-6xl text-4xl font-semibold text-gray-500 mb-6'>Bestseller Products</h1>
        <h2 className='mb-10 text-gray-500 tracking-wide'>Latin words, combined with a handful of model sentence structures, to generate with Lorem Ipsum which looks reasonable.</h2>
    </div>


    <div className="grid grid-cols-1 mt-20 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:ps-0 sm:pe-0 ps-12 pe-12">
    
      {/* 1st Product */}
      <div className="bg-gray-100 rounded-lg p-5 shadow-md flex flex-col md:flex-row justify-between items-center">
        <div className="rounded-full overflow-hidden w-36 h-36 mb-4 md:mb-0">
          <img src={image1} alt="Product" className="w-full h-full object-cover" />
        </div>
        
        <div className="md:ml-4 text-center md:text-left">
        <div>
            <h1 className='text-2xl text-gray-700'>Oranges</h1>
        </div>
          <div className="mb-2 flex mt-5">
            <span className="text-[#81c408] mr-1">
              <LiaStarSolid className="text-2xl" />
            </span>
            <span className="text-[#81c408] mr-1">
              <LiaStarSolid className="text-2xl" />
            </span>
            <span className="text-gray-500 mr-1">
              <LiaStarSolid className="text-2xl" />
            </span>
            <span className="text-gray-500 mr-1">
              <LiaStarSolid className="text-2xl" />
            </span>
            <span className="text-gray-500">
              <LiaStarSolid className="text-2xl" />
            </span>
          </div>
          <div className="text-2xl font-medium mb-2 text-gray-600 mt-5">$ 2.00</div>
          <button class="mt-6 px-4 py-2 border border-[#FFB524] hover:bg-[#FFB524] hover:text-white text-[#81c408] rounded-full flex items-center justify-center">
        <FaCartPlus className="text-2xl mr-2" />
          Add to Cart
        </button>
        </div>
      </div>

      {/* 2nd Product */}
      <div className="bg-gray-100 rounded-lg p-5 shadow-md flex flex-col md:flex-row justify-between items-center">
        <div className="rounded-full overflow-hidden w-36 h-36 mb-4 md:mb-0">
          <img src={image2} alt="Product" className="w-full h-full object-cover" />
        </div>
        
        <div className="md:ml-4 text-center md:text-left">
        <div>
            <h1 className='text-2xl text-gray-700'>Raspberries</h1>
        </div>
          <div className="mb-2 flex mt-5">
            <span className="text-[#81c408] mr-1">
              <LiaStarSolid className="text-2xl" />
            </span>
            <span className="text-[#81c408] mr-1">
              <LiaStarSolid className="text-2xl" />
            </span>
            <span className="text-[#81c408] mr-1">
              <LiaStarSolid className="text-2xl" />
            </span>
            <span className="text-gray-500 mr-1">
              <LiaStarSolid className="text-2xl" />
            </span>
            <span className="text-gray-500">
              <LiaStarSolid className="text-2xl" />
            </span>
          </div>
          <div className="text-2xl font-medium mb-2 text-gray-600 mt-5">$ 3.12</div>
          <button class="mt-6 px-4 py-2 border border-[#FFB524] hover:bg-[#FFB524] hover:text-white text-[#81c408] rounded-full flex items-center justify-center">
        <FaCartPlus className="text-2xl mr-2" />
          Add to Cart
        </button>
        </div>
      </div>



      {/* 3rd Product */}
      <div className="bg-gray-100 rounded-lg p-5 shadow-md flex flex-col md:flex-row justify-between items-center">
        <div className="rounded-full overflow-hidden w-36 h-36 mb-4 md:mb-0">
          <img src={image3} alt="Product" className="w-full h-full object-cover" />
        </div>
        
        <div className="md:ml-4 text-center md:text-left">
        <div>
            <h1 className='text-2xl text-gray-700'>Bananas</h1>
        </div>
          <div className="mb-2 flex mt-5">
            <span className="text-[#81c408] mr-1">
              <LiaStarSolid className="text-2xl" />
            </span>
            <span className="text-[#81c408] mr-1">
              <LiaStarSolid className="text-2xl" />
            </span>
            <span className="text-[#81c408] mr-1">
              <LiaStarSolid className="text-2xl" />
            </span>
            <span className="text-gray-500 mr-1">
              <LiaStarSolid className="text-2xl" />
            </span>
            <span className="text-gray-500">
              <LiaStarSolid className="text-2xl" />
            </span>
          </div>
          <div className="text-2xl font-medium mb-2 text-gray-600 mt-5">$ 3.00</div>
          <button class="mt-6 px-4 py-2 border border-[#FFB524] hover:bg-[#FFB524] hover:text-white text-[#81c408] rounded-full flex items-center justify-center">
        <FaCartPlus className="text-2xl mr-2" />
          Add to Cart
        </button>
        </div>
      </div>


       {/* 4th Product */}
       <div className="bg-gray-100 rounded-lg p-5 shadow-md flex flex-col md:flex-row justify-between items-center">
        <div className="rounded-full overflow-hidden w-36 h-36 mb-4 md:mb-0">
          <img src={image4} alt="Product" className="w-full h-full object-cover" />
        </div>
        
        <div className="md:ml-4 text-center md:text-left">
        <div>
            <h1 className='text-2xl text-gray-700'>Apricots</h1>
        </div>
          <div className="mb-2 flex mt-5">
            <span className="text-[#81c408] mr-1">
              <LiaStarSolid className="text-2xl" />
            </span>
            <span className="text-[#81c408] mr-1">
              <LiaStarSolid className="text-2xl" />
            </span>
            <span className="text-[#81c408] mr-1">
              <LiaStarSolid className="text-2xl" />
            </span>
            <span className="text-[#81c408] mr-1">
              <LiaStarSolid className="text-2xl" />
            </span>
            <span className="text-gray-500">
              <LiaStarSolid className="text-2xl" />
            </span>
          </div>
          <div className="text-2xl font-medium mb-2 text-gray-600 mt-5">$ 4.00</div>
          <button class="mt-6 px-4 py-2 border border-[#FFB524] hover:bg-[#FFB524] hover:text-white text-[#81c408] rounded-full flex items-center justify-center">
        <FaCartPlus className="text-2xl mr-2" />
          Add to Cart
        </button>
        </div>
      </div>



       {/* 5th Product */}
       <div className="bg-gray-100 rounded-lg p-5 shadow-md flex flex-col md:flex-row justify-between items-center">
        <div className="rounded-full overflow-hidden w-36 h-36 mb-4 md:mb-0">
          <img src={image5} alt="Product" className="w-full h-full object-cover" />
        </div>
        
        <div className="md:ml-4 text-center md:text-left">
        <div>
            <h1 className='text-2xl text-gray-700'>Grapes</h1>
        </div>
          <div className="mb-2 flex mt-5">
            <span className="text-[#81c408] mr-1">
              <LiaStarSolid className="text-2xl" />
            </span>
            <span className="text-[#81c408] mr-1">
              <LiaStarSolid className="text-2xl" />
            </span>
            <span className="text-[#81c408] mr-1">
              <LiaStarSolid className="text-2xl" />
            </span>
            <span className="text-[#81c408] mr-1">
              <LiaStarSolid className="text-2xl" />
            </span>
            <span className="text-gray-500">
              <LiaStarSolid className="text-2xl" />
            </span>
          </div>
          <div className="text-2xl font-medium mb-2 text-gray-600 mt-5">$ 4.50</div>
          <button class="mt-6 px-4 py-2 border border-[#FFB524] hover:bg-[#FFB524] hover:text-white text-[#81c408] rounded-full flex items-center justify-center">
        <FaCartPlus className="text-2xl mr-2" />
          Add to Cart
        </button>
        </div>
      </div>



       {/* 6th Product */}
       <div className="bg-gray-100 rounded-lg p-5 shadow-md flex flex-col md:flex-row justify-between items-center">
        <div className="rounded-full overflow-hidden w-36 h-36 mb-4 md:mb-0">
          <img src={image6} alt="Product" className="w-full h-full object-cover" />
        </div>
        
        <div className="md:ml-4 text-center md:text-left">
        <div>
            <h1 className='text-2xl text-gray-700'>Apples</h1>
        </div>
          <div className="mb-2 flex mt-5">
            <span className="text-[#81c408] mr-1">
              <LiaStarSolid className="text-2xl" />
            </span>
            <span className="text-[#81c408] mr-1">
              <LiaStarSolid className="text-2xl" />
            </span>
            <span className="text-[#81c408] mr-1">
              <LiaStarSolid className="text-2xl" />
            </span>
            <span className="text-[#81c408] mr-1">
              <LiaStarSolid className="text-2xl" />
            </span>
            <span className="text-[#81c408]">
              <LiaStarSolid className="text-2xl" />
            </span>
          </div>
          <div className="text-2xl font-medium mb-2 text-gray-600 mt-5">$ 5.00</div>
          <button class="mt-6 px-4 py-2 border border-[#FFB524] hover:bg-[#FFB524] hover:text-white text-[#81c408] rounded-full flex items-center justify-center">
        <FaCartPlus className="text-2xl mr-2" />
          Add to Cart
        </button>
        </div>
      </div>
    </div>
    </div>
 
    </>
  )
}

export default Products