import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#f2efe9] text-[#714819] py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-[#714819] text-2xl font-bold mb-4">Peptides</h3>
          <p className="text-sm leading-relaxed">Innovating at the intersection of science and technology to empower research, education, and corporate growth.</p>
          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-2"><Phone className="w-4 h-4" /><span>+91 79970 40959</span></div>
            <div className="flex items-center gap-2"><Mail className="w-4 h-4" /><span>hello@peptides.co.in</span></div>
            <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /><span>#402, 4th floor, Manjeera Trinity Corporate, KPHB, Hyderabad, 500072</span></div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-[#714819] text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/about-us" className="hover:text-amber-700 transition">About Us</Link></li>
            <li><Link to="/gallery" className="hover:text-amber-700 transition">Gallery</Link></li>
            <li><Link to="/academic-assist" className="hover:text-amber-700 transition">Academic Services</Link></li>
            <li><Link to="/corporate-astute" className="hover:text-amber-700 transition">Corporate Services</Link></li>
            <li><Link to="/career-saga" className="hover:text-amber-700 transition">Career Services</Link></li>
            <li><Link to="/advisory-council" className="hover:text-amber-700 transition">Advisory Council</Link></li>
            <li><Link to="/contact" className="hover:text-amber-700 transition">Contact Us</Link></li>
            <li><Link to="/about-us" className="hover:text-amber-700 transition">Our Mission</Link></li>
          </ul>
        </div>

        {/* Newsletter / Social */}
        <div>
          <h4 className="text-[#714819] text-xl font-semibold mb-4">Stay Connected</h4>
          <p className="text-sm mb-4">Join our community and stay updated with the latest news and opportunities.</p>
          <div className="flex gap-3">
            <Link to="/contact" className="w-9 h-9 flex items-center justify-center bg-[#b89c6b] text-white rounded-full hover:bg-[#9e855c] transition-colors duration-200">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link to="/contact" className="w-9 h-9 flex items-center justify-center bg-[#b89c6b] text-white rounded-full hover:bg-[#9e855c] transition-colors duration-200">
              <Twitter className="w-5 h-5" />
            </Link>
            <a href="https://www.linkedin.com/company/peptides-knowledge-park/" target="_blank" rel="noreferrer" className="w-9 h-9 flex items-center justify-center bg-[#b89c6b] text-white rounded-full hover:bg-[#9e855c] transition-colors duration-200">
              <Linkedin className="w-5 h-5" />
            </a>
            <Link to="/contact" className="w-9 h-9 flex items-center justify-center bg-[#b89c6b] text-white rounded-full hover:bg-[#9e855c] transition-colors duration-200">
              <Instagram className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-[#714819] text-xl font-semibold mb-4">Legal</h4>
          <div className="flex flex-col gap-2 text-sm">
            <Link to="/contact" className="hover:text-amber-700 transition">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-amber-700 transition">Terms of Service</Link>
            <Link to="/contact" className="hover:text-amber-700 transition">FAQs</Link>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-300 pt-6 text-center text-xs text-[#714819]">
        Copyright © {new Date().getFullYear()} Peptides. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;