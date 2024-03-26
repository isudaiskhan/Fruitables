import React,{useState} from 'react'
import Navbar from '../../Navbar/Navbar'
import TopBar from '../../TopBar/TopBar'
import Footer from '../../Footer/Footer';
import bgimage from '../../Assets/cart-page-header-img.jpg';
import image1 from '../../Assets/table-item1.png';
import image2 from '../../Assets/table-item2.jpg';
import image3 from '../../Assets/table-item3.jpg';
import ScrollButton from '../../ScrollButton/ScrollButton';



const Checkout = () => {
  const [products, setProducts] = useState([
    { id: 1, image: image1, name: 'Banana', price: 20, quantity: 1 },
    { id: 2, image: image2, name: 'Potatoes', price: 15, quantity: 1 },
    { id: 3, image: image3, name: 'Brocoli', price: 20, quantity: 1 },
  ]);

  const calculateTotal = () => {
    return products.reduce((total, product) => total + (product.price * product.quantity), 0);
  };

  return (
    <>
     
     <TopBar />
     <Navbar />

      <div className="relative">
        <div className="bg-no-repeat bg-cover mt-8 bg-center h-52 bg-blend-multiply bg-gray-400 flex justify-center items-center" style={{ backgroundImage: `url(${bgimage})` }}>
          <h1 className="text-center text-white text-4xl font-bold">Checkout</h1>
        </div>
        </div>
        
        <div className='w-11/12 mx-auto mt-28'>
          <h1 className='ms-2 sm:text-4xl text-3xl font-semibold text-gray-700 tracking-wide'>Billing details</h1>
        </div>


       {/* Form */}
      <div class="mt-8 lg:flex flex-wrap">
        <form class="max-w-[1240px] mx-auto bg-white rounded px-8 pt-6 pb-8 mb-4 w-full lg:w-2/4">
            <div class="mb-4 flex flex-wrap -mx-3">
                <div class="w-full md:w-2/4 px-3 mb-6 md:mb-0">
                    <label class="block text-gray-600 font-semibold mb-2" for="firstName">
                        First Name
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#FFB524] focus:shadow-outline" id="firstName" type="text" placeholder="First Name" />
                </div>
                <div class="w-full md:w-1/2 px-3">
                    <label class="block text-gray-600 font-semibold mb-2" for="lastName">
                        Last Name
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#FFB524] focus:shadow-outline" id="lastName" type="text" placeholder="Last Name" />
                </div>
            </div>
            <div class="mb-4">
                <label class="block text-gray-600 font-semibold mb-2" for="companyName">
                    Company Name
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#FFB524] focus:shadow-outline" id="companyName" type="text" placeholder="Company Name" />
            </div>
            <div class="mb-4">
                <label class="block text-gray-600 font-semibold mb-2" for="address">
                    Address
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#FFB524] focus:shadow-outline" id="address" type="text" placeholder="House Number / Street Name" />
            </div>
            <div class="mb-4">
                <label class="block text-gray-600 font-semibold mb-2" for="townCity">
                    Town/City
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#FFB524] focus:shadow-outline" id="townCity" type="text" placeholder="Town/City" />
            </div>
            <div class="mb-4">
                <label class="block text-gray-600 font-semibold mb-2" for="country">
                    Country
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#FFB524] focus:shadow-outline" id="country" type="text" placeholder="Country" />
            </div>
            <div class="mb-4">
                <label class="block text-gray-600 font-semibold mb-2" for="zipcode">
                    Passcode/Zip
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#FFB524] focus:shadow-outline" id="zipcode" type="number" placeholder="Passcode/Zip" />
            </div>
            <div class="mb-4">
                <label class="block text-gray-600 font-semibold mb-2" for="mobile">
                    Mobile
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#FFB524] focus:shadow-outline" id="mobile" type="number" placeholder="Mobile" />
            </div>
            <div class="mb-4">
                <label class="block text-gray-600 font-semibold mb-2" for="email">
                    Email Address
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#FFB524] focus:shadow-outline" id="email" type="email" placeholder="Email Address" />
            </div>

            <div class="mb-4">
                <label class="block text-gray-600 font-semibold mb-2">Choose an option:</label>
                <div class="flex items-center mb-2">
                    <input type="radio" class="form-radio h-4 w-4 accent-lime-600" name="accountType" value="create" />
                    <span class="ml-2 text-gray-700">Create an Account</span>
                </div>
                <div class="flex items-center">
                    <input type="radio" class="form-radio h-4 w-4 accent-lime-600" name="accountType" value="differentAddress" />
                    <span class="ml-2 text-gray-700">Ship to a different address</span>
                </div>
            </div>

            <div class="mb-4">
                <label class="block text-gray-600 font-semibold mb-2" for="message">
                    Additional Information
                </label>
                <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#FFB524] focus:shadow-outline" id="message" rows={14} placeholder="Enter your message here..."></textarea>
            </div>
        </form>




       {/* For small screens, display as grid */}
        <div className="sm:hidden grid grid-cols-1 gap-4 mt-28 lg:ps-0 lg:pe-0 ps-8 pe-8">
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
               
                <div>
                  <p className="text-gray-600">${product.price * product.quantity}</p>
                </div>
                <td className="px-9 py-2 whitespace-nowrap">
                  {product.quantity}
                </td>
              </div>        
            </div>
          ))}
        </div>



        {/* For larger screens, display as Table */}
        <div className="w-full lg:w-2/5  mx-auto lg:ps-0 lg:pe-0 ps-8 pe-8">
       <table className="hidden sm:table min-w-full divide-y divide-gray-200 mt-12">
          <thead className="bg-gray-50">
            <tr className='border-b border-b-slate-500'>
              <th scope="col" className="px-3 py-3 text-left font-medium text-gray-500 tracking-wider">
                Products
              </th>
              <th scope="col" className="px-3 py-3 text-left font-medium text-gray-500 tracking-wider">
                Name
              </th>
              <th scope="col" className="px-3 py-3 text-left font-medium text-gray-500 tracking-wider">
                Price
              </th>
              <th scope="col" className="px-3 py-3 text-left font-medium text-gray-500 tracking-wider">
                Quantity
              </th>
              <th scope="col" className="px-3 py-3 text-left font-medium text-gray-500 tracking-wider">
                Total
              </th>       
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-300">
            {products.map(product => (
              <tr key={product.id}>
                <td className="px-4 py-4 whitespace-nowrap">
                  <img src={product.image} alt={`Product ${product.id}`} className="h-20 w-20 rounded-full" />
                </td>
                <td className="px-2 py-2 whitespace-nowrap">
                  {product.name}
                </td>
                <td className="px-5 py-2 whitespace-nowrap">
                  ${product.price}
                </td>
               
                <td className="px-9 py-2 whitespace-nowrap">
                  {product.quantity}
                </td>

                <td className="px-5 py-2 whitespace-nowrap">
                ${calculateTotal()}
                </td>          
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-right mt-4 pe-10 font-medium">Total: ${calculateTotal()}</div>




        <div className="container mx-auto mt-8">
        <div className="max-w-[1240px] mx-auto bg-white shadow-lg border rounded px-5 pt-6 pb-8 mb-4">
          <h1 className="text-gray-600 font-semibold mb-6">Shipping</h1>
          
          <div className="mb-4 text-center space-y-6">
            <div className="flex items-center mb-2">
              <input type="checkbox" className="form-checkbox h-5 w-5 accent-lime-600" />
              <span className="ml-2 text-gray-600">Free Shipping</span>
            </div>
            <div className="flex items-center mb-2">
              <input type="checkbox" className="form-checkbox h-5 w-5 accent-lime-600" />
              <span className="ml-2 text-gray-600">Flat rate: $15.00</span>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="form-checkbox h-5 w-5 accent-lime-600" />
              <span className="ml-2 text-gray-600">Local Pickup: $8.00</span>
            </div>
          </div>
        </div>
      </div>

     
      <div className="container mx-auto">
        <div className="max-w-[1240px] mx-auto border bg-white shadow-lg rounded px-5 pt-6 pb-8 mb-4">
          <div className="mt-2 text-center flex justify-between items-center">
            <h1>Total</h1>
            <h1 className="ml-auto">$135.00</h1>
          </div>
        </div>
      </div>


      <div className="container mx-auto mt-8">
        <div className="max-w-[1240px] mx-auto border bg-white shadow-md rounded px-5 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <input type="checkbox" className="form-checkbox h-5 w-5 accent-lime-600" />
              <span className="ml-2 text-gray-600">Direct Bank Transfer</span>
            </div>
            <p className="text-gray-600 mt-4">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
          </div>
        </div>
      </div>


      <div className="container mx-auto">
        <div className="max-w-[1240px] border space-y-10 mx-auto bg-white shadow-lg rounded px-5 pt-6 pb-8 mb-4">
         
          <div className="mb-4 text-center">
            <div className="flex items-center mb-2">
              <input type="checkbox" className="form-checkbox h-5 w-5 accent-lime-600" />
              <span className="ml-2 text-gray-600">Check Payments</span>
            </div>
          </div>

          <div className="mb-4 text-center">
            <div className="flex items-center mb-2">
              <input type="checkbox" className="form-checkbox h-5 w-5 accent-lime-600" />
              <span className="ml-2 text-gray-600">Cash On Delivery</span>
            </div>
          </div>

          <div className="mb-4 text-center">
            <div className="flex items-center mb-2">
              <input type="checkbox" className="form-checkbox h-5 w-5 accent-lime-600" />
              <span className="ml-2 text-gray-600">Paypal</span>
            </div>

          </div>
          
        </div>
      </div>

           <div className='border p-4 font-semibold cursor-pointer mt-5 border-[#FFB524] text-[#81c408] hover:bg-[#FFB524] rounded-md hover:text-white text-center'>
            <button className=''>PLACE ORDER</button>
          </div>
        </div>
      </div>

    <Footer />
    <ScrollButton />
      
    </>
  )
}

export default Checkout