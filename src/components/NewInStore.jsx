import React from 'react';  

const NewInStore = () => {
    
  const products = [
    { name: "Perfume", img: "/Bleu DE Chanel.jpg" },
    { name: "Lip Gloss", img: "/lip gloss.jpg" },
    { name: "Mosturizer", img: "/mosturizer.jpg" },
    { name: "Body Lotion", img: "/lotion.jpg" },

  ];

  return (
    <section id="shop-section" className="py-20 px-8 bg-pink-50 text-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        
        {/* Left Text Section */}
        <div className="w-full md:w-1/3">
          <h2 className="text-3xl font-extrabold mb-4 text-pink-600">
            New In <br /> Store Now 
          </h2>
          <p className="text-gray-600 mb-6">
            Discover our latest beauty essentials — fresh arrivals that bring your glow to life.
          </p>
          < button
          onClick={()=>{
            const Section = document.getElementById("all-products");
            Section?.scrollIntoView({ behavior: "smooth" });
          }}
            className="text-pink-500 font-medium hover:underline flex items-center gap-2"
          >
            Check All →
          </button>
          
        </div>

        {/* Right Product Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full md:w-2/3">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-3 left-3 bg-pink-500/80 text-white px-4 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
                {product.name}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default NewInStore;
