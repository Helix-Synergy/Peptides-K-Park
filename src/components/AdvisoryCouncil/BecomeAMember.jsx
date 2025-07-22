// src/components/AdvisoryCouncil/BecomeAMember.jsx
import React from 'react';
import { motion } from 'framer-motion';

const BecomeAMember = () => {
  return (
    <main className="bg-white min-h-screen font-inter pt-20 flex flex-col items-center justify-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl shadow-xl"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Become a Member</h1>
        <p className="text-lg text-gray-700 mb-8">
          Thank you for your interest in joining our Advisory Council!
          We are currently developing a dedicated application form for this.
        </p>
        <p className="text-md text-gray-600 mb-8">
          Please check back soon, or contact us directly for more information.
        </p>
        <a
          href="/contact" 
          className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300 ease-in-out"
        >
          Contact Us
        </a>
      </motion.div>
    </main>
  );
};

export default BecomeAMember;
