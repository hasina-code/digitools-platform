import React from 'react';
import { TiTick } from 'react-icons/ti';

const Pricing = () => {
  const plans = [
    { 
      name: "Starter", 
      price: "0", 
      desc: "Perfect for getting started", 
      features: ["Access to 10 free tools", "Basic templates", "Community support", "1 project per month"], 
      isPopular: false,
      btnText: "Get Started Free"
    },
    { 
      name: "Pro", 
      price: "29", 
      desc: "Best for professionals", 
      features: ["Access to all premium tools", "Unlimited templates", "Priority support", "Unlimited projects", "Cloud sync", "Advanced analytics"], 
      isPopular: true,
      btnText: "Start Pro Trial"
    },
    { 
      name: "Enterprise", 
      price: "99", 
      desc: "For teams and businesses", 
      features: ["Everything in Pro", "Team collaboration", "Custom integrations", "Dedicated support", "SLA guarantee", "Custom branding"], 
      isPopular: false,
      btnText: "Contact Sales"
    }
  ];

  return (
    <section className="py-24 bg-[#F9FAFB] px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black text-[#101727] tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative p-8 md:p-10 rounded-[40px] border flex flex-col justify-between h-full  ${
                plan.isPopular 
                ? "bg-[#7C3AED] text-white shadow-2xl shadow-purple-200 z-10 scale-105" 
                : "bg-white border-gray-100 hover:shadow-2xl hover:-translate-y-2"
              }`}
            >
              {/*  Badge */}
              {plan.isPopular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                  <span className="bg-[#FEF3C7] text-[#D97706] text-[11px] font-black uppercase px-5 py-2 rounded-full border border-[#FDE68A] shadow-sm whitespace-nowrap">
                    Most Popular
                  </span>
                </div>
              )}

              <div>
                <h3 className="text-2xl font-black mb-2">{plan.name}</h3>
                <p className={`text-sm mb-8 font-medium ${plan.isPopular ? "text-purple-100" : "text-gray-400"}`}>
                  {plan.desc}
                </p>

                <div className="flex items-baseline gap-1 mb-10">
                  <span className="text-5xl font-black tracking-tighter">${plan.price}</span>
                  <span className={`text-sm font-bold uppercase tracking-widest ${plan.isPopular ? "text-purple-200" : "text-gray-400"}`}>
                    /Month
                  </span>
                </div>

                <ul className="space-y-4 mb-12">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-[14px] font-bold">
                      <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                        plan.isPopular ? "bg-white/20 text-white" : "bg-purple-50 text-[#7C3AED]"
                      }`}>
                        <TiTick size={18} />
                      </span>
                      <span className={plan.isPopular ? "text-white" : "text-gray-600"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className={`w-full py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all active:scale-95 shadow-lg ${
                plan.isPopular 
                ? "bg-white text-[#7C3AED] hover:bg-gray-50" 
                : "bg-[#7C3AED] text-white hover:bg-[#101727]"
              }`}>
                {plan.btnText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;