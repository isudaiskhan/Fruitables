import React from 'react'
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';


const TopBar = () => {
  return (
    <>

    <div className="max-w-[1240px] mx-auto rounded-full bg-[#81c408] text-white py-4 px-8  justify-between items-center hidden lg:flex">
  <div className="flex items-center">
    <div className="mr-4">
      <FaEnvelope className="inline-block mr-1 text-[#ffb524]" />
      <span>123 Street, New York</span>
    </div>
    <div>
      <FaMapMarkerAlt className="inline-block mr-1 text-[#ffb524]" />
      <span>Email@Example.com</span>
    </div>
  </div>
  <div className="flex items-center">
    <a href="#" className="mr-4 hover:text-[#ffb524]">Privacy Policy</a>
    <a href="#" className="mr-4 hover:text-[#ffb524]">Terms of Use</a>
    <a href="#" className="mr-4 hover:text-[#ffb524]">Sales and Refunds</a>
  </div>
</div>


      
    </>
  )
}

export default TopBar