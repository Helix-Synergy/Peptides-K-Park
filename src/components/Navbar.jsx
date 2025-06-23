import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Hexagon, ChevronDown, Headphones, Menu, X } from 'lucide-react';
import logo from '../assets/logo.webp';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  {
    name: 'Advisory Council',
    dropdown: [
      { name: 'About Advisory Board', href: '/about-advisory-board' },
      { name: 'Our Advisory Council', href: '/our-advisory-council' },
      { name: 'Become a Member', href: '/become-a-member' },
    ],
    href: '/advisory-council',
  },
  {
    name: 'Academic Assist',
    dropdown: [
      { name: 'Academic Projects', href: '/academic-projects' },
      { name: 'Seminars', href: '/seminars' },
      { name: 'Workshops', href: '/workshops' },
      { name: 'Tech Talks', href: '/tech-talks' },
      { name: 'Research Assistance & Thesis Support', href: '/research-assistance-thesis-support' },
      { name: 'Faculty Upskilling Service', href: '/faculty-upskilling-service' },
      { name: 'E-Learn-Digital Learning', href: '/e-learn-digital-learning' },
    ],
    href: '/academic-assist',
  },
  {
    name: 'Corporate Astute',
    dropdown: [
      { name: 'Corporate Collaborations', href: '/corporate-collaborations' },
      { name: 'Corporate Support Services', href: '/corporate-support-services' },
      { name: 'StackUp', href: '/stackup' },
    ],
    href: '/corporate-astute',
  },
  {
    name: 'Career Saga',
    dropdown: [
      { name: 'Career Coach', href: '/career-coach' },
      { name: 'Job Mate', href: '/job-mate' },
      { name: 'Peptides Assistance Membership', href: '/peptides-assistance-membership' },
    ],
    href: '/career-saga',
  },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <nav className="w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex my-4 items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-tr from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
            {/* Placeholder for logo icon */}
            <span className="text-white font-bold text-2xl">P</span>
          </div>
          <span className="text-2xl font-semibold text-gray-900">Peptides</span>
        </div>
        {/* Desktop Nav Links */}
        <div className="flex-1 items-center justify-center hidden lg:flex">
          <ul className="flex space-x-6">
            {navLinks.map((link) =>
              link.dropdown ? (
                <li key={link.name} className="relative group">
                  <Link to={link.href} className="font-semibold text-gray-800 hover:text-blue-700 focus:outline-none flex items-center">
                    {link.name}
                    <ChevronDown className="ml-1 w-4 h-4" />
                  </Link>
                  <ul className="absolute left-0 mt-[27px] w-56 bg-white border-2 border-t-blue-700 border-gray-100 shadow-lg rounded-b-xl opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity z-20">
                    {link.dropdown.map((item) => (
                      <li key={item.name}>
                        <Link to={item.href} className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 text-sm">{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={link.name}>
                  <Link to={link.href} className="font-semibold text-gray-800 hover:text-blue-700">{link.name}</Link>
                </li>
              )
            )}
          </ul>
        </div>
        {/* Burger Menu Icon */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 rounded focus:outline-none">
            {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
        {/* Contact & Actions (hidden on mobile) */}
        <div className="hidden lg:flex items-center space-x-6">
          <div className="flex items-center space-x-2 border-gray-200">
            <Headphones className="w-7 h-7 text-blue-400" />
            <div className="flex flex-col">
              <span className="text-xs text-gray-500">Have Any Questions?</span>
              <span className="text-pink-500 font-bold text-lg">+91 7997940959</span>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg px-4 py-4">
          <ul className="flex flex-col space-y-2">
            {navLinks.map((link) =>
              link.dropdown ? (
                <li key={link.name}>
                  <button
                    className="w-full flex items-center justify-between font-semibold text-gray-800 hover:text-blue-700 focus:outline-none px-2 py-2"
                    onClick={() => handleDropdown(link.name)}
                  >
                    <span>{link.name}</span>
                    <ChevronDown className={`ml-1 w-4 h-4 transform transition-transform ${openDropdown === link.name ? 'rotate-180' : ''}`} />
                  </button>
                  {openDropdown === link.name && (
                    <ul className="pl-4 py-2">
                      {link.dropdown.map((item) => (
                        <li key={item.name}>
                          <Link
                            to={item.href}
                            className="block px-2 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 text-sm rounded"
                            onClick={() => setMobileOpen(false)}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="font-semibold text-gray-800 hover:text-blue-700 block px-2 py-2 rounded"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              )
            )}
          </ul>
          {/* Contact info for mobile */}
          <div className="flex items-center space-x-2 border-t pt-4 mt-4">
            <Headphones className="w-7 h-7 text-blue-400" />
            <div className="flex flex-col">
              <span className="text-xs text-gray-500">Have Any Questions?</span>
              <span className="text-pink-500 font-bold text-lg">+91 7997940959</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 