import React from "react";
import cartImg from "../assets/shopping-cart.png";
const Navbar = ({ carts = [] }) => {
  const cartCount = carts.length;

  return (
    <nav className="py-4 px-4 md:px-12 bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
     
        <div className="text-3xl font-black text-[#7C3AED] cursor-pointer tracking-tighter">
          DigiTools
        </div>

       
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal gap-10 px-1 text-lg">
            <li className="cursor-pointer hover:text-[#7C3AED] transition">Products</li>
            <li className="cursor-pointer hover:text-[#7C3AED] transition">Features</li>
            <li className="cursor-pointer hover:text-[#7C3AED] transition">Pricing</li>
            <li className="cursor-pointer hover:text-[#7C3AED] transition">Testimonials</li>
            <li className="cursor-pointer hover:text-[#7C3AED] transition">FAQ</li>
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
            
            
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white shadow-sm animate-pulse">
                {cartCount}
              </span>
            )}
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