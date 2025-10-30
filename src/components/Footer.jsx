import React from "react";
import headerImage from "/footer image.jpg"; // header image path


const handleSubscribe = () => {
  alert("Thank you for subscribing!");
}

export default function Footer() {
  return (
    <footer className="mt-20">
      {/* Header Image + Newsletter Section */}
      <div
        className="relative bg-cover bg-center text-center text-white py-16 px-4" 
        style={{
          backgroundImage: `url(${headerImage})`,
        }}
      >
        <div className="absolute inset-0 bg-pink-900/50"></div> {/* soft overlay */}
        <div className="relative z-10 max-w-2xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-semibold">
            Get more discount<br />on your beauty order 💄
          </h2>
          <p className="text-gray-100 mt-3">
            Join our mailing list for exclusive skincare tips and beauty deals.
          </p>

          <div className="flex flex-col sm:flex-row justify-center mt-6 gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-4 py-3 rounded-full w-full sm:w-2/3 focus:outline-none border border-pink-300 text-gray-700"
            />
            <button
            onClick={handleSubscribe}
             className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-gray-900 text-gray-300 py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Aesthetic Haven</h3>
            <p className="text-sm text-gray-400">
              Enhancing natural beauty with gentle, effective skincare.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-2">Products</h4>
            <ul className="space-y-2 text-sm">
              <li>Makeup</li>
              <li>Skincare</li>
              <li>Accessories</li>
              <li>Fragrances</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-2">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>FAQs</li>
              <li>Shipping & Returns</li>
              <li>Contact Us</li>
              <li>Track Order</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-2">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>Careers</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-2">Follow Us</h4>
            <div className="flex gap-3 mt-2 text-sm space-y-2">
              <a href="#" className="hover:text-pink-400">tiktok</a>
              <a href="#" className="hover:text-pink-400">twitter</a>
              <a href="#" className="hover:text-pink-400">Instagram</a>
              <a href="#" className="hover:text-pink-400">Youtube</a>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-500 mt-10 text-sm">
          © {new Date().getFullYear()} Aesthetic Haven — All Rights Reserved 💕
        </div>
      </div>
    </footer>
  );
}
