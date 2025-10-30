import { useState, useEffect } from "react";
import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Sophia Turner",
    role: "Beauty Influencer",
    image:
      "/beauty influencer potrait.jpg",
    text: "These beauty products completely transformed my skincare routine. The textures are luxurious, the scents are calming, and my skin has never felt more radiant!",
    photo:
      "/beauty influencer product image.jpg",
  },
  {
    id: 2,
    name: "Emma Rodriguez",
    role: "Makeup Artist",
    image:"/makeup artist potrait.jpg",
    text: "I’ve tried countless brands, but nothing compares to the glow these products give. They’re gentle yet so effective!",
    photo:
      "/make up set 2.jpg",
  },
  {
    id: 3,
    name: "Lena Carter",
    role: "Skincare Enthusiast",
    image:"/beauty enthusiast potrait.jpg",
    text: "I love how these products are made with natural ingredients. My skin feels soft, hydrated, and truly cared for!",
    photo:
      "/beauty enthusiast image.jpg",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const prevTestimonial = () => {
    setIndex((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextTestimonial = () => {
    setIndex((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const { name, role, image, text, photo } = testimonials[index];

  return (
    <section className="flex flex-col md:flex-row items-center justify-center px-4 md:px-20 py-16 bg-pink-100 transition-all duration-700 ease-in-out">
      {/* Left Side - Text */}
      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          What People Are Saying About Us
        </h2>

        <div className="flex items-center space-x-4">
          <img
            src={image}
            alt={name}
            className="w-14 h-14 rounded-full object-cover"
          />
          <div>
            <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>

        <p className="text-gray-600 text-lg leading-relaxed italic">
          “{text}”
        </p>

        <div className="flex items-center space-x-3">
          <button
            onClick={prevTestimonial}
            className="p-2 px-4 bg-pink-100 text-pink-600 rounded-full hover:bg-pink-200 transition text-xl"
          >
            ←
          </button>
          <button
            onClick={nextTestimonial}
            className="p-2 px-4 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition text-xl"
          >
            →
          </button>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0 md:pl-10">
        <img
          src={photo}
          alt="Beauty products"
          className="rounded-2xl shadow-lg object-cover w-full h-[350px]"
        />
      </div>
    </section>
  );
}

