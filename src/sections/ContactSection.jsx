// import React from 'react';

// const ContactSection = () => {
//   return (
//     <section className="w-full py-16 px-4 sm:px-8 lg:px-20 flex justify-center items-center relative overflow-hidden">
//       {/* Animated SVG Map Background */}
//       <svg className="absolute inset-0 w-full h-full z-0 animate-pulse" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" style={{opacity: 0.12}}>
//         <g stroke="#fff" strokeWidth="1.5">
//           <rect x="100" y="100" width="400" height="200" rx="24" />
//           <rect x="700" y="200" width="300" height="180" rx="24" />
//           <rect x="1200" y="400" width="180" height="120" rx="24" />
//           <path d="M200 200 Q300 300 500 200 T900 400" />
//           <circle cx="350" cy="250" r="18" />
//           <circle cx="850" cy="300" r="14" />
//           <circle cx="1300" cy="450" r="10" />
//         </g>
//         <g stroke="#60a5fa" strokeWidth="1.5" opacity="0.5">
//           <rect x="300" y="400" width="200" height="120" rx="24" />
//           <rect x="1000" y="100" width="180" height="100" rx="24" />
//           <path d="M400 500 Q600 600 1200 600" />
//           <circle cx="400" cy="460" r="10" />
//           <circle cx="1100" cy="150" r="8" />
//         </g>
//       </svg>
//       <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden relative z-10">
//         {/* Random Image */}
//         <div className="md:w-1/2 w-full h-80 md:h-auto flex-shrink-0">
//           <img
//             src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
//             alt="Contact"
//             className="w-full h-full object-cover object-center"
//           />
//         </div>
//         {/* Form */}
//         <form className="md:w-1/2 w-full p-8 flex flex-col gap-6 bg-white">
//           <div className="flex flex-col md:flex-row gap-4">
//             <input type="text" placeholder="Your Name *" className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-700" required />
//             <input type="text" placeholder="Phone Number *" className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-700" required />
//           </div>
//           <div className="flex flex-col md:flex-row gap-4">
//             <input type="email" placeholder="Email Address *" className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-700" required />
//             <input type="text" placeholder="Subject" className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-700" />
//           </div>
//           <textarea placeholder="Message *" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-700 min-h-[120px] resize-y" required />
//           <button type="submit" className="w-[20vw] self-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow transition-all duration-200 flex items-center justify-center">
//             SEND MESSAGE <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default ContactSection; 



import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';

const ContactSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 }); // Trigger when 20% of section is visible

  // Refs for SVG elements for GSAP animation
  const svgRect1 = useRef(null);
  const svgRect2 = useRef(null);
  const svgRect3 = useRef(null);
  const svgPath1 = useRef(null);
  const svgCircle1 = useRef(null);
  const svgCircle2 = useRef(null);
  const svgCircle3 = useRef(null);

  const svgRect4 = useRef(null);
  const svgRect5 = useRef(null);
  const svgPath2 = useRef(null);
  const svgCircle4 = useRef(null);
  const svgCircle5 = useRef(null);

  // GSAP animation for SVG elements
  useEffect(() => {
    if (isInView) {
      // Animate stroke-dashoffset for paths to create a drawing effect
      [svgPath1, svgPath2].forEach((pathRef, index) => {
        if (pathRef.current) {
          const length = pathRef.current.getTotalLength();
          gsap.fromTo(pathRef.current,
            { strokeDasharray: length, strokeDashoffset: length, opacity: 0 },
            {
              strokeDashoffset: 0,
              opacity: 1,
              duration: 2,
              ease: "power2.out",
              delay: 0.5 + index * 0.3 // Stagger paths
            }
          );
        }
      });

      // Animate opacity and scale for circles and rectangles
      [
        svgRect1, svgRect2, svgRect3, svgCircle1, svgCircle2, svgCircle3,
        svgRect4, svgRect5, svgCircle4, svgCircle5
      ].forEach((elRef, index) => {
        if (elRef.current) {
          gsap.fromTo(elRef.current,
            { opacity: 0, scale: 0.8 },
            {
              opacity: 0.12, // Target opacity as per your original SVG
              scale: 1,
              duration: 1,
              ease: "back.out(1.7)",
              delay: 0.8 + index * 0.05 // Stagger shapes
            }
          );
        }
      });
    }
  }, [isInView]); // Rerun effect when isInView changes

  // Framer Motion variants for the main content block (image + form)
  const contentBlockVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
        delay: 0.5, // Delay after SVG animation starts
        when: "beforeChildren", // Animate parent before children
      },
    },
  };

  // Framer Motion variants for form inputs (staggered)
  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Framer Motion variants for the submit button
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.8, // Delay after inputs
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 8px 20px rgba(0,0,0,0.2)",
      transition: { type: "spring", stiffness: 300, damping: 15 },
    },
    tap: { scale: 0.95 },
  };


  return (
    <section
      ref={sectionRef} // Attach ref for useInView
      className="w-full py-16 px-4 sm:px-8 lg:px-20 flex justify-center items-center relative overflow-hidden bg-gradient-to-br from-blue-700 to-purple-800 min-h-screen" // Added gradient background and min-h
    >
      {/* Animated SVG Map Background */}
      <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" style={{opacity: 0}}> {/* Initial opacity 0 */}
        <g stroke="#fff" strokeWidth="1.5">
          <rect ref={svgRect1} x="100" y="100" width="400" height="200" rx="24" />
          <rect ref={svgRect2} x="700" y="200" width="300" height="180" rx="24" />
          <rect ref={svgRect3} x="1200" y="400" width="180" height="120" rx="24" />
          <path ref={svgPath1} d="M200 200 Q300 300 500 200 T900 400" />
          <circle ref={svgCircle1} cx="350" cy="250" r="18" />
          <circle ref={svgCircle2} cx="850" cy="300" r="14" />
          <circle ref={svgCircle3} cx="1300" cy="450" r="10" />
        </g>
        <g stroke="#60a5fa" strokeWidth="1.5" opacity="0.5">
          <rect ref={svgRect4} x="300" y="400" width="200" height="120" rx="24" />
          <rect ref={svgRect5} x="1000" y="100" width="180" height="100" rx="24" />
          <path ref={svgPath2} d="M400 500 Q600 600 1200 600" />
          <circle ref={svgCircle4} cx="400" cy="460" r="10" />
          <circle ref={svgCircle5} cx="1100" cy="150" r="8" />
        </g>
      </svg>

      {/* Main Content Card (Image + Form) */}
      <motion.div
        className="w-full max-w-6xl bg-white rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden relative z-10"
        variants={contentBlockVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Random Image */}
        <div className="md:w-1/2 w-full h-80 md:h-auto flex-shrink-0">
          <img
            src="https://em360tech.com/sites/default/files/styles/cover_image/public/2025-04/remote-it-support.jpeg.webp?itok=Q6FZa0J8"
            alt="Contact"
            className="w-full h-full object-cover object-center"
          />
        </div>
        {/* Form */}
        <form className="md:w-1/2 w-full p-8 flex flex-col gap-6 bg-white">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center md:text-left">Get In Touch</h2> {/* Added Heading */}
          <div className="flex flex-col sm:flex-row gap-4"> {/* Changed md:flex-row to sm:flex-row for better small screen responsiveness */}
            <motion.input
              type="text"
              placeholder="Your Name *"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-700"
              required
              variants={inputVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.8 }}
            />
            <motion.input
              type="text"
              placeholder="Phone Number *"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-700"
              required
              variants={inputVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.9 }}
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4"> {/* Changed md:flex-row to sm:flex-row */}
            <motion.input
              type="email"
              placeholder="Email Address *"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-700"
              required
              variants={inputVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 1.0 }}
            />
            <motion.input
              type="text"
              placeholder="Subject"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-700"
              variants={inputVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 1.1 }}
            />
          </div>
          <motion.textarea
            placeholder="Message *"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-700 min-h-[120px] resize-y"
            required
            variants={inputVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 1.2 }}
          />
          <motion.button
            type="submit"
            className="w-full sm:w-fit mx-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow transition-all duration-200 flex items-center justify-center" // Responsive width
            variants={buttonVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover="hover"
            whileTap="tap"
          >
            SEND MESSAGE <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactSection;
