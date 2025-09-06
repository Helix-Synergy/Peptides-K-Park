import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Cloud, Shield, MonitorSmartphone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import labServices from '../assets/services/lab_services.svg';
import contractResearch from '../assets/services/contract_research.svg';
import academicAssistance from '../assets/services/academic_assistance.svg';

const services = [
  {
    title: 'Academic Assist',
    description: '',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
    icon: <img src={labServices} alt="Lab Services" className="w-10 h-10 mb-2" />,
    bg: 'bg-gradient-to-t from-blue-900/80 to-blue-900/40',
  },
  {
    title: 'Corporate Astute',
    description: 'Expertise in a IT consultancy for the many companies, for their different working areas.',
    image: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=600&q=80',
    icon: <img src={contractResearch} alt="Contract Research" className="w-10 h-10 mb-2" />,
    bg: 'bg-white',
    card: true,
  },
  {
    title: 'Career Saga',
    description: '',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
    icon: <img src={academicAssistance} alt="Academic Assistance" className="w-10 h-10 mb-2" />,
    bg: 'bg-gradient-to-t from-blue-900/80 to-blue-900/40',
  },
  {
    title: 'Collaborations',
    description: 'Cloud migration, management, and security for your business.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
    icon: <Cloud className="w-10 h-10 mb-2 text-white drop-shadow-md" />,
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
    <section className="w-full bg-white py-16 px-4 sm:px-8 lg:px-8 bg-blue-300/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-peptides-color-brown text-base font-semibold tracking-widest mb-2 uppercase block">Our Services</span>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#0F2920] mb-4">We Offer Wide Range of <br className="hidden sm:block" /> Academic Support Services</h2>
        </div>
        <div
          className="relative flex items-center justify-center"
          onMouseEnter={() => setSliderHovered(true)}
          onMouseLeave={() => setSliderHovered(false)}
        >
          <div className="w-full flex justify-center gap-6 overflow-x-auto md:overflow-visible">
            {visibleIndexes.map((idx) => {
              const service = services[idx];
              const isHovered = hovered === idx;
              return (
                <div
                  key={idx}
                  className="relative group rounded-2xl overflow-hidden shadow-lg bg-white flex-shrink-0 transition-transform duration-500 h-96 
                    w-full max-w-full 
                    sm:w-[calc(50%-12px)] sm:max-w-[calc(50%-12px)]
                    md:w-[calc(33.333%-16px)] md:max-w-[calc(33.333%-16px)] cursor-pointer"
                  onMouseEnter={() => setHovered(idx)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover object-center" />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/90 to-black/40 ${isHovered ? 'opacity-0' : 'opacity-100'} transition-all duration-300`}></div>
                  <div className={`absolute inset-0 flex flex-col justify-end items-start p-6 ${isHovered ? 'opacity-0 scale-95' : 'opacity-100 scale-100'} transition-all duration-300`}>
                    <div className="z-10">
                      <div>{service.icon}</div>
                      <h3 className="text-xl font-semibold text-white mt-2 drop-shadow-md">{service.title}</h3>
                    </div>
                  </div>
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <motion.div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center w-11/12 max-w-md mx-auto">
                          <div className="mb-2 text-blue-600">{service.icon}</div>
                          <h3 className="text-2xl font-semibold text-gray-900 mb-2 text-center">{service.title}</h3>
                          <p className="text-gray-500 text-base text-center">{service.description}</p>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
          {sliderHovered && (
            <>
              <button
                onClick={handlePrev}
                className="absolute z-10 bg-white text-blue-700 rounded-full p-2 shadow-lg opacity-90 hover:scale-110 transition-all duration-200 -translate-x-1/2 top-1/2 -translate-y-1/2"
                style={{ left: 'calc(50% - 560px)' }}
                aria-label="Previous"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute z-20 bg-white text-blue-700 rounded-full p-2 shadow-lg opacity-90 hover:scale-110 transition-all duration-200 translate-x-1/2 top-1/2 -translate-y-1/2"
                style={{ right: 'calc(50% - 560px)' }}
                aria-label="Next"
              >
                <ArrowRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>

      </div>
    </section>
  );
};

export default ServiceSlider;
