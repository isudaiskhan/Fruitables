import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaCartPlus } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; // Import arrow icons
import image1 from '../Assets/item1.jpg';
import image2 from '../Assets/item2.jpg';
import image3 from '../Assets/item3.jpg';
import image4 from '../Assets/item4.jpg';
import image5 from '../Assets/item5.jpg';


const VegetableShop = () => {
  const sliderRef = useRef();

  const images = [image1, image2, image3, image4 ,image5];
  const productNames = ["Tomato", "Broccoli", "Potato", "bell pepper", "Parsely"];
  const prices = ["$2.00 / kg", "$1.5 / kg", "$4.99 / kg", "$1.00 / kg", "$3.99 / kg"];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed in milliseconds
    arrows: false, // Hide default arrows
    pauseOnHover: false, // Pause autoplay on hover
    
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },

    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ],
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
      <h1 className='text-[#45595b] sm:text-4xl text-2xl font-semibold mb-8 ps-4'>Fresh Organic Vegetables</h1>
      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <div className="flex flex-wrap -mx-4 mt-12">
              <div className="mx-auto w-11/12 px-4 mb-4">
                <div className="bg-white border hover:shadow-xl hover:shadow-gray-500 border-[#81c408] rounded-lg overflow-hidden shadow-md">
                  <div className="relative">
                    <img className="w-full h-52 object-cover transition-transform ease-in-out duration-500 delay-150 hover:scale-110 hover:-translate-y-1" src={image} alt={`Image ${index + 1}`} />
                    <span className="absolute top-2 right-2 px-3 py-2 tracking-wide bg-[#81c408] text-white font-medium rounded-lg">Vegetable</span>
                    </div>
                    <div className="p-4">
                    <h2 className="text-2xl font-semibold mb-4 mt-5 text-[#45595b]">{productNames[index]}</h2>
                    <p className="text-gray-500 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero et venenatis commodo.</p>
                    <p className="text-[#45595b] text-xl font-semibold">{prices[index]}</p>
                    <button className="mt-4 px-4 py-2 border border-[#FFB524] hover:bg-[#FFB524] hover:text-white text-[#81c408] rounded-full flex items-center justify-center">
                      <FaCartPlus className="w-6 h-6 mr-2" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <button className="absolute group top-0 border border-[#FFB524] hover:bg-[#FFB524] right-20 sm:mt-10 mt-14 ml-4 bg-white rounded-full p-2 shadow-md" onClick={goToPrev}>
        <FiChevronLeft className="w-6 h-6 text-[#81c408] group-hover:text-white" />
      </button>
      <button className="absolute top-0 group border border-[#FFB524] hover:bg-[#FFB524] right-0 sm:mt-10 mt-14 mr-5 bg-white rounded-full p-2 shadow-md" onClick={goToNext}>
        <FiChevronRight className="w-6 h-6 text-[#81c408] group-hover:text-white" />
      </button>
    </div>

    </>

  );
};

export default VegetableShop;