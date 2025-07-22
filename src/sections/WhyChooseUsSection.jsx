// import React, { useState } from "react";
// import { Share2, UserCog, Cloud, Laptop2, Play } from "lucide-react";

// const features = [
//   {
//     title: "Strategic Direction",
//     desc: "Our Advisory Board Team comprises seasoned professionals with vast expertise across diverse industries. They provide strategic direction and mentorship to strengthen our vision and objectives.",
//     icon: <Share2 className="w-10 h-10" />,
//   },
//   {
//     title: "Innovative Insight",
//     desc: "By guiding us in navigating complex challenges and seizing opportunities, they play an integral role in shaping our growth with insight that fosters innovation and excellence.",
//     icon: <UserCog className="w-10 h-10" />,
//   },
//   {
//     title: "Sustainable Progress",
//     desc: "Their commitment to excellence drives impactful solutions and sustainable progress. They help us build resilience and lead with responsibility toward future goals.",
//     icon: <Cloud className="w-10 h-10" />,
//   },
//   {
//     title: "Empowered Leadership",
//     desc: "With their leadership, we achieve new milestones and deliver exceptional outcomes. Together, we foster innovation and create a lasting impact for a better tomorrow.",
//     icon: <Laptop2 className="w-10 h-10" />,
//   },
// ];

// const WhyChooseUsSection = () => {
//   const [hovered, setHovered] = useState(null);
//   return (
//     <section className="w-full py-20 px-4 sm:px-8 lg:px-8 bg-gradient-to-br from-[#2a2e8a] via-[#6a3fa0] to-[#a84ca4] relative overflow-hidden">
//       {/* Dots pattern (optional) */}
//       <div
//         className="absolute right-0 top-0 w-1/2 h-full pointer-events-none select-none mt-12"
//         style={{
//           background:
//             "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 1px, transparent 1px)",
//           backgroundSize: "24px 24px",
//         }}
//       />
//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="text-center">
//           <span className="text-pink-400 text-base font-semibold tracking-widest mb-2 uppercase block">
//             People Assisting PEPTIDES
//           </span>
//           <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
//             Our Team Of Excellence
//           </h2>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:my-24">
//           {features.map((f, i) => {
//             const isActive = hovered === i;
//             return (
//               <div
//                 key={i}
//                 className={`relative border rounded-2xl px-4 py-6 flex flex-col items-center text-center shadow-xl transition-all duration-300 group cursor-pointer
//                   ${
//                     isActive
//                       ? "bg-white border-white scale-105 z-10"
//                       : "bg-white/5 border-white/10"
//                   }
//                 `}
//                 onMouseEnter={() => setHovered(i)}
//                 onMouseLeave={() => setHovered(null)}
//               >
//                 <div className="absolute -top-14 left-1/2 -translate-x-1/2">
//                   <svg
//                     width="120"
//                     height="120"
//                     viewBox="0 0 16 16"
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="w-28 h-28"
//                   >
//                     <path
//                       fill={isActive ? "#60a5fa" : "#ec4899"}
//                       d="M9.166.33a2.25 2.25 0 00-2.332 0l-5.25 3.182A2.25 2.25 0 00.5 5.436v5.128a2.25 2.25 0 001.084 1.924l5.25 3.182a2.25 2.25 0 002.332 0l5.25-3.182a2.25 2.25 0 001.084-1.924V5.436a2.25 2.25 0 00-1.084-1.924L9.166.33z"
//                     />
//                   </svg>
//                   <span
//                     className={`absolute inset-0 flex items-center justify-center w-28 h-28 transition-all duration-300 ${
//                       isActive ? "text-white" : "text-white"
//                     }`}
//                     style={{ top: 0, left: 0 }}
//                   >
//                     {f.icon}
//                   </span>
//                 </div>

//                 <div className="mt-12">
//                   <h3
//                     className={`text-xl font-semibold mb-2 transition-all duration-300 ${
//                       isActive ? "text-gray-900" : "text-white"
//                     }`}
//                   >
//                     {f.title}
//                   </h3>
//                   <p
//                     className={`text-base transition-all duration-300 ${
//                       isActive ? "text-gray-600" : "text-white/60"
//                     }`}
//                   >
//                     {f.desc}
//                   </p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//         {/* Video Section */}
//         {/* <div className="w-full flex flex-col md:flex-row items-center bg-white mt-8 rounded-2xl overflow-hidden">
//           Video thumbnail
//           <div className="relative w-full md:w-1/2 h-64 md:h-72 flex-shrink-0">
//             <img
//               src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80"
//               alt="Agency Video"
//               className="w-full h-full object-cover object-center"
//             />
//             <button className="absolute inset-0 flex items-center justify-center w-full h-full group">
//               <span className="bg-white/80 hover:bg-white text-blue-700 rounded-full p-5 shadow-lg transition-all duration-200">
//                 <Play className="w-10 h-10" />
//               </span>
//             </button>
//           </div>
//           Text and button
//           <div className="relative w-full md:w-1/2 h-64 md:h-72 flex items-center justify-center bg-transparent">
//             <div className="absolute inset-0 bg-gradient-to-tr from-[#2a2e8a]/80 via-[#6a3fa0]/60 to-[#a84ca4]/80 mix-blend-multiply" />
//             <div className="relative z-10 flex flex-col items-start justify-center h-full p-8">
//               <h3 className="text-3xl font-bold text-white mb-4">
//                 Learn More About
//                 <br />
//                 Our Leadership
//               </h3>
//               <button className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl text-base shadow transition-all duration-200 mt-4">
//                 READ MORE{" "}
//                 <svg
//                   className="ml-2 w-5 h-5"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M17 8l4 4m0 0l-4 4m4-4H3"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div> */}
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUsSection;

import React, { useState, useRef } from "react";
import { Share2, UserCog, Cloud, Laptop2, Minus } from "lucide-react";
import { motion, useInView } from "framer-motion"; // Import motion and useInView

const features = [
  {
    title: "Strategic Direction",
    desc: "Our Advisory Board Team comprises seasoned professionals with vast expertise across diverse industries. They provide strategic direction and mentorship to strengthen our vision and objectives.",
    icon: <Share2 className="w-10 h-10" />,
  },
  {
    title: "Innovative Insight",
    desc: "By guiding us in navigating complex challenges and seizing opportunities, they play an integral role in shaping our growth with insight that fosters innovation and excellence.",
    icon: <UserCog className="w-10 h-10" />,
  },
  {
    title: "Sustainable Progress",
    desc: "Their commitment to excellence drives impactful solutions and sustainable progress. They help us build resilience and lead with responsibility toward future goals.",
    icon: <Cloud className="w-10 h-10" />,
  },
  {
    title: "Empowered Leadership",
    desc: "With their leadership, we achieve new milestones and deliver exceptional outcomes. Together, we foster innovation and create a lasting impact for a better tomorrow.",
    icon: <Laptop2 className="w-10 h-10" />,
  },
];

// Define Framer Motion variants for staggered animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay for each child (card)
      delayChildren: 0.2,   // Initial delay before first child starts
    },
  },
};

const cardVariants = {
  hidden: { y: 80, opacity: 0, scale: 0.9 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring", // Use a spring type for a subtle bounce/pop
      stiffness: 70,
      damping: 10,
      duration: 0.8,
    },
  },
  hover: {
    scale: 1.05, // Slightly larger on hover
    boxShadow: "0px 10px 30px rgba(0,0,0,0.2)", // More prominent shadow
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
    },
  },
};

// Variants for elements within the card (icon, title, description)
const childElementVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};


const WhyChooseUsSection = () => {
  const [hovered, setHovered] = useState(null);
  const sectionRef = useRef(null);
  // useInView to trigger animations when the section comes into view
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 }); // Trigger when 30% of section is visible

  return (
    <section
      ref={sectionRef} // Attach ref to the section
      className="w-full py-20 px-4 sm:px-8 lg:px-8 bg-gradient-to-br from-[#2a2e8a] via-[#6a3fa0] to-[#a84ca4] relative overflow-hidden"
    >
      {/* Dots pattern (optional) - Ensure it's behind content */}
      <div
        className="absolute right-0 top-0 w-1/2 h-full pointer-events-none select-none mt-12 z-0"
        style={{
          background:
            "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="max-w-7xl mx-auto relative z-10"> {/* Ensure content is above background elements */}
        <div className="text-center">
          {/* Animated Subtitle */}
          <motion.span
            className="text-pink-400 text-base font-semibold tracking-widest mb-2 uppercase block"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            People Assisting PEPTIDES
          </motion.span>
          {/* Animated Main Title */}
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-white mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Team Of Excellence
          </motion.h2>
        </div>

        {/* Card Grid with Staggered Animation */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-24 md:my-24"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((f, i) => {
            const isActive = hovered === i;
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover="hover"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className={`relative border rounded-2xl pt-16 pb-6 px-4 flex flex-col items-center text-center shadow-xl transition-all duration-300 group cursor-pointer h-full
                  ${
                    isActive
                      ? "border-white z-20" // Border changes, z-index for hovered card
                      : "border-white/10" // Default border
                  }
                `}
                style={{
                  // Dynamic background color and blur for the card itself
                  backgroundColor: isActive ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.05)',
                  backdropFilter: isActive ? 'blur(8px)' : 'none',
                  WebkitBackdropFilter: isActive ? 'blur(8px)' : 'none',
                  transition: 'background-color 0.3s ease-out, backdrop-filter 0.3s ease-out, -webkit-backdrop-filter 0.3s ease-out',
                }}
              >
                {/* Hexagonal Icon Container */}
                <div className="absolute -top-14 left-1/2 -translate-x-1/2">
                  <motion.svg
                    width="120"
                    height="120"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-28 h-28"
                    variants={childElementVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ delay: i * 0.15 + 0.3, duration: 0.5 }}
                  >
                    <motion.path
                      fill={isActive ? "#60a5fa" : "#ec4899"} // Tailwind blue-400 / pink-500
                      d="M9.166.33a2.25 2.25 0 00-2.332 0l-5.25 3.182A2.25 2.25 0 00.5 5.436v5.128a2.25 2.25 0 001.084 1.924l5.25 3.182a2.25 2.25 0 002.332 0l5.25-3.182a2.25 2.25 0 001.084-1.924V5.436a2.25 2.25 0 00-1.084-1.924L9.166.33z"
                      transition={{ duration: 0.3 }}
                    />
                  </motion.svg>
                  <motion.span
                    className={`absolute inset-0 flex items-center justify-center w-28 h-28 transition-colors duration-300 ${
                      isActive ? "text-white" : "text-white"
                    }`}
                    style={{ top: 0, left: 0 }}
                    variants={childElementVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ delay: i * 0.15 + 0.4, duration: 0.5 }}
                  >
                    {f.icon}
                  </motion.span>
                </div>

                {/* Card Content (Title and Description) */}
                <div className="mt-12">
                  <motion.h3
                    className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                      isActive ? "text-white" : "text-white" // Title remains white for readability
                    }`}
                    variants={childElementVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ delay: i * 0.15 + 0.5, duration: 0.5 }}
                  >
                    {f.title}
                  </motion.h3>
                  <motion.p
                    className={`text-base transition-colors duration-300 ${
                      isActive ? "text-white/80" : "text-white/60" // Description becomes slightly more opaque white
                    }`}
                    variants={childElementVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ delay: i * 0.15 + 0.6, duration: 0.5 }}
                  >
                    {f.desc}
                  </motion.p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Video Section (Commented out in original, keeping it commented) */}
        {/* <div className="w-full flex flex-col md:flex-row items-center bg-white mt-8 rounded-2xl overflow-hidden">
          <div className="relative w-full md:w-1/2 h-64 md:h-72 flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80"
              alt="Agency Video"
              className="w-full h-full object-cover object-center"
            />
            <button className="absolute inset-0 flex items-center justify-center w-full h-full group">
              <span className="bg-white/80 hover:bg-white text-blue-700 rounded-full p-5 shadow-lg transition-all duration-200">
                <Play className="w-10 h-10" />
              </span>
            </button>
          </div>
          <div className="relative w-full md:w-1/2 h-64 md:h-72 flex items-center justify-center bg-transparent">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#2a2e8a]/80 via-[#6a3fa0]/60 to-[#a84ca4]/80 mix-blend-multiply" />
            <div className="relative z-10 flex flex-col items-start justify-center h-full p-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                Learn More About
                <br />
                Our Leadership
              </h3>
              <button className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl text-base shadow transition-all duration-200 mt-4">
                READ MORE{" "}
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div> */}
      </div>
      {/* Placeholder for the blue floating action button if it's from another component or needs to be here */}
      {/* If this button overlaps, ensure it has a high z-index and fixed positioning with appropriate bottom/right values */}
      <button className="fixed bottom-8 right-8 bg-blue-500 text-white rounded-full p-4 shadow-lg z-50">
        <Minus className="w-6 h-6" />
      </button>
    </section>
  );
};

export default WhyChooseUsSection;
