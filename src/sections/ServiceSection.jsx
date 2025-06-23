import React from 'react';
import { ArrowRight, ArrowLeft, Cloud, Shield, MonitorSmartphone } from 'lucide-react';

const services = [
  {
    title: 'Cyber Security',
    description: '',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
    icon: <Shield className="w-10 h-10 mb-2" />,
    bg: 'bg-gradient-to-t from-blue-900/80 to-blue-900/40',
  },
  {
    title: 'Digital Services',
    description: 'Expertise in a IT consultancy for the many companies, for their different working areas.',
    image: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=600&q=80',
    icon: <Cloud className="w-10 h-10 mb-2 text-blue-600" />,
    bg: 'bg-white',
    card: true,
  },
  {
    title: 'Product Design',
    description: '',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
    icon: <MonitorSmartphone className="w-10 h-10 mb-2" />,
    bg: 'bg-gradient-to-t from-blue-900/80 to-blue-900/40',
  },
];

const ServiceSection = () => {
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
              ALL SEVICES <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 - with left arrow */}
          <div className="relative group rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 hover:-translate-y-2 cursor-pointer">
            <img src={services[0].image} alt="Cyber Security" className="w-full h-80 object-cover object-center" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white bg-gradient-to-t from-blue-900/80 to-blue-900/40 transition-all duration-500 group-hover:bg-blue-800/80">
              <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-blue-700 rounded-full p-2 shadow-lg opacity-80 hover:scale-110 transition-all duration-200">
                <ArrowLeft className="w-6 h-6" />
              </button>
              {services[0].icon}
              <h3 className="text-xl font-semibold mb-2">{services[0].title}</h3>
            </div>
          </div>
          {/* Card 2 - white card with icon and text */}
          <div className="relative group rounded-2xl overflow-hidden shadow-lg bg-white flex flex-col justify-end transition-transform duration-500 hover:-translate-y-2 cursor-pointer">
            <img src={services[1].image} alt="Digital Services" className="w-full h-80 object-cover object-center opacity-40" />
            <div className="absolute inset-0 flex flex-col justify-center items-center p-8">
              <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center transition-all duration-300 group-hover:scale-105">
                {services[1].icon}
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{services[1].title}</h3>
                <p className="text-gray-500 text-base text-center">{services[1].description}</p>
              </div>
            </div>
          </div>
          {/* Card 3 - with right arrow */}
          <div className="relative group rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 hover:-translate-y-2 cursor-pointer">
            <img src={services[2].image} alt="Product Design" className="w-full h-80 object-cover object-center" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white bg-gradient-to-t from-blue-900/80 to-blue-900/40 transition-all duration-500 group-hover:bg-blue-800/80">
              <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-blue-700 rounded-full p-2 shadow-lg opacity-80 hover:scale-110 transition-all duration-200">
                <ArrowRight className="w-6 h-6" />
              </button>
              {services[2].icon}
              <h3 className="text-xl font-semibold mb-2">{services[2].title}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection; 