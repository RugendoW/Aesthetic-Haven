 import React from "react";

 const Stats = () =>{
    return(
      <section style={{backgroundcolor:"pink-100"}} className="w-full max-w-5xl mx-auto bg-pink-700 text-white rounded-2xl flex items-center justify-between p-6 md:p-10">
      
      <div className="flex flex-col items-center px-4">
        <h2 className="text-3xl font-bold">7+</h2>
        <p className="text-sm opacity-80">Year Experience</p>
      </div>

     <div className="w-px h-10 bg-pink-100"></div>


      <div className="flex flex-col items-center px-4">
        <h2 className="text-3xl font-bold">10+</h2>
        <p className="text-sm opacity-80">Opened in the country</p>
      </div>

      <div className="w-px h-10 bg-pink-100"></div>

      <div className="flex flex-col items-center px-4">
        <h2 className="text-3xl font-bold">260k+</h2>
        <p className="text-sm opacity-80">Products sold </p>
      </div>

      <div className="w-px h-10 bg-pink-100"></div>

      <div className="flex flex-col items-center px-4">
        <h2 className="text-3xl font-bold">10k+</h2>
        <p className="text-sm opacity-80">Varianty Products</p>
      </div>
      </section>
    );
};

export default Stats;
