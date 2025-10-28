import { useRef, useState } from "react";
import React from "react";

const  products = [
  {id: 1,name: "The Ordinary Serum",oldPrice: 45,price: 35,image: "/serum.jpg",},
  {id: 2,name: "Mosturizer",oldPrice: 65,price: 50,image: "/mosturizer.jpg",},
  {id: 3,name: "Makeup Brushes",oldPrice: 80,price: 60,image: "/makeup brushes.jpg",},
  {id: 4,name: "Lu`mene",oldPrice: 30,price: 20,image: "/Lu`mene.jpg",},
  {id: 5,name: "Makeup kit",oldPrice: 55,price: 40,image: "/Makeup kit 2.jpg",},
  {id: 6,name: "Cosmetic Mokeup",oldPrice: 35,price: 25,image: "/Makeup kit.jpg",},
  {id: 7,name: "Facial Cleanser",oldPrice: 40,price: 30,image: "/Facial Cleanser.jpg",},
  {id: 8,name: "Lipstick Set",oldPrice: 50,price: 35,image: "/lip gloss.jpg",},
  {id: 9,name: "Eye Shadow Palette",oldPrice: 70,price: 65,image: "/Eye Shadow Palette.jpg",},
  {id: 10,name: "Perfume",oldPrice: 90,price: 80,image: "/coco Noir Chanel.jpg",},
  {id: 11,name: "Nail Polish Set",oldPrice: 25,price: 15,image: "/NailPolish.jpg",},
  {id: 12,name: "Hair Care Products",oldPrice: 60,price: 55,image: "/HairCareProducts.jpg",},
  {id: 13,name: "Nail Polish",oldPrice: 30,price: 20,image: "/Nail Polish.jpg",},
];

function AllProducts() {
  const scrollRef = useRef(null);
  const [cart, setCart] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const scroll = (direction) => {
    const { current } = scrollRef;
    const cardWidth = current.children[0].offsetWidth + 24; // width + gap
    const scrollAmount =
      direction === "left" ? current.scrollLeft - cardWidth : current.scrollLeft + cardWidth;
    current.scrollTo({ left: scrollAmount, behavior: "smooth" });
  };

  const handleScroll = () => {
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const totalCards = products.length;
    const index = Math.round((scrollLeft / (scrollWidth - clientWidth)) * (totalCards - 1));
    setActiveIndex(index);
  };

  return (
    <section id="all-products" className="py-16 bg-pink-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">All Products</h2>
        <p className="text-gray-500 mb-10">
          From soft pink tones to cozy textures — discover the latest aesthetic must-haves made to elevate your vibe.
        </p>

        {/* Product Carousel */}
        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center hover:bg-pink-100 transition z-10"
          >
            ←
          </button> 
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide py-4 px-2 snap-x"
          >
            {products.map((p) => (
              <div
                key={p.id}
                className="min-w-[240px] sm:min-w-[260px] bg-white rounded-2xl shadow-md hover:shadow-lg transition p-4 relative snap-start"
              >
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-56 object-cover rounded-xl transform hover:scale-105 transition duration-300"
                  />
                </div>

                <div className="mt-4 text-left">
                  <h3 className="text-lg font-semibold text-gray-800 truncate">
                    {p.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-pink-500 font-medium">${p.price}.00</p>
                    <p className="text-gray-400 line-through text-sm">
                      ${p.oldPrice}.00
                    </p>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => addToCart(p)}
                  className="absolute bottom-4 right-4 bg-pink-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg hover:bg-pink-600 transition"
                >
                  +
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center hover:bg-pink-100 transition z-10"
          >
            →
          </button>
        </div>

        {/* Dots Pagination */}
        <div className="flex justify-center items-center gap-2 mt-6">
          {products.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                activeIndex === index ? "bg-gray-800" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>

        {/* Cart summary */}
        <div className="mt-16 bg-white p-6 rounded-2xl shadow-md max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-pink-600 mb-4 text-center">
            🛒 Cart Summary
          </h3>
          {cart.length === 0 ? (
            <p className="text-gray-500 text-center">Your cart is empty</p>
          ) : (
            <ul className="space-y-3">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between border-b pb-2 text-gray-700"
                >
                  <span>
                    {item.name} (x{item.qty})
                  </span>
                  <span className="text-pink-500 font-semibold">
                    ${item.price * item.qty}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
export default AllProducts;

