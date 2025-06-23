import React from 'react';
import { Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#23253A] text-white py-12 px-4 md:px-16 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-10 md:gap-0">
        {/* Company Info */}
        <div className="flex-1 min-w-[220px] flex flex-col items-start">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 flex items-center justify-center object-fill rounded-full bg-white bg-opacity-10 mr-3">
              {/* Hexagon logo icon */}
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="16,3 29,10.5 29,25.5 16,33 3,25.5 3,10.5" fill="#A78BFA" stroke="#fff" strokeWidth="2" />
              </svg>
            </div>
            <span className="text-2xl font-bold tracking-tight">Peptides</span>
          </div>
          <p className="text-sm text-gray-300 mb-6 max-w-xs">
            We are the best world Information Technology Company. Providing the highest quality in hardware, Software & Network solutions.
          </p>
        </div>
        {/* Quick Links */}
        <div className="flex-1 min-w-[220px] flex flex-col items-start md:items-center">
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <div className="flex flex-row gap-12">
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition">Make Appointment</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Customer Services</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Department</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">About Company</a></li>
            </ul>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition">Our Case Studies</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Free Consultation</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Meet Our Experts</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Our Business Growth</a></li>
            </ul>
          </div>
        </div>
        {/* Newsletter */}
        <div className="flex-1 min-w-[220px] flex flex-col items-start md:items-end">
          <h4 className="text-lg font-semibold mb-4">News Letter</h4>
          <p className="text-sm text-gray-300 mb-4 max-w-xs">Sign up today for hints, tips and the latest product news</p>
          <form className="flex w-full max-w-xs">
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 px-4 py-2 rounded-l-lg bg-white bg-opacity-10 text-white placeholder-gray-400 focus:outline-none focus:bg-opacity-20 border border-white border-opacity-20"
            />
            <button type="submit" className="bg-indigo-400 hover:bg-indigo-500 transition px-4 py-2 rounded-r-lg flex items-center justify-center">
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
      {/* Divider */}
      <div className="border-t border-white border-opacity-10 my-8" />
      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-sm">
        <div>
          Copyright © 2021 <span className="text-indigo-400">editech</span>. All Rights Reserved.
        </div>
        <div className="flex gap-6 font-semibold">
          <a href="#" className="hover:text-white transition">FAQs</a>
          <a href="#" className="hover:text-white transition">About Us</a>
          <a href="#" className="hover:text-white transition">Contact Us</a>
        </div>
      </div>
      {/* Background overlay for cityscape (optional, can be added as a background image via CSS) */}
    </footer>
  );
};

export default Footer; 