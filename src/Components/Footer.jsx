import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-[#0B1120] text-white pt-24 pb-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
        
        {/* Brand Info */}
        <div className="md:col-span-4 space-y-6">
          <h2 className="text-3xl font-black">DigiTools</h2>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
          </p>
        </div>

        {/* Links Grid */}
        <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold mb-6 text-white">Product</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer">Features</li>
              <li className="hover:text-white cursor-pointer">Pricing</li>
              <li className="hover:text-white cursor-pointer">Templates</li>
              <li className="hover:text-white cursor-pointer">Integrations</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-white">Company</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Press</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-white">Resources</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer">Documentation</li>
              <li className="hover:text-white cursor-pointer">Help Center</li>
              <li className="hover:text-white cursor-pointer">Community</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-white">Social Links</h4>
          <div>

  <div className="flex gap-4">
    
    {/* Instagram */}
    <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#0F172A] ">
      <AiFillInstagram size={22} />
    </a>

    {/* Facebook */}
    <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#0F172A]">
      <FaFacebookSquare size={20} />
    </a>

    {/* X (Twitter) */}
    <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#0F172A]">
      <FaXTwitter size={20} />
    </a>

  </div>
</div>
  </div>
  </div>
  </div>

     
    {/* Separator Line */}
  <div className="max-w-7xl mx-auto border-t border-gray-800 my-10"></div>
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
    <p className="text-gray-500 text-sm">
      © 2026 Digitools. All rights reserved.
    </p>
    
    <div className="flex gap-8 text-gray-500 text-sm">
      <a href="#">Privacy Policy</a>
      <a href="#" >Terms of Service</a>
      <a href="#">Cookies</a>
    </div>
  </div>
    </footer>
  );
};

export default Footer;