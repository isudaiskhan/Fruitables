import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { IoMdMenu } from "react-icons/io";
import { FaSearch, FaShoppingBag, FaUser, FaTimes } from 'react-icons/fa';
import { NavLink, useLocation } from 'react-router-dom';


const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const location = useLocation(); // Use useLocation instead of useHistory

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when location changes
    setMobileMenu(false);
    // Scroll to the top of the page when navigating to a new location
    window.scrollTo(0, 0);
  }, [location]);

  const navItems = [
    { id: 'home', label: 'Home', link: '/' },
    { id: 'shop', label: 'Shop', link: '/shop' },
    { id: 'cart', label: 'Cart', link: '/cart' },
    { id: 'checkout', label: 'Checkout', link: '/checkout' },
    { id: 'contact', label: 'Contact', link: '/contact' },
  ];

  const triggerMobileNavItem = (target) => {
    setMobileMenu(false);
    const targetElement = document.querySelector(target);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenu(false);
  };




  return (
    <>
      <nav className={`sticky top-0 w-full bg-white z-50 transition duration-300 ${hasScrolled ? 'top-0 shadow-xl' : ''}`}>
        <div className="relative max-w-[1240px] mx-auto sm:ps-9 sm:pe-9 ps-5 pe-5 xl:ps-0 xl:pe-0">
          <div className="xl:py-4 py-6 mx-auto flex items-center justify-between xl:justify-start">
            <div>
              <NavLink to="/">
                <h1 className='sm:text-5xl text-3xl font-semibold text-[#81c408]'>Fruitables</h1>
              </NavLink>
            </div>
            <div className="hidden xl:flex items-center space-x-24 ml-auto">
            <ul className="flex items-center space-x-3">
              {navItems.map((item) => (
              <li
            key={item.id}
            className={`p-5 mx-1 border-transparent relative group cursor-pointer`}
          >
            <NavLink
              to={item.link}
              onClick={() => setMobileMenu(false)} // Close mobile menu when navigating
              className={`text-gray-500 hover:text-[#81c408]`}
              activeClassName="text-[#81c408] underline" // Apply green text color and underline when link is active
              style={{ color: location.pathname === item.link ? '#81c408' : '' }} // Apply green text color when link is active
            >
              {item.label}
              <span
                className={`absolute bottom-0 left-0 w-full h-[3px] bg-[#81c408] ${
                  location.pathname === item.link ? 'scale-x-100' : 'scale-x-0'
                } transition-transform origin-bottom-left`}
              ></span>

            </NavLink>
          </li>
        ))}
      </ul>
              <div className="flex items-center space-x-8">
                <div className="relative">
                  <button onClick={toggleSearch} className="rounded-full hover:bg-[#ffb524] border border-[#ffb524] p-3 text-white focus:outline-none">
                    <FaSearch className="text-[#81c408] text-xl" />
                  </button>
                  {isSearchOpen && (
                    <div className="fixed inset-0 bg-gray-200 bg-opacity-90 z-50 flex justify-center items-center">
                      <div className="bg-white rounded-lg shadow-md w-2/3 relative">
                        <input
                          type="text"
                          placeholder="Search"
                          className="py-4 rounded-md w-full pl-5 pr-12"
                        />
                        <button onClick={toggleSearch} className="absolute top-0 right-0 p-4 bg-gray-300 rounded-md">
                          <FaSearch className="text-gray-500 text-2xl" />
                        </button>
                      </div>
                      <button onClick={toggleSearch} className="absolute top-4 right-3 mt-2 mr-2">
                        <FaTimes className="text-gray-600 text-2xl" />
                      </button>
                    </div>
                  )}
                </div>
                <div className="relative text-[#81c408]">
                  <NavLink to='#'>
                    <FaShoppingBag className='text-3xl hover:text-[#7da82e]' />
                    <div className="absolute -top-1 -right-2 bg-[#FFB524] text-gray-600 rounded-full w-5 h-5 flex justify-center items-center">3</div>
                  </NavLink>
                </div>
                <div className="relative text-[#81c408]">
                  <NavLink to='#'>
                    <FaUser className="text-3xl hover:text-[#7da82e]" />
                    <div className="absolute -top-1 -right-2 bg-[#FFB524] text-gray-600 rounded-full w-5 h-5 flex justify-center items-center">5</div>
                  </NavLink>
                </div>
              </div>
            </div>

            <div className="block xl:hidden">
              <button onClick={() => setMobileMenu(!mobileMenu)}>
                {mobileMenu ? (
                  <IoMdMenu className="text-3xl text-[#81c408]" />
                ) : (
                  <IoMdMenu className="text-4xl text-[#81c408]" />
                  )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      

      {/* Mobile Menu */}
      {mobileMenu && (
          <div className="fixed inset-0 z-50 min-h-screen bg-black bg-opacity-70">
          <div className="absolute right-0 min-h-screen w-3/5 py-4 px-8 shadow md:w-1/3 bg-[#81c408] z-50">
            <button className="absolute top-0 right-0 mt-4 mr-4" onClick={closeMobileMenu}>
              <AiOutlineClose className="text-4xl text-white hover:text-gray-300" />
            </button>
            <ul className="mt-8 flex flex-col space-y-5">
              {navItems.map((item) => (
                <li key={item.id} className="py-2">
                  <NavLink
                    to={item.link}
                    className="cursor-pointer pt-0.5  uppercase text-white"
                    activeClassName="font-semibold"
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>


            <div className="flex flex-wrap items-center space-x-6">
              <div className="relative">
                <button onClick={toggleSearch} className="rounded-full mt-3 border hover:bg-[#ffb524] border-[#ffb524] p-3 text-white focus:outline-none">
                  <FaSearch className="text-white text-xl" />
                </button>
                {isSearchOpen && (
                  <div className="fixed inset-0 bg-gray-200 bg-opacity-90 z-50 flex justify-center items-center">
                    <div className="bg-white rounded-lg shadow-md w-2/3 relative">
                      <input
                        type="text"
                        placeholder="Search"
                        className="py-4 rounded-md w-full pl-5 pr-12"
                      />
                      <button onClick={toggleSearch} className="absolute top-0 right-0 p-4 bg-gray-300 rounded-md">
                        <FaSearch className="text-gray-500 text-2xl" />
                      </button>
                    </div>
                    <button onClick={toggleSearch} className="absolute top-4 right-3 mt-2 mr-2">
                      <FaTimes className="text-gray-600 text-2xl" />
                    </button>
                  </div>
                )}
              </div>
              <div className="relative mt-3 text-white flex-shrink-0">
                <NavLink to='#'>
                  <FaShoppingBag className='text-3xl hover:text-[#7da82e]' />
                  <div className="absolute -top-1 -right-2 bg-[#FFB524] text-gray-600 rounded-full w-5 h-5 flex justify-center items-center">3</div>
                </NavLink>
              </div>
              <div className="relative mt-3 text-white flex-shrink-0">
                <NavLink to='#'>
                  <FaUser className="text-3xl hover:text-[#7da82e]" />
                  <div className="absolute -top-1 -right-2 bg-[#FFB524] text-gray-600 rounded-full w-5 h-5 flex justify-center items-center">5</div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        )}
    </>
  );
};

const MobileNavItem = ({ children, onClick }) => {
  return (
    <li className="py-2">
      <span onClick={onClick} className="cursor-pointer pt-0.5  uppercase text-white">
        {children}
      </span>
    </li>
  );
};

export default Navbar;