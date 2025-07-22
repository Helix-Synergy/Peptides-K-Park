import React from 'react';
import { Shield, MonitorSmartphone, Users, BarChart2, Layout } from 'lucide-react';
import biotechnology from '../assets/industries/biotechnology.svg';
import bioInformatics from '../assets/industries/bio_informatics.svg';
import microbiology from '../assets/industries/microbiology.svg';
import pharmacy from '../assets/industries/pharmacy.svg';
import molecularBiology from '../assets/industries/molecular_biology.svg';

// SVG Hexagon Icon as background
const HexIcon = ({ className }) => (
  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      fill="#6366F1"
      d="M9.166.33a2.25 2.25 0 00-2.332 0l-5.25 3.182A2.25 2.25 0 00.5 5.436v5.128a2.25 2.25 0 001.084 1.924l5.25 3.182a2.25 2.25 0 002.332 0l5.25-3.182a2.25 2.25 0 001.084-1.924V5.436a2.25 2.25 0 00-1.084-1.924L9.166.33z"
    />
  </svg>
);

const services = [
  {
    title: 'Biotechnology',
    description: 'It plays a vital role in Healthcare, Agriculture, Nanotechnology, Molecular Biology.',
    icon: <img src={biotechnology} alt="Biotechnology" className="w-12 h-12" />,
  },
  {
    title: 'Bioinformatics',
    description: 'Bioinformatics combines Biology, Computer Science, and Statistics to analyze and interpret Biological data.',
    icon: <img src={bioInformatics} alt="Bioinformatics" className="w-12 h-12" />,
  },
  {
    title: 'Microbiology',
    description: 'Microbiology is the study of microscopic organisms such as Bacteria, Viruses, Fungi, and Protozoa.',
    icon: <img src={microbiology} alt="Microbiology" className="w-12 h-12" />,
  },
  {
    title: 'Pharmacy',
    description: 'Pharmacy is the science and practice of Preparing, Dispensing, and Reviewing Drugs for safe and effective use.',
    icon: <img src={pharmacy} alt="Pharmacy" className="w-12 h-12" />,
  },
  {
    title: 'Molecular Biology',
    description: 'It focuses on the structure and function of molecules essential to life, such as DNA, RNA, and Proteins.',
    icon: <img src={molecularBiology} alt="Molecular Biology" className="w-12 h-12" />,
  },
];

const backgroundUrl =
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80';

const ServicesWeServe = () => {
  return (
    <section
      className="relative w-full min-h-screen flex flex-col justify-center items-center text-white overflow-hidden"
      style={{ backgroundImage: `url(${backgroundUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0" />
      <div className="relative z-10 flex flex-col items-center justify-center py-24 px-4 w-full">
        <span className="text-blue-400 tracking-widest uppercase text-lg mb-4 font-semibold">Technology Index</span>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          We Deliver Solution with the<br />Goal of Trusting Relationships
        </h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 w-full max-w-6xl">
          {services.map((service, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              {/* Hex + Icon */}
              <div className="relative w-24 h-24 mb-4 flex items-center justify-center">
                <HexIcon className="absolute inset-0 w-full h-full" />
                <div className="relative z-10">{service.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-slate-300 text-base max-w-xs mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* TOP Button */}
      <a
        href="#top"
        className="fixed bottom-8 right-8 z-20 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl px-4 py-3 flex flex-col items-center shadow-lg transition-all duration-200"
        style={{ clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)' }}
      >
        <span className="font-bold text-lg">↑</span>
        <span className="text-xs mt-1">TOP</span>
      </a>
    </section>
  );
};

export default ServicesWeServe;
