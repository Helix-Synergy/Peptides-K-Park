import React from 'react';

const ContactSection = () => {
  return (
    <section className="w-full py-16 px-4 sm:px-8 lg:px-20 flex justify-center items-center relative overflow-hidden">
      {/* Animated SVG Map Background */}
      <svg className="absolute inset-0 w-full h-full z-0 animate-pulse" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" style={{opacity: 0.12}}>
        <g stroke="#fff" strokeWidth="1.5">
          <rect x="100" y="100" width="400" height="200" rx="24" />
          <rect x="700" y="200" width="300" height="180" rx="24" />
          <rect x="1200" y="400" width="180" height="120" rx="24" />
          <path d="M200 200 Q300 300 500 200 T900 400" />
          <circle cx="350" cy="250" r="18" />
          <circle cx="850" cy="300" r="14" />
          <circle cx="1300" cy="450" r="10" />
        </g>
        <g stroke="#60a5fa" strokeWidth="1.5" opacity="0.5">
          <rect x="300" y="400" width="200" height="120" rx="24" />
          <rect x="1000" y="100" width="180" height="100" rx="24" />
          <path d="M400 500 Q600 600 1200 600" />
          <circle cx="400" cy="460" r="10" />
          <circle cx="1100" cy="150" r="8" />
        </g>
      </svg>
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden relative z-10">
        {/* Random Image */}
        <div className="md:w-1/2 w-full h-80 md:h-auto flex-shrink-0">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
            alt="Contact"
            className="w-full h-full object-cover object-center"
          />
        </div>
        {/* Form */}
        <form className="md:w-1/2 w-full p-8 flex flex-col gap-6 bg-white">
          <div className="flex flex-col md:flex-row gap-4">
            <input type="text" placeholder="Your Name *" className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-700" required />
            <input type="text" placeholder="Phone Number *" className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-700" required />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <input type="email" placeholder="Email Address *" className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-700" required />
            <input type="text" placeholder="Subject" className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-700" />
          </div>
          <textarea placeholder="Message *" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-700 min-h-[120px] resize-y" required />
          <button type="submit" className="w-full md:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow transition-all duration-200 flex items-center justify-center">
            SEND MESSAGE <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection; 