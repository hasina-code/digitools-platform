import React from 'react';
import bannerImg from "../assets/banner.png";
import playImg from "../assets/Play.png";

const Banner = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 max-w-7xl mx-auto gap-12">
      
      <div className="md:w-1/2 space-y-6 text-center md:text-left">
        
    
        <div className="inline-flex items-center gap-3 bg-[#EEF2FF] border border-[#C7D2FE] px-5 py-2.5 rounded-full shadow-lg shadow-purple-50">
          <div className="relative w-3 h-3 rounded-full bg-[#7C3AED]/20 flex items-center justify-center">
            <div className="absolute inset-0 bg-[#7C3AED] rounded-full animate-pulse opacity-60"></div>
            <div className="relative w-2 h-2 bg-[#7C3AED] rounded-full"></div>
          </div>
          <span className="text-[#7C3AED] text-sm font-bold tracking-tight">
            New: AI-Powered Tools Available
          </span>
        </div>
        

        <h1 className="text-5xl md:text-6xl font-black text-[#101727] leading-tight">
          Supercharge Your <br className="hidden md:block" />
          <span className="text-[#7C3AED]">Digital Workflow</span>
        </h1>
        <p className="text-[#627382] text-lg leading-relaxed max-w-lg">
          Access premium AI tools, design assets, templates, and productivity 
          software—all in one place. Start creating faster today.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-4">
          <button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-10 py-4 rounded-full font-bold transition-all shadow-lg shadow-purple-200 active:scale-95">
            Explore Products
          </button>
          
          <button className="flex items-center justify-center gap-3 border-2 border-purple-100 hover:border-purple-400 text-purple-600 px-8 py-4 rounded-full font-bold transition-all active:scale-95">
            <img src={playImg} className="w-5 h-5 object-contain" alt="Play" /> 
            Watch Demo
          </button>
        </div>
      </div>

      <div className="md:w-1/2 relative">
        <div className="absolute -inset-4 bg-purple-200 rounded-[50px] blur-3xl opacity-20 -z-10"></div>
        <img 
          src={bannerImg} 
          className="rounded-[40px] shadow-2xl w-full" 
          alt="Banner Showcase" 
        />
      </div>
    </section>
  );
};

export default Banner;