import React from "react";
import cartImg from "../assets/shopping-cart.png";

const Navbar = () => {
 


  return (
    <nav className="py-4 px-4 md:px-12 bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
      
        <div className="text-3xl font-black text-[#7C3AED] cursor-pointer tracking-tighter">
          DigiTools
        </div>

   
        <div className="hidden lg:flex">
          <ul className="flex gap-8 text-[15px] font-bold text-gray-600">
            <li>Products</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Testimonials</li>
            <li>FAQ</li>
          </ul> 
        </div>

        <div className="flex items-center gap-6">
       
          <div className="relative cursor-pointer group">
            <div className="p-2 bg-gray-50 rounded-full group-hover:bg-purple-50 transition">
              <img
                src={cartImg}
                alt="Shopping cart"
                className="w-6 h-6 object-contain"
              />
            </div>
        
        
          </div>

          <a className="hidden md:block text-[15px] font-bold text-gray-700 cursor-pointer hover:text-[#7C3AED]">
            Login
          </a>

          <button className="bg-[#7C3AED] text-white px-7 py-2.5 rounded-full font-bold hover:bg-[#101727] transition-all shadow-md active:scale-95">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;