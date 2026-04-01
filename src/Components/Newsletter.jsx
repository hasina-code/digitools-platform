import React from 'react';

const Newsletter = () => {
  return (
    <section className="w-full bg-[#7C3AED] py-24 px-6 text-center text-white relative overflow-hidden">
      <div className="relative z-10 space-y-6">
        <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
          Ready To Transform Your Workflow?
        </h2>
        <p className="text-purple-100 text-sm md:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
          Join thousands of professionals who are already using Digitools to work smarter. <br className="hidden md:block" />
          Start your free trial today.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center pt-8">
          <button className="bg-white text-[#7C3AED] px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:shadow-2xl transition-all active:scale-95">
            Explore Products
          </button>
          <button className="border-2 border-white/40 text-white px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-all active:scale-95">
            View Pricing
          </button>
        </div>

        <div className="pt-6">
          <p className="text-[13px] md:text-[14px] font-bold text-purple-200/70 uppercase tracking-widest">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;