import React from 'react';
import Stats from './Stats'
import About from './About';
import NewInStore from './NewInStore';
import AimSection from './AimSection';
import AllProducts from './AllProducts';
import Testimonials from './Testimonials';
import AuthForm from './AuthForm';
import Footer from './Footer';

const Header = () => {
  const handleShopNow = () => {
    const shopSection = document.getElementById("shop-section");
    if (shopSection) shopSection.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) aboutSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Header Section */}
      <header 
      className="relative h-100 bg-cover   bg-center bg-pink-100  flex flex-col justify-between"
        style={{
          backgroundImage: 'url(/aesthetic.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          
        }}
      >
<nav className='absolute top-0 left-0 test-black-900 font-bold font-serif italic tracking-wide '>
Aesthetic Haven
</nav>

        {/* Navigation */}
        <nav className="absolute top-0 right-0 z-10">
          <ul className="flex space-x-10 text-lg text-pink-600 p-4 font-medium justify-between">
            <li className="hover:text-pink-300 cursor-pointer">Home</li>
            <li className="hover:text-pink-300 cursor-pointer" onClick={scrollToAbout}>About</li>
            <li className="hover:text-pink-300 cursor-pointer" onClick={handleShopNow}>Shop</li>
            <li className="hover:text-pink-300 cursor-pointer">Contact</li>
          </ul>
        </nav>

        {/* Header content */}
        <div className="relative flex flex-col justify-center items-center text-center px-4 z-10 mt-16">
          <h1 className="text-5xl font-extrabold mb-4 text-black">Aesthetic Haven</h1>
          <p className="max-w-xl text-lg mb-6 text-black italic font-bold">
            Elevate your beauty and style with our exclusive collection of girly aesthetics and self-care essentials.
          </p>
          <button
            onClick={handleShopNow}
            className="bg-pink-400 hover:bg-pink-500 text-white px-8 py-3 rounded-full text-lg shadow-lg transition-transform hover:scale-105"
          >
            Shop Now
          </button>
        </div>
      </header>

      {/* Page Sections */}
      <Stats />
      <About />
      <NewInStore />
      <AimSection />
      <AllProducts />
      <Testimonials />
      <AuthForm />
      <Footer />
    </div>
  );
};


export default Header;

