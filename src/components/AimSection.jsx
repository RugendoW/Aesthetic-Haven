import React from 'react';

const AimSection = () => {
  return (
    <section
      id="aim-section"
      className="flex flex-col md:flex-row items-center justify-between py-20 px-8 bg-pink-50"
    >
      {/* Left Side - Text */}
      <div className="md:w-1/2 text-gray-800">
        <h2 className="text-4xl font-extrabold text-pink-600 mb-4">Our Beauty Philosophy and Our Mission</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-8">
          At <span className="text-pink-500 font-semibold">Aesthetic Bliss</span>, our aim is to empower every girl to
          embrace her natural beauty and personal style. We believe beauty is not about perfection —
          it's about confidence, self-love, and expression.
        </p>

        <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-pink-500 mb-2"> Natural Beauty</h3>
            <p className="text-gray-600">
              We promote gentle, natural products that nourish your skin and enhance your glow.
            </p>

            <h3 className="text-2xl font-semibold text-pink-500 mb-2"> Confidence</h3>
            <p className="text-gray-600">
              Our goal is to make every girl feel radiant and confident in her unique way.
            </p>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src="/beauty.jpg" 
          alt="Aesthetic Beauty"
          className="rounded-2xl shadow-xl w-[400px] object-cover"
        />
      </div>
    </section>
  );
}

export default AimSection;
