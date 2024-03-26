import React from 'react'
import { LiaStarSolid } from "react-icons/lia";
import { FaCartPlus } from 'react-icons/fa';
import image1 from '../Assets/product1.jpg'
import image2 from '../Assets/product2.jpg'
import image3 from '../Assets/product3.jpg'
import image4 from '../Assets/product4.jpg'

const ProductsCards = () => {
  return (
    <>

<div className='max-w-[1240px] mt-16 mx-auto'>

<div className="grid grid-cols-1 sm:grid-cols-2 sm:ps-0 sm:pe-0 ps-12 pe-12 md:grid-cols-3 lg:grid-cols-4 sm:gap-4 gap-y-10">
      {/* First Product */}
      <div className="bg-gray-100 rounded-lg p-2 shadow-md">
        <div className="rounded-lg overflow-hidden mb-4">
          <img src={image1} alt="Product" className="w-full" />
        </div>
        <div className="text-center mb-2">
          <div className="text-2xl text-gray-700 mb-2">Oranges</div>
          <div className="mb-2 mt-3 flex justify-center">
            <span className="text-[#81c408]">
              <LiaStarSolid className="text-xl" />
            </span>
            <span className="text-[#81c408]">
              <LiaStarSolid className="text-xl" />
            </span>
            <span className="text-gray-500">
              <LiaStarSolid className="text-xl" />
            </span>
            <span className="text-gray-500">
              <LiaStarSolid className="text-xl" />
            </span>
            <span className="text-gray-500">
              <LiaStarSolid className="text-xl" />
            </span>
          </div>
          <div className="text-2xl font-medium text-gray-600 mt-3 mb-2">$ 2.00</div>
          <button class="mt-6 px-4 py-2 border mx-auto border-[#FFB524] hover:bg-[#FFB524] hover:text-white text-[#81c408] rounded-full flex items-center justify-center">
        <FaCartPlus className="text-2xl mr-2" />
          Add to Cart
        </button>
        </div>
      </div>



     {/* second Product */}
      <div className="bg-gray-100 rounded-lg p-2 shadow-md">
        <div className="rounded-lg overflow-hidden mb-4">
          <img src={image2} alt="Product" className="w-full" />
        </div>
        <div className="text-center mb-2">
          <div className="text-2xl text-gray-700 mb-2">Raspberries</div>
          <div className="mb-2 mt-3 flex justify-center">
            <span className="text-[#81c408]">
              <LiaStarSolid className="text-xl" />
            </span>
            <span className="text-[#81c408]">
              <LiaStarSolid className="text-xl" />
            </span>
            <span className="text-[#81c408]">
              <LiaStarSolid className="text-xl" />
            </span>
            <span className="text-gray-500">
              <LiaStarSolid className="text-xl" />
            </span>
            <span className="text-gray-500">
              <LiaStarSolid className="text-xl" />
            </span>
          </div>
          <div className="text-2xl font-medium text-gray-600 mt-3 mb-2">$ 3.12</div>
          <button class="mt-6 px-4 py-2 border mx-auto border-[#FFB524] hover:bg-[#FFB524] hover:text-white text-[#81c408] rounded-full flex items-center justify-center">
        <FaCartPlus className="text-2xl mr-2" />
          Add to Cart
        </button>
        </div>
      </div>



      {/* Third Product */}
      <div className="bg-gray-100 rounded-lg p-2 shadow-md">
        <div className="rounded-lg overflow-hidden mb-4">
          <img src={image3} alt="Product" className="w-full" />
        </div>
        <div className="text-center mb-2">
          <div className="text-2xl text-gray-700 mb-2">Bananas</div>
          <div className="mb-2 mt-3 flex justify-center">
            <span className="text-[#81c408]">
              <LiaStarSolid className="text-xl" />
            </span>
            <span className="text-[#81c408]">
              <LiaStarSolid className="text-xl" />
            </span>
            <span className="text-[#81c408]">
              <LiaStarSolid className="text-xl" />
            </span>
            <span className="text-gray-500">
              <LiaStarSolid className="text-xl" />
            </span>
            <span className="text-gray-500">
              <LiaStarSolid className="text-xl" />
            </span>
          </div>
          <div className="text-2xl font-medium text-gray-600 mt-3 mb-2">$ 3.00</div>
          <button class="mt-6 px-4 py-2 border mx-auto border-[#FFB524] hover:bg-[#FFB524] hover:text-white text-[#81c408] rounded-full flex items-center justify-center">
        <FaCartPlus className="text-2xl mr-2" />
          Add to Cart
        </button>
        </div>
      </div>




      {/* Fourth Product */}
      <div className="bg-gray-100 rounded-lg p-2 shadow-md">
        <div className="rounded-lg overflow-hidden mb-4">
          <img src={image4} alt="Product" className="w-full" />
        </div>
        <div className="text-center mb-2">
          <div className="text-2xl text-gray-700 mb-2">Apricots</div>
          <div className="mb-2 mt-3 flex justify-center">
            <span className="text-[#81c408]">
              <LiaStarSolid className="text-xl" />
            </span>
            <span className="text-[#81c408]">
              <LiaStarSolid className="text-xl" />
            </span>
            <span className="text-[#81c408]">
              <LiaStarSolid className="text-xl" />
            </span>
            <span className="text-[#81c408]">
              <LiaStarSolid className="text-xl" />
            </span>
            <span className="text-gray-500">
              <LiaStarSolid className="text-xl" />
            </span>
          </div>
          <div className="text-2xl font-medium text-gray-600 mt-3 mb-2">$ 4.00</div>
          <button class="mt-6 px-4 py-2 border mx-auto border-[#FFB524] hover:bg-[#FFB524] hover:text-white text-[#81c408] rounded-full flex items-center justify-center">
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

export default ProductsCards
