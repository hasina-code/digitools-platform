import React from 'react';
import userIcon from "../assets/user.png";
import packageIcon from "../assets/package.png";
import rocketIcon from "../assets/rocket.png";

const Steps = () => {
  const stepsData = [
    { 
      id: "01", 
      title: "Create Account", 
      desc: "Sign up for free in seconds and join our community.", 
      icon: userIcon 
    },
    { 
      id: "02", 
      title: "Choose Products", 
      desc: "Select the tools and assets that fit your workflow.", 
      icon: packageIcon 
    },
    { 
      id: "03", 
      title: "Start Creating", 
      desc: "Download and launch your projects with premium tools.", 
      icon: rocketIcon 
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-black text-[#101727] mb-2">
          Get Started In 3 Easy Steps</h2>
        <p className='text-[#627382] mb-16'>Start using premium digital tools in minutes, not hours.</p>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
       {stepsData.map((step) => (
    <div 
        key={step.id} 
      className="relative p-10 bg-white border border-gray-100 rounded-[40px] shadow-sm hover:shadow-xl group"
     >
            
     <span className="absolute top-6 right-8 bg-[#7C3AED] text-white text-xs font-black px-3 py-1 rounded-full shadow-lg shadow-purple-200">
     {step.id}
      </span>
              
  
      <div className="w-24 h-24 bg-[#F5F3FF] rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 ">
       <img src={step.icon} 
        className="w-12 h-12 object-contain" alt={step.title}   />
    </div>
              
  <h3 className="text-2xl font-bold text-[#101727] mb-4">
    {step.title}</h3>  
    <p className="text-gray-500 leading-relaxed font-medium">
      {step.desc}
    </p>
      </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;