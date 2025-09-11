import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import {Link} from 'react-router-dom'
import ReddyCollegeLogo from '../assets/images/collaborations/RBVRRCollegeLogo.png'
import AVCollegeLogo from '../assets/images/collaborations/AVCollageLogo.jpg'
import PragathiCollegeLogo from '../assets/images/collaborations/pragathiCollegeLogo.jpg'
import BJRCollegeLogo from '../assets/images/collaborations/BJRCollegeLogo.png'
import KasthuribaCollegeLogo from '../assets/images/collaborations/KasturibaCollegeLogo.jpg'

const colleges = [
  {
    imageSrc: AVCollegeLogo,
    name: 'A.V. College of Arts, Science & Commerce',
    address: 'Domalguda',
    city: 'Hyderabad',
    description: 'An autonomous institution affiliated with Osmania University. It offers a wide range of undergraduate and postgraduate programs for students.',
  },
  {
    imageSrc: ReddyCollegeLogo,
    name: "R.B.V.R.R. Women's College",
    address: 'Narayanaguda, YMCA Road',
    city: 'Hyderabad',
    description: "Founded in 1954, it is Hyderabad's second oldest women's college, dedicated to empowering young women through quality education and support.",
  },
  {
    imageSrc: PragathiCollegeLogo,
    name: 'Pragathi Women\'s Degree College',
    address: 'Vivekananda Nagar Colony',
    city: 'Kukatpally, Hyderabad',
    description: 'Part of the Pragathi Group of Institutions, it focuses on providing a comprehensive and holistic education with an emphasis on career and skill development.',
  },
  {
    imageSrc: BJRCollegeLogo,
    name: 'BJR Government Degree College',
    address: 'Vittalwadi, Narayanaguda',
    city: 'Hyderabad',
    description: 'A government institution established in 1974. It is dedicated to providing high-quality education to students from all economic backgrounds.',
  },
  {
    imageSrc: KasthuribaCollegeLogo,
    name: 'Kasturba Gandhi Degree & PG College for Women',
    address: 'West Marredpally',
    city: 'Secunderabad',
    description: 'Established in 1973, this college is dedicated to providing value-based education, with a strong record in both academics and sports.',
  },
];

const CollaborationSection = () => {
  return (
    <section className="relative w-full py-12 bg-[#193127] flex flex-col items-center">
      <div className="text-center mb-12">
        <span className="text-amber-400 tracking-widest uppercase text-lg font-semibold">Collaborations</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
          We Deliver Solution with the<br />Goal of Trusting Relationships
        </h2>
      </div>

      <div className="w-full max-w-6xl px-4">
        <Splide
          options={{
            type: 'loop',
            autoplay: true,
            interval: 4000,
            speed: 800,
            pauseOnHover: true,
            perPage: 4, // Default for large screens
            perMove: 1,
            gap: '1.5rem',
            arrows: true,
            pagination: false,
            breakpoints: {
              1024: { perPage: 3 }, // Show 3 cards on tablets
              768: { perPage: 2 }, // Show 2 cards on larger phones and tablets
              480: { perPage: 1 }, // Show 1 card on small phones
            },
          }}
        >
          {colleges.map((college, idx) => (
            <SplideSlide key={idx}>
              <div
                className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 max-h-[450px]"
              >
                {/* Image Container */}
                <div className="w-auto h-32 mb-4 overflow-hidden flex items-center justify-center">
                  <img src={college.imageSrc} alt={college.name} className="w-auto h-32 object-contain" />
                </div>

                {/* College Info */}
                <h3 className="text-xl font-bold text-gray-800 mb-1">{college.name}</h3>
                <p className="text-gray-600 text-sm">{college.address}</p>
                <p className="text-gray-600 text-sm mb-4">{college.city}</p>
                <hr className="w-1/3 mx-auto my-2 border-gray-300" />
                <p className="text-gray-700 text-sm mt-2">{college.description}</p>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>

{/* Button to navigate */}
      <div className="mt-8 flex justify-center">
        <Link 
          to="/collaborations/academic" // Use 'to' prop for Link component
          className="px-8 py-3 bg-[#A67A2F] text-white font-semibold rounded-lg shadow-lg hover:bg-amber-500 transition-colors duration-300"
        >
          View All Collaborations
        </Link>
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