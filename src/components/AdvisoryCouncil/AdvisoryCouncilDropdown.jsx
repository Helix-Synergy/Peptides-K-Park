// src/components/AdvisoryCouncil/AdvisoryCouncilDropdown.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
    <main className="bg-white min-h-screen font-poppins">
      {/* Hero Section */}
      <section className="relative h-[45vh] md:h-[55vh] flex items-center justify-center text-white overflow-hidden bg-gradient-to-br from-[#0f2920] to-[#3a4a3f]">
        {/* Animated background shapes */}
        <motion.div
          className="absolute w-96 h-96 bg-[#1f3b30] rounded-full -top-20 -left-20 opacity-10"
          animate={{ scale: [0.8, 1.2, 0.8], rotate: [0, 90, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        ></motion.div>
        <motion.div
          className="absolute w-72 h-72 bg-[#1f3b30] rounded-full -bottom-10 -right-10 opacity-10"
          animate={{ scale: [1.2, 0.8, 1.2], rotate: [90, 0, 90] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut", delay: 1 }}
        ></motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
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
            src="https://placehold.co/600x400/E0E0E0/333333?text=Advisory+Board"
            alt="About Advisory Board"
            className="rounded-3xl shadow-2xl w-full max-w-lg object-cover h-96 transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out"
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/CCCCCC/000000?text=Image+Load+Error'; }}
          />
          <motion.div
            className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#1f3b30] rounded-full opacity-70 blur-xl"
            animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          ></motion.div>
        </motion.div>
        <motion.div
          className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 flex flex-col justify-center h-96"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-sm text-[#1f3b30] tracking-widest uppercase mb-3 font-semibold">Our Foundation</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">Delving into the Core of Our Advisory Board</h2>
          <p className="text-gray-700 mb-4 text-lg leading-relaxed">
            Our Advisory Board guides our initiatives, ensuring we remain innovative and aligned with global best practices. This section provides a deep dive into their mission, structure, and profound impact.
          </p>
          <Link
            to="/panel-of-experts/about-advisory-board"
            className="inline-flex items-center justify-center w-full max-w-xs btn-primary"
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
          className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1 h-96"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-sm text-[#3a4a3f] tracking-widest uppercase mb-3 font-semibold">Our Experts</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">Meet the Distinguished Members of Our Council</h2>
          <p className="text-gray-700 mb-4 text-lg leading-relaxed">
            Our Council comprises diverse thought leaders. Each member brings unique insights that enrich our collective expertise. Explore profiles and contributions.
          </p>
          <Link
            to="/panel-of-experts/subject-matter-experts"
            className="inline-flex items-center justify-center w-full max-w-xs btn-primary"
          >
            View Council Members
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
        <motion.div
          className="flex items-center justify-center relative order-1 lg:order-2"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://placehold.co/600x400/E0E0E0/333333?text=Council+Members"
            alt="Our Advisory Council"
            className="rounded-3xl shadow-2xl w-full max-w-lg object-cover h-96 transform -rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out"
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/CCCCCC/000000?text=Image+Load+Error'; }}
          />
          <motion.div
            className="absolute -top-8 -right-8 w-40 h-40 bg-[#3a4a3f] rounded-full opacity-70 blur-xl"
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
            src="https://placehold.co/600x400/E0E0E0/333333?text=Join+Us"
            alt="Become a Member"
            className="rounded-3xl shadow-2xl w-full max-w-lg object-cover h-96 transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out"
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/CCCCCC/000000?text=Image+Load+Error'; }}
          />
          <motion.div
            className="absolute -bottom-8 -right-8 w-40 h-40 bg-[#1f3b30] rounded-full opacity-70 blur-xl"
            animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut" }}
          ></motion.div>
        </motion.div>
        <motion.div
          className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 flex flex-col justify-center h-96"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-sm text-[#0f2920] tracking-widest uppercase mb-3 font-semibold">Join Our Ranks</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">Contribute to Excellence: Become an Advisory Member</h2>
          <p className="text-gray-700 mb-4 text-lg leading-relaxed">
            Are you a leader passionate about driving innovation? Explore how your expertise can contribute to our mission and the broader community.
          </p>
          <Link
            to="/panel-of-experts/become-a-member"
            className="inline-flex items-center justify-center w-full max-w-xs btn-primary"
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