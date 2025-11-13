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

  const handleAddToCart = (product) => {
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
    <section style={{ backgroundColor: 'pink-100' }}id="all-products" className="py-16">
      <div className="px-4 text-center">
        <h2 className="text-4xl font-bold text-pink-600 mb-2">All Products</h2>
        <p className="text-black-600 mb-10">
          From soft pink tones to cozy textures — discover the latest aesthetic must-haves made to elevate your vibe.
        </p>

         {/* Horizontal scroll container */}
      <div className="grid grid-cols-4 md-grid-cols-4 gap-6 flex-nowrap space-x-6  overflow-x-auto py-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex-shrink-0 bg-white rounded-2xl shadow-lg w-60 p-4 "
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="font-bold text-lg">{product.name}</h3>
            <p className="text-gray-500 line-through">${product.oldPrice}</p>
            <p className="text-pink-500 font-semibold text-xl mb-2">${product.price}</p>

            {/* Add to Cart Button */}
            <button
              onClick={() => handleAddToCart(product)}
              className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

       {/* Cart Horizontal Row */}
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Cart ({cart.length} items)</h3>
        <div className="flex flex-row space-x-4 overflow-x-auto py-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
          {cart.map((item, index) => (
            <div key={index} className="flex-shrink-0 w-44 bg-white p-3 rounded-lg shadow-md">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-24 object-cover rounded mb-2"
              />
            
            </div>
          ))}
       </div>
        </div>
        </div>
    </section>
  );
}
export default AllProducts