// // src/components/AdvisoryCouncil/AdvisoryCouncilDropdown.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { Users, BookOpen, UserPlus } from 'lucide-react'; // Icons for the cards (kept for potential future use or if icons are desired elsewhere)

// const AdvisoryCouncilDropdown = () => {
//   // Animation variants for staggered appearance
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   // Variants for individual items (e.g., paragraphs, cards)
//   const itemVariants = {
//     hidden: { y: 50, opacity: 0, scale: 0.95 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       scale: 1,
//       transition: {
//         duration: 0.7,
//         ease: "easeOut",
//       },
//     },
//   };

//   // Variants for hero section elements
//   const heroTextVariants = {
//     hidden: { y: -50, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 1,
//         ease: "easeOut",
//       },
//     },
//   };

//   const heroSubtitleVariants = {
//     hidden: { y: 30, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 1,
//         delay: 0.3,
//         ease: "easeOut",
//       },
//     },
//   };

//   return (
//     <main className="bg-white min-h-screen font-inter">
//       {/* Hero Section */}
//       <section className="relative h-[45vh] md:h-[55vh] flex items-center justify-center text-white overflow-hidden bg-gradient-to-br from-blue-700 to-purple-600">
//         {/* Animated background shapes for uniqueness */}
//         <motion.div
//           className="absolute w-96 h-96 bg-white rounded-full -top-20 -left-20 opacity-10"
//           animate={{ scale: [0.8, 1.2, 0.8], rotate: [0, 90, 0] }}
//           transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
//         ></motion.div>
//         <motion.div
//           className="absolute w-72 h-72 bg-white rounded-full -bottom-10 -right-10 opacity-10"
//           animate={{ scale: [1.2, 0.8, 1.2], rotate: [90, 0, 90] }}
//           transition={{ repeat: Infinity, duration: 12, ease: "easeInOut", delay: 1 }}
//         ></motion.div>

//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={containerVariants} // Use container variants for hero text staggering
//           className="relative z-10 text-center px-4"
//         >
//           <motion.h1
//             className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg"
//             variants={heroTextVariants}
//           >
//             Our Advisory Council
//           </motion.h1>
//           <motion.p
//             className="text-lg md:text-xl max-w-3xl mx-auto"
//             variants={heroSubtitleVariants}
//           >
//             Guiding our vision with unparalleled expertise and foresight.
//           </motion.p>
//         </motion.div>
//       </section>

//       {/* Introduction Section */}
//       <section className="max-w-4xl mx-auto py-12 px-4 text-center">
//         <motion.p
//           className="text-lg text-gray-700 leading-relaxed mb-8"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
//         >
//           The Peptides Knowledge Park Advisory Council is composed of highly respected leaders and experts from diverse fields. Their collective wisdom and strategic insights are instrumental in shaping our initiatives, ensuring we remain at the forefront of innovation and excellence.
//         </motion.p>
//         <motion.p
//           className="text-lg text-gray-700 leading-relaxed"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
//         >
//           Explore the various facets of our Advisory Council below.
//         </motion.p>
//       </section>

//       {/* Section 1: About Our Advisory Board */}
//       <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 py-20 px-4 items-center">
//         <motion.div
//           className="flex items-center justify-center relative"
//           initial={{ opacity: 0, x: -100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.8 }}
//         >
//           <img
//             src="https://placehold.co/600x400/E0E0E0/333333?text=Advisory+Board" // Changed background to light gray
//             alt="About Advisory Board"
//             className="rounded-3xl shadow-2xl w-full max-w-lg object-cover h-96 transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out" // Added fixed height
//             onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/CCCCCC/000000?text=Image+Load+Error'; }}
//           />
//           <motion.div
//             className="absolute -bottom-8 -left-8 w-40 h-40 bg-blue-500 rounded-full opacity-70 blur-xl"
//             animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
//             transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
//           ></motion.div>
//         </motion.div>
//         <motion.div
//           className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 flex flex-col justify-center"
//           initial={{ opacity: 0, x: 100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           <span className="text-sm text-blue-600 tracking-widest uppercase mb-3 font-semibold">Our Foundation</span>
//           <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">Delving into the Core of Our Advisory Board</h2>
//           <p className="text-gray-700 mb-4 text-lg leading-relaxed">
//             Our Advisory Board guides our initiatives, ensuring we remain innovative and aligned with global best practices. This section provides a deep dive into their mission, structure, and profound impact.
//           </p>
//           <Link
//             to="/about-advisory-board"
//             className="inline-flex items-center bg-blue-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-200 transform hover:scale-105 active:scale-95" // Reduced button size
//           >
//             Discover the Board
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//           </Link>
//         </motion.div>
//       </section>

//       {/* Section 2: Meet Our Advisory Council */}
//       <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 py-20 px-4 items-center">
//         <motion.div
//           className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1" // Order changed for alternating layout
//           initial={{ opacity: 0, x: -100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           <span className="text-sm text-purple-600 tracking-widest uppercase mb-3 font-semibold">Our Experts</span>
//           <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">Meet the Distinguished Members of Our Council</h2>
//           <p className="text-gray-700 mb-4 text-lg leading-relaxed">
//             Our Council comprises diverse thought leaders. Each member brings unique insights that enrich our collective expertise. Explore profiles and contributions.
//           </p>
//           <Link
//             to="/our-advisory-council"
//             className="inline-flex items-center bg-purple-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-purple-700 transition-colors duration-200 transform hover:scale-105 active:scale-95" // Reduced button size
//           >
//             View Council Members
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//           </Link>
//         </motion.div>
//         <motion.div
//           className="flex items-center justify-center relative order-1 lg:order-2" // Order changed for alternating layout
//           initial={{ opacity: 0, x: 100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.8 }}
//         >
//           <img
//             src="https://placehold.co/600x400/E0E0E0/333333?text=Council+Members" // Changed background to light gray
//             alt="Our Advisory Council"
//             className="rounded-3xl shadow-2xl w-full max-w-lg object-cover h-96 transform -rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out" // Added fixed height
//             onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/CCCCCC/000000?text=Image+Load+Error'; }}
//           />
//           <motion.div
//             className="absolute -top-8 -right-8 w-40 h-40 bg-purple-500 rounded-full opacity-70 blur-xl"
//             animate={{ y: [0, 10, 0], x: [0, -10, 0] }}
//             transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
//           ></motion.div>
//         </motion.div>
//       </section>

//       {/* Section 3: Become a Member */}
//       <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 py-20 px-4 items-center">
//         <motion.div
//           className="flex items-center justify-center relative"
//           initial={{ opacity: 0, x: -100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.8 }}
//         >
//           <img
//             src="https://placehold.co/600x400/E0E0E0/333333?text=Join+Us" // Changed background to light gray
//             alt="Become a Member"
//             className="rounded-3xl shadow-2xl w-full max-w-lg object-cover h-96 transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out" // Added fixed height
//             onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/CCCCCC/000000?text=Image+Load+Error'; }}
//           />
//           <motion.div
//             className="absolute -bottom-8 -right-8 w-40 h-40 bg-green-500 rounded-full opacity-70 blur-xl"
//             animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
//             transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut" }}
//           ></motion.div>
//         </motion.div>
//         <motion.div
//           className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 flex flex-col justify-center"
//           initial={{ opacity: 0, x: 100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           <span className="text-sm text-green-600 tracking-widest uppercase mb-3 font-semibold">Join Our Ranks</span>
//           <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">Contribute to Excellence: Become an Advisory Member</h2>
//           <p className="text-gray-700 mb-4 text-lg leading-relaxed">
//             Are you a leader passionate about driving innovation? Explore how your expertise can contribute to our mission and the broader community.
//           </p>
//           <Link
//             to="/become-a-member"
//             className="inline-flex items-center bg-green-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-green-700 transition-colors duration-200 transform hover:scale-105 active:scale-95" // Reduced button size
//           >
//             Apply for Membership
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//           </Link>
//         </motion.div>
//       </section>
//     </main>
//   );
// };

// export default AdvisoryCouncilDropdown;




// src/components/AdvisoryCouncil/AdvisoryCouncilDropdown.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, BookOpen, UserPlus } from 'lucide-react'; // Icons for the cards (kept for potential future use or if icons are desired elsewhere)

const AdvisoryCouncilDropdown = () => {
  // Animation variants for staggered appearance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Variants for individual items (e.g., paragraphs, cards)
  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  // Variants for hero section elements
  const heroTextVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const heroSubtitleVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <main className="bg-white min-h-screen font-inter">
      {/* Hero Section */}
      <section className="relative h-[45vh] md:h-[55vh] flex items-center justify-center text-white overflow-hidden bg-gradient-to-br from-blue-700 to-purple-600">
        {/* Animated background shapes for uniqueness */}
        <motion.div
          className="absolute w-96 h-96 bg-white rounded-full -top-20 -left-20 opacity-10"
          animate={{ scale: [0.8, 1.2, 0.8], rotate: [0, 90, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        ></motion.div>
        <motion.div
          className="absolute w-72 h-72 bg-white rounded-full -bottom-10 -right-10 opacity-10"
          animate={{ scale: [1.2, 0.8, 1.2], rotate: [90, 0, 90] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut", delay: 1 }}
        ></motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants} // Use container variants for hero text staggering
          className="relative z-10 text-center px-4"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg"
            variants={heroTextVariants}
          >
            Our Advisory Council
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-3xl mx-auto"
            variants={heroSubtitleVariants}
          >
            Guiding our vision with unparalleled expertise and foresight.
          </motion.p>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="max-w-4xl mx-auto py-12 px-4 text-center">
        <motion.p
          className="text-lg text-gray-700 leading-relaxed mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          The Peptides Knowledge Park Advisory Council is composed of highly respected leaders and experts from diverse fields. Their collective wisdom and strategic insights are instrumental in shaping our initiatives, ensuring we remain at the forefront of innovation and excellence.
        </motion.p>
        <motion.p
          className="text-lg text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          Explore the various facets of our Advisory Council below.
        </motion.p>
      </section>

      {/* Section 1: About Our Advisory Board */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 py-20 px-4 items-center">
        <motion.div
          className="flex items-center justify-center relative"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://placehold.co/600x400/E0E0E0/333333?text=Advisory+Board" // Changed background to light gray
            alt="About Advisory Board"
            className="rounded-3xl shadow-2xl w-full max-w-lg object-cover h-96 transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out" // Added fixed height
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/CCCCCC/000000?text=Image+Load+Error'; }}
          />
          <motion.div
            className="absolute -bottom-8 -left-8 w-40 h-40 bg-blue-500 rounded-full opacity-70 blur-xl"
            animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          ></motion.div>
        </motion.div>
        <motion.div
          className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 flex flex-col justify-center h-96" // Added h-96 to match image height
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-sm text-blue-600 tracking-widest uppercase mb-3 font-semibold">Our Foundation</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">Delving into the Core of Our Advisory Board</h2>
          <p className="text-gray-700 mb-4 text-lg leading-relaxed">
            Our Advisory Board guides our initiatives, ensuring we remain innovative and aligned with global best practices. This section provides a deep dive into their mission, structure, and profound impact.
          </p>
          <Link
            to="/about-advisory-board"
            className="inline-flex items-center justify-center w-full max-w-xs bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2 px-8 rounded-full shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 active:scale-95" // Wider button, centered
          >
            Discover the Board
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </section>

      {/* Section 2: Meet Our Advisory Council */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 py-20 px-4 items-center">
        <motion.div
          className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1 h-96" // Added h-96 to match image height
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-sm text-purple-600 tracking-widest uppercase mb-3 font-semibold">Our Experts</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">Meet the Distinguished Members of Our Council</h2>
          <p className="text-gray-700 mb-4 text-lg leading-relaxed">
            Our Council comprises diverse thought leaders. Each member brings unique insights that enrich our collective expertise. Explore profiles and contributions.
          </p>
          <Link
            to="/our-advisory-council"
            className="inline-flex items-center justify-center w-full max-w-xs bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-2 px-8 rounded-full shadow-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105 active:scale-95" // Wider button, centered
          >
            View Council Members
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
        <motion.div
          className="flex items-center justify-center relative order-1 lg:order-2" // Order changed for alternating layout
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://placehold.co/600x400/E0E0E0/333333?text=Council+Members" // Changed background to light gray
            alt="Our Advisory Council"
            className="rounded-3xl shadow-2xl w-full max-w-lg object-cover h-96 transform -rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out" // Added fixed height
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/CCCCCC/000000?text=Image+Load+Error'; }}
          />
          <motion.div
            className="absolute -top-8 -right-8 w-40 h-40 bg-purple-500 rounded-full opacity-70 blur-xl"
            animate={{ y: [0, 10, 0], x: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          ></motion.div>
        </motion.div>
      </section>

      {/* Section 3: Become a Member */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 py-20 px-4 items-center">
        <motion.div
          className="flex items-center justify-center relative"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://placehold.co/600x400/E0E0E0/333333?text=Join+Us" // Changed background to light gray
            alt="Become a Member"
            className="rounded-3xl shadow-2xl w-full max-w-lg object-cover h-96 transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out" // Added fixed height
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/CCCCCC/000000?text=Image+Load+Error'; }}
          />
          <motion.div
            className="absolute -bottom-8 -right-8 w-40 h-40 bg-green-500 rounded-full opacity-70 blur-xl"
            animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut" }}
          ></motion.div>
        </motion.div>
        <motion.div
          className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 flex flex-col justify-center h-96" // Added h-96 to match image height
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-sm text-green-600 tracking-widest uppercase mb-3 font-semibold">Join Our Ranks</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">Contribute to Excellence: Become an Advisory Member</h2>
          <p className="text-gray-700 mb-4 text-lg leading-relaxed">
            Are you a leader passionate about driving innovation? Explore how your expertise can contribute to our mission and the broader community.
          </p>
          <Link
            to="/become-a-member"
            className="inline-flex items-center justify-center w-full max-w-xs bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold py-2 px-8 rounded-full shadow-lg hover:from-green-700 hover:to-teal-700 transition-all duration-200 transform hover:scale-105 active:scale-95" // Wider button, centered
          >
            Apply for Membership
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </section>
    </main>
  );
};

export default AdvisoryCouncilDropdown;


// // src/components/AdvisoryCouncil/AdvisoryCouncilDropdown.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { Users, BookOpen, UserPlus } from 'lucide-react'; // Icons for the cards

// const AdvisoryCouncilDropdown = () => {
//   // Animation variants for staggered appearance
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   // Variants for individual items (e.g., paragraphs, cards)
//   const itemVariants = {
//     hidden: { y: 50, opacity: 0, scale: 0.95 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       scale: 1,
//       transition: {
//         duration: 0.7,
//         ease: "easeOut",
//       },
//     },
//   };

//   // Variants for hero section elements
//   const heroTextVariants = {
//     hidden: { y: -50, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 1,
//         ease: "easeOut",
//       },
//     },
//   };

//   const heroSubtitleVariants = {
//     hidden: { y: 30, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 1,
//         delay: 0.3,
//         ease: "easeOut",
//       },
//     },
//   };

//   // Variants for card icons
//   const iconVariants = {
//     hidden: { scale: 0, rotate: -180, opacity: 0 },
//     visible: {
//       scale: 1,
//       rotate: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 260,
//         damping: 20,
//         delay: 0.2, // Delay relative to card appearance
//       },
//     },
//   };

//   const cardLinks = [
//     {
//       title: 'About Our Advisory Board',
//       description: 'Understand the purpose and structure of our esteemed Advisory Board.',
//       icon: Users,
//       link: '/about-advisory-board',
//       color: 'from-blue-500 to-blue-600',
//     },
//     {
//       title: 'Meet Our Advisory Council',
//       description: 'Discover the profiles and expertise of our distinguished council members.',
//       icon: BookOpen,
//       link: '/our-advisory-council',
//       color: 'from-purple-500 to-purple-600',
//     },
//     {
//       title: 'Become a Member',
//       description: 'Learn how you can join our Advisory Council and contribute to our mission.',
//       icon: UserPlus,
//       link: '/become-a-member',
//       color: 'from-green-500 to-green-600',
//     },
//   ];

//   return (
//     <main className="bg-white min-h-screen font-inter">
//       {/* Hero Section */}
//       <section className="relative h-[45vh] md:h-[55vh] flex items-center justify-center text-white overflow-hidden bg-gradient-to-br from-blue-700 to-purple-600">
//         {/* Animated background shapes for uniqueness */}
//         <motion.div
//           className="absolute w-96 h-96 bg-white rounded-full -top-20 -left-20 opacity-10"
//           animate={{ scale: [0.8, 1.2, 0.8], rotate: [0, 90, 0] }}
//           transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
//         ></motion.div>
//         <motion.div
//           className="absolute w-72 h-72 bg-white rounded-full -bottom-10 -right-10 opacity-10"
//           animate={{ scale: [1.2, 0.8, 1.2], rotate: [90, 0, 90] }}
//           transition={{ repeat: Infinity, duration: 12, ease: "easeInOut", delay: 1 }}
//         ></motion.div>

//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={containerVariants} // Use container variants for hero text staggering
//           className="relative z-10 text-center px-4"
//         >
//           <motion.h1
//             className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg"
//             variants={heroTextVariants}
//           >
//             Our Advisory Council
//           </motion.h1>
//           <motion.p
//             className="text-lg md:text-xl max-w-3xl mx-auto"
//             variants={heroSubtitleVariants}
//           >
//             Guiding our vision with unparalleled expertise and foresight.
//           </motion.p>
//         </motion.div>
//       </section>

//       {/* Introduction Section */}
//       <section className="max-w-4xl mx-auto py-12 px-4 text-center">
//         <motion.p
//           className="text-lg text-gray-700 leading-relaxed mb-8"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
//         >
//           The Peptides Knowledge Park Advisory Council is composed of highly respected leaders and experts from diverse fields. Their collective wisdom and strategic insights are instrumental in shaping our initiatives, ensuring we remain at the forefront of innovation and excellence.
//         </motion.p>
//         <motion.p
//           className="text-lg text-gray-700 leading-relaxed"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
//         >
//           Explore the various facets of our Advisory Council below.
//         </motion.p>
//       </section>

//       {/* Navigation Cards Section */}
//       <section className="max-w-7xl mx-auto py-12 px-4">
//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//         >
//           {cardLinks.map((card, idx) => (
//             <motion.div
//               key={idx}
//               className={`relative bg-gradient-to-br ${card.color} text-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center cursor-pointer transform hover:scale-105 transition-all duration-300 ease-in-out`}
//               variants={itemVariants}
//               whileHover={{ scale: 1.05, boxShadow: "0 20px 30px rgba(0,0,0,0.2)" }} // Enhanced hover effect
//             >
//               <motion.div
//                 className="w-16 h-16 bg-white text-blue-700 rounded-full flex items-center justify-center mb-6 shadow-md"
//                 variants={iconVariants} // Apply icon specific animation
//               >
//                 <card.icon className="w-8 h-8" />
//               </motion.div>
//               <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
//               <p className="text-base opacity-90 mb-6">{card.description}</p>
//               <Link
//                 to={card.link}
//                 className="inline-flex items-center bg-white text-blue-700 font-semibold py-2 px-6 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200"
//               >
//                 Learn More
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </Link>
//             </motion.div>
//           ))}
//         </motion.div>
//       </section>
//     </main>
//   );
// };

// export default AdvisoryCouncilDropdown;






// // src/components/AdvisoryCouncil/AdvisoryCouncilDropdown.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { Users, BookOpen, UserPlus } from 'lucide-react'; // Icons for the cards (kept for potential future use or if icons are desired elsewhere)

// const AdvisoryCouncilDropdown = () => {
//   // Animation variants for staggered appearance
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   // Variants for individual items (e.g., paragraphs, cards)
//   const itemVariants = {
//     hidden: { y: 50, opacity: 0, scale: 0.95 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       scale: 1,
//       transition: {
//         duration: 0.7,
//         ease: "easeOut",
//       },
//     },
//   };

//   // Variants for hero section elements
//   const heroTextVariants = {
//     hidden: { y: -50, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 1,
//         ease: "easeOut",
//       },
//     },
//   };

//   const heroSubtitleVariants = {
//     hidden: { y: 30, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 1,
//         delay: 0.3,
//         ease: "easeOut",
//       },
//     },
//   };

//   return (
//     <main className="bg-white min-h-screen font-inter">
//       {/* Hero Section */}
//       <section className="relative h-[45vh] md:h-[55vh] flex items-center justify-center text-white overflow-hidden bg-gradient-to-br from-blue-700 to-purple-600">
//         {/* Animated background shapes for uniqueness */}
//         <motion.div
//           className="absolute w-96 h-96 bg-white rounded-full -top-20 -left-20 opacity-10"
//           animate={{ scale: [0.8, 1.2, 0.8], rotate: [0, 90, 0] }}
//           transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
//         ></motion.div>
//         <motion.div
//           className="absolute w-72 h-72 bg-white rounded-full -bottom-10 -right-10 opacity-10"
//           animate={{ scale: [1.2, 0.8, 1.2], rotate: [90, 0, 90] }}
//           transition={{ repeat: Infinity, duration: 12, ease: "easeInOut", delay: 1 }}
//         ></motion.div>

//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={containerVariants} // Use container variants for hero text staggering
//           className="relative z-10 text-center px-4"
//         >
//           <motion.h1
//             className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg"
//             variants={heroTextVariants}
//           >
//             Our Advisory Council
//           </motion.h1>
//           <motion.p
//             className="text-lg md:text-xl max-w-3xl mx-auto"
//             variants={heroSubtitleVariants}
//           >
//             Guiding our vision with unparalleled expertise and foresight.
//           </motion.p>
//         </motion.div>
//       </section>

//       {/* Introduction Section */}
//       <section className="max-w-4xl mx-auto py-12 px-4 text-center">
//         <motion.p
//           className="text-lg text-gray-700 leading-relaxed mb-8"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
//         >
//           The Peptides Knowledge Park Advisory Council is composed of highly respected leaders and experts from diverse fields. Their collective wisdom and strategic insights are instrumental in shaping our initiatives, ensuring we remain at the forefront of innovation and excellence.
//         </motion.p>
//         <motion.p
//           className="text-lg text-gray-700 leading-relaxed"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
//         >
//           Explore the various facets of our Advisory Council below.
//         </motion.p>
//       </section>

//       {/* Section 1: About Our Advisory Board */}
//       <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 py-20 px-4 items-center">
//         <motion.div
//           className="flex items-center justify-center relative"
//           initial={{ opacity: 0, x: -100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.8 }}
//         >
//           <img
//             src="https://placehold.co/600x400/DDA0DD/FFFFFF?text=Advisory+Board+Image"
//             alt="About Advisory Board"
//             className="rounded-3xl shadow-2xl w-full max-w-lg object-cover transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out"
//             onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/DDA0DD/FFFFFF?text=Image+Load+Error'; }}
//           />
//           <motion.div
//             className="absolute -bottom-8 -left-8 w-40 h-40 bg-blue-500 rounded-full opacity-70 blur-xl"
//             animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
//             transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
//           ></motion.div>
//         </motion.div>
//         <motion.div
//           className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 flex flex-col justify-center"
//           initial={{ opacity: 0, x: 100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           <span className="text-sm text-blue-600 tracking-widest uppercase mb-3 font-semibold">Our Foundation</span>
//           <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">Delving into the Core of Our Advisory Board</h2>
//           <p className="text-gray-700 mb-8 text-lg leading-relaxed">
//             Our Advisory Board is the cornerstone of our strategic direction, composed of visionary leaders who bring unparalleled experience and insights. They guide our initiatives, ensuring we remain innovative and aligned with global best practices. This section provides a deep dive into their mission, structure, and the profound impact they have on our organization's success.
//           </p>
//           <Link
//             to="/about-advisory-board"
//             className="inline-flex items-center bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-200 transform hover:scale-105 active:scale-95"
//           >
//             Discover the Board
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//           </Link>
//         </motion.div>
//       </section>

//       {/* Section 2: Meet Our Advisory Council */}
//       <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 py-20 px-4 items-center">
//         <motion.div
//           className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1" // Order changed for alternating layout
//           initial={{ opacity: 0, x: -100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           <span className="text-sm text-purple-600 tracking-widest uppercase mb-3 font-semibold">Our Experts</span>
//           <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">Meet the Distinguished Members of Our Council</h2>
//           <p className="text-gray-700 mb-8 text-lg leading-relaxed">
//             Our Advisory Council comprises a diverse group of thought leaders, innovators, and industry veterans. Each member brings a unique perspective and wealth of knowledge that enriches our collective expertise. In this section, you can explore individual profiles, learn about their backgrounds, and understand their contributions to our shared vision.
//           </p>
//           <Link
//             to="/our-advisory-council"
//             className="inline-flex items-center bg-purple-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-purple-700 transition-colors duration-200 transform hover:scale-105 active:scale-95"
//           >
//             View Council Members
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//           </Link>
//         </motion.div>
//         <motion.div
//           className="flex items-center justify-center relative order-1 lg:order-2" // Order changed for alternating layout
//           initial={{ opacity: 0, x: 100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.8 }}
//         >
//           <img
//             src="https://placehold.co/600x400/90EE90/000000?text=Council+Members"
//             alt="Our Advisory Council"
//             className="rounded-3xl shadow-2xl w-full max-w-lg object-cover transform -rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out"
//             onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/90EE90/000000?text=Image+Load+Error'; }}
//           />
//           <motion.div
//             className="absolute -top-8 -right-8 w-40 h-40 bg-purple-500 rounded-full opacity-70 blur-xl"
//             animate={{ y: [0, 10, 0], x: [0, -10, 0] }}
//             transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
//           ></motion.div>
//         </motion.div>
//       </section>

//       {/* Section 3: Become a Member */}
//       <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 py-20 px-4 items-center">
//         <motion.div
//           className="flex items-center justify-center relative"
//           initial={{ opacity: 0, x: -100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.8 }}
//         >
//           <img
//             src="https://placehold.co/600x400/FFB6C1/000000?text=Join+Us"
//             alt="Become a Member"
//             className="rounded-3xl shadow-2xl w-full max-w-lg object-cover transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out"
//             onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/FFB6C1/000000?text=Image+Load+Error'; }}
//           />
//           <motion.div
//             className="absolute -bottom-8 -right-8 w-40 h-40 bg-green-500 rounded-full opacity-70 blur-xl"
//             animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
//             transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut" }}
//           ></motion.div>
//         </motion.div>
//         <motion.div
//           className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 flex flex-col justify-center"
//           initial={{ opacity: 0, x: 100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           <span className="text-sm text-green-600 tracking-widest uppercase mb-3 font-semibold">Join Our Ranks</span>
//           <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">Contribute to Excellence: Become an Advisory Member</h2>
//           <p className="text-gray-700 mb-8 text-lg leading-relaxed">
//             Are you a leader passionate about driving innovation and shaping the future? We invite you to explore the opportunity to join our Advisory Council. This section outlines the benefits of membership, the application process, and how your expertise can contribute to our mission and the broader community.
//           </p>
//           <Link
//             to="/become-a-member"
//             className="inline-flex items-center bg-green-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-green-700 transition-colors duration-200 transform hover:scale-105 active:scale-95"
//           >
//             Apply for Membership
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//           </Link>
//         </motion.div>
//       </section>
//     </main>
//   );
// };

// export default AdvisoryCouncilDropdown;
