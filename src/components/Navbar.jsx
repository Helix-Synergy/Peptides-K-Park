// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Hexagon, ChevronDown, Headphones, Menu, X } from 'lucide-react';
// import logo from '../assets/logo.webp';

// const navLinks = [
//   { name: 'Home', href: '/' },
//   { name: 'About', href: '/about-us' },
//   {
//     name: 'Advisory Council',
//     dropdown: [
//       { name: 'About Advisory Board', href: '/about-advisory-board' },
//       { name: 'Our Advisory Council', href: '/our-advisory-council' },
//       { name: 'Become a Member', href: '/become-a-member' },
//     ],
//     href: '/advisory-council',
//   },
//   {
//     name: 'Academic Assist',
//     dropdown: [
//       { name: 'Academic Projects', href: '/academic-projects' },
//       { name: 'Seminars', href: '/seminars' },
//       { name: 'Workshops', href: '/workshops' },
//       { name: 'Tech Talks', href: '/tech-talks' },
//       { name: 'Research Assistance & Thesis Support', href: '/research-assistance-thesis-support' },
//       { name: 'Faculty Upskilling Service', href: '/faculty-upskilling-service' },
//       { name: 'E-Learn-Digital Learning', href: '/e-learn-digital-learning' },
//     ],
//     href: '/academic-assist',
//   },
//   {
//     name: 'Corporate Astute',
//     dropdown: [
//       { name: 'Corporate Collaborations', href: '/corporate-collaborations' },
//       { name: 'Corporate Support Services', href: '/corporate-support-services' },
//       { name: 'StackUp', href: '/stackup' },
//     ],
//     href: '/corporate-astute',
//   },
//   {
//     name: 'Career Saga',
//     dropdown: [
//       { name: 'Career Coach', href: '/career-coach' },
//       { name: 'Job Mate', href: '/job-mate' },
//       { name: 'Peptides Assistance Membership', href: '/peptides-assistance-membership' },
//     ],
//     href: '/career-saga',
//   },
//   { name: 'Contact', href: '/contact' },
// ];

// const Navbar = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null);

//   const handleDropdown = (name) => {
//     setOpenDropdown(openDropdown === name ? null : name);
//   };

//   return (
//     <nav className="w-full bg-white border-b border-gray-100 shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex my-4 items-center justify-between h-20">
//         {/* Logo */}
//         <div className="flex items-center space-x-2">
//           <div className="w-10 h-10 bg-gradient-to-tr from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
//             {/* Placeholder for logo icon */}
//             <span className="text-white font-bold text-2xl">P</span>
//           </div>
//           <span className="text-2xl font-semibold text-gray-900">Peptides</span>
//         </div>
//         {/* Desktop Nav Links */}
//         <div className="flex-1 items-center justify-center hidden lg:flex">
//           <ul className="flex space-x-6">
//             {navLinks.map((link) =>
//               link.dropdown ? (
//                 <li key={link.name} className="relative group">
//                   <Link to={link.href} className="font-semibold text-gray-800 hover:text-blue-700 focus:outline-none flex items-center">
//                     {link.name}
//                     <ChevronDown className="ml-1 w-4 h-4" />
//                   </Link>
//                   <ul className="absolute left-0 mt-[27px] w-56 bg-white border-2 border-t-blue-700 border-gray-100 shadow-lg rounded-b-xl opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity z-20">
//                     {link.dropdown.map((item) => (
//                       <li key={item.name}>
//                         <Link to={item.href} className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 text-sm">{item.name}</Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </li>
//               ) : (
//                 <li key={link.name}>
//                   <Link to={link.href} className="font-semibold text-gray-800 hover:text-blue-700">{link.name}</Link>
//                 </li>
//               )
//             )}
//           </ul>
//         </div>
//         {/* Burger Menu Icon */}
//         <div className="lg:hidden flex items-center">
//           <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 rounded focus:outline-none">
//             {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
//           </button>
//         </div>
//         {/* Contact & Actions (hidden on mobile) */}
//         <div className="hidden lg:flex items-center space-x-6">
//           <div className="flex items-center space-x-2 border-gray-200">
//             <Headphones className="w-7 h-7 text-blue-400" />
//             <div className="flex flex-col">
//               <span className="text-xs text-gray-500">Have Any Questions?</span>
//               <span className="text-pink-500 font-bold text-lg">+91 7997940959</span>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Mobile Menu */}
//       {mobileOpen && (
//         <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg px-4 py-4">
//           <ul className="flex flex-col space-y-2">
//             {navLinks.map((link) =>
//               link.dropdown ? (
//                 <li key={link.name}>
//                   <button
//                     className="w-full flex items-center justify-between font-semibold text-gray-800 hover:text-blue-700 focus:outline-none px-2 py-2"
//                     onClick={() => handleDropdown(link.name)}
//                   >
//                     <span>{link.name}</span>
//                     <ChevronDown className={`ml-1 w-4 h-4 transform transition-transform ${openDropdown === link.name ? 'rotate-180' : ''}`} />
//                   </button>
//                   {openDropdown === link.name && (
//                     <ul className="pl-4 py-2">
//                       {link.dropdown.map((item) => (
//                         <li key={item.name}>
//                           <Link
//                             to={item.href}
//                             className="block px-2 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 text-sm rounded"
//                             onClick={() => setMobileOpen(false)}
//                           >
//                             {item.name}
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </li>
//               ) : (
//                 <li key={link.name}>
//                   <Link
//                     to={link.href}
//                     className="font-semibold text-gray-800 hover:text-blue-700 block px-2 py-2 rounded"
//                     onClick={() => setMobileOpen(false)}
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               )
//             )}
//           </ul>
//           {/* Contact info for mobile */}
//           <div className="flex items-center space-x-2 border-t pt-4 mt-4">
//             <Headphones className="w-7 h-7 text-blue-400" />
//             <div className="flex flex-col">
//               <span className="text-xs text-gray-500">Have Any Questions?</span>
//               <span className="text-pink-500 font-bold text-lg">+91 7997940959</span>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar; 


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { ChevronDown, Headphones, Menu, X } from 'lucide-react';
// // import logo from '../assets/logo.webp'; // If logo is not used, it can be removed

// const navLinks = [
//   { name: 'Home', href: '/' },
//   { name: 'About', href: '/about-us' },
//   {
//     name: 'Advisory Council',
//     dropdown: [
//       { name: 'About Advisory Board', href: '/about-advisory-board' },
//       { name: 'Our Advisory Council', href: '/our-advisory-council' },
//       { name: 'Become a Member', href: '/become-a-member' },
//     ],
//     href: '/advisory-council',
//   },
//   {
//     name: 'Academic Assist',
//     dropdown: [
//       { name: 'Academic Projects', href: '/academic-projects' },
//       { name: 'Seminars', href: '/seminars' },
//       { name: 'Workshops', href: '/workshops' },
//       { name: 'Tech Talks', href: '/tech-talks' },
//       { name: 'Research Assistance & Thesis Support', href: '/research-assistance-thesis-support' },
//       { name: 'Faculty Upskilling Service', href: '/faculty-upskilling-service' },
//       { name: 'E-Learn-Digital Learning', href: '/e-learn-digital-learning' },
//     ],
//     href: '/academic-assist',
//   },
//   {
//     name: 'Corporate Astute',
//     dropdown: [
//       { name: 'Corporate Collaborations', href: '/corporate-collaborations' },
//       { name: 'Corporate Support Services', href: '/corporate-support-services' },
//       { name: 'StackUp', href: '/stackup' },
//     ],
//     href: '/corporate-astute',
//   },
//   {
//     name: 'Career Saga',
//     dropdown: [
//       { name: 'Career Coach', href: '/career-coach' },
//       { name: 'Job Mate', href: '/job-mate' },
//       { name: 'Peptides Assistance Membership', href: '/peptides-assistance-membership' },
//     ],
//     href: '/career-saga',
//   },
//   { name: 'Contact', href: '/contact' },
// ];

// const Navbar = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null); // For mobile dropdowns
//   const [desktopHoverDropdown, setDesktopHoverDropdown] = useState(null); // For desktop hover

//   const handleMobileDropdown = (name) => {
//     setOpenDropdown(openDropdown === name ? null : name);
//   };

//   return (
//     <nav className="w-full bg-white border-b border-gray-100 shadow-sm z-50 relative">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex my-4 items-center justify-between h-20">
//         {/* Logo */}
//         <div className="flex items-center space-x-2">
//           <div className="w-10 h-10 bg-gradient-to-tr from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
//             {/* Placeholder for logo icon */}
//             <span className="text-white font-bold text-2xl">P</span>
//           </div>
//           <span className="text-2xl font-semibold text-gray-900">Peptides</span>
//         </div>

//         {/* Desktop Nav Links (hidden on mobile, centered on desktop) */}
//         <div className="hidden lg:flex flex-grow justify-center">
//           <ul className="flex space-x-6">
//             {navLinks.map((link) => (
//               link.dropdown ? (
//                 <li
//                   key={link.name}
//                   className="relative group"
//                   onMouseEnter={() => setDesktopHoverDropdown(link.name)}
//                   onMouseLeave={() => setDesktopHoverDropdown(null)}
//                 >
//                   <Link
//                     to={link.href}
//                     className="font-semibold text-gray-800 hover:text-blue-700 focus:outline-none flex items-center py-2"
//                     onClick={(e) => {
//                       if (link.dropdown) {
//                         e.preventDefault();
//                       }
//                     }}
//                   >
//                     {link.name}
//                     <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${desktopHoverDropdown === link.name ? 'rotate-180' : ''}`} />
//                   </Link>
//                   {desktopHoverDropdown === link.name && (
//                     <ul
//                       className="absolute left-1/2 -translate-x-1/2 mt-0 w-60 bg-white border-2 border-t-blue-700 border-gray-100 shadow-xl rounded-b-xl opacity-100 transition-opacity duration-300 ease-in-out py-2"
//                       style={{ minWidth: 'max-content' }}
//                     >
//                       {link.dropdown.map((item) => (
//                         <li key={item.name}>
//                           <Link
//                             to={item.href}
//                             className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 text-sm transition-colors duration-150"
//                             onClick={() => setDesktopHoverDropdown(null)}
//                           >
//                             {item.name}
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </li>
//               ) : (
//                 <li key={link.name}>
//                   <Link
//                     to={link.href}
//                     className="font-semibold text-gray-800 hover:text-blue-700 py-2 flex items-center" // <<< ADDED 'flex items-center' HERE
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               )
//             ))}
//           </ul>
//         </div>

//         {/* Burger Menu Icon (still for mobile only) */}
//         <div className="lg:hidden flex items-center">
//           <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 rounded focus:outline-none text-gray-700 hover:text-blue-700">
//             {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
//           </button>
//         </div>

//         {/* Contact & Actions (hidden on mobile, aligned right on desktop) */}
//         <div className="hidden lg:flex items-center space-x-2">
//           <Headphones className="w-7 h-7 text-blue-400" />
//           <div className="flex flex-col">
//             <span className="text-xs text-gray-500">Have Any Questions?</span>
//             <span className="text-pink-500 font-bold text-lg">+91 7997940959</span>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu (unchanged, will now correctly map all navLinks) */}
//       {mobileOpen && (
//         <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg px-4 py-4 absolute w-full top-full left-0 z-40">
//           <ul className="flex flex-col space-y-2">
//             {navLinks.map((link) =>
//               link.dropdown ? (
//                 <li key={link.name}>
//                   <button
//                     className="w-full flex items-center justify-between font-semibold text-gray-800 hover:text-blue-700 focus:outline-none px-2 py-2 rounded"
//                     onClick={() => handleMobileDropdown(link.name)}
//                   >
//                     <span>{link.name}</span>
//                     <ChevronDown className={`ml-1 w-4 h-4 transform transition-transform duration-200 ${openDropdown === link.name ? 'rotate-180' : ''}`} />
//                   </button>
//                   {openDropdown === link.name && (
//                     <ul className="pl-6 py-2 border-l border-blue-200 ml-2 mt-1">
//                       {link.dropdown.map((item) => (
//                         <li key={item.name}>
//                           <Link
//                             to={item.href}
//                             className="block px-2 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 text-sm rounded transition-colors duration-150"
//                             onClick={() => setMobileOpen(false)}
//                           >
//                             {item.name}
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </li>
//               ) : (
//                 <li key={link.name}>
//                   <Link
//                     to={link.href}
//                     className="font-semibold text-gray-800 hover:text-blue-700 block px-2 py-2 rounded"
//                     onClick={() => setMobileOpen(false)}
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               )
//             )}
//           </ul>
//           {/* Contact info for mobile */}
//           <div className="flex items-center space-x-2 border-t pt-4 mt-4 px-2">
//             <Headphones className="w-7 h-7 text-blue-400" />
//             <div className="flex flex-col">
//               <span className="text-xs text-gray-500">Have Any Questions?</span>
//               <span className="text-pink-500 font-bold text-lg">+91 7997940959</span>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { ChevronDown, Headphones, Menu, X } from 'lucide-react';
// // import logo from '../assets/logo.webp'; // If logo is not used, it can be removed

// const navLinks = [
//   { name: 'Home', href: '/' },
//   { name: 'About', href: '/about-us' },
//   {
//     name: 'Advisory Council',
//     dropdown: [
//       { name: 'About Advisory Board', href: '/about-advisory-board' },
//       { name: 'Our Advisory Council', href: '/our-advisory-council' },
//       { name: 'Become a Member', href: '/become-a-member' },
//     ],
//     href: '/advisory-council',
//   },
//   {
//     name: 'Academic Assist',
//     dropdown: [
//       { name: 'Academic Projects', href: '/academic-projects' },
//       { name: 'Seminars', href: '/seminars' },
//       { name: 'Workshops', href: '/workshops' },
//       { name: 'Tech Talks', href: '/tech-talks' },
//       { name: 'Research Assistance & Thesis Support', href: '/research-assistance-thesis-support' },
//       { name: 'Faculty Upskilling Service', href: '/faculty-upskilling-service' },
//       { name: 'E-Learn-Digital Learning', href: '/e-learn-digital-learning' },
//     ],
//     href: '/academic-assist',
//   },
//   {
//     name: 'Corporate Astute',
//     dropdown: [
//       { name: 'Corporate Collaborations', href: '/corporate-collaborations' },
//       { name: 'Corporate Support Services', href: '/corporate-support-services' },
//       { name: 'StackUp', href: '/stackup' },
//     ],
//     href: '/corporate-astute',
//   },
//   {
//     name: 'Career Saga',
//     dropdown: [
//       { name: 'Career Coach', href: '/career-coach' },
//       { name: 'Job Mate', href: '/job-mate' },
//       { name: 'Peptides Assistance Membership', href: '/peptides-assistance-membership' },
//     ],
//     href: '/career-saga',
//   },
//   { name: 'Contact', href: '/contact' },
// ];

// const Navbar = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null); // For mobile dropdowns
//   const [desktopHoverDropdown, setDesktopHoverDropdown] = useState(null); // For desktop hover

//   const handleMobileDropdown = (name) => {
//     setOpenDropdown(openDropdown === name ? null : name);
//   };

//   return (
//     <nav className="w-full bg-white border-b border-gray-100 shadow-sm z-50 relative">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex my-4 items-center justify-between h-20">
//         {/* Logo */}
//         <div className="flex items-center space-x-2 flex-shrink-0"> {/* Added flex-shrink-0 */}
//           <div className="w-10 h-10 bg-gradient-to-tr from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
//             {/* Placeholder for logo icon */}
//             <span className="text-white font-bold text-2xl">P</span>
//           </div>
//           <span className="text-2xl font-semibold text-gray-900">Peptides</span>
//         </div>

//         {/* Desktop Nav Links (hidden on mobile, centered on desktop) */}
//         {/* Added min-w-0 to prevent overflow if nav links are too long on smaller desktop screens */}
//         <div className="hidden lg:flex flex-grow justify-center min-w-0">
//           <ul className="flex space-x-6">
//             {navLinks.map((link) => (
//               link.dropdown ? (
//                 <li
//                   key={link.name}
//                   className="relative group flex-shrink-0" // Added flex-shrink-0 to dropdown li
//                   onMouseEnter={() => setDesktopHoverDropdown(link.name)}
//                   onMouseLeave={() => setDesktopHoverDropdown(null)}
//                 >
//                   <Link
//                     to={link.href}
//                     className="font-semibold text-gray-800 hover:text-blue-700 focus:outline-none flex items-center py-2 whitespace-nowrap" // Added whitespace-nowrap
//                     onClick={(e) => {
//                       if (link.dropdown) {
//                         e.preventDefault();
//                       }
//                     }}
//                   >
//                     {link.name}
//                     <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${desktopHoverDropdown === link.name ? 'rotate-180' : ''}`} />
//                   </Link>
//                   {desktopHoverDropdown === link.name && (
//                     <ul
//                       className="absolute left-1/2 -translate-x-1/2 mt-0 w-60 bg-white border-2 border-t-blue-700 border-gray-100 shadow-xl rounded-b-xl opacity-100 transition-opacity duration-300 ease-in-out py-2"
//                       style={{ minWidth: 'max-content' }}
//                     >
//                       {link.dropdown.map((item) => (
//                         <li key={item.name}>
//                           <Link
//                             to={item.href}
//                             className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 text-sm transition-colors duration-150"
//                             onClick={() => setDesktopHoverDropdown(null)}
//                           >
//                             {item.name}
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </li>
//               ) : (
//                 <li key={link.name} className="flex-shrink-0"> {/* Added flex-shrink-0 to regular li */}
//                   <Link
//                     to={link.href}
//                     className="font-semibold text-gray-800 hover:text-blue-700 py-2 flex items-center whitespace-nowrap" // Added whitespace-nowrap
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               )
//             ))}
//           </ul>
//         </div>

//         {/* Burger Menu Icon (visible on smaller screens) */}
//         <div className="lg:hidden flex items-center flex-shrink-0"> {/* Added flex-shrink-0 */}
//           <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 rounded focus:outline-none text-gray-700 hover:text-blue-700">
//             {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
//           </button>
//         </div>

//         {/* Contact & Actions (hidden on mobile, aligned right on desktop) */}
//         <div className="hidden lg:flex items-center space-x-2 flex-shrink-0"> {/* Added flex-shrink-0 */}
//           <Headphones className="w-7 h-7 text-blue-400" />
//           <div className="flex flex-col">
//             <span className="text-xs text-gray-500 whitespace-nowrap">Have Any Questions?</span> {/* Added whitespace-nowrap */}
//             <span className="text-pink-500 font-bold text-lg whitespace-nowrap">+91 7997940959</span> {/* Added whitespace-nowrap */}
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu (full-width overlay below navbar) */}
//       {mobileOpen && (
//         <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg px-4 py-4 absolute w-full top-full left-0 z-40">
//           <ul className="flex flex-col space-y-2">
//             {navLinks.map((link) =>
//               link.dropdown ? (
//                 <li key={link.name}>
//                   <button
//                     className="w-full flex items-center justify-between font-semibold text-gray-800 hover:text-blue-700 focus:outline-none px-2 py-2 rounded"
//                     onClick={() => handleMobileDropdown(link.name)}
//                   >
//                     <span>{link.name}</span>
//                     <ChevronDown className={`ml-1 w-4 h-4 transform transition-transform duration-200 ${openDropdown === link.name ? 'rotate-180' : ''}`} />
//                   </button>
//                   {openDropdown === link.name && (
//                     <ul className="pl-6 py-2 border-l border-blue-200 ml-2 mt-1">
//                       {link.dropdown.map((item) => (
//                         <li key={item.name}>
//                           <Link
//                             to={item.href}
//                             className="block px-2 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 text-sm rounded transition-colors duration-150"
//                             onClick={() => setMobileOpen(false)}
//                           >
//                             {item.name}
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </li>
//               ) : (
//                 <li key={link.name}>
//                   <Link
//                     to={link.href}
//                     className="font-semibold text-gray-800 hover:text-blue-700 block px-2 py-2 rounded"
//                     onClick={() => setMobileOpen(false)}
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               )
//             )}
//           </ul>
//           {/* Contact info for mobile */}
//           <div className="flex items-center space-x-2 border-t pt-4 mt-4 px-2">
//             <Headphones className="w-7 h-7 text-blue-400" />
//             <div className="flex flex-col">
//               <span className="text-xs text-gray-500">Have Any Questions?</span>
//               <span className="text-pink-500 font-bold text-lg">+91 7997940959</span>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;




// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { ChevronDown, Headphones, Menu, X } from 'lucide-react';
// // import logo from '../assets/logo.webp'; // If logo is not used, it can be removed

// const navLinks = [
//   { name: 'Home', href: '/' },
//   { name: 'About', href: '/about-us' },
//   {
//     name: 'Advisory Council',
//     dropdown: [
//       { name: 'About Advisory Board', href: '/about-advisory-board' },
//       { name: 'Our Advisory Council', href: '/our-advisory-council' },
//       { name: 'Become a Member', href: '/become-a-member' },
//     ],
//     href: '/advisory-council',
//   },
//   {
//     name: 'Academic Assist',
//     dropdown: [
//       { name: 'Academic Projects', href: '/academic-projects' },
//       { name: 'Seminars', href: '/seminars' },
//       { name: 'Workshops', href: '/workshops' },
//       { name: 'Tech Talks', href: '/tech-talks' },
//       { name: 'Research Assistance & Thesis Support', href: '/research-assistance-thesis-support' },
//       { name: 'Faculty Upskilling Service', href: '/faculty-upskilling-service' },
//       { name: 'E-Learn-Digital Learning', href: '/e-learn-digital-learning' },
//     ],
//     href: '/academic-assist',
//   },
//   {
//     name: 'Corporate Astute',
//     dropdown: [
//       { name: 'Corporate Collaborations', href: '/corporate-collaborations' },
//       { name: 'Corporate Support Services', href: '/corporate-support-services' },
//       { name: 'StackUp', href: '/stackup' },
//     ],
//     href: '/corporate-astute',
//   },
//   {
//     name: 'Career Saga',
//     dropdown: [
//       { name: 'Career Coach', href: '/career-coach' },
//       { name: 'Job Mate', href: '/job-mate' },
//       { name: 'Peptides Assistance Membership', href: '/peptides-assistance-membership' },
//     ],
//     href: '/career-saga',
//   },
//   { name: 'Contact', href: '/contact' },
// ];

// const Navbar = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null); // For mobile dropdowns
//   const [desktopHoverDropdown, setDesktopHoverDropdown] = useState(null); // For desktop hover
//   const location = useLocation();

//   const handleMobileDropdown = (name) => {
//     setOpenDropdown(openDropdown === name ? null : name);
//   };

//   return (
//     <nav className="w-full bg-white/30 backdrop-blur-3xl border-b border-gray-100 shadow-sm z-50 sticky top-0">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center h-20">
//         {/* Logo */}
//         <div className="flex items-center space-x-2 flex-shrink-0">
//           <div className="w-10 h-10 bg-gradient-to-tr from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
//             {/* Placeholder for logo icon */}
//             <span className="text-white font-bold text-2xl">P</span>
//           </div>
//           <span className="text-2xl font-semibold text-gray-900">Peptides</span>
//         </div>

//         {/* Desktop Nav Links (hidden on mobile, centered on desktop) */}
//         <div className="hidden lg:flex flex-grow justify-center min-w-0">
//           <ul className="flex space-x-6">
//             {navLinks.map((link) => {
//               // Determine if this link is active
//               const isActive = link.dropdown
//                 ? location.pathname === link.href || link.dropdown.some(item => location.pathname === item.href)
//                 : location.pathname === link.href;
//               return link.dropdown ? (
//                 <li
//                   key={link.name}
//                   className="relative group flex-shrink-0"
//                   onMouseEnter={() => setDesktopHoverDropdown(link.name)}
//                   onMouseLeave={() => setDesktopHoverDropdown(null)}
//                 >
//                   <Link
//                     to={link.href}
//                     className={`font-semibold focus:outline-none flex items-center py-2 whitespace-nowrap border-b-2 transition-colors duration-150 ${isActive ? 'text-blue-700 border-blue-700' : 'text-gray-800 border-transparent hover:text-blue-700 hover:border-blue-700'}`}
//                   >
//                     {link.name}
//                     <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${desktopHoverDropdown === link.name ? 'rotate-180' : ''}`} />
//                   </Link>
//                   {desktopHoverDropdown === link.name && (
//                     <ul
//                       className="absolute left-0 min-w-full w-full bg-white border-2 border-t-blue-700 border-gray-100 shadow-xl rounded-b-xl opacity-100 transition-opacity duration-300 ease-in-out py-2 z-20"
//                     >
//                       {link.dropdown.map((item) => (
//                         <li key={item.name}>
//                           <Link
//                             to={item.href}
//                             className={`block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 text-sm transition-colors duration-150 ${location.pathname === item.href ? 'text-blue-700 font-semibold' : ''}`}
//                             onClick={() => setDesktopHoverDropdown(null)}
//                           >
//                             {item.name}
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </li>
//               ) : (
//                 <li key={link.name} className="flex-shrink-0">
//                   <Link
//                     to={link.href}
//                     className={`font-semibold py-2 flex items-center whitespace-nowrap border-b-2 transition-colors duration-150 ${isActive ? 'text-blue-700 border-blue-700' : 'text-gray-800 border-transparent hover:text-blue-700 hover:border-blue-700'}`}
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               );
//             })}
//           </ul>
//         </div>

//         {/* Burger Menu Icon (visible on smaller screens) */}
//         <div className="lg:hidden flex items-center flex-shrink-0">
//           <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 rounded focus:outline-none text-gray-700 hover:text-blue-700">
//             {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
//           </button>
//         </div>

//         {/* Contact & Actions (hidden on mobile, aligned right on desktop) */}
//         <div className="hidden lg:flex items-center space-x-2 flex-shrink-0">
//           <Headphones className="w-7 h-7 text-blue-400" />
//           <div className="flex flex-col">
//             <span className="text-xs text-gray-500 whitespace-nowrap">Have Any Questions?</span>
//             <span className="text-pink-500 font-bold text-lg whitespace-nowrap">+91 7997940959</span>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu (full-width overlay below navbar) */}
//       {mobileOpen && (
//         <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg px-4 py-4 absolute w-full top-full left-0 z-40">
//           <ul className="flex flex-col space-y-2">
//             {navLinks.map((link) =>
//               link.dropdown ? (
//                 <li key={link.name}>
//                   <button
//                     className="w-full flex items-center justify-between font-semibold text-gray-800 hover:text-blue-700 focus:outline-none px-2 py-2 rounded"
//                     onClick={() => handleMobileDropdown(link.name)}
//                   >
//                     <span>{link.name}</span>
//                     <ChevronDown className={`ml-1 w-4 h-4 transform transition-transform duration-200 ${openDropdown === link.name ? 'rotate-180' : ''}`} />
//                   </button>
//                   {openDropdown === link.name && (
//                     <ul className="pl-6 py-2 border-l border-blue-200 ml-2 mt-1">
//                       {link.dropdown.map((item) => (
//                         <li key={item.name}>
//                           <Link
//                             to={item.href}
//                             className="block px-2 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 text-sm rounded transition-colors duration-150"
//                             onClick={() => setMobileOpen(false)}
//                           >
//                             {item.name}
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </li>
//               ) : (
//                 <li key={link.name}>
//                   <Link
//                     to={link.href}
//                     className="font-semibold text-gray-800 hover:text-blue-700 block px-2 py-2 rounded"
//                     onClick={() => setMobileOpen(false)}
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               )
//             )}
//           </ul>
//           {/* Contact info for mobile */}
//           <div className="flex items-center space-x-2 border-t pt-4 mt-4 px-2">
//             <Headphones className="w-7 h-7 text-blue-400" />
//             <div className="flex flex-col">
//               <span className="text-xs text-gray-500">Have Any Questions?</span>
//               <span className="text-pink-500 font-bold text-lg">+91 7997940959</span>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;





import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Headphones, Menu, X } from 'lucide-react';
// import logo from '../assets/logo.webp'; // If logo is not used, it can be removed

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about-us' },
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
  const [openDropdown, setOpenDropdown] = useState(null); // For mobile dropdowns
  const [desktopHoverDropdown, setDesktopHoverDropdown] = useState(null); // For desktop hover
  const location = useLocation();

  const handleMobileDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <nav className="w-full bg-white/30 backdrop-blur-3xl border-b border-gray-100 shadow-sm z-50 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center h-20">
        {/* Logo */}
        <div className="flex items-center space-x-2 flex-shrink-0">
          <div className="w-10 h-10 bg-gradient-to-tr from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
            {/* Placeholder for logo icon */}
            <span className="text-white font-bold text-2xl">P</span>
          </div>
          <span className="text-2xl font-semibold text-gray-900">Peptides</span>
        </div>

        {/* Desktop Nav Links (hidden on mobile, centered on desktop) */}
        <div className="hidden lg:flex flex-grow justify-center min-w-0">
          <ul className="flex space-x-6">
            {navLinks.map((link) => {
              // Determine if this link is active
              const isActive = link.dropdown
                ? location.pathname === link.href || link.dropdown.some(item => location.pathname === item.href)
                : location.pathname === link.href;
              return link.dropdown ? (
                <li
                  key={link.name}
                  className="relative group flex-shrink-0"
                  onMouseEnter={() => setDesktopHoverDropdown(link.name)}
                  onMouseLeave={() => setDesktopHoverDropdown(null)}
                >
                  <Link
                    to={link.href}
                    className={`font-semibold focus:outline-none flex items-center py-2 whitespace-nowrap border-b-2 transition-colors duration-150 ${isActive ? 'text-blue-700 border-blue-700' : 'text-gray-800 border-transparent hover:text-blue-700 hover:border-blue-700'}`}
                  >
                    {link.name}
                    <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${desktopHoverDropdown === link.name ? 'rotate-180' : ''}`} />
                  </Link>
                  {desktopHoverDropdown === link.name && (
                    <ul
                      // Changed to solid white background for better visibility
                      className="absolute left-0 min-w-full w-48 bg-white border border-gray-200 rounded-xl shadow-xl transition-opacity duration-300 ease-in-out py-2 z-20 overflow-hidden"
                    >
                      {link.dropdown.map((item) => (
                        <li key={item.name}>
                          <Link
                            to={item.href}
                            className={`block px-4 py-2 text-lg font-bold text-gray-800 hover:bg-blue-100 hover:text-blue-700 transition-colors duration-150 ${location.pathname === item.href ? 'text-blue-700 bg-blue-50' : ''}`}
                            onClick={() => setDesktopHoverDropdown(null)}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={link.name} className="flex-shrink-0">
                  <Link
                    to={link.href}
                    className={`font-semibold py-2 flex items-center whitespace-nowrap border-b-2 transition-colors duration-150 ${isActive ? 'text-blue-700 border-blue-700' : 'text-gray-800 border-transparent hover:text-blue-700 hover:border-blue-700'}`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Burger Menu Icon (visible on smaller screens) */}
        <div className="lg:hidden flex items-center flex-shrink-0">
          <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 rounded focus:outline-none text-gray-700 hover:text-blue-700">
            {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Contact & Actions (hidden on mobile, aligned right on desktop) */}
        <div className="hidden lg:flex items-center space-x-2 flex-shrink-0">
          <Headphones className="w-7 h-7 text-blue-400" />
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 whitespace-nowrap">Have Any Questions?</span>
            <span className="text-pink-500 font-bold text-lg whitespace-nowrap">+91 7997940959</span>
          </div>
        </div>
      </div>

      {/* Mobile Menu (full-width overlay below navbar) */}
      {mobileOpen && (
        <div className="lg:hidden bg-white/90 backdrop-blur-lg border-t border-gray-100 shadow-lg px-4 py-4 absolute w-full top-full left-0 z-40">
          <ul className="flex flex-col space-y-2">
            {navLinks.map((link) =>
              link.dropdown ? (
                <li key={link.name}>
                  <button
                    className="w-full flex items-center justify-between font-semibold text-gray-800 hover:text-blue-700 focus:outline-none px-2 py-2 rounded"
                    onClick={() => handleMobileDropdown(link.name)}
                  >
                    <span>{link.name}</span>
                    <ChevronDown className={`ml-1 w-4 h-4 transform transition-transform duration-200 ${openDropdown === link.name ? 'rotate-180' : ''}`} />
                  </button>
                  {openDropdown === link.name && (
                    <ul className="pl-6 py-2 border-l border-blue-200 ml-2 mt-1 bg-white rounded-lg shadow-md"> {/* Changed to solid white background for mobile nested dropdown */}
                      {link.dropdown.map((item) => (
                        <li key={item.name}>
                          <Link
                            to={item.href}
                            className="block px-2 py-2 text-lg font-bold text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded transition-colors duration-150"
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
          <div className="flex items-center space-x-2 border-t pt-4 mt-4 px-2">
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
