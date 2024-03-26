import React,{useState} from 'react';
import Navbar from '../../Navbar/Navbar';
import TopBar from '../../TopBar/TopBar';
import bgimage from '../../Assets/cart-page-header-img.jpg';
import { FaCartPlus, FaApple, FaSearch } from 'react-icons/fa';
import image1 from '../../Assets/grapes.jpg';
import image2 from '../../Assets/raspberries.jpg';
import image3 from '../../Assets/banana.jpg';
import image4 from '../../Assets/apricots.jpg';
import image5 from '../../Assets/orange.jpg';
import { LiaStarSolid } from "react-icons/lia";
import image6 from '../../Assets/featur-1.jpg'
import image7 from '../../Assets/featur-2.jpg'
import image8 from '../../Assets/featur-3.jpg'
import image9 from '../../Assets/banner-fruits.jpg'
import Footer from '../../Footer/Footer';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { GiBanana, GiGrapes, GiOrangeSlice, GiStrawberry } from "react-icons/gi";
import ScrollButton from '../../ScrollButton/ScrollButton';



const Shop = () => {

  const [price, setPrice] = useState(0);
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const allProducts = [
    { name: 'Grapes', price: '4.99 / kg', image: image1, category: 'Fruits' },
    { name: 'Raspberries', price: '4.00 / kg', image: image2, category: 'Fruits' },
    { name: 'Banana', price: '2.99 / kg', image: image3, category: 'Fruits' },
    { name: 'Orange', price: '3.49 / kg', image: image5, category: 'Fruits' },
    { name: 'Apricots', price: '3.49 / kg', image: image4, category: 'Fruits' },
    { name: 'Grapes', price: '3.49 / kg', image: image1, category: 'Fruits' },
    { name: 'Raspberries', price: '3.49 / kg', image: image2, category: 'Fruits' },
    { name: 'Orange', price: '3.49 / kg', image: image5, category: 'Fruits' },
    { name: 'Banana', price: '2.99 / kg', image: image3, category: 'Fruits' },
  ];

  return (
    <>

      <TopBar />
      <Navbar />

      
      <div className="relative">
        <div className="bg-no-repeat bg-cover mt-8 bg-center h-52 bg-blend-multiply bg-gray-400 flex justify-center items-center" style={{ backgroundImage: `url(${bgimage})` }}>
          <h1 className="text-center text-white text-4xl font-bold">Shop</h1>
        </div>

         
         <div className='max-w-[1240px] mx-auto'>

         <h1 className='text-4xl font-semibold text-gray-600 mt-28 lg:ps-5 lg:pe-5 ps-12 pe-12'>Fresh Fruits Shop</h1>

        <div className=" mt-12 lg:grid grid-cols-12 gap-4 lg:ps-5 lg:p-5 ps-12 pe-12">
        
          <div className="sm:col-span-3">


       {/* Search Input */}
       <div className="mb-4">        
      <div className="relative w-full mb-4">
      <input
        type="text"
        placeholder="Search"
        className="border border-gray-300 shadow-md p-4 outline-none px-4 rounded-lg w-full"
      />
      <button className="absolute top-0 right-0 p-4 border bg-gray-200 rounded-e-lg">
        <FaSearch className="text-gray-500 text-2xl" />
      </button>
    </div>
    </div>


            {/* Categories icons */}
            <div className="mb-4 space-y-5 mt-10">
              <h1 className="text-2xl font-semibold text-gray-600">Categories</h1>
              <div className="flex items-center mt-2 text-[#81c408] hover:text-[#FFB524]">
                <FaApple className="text-xl mr-2 " /> {/* Apple Icon */}
                <span>Apples</span>
                <span className='ms-auto text-gray-600'>(3)</span>
              </div>

              <div className="flex items-center mt-2 text-[#81c408] hover:text-[#FFB524]">
                <GiOrangeSlice className="text-xl mr-2" /> {/* orange Icon */}
                <span>Oranges</span>
                <span className='ms-auto text-gray-600'>(5)</span>
              </div>

              <div className="flex items-center mt-2 text-[#81c408] hover:text-[#FFB524]">
                <GiStrawberry className="text-xl mr-2" /> {/* strawberry Icon */}
                <span>Strawberry</span>
                <span className='ms-auto text-gray-600'>(2)</span>
              </div>


              <div className="flex items-center mt-2 text-[#81c408] hover:text-[#FFB524]">
                <GiBanana className="text-xl mr-2" /> {/* bananan Icon */}
                <span>Banana</span>
                <span className='ms-auto text-gray-600'>(8)</span>
              </div>


              <div className="flex items-center mt-2 text-[#81c408] hover:text-[#FFB524]">
                <GiGrapes className="text-xl mr-2 " /> {/* grapes Icon */}
                <span>Grapes</span>
                <span className='ms-auto text-gray-600'>(6)</span>
              </div>
                </div>
         



      {/* Price Range */}
       <div className="mb-4 mt-12">
      <h1 className="text-2xl font-semibold text-gray-600">Price</h1>
      <div className="mb-4 mt-3">
        <input
          type="range"
          className="w-full appearance-none accent-[#81c408] cursor-pointer h-3 bg-gray-200 rounded-lg outline-none"
          min="0"
          max="100"
          step="1"
          value={price}
          onChange={handlePriceChange}
          style={{
            background: `linear-gradient(to right, #81c408 0%, #81c408 ${price}%, #D1D5DB ${price}%, #D1D5DB 100%)`,
          }}
        />

      </div>
      <div className="flex justify-between">
      <span className="text-sm text-gray-500">{price}</span>
        <span className="text-xs text-gray-500">100</span>
      </div>
    </div>



            {/* Additional Radio Buttons */}
            <div>
              <h1 className="text-2xl font-semibold text-gray-600 mt-8">Additional</h1>
              <div className="flex items-center mt-5">
                <input type="radio" id="small" name="size" className="mr-2 accent-lime-600" />
                <label htmlFor="small" className='text-gray-600 ml-2 text-lg'>Organic</label>
              </div>


              <div className="flex items-center mt-2">
                <input type="radio" id="small" name="size" className="mr-2 accent-lime-600" />
                <label htmlFor="small" className='text-gray-600 ml-2 text-lg'>Fresh</label>
              </div>


              <div className="flex items-center mt-2">
                <input type="radio" id="small" name="size" className="mr-2 accent-lime-600" />
                <label htmlFor="small" className='text-gray-600 ml-2 text-lg'>Sale</label>
              </div>


              <div className="flex items-center mt-2">
                <input type="radio" id="small" name="size" className="mr-2 accent-lime-600" />
                <label htmlFor="small" className='text-gray-600 ml-2 text-lg'>Discount</label>
              </div>


              <div className="flex items-center mt-2">
                <input type="radio" id="small" name="size" className="mr-2 accent-lime-600" />
                <label htmlFor="small" className='text-gray-600 ml-2 text-lg'>Expired</label>
              </div>
            </div>




      {/* featured Products  */}
    <div className="grid grid-cols-1 mt-12 gap-8">
    <h1 className="text-2xl font-semibold text-gray-600 mt-8">Featured products</h1>
    
    {/* featured 1st Product */}
    <div className="rounded-lg flex flex-col md:flex-row items-center">
      <div className="overflow-hidden w-24 h-24 mb-4 md:mb-0">
        <img src={image6} alt="Product" className="w-full h-full object-cover" />
      </div>
      
      <div className="md:ml-7 text-center md:text-left">
      <div>
          <h1 className='text-lg text-gray-600 font-medium'>Apples</h1>
      </div>
        <div className="mb-2 flex mt-1">
          <span className="text-[#ffb524]">
            <LiaStarSolid className="text-xl" />
          </span>
          <span className="text-[#ffb524]">
            <LiaStarSolid className="text-xl" />
          </span>
          <span className="text-[#ffb524]">
            <LiaStarSolid className="text-xl" />
          </span>
          <span className="text-[#ffb524]">
            <LiaStarSolid className="text-xl" />
          </span>
          <span className="text-gray-500">
            <LiaStarSolid className="text-xl" />
          </span>
        </div>
        <div className="text-lg font-medium mb-2 text-gray-600 mt-1">
      $ 4.99
      <span className="line-through ml-4 text-red-600">$ 5.99</span>
    </div>
      
      </div>
    </div>

    {/* featured 2nd Product */}
    <div className="rounded-lg flex flex-col md:flex-row items-center">
      <div className="overflow-hidden w-24 h-24 mb-4 md:mb-0">
        <img src={image7} alt="Product" className="w-full h-full object-cover" />
      </div>
      
      <div className="md:ml-7 text-center md:text-left">
      <div>
          <h1 className='text-lg text-gray-600 font-medium'>Strawberry</h1>
      </div>
        <div className="mb-2 flex mt-1">
          <span className="text-[#ffb524]">
            <LiaStarSolid className="text-xl" />
          </span>
          <span className="text-[#ffb524]">
            <LiaStarSolid className="text-xl" />
          </span>
          <span className="text-[#ffb524]">
            <LiaStarSolid className="text-xl" />
          </span>
          <span className="text-gray-500">
            <LiaStarSolid className="text-xl" />
          </span>
          <span className="text-gray-500">
            <LiaStarSolid className="text-xl" />
          </span>
        </div>
        <div className="text-lg font-medium mb-2 text-gray-600 mt-1">
      $ 3.00
      <span className="line-through ml-4 text-red-600">$ 4.50</span>
    </div>
      
      </div>
    </div>



    {/* featured 3rd Product */}
    <div className="rounded-lg flex flex-col md:flex-row items-center">
      <div className="overflow-hidden w-24 h-24 mb-4 md:mb-0">
        <img src={image8} alt="Product" className="w-full h-full object-center" />
      </div>
      
      <div className="md:ml-7 text-center md:text-left">
      <div>
          <h1 className='text-lg text-gray-600 font-medium'>Broccoli</h1>
      </div>
        <div className="mb-2 flex mt-1">
          <span className="text-[#ffb524]">
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
          <span className="text-gray-500">
            <LiaStarSolid className="text-xl" />
          </span>
        </div>
        <div className="text-lg font-medium mb-2 text-gray-600 mt-1">
      $ 1.00
      <span className="line-through ml-4 text-red-600">$ 1.99</span>
    </div>    
      </div>
    </div>




    {/* Button */}
    <button className='rounded-full w-full py-5 mt-2 border border-[#ffb524] text-[#81c408] font-medium hover:bg-[#ffb524] hover:text-white'>
      View More
    </button>


   {/* fresh fruit banner image */}
      <div className="relative">
      <img src={image9} className="h-80 object-cover w-full" alt="Fresh Fruit Banner" />
      <div className="absolute inset-0 flex items-center justify-end">
        <div className="w-28">
          <h2 className="text-3xl font-bold text-[#ffb524]">Fresh Fruit Banner</h2>
        </div>
      </div>
    </div>
       </div>
          </div>


          {/* 6 fruits products cards */}
          <div className="sm:col-span-9">
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 gap-6'>
              {allProducts.map((product, index) => (
                <div key={index} className='bg-white border hover:shadow-2xl hover:shadow-gray-700 border-[#FFB524] rounded-lg overflow-hidden shadow-md'>
                  <div className='relative'>
                    <img
                      className='w-full h-52 object-cover transition-transform ease-in-out duration-500 delay-150 hover:scale-110 hover:-translate-y-1'
                      src={product.image}
                      alt={`Image ${index + 1}`}
                    />
                    <span className='absolute top-2 left-2 px-6 py-2 tracking-wide bg-[#FFB524] text-white font-medium rounded-lg'>
                      {product.category}
                    </span>
                  </div>
                  <div className='p-4'>
                    <h2 className='text-2xl font-semibold mb-4 mt-5 text-[#45595b]'>{product.name}</h2>
                    <p className='text-gray-500 mb-4'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero et venenatis
                      commodo.
                    </p>
                    <p className='text-[#45595b] text-xl font-semibold'>{`$${product.price}`}</p>
                    <button className='mt-4 px-4 py-2 border border-[#FFB524] hover:bg-[#FFB524] hover:text-white text-[#81c408] rounded-full flex items-center justify-center'>
                      <FaCartPlus className='w-6 h-6 mr-2' />
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>



    {/* Bottom Buttons */}            
    <div className="flex flex-wrap justify-center items-center space-x-4 mt-16">

    <button className="inline-flex items-center justify-center bg-white border border-[#FFB524] hover:bg-[#81c408] text-gray-700 font-semibold py-4 px-4 rounded-lg">
     <MdKeyboardDoubleArrowLeft />
      </button>

    <button className="inline-flex items-center justify-center bg-[#81c408] border border-[#FFB524] text-gray-700 font-semibold py-3 px-5 rounded-lg">
         1
      </button>
      <button className="inline-flex items-center justify-center bg-white border border-[#FFB524] hover:bg-[#81c408] text-gray-700 font-semibold py-3 px-5 rounded-lg">
         2
      </button>
      <button className="inline-flex items-center justify-center bg-white border border-[#FFB524] hover:bg-[#81c408] text-gray-700 font-semibold py-3 px-5 rounded-lg">
         3
      </button>
      <button className="inline-flex items-center justify-center bg-white border border-[#FFB524] hover:bg-[#81c408] text-gray-700 font-semibold py-3 px-5 rounded-lg">
         4
      </button>
      <button className="inline-flex items-center justify-center bg-white border border-[#FFB524] hover:bg-[#81c408] text-gray-700 font-semibold py-3 px-5 rounded-lg">
         5
      </button>
      <button className="inline-flex items-center justify-center bg-white border border-[#FFB524] hover:bg-[#81c408] text-gray-700 font-semibold py-3 px-5 rounded-lg">
         6
      </button>
      <button className="inline-flex items-center justify-center bg-white border border-[#FFB524] hover:bg-[#81c408] text-gray-700 font-semibold py-4 px-4 rounded-lg">
      <MdKeyboardDoubleArrowRight />
      </button>
    </div>       
            </div>
            
          </div>
        </div>
      </div>

      <Footer />
      <ScrollButton />

    </>
  );
}

export default Shop;