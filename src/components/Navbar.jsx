// import React, { useState, useEffect, useRef } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { PhoneCall, Menu, X, Home, Info, Mail, Layout, ChevronDown } from 'lucide-react';

// const navLinks = [
//   { name: 'Home', href: '/', icon: Home },
//   { name: 'About', href: '/about-us', icon: Info },
//   { name: 'Contact', href: '/contact', icon: Mail },
//   { name: 'Services', href: '/services', icon: Layout },
// ];

// const secondRowLinks = [
//   {
//     name: 'Panel of Experts (POE)',
//     href: '/panel-of-experts',
//     dropdown: [
//       { name: 'About Panel of Experts', href: '/panel-of-experts/about' },
//       { name: 'Subject Matter Experts', href: '/panel-of-experts/subject-matter-experts' },
//       { name: 'Become a Panel Member', href: '/panel-of-experts/become-a-member' },
//       { name: 'Activities/Benefits', href: '/panel-of-experts/activities-benefits' },
//     ],
//   },
//   {
//     name: 'Academic Assist',
//     href: '/academic-assist',
//     dropdown: [
//       { name: 'Academic Projects', href: '/academic-assist/projects' },
//       { name: 'Conferences/Seminars', href: '/academic-assist/conferences' },
//       { name: 'Workshops', href: '/academic-assist/workshops' },
//       { name: 'Internships', href: '/academic-assist/internships' },
//       { name: 'Publications', href: '/academic-assist/publications' },
//       { name: 'Skill Development (SKID)', href: '/academic-assist/skill-development' },
//       { name: 'Industrial Tours (INTO)', href: '/academic-assist/industrial-tours' },
//       { name: 'E-Studies', href: '/academic-assist/e-studies' },
//       { name: 'Competitive Exams Related Training (CERT)', href: '/academic-assist/cert' },
//     ],
//   },
//   {
//     name: 'Corporate Astute',
//     href: '/corporate-astute',
//     dropdown: [
//       { name: 'Corporate Support Service (CSS)', href: '/corporate-astute/css' },
//       { name: 'Contract Research Services (CRS)', href: '/corporate-astute/crs' },
//       { name: 'Faculty Upskilling Services (FUSS)', href: '/corporate-astute/fuss' },
//       { name: 'Research Assistance & Writing Services (RAWS)', href: '/corporate-astute/raws' },
//     ],
//   },
//   {
//     name: 'Career Saga',
//     href: '/career-saga',
//     dropdown: [
//       { name: 'Job Oriented Trainings (JOT)', href: '/career-saga/jot' },
//       { name: 'Placement Assistance (PLAST)', href: '/career-saga/plast' },
//       { name: 'Advanced Industrial Reach (AIR)', href: '/career-saga/air' },
//       { name: 'Peptides Assistance Membership (PAM)', href: '/career-saga/pam' },
//     ],
//   },
//   {
//     name: 'Collaborations',
//     href: '/collaborations',
//     dropdown: [
//       { name: 'Academic Collaborations', href: '/collaborations/academic' },
//       { name: 'Industry Collaborations', href: '/collaborations/industry' },
//       { name: 'Collaborate with Peptides', href: '/collaborations/peptides' },
//     ],
//   },
//   {
//     name: 'Gallery',
//     href: '/gallery',
//     dropdown: [],
//   },
//   {
//     name: 'Careers',
//     href: '/careers',
//     dropdown: [
//       { name: 'Jobs @ Peptides', href: '/careers/jobs' },
//       { name: 'Post a Job with Peptides', href: '/careers/post-job' },
//     ],
//   },
// ];

// const Navbar = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [desktopHoverDropdown, setDesktopHoverDropdown] = useState(null);
//   const location = useLocation();

//   const handleMobileDropdown = (name) => {
//     setOpenDropdown(openDropdown === name ? null : name);
//   };

//   return (
//     <nav className="bg-[#2d2d2d] text-[#e0e0e0] w-full font-sans sticky top-0 z-50">
//       {/* Desktop Logo and Top Bar */}
//       <div className="hidden lg:flex items-center justify-between h-[60px] px-4 sm:px-6 lg:px-8 relative">
//         <div className="absolute left-8 top-[65px] transform -translate-y-1/2 z-50">
//             <Link to="/">
//                 <img
//                     src="https://peptides.co.in/assets/img/logo/PeptidesKnowledgePark.png"
//                     alt="Peptides Knowledge Park Logo"
//                     className="h-[100px] w-[100px] bg-white rounded-full p-2"
//                 />
//             </Link>
//         </div>
//         <div className="flex-grow flex items-center justify-center space-x-6">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               to={link.href}
//               className={`flex items-center space-x-2 text-lg font-medium transition-colors duration-200
//                 ${location.pathname === link.href ? 'text-[#ffc107]' : 'text-white hover:text-[#ffc107]'}
//               `}
//             >
//               {link.icon && <link.icon className="w-5 h-5" />}
//               <span>{link.name}</span>
//             </Link>
//           ))}
//         </div>
//         <div className="flex-shrink-0 flex items-center space-x-2 ml-4">
//           <PhoneCall className="w-5 h-5 text-[#ffc107]" />
//           <span className="text-sm font-semibold text-white">
//             <a href="tel:+917997940959">+91 7997940959</a>
//           </span>
//         </div>
//       </div>

//       {/* Desktop Second Row */}
//       <div className="bg-[#232323] relative z-40 h-[70px] hidden lg:flex items-center">
//         <div className="flex-grow flex items-center justify-center space-x-4 relative h-full">
//             {secondRowLinks.map((link) => {
//                 const isDropdownActive = link.dropdown?.some(item => location.pathname === item.href);
//                 const isActive = location.pathname === link.href || isDropdownActive;
//                 return (
//                     <div
//                         key={link.name}
//                         className="relative group h-full flex items-center justify-center"
//                         onMouseEnter={() => setDesktopHoverDropdown(link.name)}
//                         onMouseLeave={() => setDesktopHoverDropdown(null)}
//                     >
//                         <Link
//                             to={link.href}
//                             className={`
//                                 relative px-5 py-2 text-sm font-semibold transition-all duration-300 whitespace-nowrap rounded-full border
//                                 ${isActive ? 'border-[#ffc107] text-[#ffc107]' : 'border-transparent text-white hover:border-[#ffc107]'}
//                             `}
//                         >
//                             {link.name}
//                         </Link>
//                         {link.dropdown && link.dropdown.length > 0 && desktopHoverDropdown === link.name && (
//                             <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-72 bg-[#2d2d2d] rounded-lg shadow-xl overflow-hidden py-2 z-50 animate-fadeIn">
//                                 {link.dropdown.map((item) => (
//                                     <Link
//                                         key={item.name}
//                                         to={item.href}
//                                         className="block px-4 py-2 text-white hover:bg-[#a87930] hover:text-[#2d2d2d] transition-colors duration-200"
//                                     >
//                                         {item.name}
//                                     </Link>
//                                 ))}
//                             </div>
//                         )}
//                     </div>
//                 );
//             })}
//         </div>
//       </div>

//       {/* Mobile Header */}
//       <div className="lg:hidden flex items-center justify-between w-full h-[60px] px-4">
//           <button
//               onClick={() => setMobileOpen(!mobileOpen)}
//               className="p-2 text-white"
//               aria-label="Toggle menu"
//           >
//               {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
//           </button>
//           <Link to="/">
//               <img
//                 src="https://peptides.co.in/assets/img/logo/PeptidesKnowledgePark.png"
//                 alt="Peptides Knowledge Park Logo"
//                 className="h-[45px]"
//               />
//           </Link>
//           <div className="w-7 h-7"></div> {/* Spacer to balance logo */}
//       </div>

//       {/* Mobile Second Row - Scrollable Marquee */}
//       <div className="lg:hidden relative z-30 overflow-x-auto whitespace-nowrap scrollbar-hide py-2">
//           {secondRowLinks.map((link) => {
//               const isActive = location.pathname === link.href || (link.dropdown && link.dropdown.some(d => location.pathname === d.href));
//               return (
//                   <Link
//                       key={link.name}
//                       to={link.href}
//                       className={`
//                           flex-shrink-0 relative px-4 py-2 mx-2 text-sm font-semibold transition-all duration-300 whitespace-nowrap rounded-full border
//                           ${isActive ? 'border-[#ffc107] text-[#ffc107]' : 'border-transparent text-white hover:border-[#ffc107]'}
//                       `}
//                   >
//                       {link.name}
//                   </Link>
//               );
//           })}
//       </div>

//       {/* Mobile Menu Panel */}
//       {mobileOpen && (
//           <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-[#1a1a1a] shadow-lg py-4 z-40 animate-slideDown overflow-y-auto">
//               <div className="flex justify-between p-4 items-center">
//                   <Link to="/">
//                       <img
//                           src="https://peptides.co.in/assets/img/logo/PeptidesKnowledgePark.png"
//                           alt="Peptides Knowledge Park Logo"
//                           className="h-[45px]"
//                       />
//                   </Link>
//                   <button
//                       onClick={() => setMobileOpen(false)}
//                       className="text-white"
//                       aria-label="Close menu"
//                   >
//                       <X className="w-7 h-7" />
//                   </button>
//               </div>
//               <ul className="flex flex-col space-y-2 px-4">
//                   {navLinks.map((link) => (
//                       <li key={link.name}>
//                           <Link
//                               to={link.href}
//                               onClick={() => setMobileOpen(false)}
//                               className="flex items-center space-x-2 py-3 px-2 font-medium text-white hover:text-[#ffc107]"
//                           >
//                               {link.icon && <link.icon className="w-5 h-5" />}
//                               <span>{link.name}</span>
//                           </Link>
//                       </li>
//                   ))}
//                   <div className="h-[1px] bg-[#333] my-4"></div>
//                   {secondRowLinks.map((link) => (
//                       <li key={link.name}>
//                           {link.dropdown && link.dropdown.length > 0 ? (
//                               <>
//                                   <button
//                                       onClick={() => handleMobileDropdown(link.name)}
//                                       className={`w-full text-left font-medium flex items-center justify-between py-3 px-2 rounded
//                                           ${openDropdown === link.name ? 'text-[#ffc107]' : 'text-white'}
//                                       `}
//                                   >
//                                       <span>{link.name}</span>
//                                       <ChevronDown
//                                           className={`w-5 h-5 transition-transform duration-200
//                                               ${openDropdown === link.name ? 'rotate-180' : ''}
//                                           `}
//                                       />
//                                   </button>
//                                   {openDropdown === link.name && (
//                                       <ul className="pl-6 mt-2 space-y-2 border-l border-[#333]">
//                                           {link.dropdown.map((item) => (
//                                               <li key={item.name}>
//                                                   <Link
//                                                       to={item.href}
//                                                       onClick={() => setMobileOpen(false)}
//                                                       className="block py-2 text-sm text-white hover:text-[#ffc107]"
//                                                   >
//                                                       {item.name}
//                                                   </Link>
//                                               </li>
//                                           ))}
//                                       </ul>
//                                   )}
//                               </>
//                           ) : (
//                               <Link
//                                   to={link.href}
//                                   onClick={() => setMobileOpen(false)}
//                                   className="block py-3 px-2 font-medium text-white hover:text-[#ffc107]"
//                               >
//                                   {link.name}
//                               </Link>
//                           )}
//                       </li>
//                   ))}
//               </ul>
//           </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState, useEffect, useRef } from "react";
// import { Link, useLocation } from "react-router-dom";
// import {
//   PhoneCall,
//   Menu,
//   X,
//   Home,
//   Info,
//   Mail,
//   Layout,
//   ChevronDown,
// } from "lucide-react";

// // Tailwind CSS keyframes for the marquee and mobile slide animations.
// const style = `
// @keyframes slideDown {
//   from {
//     transform: translateY(-100%);
//   }
//   to {
//     transform: translateY(0);
//   }
// }

// @keyframes slideUp {
//   from {
//     transform: translateY(0);
//   }
//   to {
//     transform: translateY(-100%);
//   }
// }

// .animate-slide-down {
//   animation: slideDown 0.3s ease-out forwards;
// }

// .animate-slide-up {
//   animation: slideUp 0.3s ease-out forwards;
// }

// /* Hide scrollbar but allow scrolling */
// .scrollbar-hide {
//   -ms-overflow-style: none; /* IE and Edge */
//   scrollbar-width: none; /* Firefox */
// }
// .scrollbar-hide::-webkit-scrollbar {
//   display: none; /* Chrome, Safari, and Opera */
// }
// `;

// const navLinks = [
//   { name: "Home", href: "/", icon: Home },
//   { name: "About", href: "/about-us", icon: Info },
//   { name: "Contact", href: "/contact", icon: Mail },
//   { name: "Services", href: "/services", icon: Layout },
// ];

// const secondRowLinks = [
//   {
//     name: "Panel of Experts (POE)",
//     href: "/panel-of-experts",
//     dropdown: [
//       { name: "About Panel of Experts", href: "/panel-of-experts/about" },
//       {
//         name: "Subject Matter Experts",
//         href: "/panel-of-experts/subject-matter-experts",
//       },
//       {
//         name: "Become a Panel Member",
//         href: "/panel-of-experts/become-a-member",
//       },
//       {
//         name: "Activities/Benefits",
//         href: "/panel-of-experts/activities-benefits",
//       },
//     ],
//   },
//   {
//     name: "Academic Assist",
//     href: "/academic-assist",
//     dropdown: [
//       { name: "Academic Projects", href: "/academic-assist/projects" },
//       { name: "Conferences/Seminars", href: "/academic-assist/conferences" },
//       { name: "Workshops", href: "/academic-assist/workshops" },
//       { name: "Internships", href: "/academic-assist/internships" },
//       { name: "Publications", href: "/academic-assist/publications" },
//       {
//         name: "Skill Development (SKID)",
//         href: "/academic-assist/skill-development",
//       },
//       {
//         name: "Industrial Tours (INTO)",
//         href: "/academic-assist/industrial-tours",
//       },
//       { name: "E-Studies", href: "/academic-assist/e-studies" },
//       {
//         name: "Competitive Exams Related Training (CERT)",
//         href: "/academic-assist/cert",
//       },
//     ],
//   },
//   {
//     name: "Corporate Astute",
//     href: "/corporate-astute",
//     dropdown: [
//       {
//         name: "Corporate Support Service (CSS)",
//         href: "/corporate-astute/css",
//       },
//       {
//         name: "Contract Research Services (CRS)",
//         href: "/corporate-astute/crs",
//       },
//       {
//         name: "Faculty Upskilling Services (FUSS)",
//         href: "/corporate-astute/fuss",
//       },
//       {
//         name: "Research Assistance & Writing Services (RAWS)",
//         href: "/corporate-astute/raws",
//       },
//     ],
//   },
//   {
//     name: "Career Saga",
//     href: "/career-saga",
//     dropdown: [
//       { name: "Job Oriented Trainings (JOT)", href: "/career-saga/jot" },
//       { name: "Placement Assistance (PLAST)", href: "/career-saga/plast" },
//       { name: "Advanced Industrial Reach (AIR)", href: "/career-saga/air" },
//       {
//         name: "Peptides Assistance Membership (PAM)",
//         href: "/career-saga/pam",
//       },
//     ],
//   },
//   {
//     name: "Collaborations",
//     href: "/collaborations",
//     dropdown: [
//       { name: "Academic Collaborations", href: "/collaborations/academic" },
//       { name: "Industry Collaborations", href: "/collaborations/industry" },
//       { name: "Collaborate with Peptides", href: "/collaborations/peptides" },
//     ],
//   },
//   {
//     name: "Gallery",
//     href: "/gallery",
//     dropdown: [],
//   },
//   {
//     name: "Careers",
//     href: "/careers",
//     dropdown: [
//       { name: "Jobs @ Peptides", href: "/careers/jobs" },
//       { name: "Post a Job with Peptides", href: "/careers/post-job" },
//     ],
//   },
// ];

// const ScrollingLinks = ({ links }) => {
//   const location = useLocation();

//   return (
//     <div className="relative w-full overflow-x-auto whitespace-nowrap pl-24 scrollbar-hide">
//       <div className="inline-flex py-2 px-4 sm:px-6  md:px-8">
//         {links.map((link, index) => {
//           const isDropdownActive = link.dropdown?.some(
//             (item) => location.pathname === item.href
//           );
//           const isActive = location.pathname === link.href || isDropdownActive;
//           return (
//             <Link
//               key={link.name + index}
//               to={link.href}
//               className={`
//                 flex-shrink-0 relative px-4 py-2 mx-2 text-sm font-semibold transition-all duration-300 whitespace-nowrap rounded-full border
//                 ${
//                   isActive
//                     ? "border-[#ffc107] text-[#ffc107]"
//                     : "border-transparent text-white hover:border-[#ffc107]"
//                 }
//               `}
//             >
//               {link.name}
//             </Link>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const location = useLocation();
//   // const [mobileOpen, setMobileOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [desktopHoverDropdown, setDesktopHoverDropdown] = useState(null);

//   const handleMobileDropdown = (name) => {
//     setOpenDropdown(openDropdown === name ? null : name);
//   };

//   useEffect(() => {
//     setIsMobileMenuOpen(false); // Close menu on navigation
//   }, [location.pathname]);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <>
//       <style>{style}</style>
//       <nav className="bg-[#2d2d2d] text-[#e0e0e0] w-full font-sans sticky top-0 z-50 shadow-lg">
//         {/* Top Navbar */}
//         <div className="flex items-center justify-between h-[60px] px-4 sm:px-6 md:px-8 relative">
//           {/* Mobile Logo - Visible on small screens, aligned left */}
//           <div
//             className={`flex items-center mt-16 md:hidden ${
//               isMobileMenuOpen ? "hidden" : "block"
//             } z-50`}
//           >
//             <Link to="/">
//               <img
//                 src="https://peptides.co.in/assets/img/logo/PeptidesKnowledgePark.png"
//                 alt="Peptides Knowledge Park Logo"
//                 className="h-24 w-24 bg-white rounded-full p-1"
//               />
//             </Link>
//           </div>

//           {/* Desktop Logo - Visible on medium screens and up */}
//           <div className="absolute left-8 top-[65px] transform -translate-y-1/2 z-50 hidden md:block">
//             <Link to="/">
//               <img
//                 src="https://peptides.co.in/assets/img/logo/PeptidesKnowledgePark.png"
//                 alt="Peptides Knowledge Park Logo"
//                 className="h-[100px] w-[100px] bg-white rounded-full p-2"
//               />
//             </Link>
//           </div>

//           {/* Desktop Navigation Links - Hidden on small screens */}
//           <div className="hidden md:flex flex-grow items-center justify-start space-x-6 pl-32">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.href}
//                 className={`flex items-center space-x-2 text-lg font-medium transition-colors duration-200
//                   ${
//                     location.pathname === link.href
//                       ? "text-[#ffc107]"
//                       : "text-white hover:text-[#ffc107]"
//                   }
//                 `}
//               >
//                 {link.icon && <link.icon className="w-5 h-5" />}
//                 <span>{link.name}</span>
//               </Link>
//             ))}
//           </div>

//           {/* Contact Info & Mobile Menu Button - Right aligned on all screens */}
//           <div className="flex-shrink-0 flex items-center space-x-2 md:ml-4">
//             <PhoneCall className="w-5 h-5 text-[#ffc107]" />
//             <span className="text-sm font-semibold text-white">
//               <a href="tel:+917997940959">+91 7997940959</a>
//             </span>
//             <div className="md:hidden">
//               <button
//                 onClick={toggleMobileMenu}
//                 className="text-white focus:outline-none p-2 rounded-md"
//               >
//                 {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Desktop Second Row */}
//         <div className="bg-[#232323] relative z-40 h-[70px] hidden md:flex items-center">
//           <div className="flex-grow flex items-center justify-center space-x-4 relative h-full">
//             {secondRowLinks.map((link) => {
//               const isDropdownActive = link.dropdown?.some(
//                 (item) => location.pathname === item.href
//               );
//               const isActive =
//                 location.pathname === link.href || isDropdownActive;
//               return (
//                 <div
//                   key={link.name}
//                   className="relative group h-full flex items-center justify-center"
//                   onMouseEnter={() => setDesktopHoverDropdown(link.name)}
//                   onMouseLeave={() => setDesktopHoverDropdown(null)}
//                 >
//                   <Link
//                     to={link.href}
//                     className={`
//                                 relative px-5 py-2 text-sm font-semibold transition-all duration-300 whitespace-nowrap rounded-full border
//                                 ${
//                                   isActive
//                                     ? "border-[#ffc107] text-[#ffc107]"
//                                     : "border-transparent text-white hover:border-[#ffc107]"
//                                 }
//                             `}
//                   >
//                     {link.name}
//                   </Link>
//                   {link.dropdown &&
//                     link.dropdown.length > 0 &&
//                     desktopHoverDropdown === link.name && (
//                       <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-72 bg-[#2d2d2d] rounded-lg shadow-xl overflow-hidden py-2 z-50 animate-fadeIn">
//                         {link.dropdown.map((item) => (
//                           <Link
//                             key={item.name}
//                             to={item.href}
//                             className="block px-4 py-2 text-white hover:bg-[#a87930] hover:text-[#2d2d2d] transition-colors duration-200"
//                           >
//                             {item.name}
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Mobile Menu Panel */}
//         <div
//           className={`fixed top-0 left-0 w-full h-full bg-[#2d2d2d] z-40 transform transition-transform duration-300 ease-in-out
//           ${isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"}`}
//           style={{ transitionProperty: "transform" }}
//         >
//           <div className="flex justify-between items-center h-[60px] px-4">
//             <div className="flex items-center space-x-2">
//               <img
//                 src="https://peptides.co.in/assets/img/logo/PeptidesKnowledgePark.png"
//                 alt="Peptides Knowledge Park Logo"
//                 className="h-16 w-16 bg-white rounded-full p-1"
//               />
//               <span className="font-semibold text-white">
//                 Peptides Knowledge Park
//               </span>
//             </div>
//             <button
//               onClick={toggleMobileMenu}
//               className="text-white p-2 rounded-md"
//             >
//               <X size={24} />
//             </button>
//           </div>
//           <div className="px-4 py-8 overflow-y-auto h-[calc(100%-60px)]">
//             <div className="space-y-4">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   to={link.href}
//                   className={`block px-4 py-3 text-lg font-medium transition-colors duration-200 rounded-md
//                     ${
//                       location.pathname === link.href
//                         ? "bg-[#a87930] text-[#2d2d2d]"
//                         : "text-white hover:bg-[#3d3d3d]"
//                     }
//                   `}
//                 >
//                   <span className="flex items-center">
//                     {link.icon && <link.icon className="w-6 h-6 mr-3" />}
//                     {link.name}
//                   </span>
//                 </Link>
//               ))}
//               <hr className="border-t border-[#3d3d3d] my-4" />
//               {/* Only show dropdowns inside the mobile menu */}
//               {secondRowLinks.map((link) => (
//                 <div key={link.name}>
//                   {link.dropdown.length > 0 ? (
//                     <div className="relative">
//                       <button
//                         onClick={() => setIsMobileMenuOpen(link.name)}
//                         className={`w-full text-left px-4 py-3 text-lg font-medium transition-colors duration-200 rounded-md
//                           ${
//                             location.pathname.includes(link.href)
//                               ? "bg-[#a87930] text-[#2d2d2d]"
//                               : "text-white hover:bg-[#3d3d3d]"
//                           }
//                         `}
//                       >
//                         <span className="flex justify-between items-center">
//                           {link.name}
//                           <ChevronDown
//                             size={20}
//                             className={`transform transition-transform ${
//                               isMobileMenuOpen === link.name
//                                 ? "rotate-180"
//                                 : "rotate-0"
//                             }`}
//                           />
//                         </span>
//                       </button>
//                       <div
//                         className={`overflow-hidden transition-all duration-300 ease-in-out ${
//                           isMobileMenuOpen === link.name
//                             ? "max-h-96"
//                             : "max-h-0"
//                         }`}
//                       >
//                         <div className="pl-6 py-2 space-y-2">
//                           {link.dropdown.map((sublink) => (
//                             <Link
//                               key={sublink.name}
//                               to={sublink.href}
//                               className={`block px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-md
//                                 ${
//                                   location.pathname === sublink.href
//                                     ? "bg-[#a87930] text-[#2d2d2d]"
//                                     : "text-white hover:bg-[#3d3d3d]"
//                                 }
//                               `}
//                             >
//                               {sublink.name}
//                             </Link>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   ) : (
//                     <Link
//                       key={link.name}
//                       to={link.href}
//                       className={`block px-4 py-3 text-lg font-medium transition-colors duration-200 rounded-md
//                         ${
//                           location.pathname === link.href
//                             ? "bg-[#a87930] text-[#2d2d2d]"
//                             : "text-white hover:bg-[#3d3d3d]"
//                         }
//                       `}
//                     >
//                       {link.name}
//                     </Link>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;






// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import {
//   PhoneCall,
//   Menu,
//   X,
//   Home,
//   Info,
//   Mail,
//   Layout,
//   ChevronDown,
// } from "lucide-react";

// // Tailwind CSS keyframes and utility classes.
// const style = `
// @keyframes slideDown {
//   from {
//     transform: translateY(-100%);
//   }
//   to {
//     transform: translateY(0);
//   }
// }

// .animate-slide-down {
//   animation: slideDown 0.3s ease-out forwards;
// }

// /* Hide scrollbar but allow scrolling */
// .scrollbar-hide {
//   -ms-overflow-style: none;
//   scrollbar-width: none;
// }
// .scrollbar-hide::-webkit-scrollbar {
//   display: none;
// }

// /* Custom fade-in animation for dropdowns */
// @keyframes fadeIn {
//   from {
//     opacity: 0;
//     transform: translateY(-10px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// }

// .animate-fadeIn {
//     animation: fadeIn 0.2s ease-out forwards;
// }
// `;

// // --- START: ORIGINAL DATA STRUCTURE ---
// const navLinks = [
//   { name: "Home", href: "/", icon: Home },
//   { name: "About", href: "/about-us", icon: Info },
//   { name: "Contact", href: "/contact", icon: Mail },
//   // { name: "Services", href: "/services", icon: Layout },
// ];

// const secondRowLinks = [
//   {
//     name: "Panel of Experts (POE)",
//     href: "/panel-of-experts",
//     dropdown: [
//       { name: "About Panel of Experts", href: "/panel-of-experts/about" },
//       {
//         name: "Subject Matter Experts",
//         href: "/panel-of-experts/subject-matter-experts",
//       },
//       {
//         name: "Become a Panel Member",
//         href: "/panel-of-experts/become-a-member",
//       },
//       {
//         name: "Activities/Benefits",
//         href: "/panel-of-experts/activities-benefits",
//       },
//     ],
//   },
//   {
//     name: "Academic Assist",
//     href: "/academic-assist",
//     dropdown: [
//       { name: "Academic Projects", href: "/academic-assist/projects" },
//       { name: "Conferences/Seminars", href: "/academic-assist/conferences" },
//       { name: "Workshops", href: "/academic-assist/workshops" },
//       { name: "Internships", href: "/academic-assist/internships" },
//       { name: "Publications", href: "/academic-assist/publications" },
//       {
//         name: "Skill Development (SKID)",
//         href: "/academic-assist/skill-development",
//       },
//       {
//         name: "Industrial Tours (INTO)",
//         href: "/academic-assist/industrial-tours",
//       },
//       { name: "e-Studies", href: "/academic-assist/e-studies" },
//       {
//         name: "Competitive Exams Related Training (CERT)",
//         href: "/academic-assist/cert",
//       },
//     ],
//   },
//   {
//     name: "Corporate Astute",
//     href: "/corporate-astute",
//     dropdown: [
//       {
//         name: "Corporate Support Service (CSS)",
//         href: "/corporate-astute/css",
//       },
//       {
//         name: "Contract Research Services (CRS)",
//         href: "/corporate-astute/crs",
//       },
//       {
//         name: "Faculty Upskilling Services (FUSS)",
//         href: "/corporate-astute/fuss",
//       },
//       {
//         name: "Research Assistance & Writing Services (RAWS)",
//         href: "/corporate-astute/raws",
//       },
//     ],
//   },
//   {
//     name: "Career Saga",
//     href: "/career-saga",
//     dropdown: [
//       { name: "Job Oriented Trainings (JOT)", href: "/career-saga/jot" },
//       { name: "Placement Assistance (PLAST)", href: "/career-saga/plast" },
//       { name: "Advanced Industrial Reach (AIR)", href: "/career-saga/air" },
//       {
//         name: "Peptides Assistance Membership (PAM)",
//         href: "/career-saga/pam",
//       },
//     ],
//   },
//   {
//     name: "Collaborations",
//     href: "/collaborations",
//     dropdown: [
//       { name: "Academic Collaborations", href: "/collaborations/academic" },
//       { name: "Industry Collaborations", href: "/collaborations/industry" },
//       { name: "Collaborate with Peptides", href: "/collaborations/peptides" },
//     ],
//   },
//   {
//     name: "Gallery",
//     href: "/gallery",
//     dropdown: [],
//   },
//   {
//     name: "Careers",
//     href: "/careers",
//     dropdown: [
//       { name: "Jobs @ Peptides", href: "/careers/jobs" },
//       { name: "Post a Job with Peptides", href: "/careers/post-job" },
//     ],
//   },
// ];
// // --- END: ORIGINAL DATA STRUCTURE ---


// const Navbar = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const location = useLocation();

//   useEffect(() => {
//     setMobileOpen(false);
//   }, [location.pathname]);

//   const handleMobileDropdown = (name) => {
//     setOpenDropdown(openDropdown === name ? null : name);
//   };

//   return (
//     <>
//       <style>{style}</style>
//       <nav className="bg-[#2d2d2d] text-[#e0e0e0] w-full font-sans sticky top-0 z-50 shadow-lg">
//         {/* Top Navbar */}
//         <div className="flex items-center justify-between h-[60px] px-4 sm:px-6 md:px-8 relative">
//           {/* Mobile Logo - Visible on small screens, aligned left */}
//           <div className={`flex items-center mt-16 md:hidden ${mobileOpen ? "hidden" : "block"} z-50`}>
//             <Link to="/">
//               <img
//                 src="https://peptides.co.in/assets/img/logo/PeptidesKnowledgePark.png"
//                 alt="Peptides Knowledge Park Logo"
//                 className="h-24 w-24 bg-white rounded-full p-1"
//               />
//             </Link>
//           </div>

//           {/* Desktop Logo - Visible on medium screens and up */}
//           <div className="absolute left-8 top-[65px] transform -translate-y-1/2 z-50 hidden md:block">
//             <Link to="/">
//               <img
//                 src="https://peptides.co.in/assets/img/logo/PeptidesKnowledgePark.png"
//                 alt="Peptides Knowledge Park Logo"
//                 className="h-[100px] w-[100px] bg-white rounded-full p-2"
//               />
//             </Link>
//           </div>

//           {/* RESTORED DESKTOP FIRST ROW */}
//           <div className="hidden md:flex flex-grow items-center justify-start space-x-6 pl-32">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.href}
//                 className={`flex items-center space-x-2 text-lg font-medium transition-colors duration-200
//                   ${location.pathname === link.href ? 'text-[#ffc107]' : 'text-white hover:text-[#ffc107]'}
//                 `}
//               >
//                 {link.icon && <link.icon className="w-5 h-5" />}
//                 <span>{link.name}</span>
//               </Link>
//             ))}
//           </div>

//           {/* Contact Info & Mobile Menu Button - Right aligned on all screens */}
//           <div className="flex-shrink-0 flex items-center space-x-2 md:ml-4">
//             <PhoneCall className="w-5 h-5 text-[#ffc107]" />
//             <span className="text-sm font-semibold text-white">
//               <a href="tel:+917997940959">+91 7997940959</a>
//             </span>
//             <div className="md:hidden">
//               <button
//                 onClick={() => setMobileOpen(!mobileOpen)}
//                 className="text-white focus:outline-none p-2 rounded-md"
//               >
//                 {mobileOpen ? <X size={24} /> : <Menu size={24} />}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* --- START: UNIVERSALLY SCROLLABLE SECOND NAVBAR WITH SIMPLE DROPDOWN --- */}
//         <div className="bg-[#232323] relative z-40 py-2">
//             <div className="overflow-x-auto whitespace-nowrap scrollbar-hide flex items-center justify-start md:justify-center">
//               {secondRowLinks.map((link) => {
//                   const isDropdownActive = link.dropdown?.some(item => location.pathname === item.href);
//                   const isActive = location.pathname === link.href || isDropdownActive;
//                   return (
//                       <div
//                         key={link.name}
//                         className="relative group h-full flex items-center justify-center flex-shrink-0"
//                       >
//                         <Link
//                             to={link.href}
//                             className={`
//                                 inline-block px-5 py-2 mx-2 text-sm font-semibold transition-all duration-300 rounded-full border
//                                 ${isActive ? 'border-[#ffc107] text-[#ffc107]' : 'border-transparent text-white hover:border-[#ffc107]'}
//                             `}
//                         >
//                             {link.name}
//                         </Link>
//                         {link.dropdown && link.dropdown.length > 0 && (
//                           <div
//                             className="absolute top-full left-1/2 transform -translate-x-1/2 w-72 bg-[#2d2d2d] rounded-lg shadow-xl overflow-hidden py-2 z-50 invisible group-hover:visible group-hover:animate-fadeIn"
//                           >
//                             {link.dropdown.map((item) => (
//                               <Link
//                                 key={item.name}
//                                 to={item.href}
//                                 className="block px-4 py-2 text-white hover:bg-[#a87930] hover:text-[#2d2d2d] transition-colors duration-200"
//                               >
//                                 {item.name}
//                               </Link>
//                             ))}
//                           </div>
//                         )}
//                       </div>
//                   );
//               })}
//             </div>
//         </div>
//         {/* --- END: UNIVERSALLY SCROLLABLE SECOND NAVBAR WITH SIMPLE DROPDOWN --- */}

//         {/* --- START: MOBILE MENU PANEL --- */}
//         {mobileOpen && (
//           <div className="md:hidden fixed top-0 left-0 w-full h-full bg-[#1a1a1a] shadow-lg py-4 z-40 animate-slideDown overflow-y-auto">
//             <div className="flex justify-between p-4 items-center">
//               <Link to="/">
//                 <img
//                   src="https://peptides.co.in/assets/img/logo/PeptidesKnowledgePark.png"
//                   alt="Peptides Knowledge Park Logo"
//                   className="h-[45px]"
//                 />
//               </Link>
//               <button
//                 onClick={() => setMobileOpen(false)}
//                 className="text-white"
//                 aria-label="Close menu"
//               >
//                 <X className="w-7 h-7" />
//               </button>
//             </div>
//             <ul className="flex flex-col space-y-2 px-4">
//               {navLinks.map((link) => (
//                 <li key={link.name}>
//                   <Link
//                     to={link.href}
//                     onClick={() => setMobileOpen(false)}
//                     className="flex items-center space-x-2 py-3 px-2 font-medium text-white hover:text-[#ffc107]"
//                   >
//                     {link.icon && <link.icon className="w-5 h-5" />}
//                     <span>{link.name}</span>
//                   </Link>
//                 </li>
//               ))}
//               <div className="h-[1px] bg-[#333] my-4"></div>
//               {secondRowLinks.map((link) => (
//                 <li key={link.name}>
//                   {link.dropdown && link.dropdown.length > 0 ? (
//                     <>
//                       <button
//                         onClick={() => handleMobileDropdown(link.name)}
//                         className={`w-full text-left font-medium flex items-center justify-between py-3 px-2 rounded
//                           ${openDropdown === link.name ? 'text-[#ffc107]' : 'text-white'}
//                         `}
//                       >
//                         <span>{link.name}</span>
//                         <ChevronDown
//                           className={`w-5 h-5 transition-transform duration-200
//                             ${openDropdown === link.name ? 'rotate-180' : ''}
//                           `}
//                         />
//                       </button>
//                       {openDropdown === link.name && (
//                         <ul className="pl-6 mt-2 space-y-2 border-l border-[#333]">
//                           {link.dropdown.map((item) => (
//                             <li key={item.name}>
//                               <Link
//                                 to={item.href}
//                                 onClick={() => setMobileOpen(false)}
//                                 className="block py-2 text-sm text-white hover:text-[#ffc107]"
//                               >
//                                 {item.name}
//                               </Link>
//                             </li>
//                           ))}
//                         </ul>
//                       )}
//                     </>
//                   ) : (
//                     <Link
//                       to={link.href}
//                       onClick={() => setMobileOpen(false)}
//                       className="block py-3 px-2 font-medium text-white hover:text-[#ffc107]"
//                     >
//                       {link.name}
//                     </Link>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//         {/* --- END: MOBILE MENU PANEL --- */}
//       </nav>
//     </>
//   );
// };

// export default Navbar;

// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import {
//   PhoneCall,
//   Menu,
//   X,
//   Home,
//   Info,
//   Mail,
//   Layout,
//   ChevronDown,
// } from "lucide-react";

// // Tailwind CSS keyframes and utility classes.
// const style = `
// @keyframes slideDown {
//   from {
//     transform: translateY(-100%);
//   }
//   to {
//     transform: translateY(0);
//   }
// }

// .animate-slide-down {
//   animation: slideDown 0.3s ease-out forwards;
// }

// /* Hide scrollbar but allow scrolling */
// .scrollbar-hide {
//   -ms-overflow-style: none;
//   scrollbar-width: none;
// }
// .scrollbar-hide::-webkit-scrollbar {
//   display: none;
// }

// /* Custom fade-in animation for dropdowns */
// @keyframes fadeIn {
//   from {
//     opacity: 0;
//     transform: translateY(-10px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// }

// .animate-fadeIn {
//     animation: fadeIn 0.2s ease-out forwards;
// }
// `;

// // --- START: ORIGINAL DATA STRUCTURE ---
// const navLinks = [
//   { name: "Home", href: "/", icon: Home },
//   { name: "About", href: "/about-us", icon: Info },
//   { name: "Contact", href: "/contact", icon: Mail },
//   { name: "Services", href: "/services", icon: Layout },
// ];

// const secondRowLinks = [
//   {
//     name: "Panel of Experts (POE)",
//     href: "/panel-of-experts",
//     dropdown: [
//       { name: "About Panel of Experts", href: "/panel-of-experts/about" },
//       {
//         name: "Subject Matter Experts",
//         href: "/panel-of-experts/subject-matter-experts",
//       },
//       {
//         name: "Become a Panel Member",
//         href: "/panel-of-experts/become-a-member",
//       },
//       {
//         name: "Activities/Benefits",
//         href: "/panel-of-experts/activities-benefits",
//       },
//     ],
//   },
//   {
//     name: "Academic Assist",
//     href: "/academic-assist",
//     dropdown: [
//       { name: "Academic Projects", href: "/academic-assist/projects" },
//       { name: "Conferences/Seminars", href: "/academic-assist/conferences" },
//       { name: "Workshops", href: "/academic-assist/workshops" },
//       { name: "Internships", href: "/academic-assist/internships" },
//       { name: "Publications", href: "/academic-assist/publications" },
//       {
//         name: "Skill Development (SKID)",
//         href: "/academic-assist/skill-development",
//       },
//       {
//         name: "Industrial Tours (INTO)",
//         href: "/academic-assist/industrial-tours",
//       },
//       { name: "E-Studies", href: "/academic-assist/e-studies" },
//       {
//         name: "Competitive Exams Related Training (CERT)",
//         href: "/academic-assist/cert",
//       },
//     ],
//   },
//   {
//     name: "Corporate Astute",
//     href: "/corporate-astute",
//     dropdown: [
//       {
//         name: "Corporate Support Service (CSS)",
//         href: "/corporate-astute/css",
//       },
//       {
//         name: "Contract Research Services (CRS)",
//         href: "/corporate-astute/crs",
//       },
//       {
//         name: "Faculty Upskilling Services (FUSS)",
//         href: "/corporate-astute/fuss",
//       },
//       {
//         name: "Research Assistance & Writing Services (RAWS)",
//         href: "/corporate-astute/raws",
//       },
//     ],
//   },
//   {
//     name: "Career Saga",
//     href: "/career-saga",
//     dropdown: [
//       { name: "Job Oriented Trainings (JOT)", href: "/career-saga/jot" },
//       { name: "Placement Assistance (PLAST)", href: "/career-saga/plast" },
//       { name: "Advanced Industrial Reach (AIR)", href: "/career-saga/air" },
//       {
//         name: "Peptides Assistance Membership (PAM)",
//         href: "/career-saga/pam",
//       },
//     ],
//   },
//   {
//     name: "Collaborations",
//     href: "/collaborations",
//     dropdown: [
//       { name: "Academic Collaborations", href: "/collaborations/academic" },
//       { name: "Industry Collaborations", href: "/collaborations/industry" },
//       { name: "Collaborate with Peptides", href: "/collaborations/peptides" },
//     ],
//   },
//   {
//     name: "Gallery",
//     href: "/gallery",
//     dropdown: [],
//   },
//   {
//     name: "Careers",
//     href: "/careers",
//     dropdown: [
//       { name: "Jobs @ Peptides", href: "/careers/jobs" },
//       { name: "Post a Job with Peptides", href: "/careers/post-job" },
//     ],
//   },
// ];
// // --- END: ORIGINAL DATA STRUCTURE ---


// const Navbar = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const location = useLocation();

//   useEffect(() => {
//     setMobileOpen(false);
//   }, [location.pathname]);

//   const handleMobileDropdown = (name) => {
//     setOpenDropdown(openDropdown === name ? null : name);
//   };

//   return (
//     <>
//       <style>{style}</style>
//       <nav className="bg-[#2d2d2d] text-[#e0e0e0] w-full font-sans sticky top-0 z-50 shadow-lg">
//         {/* Top Navbar */}
//         <div className="flex items-center justify-between h-[60px] px-4 sm:px-6 md:px-8 relative">
//           {/* Mobile Logo - Visible on small screens, aligned left */}
//           <div className={`flex items-center mt-16 md:hidden ${mobileOpen ? "hidden" : "block"} z-50`}>
//             <Link to="/">
//               <img
//                 src="https://peptides.co.in/assets/img/logo/PeptidesKnowledgePark.png"
//                 alt="Peptides Knowledge Park Logo"
//                 className="h-24 w-24 bg-white rounded-full p-1"
//               />
//             </Link>
//           </div>

//           {/* Desktop Logo - Visible on medium screens and up */}
//           <div className="absolute left-8 top-[57px] transform -translate-y-1/2 z-50 hidden md:block">
//             <Link to="/">
//               <img
//                 src="https://peptides.co.in/assets/img/logo/PeptidesKnowledgePark.png"
//                 alt="Peptides Knowledge Park Logo"
//                 className="h-[100px] w-[100px] bg-white rounded-full p-2"
//               />
//             </Link>
//           </div>

//           {/* RESTORED DESKTOP FIRST ROW */}
//           <div className="hidden md:flex flex-grow items-center justify-start space-x-6 pl-32">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.href}
//                 className={`flex items-center space-x-2 text-lg font-medium transition-colors duration-200
//                   ${location.pathname === link.href ? 'text-[#ffc107]' : 'text-white hover:text-[#ffc107]'}
//                 `}
//               >
//                 {link.icon && <link.icon className="w-5 h-5" />}
//                 <span>{link.name}</span>
//               </Link>
//             ))}
//           </div>

//           {/* Contact Info & Mobile Menu Button - Right aligned on all screens */}
//           <div className="flex-shrink-0 flex items-center space-x-2 md:ml-4">
//             <PhoneCall className="w-5 h-5 text-[#ffc107]" />
//             <span className="text-sm font-semibold text-white">
//               <a href="tel:+917997940959">+91 7997940959</a>
//             </span>
//             <div className="md:hidden">
//               <button
//                 onClick={() => setMobileOpen(!mobileOpen)}
//                 className="text-white focus:outline-none p-2 rounded-md"
//               >
//                 {mobileOpen ? <X size={24} /> : <Menu size={24} />}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* --- START: UNIVERSALLY SCROLLABLE SECOND NAVBAR WITH SIMPLE DROPDOWN --- */}
//         <div className="bg-[#232323] relative z-40 py-2">
//             <div className="overflow-x-auto whitespace-nowrap scrollbar-hide flex items-center justify-start md:justify-center">
//               {secondRowLinks.map((link) => {
//                   const isDropdownActive = link.dropdown?.some(item => location.pathname === item.href);
//                   const isActive = location.pathname === link.href || isDropdownActive;
//                   return (
//                       <div
//                         key={link.name}
//                         className="relative group h-full flex items-center justify-center flex-shrink-0"
//                       >
//                         <Link
//                             to={link.href}
//                             className={`
//                                 inline-block px-5 py-2 mx-2 text-sm font-semibold transition-all duration-300 rounded-full border
//                                 ${isActive ? 'border-[#ffc107] text-[#ffc107]' : 'border-transparent text-white hover:border-[#ffc107]'}
//                             `}
//                         >
//                             {link.name}
//                         </Link>
//                         {link.dropdown && link.dropdown.length > 0 && (
//                           <div
//                             className="absolute top-full left-1/2 transform -translate-x-1/2 w-72 bg-[#2d2d2d] rounded-lg shadow-xl overflow-hidden py-2 z-50 invisible group-hover:visible group-hover:animate-fadeIn"
//                           >
//                             {link.dropdown.map((item) => (
//                               <Link
//                                 key={item.name}
//                                 to={item.href}
//                                 className="block px-4 py-2 text-white hover:bg-[#a87930] hover:text-[#2d2d2d] transition-colors duration-200"
//                               >
//                                 {item.name}
//                               </Link>
//                             ))}
//                           </div>
//                         )}
//                       </div>
//                   );
//               })}
//             </div>
//         </div>
//         {/* --- END: UNIVERSALLY SCROLLABLE SECOND NAVBAR WITH SIMPLE DROPDOWN --- */}

//         {/* --- START: MOBILE MENU PANEL --- */}
//         {mobileOpen && (
//           <div className="md:hidden fixed top-0 left-0 w-full h-full bg-[#1a1a1a] shadow-lg py-4 z-40 animate-slideDown overflow-y-auto">
//             <div className="flex justify-between p-4 items-center">
//               <Link to="/">
//                 <img
//                   src="https://peptides.co.in/assets/img/logo/PeptidesKnowledgePark.png"
//                   alt="Peptides Knowledge Park Logo"
//                   className="h-[45px]"
//                 />
//               </Link>
//               <button
//                 onClick={() => setMobileOpen(false)}
//                 className="text-white"
//                 aria-label="Close menu"
//               >
//                 <X className="w-7 h-7" />
//               </button>
//             </div>
//             <ul className="flex flex-col space-y-2 px-4">
//               {navLinks.map((link) => (
//                 <li key={link.name}>
//                   <Link
//                     to={link.href}
//                     onClick={() => setMobileOpen(false)}
//                     className="flex items-center space-x-2 py-3 px-2 font-medium text-white hover:text-[#ffc107]"
//                   >
//                     {link.icon && <link.icon className="w-5 h-5" />}
//                     <span>{link.name}</span>
//                   </Link>
//                 </li>
//               ))}
//               <div className="h-[1px] bg-[#333] my-4"></div>
//               {secondRowLinks.map((link) => (
//                 <li key={link.name}>
//                   {link.dropdown && link.dropdown.length > 0 ? (
//                     <>
//                       <button
//                         onClick={() => handleMobileDropdown(link.name)}
//                         className={`w-full text-left font-medium flex items-center justify-between py-3 px-2 rounded
//                           ${openDropdown === link.name ? 'text-[#ffc107]' : 'text-white'}
//                         `}
//                       >
//                         <span>{link.name}</span>
//                         <ChevronDown
//                           className={`w-5 h-5 transition-transform duration-200
//                             ${openDropdown === link.name ? 'rotate-180' : ''}
//                           `}
//                         />
//                       </button>
//                       {openDropdown === link.name && (
//                         <ul className="pl-6 mt-2 space-y-2 border-l border-[#333]">
//                           {link.dropdown.map((item) => (
//                             <li key={item.name}>
//                               <Link
//                                 to={item.href}
//                                 onClick={() => setMobileOpen(false)}
//                                 className="block py-2 text-sm text-white hover:text-[#ffc107]"
//                               >
//                                 {item.name}
//                               </Link>
//                             </li>
//                           ))}
//                         </ul>
//                       )}
//                     </>
//                   ) : (
//                     <Link
//                       to={link.href}
//                       onClick={() => setMobileOpen(false)}
//                       className="block py-3 px-2 font-medium text-white hover:text-[#ffc107]"
//                     >
//                       {link.name}
//                     </Link>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//         {/* --- END: MOBILE MENU PANEL --- */}
//       </nav>
//     </>
//   );
// };

// export default Navbar;



// ***********************FINAL UI BUT WITHOUT DROPDOWNS*****************************

// import React, { useState, useEffect, useRef } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { PhoneCall, Menu, X, Home, Info, Mail, Layout, ChevronDown } from 'lucide-react';

// // Tailwind CSS keyframes for the marquee and mobile slide animations.
// const style = `
// @keyframes slideDown {
//   from {
//     transform: translateY(-100%);
//   }
//   to {
//     transform: translateY(0);
//   }
// }

// @keyframes slideUp {
//   from {
//     transform: translateY(0);
//   }
//   to {
//     transform: translateY(-100%);
//   }
// }

// .animate-slide-down {
//   animation: slideDown 0.3s ease-out forwards;
// }

// .animate-slide-up {
//   animation: slideUp 0.3s ease-out forwards;
// }

// /* Hide scrollbar but allow scrolling */
// .scrollbar-hide {
//   -ms-overflow-style: none; /* IE and Edge */
//   scrollbar-width: none; /* Firefox */
// }
// .scrollbar-hide::-webkit-scrollbar {
//   display: none; /* Chrome, Safari, and Opera */
// }
// `;

// const navLinks = [
//   { name: 'Home', href: '/', icon: Home },
//   { name: 'About', href: '/about-us', icon: Info },
//   { name: 'Contact', href: '/contact', icon: Mail },
//   { name: 'Services', href: '/services', icon: Layout },
// ];

// const secondRowLinks = [
//   {
//     name: 'Panel of Experts (POE)',
//     href: '/panel-of-experts',
//     dropdown: [
//       { name: 'About Panel of Experts', href: '/panel-of-experts/about' },
//       { name: 'Subject Matter Experts', href: '/panel-of-experts/subject-matter-experts' },
//       { name: 'Become a Panel Member', href: '/panel-of-experts/become-a-member' },
//       { name: 'Activities/Benefits', href: '/panel-of-experts/activities-benefits' },
//     ],
//   },
//   {
//     name: 'Academic Assist',
//     href: '/academic-assist',
//     dropdown: [
//       { name: 'Academic Projects', href: '/academic-assist/projects' },
//       { name: 'Conferences/Seminars', href: '/academic-assist/conferences' },
//       { name: 'Workshops', href: '/academic-assist/workshops' },
//       { name: 'Internships', href: '/academic-assist/internships' },
//       { name: 'Publications', href: '/academic-assist/publications' },
//       { name: 'Skill Development (SKID)', href: '/academic-assist/skill-development' },
//       { name: 'Industrial Tours (INTO)', href: '/academic-assist/industrial-tours' },
//       { name: 'E-Studies', href: '/academic-assist/e-studies' },
//       { name: 'Competitive Exams Related Training (CERT)', href: '/academic-assist/cert' },
//     ],
//   },
//   {
//     name: 'Corporate Astute',
//     href: '/corporate-astute',
//     dropdown: [
//       { name: 'Corporate Support Service (CSS)', href: '/corporate-astute/css' },
//       { name: 'Contract Research Services (CRS)', href: '/corporate-astute/crs' },
//       { name: 'Faculty Upskilling Services (FUSS)', href: '/corporate-astute/fuss' },
//       { name: 'Research Assistance & Writing Services (RAWS)', href: '/corporate-astute/raws' },
//     ],
//   },
//   {
//     name: 'Career Saga',
//     href: '/career-saga',
//     dropdown: [
//       { name: 'Job Oriented Trainings (JOT)', href: '/career-saga/jot' },
//       { name: 'Placement Assistance (PLAST)', href: '/career-saga/plast' },
//       { name: 'Advanced Industrial Reach (AIR)', href: '/career-saga/air' },
//       { name: 'Peptides Assistance Membership (PAM)', href: '/career-saga/pam' },
//     ],
//   },
//   {
//     name: 'Collaborations',
//     href: '/collaborations',
//     dropdown: [
//       { name: 'Academic Collaborations', href: '/collaborations/academic' },
//       { name: 'Industry Collaborations', href: '/collaborations/industry' },
//       { name: 'Collaborate with Peptides', href: '/collaborations/peptides' },
//     ],
//   },
//   {
//     name: 'Gallery',
//     href: '/gallery',
//     dropdown: [],
//   },
//   {
//     name: 'Careers',
//     href: '/careers',
//     dropdown: [
//       { name: 'Jobs @ Peptides', href: '/careers/jobs' },
//       { name: 'Post a Job with Peptides', href: '/careers/post-job' },
//     ],
//   },
// ];

// const ScrollingLinks = ({ links }) => {
//   const location = useLocation();

//   return (
//     <div className="relative w-full overflow-x-auto whitespace-nowrap pl-24 scrollbar-hide">
//       <div className="inline-flex py-2 px-4 sm:px-6  md:px-8">
//         {links.map((link, index) => {
//           const isDropdownActive = link.dropdown?.some(item => location.pathname === item.href);
//           const isActive = location.pathname === link.href || isDropdownActive;
//           return (
//             <Link
//               key={link.name + index}
//               to={link.href}
//               className={`
//                 flex-shrink-0 relative px-4 py-2 mx-2 text-sm font-semibold transition-all duration-300 whitespace-nowrap rounded-full border
//                 ${isActive ? 'border-[#ffc107] text-[#ffc107]' : 'border-transparent text-white hover:border-[#ffc107]'}
//               `}
//             >
//               {link.name}
//             </Link>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     setIsMobileMenuOpen(false); // Close menu on navigation
//   }, [location.pathname]);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <>
//       <style>{style}</style>
//       <nav className="bg-[#2d2d2d] text-[#e0e0e0] w-full font-sans sticky top-0 z-50 shadow-lg">
//         {/* Top Navbar */}
//         <div className="flex items-center justify-between h-[60px] px-4 sm:px-6 md:px-8 relative">
// {/* Mobile Logo - Visible on small screens, aligned left */}
// <div className={`flex items-center mt-16 md:hidden ${isMobileMenuOpen ? "hidden" : "block"} z-50`}>
//   <Link to="/">
//     <img
//       src="https://peptides.co.in/assets/img/logo/PeptidesKnowledgePark.png"
//       alt="Peptides Knowledge Park Logo"
//       className="h-24 w-24 bg-white rounded-full p-1"
//     />
//   </Link>
// </div>

//           {/* Desktop Logo - Visible on medium screens and up */}
//           <div className="absolute left-8 top-[65px] transform -translate-y-1/2 z-50 hidden md:block">
//             <Link to="/">
//               <img
//                 src="https://peptides.co.in/assets/img/logo/PeptidesKnowledgePark.png"
//                 alt="Peptides Knowledge Park Logo"
//                 className="h-[100px] w-[100px] bg-white rounded-full p-2"
//               />
//             </Link>
//           </div>

//           {/* Desktop Navigation Links - Hidden on small screens */}
//           <div className="hidden md:flex flex-grow items-center justify-start space-x-6 pl-32">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.href}
//                 className={`flex items-center space-x-2 text-lg font-medium transition-colors duration-200
//                   ${location.pathname === link.href ? 'text-[#ffc107]' : 'text-white hover:text-[#ffc107]'}
//                 `}
//               >
//                 {link.icon && <link.icon className="w-5 h-5" />}
//                 <span>{link.name}</span>
//               </Link>
//             ))}
//           </div>

//           {/* Contact Info & Mobile Menu Button - Right aligned on all screens */}
//           <div className="flex-shrink-0 flex items-center space-x-2 md:ml-4">
//             <PhoneCall className="w-5 h-5 text-[#ffc107]" />
//             <span className="text-sm font-semibold text-white">
//               <a href="tel:+917997940959">+91 7997940959</a>
//             </span>
//             <div className="md:hidden">
//               <button
//                 onClick={toggleMobileMenu}
//                 className="text-white focus:outline-none p-2 rounded-md"
//               >
//                 {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Second Row - Interactive Scrolling on desktop and mobile */}
//         <div className="bg-[#232323] relative z-40 h-[70px] flex items-center  shadow-lg">
//           <ScrollingLinks links={secondRowLinks} />
//         </div>

//         {/* Mobile Menu Panel */}
//         <div
//           className={`fixed top-0 left-0 w-full h-full bg-[#2d2d2d] z-40 transform transition-transform duration-300 ease-in-out
//           ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
//           style={{ transitionProperty: 'transform' }}
//         >
//           <div className="flex justify-between items-center h-[60px] px-4">
//             <div className="flex items-center space-x-2">
//               <img
//                 src="https://peptides.co.in/assets/img/logo/PeptidesKnowledgePark.png"
//                 alt="Peptides Knowledge Park Logo"
//                 className="h-16 w-16 bg-white rounded-full p-1"
//               />
//               <span className="font-semibold text-white">Peptides Knowledge Park</span>
//             </div>
//             <button onClick={toggleMobileMenu} className="text-white p-2 rounded-md">
//               <X size={24} />
//             </button>
//           </div>
//           <div className="px-4 py-8 overflow-y-auto h-[calc(100%-60px)]">
//             <div className="space-y-4">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   to={link.href}
//                   className={`block px-4 py-3 text-lg font-medium transition-colors duration-200 rounded-md
//                     ${location.pathname === link.href ? 'bg-[#a87930] text-[#2d2d2d]' : 'text-white hover:bg-[#3d3d3d]'}
//                   `}
//                 >
//                   <span className="flex items-center">
//                     {link.icon && <link.icon className="w-6 h-6 mr-3" />}
//                     {link.name}
//                   </span>
//                 </Link>
//               ))}
//               <hr className="border-t border-[#3d3d3d] my-4" />
//               {/* Only show dropdowns inside the mobile menu */}
//               {secondRowLinks.map((link) => (
//                 <div key={link.name}>
//                   {link.dropdown.length > 0 ? (
//                     <div className="relative">
//                       <button
//                         onClick={() => setIsMobileMenuOpen(link.name)}
//                         className={`w-full text-left px-4 py-3 text-lg font-medium transition-colors duration-200 rounded-md
//                           ${location.pathname.includes(link.href) ? 'bg-[#a87930] text-[#2d2d2d]' : 'text-white hover:bg-[#3d3d3d]'}
//                         `}
//                       >
//                         <span className="flex justify-between items-center">
//                           {link.name}
//                           <ChevronDown size={20} className={`transform transition-transform ${isMobileMenuOpen === link.name ? 'rotate-180' : 'rotate-0'}`} />
//                         </span>
//                       </button>
//                       <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen === link.name ? 'max-h-96' : 'max-h-0'}`}>
//                         <div className="pl-6 py-2 space-y-2">
//                           {link.dropdown.map((sublink) => (
//                             <Link
//                               key={sublink.name}
//                               to={sublink.href}
//                               className={`block px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-md
//                                 ${location.pathname === sublink.href ? 'bg-[#a87930] text-[#2d2d2d]' : 'text-white hover:bg-[#3d3d3d]'}
//                               `}
//                             >
//                               {sublink.name}
//                             </Link>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   ) : (
//                     <Link
//                       key={link.name}
//                       to={link.href}
//                       className={`block px-4 py-3 text-lg font-medium transition-colors duration-200 rounded-md
//                         ${location.pathname === link.href ? 'bg-[#a87930] text-[#2d2d2d]' : 'text-white hover:bg-[#3d3d3d]'}
//                       `}
//                     >
//                       {link.name}
//                     </Link>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;



// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import {
//   PhoneCall,
//   Menu,
//   X,
//   Home,
//   Info,
//   Mail,
//   Layout,
//   ChevronDown,
// } from "lucide-react";

// const navLinks = [
//   { name: "Home", href: "/", icon: Home },
//   { name: "About", href: "/about-us", icon: Info },
//   { name: "Contact", href: "/contact", icon: Mail },
//   { name: "Services", href: "/services", icon: Layout },
// ];

// const secondRowLinks = [
//   {
//     name: "Panel of Experts (POE)",
//     href: "/panel-of-experts",
//     dropdown: [
//       { name: "About Panel of Experts", href: "/panel-of-experts/about" },
//       { name: "Subject Matter Experts", href: "/panel-of-experts/subject-matter-experts" },
//       { name: "Become a Panel Member", href: "/panel-of-experts/become-a-member" },
//       { name: "Activities/Benefits", href: "/panel-of-experts/activities-benefits" },
//     ],
//   },
//   {
//     name: "Academic Assist",
//     href: "/academic-assist",
//     dropdown: [
//       { name: "Academic Projects", href: "/academic-assist/projects" },
//       { name: "Conferences/Seminars", href: "/academic-assist/conferences" },
//       { name: "Workshops", href: "/academic-assist/workshops" },
//       { name: "Internships", href: "/academic-assist/internships" },
//       { name: "Publications", href: "/academic-assist/publications" },
//       { name: "Skill Development (SKID)", href: "/academic-assist/skill-development" },
//       { name: "Industrial Tours (INTO)", href: "/academic-assist/industrial-tours" },
//       { name: "E-Studies", href: "/academic-assist/e-studies" },
//       { name: "Competitive Exams Related Training (CERT)", href: "/academic-assist/cert" },
//     ],
//   },
//   {
//     name: "Corporate Astute",
//     href: "/corporate-astute",
//     dropdown: [
//       { name: "Corporate Support Service (CSS)", href: "/corporate-astute/css" },
//       { name: "Contract Research Services (CRS)", href: "/corporate-astute/crs" },
//       { name: "Faculty Upskilling Services (FUSS)", href: "/corporate-astute/fuss" },
//       { name: "Research Assistance & Writing Services (RAWS)", href: "/corporate-astute/raws" },
//     ],
//   },
//   {
//     name: "Career Saga",
//     href: "/career-saga",
//     dropdown: [
//       { name: "Job Oriented Trainings (JOT)", href: "/career-saga/jot" },
//       { name: "Placement Assistance (PLAST)", href: "/career-saga/plast" },
//       { name: "Advanced Industrial Reach (AIR)", href: "/career-saga/air" },
//       { name: "Peptides Assistance Membership (PAM)", href: "/career-saga/pam" },
//     ],
//   },
//   {
//     name: "Collaborations",
//     href: "/collaborations",
//     dropdown: [
//       { name: "Academic Collaborations", href: "/collaborations/academic" },
//       { name: "Industry Collaborations", href: "/collaborations/industry" },
//       { name: "Collaborate with Peptides", href: "/collaborations/peptides" },
//     ],
//   },
//   { name: "Gallery", href: "/gallery", dropdown: [] },
//   {
//     name: "Careers",
//     href: "/careers",
//     dropdown: [
//       { name: "Jobs @ Peptides", href: "/careers/jobs" },
//       { name: "Post a Job with Peptides", href: "/careers/post-job" },
//     ],
//   },
// ];

// const Navbar = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const location = useLocation();

//   const toggleMobileDropdown = (name) => {
//     setOpenDropdown(openDropdown === name ? null : name);
//   };

//   const toggleTabletDropdown = (name) => {
//     if (secondRowLinks.find((link) => link.name === name)?.dropdown?.length) {
//       setOpenDropdown(openDropdown === name ? null : name);
//     }
//   };

//   // Prevent body scroll when mobile menu is open
//   useEffect(() => {
//     document.body.style.overflow = mobileOpen ? "hidden" : "auto";
//   }, [mobileOpen]);

//   return (
//     <header className="bg-[#2d2d2d] text-white sticky top-0 w-full z-50">
//       {/* Logo */}
//       <div className="fixed top-2 left-2 z-50">
//         <Link to="/">
//           <img
//             src="https://peptides.co.in/assets/img/logo/PeptidesKnowledgePark.png"
//             alt="Peptides Knowledge Park Logo"
//             className="h-[100px] w-[100px] rounded-full bg-white p-3 shadow-lg"
//           />
//         </Link>
//       </div>

//       {/* Top Row */}
//       <div className="flex items-center justify-between pl-[140px] pr-4 h-[60px]">
//         {/* Primary nav links */}
//         <nav className="hidden md:flex items-center space-x-6">
//           {navLinks.map((link) => {
//             const isActive = location.pathname === link.href;
//             return (
//               <Link
//                 key={link.name}
//                 to={link.href}
//                 className={`flex items-center space-x-2 text-sm font-normal transition-colors duration-200 ${
//                   isActive ? "text-[#ffc107]" : "hover:text-[#ffc107]"
//                 }`}
//               >
//                 <link.icon className="w-5 h-5" />
//                 <span>{link.name}</span>
//               </Link>
//             );
//           })}
//         </nav>

//         {/* Contact */}
//         <div className="flex items-center space-x-2">
//           <PhoneCall className="w-5 h-5 text-[#ffc107]" />
//           <a href="tel:+917997940959" className="text-sm font-semibold">
//             +91 7997940959
//           </a>
//         </div>

//         {/* Mobile menu button */}
//         <button
//           onClick={() => setMobileOpen((prev) => !prev)}
//           className="md:hidden p-2"
//           aria-label="Toggle menu"
//         >
//           {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
//         </button>
//       </div>

//       {/* Bottom Row - Desktop/Tablet */}
//       <nav className="bg-[#232323] pl-[140px] pr-4 h-[60px] hidden md:flex items-center space-x-6">
//         {secondRowLinks.map((link) => {
//           const isActive =
//             location.pathname === link.href ||
//             link.dropdown?.some((d) => location.pathname === d.href);

//           if (link.dropdown?.length) {
//             return (
//               <div
//                 key={link.name}
//                 className="relative group"
//                 onClick={() => toggleTabletDropdown(link.name)}
//               >
//                 <button
//                   className={`flex items-center text-sm font-normal transition-colors duration-300 ${
//                     isActive ? "text-[#ffc107]" : "hover:text-[#ffc107]"
//                   }`}
//                   aria-expanded={openDropdown === link.name}
//                 >
//                   {link.name}
//                   <ChevronDown
//                     className={`ml-1 w-4 h-4 transition-transform ${
//                       openDropdown === link.name
//                         ? "rotate-180"
//                         : "group-hover:rotate-180"
//                     }`}
//                   />
//                 </button>

//                 <div
//                   className={`absolute top-full left-0 bg-[#2d2d2d] rounded-lg shadow-xl py-2 min-w-[200px] ${
//                     openDropdown === link.name ? "block" : "hidden"
//                   } md:group-hover:block`}
//                 >
//                   {link.dropdown.map((item) => (
//                     <Link
//                       key={item.name}
//                       to={item.href}
//                       className="block px-4 py-2 text-sm font-normal hover:bg-[#a87930] hover:text-[#2d2d2d]"
//                     >
//                       {item.name}
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             );
//           }

//           return (
//             <Link
//               key={link.name}
//               to={link.href}
//               className={`text-sm font-normal transition-colors duration-300 ${
//                 isActive ? "text-[#ffc107]" : "hover:text-[#ffc107]"
//               }`}
//             >
//               {link.name}
//             </Link>
//           );
//         })}
//       </nav>

//       {/* Bottom Row - Mobile scrollable */}
//       <div className="md:hidden bg-[#232323] pl-[140px] overflow-x-auto whitespace-nowrap scrollbar-hide py-2">
//         {secondRowLinks.map((link) => {
//           const isActive =
//             location.pathname === link.href ||
//             link.dropdown?.some((d) => location.pathname === d.href);

//           return (
//             <Link
//               key={link.name}
//               to={link.href}
//               className={`inline-block mx-2 px-4 py-2 rounded-full border text-sm ${
//                 isActive
//                   ? "border-[#ffc107] text-[#ffc107]"
//                   : "border-transparent hover:border-[#ffc107]"
//               }`}
//             >
//               {link.name}
//             </Link>
//           );
//         })}
//       </div>

//       {/* Mobile Fullscreen Menu */}
//       {mobileOpen && (
//         <div className="fixed inset-0 bg-[#1a1a1a] z-40 p-6 overflow-y-auto">
//           <button
//             onClick={() => setMobileOpen(false)}
//             className="absolute top-4 right-4 text-white"
//             aria-label="Close menu"
//           >
//             <X className="w-7 h-7" />
//           </button>

//           <ul className="mt-20 space-y-4">
//             {navLinks.map((link) => (
//               <li key={link.name}>
//                 <Link
//                   to={link.href}
//                   onClick={() => setMobileOpen(false)}
//                   className="flex items-center space-x-2 py-3 px-2 text-lg hover:text-[#ffc107]"
//                 >
//                   <link.icon className="w-5 h-5" />
//                   <span>{link.name}</span>
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           <div className="border-t border-[#333] my-6"></div>

//           <ul className="space-y-3">
//             {secondRowLinks.map((link) => (
//               <li key={link.name}>
//                 {link.dropdown?.length ? (
//                   <>
//                     <button
//                       onClick={() => toggleMobileDropdown(link.name)}
//                       className={`w-full flex justify-between items-center py-2 text-base ${
//                         openDropdown === link.name ? "text-[#ffc107]" : ""
//                       }`}
//                       aria-expanded={openDropdown === link.name}
//                     >
//                       {link.name}
//                       <ChevronDown
//                         className={`w-5 h-5 transition-transform ${
//                           openDropdown === link.name ? "rotate-180" : ""
//                         }`}
//                       />
//                     </button>
//                     {openDropdown === link.name && (
//                       <ul className="pl-4 mt-2 space-y-2 border-l border-[#333]">
//                         {link.dropdown.map((item) => (
//                           <li key={item.name}>
//                             <Link
//                               to={item.href}
//                               onClick={() => setMobileOpen(false)}
//                               className="block py-2 text-sm hover:text-[#ffc107]"
//                             >
//                               {item.name}
//                             </Link>
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                   </>
//                 ) : (
//                   <Link
//                     to={link.href}
//                     onClick={() => setMobileOpen(false)}
//                     className="block py-2 hover:text-[#ffc107]"
//                   >
//                     {link.name}
//                   </Link>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;




// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { PhoneCall, Menu, X, Home, Info, Mail, Layout, ChevronDown } from 'lucide-react';
// import Logo from '../assets/logo.png'

// const navLinks = [
//   { name: 'Home', href: '/', icon: Home },
//   { name: 'About', href: '/about-us', icon: Info },
//   { name: 'Contact', href: '/contact', icon: Mail },
//   { name: 'Services', href: '/services', icon: Layout },
// ];

// const secondRowLinks = [
//   {
//     name: 'Panel of Experts (POE)',
//     href: '/panel-of-experts',
//     dropdown: [
//       { name: 'About Panel of Experts', href: '/panel-of-experts/about' },
//       { name: 'Subject Matter Experts', href: '/panel-of-experts/subject-matter-experts' },
//       { name: 'Become a Panel Member', href: '/panel-of-experts/become-a-member' },
//       { name: 'Activities/Benefits', href: '/panel-of-experts/activities-benefits' },
//     ],
//   },
//   {
//     name: 'Academic Assist',
//     href: '/academic-assist',
//     dropdown: [
//       { name: 'Academic Projects', href: '/academic-assist/projects' },
//       { name: 'Conferences/Seminars', href: '/academic-assist/conferences' },
//       { name: 'Workshops', href: '/academic-assist/workshops' },
//       { name: 'Internships', href: '/academic-assist/internships' },
//       { name: 'Publications', href: '/academic-assist/publications' },
//       { name: 'Skill Development (SKID)', href: '/academic-assist/skill-development' },
//       { name: 'Industrial Tours (INTO)', href: '/academic-assist/industrial-tours' },
//       { name: 'E-Studies', href: '/academic-assist/e-studies' },
//       { name: 'Competitive Exams Related Training (CERT)', href: '/academic-assist/cert' },
//     ],
//   },
//   {
//     name: 'Corporate Astute',
//     href: '/corporate-astute',
//     dropdown: [
//       { name: 'Corporate Support Service (CSS)', href: '/corporate-astute/css' },
//       { name: 'Contract Research Services (CRS)', href: '/corporate-astute/crs' },
//       { name: 'Faculty Upskilling Services (FUSS)', href: '/corporate-astute/fuss' },
//       { name: 'Research Assistance & Writing Services (RAWS)', href: '/corporate-astute/raws' },
//     ],
//   },
//   {
//     name: 'Career Saga',
//     href: '/career-saga',
//     dropdown: [
//       { name: 'Job Oriented Trainings (JOT)', href: '/career-saga/jot' },
//       { name: 'Placement Assistance (PLAST)', href: '/career-saga/plast' },
//       { name: 'Advanced Industrial Reach (AIR)', href: '/career-saga/air' },
//       { name: 'Peptides Assistance Membership (PAM)', href: '/career-saga/pam' },
//     ],
//   },
//   {
//     name: 'Collaborations',
//     href: '/collaborations',
//     dropdown: [
//       { name: 'Academic Collaborations', href: '/collaborations/academic' },
//       { name: 'Industry Collaborations', href: '/collaborations/industry' },
//       { name: 'Collaborate with Peptides', href: '/collaborations/peptides' },
//     ],
//   },
//   {
//     name: 'Gallery',
//     href: '/gallery',
//     dropdown: [],
//   },
//   {
//     name: 'Careers',
//     href: '/careers',
//     dropdown: [
//       { name: 'Jobs @ Peptides', href: '/careers/jobs' },
//       { name: 'Post a Job with Peptides', href: '/careers/post-job' },
//     ],
//   },
// ];

// const Navbar = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const location = useLocation();

//   const handleMobileDropdown = (name) => {
//     setOpenDropdown(openDropdown === name ? null : name);
//   };

//   return (
//     <header className="bg-[#2d2d2d] text-white sticky top-0 w-full z-50">
//       {/* Fixed Logo */}
//       <div className="fixed top-4 left-4 z-50">
//         <Link to="/">
//           <img
//             src={Logo}
//             alt="Peptides Knowledge Park Logo"
//             className="h-[100px] w-[100px] rounded-full bg-white p-3 shadow-lg"
//           />
//         </Link>
//       </div>

//       {/* Top Row */}
//       <div className="flex items-center justify-between pl-[140px] pr-4 h-[60px]">
//         {/* Primary nav links */}
//         <div className="hidden md:flex items-center space-x-6">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               to={link.href}
//               className={`flex items-center space-x-2 font-medium transition-colors duration-200 ${
//                 location.pathname === link.href
//                   ? 'text-[#ffc107]'
//                   : 'hover:text-[#ffc107]'
//               }`}
//             >
//               <link.icon className="w-5 h-5" />
//               <span>{link.name}</span>
//             </Link>
//           ))}
//         </div>

//         {/* Contact */}
//         <div className="flex items-center space-x-2">
//           <PhoneCall className="w-5 h-5 text-[#ffc107]" />
//           <a href="tel:+917997940959" className="text-sm font-semibold">
//             +91 7997940959
//           </a>
//         </div>

//         {/* Mobile menu button */}
//         <button
//           onClick={() => setMobileOpen(!mobileOpen)}
//           className="md:hidden p-2"
//         >
//           {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
//         </button>
//       </div>

//       {/* Bottom Row */}
//       <div className="bg-[#232323] pl-[140px] pr-4 h-[70px]  hidden md:flex items-center space-x-4">
//         {secondRowLinks.map((link) => {
//           const isActive =
//             location.pathname === link.href ||
//             link.dropdown?.some((d) => location.pathname === d.href);

//           return (
//             <div key={link.name} className="relative group">
//               <Link
//                 to={link.href}
//                 className={`px-5 py-2 rounded-full border transition-all duration-300 ${
//                   isActive
//                     ? 'border-[#ffc107] text-[#ffc107]'
//                     : 'border-transparent hover:border-[#ffc107]'
//                 }`}
//               >
//                 {link.name}
//               </Link>

//               {/* Dropdown (desktop hover) */}
//               {link.dropdown?.length > 0 && (
//                 <div className="absolute top-full left-0 bg-[#2d2d2d] rounded-lg shadow-xl py-2 hidden group-hover:block min-w-[220px]">
//                   {link.dropdown.map((item) => (
//                     <Link
//                       key={item.name}
//                       to={item.href}
//                       className="block px-4 py-2 hover:bg-[#a87930] hover:text-[#2d2d2d]"
//                     >
//                       {item.name}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>
//           );
//         })}
//       </div>

//       {/* Bottom Row Mobile (scrollable) */}
//       <div className="md:hidden bg-[#232323] pl-[140px] overflow-x-auto whitespace-nowrap scrollbar-hide py-2">
//         {secondRowLinks.map((link) => {
//           const isActive =
//             location.pathname === link.href ||
//             link.dropdown?.some((d) => location.pathname === d.href);
//           return (
//             <Link
//               key={link.name}
//               to={link.href}
//               className={`inline-block mx-2 px-4 py-2 rounded-full border text-sm ${
//                 isActive
//                   ? 'border-[#ffc107] text-[#ffc107]'
//                   : 'border-transparent hover:border-[#ffc107]'
//               }`}
//             >
//               {link.name}
//             </Link>
//           );
//         })}
//       </div>

//       {/* Mobile Fullscreen Menu */}
//       {mobileOpen && (
//         <div className="fixed inset-0 bg-[#1a1a1a] z-40 p-6 overflow-y-auto">
//           <button
//             onClick={() => setMobileOpen(false)}
//             className="absolute top-4 right-4 text-white"
//           >
//             <X className="w-7 h-7" />
//           </button>

//           <ul className="mt-20 space-y-4">
//             {navLinks.map((link) => (
//               <li key={link.name}>
//                 <Link
//                   to={link.href}
//                   onClick={() => setMobileOpen(false)}
//                   className="flex items-center space-x-2 py-3 px-2 text-lg hover:text-[#ffc107]"
//                 >
//                   <link.icon className="w-5 h-5" />
//                   <span>{link.name}</span>
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           <div className="border-t border-[#333] my-6"></div>

//           <ul className="space-y-3">
//             {secondRowLinks.map((link) => (
//               <li key={link.name}>
//                 {link.dropdown?.length > 0 ? (
//                   <>
//                     <button
//                       onClick={() => handleMobileDropdown(link.name)}
//                       className={`w-full flex justify-between items-center py-2 ${
//                         openDropdown === link.name ? 'text-[#ffc107]' : ''
//                       }`}
//                     >
//                       {link.name}
//                       <ChevronDown
//                         className={`w-5 h-5 transition-transform ${
//                           openDropdown === link.name ? 'rotate-180' : ''
//                         }`}
//                       />
//                     </button>
//                     {openDropdown === link.name && (
//                       <ul className="pl-4 mt-2 space-y-2 border-l border-[#333]">
//                         {link.dropdown.map((item) => (
//                           <li key={item.name}>
//                             <Link
//                               to={item.href}
//                               onClick={() => setMobileOpen(false)}
//                               className="block py-2 text-sm hover:text-[#ffc107]"
//                             >
//                               {item.name}
//                             </Link>
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                   </>
//                 ) : (
//                   <Link
//                     to={link.href}
//                     onClick={() => setMobileOpen(false)}
//                     className="block py-2 hover:text-[#ffc107]"
//                   >
//                     {link.name}
//                   </Link>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;



// import React, { useState, useRef, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { PhoneCall, Menu, X, Home, Info, Mail, Layout, ChevronDown } from 'lucide-react';
// import Logo from '../assets/logo.png';

// const navLinks = [
//   { name: 'Home', href: '/', icon: Home },
//   { name: 'About', href: '/about-us', icon: Info },
//   { name: 'Contact', href: '/contact', icon: Mail },
//   { name: 'Services', href: '/services', icon: Layout },
// ];

// const secondRowLinks = [
//   {
//     name: 'Panel of Experts (POE)',
//     href: '/panel-of-experts',
//     dropdown: [
//       { name: 'About Panel of Experts', href: '/panel-of-experts/about' },
//       { name: 'Subject Matter Experts', href: '/panel-of-experts/subject-matter-experts' },
//       { name: 'Become a Panel Member', href: '/panel-of-experts/become-a-member' },
//       { name: 'Activities/Benefits', href: '/panel-of-experts/activities-benefits' },
//     ],
//   },
//   {
//     name: 'Academic Assist',
//     href: '/academic-assist',
//     dropdown: [
//       { name: 'Academic Projects', href: '/academic-assist/projects' },
//       { name: 'Conferences/Seminars', href: '/academic-assist/conferences' },
//       { name: 'Workshops', href: '/academic-assist/workshops' },
//       { name: 'Internships', href: '/academic-assist/internships' },
//       { name: 'Publications', href: '/academic-assist/publications' },
//       { name: 'Skill Development (SKID)', href: '/academic-assist/skill-development' },
//       { name: 'Industrial Tours (INTO)', href: '/academic-assist/industrial-tours' },
//       { name: 'E-Studies', href: '/academic-assist/e-studies' },
//       { name: 'Competitive Exams Related Training (CERT)', href: '/academic-assist/cert' },
//     ],
//   },
//   {
//     name: 'Corporate Astute',
//     href: '/corporate-astute',
//     dropdown: [
//       { name: 'Corporate Support Service (CSS)', href: '/corporate-astute/css' },
//       { name: 'Contract Research Services (CRS)', href: '/corporate-astute/crs' },
//       { name: 'Faculty Upskilling Services (FUSS)', href: '/corporate-astute/fuss' },
//       { name: 'Research Assistance & Writing Services (RAWS)', href: '/corporate-astute/raws' },
//     ],
//   },
//   {
//     name: 'Career Saga',
//     href: '/career-saga',
//     dropdown: [
//       { name: 'Job Oriented Trainings (JOT)', href: '/career-saga/jot' },
//       { name: 'Placement Assistance (PLAST)', href: '/career-saga/plast' },
//       { name: 'Advanced Industrial Reach (AIR)', href: '/career-saga/air' },
//       { name: 'Peptides Assistance Membership (PAM)', href: '/career-saga/pam' },
//     ],
//   },
//   {
//     name: 'Collaborations',
//     href: '/collaborations',
//     dropdown: [
//       { name: 'Academic Collaborations', href: '/collaborations/academic' },
//       { name: 'Industry Collaborations', href: '/collaborations/industry' },
//       { name: 'Collaborate with Peptides', href: '/collaborations/peptides' },
//     ],
//   },
//   {
//     name: 'Gallery',
//     href: '/gallery',
//     dropdown: [],
//   },
//   {
//     name: 'Careers',
//     href: '/careers',
//     dropdown: [
//       { name: 'Jobs @ Peptides', href: '/careers/jobs' },
//       { name: 'Post a Job with Peptides', href: '/careers/post-job' },
//     ],
//   },
// ];

// const Navbar = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const location = useLocation();

//   const handleMobileDropdown = (name) => {
//     setOpenDropdown(openDropdown === name ? null : name);
//   };

//   const menuRef = useRef(null);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (mobileOpen && menuRef.current && !menuRef.current.contains(event.target)) {
//         setMobileOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [mobileOpen]);

//   return (
//     <header className="bg-[#2d2d2d] text-white sticky top-0 w-full z-50">
//       {/* Fixed Logo */}
//       <div className="fixed top-4 left-4 z-[55]">
//         <Link to="/">
//           <img
//             src={Logo}
//             alt="Peptides Knowledge Park Logo"
//             className="h-[100px] w-[100px] rounded-full bg-white p-3 shadow-lg"
//           />
//         </Link>
//       </div>

//       {/* Top Row */}
//       <div className="flex items-center justify-between pl-[140px] pr-4 h-[60px]">
//         {/* Primary nav links - now only visible on lg screens and up */}
//         <div className="hidden lg:flex items-center space-x-6">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               to={link.href}
//               className={`flex items-center space-x-2 font-medium transition-colors duration-200 ${
//                 location.pathname === link.href
//                   ? 'text-[#ffc107]'
//                   : 'hover:text-[#ffc107]'
//               }`}
//             >
//               <link.icon className="w-5 h-5" />
//               <span>{link.name}</span>
//             </Link>
//           ))}
//         </div>

//         {/* Contact */}
//         <div className="flex items-center space-x-2">
//           <PhoneCall className="w-5 h-5 text-[#ffc107]" />
//           <a href="tel:+917997940959" className="text-sm font-semibold">
//             +91 7997940959
//           </a>
//         </div>

//         {/* Mobile menu button - now visible up to large screens */}
//         <button
//           onClick={() => setMobileOpen(!mobileOpen)}
//           className="lg:hidden p-2"
//         >
//           {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
//         </button>
//       </div>

//       {/* Bottom Row (Desktop) - now only visible on lg screens and up */}
//       <div className="bg-[#232323] pl-[140px] pr-4 h-[70px] hidden lg:flex items-center space-x-4">
//         {secondRowLinks.map((link) => {
//           const isActive =
//             location.pathname === link.href ||
//             link.dropdown?.some((d) => location.pathname === d.href);

//           return (
//             <div key={link.name} className="relative group">
//               <Link
//                 to={link.href}
//                 className={`px-5 py-2 rounded-full border transition-all duration-300 ${
//                   isActive
//                     ? 'border-[#ffc107] text-[#ffc107]'
//                     : 'border-transparent hover:border-[#ffc107]'
//                 }`}
//               >
//                 {link.name}
//               </Link>
//               {link.dropdown?.length > 0 && (
//                 <div className="absolute top-full left-0 bg-[#2d2d2d] rounded-lg shadow-xl py-2 hidden group-hover:block min-w-[220px]">
//                   {link.dropdown.map((item) => (
//                     <Link
//                       key={item.name}
//                       to={item.href}
//                       className="block px-4 py-2 hover:bg-[#a87930] hover:text-[#2d2d2d]"
//                     >
//                       {item.name}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>
//           );
//         })}
//       </div>

//       {/* Bottom Row Mobile/Tablet (scrollable) - now hidden on lg screens and up */}
//       <div className="lg:hidden bg-[#232323] overflow-x-auto whitespace-nowrap scrollbar-hide py-2">
//         <div className="pl-[140px] inline-flex items-center space-x-2">
//           {secondRowLinks.map((link) => {
//             const isActive =
//               location.pathname === link.href ||
//               link.dropdown?.some((d) => location.pathname === d.href);
//             return (
//               <Link
//                 key={link.name}
//                 to={link.href}
//                 className={`inline-block px-4 py-2 rounded-full border text-sm ${
//                   isActive
//                     ? 'border-[#ffc107] text-[#ffc107]'
//                     : 'border-transparent hover:border-[#ffc107]'
//                 }`}
//               >
//                 {link.name}
//               </Link>
//             );
//           })}
//         </div>
//       </div>

//       {/* Animated Mobile/Tablet Fullscreen Menu */}
//       <div
//         ref={menuRef}
//         className={`fixed inset-y-0 right-0 w-3/4 max-w-sm bg-[#1a1a1a] z-50 transform transition-transform duration-500 ease-in-out ${
//           mobileOpen ? 'translate-x-0' : 'translate-x-full'
//         } p-6 overflow-y-auto`}
//       >
//         <button
//           onClick={() => setMobileOpen(false)}
//           className="absolute top-4 right-4 text-white"
//         >
//           <X className="w-7 h-7" />
//         </button>

//         <div className="mt-20">
//           <ul className="space-y-4">
//             {navLinks.map((link) => (
//               <li key={link.name}>
//                 <Link
//                   to={link.href}
//                   onClick={() => setMobileOpen(false)}
//                   className="flex items-center space-x-2 py-3 px-2 text-lg hover:text-[#ffc107] transition-colors"
//                 >
//                   <link.icon className="w-5 h-5" />
//                   <span>{link.name}</span>
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           <div className="border-t border-[#333] my-6"></div>

//           <ul className="space-y-3">
//             {secondRowLinks.map((link) => (
//               <li key={link.name}>
//                 {link.dropdown?.length > 0 ? (
//                   <>
//                     <button
//                       onClick={() => handleMobileDropdown(link.name)}
//                       className={`w-full flex justify-between items-center py-2 transition-colors ${
//                         openDropdown === link.name ? 'text-[#ffc107]' : ''
//                       }`}
//                     >
//                       {link.name}
//                       <ChevronDown
//                         className={`w-5 h-5 transition-transform duration-300 ${
//                           openDropdown === link.name ? 'rotate-180' : ''
//                         }`}
//                       />
//                     </button>
//                     {openDropdown === link.name && (
//                       <ul className="pl-4 mt-2 space-y-2 border-l border-[#333] transition-all duration-300 ease-in-out overflow-hidden max-h-96">
//                         {link.dropdown.map((item) => (
//                           <li key={item.name}>
//                             <Link
//                               to={item.href}
//                               onClick={() => setMobileOpen(false)}
//                               className="block py-2 text-sm hover:text-[#ffc107] transition-colors"
//                             >
//                               {item.name}
//                             </Link>
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                   </>
//                 ) : (
//                   <Link
//                     to={link.href}
//                     onClick={() => setMobileOpen(false)}
//                     className="block py-2 hover:text-[#ffc107] transition-colors"
//                   >
//                     {link.name}
//                   </Link>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;






import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PhoneCall, Menu, X, Home, Info, Mail, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion'; // 🔥 added animations
import Logo from '../assets/logo.png';

const navLinks = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About', href: '/about-us', icon: Info },
  { name: 'Contact', href: '/contact', icon: Mail },
];

const secondRowLinks = [
  {
    name: 'Panel of Experts (POE)',
    href: '/panel-of-experts',
    dropdown: [
      { name: 'About Panel of Experts', href: '/panel-of-experts/about-advisory-board' },
      { name: 'Subject Matter Experts', href: '/panel-of-experts/subject-matter-experts' },
      { name: 'Become a Panel Member', href: '/panel-of-experts/become-a-member' },
      { name: 'Activities/Benefits', href: '/panel-of-experts/activities-benefits' },
    ],
  },
  {
    name: 'Academic Assist',
    href: '/academic-assist',
    dropdown: [
      { name: 'Academic Projects', href: '/academic-assist/projects' },
      { name: 'Conferences/Seminars', href: '/academic-assist/conferences' },
      { name: 'Workshops', href: '/academic-assist/workshops' },
      { name: 'Internships', href: '/academic-assist/internships' },
      { name: 'Publications', href: '/academic-assist/publications' },
      { name: 'Skill Development (SKID)', href: '/academic-assist/skill-development' },
      { name: 'Industrial Tours (INTO)', href: '/academic-assist/industrial-tours' },
      { name: 'E-Studies', href: '/academic-assist/e-studies' },
      { name: 'Competitive Exams Related Training (CERT)', href: '/academic-assist/cert' },
    ],
  },
  {
    name: 'Corporate Astute',
    href: '/corporate-astute',
    dropdown: [
      { name: 'Corporate Support Service (CSS)', href: '/corporate-astute/css' },
      { name: 'Contract Research Services (CRS)', href: '/corporate-astute/crs' },
      { name: 'Faculty Upskilling Services (FUSS)', href: '/corporate-astute/fuss' },
      { name: 'Research Assistance & Writing Services (RAWS)', href: '/corporate-astute/raws' },
    ],
  },
  {
    name: 'Career Saga',
    href: '/career-saga',
    dropdown: [
      { name: 'Job Oriented Trainings (JOT)', href: '/career-saga/jot' },
      { name: 'Placement Assistance (PLAST)', href: '/career-saga/plast' },
      { name: 'Advanced Industrial Reach (AIR)', href: '/career-saga/air' },
      { name: 'Peptides Assistance Membership (PAM)', href: '/career-saga/pam' },
    ],
  },
  {
    name: 'Collaborations',
    href: '/collaborations',
    dropdown: [
      { name: 'Academic Collaborations', href: '/collaborations/academic' },
      { name: 'Industry Collaborations', href: '/collaborations/industry' },
      { name: 'Collaborate with Peptides', href: '/collaborations/peptides' },
    ],
  },
  {
    name: 'Gallery',
    href: '/gallery',
    dropdown: [],
  },
  {
    name: 'Careers',
    href: '/careers',
    dropdown: [
      { name: 'Jobs @ Peptides', href: '/careers/jobs' },
      { name: 'Post a Job with Peptides', href: '/careers/post-job' },
    ],
  },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const handleMobileDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileOpen]);

  return (
    <header className="bg-[#0f2920] text-white sticky top-0 w-full z-50">
{/* Fixed Logo */}
<div className="fixed top-[6px] lg:top-[5px] left-4 z-[55]">
  <Link to="/">
    <div
      className="h-[90px] w-[90px] rounded-lg bg-white p-3 shadow-lg bg-center bg-contain bg-no-repeat"
      style={{ backgroundImage: `url(${Logo})` }}
    />
  </Link>
</div>


      {/* Top Row */}
      <div className="flex items-center justify-between pl-[140px] pr-4 h-[50px]">
        {/* Primary nav links - desktop only */}
        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`flex items-center space-x-2 font-medium transition-colors duration-200 ${
                location.pathname === link.href
                  ? 'text-[#ffc107]'
                  : 'hover:text-[#ffc107]'
              }`}
            >
              <link.icon className="w-5 h-5" />
              <span>{link.name}</span>
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div className="flex items-center space-x-2">
          <PhoneCall className="w-5 h-5 text-[#ffc107]" />
          <a href="tel:+917997940959" className="text-sm font-semibold">
            +91 7997940959
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2"
        >
          {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Bottom Row (Desktop) */}
      <div className="bg-[#734C20] pl-[120px] pr-4 h-[50px] hidden lg:flex items-center space-x-4">
        {secondRowLinks.map((link) => {
          const isActive =
            location.pathname === link.href ||
            link.dropdown?.some((d) => location.pathname === d.href);

          return (
            <div key={link.name} className="relative group">
              <Link
                to={link.href}
                className={`px-5 py-2 rounded-full border transition-all duration-300 ${
                  isActive
                    ? 'border-[#ffc107] text-[#ffc107]'
                    : 'border-transparent hover:border-[#ffc107]'
                }`}
              >
                {link.name}
              </Link>
              {link.dropdown?.length > 0 && (
                <div className="absolute top-full left-0 bg-[#2d2d2d] rounded-lg shadow-xl py-2 hidden group-hover:block min-w-[220px]">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block px-4 py-2 hover:bg-[#a87930] hover:text-[#0f2920]"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Row Mobile/Tablet */}
      <div className="lg:hidden bg-[#734C20] overflow-x-auto whitespace-nowrap scrollbar-hide py-2">
        <div className="pl-[140px] inline-flex items-center space-x-2">
          {secondRowLinks.map((link) => {
            const isActive =
              location.pathname === link.href ||
              link.dropdown?.some((d) => location.pathname === d.href);
            return (
              <Link
                key={link.name}
                to={link.href}
                className={`inline-block px-4 py-2 rounded-full border text-sm ${
                  isActive
                    ? 'border-[#ffc107] text-[#ffc107]'
                    : 'border-transparent hover:border-[#ffc107]'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>

      {/* 🔥 Animated Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Dark background overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              ref={menuRef}
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              className="fixed inset-y-0 right-0 w-3/4 max-w-sm bg-[#0f2920] z-50 p-6 overflow-y-auto shadow-xl"
            >
              <button
                onClick={() => setMobileOpen(false)}
                className="absolute top-4 right-4 text-white"
              >
                <X className="w-7 h-7" />
              </button>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-20"
              >
                <ul className="space-y-4">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i }}
                    >
                      <Link
                        to={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center space-x-2 py-3 px-2 text-lg hover:text-[#ffc107] transition-colors"
                      >
                        <link.icon className="w-5 h-5" />
                        <span>{link.name}</span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                <div className="border-t border-[#333] my-6"></div>

                <ul className="space-y-3">
                  {secondRowLinks.map((link, i) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + 0.05 * i }}
                    >
                      {link.dropdown?.length > 0 ? (
                        <>
                          <button
                            onClick={() => handleMobileDropdown(link.name)}
                            className={`w-full flex justify-between items-center py-2 transition-colors ${
                              openDropdown === link.name ? 'text-[#ffc107]' : ''
                            }`}
                          >
                            {link.name}
                            <motion.div
                              animate={{ rotate: openDropdown === link.name ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ChevronDown className="w-5 h-5" />
                            </motion.div>
                          </button>
                          <AnimatePresence>
                            {openDropdown === link.name && (
                              <motion.ul
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                className="pl-4 mt-2 space-y-2 border-l border-[#333] overflow-hidden"
                              >
                                {link.dropdown.map((item, j) => (
                                  <motion.li
                                    key={item.name}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.05 * j }}
                                  >
                                    <Link
                                      to={item.href}
                                      onClick={() => setMobileOpen(false)}
                                      className="block py-2 text-sm hover:text-[#ffc107] transition-colors"
                                    >
                                      {item.name}
                                    </Link>
                                  </motion.li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          to={link.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-2 hover:text-[#ffc107] transition-colors"
                        >
                          {link.name}
                        </Link>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
