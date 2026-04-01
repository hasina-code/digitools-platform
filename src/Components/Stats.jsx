import React from 'react';

const Stats = () => {
  const statData = [
    { label: "Active Users", value: "50K+" },
    { label: "Premium Tools", value: "200+" },
    { label: "Rating", value: "4.9" },
  ];

  return (
  
    <section className="w-full bg-[#7C3AED] py-14 shadow-lg mb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-around items-center gap-8 md:gap-0">
          
          {statData.map((stat, index) => (
            <React.Fragment key={index}>
              <div className="text-center text-white">
               
                <h2 className="text-5xl md:text-6xl font-black mb-1 tracking-tight">
                  {stat.value}
                </h2>
             
                <p className="text-purple-100 text-sm md:text-base font-medium opacity-90">
                  {stat.label}
                </p>
              </div>
              
             
              {index < statData.length - 1 && (
                <div className="hidden md:block w-[1px] h-16 bg-white/20"></div>
              )}
            </React.Fragment >
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default Stats;