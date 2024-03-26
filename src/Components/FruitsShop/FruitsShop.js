import React, { useState } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import image1 from '../Assets/grapes.jpg';
import image2 from '../Assets/raspberries.jpg';
import image3 from '../Assets/banana.jpg';
import image4 from '../Assets/apricots.jpg';
import image5 from '../Assets/orange.jpg';

const FruitsShop = () => {
  const [activeButton, setActiveButton] = useState('All Products');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const allProducts = [
    { name: 'Grapes', price: '4.99 / kg', image: image1, category: 'Vegetables' },
    { name: 'Raspberries', price: '4.00 / kg', image: image2, category: 'Vegetables' },
    { name: 'Banana', price: '2.99 / kg', image: image3, category: 'Fruits' },
    { name: 'Apricots', price: '5.50 / kg', image: image4, category: 'Bread' },
    { name: 'Orange', price: '3.49 / kg', image: image5, category: 'Fruits' },
    { name: 'Apricots', price: '3.49 / kg', image: image4, category: 'Fruits' },
    { name: 'Grapes', price: '3.49 / kg', image: image1, category: 'Bread' },
    { name: 'Raspberries', price: '3.49 / kg', image: image2, category: 'Meat' },
    { name: 'Orange', price: '3.49 / kg', image: image5, category: 'Meat' },
    { name: 'Banana', price: '2.99 / kg', image: image3, category: 'Meat' },
  ];

  let filteredProducts;
  if (activeButton === 'All Products') {
    filteredProducts = allProducts.filter(product => product.category !== 'All Products').slice(0, 8); // Exclude last two Meat category products
  } else if (activeButton === 'Meat') {
    filteredProducts = allProducts.filter((product) => product.category === 'Meat').slice(-3); // Show only last two Meat category products
  } else {
    filteredProducts = allProducts.filter((product) => product.category === activeButton);
  }

  const categories = ['All Products', 'Vegetables', 'Fruits', 'Bread', 'Meat']; // Add more categories if needed

  return (
    <>
      <div className='max-w-[1240px] mx-auto mt-36 sm:ps-0 sm:pe-0 ps-12 pe-12'>
        <div className='flex items-center flex-wrap'>
          <h1 className='text-[#45595b] w-full md:w-80 text-4xl font-semibold' style={{ lineHeight: '3rem' }}>
            Our Organic Products
          </h1>
          <div className='flex flex-wrap justify-center md:justify-start md:ml-auto space-y-2 md:space-y-0 space-x-4'>
            {categories.map(category => (
              <button
                key={category}
                className={`py-2 px-4 sm:px-6 rounded-full ${
                  activeButton === category ? 'bg-[#FFB524] text-white' : 'bg-gray-200 text-[#45595b]'
                }`}
                onClick={() => handleButtonClick(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12'>
          {filteredProducts.map((product, index) => (
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
      </div>
    </>
  );
};

export default FruitsShop;