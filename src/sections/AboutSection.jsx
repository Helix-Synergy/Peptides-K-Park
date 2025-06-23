import React from 'react';
import { Users, LifeBuoy } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="w-full py-20 px-4 sm:px-8 lg:px-20 bg-white flex flex-col lg:flex-row items-center justify-center gap-12">
      {/* Left: Diamond Image Grid */}
      <div className="relative flex-shrink-0 flex items-center justify-center min-w-[340px] min-h-[340px]">
        {/* Diamond grid */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Main diamond image */}
          <div className="w-64 h-64 bg-white rounded-2xl shadow-xl overflow-hidden transform rotate-45 flex items-center justify-center">
            {/* <img
              src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80"
              alt="About"
              className="w-full h-full object-cover object-center -rotate-45"
            /> */}
          </div>
          {/* Faded diamonds */}
          <div className="absolute w-40 h-40 bg-gradient-to-br from-blue-100 to-white rounded-2xl opacity-60 -left-24 -top-24 rotate-45" />
          <div className="absolute w-40 h-40 bg-gradient-to-br from-blue-100 to-white rounded-2xl opacity-60 -right-24 -top-24 rotate-45" />
          <div className="absolute w-40 h-40 bg-gradient-to-br from-blue-100 to-white rounded-2xl opacity-60 -left-24 -bottom-24 rotate-45" />
        </div>
        {/* Experience Badge */}
        <div className="absolute left-0 bottom-8 flex items-center z-2">
          <div className="relative">
            <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-32 h-10 bg-blue-600 rounded-l-full z-0" />
            <div className="relative z-10 px-8 py-2 bg-blue-700 text-white font-bold text-lg rounded-full shadow-lg flex items-center">
              <span className="text-2xl mr-2">1.5K</span>
              <span className="text-xs font-normal">IT Business Experience</span>
            </div>
          </div>
        </div>
      </div>
      {/* Right: Content */}
      <div className="flex-1 flex flex-col items-start max-w-2xl">
        <span className="text-indigo-400 text-base font-semibold tracking-widest mb-2 uppercase">About Us</span>
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          We deal With The <br />Aspects Of Professional IT Services
        </h2>
        <p className="text-gray-500 text-lg mb-6">
          Engitech is the partner of choice for many of the world's leading enterprises, SMEs and technology challengers. We help businesses elevate their value through custom software development, product design,
        </p>
        {/* Feature Cards */}
        <div className="flex flex-col sm:flex-row gap-4 w-full mb-6">
          <div className="flex-1 bg-white border rounded-xl p-6 flex items-center gap-4 shadow-sm">
            <Users className="w-10 h-10 text-blue-600" />
            <div>
              <div className="font-bold text-lg text-gray-900 mb-1">Experience</div>
              <div className="text-gray-500 text-sm">Our great team of more than 1400 software experts.</div>
            </div>
          </div>
          <div className="flex-1 bg-white border rounded-xl p-6 flex items-center gap-4 shadow-sm">
            <LifeBuoy className="w-10 h-10 text-blue-600" />
            <div>
              <div className="font-bold text-lg text-gray-900 mb-1">Quick Support</div>
              <div className="text-gray-500 text-sm">We'll help you test bold new ideas while sharing your.</div>
            </div>
          </div>
        </div>
        <p className="text-gray-400 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
        </p>
        <button className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl text-base shadow transition-all duration-200">
          READ MORE <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </button>
      </div>
    </section>
  );
};

export default AboutSection; 