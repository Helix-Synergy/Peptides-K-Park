import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import { PhoneCall, MapPin, Mail, Linkedin, Twitter, Facebook, ChevronDown, Home, Info, Image, Youtube, Instagram, } from 'lucide-react';
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
    icon: Image,
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

const Footer = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownToggle = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  // Find the 'Gallery' link to move it
  const galleryLink = secondRowLinks.find(link => link.name === 'Gallery');
  const quickLinks = [...navLinks, galleryLink];

  return (
    <footer className="bg-[#0f2920] text-white py-12 px-6 lg:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Box 1: Logo, Text & Socials */}
          <div className="space-y-4">
            <Link to="/">
              <div
                className="h-[90px] w-[90px] rounded-lg bg-white p-3 shadow-lg bg-center bg-contain bg-no-repeat"
                style={{ backgroundImage: `url(${Logo})` }}
              />
            </Link>
            <p className="text-sm text-gray-300 max-w-sm">
Peptides Knowledge Park offers a range of Academic Support Services including Workshops to enhance student success and engagement.            </p>
<div className="flex space-x-4">
              <a href="#" className="hover:text-[#ffc107] transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-[#ffc107] transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-[#ffc107] transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-[#ffc107] transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-[#ffc107] transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-[#ffc107] transition-colors">
                <FaWhatsapp className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Box 2: Quick Links (Now with Gallery) */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-[#ffc107]">Quick Links</h3>
            <ul className="space-y-6">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="flex items-center space-x-2 hover:text-[#ffc107] transition-colors"
                  >
                    {link.icon && <link.icon className="w-5 h-5" />}
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

{/* Box 3: Services (Removed Gallery and Careers) */}
<div className="space-y-4">
  <h3 className="text-xl font-semibold text-[#ffc107]">Our Services</h3>
  <ul className="space-y-2">
    {secondRowLinks
      .filter(link => link.name !== 'Gallery' && link.name !== 'Careers')
      .map((link) => (
      <li key={link.name}>
        {link.dropdown?.length > 0 ? (
          <>
            <button
              onClick={() => handleDropdownToggle(link.name)}
              className="w-full flex items-center hover:text-[#ffc107] transition-colors"
            >
              {link.name}
              <ChevronDown
                className={`w-5 h-5 ml-4 transition-transform duration-300 ${openDropdown === link.name ? 'rotate-180' : ''}`}
              />
            </button>
            <ul
              className={`pl-4 mt-2 space-y-2 border-l border-[#333] transition-all duration-300 ease-in-out overflow-hidden ${
                openDropdown === link.name ? 'max-h-96' : 'max-h-0'
              }`}
            >
              {link.dropdown.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="block text-sm hover:text-[#ffc107] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <Link
            to={link.href}
            className="block hover:text-[#ffc107] transition-colors"
          >
            {link.name}
          </Link>
        )}
      </li>
    ))}
  </ul>
</div>


          {/* Box 4: Get in Touch (Contact Info) */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-[#ffc107]">Get in Touch</h3>
            <address className="not-italic space-y-2 text-gray-300">
              <p className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-[#ffc107] mt-1 shrink-0" />
                <span>
                  Mindspace IT Park<br />
                  TSIIC Software Units Layout <br />
                  Madhapur, Hyderabad, <br />
                  Telangana 500081, India<br />
                  
                </span>
              </p>
              <p className="flex items-center space-x-2">
                <PhoneCall className="w-5 h-5 text-[#ffc107]" />
                <a href="tel:+917997940959" className="hover:text-[#ffc107] transition-colors">+91 7997940959</a>
              </p>
              <p className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-[#ffc107]" />
                <a href="mailto:info@peptides.com" className="hover:text-[#ffc107] transition-colors">info@peptides.com</a>
              </p>
            </address>
          </div>
        </div>

        <hr className="my-10 border-[#333]" />
        <div className="text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Peptides Knowledge Park. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;



// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { PhoneCall, MapPin, Mail, Linkedin, Twitter, Facebook, ChevronDown, Home, Info, Layout } from 'lucide-react';
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

// const Footer = () => {
//   const [openDropdown, setOpenDropdown] = useState(null);

//   const handleDropdownToggle = (name) => {
//     setOpenDropdown(openDropdown === name ? null : name);
//   };

//   return (
//     <footer className="bg-[#0f2920] text-white py-12 px-6 lg:px-12">
//       <div className="container mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
//           {/* Box 1: Logo, Text & Socials */}
//           <div className="space-y-4">
//             <Link to="/">
//               <div
//                 className="h-[90px] w-[90px] rounded-lg bg-white p-3 shadow-lg bg-center bg-contain bg-no-repeat"
//                 style={{ backgroundImage: `url(${Logo})` }}
//               />
//             </Link>
//             <p className="text-sm text-gray-300 max-w-sm">
//               Peptides Knowledge Park is a leading research and innovation hub, dedicated to advancing knowledge and fostering collaboration across various sectors.
//             </p>
//             <div className="flex space-x-4">
//               <a href="#" className="hover:text-[#ffc107] transition-colors">
//                 <Linkedin className="w-6 h-6" />
//               </a>
//               <a href="#" className="hover:text-[#ffc107] transition-colors">
//                 <Twitter className="w-6 h-6" />
//               </a>
//               <a href="#" className="hover:text-[#ffc107] transition-colors">
//                 <Facebook className="w-6 h-6" />
//               </a>
//             </div>
//           </div>

//           {/* Box 2: Main Navigation Links */}
//           <div className="space-y-4">
//             <h3 className="text-xl font-semibold text-[#ffc107]">Quick Links</h3>
//             <ul className="space-y-2">
//               {navLinks.map((link) => (
//                 <li key={link.name}>
//                   <Link
//                     to={link.href}
//                     className="flex items-center space-x-2 hover:text-[#ffc107] transition-colors"
//                   >
//                     <link.icon className="w-5 h-5" />
//                     <span>{link.name}</span>
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Box 3: Second Row Links with Dropdowns */}
//           <div className="space-y-4">
//             <h3 className="text-xl font-semibold text-[#ffc107]">Our Services</h3>
//             <ul className="space-y-2">
//               {secondRowLinks.map((link) => (
//                 <li key={link.name}>
//                   {link.dropdown?.length > 0 ? (
//                     <>
//                       <button
//                         onClick={() => handleDropdownToggle(link.name)}
//                         className="w-full flex justify-between items-center hover:text-[#ffc107] transition-colors"
//                       >
//                         {link.name}
//                         <ChevronDown
//                           className={`w-5 h-5 transition-transform duration-300 ${openDropdown === link.name ? 'rotate-180' : ''}`}
//                         />
//                       </button>
//                       <ul
//                         className={`pl-4 mt-2 space-y-2 border-l border-[#333] transition-all duration-300 ease-in-out overflow-hidden ${
//                           openDropdown === link.name ? 'max-h-96' : 'max-h-0'
//                         }`}
//                       >
//                         {link.dropdown.map((item) => (
//                           <li key={item.name}>
//                             <Link
//                               to={item.href}
//                               className="block text-sm hover:text-[#ffc107] transition-colors"
//                             >
//                               {item.name}
//                             </Link>
//                           </li>
//                         ))}
//                       </ul>
//                     </>
//                   ) : (
//                     <Link
//                       to={link.href}
//                       className="block hover:text-[#ffc107] transition-colors"
//                     >
//                       {link.name}
//                     </Link>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Box 4: Contact Info */}
//           <div className="space-y-4">
//             <h3 className="text-xl font-semibold text-[#ffc107]">Get in Touch</h3>
//             <address className="not-italic space-y-2 text-gray-300">
//               <p className="flex items-start space-x-2">
//                 <MapPin className="w-5 h-5 text-[#ffc107] mt-1 shrink-0" />
//                 <span>
//                   Plot No. 177, Phase-2, <br />
//                   Kamalapuri Colony, Hyderabad, <br />
//                   Telangana 500073
//                 </span>
//               </p>
//               <p className="flex items-center space-x-2">
//                 <PhoneCall className="w-5 h-5 text-[#ffc107]" />
//                 <a href="tel:+917997940959" className="hover:text-[#ffc107] transition-colors">+91 7997940959</a>
//               </p>
//               <p className="flex items-center space-x-2">
//                 <Mail className="w-5 h-5 text-[#ffc107]" />
//                 <a href="mailto:info@peptides.com" className="hover:text-[#ffc107] transition-colors">info@peptides.com</a>
//               </p>
//             </address>
//           </div>
//         </div>

//         <hr className="my-10 border-[#333]" />
//         <div className="text-center text-sm text-gray-400">
//           &copy; {new Date().getFullYear()} Peptides Knowledge Park. All Rights Reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;