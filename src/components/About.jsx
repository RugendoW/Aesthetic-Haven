import React from 'react';

const  About = () => {

  return (
    <section id="about-section" className="flex flex-col md:flex-row items-center justify-center gap- py-16 px-6 bg-pink-50">
      {/* Left: Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="/beauty-products.jpg"
          alt="Aesthetic beauty products"
          className="rounded-3xl shadow-xl w-full max-w-md object-cover"
        />
      </div>

      {/* Right: Text Content */}
      <div className="w-full md:w-1/2 text-gray-800">
        <h2 className="text-4xl font-extrabold text-pink-600 mb-4">
          We Create Your Beauty More Aesthetic
        </h2>

        <p className="text-lg text-gray-700 mb-6">
          Aesthetic Bliss is your one-stop shop for all things beautiful.
          We specialize in products that enhance your natural charm — from
          skincare and fragrances to accessories that define your personal style.
        </p>

        {/* Services */}
        <div className="space-y-5">
          <div>
            <h3 className="flex items-center gap-2 text-xl font-semibold text-pink-500">
              Skincare & Glow Essentials
            </h3>
            <p className="text-gray-600 text-md max-w-md">
              Carefully selected beauty products designed to nourish your skin
              and enhance your glow every day.
            </p>
          </div>

          <div>
            <h3 className="flex items-center gap-2 text-xl font-semibold text-pink-500">
              Self-Care & Lifestyle
            </h3>
            <p className="text-gray-600 text-md max-w-md">
              Pamper yourself with our curated range of self-care and beauty items
              — because you deserve the best version of you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
