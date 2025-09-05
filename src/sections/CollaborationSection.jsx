import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const colleges = [
  {
    imageSrc: 'https://placehold.co/120x120/444/FFF?text=College+1',
    name: 'College Name 1',
    address: 'Address Line 1',
    city: 'City, State 1',
    description: 'A small description about the college or what it specializes in.',
  },
  {
    imageSrc: 'https://placehold.co/120x120/444/FFF?text=College+2',
    name: 'College Name 2',
    address: 'Address Line 2',
    city: 'City, State 2',
    description: 'A brief description that highlights the unique aspects of this institution.',
  },
  {
    imageSrc: 'https://placehold.co/120x120/444/FFF?text=College+3',
    name: 'College Name 3',
    address: 'Address Line 3',
    city: 'City, State 3',
    description: 'Focuses on research and innovation in the fields of science and technology.',
  },
  {
    imageSrc: 'https://placehold.co/120x120/444/FFF?text=College+4',
    name: 'College Name 4',
    address: 'Address Line 4',
    city: 'City, State 4',
    description: 'Known for its excellent faculty and state-of-the-art laboratory facilities.',
  },
];

const CollaborationSection = () => {
  return (
    <section className="relative w-full py-12 bg-[#193127] flex flex-col items-center">
      <div className="text-center mb-12">
        <span className="text-green-400 tracking-widest uppercase text-lg font-semibold">Technology Index</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
          We Deliver Solution with the<br />Goal of Trusting Relationships
        </h2>
      </div>

      <div className="w-full max-w-6xl">
        <Splide
          options={{
            type: 'loop',
            autoplay: true,
            interval: 4000,
            speed: 800,
            pauseOnHover: true,
            perPage: 4,      // How many cards visible at once
            perMove: 1,      // Move 1 card per slide
            gap: '1.5rem',   // Smaller gap to fit smaller cards
            arrows: true,
            pagination: false,
            breakpoints: {
              1024: { perPage: 2 },
              640: { perPage: 1 },
            },
          }}
        >
          {colleges.map((college, idx) => (
            <SplideSlide key={idx}>
              <div
                className="bg-white border border-[#0F2920] rounded-xl p-4 flex flex-col items-center text-center shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
                style={{ maxWidth: '250px', minHeight: '350px', margin: '0 auto' }} // Reduce card width
              >
                {/* Hexagonal Image */}
                <div className="w-32 h-32 mb-4 overflow-hidden rounded-full border-2 border-[#0F2920]">
                  <img src={college.imageSrc} alt={college.name} className="w-full h-full object-cover" />
                </div>

                {/* College Info */}
                <h3 className="text-xl font-bold text-[#0F2920] mb-1">{college.name}</h3>
                <p className="text-[#0F2920]/80 text-sm">{college.address}</p>
                <p className="text-[#0F2920]/80 text-sm mb-2">{college.city}</p>
                <hr className="w-1/2 mx-auto my-4 border-[#0F2920]/30" />
                <p className="text-[#0F2920]/80 text-sm">{college.description}</p>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>

      {/* Custom arrow styling */}
      <style>
        {`
          .splide__arrow {
            background-color: #0F2920;
            color: white;
            border-radius: 9999px;
            width: 2.5rem;
            height: 2.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .splide__arrow:hover {
            background-color: #1F3A2C;
          }
          .splide__arrow svg {
            width: 1.25rem;
            height: 1.25rem;
          }
        `}
      </style>
    </section>
  );
};

export default CollaborationSection;
