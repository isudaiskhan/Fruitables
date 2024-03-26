import React from 'react'
import Navbar from '../../Navbar/Navbar'
import TopBar from '../../TopBar/TopBar'
import Footer from '../../Footer/Footer'
import bgimage from '../../Assets/cart-page-header-img.jpg';
import {FiUser, FiMail, FiMessageSquare,FiPhoneCall} from 'react-icons/fi'
import { FaRegEnvelope  } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import ScrollButton from '../../ScrollButton/ScrollButton';


const Contact = () => {
  return (
    <>
     
     <TopBar />
     <Navbar />


     <div className="relative">
        <div className="bg-no-repeat mt-8 bg-cover bg-center h-52 bg-blend-multiply bg-gray-400 flex justify-center items-center" style={{ backgroundImage: `url(${bgimage})` }}>
          <h1 className="text-center text-white text-4xl font-bold">Contact</h1>
        </div>
        </div>

        <div className='w-full mt-32'>
        <div className='max-w-[1240px] mx-auto bg-gray-50 py-8 rounded-md'>
      

       <div className='text-center'>
    <h1 className='md:text-4xl text-3xl font-semibold text-[#81c408]'>Get in Touch</h1>
    <p className='text-gray-500 py-5 sm:w-1/2 leading-7 mx-auto'>Eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
    </div>

    <div className='flex flex-col sm:flex-col lg:flex-row lg:p-10'>

   {/* Form Section */}
    <form className='md:w-3/5 w-11/12 max-w-3xl mt-10 mx-auto space-y-6 mb-4 md:mb-0'>
   
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <div className='w-full relative'>
          <input type="text" id="input1" name="user_name" placeholder='Name' required className="w-full border rounded border-gray-300 px-4 py-3 text-black focus:outline-[#FFB524]" />
          <FiUser className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      
      </div>

      <div className='w-full relative'>
          <input type="email" id="input2" name="user_Email" placeholder='Email' required className="w-full border rounded border-gray-300 px-4 py-3 text-black focus:outline-[#FFB524]" />
          <FiMail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>

      <div className='w-full relative'>
        <textarea id="textarea" placeholder='Message' name="message" required rows="6" className="p-2 px-4 py-3 w-full border border-gray-300 rounded-md focus:outline-[#FFB524]" />
        <FiMessageSquare className="absolute right-3 bottom-3 text-gray-500" />
      </div>

      <div className="flex justify-center">
  <button type="submit" className="font-semibold flex items-center justify-center px-8 py-3 w-full border border-[#FFB524] rounded-lg text-[#81c408] hover:bg-[#FFB524] hover:text-white">
    SUBMIT
  </button>
</div>
 </form>



  {/* contact Section */}
  <div className='lg:w-1/3 md:w-7/12 w-11/12 mx-auto'>

        <div className='flex items-center mt-10 p-5 shadow-xl rounded-md border'>
        <a href='#' className='px-3 rounded-full py-3 group'>
          <FaLocationDot  className='text-4xl text-[#81c408] group-hover:text-[#FFB524]' />
        </a>
        <div className='ml-4'>
          <h1 className='text-gray-600 font-medium text-2xl'>Address</h1>
          <span className='text-gray-500 text-lg'>123 Street New York USA</span>
        </div>
      </div>


      <div className='flex items-center mt-9 p-5 shadow-xl rounded-md border'>
        <a href='#' className='px-3 rounded-full py-3 group'>
          <FaRegEnvelope  className='text-4xl text-[#81c408] group-hover:text-[#FFB524]' />
        </a>
        <div className='ml-4'>
          <h1 className='text-gray-600 font-medium text-2xl'>Mail Us</h1>
          <span className='text-gray-500 text-lg'>info@ example.com</span>
        </div>
      </div>
        <div className='flex items-center mt-9 p-5 shadow-xl rounded-md border'>
        <a href='#' className='px-3 rounded-full py-3 group'>
          <FiPhoneCall className='text-4xl text-[#81c408] group-hover:text-[#FFB524]' />
        </a>



        <div className='ml-4'>
          <h1 className='text-gray-600 font-medium text-2xl'>Telephone</h1>
          <span className='text-gray-500 text-lg'>(+012) 3456 7890</span>
        </div>
      </div>
      </div>  
    </div>
  </div>
  </div>

  <Footer />
  <ScrollButton />

    </>
  )
}

export default Contact