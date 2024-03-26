import React from 'react'
import image1 from '../Assets/baner.png'

const Banner = () => {
  return (
    <>

  <div className='relative w-full pt-20 mt-48 py-10 px-4 bg-[#ffb524]'>
    <div className='max-w-[1240px] mx-auto flex flex-col md:flex-row'>
    {/* First Div */}
    <div className='md:w-1/2 md:mt-8'>
      <h1 className='md:text-7xl text-white text-5xl font-bold tracking-wide py-2' style={{lineHeight:'5rem'}}>Fresh Exotic Fruits</h1>
      <h1 className='md:text-6xl text-[#45595b] mt-2 text-4xl tracking-wide py-2'>in Our Store</h1>
      <p className='mt-6 text-[#45595b] text-lg tracking-wide'>The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.</p>
       <button className='py-3 px-12 mt-7 text-[#45595b] hover:bg-[#81c408] font-semibold text-lg border-2 border-white rounded-full'>BUY</button>
    </div>




    {/* Image Div */}
    <div className='md:mx-auto relative md:mt-0 mt-14'>
    <div className="absolute top-0 left-0 bg-white text-white font-bold text-lg rounded-full sm:py-7 sm:px-5 py-4 px-2 flex items-center">
    <div className="flex flex-col items-center">
      <span className='sm:text-8xl text-7xl font-mono text-gray-600'>1</span>
    </div>
    <div className="flex flex-col">
      <span className='sm:text-4xl text-3xl font-medium text-gray-600'>50$</span>
      <span className='ml-2 text-2xl font-medium text-gray-500'>kg</span>
    </div>
    </div>
   <img src={image1} className='sm:w-[550px] w-96 my-4 rounded-lg' />
    </div>

    </div>
   </div>
    </>
  )
}

export default Banner