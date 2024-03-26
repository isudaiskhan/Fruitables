import React,{useRef} from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; // Import arrow icons
import image1 from '../Assets/testimonial.jpg';
import { LiaStarSolid } from "react-icons/lia";




const ClientSlider = () => {
    const sliderRef = useRef();

  const images = [image1, image1, image1, image1 ,image1];
  const productNames = ["Client Name", "Client Name", "Client Name", "Client Name", "Client Name"];
  const prices = ["Profession", "Profession", "Profession", "Profession", "Profession"];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed in milliseconds
    arrows: false, // Hide default arrows
    pauseOnHover: false, // Pause autoplay on hover

    responsive: [
      {
        breakpoint: 768,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        },
      },
    ]

  };


  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };
  return (
    <>


  <div className='max-w-[1240px] mx-auto mt-40 relative'>
  <h2 className='text-[#81c408] text-2xl font-semibold text-center'>Our Testimonial</h2>
      <h1 className='text-[#45595b] sm:text-5xl text-3xl font-semibold text-center mt-4'>Our Client Saying!</h1>
      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <div key={index}>  
          <div className="flex flex-wrap -mx-6 sm:mt-16 mt-24">
          <div className=" mx-auto w-11/12 md:px-4 sm:px-14 px-4 mb-4">
          <div className="border border-[#81c408] rounded-lg bg-gray-50 overflow-hidden shadow-md flex">
        
      {/* Price and Description Column */}
    <div className="w-full px-6 py-5">
  <p className="text-gray-500 border-b text-lg border-b-[#FFB524] py-4 sm:w-3/4">Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
  <div className="relative flex flex-wrap mt-6">
    <img className="w-24 rounded-lg object-cover mb-3 sm:mb-0 sm:mr-7" src={image} alt={`Image ${index + 1}`} />
    <div className="w-full sm:w-auto">
      <h2 className="text-2xl font-semibold text-[#45595b]">{productNames[index]}</h2>
      <p className="text-gray-500 text-xl mt-2">{prices[index]}</p>
      <div className="mt-3 flex flex-wrap items-center">
        <span className="text-[#81c408] flex items-center">
          <LiaStarSolid className="text-xl" />
          <LiaStarSolid className="text-xl" />
          <LiaStarSolid className="text-xl" />
          <LiaStarSolid className="text-xl" />
          <span className='text-gray-500'>
          <LiaStarSolid className="text-xl" />
          </span>
        </span>
      </div>
    </div>
  </div>
</div>
  </div>
  </div>
</div>
</div>
        ))}
      </Slider>
      <button className="absolute group top-0 border border-[#FFB524] hover:bg-[#FFB524] right-20 sm:mt-20 mt-28 ml-4 bg-white rounded-full p-2 shadow-md" onClick={goToPrev}>
        <FiChevronLeft className="w-6 h-6 text-[#81c408] group-hover:text-white" />
      </button>
      <button className="absolute top-0 group border border-[#FFB524] hover:bg-[#FFB524] right-0 sm:mt-20  mt-28 mr-5 bg-white rounded-full p-2 shadow-md" onClick={goToNext}>
        <FiChevronRight className="w-6 h-6 text-[#81c408] group-hover:text-white" />
      </button>
    </div>
      
    </>
  )
}

export default ClientSlider