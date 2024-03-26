import React, { useRef } from 'react';
import bgimage from '../Assets/hero-img.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../Assets/slideshow1.jpg';
import image2 from '../Assets/slideshow2.png';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


const Hero = () => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  return (

    <>


    <div className="bg-no-repeat lg:mt-10 bg-cover bg-center md:h-auto" style={{ backgroundImage: `url(${bgimage})` }}> 
    <div className="relative grid grid-cols-1 py-16 lg:grid-cols-2 lg:ps-0 lg:pe-0 sm:ps-12 sm:pe-12 ps-5 pe-5 gap-20 max-w-[1240px] mx-auto lg:px-8">
       <div className="flex flex-col justify-center lg:pr-4 lg:mt-8 lg:mb-4">
         <h1 className="text-3xl font-semibold text-[#ffb524] mb-4">100% Organic Foods</h1>
         <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-wide text-[#81c408] mb-6" style={{lineHeight:'5rem'}}>Organic Veggies & Fruits Foods.</h2>
         <div className="relative flex items-center pt-5">
           <input
             type="text"
             placeholder="Search..."
             className="border-2 border-[#ffb524] rounded-full px-6 py-4 focus:outline-none w-full"
           />
           <button
             type="submit"
             className="absolute right-0 border-2 hover:bg-[#ffb524] border-[#ffb524] bg-[#81c408] text-white rounded-full sm:px-6 py-4 px-3 "
           >
             Submit Now
           </button>
         </div>
       </div>

        <div className="relative lg:mt-8">
         <button
        className="absolute top-1/2 transform -translate-y-1/2 left-2 lg:left-20 text-white rounded-full z-10"
        onClick={goToPrev}
      >
        <FaChevronLeft className='text-2xl text-white' />
      </button>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-2 lg:right-16 text-white rounded-full z-10"
        onClick={goToNext}
      >
        <FaChevronRight className='text-2xl text-white' />
      </button>

      <div className="lg:w-[450px] md:h-auto rounded-2xl overflow-hidden lg:me-14 lg:mt-4 lg:ml-auto relative">
        <Slider ref={sliderRef} {...settings} className="relative">
          <div>
            <img src={image1} alt="Slide 1" className="w-full" />
            <div className="absolute inset-0 flex items-center justify-center">
            <a href='#'>
              <div className="rounded-lg px-7 py-3 bg-[#ecd824c7]">
                <span className="text-white text-xl tracking-wider font-semibold">Vegetables</span>
              </div>
              </a>
            </div>
          </div>
          <div>
            <img src={image2} alt="Slide 2" className="w-full bg-yellow-500 relative" />
            <div className="absolute inset-0 flex items-center justify-center">
            <a href='#'>
              <div className="rounded-lg px-8 py-3 bg-[#ecd824c7]">
                <span className="text-white text-xl tracking-wider font-semibold">Fruits</span>            
              </div>
              </a>
            </div>
          </div>
        </Slider>
      </div>
    </div>
    </div>
    </div>

    </>
  );
};

export default Hero;