import React, { useState } from 'react';
import Navbar from '../../Navbar/Navbar';
import TopBar from '../../TopBar/TopBar';
import Footer from '../../Footer/Footer';
import { FaMinus, FaPlus, FaTimes } from 'react-icons/fa';
import image1 from '../../Assets/table-item1.png';
import image2 from '../../Assets/table-item2.jpg';
import image3 from '../../Assets/table-item3.jpg';
import bgimage from '../../Assets/cart-page-header-img.jpg';
import ScrollButton from '../../ScrollButton/ScrollButton';



const Cart = () => {
  const [products, setProducts] = useState([
    { id: 1, image: image1, name: 'Banana', price: 20, quantity: 1 },
    { id: 2, image: image2, name: 'Potatoes', price: 15, quantity: 1 },
    { id: 3, image: image3, name: 'Brocoli', price: 20, quantity: 1 },
  ]);

  const increaseQuantity = (id) => {
    setProducts(products.map(product => {
      if (product.id === id) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    }));
  };

  const decreaseQuantity = (id) => {
    setProducts(products.map(product => {
      if (product.id === id && product.quantity > 1) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    }));
  };

  const removeProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const calculateTotal = () => {
    return products.reduce((total, product) => total + (product.price * product.quantity), 0);
  };

  return (
    <>
      <TopBar />
      <Navbar />

      <div className="relative">
        <div className="bg-no-repeat bg-cover mt-8 bg-center h-52 bg-blend-multiply bg-gray-400 flex justify-center items-center" style={{ backgroundImage: `url(${bgimage})` }}>
          <h1 className="text-center text-white text-4xl font-bold">Cart</h1>
        </div>
        </div>

      <div className="w-full max-w-[1240px] mx-auto">
         {/* For small screens, display as grid */}
         <div className="sm:hidden grid grid-cols-1 gap-4 mt-28">
          {products.map(product => (
            <div key={product.id} className="bg-white shadow-md rounded-md p-4">
              <div className="flex justify-between items-center mb-4">
                <div className="w-1/2">
                  <img src={product.image} alt={`Product ${product.id}`} className="h-20 w-20 rounded-full" />
                </div>
                <div className="w-1/2">
                  <h2 className="text-lg font-semibold">{product.name}</h2>
                  <p className="text-gray-600">${product.price}</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <FaMinus onClick={() => decreaseQuantity(product.id)} className="cursor-pointer text-4xl select-none rounded-full bg-gray-200/80 text-gray-600 p-3" />
                  <span className="px-2 py-1">{product.quantity}</span>
                  <FaPlus onClick={() => increaseQuantity(product.id)} className="cursor-pointer text-4xl rounded-full select-none bg-gray-200/80 text-gray-600 p-3" />
                </div>
                <div>
                  <p className="text-gray-600">${product.price * product.quantity}</p>
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <button onClick={() => removeProduct(product.id)} className="text-red-500">
                  <FaTimes className="text-red-500 p-2 text-4xl rounded-full bg-gray-200/80" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* For larger screens, display as table */}
        <table className="hidden sm:table min-w-full divide-y divide-gray-200 mt-28">
          <thead className="bg-gray-50">
            <tr className='border-b border-b-slate-500'>
              <th scope="col" className="px-6 py-3 text-left font-medium text-gray-500 tracking-wider">
                Products
              </th>
              <th scope="col" className="px-6 py-3 text-left font-medium text-gray-500 tracking-wider">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left font-medium text-gray-500 tracking-wider">
                Price
              </th>
              <th scope="col" className="px-6 py-3 text-left font-medium text-gray-500 tracking-wider">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3 text-left font-medium text-gray-500 tracking-wider">
                Total
              </th>
              <th scope="col" className="px-4 py-3 font-medium text-gray-500 tracking-wider">
              Handle
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-300">
            {products.map(product => (
              <tr key={product.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img src={product.image} alt={`Product ${product.id}`} className="h-20 w-20 rounded-full" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {product.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  ${product.price}
                </td>
                <td className="px-6 py-4 mt-6 whitespace-nowrap  flex items-center">
                  <FaMinus onClick={() => decreaseQuantity(product.id)} className="cursor-pointer text-4xl select-none rounded-full bg-gray-200/80 text-gray-600 p-3" />
                  <span className="px-2 py-1">{product.quantity}</span>
                  <FaPlus onClick={() => increaseQuantity(product.id)} className="cursor-pointer text-4xl rounded-full select-none bg-gray-200/80 text-gray-600 p-3" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  ${product.price * product.quantity}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center text-lg font-medium">
                  <button onClick={() => removeProduct(product.id)}>
                    <FaTimes className="text-red-500 p-2 text-4xl rounded-full bg-gray-200/80" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="text-right mt-4 pe-10 font-medium">Total: ${calculateTotal()}</div>


      {/* Input and Button Section */}
      <div className="border-t border-gray-300 pt-16 flex-wrap mb-4 flex items-center">
      <input type="text" placeholder="Enter coupon code" className="px-5 py-3 mr-6 rounded-lg border border-gray-400 focus:outline-none" />
      <button className="border border-[#FFB524] rounded-full text-[#81c408] px-6 py-4 hover:text-white hover:bg-[#FFB524]">Apply Coupon</button>
    </div>


 {/* Card */}
<div className="flex flex-wrap gap-4 sm:mt-0 mt-10 justify-end">
  <div className="bg-gray-100 border shadow-md rounded-md sm:p-8 p-5 flex flex-col justify-between w-full sm:w-1/2 md:w-2/5 lg:w-1/3">
    <h1 className="text-4xl font-semibold mb-2 text-gray-600">Cart Total</h1>
    
    {/* Subtotal Section */}
    <div className="border-t border-gray-300 pt-4 mb-4 flex justify-between items-start">
      <div>
        <h2 className="text-lg font-semibold mb-2 text-gray-600">SubTotal</h2>
      </div>
      <p className="text-gray-600">$100.00</p>
    </div>
    
    {/* Shipping Section */}
    <div className="border-t border-gray-300 pt-4 mb-4 flex justify-between items-start">
      <div>
        <h2 className="text-lg font-semibold mb-2 text-gray-600">Shipping</h2>
      </div>
      <p className="text-gray-600 sm:ms-24 ms-12">Flat rate: $3.00 Shipping to Ukraine.</p>
    </div>
    
    {/* Total Section */}
    <div className="border-t border-gray-300 pt-4 mb-4 flex justify-between items-start">
      <div>
        <h2 className="text-lg font-semibold mb-2 text-gray-600">Total</h2>
      </div>
      <p className="text-gray-600">$100.00</p>
    </div>
    
    {/* Proceed Checkout Button */}
    <button className="border font-medium uppercase border-[#FFB524] rounded-full text-[#81c408] hover:bg-[#FFB524] hover:text-white px-4 py-3 w-full">Proceed Checkout</button>
  </div>
</div>
      </div>


      <Footer />
      <ScrollButton />

    </>
  );
}

export default Cart;