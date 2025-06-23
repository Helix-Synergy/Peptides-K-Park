import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Cloud, Shield, MonitorSmartphone } from 'lucide-react';

const services = [
  {
    title: 'Cyber Security',
    description: 'Expertise in IT consultancy for the many companies, for their different working areas.',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
    icon: <Shield className="w-10 h-10 mb-2 text-blue-600" />,
  },
  {
    title: 'Digital Services',
    description: 'Expertise in IT consultancy for the many companies, for their different working areas.',
    image: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=600&q=80',
    icon: <Cloud className="w-10 h-10 mb-2 text-blue-600" />,
  },
  {
    title: 'Product Design',
    description: 'Expertise in IT consultancy for the many companies, for their different working areas.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
    icon: <MonitorSmartphone className="w-10 h-10 mb-2 text-blue-600" />,
  },
  {
    title: 'Cloud Solutions',
    description: 'Cloud migration, management, and security for your business.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
    icon: <Cloud className="w-10 h-10 mb-2 text-blue-600" />,
  },
  {
    title: 'Network Management',
    description: 'Reliable network setup and monitoring for all sizes of business.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    icon: <Shield className="w-10 h-10 mb-2 text-blue-600" />,
  },
];

const getVisibleIndexes = (start, length, total) => {
  return Array.from({ length }, (_, i) => (start + i) % total);
};

const ServiceSlider = () => {
  const [startIdx, setStartIdx] = useState(0);
  const [hovered, setHovered] = useState(null);
  const [sliderHovered, setSliderHovered] = useState(false);
  const visibleCount = 3;
  const total = services.length;
  const visibleIndexes = getVisibleIndexes(startIdx, visibleCount, total);

  const handlePrev = (e) => {
    e.stopPropagation();
    setStartIdx((prev) => (prev - 1 + total) % total);
  };
  const handleNext = (e) => {
    e.stopPropagation();
    setStartIdx((prev) => (prev + 1) % total);
  };

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-8 lg:px-20 bg-blue-300/10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6">
          <div>
            <span className="text-indigo-400 text-base font-semibold tracking-widest mb-2 uppercase block">Our Service</span>
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">We Offer a Wide<br className="hidden sm:block" /> Variety of IT Services</h2>
          </div>
          <div className="flex flex-col md:items-end gap-4 md:gap-2">
            <p className="text-gray-500 max-w-md text-base md:text-right">
              Web designing in a powerful way of just not a profession, however, in a passion for our Company. We have a tendency to believe the idea that smart looking.
            </p>
            <button className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl text-base shadow transition-all duration-200">
              ALL SERVICES <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
        {/* Slider */}
        <div
          className="relative flex items-center justify-center"
          onMouseEnter={() => setSliderHovered(true)}
          onMouseLeave={() => setSliderHovered(false)}
        >
          {/* Cards */}
          <div className="w-full flex justify-center gap-6 overflow-x-auto md:overflow-visible">
            {visibleIndexes.map((idx, i) => {
              const service = services[idx];
              const isHovered = hovered === idx;
              return (
                <div
                  key={idx}
                  className={`relative group rounded-2xl overflow-hidden shadow-lg bg-white flex-shrink-0 transition-transform duration-500 hover:-translate-y-2 cursor-pointer h-96 
                    w-full max-w-full 
                    sm:w-[calc(50%-12px)] sm:max-w-[calc(50%-12px)]
                    md:w-[calc(33.333%-16px)] md:max-w-[calc(33.333%-16px)]
                  `}
                  onMouseEnter={() => setHovered(idx)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover object-center" />
                  {/* Default: icon and title at bottom left over blue gradient */}
                  <div className={`absolute inset-0 flex flex-col justify-end items-start p-6 transition-all duration-300 pointer-events-none ${isHovered ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                    <div className="flex flex-col items-start z-10">
                      <div className="text-white">{service.icon}</div>
                      <h3 className="text-xl font-semibold text-white mt-2">{service.title}</h3>
                    </div>
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-t from-blue-900/80 to-blue-900/40 transition-all z-5 duration-300 pointer-events-none ${isHovered ? 'opacity-0' : 'opacity-100'}`}></div>
                  {/* Hover: white card overlay with icon, title, description */}
                  <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isHovered ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}>
                    <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center w-11/12 max-w-md mx-auto animate-fade-in-up">
                      <div className="mb-2 text-white">{service.icon}</div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2 text-center">{service.title}</h3>
                      <p className="text-gray-500 text-base text-center">{service.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Left Arrow (only on slider hover, at first card) */}
          {sliderHovered && (
            <button
              onClick={handlePrev}
              className="absolute z-10 bg-white text-blue-700 rounded-full p-2 shadow-lg opacity-90 hover:scale-110 transition-all duration-200 -translate-x-1/2 top-1/2 -translate-y-1/2"
              style={{ left: 'calc(50% - 560px)' }}
              aria-label="Previous"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
          )}
          {/* Right Arrow (only on slider hover, at third card) */}
          {sliderHovered && (
            <button
              onClick={handleNext}
              className="absolute z-20 bg-white text-blue-700 rounded-full p-2 shadow-lg opacity-90 hover:scale-110 transition-all duration-200 translate-x-1/2 top-1/2 -translate-y-1/2"
              style={{ right: 'calc(50% - 560px)' }}
              aria-label="Next"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceSlider; 