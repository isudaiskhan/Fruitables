import React from 'react'
import {FaFacebookF, FaYoutube} from 'react-icons/fa';
import {AiOutlineTwitter, AiFillLinkedin} from 'react-icons/ai';
import image from '../Assets/payment.png'



const Footer = () => {
  return (
    <>

     <div className='py-10 bg-[#45595b] mt-36'>
     
     <div class="md:flex lg:flex mx-auto max-w-[1240px] border-b border-b-[#ffb524] py-5 ">
    <div class="md:w-1/2 lg:w-1/3">
        <div class="flex items-center">
            <div class="mr-4">
                <h1 class='text-[#81c408] px-2 text-4xl sm:text-5xl font-medium'>Fruitables</h1>  
                <h2 class='text-[#ffb524] px-3 mt-3 text-lg'>Fresh Products</h2>     
            </div>
        </div>
    </div>


    <div class="md:w-1/2 lg:w-2/3">
    <div class="flex items-center justify-center md:justify-end">
        <div class="mr-4">
            <div class="relative mt-10">
                <input
                    type="text"
                    placeholder="Your Email"
                    class="border-2 border-[#ffb524] rounded-full px-36 py-4 pl-8 focus:outline-none w-full sm:w-96 md:w-72 lg:w-[550px]"
                />
                <button class="absolute inset-y-0 right-0 lg:px-8 md:px-3 sm:px-4 px-4 py-4 border-2 hover:bg-[#ffb524] border-[#ffb524] bg-[#81c408] rounded-full text-white font-semibold">Submit Now</button>
            </div>
        </div>
    </div>
</div>



    <div class="md:w-1/2 lg:w-1/3">
        <div class="flex items-center justify-center md:justify-end mt-5">
            <div class="mr-4">
                <div class='md:flex items-center py-6 md:justify-around text-center'>
                    <div class='flex justify-center text-white space-x-3'>
                        <a href='#' class='px-2 py-2 group rounded-full border border-[#ffb524] hover:bg-[#ffb524]'>
                            <FaFacebookF class='group-hover:text-black text-[#ffb524] text-xl' />
                        </a>
                        <a href='#' class='px-2 py-2 group rounded-full border border-[#ffb524] hover:bg-[#ffb524]'>
                            <AiOutlineTwitter class='group-hover:text-black text-[#ffb524] text-xl' />
                        </a>
                        <a href='#' class='px-2 py-2 group rounded-full border border-[#ffb524] hover:bg-[#ffb524]'>
                            <FaYoutube class='group-hover:text-black text-[#ffb524] text-xl' />
                        </a>
                        <a href='#' class='px-2 py-2 group rounded-full border border-[#ffb524] hover:bg-[#ffb524]'>
                            <AiFillLinkedin class='group-hover:text-black text-[#ffb524] text-xl' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>




   <div className='max-w-[1240px] mx-auto mt-7 px-4 text-gray-300'>
  <div className='grid lg:grid-cols-4 sm:grid-cols-2 gap-x-24'>
    <div className=''>
      <h6 className='text-[#FFFFFF] mt-6 text-xl font-semibold'>Why People Like us!</h6>
      <p className='mt-6 leading-9 text-gray-300/75'>typesetting, remaining essentially unchanged. It was popularised in the 1960s with the like Aldus PageMaker including of Lorem Ipsum.</p>
      <div className='mt-5'>
        <button className='py-2 px-7 text-[#81c408] hover:bg-[#ffb524] hover:text-white rounded-full border border-[#ffb524]'>Read More</button>
      </div>
    </div>

    <div className='space-y-3 mt-6'>
      <h6 className='text-[#FFFFFF] text-2xl sm:mt-0 mt-6 font-medium'>Shop Info</h6>
      <ul>
        <a href='#'>
          <li className='py-2 text-gray-300/75 hover:text-[#ffb524]'>About Us</li>
        </a>
        <a href='#'>
          <li className='py-2 text-gray-300/75 hover:text-[#ffb524]'>Contact Us</li>
        </a>
        <a href='#'>
          <li className='py-2 text-gray-300/75 hover:text-[#ffb524]'>Privacy Policy</li>
        </a>
        <a href='#'>
          <li className='py-2 text-gray-300/75 hover:text-[#ffb524]'>Terms & Condition</li>
        </a>
        <a href='#'>
          <li className='py-2 text-gray-300/75 hover:text-[#ffb524]'>Return Policy</li>
        </a>
        <a href='#'>
          <li className='py-2 text-gray-300/75 hover:text-[#ffb524]'>FAQS & Help</li>
        </a>
      </ul>
    </div>

    <div className='space-y-3 mt-6'>
      <h6 className='text-[#FFFFFF] text-2xl font-medium'>Account</h6>
      <ul>
        <a href='#'>
          <li className='py-2 text-gray-300/75 hover:text-[#ffb524]'>My Account</li>
        </a>
        <a href='#'>
          <li className='py-2 text-gray-300/75 hover:text-[#ffb524]'>Shop Details</li>
        </a>
        <a href='#'>
          <li className='py-2 text-gray-300/75 hover:text-[#ffb524]'>Shopping Cart</li>
        </a>
        <a href='#'>
          <li className='py-2 text-gray-300/75 hover:text-[#ffb524]'>Wishlist</li>
        </a>
        <a href='#'>
          <li className='py-2 text-gray-300/75 hover:text-[#ffb524]'>Order History</li>
        </a>
        <a href='#'>
          <li className='py-2 text-gray-300/75 hover:text-[#ffb524]'>International Orders</li>
        </a>
      </ul>
    </div>

    <div className='space-y-3 mt-6'>
      <h6 className='text-[#FFFFFF] text-2xl font-medium'>Contact</h6>
      <ul>
        <a href='#'>
          <li className='py-2 text-gray-300/75 hover:text-[#ffb524]'>Address: 1429 Netus Rd, NY 48247</li>
        </a>
        <a href='#'>
          <li className='py-2 text-gray-300/75 hover:text-[#ffb524]'>Email: Example@gmail.com</li>
        </a>
        <a href='#'>
          <li className='py-2 text-gray-300/75 hover:text-[#ffb524]'>Phone: +0123 4567 8910</li>
        </a>
        <a href='#'>
          <li className='py-2 text-gray-300/75 hover:text-[#ffb524]'>Payment Accepted</li>
        </a>
       
        <div className='mt-5'>
            <img src={image} />
        </div>
      </ul>
     </div>
     </div> 
    </div>


        <div class='flex text-lg flex-col lg:flex-row text-center md:justify-between mx-auto max-w-[1240px] mt-20 px-5 sm:px-10'>
            <h1 class='text-white mb-5 sm:mb-0'>©<span class='text-[#81c408]'> Your Site Name</span> , All right reserved.</h1>
            <h1 class='text-white'>Designed By <span class='text-[#81c408]'>Sudais Khan </span>| Privacy Policy | Terms of Service</h1>
        </div>


   </div>

    </>
  )
}

export default Footer