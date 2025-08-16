// // src/components/AcademicAssist/AcademicAssistDropdown.jsx
// import React, { useEffect, useState, useRef } from 'react';
// import { useLocation, Link, useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// // Removed Footer import - assume it's handled at a higher level if needed

// // Directly import the JSON data for Academic Assist
// import academicData from '../../pages/academicAssistData.json';

// const AcademicAssistDropdown = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const [activeId, setActiveId] = useState('');
//   const sectionRefs = useRef({}); // To store references to each content section

//   // Determine initial active section based on URL hash or default to first service
//   useEffect(() => {
//     const hash = location.hash.replace('#', '');
//     if (hash && academicData.services.some(service => service.id === hash)) {
//       setActiveId(hash);
//       // Scroll to the section if it exists, using native scrollIntoView
//       setTimeout(() => {
//         const section = sectionRefs.current[hash];
//         if (section) {
//           section.scrollIntoView({ behavior: 'smooth', block: 'start' });
//         }
//       }, 0); // Short delay to ensure content is rendered
//     } else {
//       // Default to the first section if no valid hash
//       setActiveId(academicData.services[0]?.id || '');
//     }
//   }, [location.hash]);

//   // Handle intersection observer for scroll-based active state
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach(entry => {
//           if (entry.isIntersecting && entry.intersectionRatio >= 0.5) { // Adjust intersectionRatio as needed
//             setActiveId(entry.target.id);
//           }
//         });
//       },
//       {
//         root: null, // viewport
//         rootMargin: '-100px 0px -50% 0px', // Adjust this to define the active zone. Top margin accounts for header.
//         threshold: 0.5, // Trigger when 50% of the item is visible
//       }
//     );

//     // Observe each section
//     academicData.services.forEach(service => {
//       const ref = sectionRefs.current[service.id];
//       if (ref) {
//         observer.observe(ref);
//       }
//     });

//     return () => {
//       // Unobserve all sections on component unmount
//       academicData.services.forEach(service => {
//         const ref = sectionRefs.current[service.id];
//         if (ref) {
//           observer.unobserve(ref);
//         }
//       });
//     };
//   }, [academicData.services]);

//   const handleSidebarClick = (id) => {
//     setActiveId(id);
//     // Use hash navigation for smooth scrolling and URL update
//     navigate(`#${id}`);
//     // Explicitly scroll into view as hash change might not trigger smooth scroll alone
//     setTimeout(() => {
//         const section = sectionRefs.current[id];
//         if (section) {
//           // Adjust scroll position to account for fixed header
//           const yOffset = -64; // Assuming your Navbar height is 64px
//           const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
//           window.scrollTo({ top: y, behavior: 'smooth' });
//         }
//     }, 100); // Small delay to ensure render and ref are ready
//   };

//   const GLOBAL_HEADER_HEIGHT = 80; // Assuming your Navbar height based on Navbar.jsx h-20

//   return (
//     <div className="bg-gradient-to-br from-blue-100 via-green-50 to-pink-50 min-h-screen font-inter">
//       {/* Hero Section - Same pattern as AdvisoryContentDisplay */}
//       <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center text-white overflow-hidden bg-gradient-to-br from-purple-700 to-pink-600">
//         <motion.div
//           initial={{ y: -50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           className="relative z-10 text-center"
//         >
//           <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">{academicData.meta.h1}</h1>
//           <p className="text-lg md:text-xl max-w-3xl mx-auto px-4">
//             {academicData.intro.title}
//           </p>
//           <p className="text-base text-gray-200 mt-2 max-w-3xl mx-auto px-4 whitespace-pre-line">{academicData.intro.description}</p>
//         </motion.div>
//       </section>

//       {/* Main Content Area - Conditional Grid Layout */}
//       <section className="w-full py-12 px-4 lg:px-12">
//         <div className="grid grid-cols-1 lg:grid-cols-[26vw_1fr] gap-8">
//           {/* Sidebar Navigation - Applied Glassmorphism effect */}
//           <motion.aside
//             className="p-6 bg-white/40 backdrop-blur-lg border border-white/30 rounded-xl shadow-xl lg:sticky lg:top-24 lg:self-start" // Sticky for desktop
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.1 }}
//             transition={{ duration: 0.7, ease: 'easeOut' }}
//             style={{ maxHeight: `calc(100vh - ${GLOBAL_HEADER_HEIGHT + 48}px)` }} // Adjust max height for sticky behavior
//           >
//             <h3 className="text-xl font-bold text-gray-900 mb-4">Academic Services</h3>
//             <nav className="custom-scrollbar-hide overflow-y-auto" style={{ maxHeight: `calc(100vh - ${GLOBAL_HEADER_HEIGHT + 24 + 50}px)` }}>
//               <ul className="space-y-2">
//                 {academicData.services.map((service, idx) => (
//                   <motion.li key={service.id} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }}>
//                     <button
//                       onClick={() => handleSidebarClick(service.id)}
//                       className={`w-full text-left px-4 py-2 rounded transition font-semibold hover:bg-purple-200 hover:text-purple-800 ${
//                         activeId === service.id ? 'bg-purple-600 text-white shadow-md' : 'bg-purple-100 text-purple-800'
//                       }`}
//                       aria-current={activeId === service.id ? 'page' : undefined}
//                     >
//                       {service.title}
//                     </button>
//                   </motion.li>
//                 ))}
//               </ul>
//             </nav>

//             {/* "How Can We Help?" Section - Example, assuming similar structure as Advisory */}
//             {academicData.helpSection && (
//               <motion.div
//                 className="mt-8 bg-gradient-to-br from-blue-500 to-purple-600 text-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center transform hover:scale-103 transition-transform duration-200"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.1 }}
//                 transition={{ duration: 0.7, delay: 0.6 }}
//               >
//                 <img
//                   src={academicData.helpSection.image}
//                   alt="How Can We Help?"
//                   className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-white shadow-md"
//                   onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/112x112/CCCCCC/000000?text=User'; }}
//                 />
//                 <h4 className="text-xl font-bold mb-1">{academicData.helpSection.title}</h4>
//                 <p className="text-sm mb-3">{academicData.helpSection.description}</p>
//                 <div className="text-base font-semibold mb-4">
//                   <p>{academicData.helpSection.phone}</p>
//                   <p>Mail: {academicData.helpSection.email}</p>
//                 </div>
//                 {/* Social icons placeholders */}
//                 <div className="flex gap-3 mt-2">
//                   <a href="#" className="w-9 h-9 flex items-center justify-center bg-white text-blue-700 rounded-full hover:bg-gray-100 transition-colors duration-200">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.812c-3.233 0-4.188 1.501-4.188 4.004v2.996z"/></svg>
//                   </a>
//                   <a href="#" className="w-9 h-9 flex items-center justify-center bg-white text-blue-700 rounded-full hover:bg-gray-100 transition-colors duration-200">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.594 0-6.495 2.902-6.495 6.495 0 .509.058 1.006.173 1.485-5.392-.27-10.197-2.857-13.407-6.793-.559.957-.883 2.077-.883 3.261 0 2.253 1.149 4.246 2.895 5.424-.849-.026-1.646-.26-2.34-.647-.005.021-.005.042-.005.063 0 3.166 2.262 5.8 5.26 6.39-.547.148-1.12.227-1.703.227-.417 0-.82-.041-1.215-.116.834 2.606 3.251 4.504 6.101 4.554-2.245 1.76-5.087 2.812-8.15 2.812-.53 0-1.053-.031-1.566-.092 2.905 1.86 6.356 2.946 10.063 2.946 12.071 0 18.67-10.003 18.67-18.67 0-.6-.013-1.196-.039-1.79z"/></svg>
//                   </a>
//                   <a href="#" className="w-9 h-9 flex items-center justify-center bg-white text-blue-700 rounded-full hover:bg-gray-100 transition-colors duration-200">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5 1.11-2.5 2.48-2.5 2.48 1.119 2.48 2.5zm.02 6.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.59-11.011-3.6z"/></svg>
//                   </a>
//                 </div>
//               </motion.div>
//             )}
//           </motion.aside>

//           {/* Main Content Area (Dynamic Sections) */}
//           <div>
//             {academicData.services.map((service, idx) => (
//               <motion.div
//                 key={service.id}
//                 id={service.id} // Important: IDs for scrolling and IntersectionObserver
//                 ref={el => {
//                   if (el) sectionRefs.current[service.id] = el;
//                 }}
//                 className="mb-12 p-6 bg-white/40 backdrop-blur-lg border border-white/30 rounded-xl shadow-xl scroll-mt-24" // scroll-mt-24 accounts for fixed header
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.3 }}
//                 transition={{ duration: 0.6, delay: idx * 0.1 }}
//               >
//                 <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">{service.title}</h2>
//                 <p className="text-gray-700 mb-4 text-lg leading-relaxed whitespace-pre-line">{service.description}</p>

//                 {/* Example of conditional rendering for images, benefits etc.
//                     You will need to ensure your academicAssistData.json structure
//                     supports these additional fields if you want to display them.
//                     For now, I'm assuming a simple structure with title, description, and cta.
//                     If you have images/benefits, add them to your JSON and uncomment/adapt these sections.
//                 */}
//                 {/* Images Section (if present in your JSON for a service) */}
//                 {/* {service.images && service.images.length > 0 && (
//                   <div className={`grid ${service.images.length > 1 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'} gap-6 mt-8`}>
//                     {service.images.map((img, imgIdx) => (
//                       <motion.img
//                         key={imgIdx}
//                         src={img.src}
//                         alt={img.alt}
//                         className="rounded-2xl shadow-lg w-full object-cover h-64 md:h-72"
//                         onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/DDA0DD/FFFFFF?text=Image+Load+Error'; }}
//                         initial={{ opacity: 0, scale: 0.9 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         viewport={{ once: true, amount: 0.5 }}
//                         transition={{ duration: 0.5, delay: imgIdx * 0.1 }}
//                       />
//                     ))}
//                   </div>
//                 )} */}

//                 {/* Benefits Section (if present in your JSON for a service) */}
//                 {/* {service.benefits && service.benefits.length > 0 && (
//                   <div className="mt-8">
//                     <h3 className="text-2xl font-bold text-gray-900 mb-4">Benefits With Our Service</h3>
//                     <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 text-lg">
//                       {service.benefits.map((benefit, bIdx) => (
//                         <li key={bIdx} className="flex items-start">
//                           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                           </svg>
//                           {benefit}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )} */}


//                 {/* CTA Button */}
//                 <button
//                   className="mt-4 bg-purple-600 text-white px-6 py-2 rounded shadow hover:bg-purple-700 transition"
//                   onClick={() => navigate(service.ctaRoute)}
//                 >
//                   {service.ctaText}
//                 </button>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* FAQ Section - Example, if academicData.json has FAQ */}
//         {academicData.faq && academicData.faq.length > 0 && (
//           <motion.div
//             className="w-full mt-12 p-6 bg-white/40 backdrop-blur-lg border border-white/30 rounded-xl shadow-lg"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.5 }}
//           >
//             <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
//             <div className="space-y-4">
//               {academicData.faq.map((item, faqIdx) => (
//                 <motion.div
//                   key={faqIdx}
//                   className="bg-white/30 rounded-xl shadow-md p-6 cursor-pointer"
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, amount: 0.3 }}
//                   transition={{ duration: 0.5, delay: faqIdx * 0.1 }}
//                   onClick={(e) => {
//                     const answer = e.currentTarget.querySelector('.faq-answer');
//                     const icon = e.currentTarget.querySelector('svg');
//                     if (answer) {
//                       answer.classList.toggle('hidden');
//                       icon.classList.toggle('rotate-180');
//                     }
//                   }}
//                 >
//                   <h3 className="text-lg font-semibold text-gray-800 flex justify-between items-center">
//                     {item.question}
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 transform transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
//                       <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                     </svg>
//                   </h3>
//                   <p className="faq-answer hidden mt-3 text-gray-600">{item.answer}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </section>
//     </div>
//   );
// };

// export default AcademicAssistDropdown;




// import React, { useEffect, useRef, useState } from 'react';
// import academicData from '../../pages/academicAssistData.json'; // Ensure this path is correct
// import { useLocation, useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import Footer from '../Footer.jsx'; // Ensure this path is correct

// const AcademicAssistDropdown = ({ locomotive }) => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   // IMPORTANT: Ensure GLOBAL_HEADER_HEIGHT matches your actual fixed Navbar height.
//   // If your Navbar uses 'h-16' (64px), set this to 64.
//   // If it uses 'h-24' (96px) or if 'scroll-mt-24' (96px) is consistently used for header offset,
//   // then 96 is correct. I'm keeping 96 for consistency with your existing scroll-mt-24.
//   const GLOBAL_HEADER_HEIGHT = 96; // Corresponds to scroll-mt-24 (96px) or h-24 Navbar
//   const FIXED_BOTTOM_BAR_HEIGHT = 72; // From your style prop

//   // State to manage the active sidebar item, initialized to the first service ID
//   // Use optional chaining for safety in case academicData.services is empty
//   const [activeId, setActiveId] = useState(academicData.services[0]?.id || '');
//   const sectionRefs = useRef({}); // To store references to each content section

//   // State to track screen size for responsive layout adjustments
//   const [isMdScreen, setIsMdScreen] = useState(window.innerWidth >= 768);

//   // Effect to update isMdScreen on window resize
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMdScreen(window.innerWidth >= 768);
//     };
//     window.addEventListener('resize', handleResize);
//     // Call once immediately to set initial state
//     handleResize();
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // Handler for sidebar button clicks
//   const handleServiceClick = (id) => {
//     setActiveId(id); // Update active ID immediately on click
//     const section = sectionRefs.current[id];

//     if (section) {
//       if (locomotive) {
//         // For locomotive, a negative offset makes the target stop 'above' the scroll position,
//         // effectively bringing it below a fixed header.
//         locomotive.scrollTo(section, { offset: -GLOBAL_HEADER_HEIGHT, duration: 800 });
//       } else {
//         // For native scroll, subtract the header height from the top position
//         window.scrollTo({
//           top: section.offsetTop - GLOBAL_HEADER_HEIGHT,
//           behavior: 'smooth',
//         });
//       }
//       // Update URL hash without re-rendering the component via location.hash
//       // Use replace: true to avoid adding to browser history on every click
//       navigate(`#${id}`, { replace: true });
//     }
//   };

//   // Effect for Locomotive Scroll-based active state detection
//   useEffect(() => {
//     if (!locomotive) return; // Only run if locomotive is initialized

//     const handleLocomotiveScroll = (instance) => {
//       let currentVisibleSectionId = null;
//       // Iterate through services to find the one whose top is closest to the header,
//       // and which is clearly visible.
//       for (let i = 0; i < academicData.services.length; i++) {
//         const service = academicData.services[i];
//         const ref = sectionRefs.current[service.id];
//         if (ref) {
//           const rect = ref.getBoundingClientRect();
//           // A section is considered active if its top edge is at or just above the header line,
//           // and its bottom edge is below the header line (meaning it's significantly visible).
//           // Add a small buffer (e.g., +5px or -5px) for more robust detection.
//           const topThreshold = GLOBAL_HEADER_HEIGHT + 5; // A little below the header
//           const bottomThreshold = GLOBAL_HEADER_HEIGHT - 5; // A little above the header

//           if (rect.top <= topThreshold && rect.bottom >= bottomThreshold) {
//             currentVisibleSectionId = service.id;
//             // For smoother transition, we might want to pick the first one
//             // that is fully past the threshold or the one currently at the top.
//             // This 'break' makes it pick the topmost eligible section.
//             break;
//           }
//         }
//       }

//       // Fallback: If no section meets the primary criteria, perhaps we are at the very top
//       // or very bottom of the scroll.
//       if (!currentVisibleSectionId && academicData.services.length > 0) {
//         // If at the very top of the page, ensure the first service is active.
//         const firstSectionRect = sectionRefs.current[academicData.services[0].id]?.getBoundingClientRect();
//         if (firstSectionRect && firstSectionRect.top >= GLOBAL_HEADER_HEIGHT - 20) { // Small buffer for 'at top'
//           currentVisibleSectionId = academicData.services[0].id;
//         }
//         // You could add logic here for the very bottom as well if needed
//       }

//       // Update activeId only if a new section is detected as active
//       if (currentVisibleSectionId && currentVisibleSectionId !== activeId) {
//         setActiveId(currentVisibleSectionId);
//         // Optionally update URL hash during scroll for direct deep linking
//         // navigate(`#${currentVisibleSectionId}`, { replace: true });
//       }
//     };

//     locomotive.on('scroll', handleLocomotiveScroll);

//     return () => {
//       locomotive.off('scroll', handleLocomotiveScroll);
//     };
//   }, [locomotive, activeId, GLOBAL_HEADER_HEIGHT, academicData.services]);


//   // Effect for initial scroll based on URL hash when component mounts or hash changes.
//   // This runs AFTER the component has rendered and refs are available.
//   useEffect(() => {
//     // Ensure academicData.services is loaded and not empty
//     if (!academicData.services || academicData.services.length === 0) {
//       return;
//     }

//     const hash = location.hash.replace('#', '');
//     const targetService = academicData.services.find(service => service.id === hash);
//     // If hash exists and is valid, use it; otherwise, default to the ID of the first service.
//     const targetId = targetService ? hash : academicData.services[0].id;

//     const section = sectionRefs.current[targetId];

//     if (section) {
//       // Use setTimeout with a small delay to ensure all DOM elements and refs
//       // are fully rendered and Locomotive Scroll is potentially initialized and ready
//       // to calculate positions correctly, especially on initial page load.
//       const initialScroll = () => {
//         if (locomotive) {
//           // For initial load, scroll instantly with the correct negative offset
//           locomotive.scrollTo(section, { offset: -GLOBAL_HEADER_HEIGHT, duration: 0 });
//         } else {
//           window.scrollTo({
//             top: section.offsetTop - GLOBAL_HEADER_HEIGHT,
//             behavior: 'instant', // Use 'instant' for no animation on initial load
//           });
//         }
//         setActiveId(targetId); // Set active ID immediately after scrolling
//       };

//       // Ensure the initial scroll happens slightly after the component is painted
//       const timer = setTimeout(initialScroll, 100); // Increased delay slightly for robustness

//       return () => clearTimeout(timer); // Cleanup timeout if component unmounts
//     } else {
//       // If the target section isn't found (e.g., invalid hash), ensure the first one is active
//       setActiveId(academicData.services[0].id);
//     }
//   }, [location.hash, locomotive, GLOBAL_HEADER_HEIGHT, academicData.services]);


//   return (
//     // The outermost div. It must be relative and have a z-index to manage fixed children.
//     // z-0 or z-10 depends on your App.js layout. z-0 is usually fine if it's the main content.
//     <div className="bg-gray-50 min-h-screen relative z-0">
//       {/* Sidebar: Fixed on desktop/tablet, hidden on mobile */}
//       {/* z-index of 30 is higher than main content's auto/initial, ensuring it's on top */}
//       <aside
//         className="hidden md:block fixed top-0 left-0 h-full w-1/4 bg-white shadow-md p-6 z-30"
//         style={{ paddingTop: GLOBAL_HEADER_HEIGHT + 24 + 'px' }}
//       >
//         <h2 className="text-xl font-bold mb-4 text-purple-700">Academic Services</h2>
//         {/* Added custom-scrollbar-hide for cleaner look if content overflows */}
//         <nav className="custom-scrollbar-hide overflow-y-auto"
//           style={{ maxHeight: `calc(100vh - ${GLOBAL_HEADER_HEIGHT + 24 + 50}px)` }} // 50px for h2 + some bottom padding
//         >
//           <ul className="space-y-2">
//             {academicData.services.map((service, idx) => (
//               <li key={service.id}>
//                 <motion.button
//                   className={`w-full text-left px-4 py-2 rounded transition font-medium ${
//                     activeId === service.id ? 'bg-purple-600 text-white shadow-md' : 'bg-purple-100 text-purple-800 hover:bg-purple-200'
//                   }`}
//                   onClick={() => handleServiceClick(service.id)}
//                   whileHover={{ scale: 1.03, boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)" }}
//                   whileTap={{ scale: 0.98 }}
//                   transition={{ type: "spring", stiffness: 400, damping: 10 }}
//                   aria-current={activeId === service.id ? 'page' : undefined}
//                 >
//                   {service.title}
//                 </motion.button>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </aside>

//       {/* Main Content Area: This div will hold the scrollable content.
//           It must be positioned correctly relative to the sidebar.
//           Removed 'absolute inset-0' to allow normal document flow within the parent.
//           If Locomotive Scroll manages the entire page, this div itself should NOT have overflow-y: auto.
//           The Locomotive Scroll container higher up in your component tree manages the scroll. */}
//       <div
//         className="w-full bg-gray-50" // No overflow-y: auto here if Locomotive is managing parent
//         style={{
//           // Use padding-top to create space for the fixed header
//           paddingTop: GLOBAL_HEADER_HEIGHT + 'px',
//           // Use padding-bottom to create space for the fixed bottom bar
//           paddingBottom: FIXED_BOTTOM_BAR_HEIGHT + 100 + 'px', // Added extra 100px for good measure below footer
//           // Margin-left shifts content over for the desktop sidebar
//           marginLeft: isMdScreen ? '25%' : '0',
//           // Width ensures content takes up remaining space
//           width: isMdScreen ? '75%' : '100%',
//           minHeight: `calc(100vh - ${GLOBAL_HEADER_HEIGHT + FIXED_BOTTOM_BAR_HEIGHT}px)`, // Ensures content area is tall enough
//         }}
//       >
//         {/* Introductory Header for the Academic Assist page */}
//         <header className="mb-8 p-6">
//           <h1 className="text-3xl font-bold text-purple-800 mb-2">{academicData.meta.h1}</h1>
//           <p className="text-lg text-gray-600">{academicData.intro.title}</p>
//           <p className="text-base text-gray-500 mt-2 whitespace-pre-line">{academicData.intro.description}</p>
//         </header>

//         {/* Section containing all individual service details */}
//         <section className="p-6 pt-0">
//           {academicData.services.map(service => (
//             <motion.div
//               key={service.id}
//               ref={el => (sectionRefs.current[service.id] = el)}
//               data-scroll-section // This attribute is essential for Locomotive Scroll to track this element
//               id={service.id}
//               // scroll-mt-24 is equivalent to scroll-margin-top: 96px; which should match GLOBAL_HEADER_HEIGHT
//               className="mb-12 scroll-mt-24 bg-white p-6 rounded-lg shadow-md"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.2 }}
//               transition={{ duration: 0.7, ease: "easeOut" }}
//             >
//               <h2 className="text-2xl font-semibold text-purple-700 mb-2">{service.title}</h2>
//               <p className="text-gray-700 mb-4 whitespace-pre-line">{service.description}</p>
//               <button
//                 className="bg-purple-600 text-white px-6 py-2 rounded shadow hover:bg-purple-700 transition"
//                 onClick={() => navigate(service.ctaRoute)}
//               >
//                 {service.ctaText}
//               </button>
//             </motion.div>
//           ))}
//         </section>

//         <Footer />
//       </div>

//       {/* Fixed Bottom Bar: Always visible at the bottom of the screen. */}
//       <div
//         className="bg-purple-700 text-white py-4 px-6 flex items-center justify-between fixed bottom-0 z-40"
//         style={{
//           boxShadow: '0 -2px 8px rgba(80,0,120,0.08)',
//           left: isMdScreen ? '25%' : '0', // Position correctly with sidebar
//           width: isMdScreen ? '75%' : '100%', // Size correctly with sidebar
//           height: FIXED_BOTTOM_BAR_HEIGHT + 'px',
//         }}
//       >
//         <span className="font-semibold text-sm md:text-base">Need help with Academic Assist? Contact us for personalized support!</span>
//         <button
//           className="bg-white text-purple-700 font-bold px-3 py-1 md:px-4 md:py-2 rounded shadow hover:bg-purple-100 transition text-sm md:text-base"
//           onClick={() => navigate('/contact')}
//         >
//           Contact Us
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AcademicAssistDropdown;



// src/components/AcademicAssist/AcademicAssistDropdown.jsx
import React, { useEffect, useRef, useState } from 'react';
import academicData from '../../pages/academicAssistData.json'; // Ensure this path is correct
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from '../Footer.jsx'; // Ensure this path is correct

const AcademicAssistDropdown = ({ locomotive }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // IMPORTANT: This height must accurately match your actual fixed Navbar height.
  // If your Navbar uses Tailwind's 'h-16' (64px), set this to 64.
  // If it uses 'h-24' (96px) or if 'scroll-mt-24' (96px) is consistently used
  // to offset content below the header, then 96 is correct.
  // I'm setting it to 96 based on 'scroll-mt-24' in your content sections.
  const GLOBAL_HEADER_HEIGHT = 96; // Corresponds to scroll-mt-24 (96px) or h-24 Navbar
  const FIXED_BOTTOM_BAR_HEIGHT = 72; // This is derived from your inline style for the bottom bar

  // State to manage the active sidebar item, initialized to the ID of the first service.
  // Using optional chaining for safety in case academicData.services is initially empty.
  const [activeId, setActiveId] = useState(academicData.services[0]?.id || '');
  
  // useRef to store references to each content section, allowing direct DOM manipulation for scrolling.
  const sectionRefs = useRef({});

  // State to track screen size for responsive layout adjustments (sidebar visibility, content width).
  const [isMdScreen, setIsMdScreen] = useState(window.innerWidth >= 768);

  // Effect to update isMdScreen state on window resize events.
  useEffect(() => {
    const handleResize = () => {
      setIsMdScreen(window.innerWidth >= 768);
    };
    window.addEventListener('resize', handleResize);
    // Call once immediately to set the initial state based on current window size.
    handleResize();
    // Cleanup: Remove the event listener when the component unmounts to prevent memory leaks.
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty dependency array ensures this effect runs only once on mount and cleans up on unmount.

  // Handler function for when a sidebar service button is clicked.
  const handleServiceClick = (id) => {
    setActiveId(id); // Immediately update the active ID to reflect the click.
    const section = sectionRefs.current[id]; // Get the DOM element reference for the target section.

    if (section) {
      // If locomotive scroll instance is provided, use its scrollTo method for smooth scrolling.
      if (locomotive) {
        // For locomotive, a negative offset pulls the scroll target up, effectively
        // making the section stop *below* a fixed header.
        locomotive.scrollTo(section, { offset: -GLOBAL_HEADER_HEIGHT, duration: 800 });
      } else {
        // Fallback to native window.scrollTo if locomotive is not available.
        // Subtract the header height to ensure the section starts below the fixed header.
        window.scrollTo({
          top: section.offsetTop - GLOBAL_HEADER_HEIGHT,
          behavior: 'smooth', // Smooth animation for native scroll.
        });
      }
      // Update the URL hash without triggering a full page reload, and replace
      // the current history entry to prevent back button issues.
      navigate(`#${id}`, { replace: true });
    }
  };

  // Effect to manage the active sidebar item based on scroll position (for Locomotive Scroll).
  useEffect(() => {
    if (!locomotive) return; // Only execute if locomotive instance is provided.

    const handleLocomotiveScroll = (instance) => {
      let currentVisibleSectionId = null;
      // Iterate through all service sections to determine which one is currently in view.
      for (let i = 0; i < academicData.services.length; i++) {
        const service = academicData.services[i];
        const ref = sectionRefs.current[service.id];
        if (ref) {
          const rect = ref.getBoundingClientRect(); // Get position relative to the viewport.
          
          // Define the "active" zone: a section is considered active if its top edge
          // is within a small buffer zone around the bottom of the fixed header.
          const topVisibleThreshold = GLOBAL_HEADER_HEIGHT + 10; // 10px below the header
          const bottomVisibleThreshold = GLOBAL_HEADER_HEIGHT - 10; // 10px above the header

          // If the section's top is past or at the threshold, and its bottom is still visible,
          // it's the current active section.
          if (rect.top <= topVisibleThreshold && rect.bottom >= bottomVisibleThreshold) {
            currentVisibleSectionId = service.id;
            break; // Found the topmost visible section, stop checking.
          }
        }
      }

      // Fallback logic: If no specific section is prominently in view (e.g., at very top of page),
      // default to the first service being active. This prevents the sidebar from being empty.
      if (!currentVisibleSectionId && academicData.services.length > 0) {
        const firstSectionRect = sectionRefs.current[academicData.services[0].id]?.getBoundingClientRect();
        // If the first section is near the top of the viewport (considering header height)
        if (firstSectionRect && firstSectionRect.top <= GLOBAL_HEADER_HEIGHT + 20) { // A bit below header, near top
          currentVisibleSectionId = academicData.services[0].id;
        }
      }

      // Update the activeId state only if the detected active section has changed.
      if (currentVisibleSectionId && currentVisibleSectionId !== activeId) {
        setActiveId(currentVisibleSectionId);
        // Optional: Update URL hash during scroll for direct deep linking
        // navigate(`#${currentVisibleSectionId}`, { replace: true });
      }
    };

    // Attach the scroll event listener to the locomotive instance.
    locomotive.on('scroll', handleLocomotiveScroll);

    // Cleanup: Remove the scroll event listener when the component unmounts or dependencies change.
    return () => {
      locomotive.off('scroll', handleLocomotiveScroll);
    };
  }, [locomotive, activeId, GLOBAL_HEADER_HEIGHT, academicData.services]); // Dependencies: activeId to prevent re-triggering unnecessary updates;
                                                                           // GLOBAL_HEADER_HEIGHT and academicData.services for consistent closure.

  // Effect for initial scroll based on URL hash (e.g., #seminars) when the component mounts
  // or when the URL hash changes.
  useEffect(() => {
    // Ensure academicData.services is loaded and not empty before attempting to scroll.
    if (!academicData.services || academicData.services.length === 0) {
      return;
    }

    const hash = location.hash.replace('#', ''); // Extract the hash without the '#' prefix.
    const targetService = academicData.services.find(service => service.id === hash);
    // Determine the target section ID: use the hash if valid, otherwise default to the first service's ID.
    const targetId = targetService ? hash : academicData.services[0].id;

    const section = sectionRefs.current[targetId]; // Get the DOM element for the target section.

    if (section) {
      // Use setTimeout to ensure that the DOM has fully rendered and sectionRefs are populated.
      // This helps in preventing a race condition where the scroll might occur before the
      // target element is fully accessible, especially on initial page load.
      const initialScroll = () => {
        if (locomotive) {
          // Perform an instant scroll to the target section using locomotive.
          // The negative offset places the section right below the fixed header.
          locomotive.scrollTo(section, { offset: -GLOBAL_HEADER_HEIGHT, duration: 0 });
        } else {
          window.scrollTo({
            top: section.offsetTop - GLOBAL_HEADER_HEIGHT,
            behavior: 'instant', // 'instant' for no animation on initial load.
          });
        }
        setActiveId(targetId); // Set the active ID immediately after the initial scroll.
      };

      const timer = setTimeout(initialScroll, 100); // Small delay to allow DOM to settle.

      // Cleanup: Clear the timeout if the component unmounts before it fires.
      return () => clearTimeout(timer);
    } else {
      // If the target section from the hash is not found (e.g., invalid hash),
      // ensure the first service is still set as active.
      setActiveId(academicData.services[0].id);
    }
  }, [location.hash, locomotive, GLOBAL_HEADER_HEIGHT, academicData.services]); // Dependencies: Trigger when hash changes, or if locomotive/data changes.


  return (
    // The outermost div for AcademicAssistDropdown. This div must ensure a solid background
    // and provide a stacking context for its fixed children.
    // z-0 is a good default; adjust if other elements in App.js need higher stacking context.
    <div className="bg-gray-50 min-h-screen relative z-0">
      {/* Sidebar: Fixed on desktop/tablet, hidden on mobile */}
      {/* z-index of 30 is higher than main content's auto/initial, ensuring it's on top. */}
      <aside
        className="hidden md:block fixed top-0 left-0 h-full w-1/4 bg-white shadow-md p-6 z-30 overflow-hidden"
        style={{ paddingTop: GLOBAL_HEADER_HEIGHT + 24 + 'px' }} // Padding to clear the fixed Navbar.
      >
        <h2 className="text-xl font-bold mb-4 text-purple-700">Academic Services</h2>
        {/* Navigation list for services with custom scrollbar hiding. */}
        <nav className="custom-scrollbar-hide overflow-y-auto"
          style={{ maxHeight: `calc(100vh - ${GLOBAL_HEADER_HEIGHT + 24 + 50}px)` }} // Dynamic max-height for scrollability.
        >
          <ul className="space-y-2">
            {academicData.services.map(service => (
              <li key={service.id}>
                <motion.button
                  className={`w-full text-left px-4 py-2 rounded transition font-medium ${
                    activeId === service.id ? 'bg-purple-600 text-white shadow-md' : 'bg-purple-100 text-purple-800 hover:bg-purple-200'
                  }`}
                  onClick={() => handleServiceClick(service.id)}
                  whileHover={{ scale: 1.03, boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  aria-current={activeId === service.id ? 'page' : undefined} // ARIA attribute for accessibility.
                >
                  {service.title}
                </motion.button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content Area: This div holds all the scrollable content of the page.
          It adjusts its position and width based on the sidebar's visibility.
          Crucially, it uses padding to avoid being obscured by fixed header/footer.
          It should NOT have 'overflow-y: auto' if Locomotive Scroll manages the parent container. */}
      <div
        className="w-full bg-gray-50" // Removed 'absolute inset-0' and 'overflow-auto'
        style={{
          paddingTop: GLOBAL_HEADER_HEIGHT + 'px', // Creates space for the fixed header at the top.
          paddingBottom: FIXED_BOTTOM_BAR_HEIGHT + 100 + 'px', // Creates space for the fixed bottom bar + extra buffer.
          marginLeft: isMdScreen ? '25%' : '0', // Shifts content over if sidebar is visible.
          width: isMdScreen ? '75%' : '100%', // Adjusts width based on sidebar visibility.
          // minHeight ensures the content area is at least tall enough to fill the viewport
          // when content is sparse, preventing background from showing prematurely.
          minHeight: `calc(100vh - ${GLOBAL_HEADER_HEIGHT + FIXED_BOTTOM_BAR_HEIGHT}px)`,
        }}
      >
        {/* Introductory Header for the Academic Assist page */}
        <header className="mb-8 p-6">
          <h1 className="text-3xl font-bold text-purple-800 mb-2">{academicData.meta.h1}</h1>
          <p className="text-lg text-gray-600">{academicData.intro.title}</p>
          <p className="text-base text-gray-500 mt-2 whitespace-pre-line">{academicData.intro.description}</p>
        </header>

        {/* Section containing all individual service details. Each div within this
            section corresponds to a service and is tracked by sectionRefs. */}
        <section className="p-6 pt-0">
          {academicData.services.map(service => (
            <motion.div
              key={service.id}
              ref={el => (sectionRefs.current[service.id] = el)} // Assign ref to the element.
              data-scroll-section // Crucial for Locomotive Scroll to recognize and track this element.
              id={service.id} // Provides a unique ID for URL hashing and direct targeting.
              // scroll-mt-24 (scroll-margin-top: 96px) ensures native browser scroll
              // and conceptual alignment for Locomotive Scroll's offset.
              className="mb-12 scroll-mt-24 bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }} // Initial animation state.
              whileInView={{ opacity: 1, y: 0 }} // Animation when element enters viewport.
              viewport={{ once: true, amount: 0.2 }} // Triggers animation once when 20% visible.
              transition={{ duration: 0.7, ease: "easeOut" }} // Animation properties.
            >
              <h2 className="text-2xl font-semibold text-purple-700 mb-2">{service.title}</h2>
              <p className="text-gray-700 mb-4 whitespace-pre-line">{service.description}</p>
              <button
                className="bg-purple-600 text-white px-6 py-2 rounded shadow hover:bg-purple-700 transition"
                onClick={() => navigate(service.ctaRoute)}
              >
                {service.ctaText}
              </button>
            </motion.div>
          ))}
        </section>

        <Footer /> {/* Your Footer component, placed at the end of the main scrollable content. */}
      </div>

      {/* Fixed Bottom Bar: Always visible at the bottom of the screen. */}
      <div
        className="bg-purple-700 text-white py-4 px-6 flex items-center justify-between fixed bottom-0 z-40" // z-40 ensures it's above other content.
        style={{
          boxShadow: '0 -2px 8px rgba(80,0,120,0.08)', // Subtle shadow for depth.
          left: isMdScreen ? '25%' : '0', // Positions correctly next to the sidebar on desktop.
          width: isMdScreen ? '75%' : '100%', // Adjusts width based on sidebar visibility.
          height: FIXED_BOTTOM_BAR_HEIGHT + 'px', // Explicit height.
        }}
      >
        <span className="font-semibold text-sm md:text-base">Need help with Academic Assist? Contact us for personalized support!</span>
        <button
          className="bg-white text-purple-700 font-bold px-3 py-1 md:px-4 md:py-2 rounded shadow hover:bg-purple-100 transition text-sm md:text-base"
          onClick={() => navigate('/contact')}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default AcademicAssistDropdown;





// import React, { useEffect, useRef, useState } from 'react';
// import academicData from '../../pages/academicAssistData.json'; // Ensure this path is correct
// import { useLocation, useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import Footer from '../Footer.jsx'; // Ensure this path is correct

// const AcademicAssistDropdown = ({ locomotive }) => {
//   const [activeId, setActiveId] = useState(academicData.services[0].id);
//   const sectionRefs = useRef({});
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [isMdScreen, setIsMdScreen] = useState(window.innerWidth >= 768);

//   const GLOBAL_HEADER_HEIGHT = 64;
//   const FIXED_BOTTOM_BAR_HEIGHT = 72;

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMdScreen(window.innerWidth >= 768);
//     };
//     window.addEventListener('resize', handleResize);
//     handleResize();
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const handleServiceClick = (id) => {
//     setActiveId(id);
//     const section = sectionRefs.current[id];
//     if (locomotive && section) {
//       locomotive.scrollTo(section, { offset: GLOBAL_HEADER_HEIGHT, duration: 800 });
//     } else if (section) {
//       window.scrollTo({
//         top: section.offsetTop - GLOBAL_HEADER_HEIGHT,
//         behavior: 'smooth',
//       });
//     }
//   };

//   useEffect(() => {
//     if (!locomotive) return;

//     const handleLocomotiveScroll = (instance) => {
//       const visibleSection = academicData.services.find(service => {
//         const ref = sectionRefs.current[service.id];
//         if (ref) {
//           const rect = ref.getBoundingClientRect();
//           return rect.top <= GLOBAL_HEADER_HEIGHT && rect.bottom >= GLOBAL_HEADER_HEIGHT;
//         }
//         return false;
//       });

//       if (visibleSection && visibleSection.id !== activeId) {
//         setActiveId(visibleSection.id);
//       }
//     };

//     locomotive.on('scroll', handleLocomotiveScroll);

//     return () => {
//       locomotive.off('scroll', handleLocomotiveScroll);
//     };
//   }, [locomotive, activeId, GLOBAL_HEADER_HEIGHT]);

//   useEffect(() => {
//     if (!locomotive) return;

//     const hash = location.hash.replace('#', '');
//     const targetId = hash || academicData.services[0].id;
//     const section = sectionRefs.current[targetId];

//     if (section) {
//       const initialScrollOffset = GLOBAL_HEADER_HEIGHT + 70;
//       locomotive.scrollTo(section, { offset: initialScrollOffset, duration: 0 });
//       setActiveId(targetId);
//     }
//   }, [location, locomotive, GLOBAL_HEADER_HEIGHT, academicData.services]);


//   return (
//     // The outermost div for AcademicAssistDropdown. This div must ensure a solid background
//     // and provide a stacking context for its fixed children.
//     <div className="bg-gray-50 min-h-screen relative z-10"> {/* Added z-10 here */}
//       {/* Sidebar: Fixed on desktop/tablet, hidden on mobile */}
//       <aside
//         className="hidden md:block fixed top-0 left-0 h-full w-1/4 bg-white shadow-md p-6 z-30 overflow-hidden"
//         style={{ paddingTop: GLOBAL_HEADER_HEIGHT + 24 + 'px' }}
//       >
//         <h2 className="text-xl font-bold mb-4 text-purple-700">Services</h2>
//         <ul className="space-y-2 overflow-y-auto" style={{ maxHeight: `calc(100vh - ${GLOBAL_HEADER_HEIGHT + 24 + 50}px)` }}>
//           {academicData.services.map(service => (
//             <li key={service.id}>
//               <motion.button
//                 className={`w-full text-left px-4 py-2 rounded transition font-medium ${
//                   activeId === service.id ? 'bg-purple-600 text-white' : 'bg-purple-100 text-purple-800 hover:bg-purple-200'
//                 }`}
//                 onClick={() => handleServiceClick(service.id)}
//                 whileHover={{ scale: 1.03, boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)" }}
//                 whileTap={{ scale: 0.98 }}
//                 transition={{ type: "spring", stiffness: 400, damping: 10 }}
//               >
//                 {service.title}
//               </motion.button>
//             </li>
//           ))}
//         </ul>
//       </aside>

//       {/* Main Content Area: Scrolls within App.js's data-scroll-container. */}
//       {/* Ensure it always has a solid background and correct positioning. */}
//       <div
//         className="w-full bg-gray-50 absolute inset-0" // Changed to absolute inset-0 for full coverage within parent
//                                                     // Removed min-h-screen and explicit height here; App.js parent will manage scroll height
//         style={{
//           paddingTop: GLOBAL_HEADER_HEIGHT + 'px',
//           paddingBottom: FIXED_BOTTOM_BAR_HEIGHT + 100 + 'px',
//           marginLeft: isMdScreen ? '25%' : '0',
//           width: isMdScreen ? '75%' : '100%',
//           // No need for zIndex here if parent `div.bg-gray-50.min-h-screen.relative` has z-10
//           // This div acts as the content area that fills the screen part
//           // that the sidebar doesn't cover.
//           // It needs to be scrollable via the parent data-scroll-container in App.js
//           overflowY: 'auto', // Ensure internal scrolling is handled if content is larger than its defined height
//         }}
//       >
//         {/* Introductory Header for the Academic Assist page */}
//         <header className="mb-8 p-6">
//           <h1 className="text-3xl font-bold text-purple-800 mb-2">{academicData.meta.h1}</h1>
//           <p className="text-lg text-gray-600">{academicData.intro.title}</p>
//           <p className="text-base text-gray-500 mt-2 whitespace-pre-line">{academicData.intro.description}</p>
//         </header>

//         {/* Section containing all individual service details */}
//         <section className="p-6 pt-0">
//           {academicData.services.map(service => (
//             <motion.div
//               key={service.id}
//               ref={el => (sectionRefs.current[service.id] = el)}
//               data-scroll-section
//               id={service.id}
//               className="mb-12 scroll-mt-24 bg-white p-6 rounded-lg shadow-md"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.2 }}
//               transition={{ duration: 0.7, ease: "easeOut" }}
//             >
//               <h2 className="text-2xl font-semibold text-purple-700 mb-2">{service.title}</h2>
//               <p className="text-gray-700 mb-4 whitespace-pre-line">{service.description}</p>
//               <button
//                 className="bg-purple-600 text-white px-6 py-2 rounded shadow hover:bg-purple-700 transition"
//                 onClick={() => navigate(service.ctaRoute)}
//               >
//                 {service.ctaText}
//               </button>
//             </motion.div>
//           ))}
//         </section>

//         <Footer />
//       </div>

//       {/* Fixed Bottom Bar: Always visible at the bottom of the screen. */}
//       <div
//         className="bg-purple-700 text-white py-4 px-6 flex items-center justify-between fixed bottom-0 z-50"
//         style={{
//           boxShadow: '0 -2px 8px rgba(80,0,120,0.08)',
//           left: isMdScreen ? '25%' : '0',
//           width: isMdScreen ? '75%' : '100%',
//           height: FIXED_BOTTOM_BAR_HEIGHT + 'px',
//           zIndex: 50
//         }}
//       >
//         <span className="font-semibold text-sm md:text-base">Need help with Academic Assist? Contact us for personalized support!</span>
//         <button
//           className="bg-white text-purple-700 font-bold px-3 py-1 md:px-4 md:py-2 rounded shadow hover:bg-purple-100 transition text-sm md:text-base"
//           onClick={() => navigate('/contact')}
//         >
//           Contact Us
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AcademicAssistDropdown;