import React from 'react';
import { useNavigate } from 'react-router-dom';
import About from './About';
import NewInStore from './NewInStore';
import AimSection from './AimSection';
import AllProducts from './AllProducts';
import Testimonials from './Testimonials';

const Header = () => {
  const navigate = useNavigate();

    const handleShopNow = () => {
    navigate('/create-account');
    };

    const scrollToShop = () => {
    const shopSection = document.getElementById('shop-section');
    if (shopSection) {
      shopSection.scrollIntoView({ behavior: 'smooth' });
    }
    };
  
    const scrollToAbout = () => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
    };

  return (
    <header
      className="relative h-100 bg-cover  bg-center bg-pink-100 text-white flex flex-col justify-between"
      style={{ backgroundImage: "url(/aesthetic.png)",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
       }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 "></div>

      {/* Navigation */}
      <nav className="absolute top-0 right-0 p-8 z-10">
        <ul className="flex space-x-10 text-lg font-medium">
          <li className="hover:text-pink-300 cursor-pointer">Home</li>
          <li className="hover:text-pink-300 cursor-pointer" onclick={scrollToAbout}>About</li>
          <li className="hover:text-pink-300 cursor-pointer" onclick={scrollToShop}>Shop</li>
          <li className="hover:text-pink-300 cursor-pointer">Contact</li>
        </ul>
      </nav>

      {/* Header content */}
      <div className="relative flex flex-col justify-center items-center text-center px-4 z-10 mt-16">
        <h1 className="text-5xl font-extrabold mb-4">Aesthetic Bliss</h1>
        <p className="max-w-xl text-lg mb-6 text-pink-100">
          Elevate your beauty and style with our exclusive collection of girly aesthetics and self-care essentials.
        </p>
        <button
          onClick={handleShopNow}
          className="bg-pink-400 hover:bg-pink-500 text-white px-8 py-3 rounded-full text-lg shadow-lg transition-transform hover:scale-105"
        >
          Shop Now
        </button>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 flex flex-wrap justify-center gap-8 py-6 px-4 bg-white bg-opacity-30 backdrop-blur-md rounded-t-2xl">
        <div className="text-center text-gray-900 bg-white bg-opacity-70 p-8 rounded-xl shadow-lg shadow-pink-400 min-w-[140px]">
          <h3 className="text-3xl font-bold text-pink-600">5+</h3>
          <p className="text-sm font-medium">Years of Beauty</p>
        </div>
        <div className="text-center text-gray-900 bg-white bg-opacity-70 p-8 rounded-xl shadow-lg shadow-pink-400 min-w-[140px]">
          <h3 className="text-3xl font-bold text-pink-600">30+</h3>
          <p className="text-sm font-medium">Stores Nationwide</p>
        </div>
        <div className="text-center text-gray-900 bg-white bg-opacity-70 p-8 rounded-xl shadow-lg shadow-pink-400 min-w-[140px]">
          <h3 className="text-3xl font-bold text-pink-600">15K+</h3>
          <p className="text-sm font-medium">Aesthetic Items Sold</p>
        </div>
        <div className="text-center text-gray-900 bg-white bg-opacity-70 p-8 rounded-xl shadow-lg shadow-pink-400 min-w-[140px]">
          <h3 className="text-3xl font-bold text-pink-600">100+</h3>
          <p className="text-sm font-medium">Unique Girl Styles</p>
        </div>
        < About />
        < NewInStore />
        < AimSection />
        < AllProducts />
        < Testimonials />
      </div>
    </header>
  );
}

export default Header;
