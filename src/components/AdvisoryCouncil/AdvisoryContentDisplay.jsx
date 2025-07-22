// // src/components/AdvisoryCouncil/AdvisoryContentDisplay.jsx
// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { FileText, Phone } from 'lucide-react'; // Importing icons from lucide-react

// // Directly import the JSON data from its specified location
// import advisoryCouncilData from '../../pages/advisoryCouncilData.json';

// // This component will dynamically render content based on the pageType prop
// const AdvisoryContentDisplay = ({ pageType }) => {
//   const [content, setContent] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setLoading(true);
//     setError(null);
//     // Directly access data from the imported JSON based on pageType
//     const data = advisoryCouncilData[pageType];
//     if (data) {
//       setContent(data);
//     } else {
//       // If data for the specific pageType is not found in the JSON
//       setError(`Content for page type "${pageType}" not found in advisoryCouncilData.json.`);
//     }
//     setLoading(false);
//   }, [pageType]); // Re-run effect if pageType prop changes

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen text-xl text-gray-700">
//         Loading content...
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center h-screen text-xl text-red-500">
//         Error: {error}
//       </div>
//     );
//   }

//   if (!content) {
//     return (
//       <div className="flex justify-center items-center h-screen text-xl text-gray-500">
//         No content available for this section.
//       </div>
//     );
//   }

//   return (
//     <main className="bg-white min-h-screen font-inter pt-20"> {/* Added pt-20 for Navbar */}
//       {/* Hero Section - Dynamic Title and Subtitle */}
//       <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center text-white overflow-hidden bg-gradient-to-br from-blue-700 to-purple-600">
//         <motion.div
//           initial={{ y: -50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           className="relative z-10 text-center"
//         >
//           <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">{content.heroTitle}</h1>
//           <p className="text-lg md:text-xl max-w-3xl mx-auto px-4">
//             {content.heroSubtitle}
//           </p>
//         </motion.div>
//       </section>

//       {/* Main Content Area - Grid Layout for Sidebar and Main Content */}
//       <section className="max-w-7xl mx-auto py-12 px-4 grid grid-cols-1 lg:grid-cols-4 gap-8">
//         {/* Sidebar Navigation */}
//         <aside className="lg:col-span-1 bg-gray-50 p-6 rounded-xl shadow-md">
//           <h3 className="text-xl font-bold text-gray-800 mb-4">Advisory Council</h3>
//           <nav>
//             <ul>
//               {/* Links for sidebar navigation */}
//               <li><Link to="/about-advisory-board" className="block py-2 px-3 rounded-lg text-gray-700 hover:bg-blue-100 transition-colors duration-200">About Advisory Board</Link></li>
//               <li><Link to="/our-advisory-council" className="block py-2 px-3 rounded-lg text-gray-700 hover:bg-blue-100 transition-colors duration-200">Our Advisory Council</Link></li>
//               <li><Link to="/become-a-member" className="block py-2 px-3 rounded-lg text-gray-700 hover:bg-blue-100 transition-colors duration-200">Become a Member</Link></li>
//             </ul>
//           </nav>

//           {/* Brochures Section - Conditional Rendering */}
//           {content.brochures && content.brochures.length > 0 && (
//             <div className="mt-8">
//               <h3 className="text-xl font-bold text-gray-800 mb-4">Brochures</h3>
//               {content.brochures.map((brochure, idx) => (
//                 <a key={idx} href={brochure.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 py-2 px-3 rounded-lg text-blue-600 hover:bg-blue-100 transition-colors duration-200">
//                   <FileText className="h-5 w-5" /> {/* Lucide FileText icon */}
//                   {brochure.title}
//                 </a>
//               ))}
//             </div>
//           )}

//           {/* How Can We Help? Section - Dynamic Content */}
//           <div className="mt-8 bg-gradient-to-br from-blue-500 to-purple-600 text-white p-6 rounded-xl shadow-lg text-center">
//             <img
//               src={content.helpSection.image}
//               alt="How Can We Help?"
//               className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-white shadow-md"
//               onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/96x96/CCCCCC/000000?text=User'; }}
//             />
//             <h4 className="text-xl font-bold mb-2">{content.helpSection.title}</h4>
//             <p className="text-sm mb-4">{content.helpSection.description}</p>
//             <a href={`tel:${content.helpSection.phone}`} className="inline-flex items-center bg-white text-blue-700 font-semibold py-2 px-4 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200">
//               <Phone className="h-5 w-5 mr-2" /> {/* Lucide Phone icon */}
//               {content.helpSection.phone}
//             </a>
//           </div>
//         </aside>

//         {/* Main Content Area */}
//         <div className="lg:col-span-3">
//           {content.mainContent.map((section, idx) => (
//             <motion.div
//               key={idx}
//               className="mb-12"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 0.6, delay: idx * 0.1 }}
//             >
//               <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">{section.title}</h2>
//               {section.paragraphs.map((paragraph, pIdx) => (
//                 <p key={pIdx} className="text-gray-700 mb-4 text-lg leading-relaxed">{paragraph}</p>
//               ))}

//               {/* Images Section - Conditional Rendering and Dynamic Grid */}
//               {section.images && section.images.length > 0 && (
//                 <div className={`grid ${section.images.length > 1 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'} gap-6 mt-8`}>
//                   {section.images.map((img, imgIdx) => (
//                     <motion.img
//                       key={imgIdx}
//                       src={img.src}
//                       alt={img.alt}
//                       className="rounded-2xl shadow-lg w-full object-cover h-64 md:h-72"
//                       onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/DDA0DD/FFFFFF?text=Image+Load+Error'; }}
//                       initial={{ opacity: 0, scale: 0.9 }}
//                       whileInView={{ opacity: 1, scale: 1 }}
//                       viewport={{ once: true, amount: 0.5 }}
//                       transition={{ duration: 0.5, delay: imgIdx * 0.1 }}
//                     />
//                   ))}
//                 </div>
//               )}

//               {/* Benefits Section - Conditional Rendering */}
//               {section.benefits && section.benefits.length > 0 && (
//                 <div className="mt-8">
//                   <h3 className="text-2xl font-bold text-gray-900 mb-4">Benefits With Our Service</h3>
//                   <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 text-lg">
//                     {section.benefits.map((benefit, bIdx) => (
//                       <li key={bIdx} className="flex items-start">
//                         {/* Checkmark icon (using inline SVG for simplicity here, can be Lucide if preferred) */}
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                         </svg>
//                         {benefit}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}

//               {/* Advisory Members Section - Conditional Rendering */}
//               {section.advisoryMembers && section.advisoryMembers.length > 0 && (
//                 <div className="mt-12">
//                   <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Esteemed Advisory Members</h3>
//                   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//                     {section.advisoryMembers.map((member, mIdx) => (
//                       <motion.div
//                         key={mIdx}
//                         className="bg-gray-50 rounded-xl shadow-md p-6 text-center flex flex-col items-center"
//                         initial={{ opacity: 0, scale: 0.9 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         viewport={{ once: true, amount: 0.3 }}
//                         transition={{ duration: 0.5, delay: mIdx * 0.1 }}
//                       >
//                         <img
//                           src={member.image}
//                           alt={member.name}
//                           className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-blue-400"
//                           onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/96x96/CCCCCC/000000?text=Member'; }}
//                         />
//                         <h4 className="text-xl font-bold text-gray-900">{member.name}</h4>
//                         <p className="text-sm text-gray-600">{member.role}</p>
//                         {member.bio && <p className="text-sm text-gray-700 mt-2 italic">{member.bio}</p>}
//                       </motion.div>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </motion.div>
//           ))}

//           {/* FAQ Section - Conditional Rendering and Interactive Toggle */}
//           {content.faq && content.faq.length > 0 && (
//             <div className="mt-12">
//               <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
//               <div className="space-y-4">
//                 {content.faq.map((item, idx) => (
//                   <motion.div
//                     key={idx}
//                     className="bg-gray-50 rounded-xl shadow-md p-6 cursor-pointer"
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true, amount: 0.3 }}
//                     transition={{ duration: 0.5, delay: idx * 0.1 }}
//                     onClick={(e) => {
//                       // Toggle visibility of the answer and rotate the icon
//                       const answer = e.currentTarget.querySelector('.faq-answer');
//                       const icon = e.currentTarget.querySelector('svg');
//                       if (answer) {
//                         answer.classList.toggle('hidden');
//                         icon.classList.toggle('rotate-180'); // Rotate icon for visual feedback
//                       }
//                     }}
//                   >
//                     <h3 className="text-lg font-semibold text-gray-800 flex justify-between items-center">
//                       {item.question}
//                       {/* Chevron down icon for FAQ toggle */}
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 transform transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
//                         <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                       </svg>
//                     </h3>
//                     <p className="faq-answer hidden mt-3 text-gray-600">{item.answer}</p>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </section>
//     </main>
//   );
// };

// export default AdvisoryContentDisplay;







// // src/components/AdvisoryCouncil/AdvisoryContentDisplay.jsx
// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { FileText, Phone } from 'lucide-react'; // Importing icons from lucide-react

// // Directly import the JSON data from its specified location
// import advisoryCouncilData from '../../pages/advisoryCouncilData.json';

// // This component will dynamically render content based on the pageType prop
// const AdvisoryContentDisplay = ({ pageType }) => {
//   const [content, setContent] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setLoading(true);
//     setError(null);
//     // Directly access data from the imported JSON based on pageType
//     const data = advisoryCouncilData[pageType];
//     if (data) {
//       setContent(data);
//     } else {
//       // If data for the specific pageType is not found in the JSON
//       setError(`Content for page type "${pageType}" not found in advisoryCouncilData.json.`);
//     }
//     setLoading(false);
//   }, [pageType]); // Re-run effect if pageType prop changes

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen text-xl text-gray-700">
//         Loading content...
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center h-screen text-xl text-red-500">
//         Error: {error}
//       </div>
//     );
//   }

//   if (!content) {
//     return (
//       <div className="flex justify-center items-center h-screen text-xl text-gray-500">
//         No content available for this section.
//       </div>
//     );
//   }

//   // Find the index of "Roles and Responsibilities" to apply conditional layout
//   const rolesAndResponsibilitiesIndex = content.mainContent.findIndex(
//     (section) => section.title.includes("Roles and Responsibilities")
//   );

//   return (
//     <main className="bg-white min-h-screen font-inter">
//       {/* Hero Section - Dynamic Title and Subtitle - This section will scroll normally */}
//       <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center text-white overflow-hidden bg-gradient-to-br from-blue-700 to-purple-600">
//         <motion.div
//           initial={{ y: -50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           className="relative z-10 text-center"
//         >
//           <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">{content.heroTitle}</h1>
//           <p className="text-lg md:text-xl max-w-3xl mx-auto px-4">
//             {content.heroSubtitle}
//           </p>
//         </motion.div>
//       </section>

//       {/* Main Content Area - Conditional Grid Layout */}
//       {/* Changed to w-full to eliminate external white space */}
//       <section className="w-full py-12 px-4 lg:px-12">
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//           {/* Sidebar Navigation - Applied Glassmorphism effect */}
//           <motion.aside
//             className="lg:col-span-1 p-6 bg-white/30 backdrop-blur-md border border-white/20 rounded-xl shadow-lg" // Glassmorphism classes
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.1 }}
//             transition={{ duration: 0.7, ease: "easeOut" }}
//           >
//             <h3 className="text-xl font-bold text-gray-900 mb-4">Advisory Council</h3>
//             <nav>
//               <ul>
//                 {/* Links for sidebar navigation with clickable button styling */}
//                 <motion.li initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
//                   <Link
//                     to="/about-advisory-board"
//                     className="block py-2 px-3 text-gray-700 font-semibold rounded-lg hover:bg-blue-100 hover:scale-105 active:scale-95 transition-all duration-200"
//                   >
//                     About Advisory Board
//                   </Link>
//                 </motion.li>
//                 <motion.li initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
//                   <Link
//                     to="/our-advisory-council"
//                     className="block py-2 px-3 rounded-lg text-gray-700 font-semibold hover:bg-blue-100 hover:scale-105 active:scale-95 transition-all duration-200"
//                   >
//                     Our Advisory Council
//                   </Link>
//                 </motion.li>
//                 <motion.li initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
//                   <Link
//                     to="/become-a-member"
//                     className="block py-2 px-3 rounded-lg text-gray-700 font-semibold hover:bg-blue-100 hover:scale-105 active:scale-95 transition-all duration-200"
//                   >
//                     Become a Member
//                   </Link>
//                 </motion.li>
//               </ul>
//             </nav>

//             {/* Brochures Section - Applied Glassmorphism effect */}
//             {content.brochures && content.brochures.length > 0 && (
//               <motion.div
//                 className="mt-8 p-6 bg-white/20 backdrop-blur-sm border border-white/10 rounded-xl shadow-md" // Glassmorphism classes
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.1 }}
//                 transition={{ duration: 0.6, delay: 0.4 }}
//               >
//                 <h3 className="text-xl font-bold text-gray-800 mb-4">Brochures</h3>
//                 {content.brochures.map((brochure, idx) => (
//                   <motion.a
//                     key={idx}
//                     href={brochure.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2 py-2 px-3 rounded-lg text-blue-600 hover:bg-blue-100 transition-colors duration-200"
//                     initial={{ opacity: 0, x: -10 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
//                   >
//                     <FileText className="h-5 w-5" />
//                     {brochure.title}
//                   </motion.a>
//                 ))}
//               </motion.div>
//             )}

//             {/* How Can We Help? Section - Retained distinct styling, added hover effect */}
//             <motion.div
//               className="mt-8 bg-gradient-to-br from-blue-500 to-purple-600 text-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center transform hover:scale-103 transition-transform duration-200"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.1 }}
//               transition={{ duration: 0.7, delay: 0.6 }}
//             >
//               <img
//                 src={content.helpSection.image}
//                 alt="How Can We Help?"
//                 className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-white shadow-md"
//                 onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/112x112/CCCCCC/000000?text=User'; }}
//               />
//               <h4 className="text-xl font-bold mb-1">{content.helpSection.title}</h4>
//               <p className="text-sm mb-3">{content.helpSection.description}</p>
//               <div className="text-base font-semibold mb-4">
//                 <p>{content.helpSection.phone}</p>
//                 <p>Mail: info@example.com</p>
//               </div>
//               <div className="flex gap-3 mt-2">
//                 <a href="#" className="w-9 h-9 flex items-center justify-center bg-white text-blue-700 rounded-full hover:bg-gray-100 transition-colors duration-200">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.812c-3.233 0-4.188 1.501-4.188 4.004v2.996z"/></svg>
//                 </a>
//                 <a href="#" className="w-9 h-9 flex items-center justify-center bg-white text-blue-700 rounded-full hover:bg-gray-100 transition-colors duration-200">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.594 0-6.495 2.902-6.495 6.495 0 .509.058 1.006.173 1.485-5.392-.27-10.197-2.857-13.407-6.793-.559.957-.883 2.077-.883 3.261 0 2.253 1.149 4.246 2.895 5.424-.849-.026-1.646-.26-2.34-.647-.005.021-.005.042-.005.063 0 3.166 2.262 5.8 5.26 6.39-.547.148-1.12.227-1.703.227-.417 0-.82-.041-1.215-.116.834 2.606 3.251 4.504 6.101 4.554-2.245 1.76-5.087 2.812-8.15 2.812-.53 0-1.053-.031-1.566-.092 2.905 1.86 6.356 2.946 10.063 2.946 12.071 0 18.67-10.003 18.67-18.67 0-.6-.013-1.196-.039-1.79z"/></svg>
//                 </a>
//                 <a href="#" className="w-9 h-9 flex items-center justify-center bg-white text-blue-700 rounded-full hover:bg-gray-100 transition-colors duration-200">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5 1.11-2.5 2.48-2.5 2.48 1.119 2.48 2.5zm.02 6.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.59-11.011-3.6z"/></svg>
//                 </a>
//               </div>
//             </motion.div>
//           </motion.aside>

//           {/* Main Content Area (for sections before "Roles and Responsibilities") */}
//           <div className="lg:col-span-3" id="main-content-scroll-section-top">
//             {content.mainContent.slice(0, rolesAndResponsibilitiesIndex !== -1 ? rolesAndResponsibilitiesIndex : content.mainContent.length).map((section, idx) => (
//               <motion.div
//                 key={idx}
//                 className="mb-12 p-6 bg-white/30 backdrop-blur-md border border-white/20 rounded-xl shadow-lg" // Applied Glassmorphism
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.3 }}
//                 transition={{ duration: 0.6, delay: idx * 0.1 }}
//               >
//                 <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">{section.title}</h2>
//                 {section.paragraphs.map((paragraph, pIdx) => (
//                   <p key={pIdx} className="text-gray-700 mb-4 text-lg leading-relaxed">{paragraph}</p>
//                 ))}

//                 {/* Images Section */}
//                 {section.images && section.images.length > 0 && (
//                   <div className={`grid ${section.images.length > 1 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'} gap-6 mt-8`}>
//                     {section.images.map((img, imgIdx) => (
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
//                 )}

//                 {/* Benefits Section */}
//                 {section.benefits && section.benefits.length > 0 && (
//                   <div className="mt-8">
//                     <h3 className="text-2xl font-bold text-gray-900 mb-4">Benefits With Our Service</h3>
//                     <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 text-lg">
//                       {section.benefits.map((benefit, bIdx) => (
//                         <li key={bIdx} className="flex items-start">
//                           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                           </svg>
//                           {benefit}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Full-width content from "Roles and Responsibilities" onwards AND FAQ */}
//         {rolesAndResponsibilitiesIndex !== -1 && (
//           <div className="w-full mt-12"> {/* Added mt-12 for spacing from previous section */}
//             {content.mainContent.slice(rolesAndResponsibilitiesIndex).map((section, idx) => (
//               <motion.div
//                 key={idx}
//                 className="mb-12 p-6 bg-white/30 backdrop-blur-md border border-white/20 rounded-xl shadow-lg" // Applied Glassmorphism
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.3 }}
//                 transition={{ duration: 0.6, delay: idx * 0.1 }}
//               >
//                 <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">{section.title}</h2>
//                 {section.paragraphs.map((paragraph, pIdx) => (
//                   <p key={pIdx} className="text-gray-700 mb-4 text-lg leading-relaxed">{paragraph}</p>
//                 ))}

//                 {/* Images Section */}
//                 {section.images && section.images.length > 0 && (
//                   <div className={`grid ${section.images.length > 1 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'} gap-6 mt-8`}>
//                     {section.images.map((img, imgIdx) => (
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
//                 )}

//                 {/* Benefits Section (if it appears after Roles and Responsibilities) */}
//                 {section.benefits && section.benefits.length > 0 && (
//                   <div className="mt-8">
//                     <h3 className="text-2xl font-bold text-gray-900 mb-4">Benefits With Our Service</h3>
//                     <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 text-lg">
//                       {section.benefits.map((benefit, bIdx) => (
//                         <li key={bIdx} className="flex items-start">
//                           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                           </svg>
//                           {benefit}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}

//                 {/* Advisory Members Section (if it appears after Roles and Responsibilities) */}
//                 {section.advisoryMembers && section.advisoryMembers.length > 0 && (
//                   <div className="mt-12">
//                     <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Esteemed Advisory Members</h3>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//                       {section.advisoryMembers.map((member, mIdx) => (
//                         <motion.div
//                           key={mIdx}
//                           className="bg-gray-50 rounded-xl shadow-md p-6 text-center flex flex-col items-center"
//                           initial={{ opacity: 0, scale: 0.9 }}
//                           whileInView={{ opacity: 1, scale: 1 }}
//                           viewport={{ once: true, amount: 0.3 }}
//                           transition={{ duration: 0.5, delay: mIdx * 0.1 }}
//                         >
//                           <img
//                             src={member.image}
//                             alt={member.name}
//                             className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-blue-400"
//                             onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/96x96/CCCCCC/000000?text=Member'; }}
//                           />
//                           <h4 className="text-xl font-bold text-gray-900">{member.name}</h4>
//                           <p className="text-sm text-gray-600">{member.role}</p>
//                           {member.bio && <p className="text-sm text-gray-700 mt-2 italic">{member.bio}</p>}
//                         </motion.div>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </motion.div>
//             ))}
//             {/* FAQ Section - Now explicitly placed here to be full-width if rolesAndResponsibilitiesIndex is found */}
//             {content.faq && content.faq.length > 0 && (
//               <motion.div
//                 className="mt-12 p-6 bg-white/30 backdrop-blur-md border border-white/20 rounded-xl shadow-lg" // Applied Glassmorphism
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.3 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
//                 <div className="space-y-4">
//                   {content.faq.map((item, faqIdx) => (
//                     <motion.div
//                       key={faqIdx}
//                       className="bg-gray-50 rounded-xl shadow-md p-6 cursor-pointer" // Keep inner FAQ item styling
//                       initial={{ opacity: 0, y: 20 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       viewport={{ once: true, amount: 0.3 }}
//                       transition={{ duration: 0.5, delay: faqIdx * 0.1 }}
//                       onClick={(e) => {
//                         const answer = e.currentTarget.querySelector('.faq-answer');
//                         const icon = e.currentTarget.querySelector('svg');
//                         if (answer) {
//                           answer.classList.toggle('hidden');
//                           icon.classList.toggle('rotate-180');
//                         }
//                       }}
//                     >
//                       <h3 className="text-lg font-semibold text-gray-800 flex justify-between items-center">
//                         {item.question}
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 transform transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
//                           <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                         </svg>
//                       </h3>
//                       <p className="faq-answer hidden mt-3 text-gray-600">{item.answer}</p>
//                     </motion.div>
//                   ))}
//                 </div>
//               </motion.div>
//             )}
//           </div>
//         )}
//         {/* If Roles and Responsibilities is NOT found, but FAQ exists, render it here (full width) */}
//         {rolesAndResponsibilitiesIndex === -1 && content.faq && content.faq.length > 0 && (
//           <motion.div
//             className="w-full mt-12 p-6 bg-white/30 backdrop-blur-md border border-white/20 rounded-xl shadow-lg" // Applied Glassmorphism
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.5 }}
//           >
//             <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
//             <div className="space-y-4">
//               {content.faq.map((item, faqIdx) => (
//                 <motion.div
//                   key={faqIdx}
//                   className="bg-gray-50 rounded-xl shadow-md p-6 cursor-pointer" // Keep inner FAQ item styling
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
//     </main>
//   );
// };

// export default AdvisoryContentDisplay;




// // src/components/AdvisoryCouncil/AdvisoryContentDisplay.jsx
// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { FileText, Phone } from 'lucide-react'; // Importing icons from lucide-react

// // Directly import the JSON data from its specified location
// import advisoryCouncilData from '../../pages/advisoryCouncilData.json';

// // This component will dynamically render content based on the pageType prop
// const AdvisoryContentDisplay = ({ pageType }) => {
//   const [content, setContent] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setLoading(true);
//     setError(null);
//     // Directly access data from the imported JSON based on pageType
//     const data = advisoryCouncilData[pageType];
//     if (data) {
//       setContent(data);
//     } else {
//       // If data for the specific pageType is not found in the JSON
//       setError(`Content for page type "${pageType}" not found in advisoryCouncilData.json.`);
//     }
//     setLoading(false);
//   }, [pageType]); // Re-run effect if pageType prop changes

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen text-xl text-gray-700">
//         Loading content...
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center h-screen text-xl text-red-500">
//         Error: {error}
//       </div>
//     );
//   }

//   if (!content) {
//     return (
//       <div className="flex justify-center items-center h-screen text-xl text-gray-500">
//         No content available for this section.
//       </div>
//     );
//   }

//   // Find the index of "Roles and Responsibilities" to apply conditional layout
//   const rolesAndResponsibilitiesIndex = content.mainContent.findIndex(
//     (section) => section.title.includes("Roles and Responsibilities")
//   );

//   return (
//     <main className="bg-white min-h-screen font-inter">
//       {/* Hero Section - Dynamic Title and Subtitle - This section will scroll normally */}
//       <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center text-white overflow-hidden bg-gradient-to-br from-blue-700 to-purple-600">
//         <motion.div
//           initial={{ y: -50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           className="relative z-10 text-center"
//         >
//           <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">{content.heroTitle}</h1>
//           <p className="text-lg md:text-xl max-w-3xl mx-auto px-4">
//             {content.heroSubtitle}
//           </p>
//         </motion.div>
//       </section>

//       {/* Main Content Area - Conditional Grid Layout */}
//       <section className="w-full py-12 px-4 lg:px-12">
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//           {/* Sidebar Navigation */}
//           <motion.aside
//             className="lg:col-span-1 p-6" // Removed bg, shadow, rounded. Added p-6 for internal spacing.
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.1 }}
//             transition={{ duration: 0.7, ease: "easeOut" }}
//           >
//             <h3 className="text-xl font-bold text-gray-900 mb-4">Advisory Council</h3>
//             <nav>
//               <ul>
//                 <motion.li initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
//                   <Link to="/about-advisory-board" className="block py-2 px-3 text-gray-700 font-semibold hover:bg-blue-100 transition-colors duration-200">About Advisory Board</Link>
//                 </motion.li>
//                 <motion.li initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
//                   <Link to="/our-advisory-council" className="block py-2 px-3 rounded-lg text-gray-700 font-semibold hover:bg-blue-100 transition-colors duration-200">Our Advisory Council</Link>
//                 </motion.li>
//                 <motion.li initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
//                   <Link to="/become-a-member" className="block py-2 px-3 rounded-lg text-gray-700 font-semibold hover:bg-blue-100 transition-colors duration-200">Become a Member</Link>
//                 </motion.li>
//               </ul>
//             </nav>

//             {/* Brochures Section */}
//             {content.brochures && content.brochures.length > 0 && (
//               <motion.div
//                 className="mt-8"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.1 }}
//                 transition={{ duration: 0.6, delay: 0.4 }}
//               >
//                 <h3 className="text-xl font-bold text-gray-800 mb-4">Brochures</h3>
//                 {content.brochures.map((brochure, idx) => (
//                   <motion.a
//                     key={idx}
//                     href={brochure.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2 py-2 px-3 rounded-lg text-blue-600 hover:bg-blue-100 transition-colors duration-200"
//                     initial={{ opacity: 0, x: -10 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
//                   >
//                     <FileText className="h-5 w-5" />
//                     {brochure.title}
//                   </motion.a>
//                 ))}
//               </motion.div>
//             )}

//             {/* How Can We Help? Section */}
//             <motion.div
//               className="mt-8 bg-gradient-to-br from-blue-500 to-purple-600 text-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.1 }}
//               transition={{ duration: 0.7, delay: 0.6 }}
//             >
//               <img
//                 src={content.helpSection.image}
//                 alt="How Can We Help?"
//                 className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-white shadow-md"
//                 onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/112x112/CCCCCC/000000?text=User'; }}
//               />
//               <h4 className="text-xl font-bold mb-1">{content.helpSection.title}</h4>
//               <p className="text-sm mb-3">{content.helpSection.description}</p>
//               <div className="text-base font-semibold mb-4">
//                 <p>{content.helpSection.phone}</p>
//                 <p>Mail: info@example.com</p>
//               </div>
//               <div className="flex gap-3 mt-2">
//                 <a href="#" className="w-9 h-9 flex items-center justify-center bg-white text-blue-700 rounded-full hover:bg-gray-100 transition-colors duration-200">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.812c-3.233 0-4.188 1.501-4.188 4.004v2.996z"/></svg>
//                 </a>
//                 <a href="#" className="w-9 h-9 flex items-center justify-center bg-white text-blue-700 rounded-full hover:bg-gray-100 transition-colors duration-200">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.594 0-6.495 2.902-6.495 6.495 0 .509.058 1.006.173 1.485-5.392-.27-10.197-2.857-13.407-6.793-.559.957-.883 2.077-.883 3.261 0 2.253 1.149 4.246 2.895 5.424-.849-.026-1.646-.26-2.34-.647-.005.021-.005.042-.005.063 0 3.166 2.262 5.8 5.26 6.39-.547.148-1.12.227-1.703.227-.417 0-.82-.041-1.215-.116.834 2.606 3.251 4.504 6.101 4.554-2.245 1.76-5.087 2.812-8.15 2.812-.53 0-1.053-.031-1.566-.092 2.905 1.86 6.356 2.946 10.063 2.946 12.071 0 18.67-10.003 18.67-18.67 0-.6-.013-1.196-.039-1.79z"/></svg>
//                 </a>
//                 <a href="#" className="w-9 h-9 flex items-center justify-center bg-white text-blue-700 rounded-full hover:bg-gray-100 transition-colors duration-200">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5 1.11-2.5 2.48-2.5 2.48 1.119 2.48 2.5zm.02 6.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.59-11.011-3.6z"/></svg>
//                 </a>
//               </div>
//             </motion.div>
//           </motion.aside>

//           {/* Main Content Area (for sections before "Roles and Responsibilities") */}
//           <div className="lg:col-span-3" id="main-content-scroll-section-top">
//             {content.mainContent.slice(0, rolesAndResponsibilitiesIndex !== -1 ? rolesAndResponsibilitiesIndex : content.mainContent.length).map((section, idx) => (
//               <motion.div
//                 key={idx}
//                 className="mb-12"
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.3 }}
//                 transition={{ duration: 0.6, delay: idx * 0.1 }}
//               >
//                 <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">{section.title}</h2>
//                 {section.paragraphs.map((paragraph, pIdx) => (
//                   <p key={pIdx} className="text-gray-700 mb-4 text-lg leading-relaxed">{paragraph}</p>
//                 ))}

//                 {/* Images Section */}
//                 {section.images && section.images.length > 0 && (
//                   <div className={`grid ${section.images.length > 1 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'} gap-6 mt-8`}>
//                     {section.images.map((img, imgIdx) => (
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
//                 )}

//                 {/* Benefits Section */}
//                 {section.benefits && section.benefits.length > 0 && (
//                   <div className="mt-8">
//                     <h3 className="text-2xl font-bold text-gray-900 mb-4">Benefits With Our Service</h3>
//                     <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 text-lg">
//                       {section.benefits.map((benefit, bIdx) => (
//                         <li key={bIdx} className="flex items-start">
//                           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                           </svg>
//                           {benefit}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Full-width content from "Roles and Responsibilities" onwards AND FAQ */}
//         {rolesAndResponsibilitiesIndex !== -1 && (
//           <div className="w-full mt-12"> {/* Added mt-12 for spacing from previous section */}
//             {content.mainContent.slice(rolesAndResponsibilitiesIndex).map((section, idx) => (
//               <motion.div
//                 key={idx}
//                 className="mb-12 px-4" // Added px-4 for internal padding
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.3 }}
//                 transition={{ duration: 0.6, delay: idx * 0.1 }}
//               >
//                 <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">{section.title}</h2>
//                 {section.paragraphs.map((paragraph, pIdx) => (
//                   <p key={pIdx} className="text-gray-700 mb-4 text-lg leading-relaxed">{paragraph}</p>
//                 ))}

//                 {/* Images Section */}
//                 {section.images && section.images.length > 0 && (
//                   <div className={`grid ${section.images.length > 1 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'} gap-6 mt-8`}>
//                     {section.images.map((img, imgIdx) => (
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
//                 )}

//                 {/* Benefits Section (if it appears after Roles and Responsibilities) */}
//                 {section.benefits && section.benefits.length > 0 && (
//                   <div className="mt-8">
//                     <h3 className="text-2xl font-bold text-gray-900 mb-4">Benefits With Our Service</h3>
//                     <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 text-lg">
//                       {section.benefits.map((benefit, bIdx) => (
//                         <li key={bIdx} className="flex items-start">
//                           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                           </svg>
//                           {benefit}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}

//                 {/* Advisory Members Section (if it appears after Roles and Responsibilities) */}
//                 {section.advisoryMembers && section.advisoryMembers.length > 0 && (
//                   <div className="mt-12">
//                     <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Esteemed Advisory Members</h3>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//                       {section.advisoryMembers.map((member, mIdx) => (
//                         <motion.div
//                           key={mIdx}
//                           className="bg-gray-50 rounded-xl shadow-md p-6 text-center flex flex-col items-center"
//                           initial={{ opacity: 0, scale: 0.9 }}
//                           whileInView={{ opacity: 1, scale: 1 }}
//                           viewport={{ once: true, amount: 0.3 }}
//                           transition={{ duration: 0.5, delay: mIdx * 0.1 }}
//                         >
//                           <img
//                             src={member.image}
//                             alt={member.name}
//                             className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-blue-400"
//                             onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/96x96/CCCCCC/000000?text=Member'; }}
//                           />
//                           <h4 className="text-xl font-bold text-gray-900">{member.name}</h4>
//                           <p className="text-sm text-gray-600">{member.role}</p>
//                           {member.bio && <p className="text-sm text-gray-700 mt-2 italic">{member.bio}</p>}
//                         </motion.div>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </motion.div>
//             ))}
//             {/* FAQ Section - Now explicitly placed here to be full-width if rolesAndResponsibilitiesIndex is found */}
//             {content.faq && content.faq.length > 0 && (
//               <div className="mt-12 px-4"> {/* Added px-4 for internal padding */}
//                 <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
//                 <div className="space-y-4">
//                   {content.faq.map((item, faqIdx) => (
//                     <motion.div
//                       key={faqIdx}
//                       className="bg-gray-50 rounded-xl shadow-md p-6 cursor-pointer"
//                       initial={{ opacity: 0, y: 20 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       viewport={{ once: true, amount: 0.3 }}
//                       transition={{ duration: 0.5, delay: faqIdx * 0.1 }}
//                       onClick={(e) => {
//                         const answer = e.currentTarget.querySelector('.faq-answer');
//                         const icon = e.currentTarget.querySelector('svg');
//                         if (answer) {
//                           answer.classList.toggle('hidden');
//                           icon.classList.toggle('rotate-180');
//                         }
//                       }}
//                     >
//                       <h3 className="text-lg font-semibold text-gray-800 flex justify-between items-center">
//                         {item.question}
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 transform transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
//                           <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                         </svg>
//                       </h3>
//                       <p className="faq-answer hidden mt-3 text-gray-600">{item.answer}</p>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         )}
//         {/* If Roles and Responsibilities is NOT found, but FAQ exists, render it here (full width) */}
//         {rolesAndResponsibilitiesIndex === -1 && content.faq && content.faq.length > 0 && (
//           <div className="w-full mt-12 px-4"> {/* Added px-4 for internal padding */}
//             <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
//             <div className="space-y-4">
//               {content.faq.map((item, faqIdx) => (
//                 <motion.div
//                   key={faqIdx}
//                   className="bg-gray-50 rounded-xl shadow-md p-6 cursor-pointer"
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
//           </div>
//         )}
//       </section>
//     </main>
//   );
// };

// export default AdvisoryContentDisplay;












// src/components/AdvisoryCouncil/AdvisoryContentDisplay.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText, Phone } from 'lucide-react'; // Importing icons from lucide-react

// Directly import the JSON data from its specified location
import advisoryCouncilData from '../../pages/advisoryCouncilData.json';

// This component will dynamically render content based on the pageType prop
const AdvisoryContentDisplay = ({ pageType }) => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    // Directly access data from the imported JSON based on pageType
    const data = advisoryCouncilData[pageType];
    if (data) {
      setContent(data);
    } else {
      // If data for the specific pageType is not found in the JSON
      setError(`Content for page type "${pageType}" not found in advisoryCouncilData.json.`);
    }
    setLoading(false);
  }, [pageType]); // Re-run effect if pageType prop changes

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl text-gray-700">
        Loading content...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-xl text-red-500">
        Error: {error}
      </div>
    );
  }

  if (!content) {
    return (
      <div className="flex justify-center items-center h-screen text-xl text-gray-500">
        No content available for this section.
      </div>
    );
  }

  // Find the index of "Roles and Responsibilities" to apply conditional layout
  const rolesAndResponsibilitiesIndex = content.mainContent.findIndex(
    (section) => section.title.includes("Roles and Responsibilities")
  );

  return (
    // Main background changed to an eyecatching, light multicolor gradient
    <main className="bg-gradient-to-br from-blue-100 via-green-50 to-pink-50 min-h-screen font-inter">
      {/* Hero Section - Dynamic Title and Subtitle - This section will scroll normally */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center text-white overflow-hidden bg-gradient-to-br from-blue-700 to-purple-600">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">{content.heroTitle}</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto px-4">
            {content.heroSubtitle}
          </p>
        </motion.div>
      </section>

      {/* Main Content Area - Conditional Grid Layout */}
      <section className="w-full py-12 px-4 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[26vw_1fr] gap-8">
          {/* Sidebar Navigation - Applied Glassmorphism effect with white/transparent background */}
          <motion.aside
            className="p-6 bg-white/40 backdrop-blur-lg border border-white/30 rounded-xl shadow-xl" // Glassmorphism classes, fixed width handled by grid
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">Advisory Council</h3> {/* Text color adjusted for light background */}
            <nav>
              <ul>
                {/* Links for sidebar navigation with clickable button styling */}
                <motion.li initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
                  <Link
                    to="/about-advisory-board"
                    className="block py-2 px-3 text-gray-700 font-semibold rounded-lg hover:bg-blue-100 hover:scale-105 active:scale-95 transition-all duration-200" // Text and hover bg adjusted
                  >
                    About Advisory Board
                  </Link>
                </motion.li>
                <motion.li initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
                  <Link
                    to="/our-advisory-council"
                    className="block py-2 px-3 rounded-lg text-gray-700 font-semibold hover:bg-blue-100 hover:scale-105 active:scale-95 transition-all duration-200" // Text and hover bg adjusted
                  >
                    Our Advisory Council
                  </Link>
                </motion.li>
                <motion.li initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
                  <Link
                    to="/become-a-member"
                    className="block py-2 px-3 rounded-lg text-gray-700 font-semibold hover:bg-blue-100 hover:scale-105 active:scale-95 transition-all duration-200" // Text and hover bg adjusted
                  >
                    Become a Member
                  </Link>
                </motion.li>
              </ul>
            </nav>

            {/* Brochures Section - Applied Glassmorphism effect */}
            {content.brochures && content.brochures.length > 0 && (
              <motion.div
                className="mt-8 p-6 bg-white/30 backdrop-blur-md border border-white/20 rounded-xl shadow-md" // Glassmorphism classes
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">Brochures</h3> {/* Text color adjusted */}
                {content.brochures.map((brochure, idx) => (
                  <motion.a
                    key={idx}
                    href={brochure.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 py-2 px-3 rounded-lg text-blue-600 hover:bg-blue-100 transition-colors duration-200" // Text and hover bg adjusted
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
                  >
                    <FileText className="h-5 w-5" />
                    {brochure.title}
                  </motion.a>
                ))}
              </motion.div>
            )}

            {/* How Can We Help? Section - Retained distinct styling, added hover effect */}
            <motion.div
              className="mt-8 bg-gradient-to-br from-blue-500 to-purple-600 text-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center transform hover:scale-103 transition-transform duration-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <img
                src={content.helpSection.image}
                alt="How Can We Help?"
                className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-white shadow-md"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/112x112/CCCCCC/000000?text=User'; }}
              />
              <h4 className="text-xl font-bold mb-1">{content.helpSection.title}</h4>
              <p className="text-sm mb-3">{content.helpSection.description}</p>
              <div className="text-base font-semibold mb-4">
                <p>{content.helpSection.phone}</p>
                <p>Mail: info@example.com</p>
              </div>
              <div className="flex gap-3 mt-2">
                <a href="#" className="w-9 h-9 flex items-center justify-center bg-white text-blue-700 rounded-full hover:bg-gray-100 transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.812c-3.233 0-4.188 1.501-4.188 4.004v2.996z"/></svg>
                </a>
                <a href="#" className="w-9 h-9 flex items-center justify-center bg-white text-blue-700 rounded-full hover:bg-gray-100 transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.594 0-6.495 2.902-6.495 6.495 0 .509.058 1.006.173 1.485-5.392-.27-10.197-2.857-13.407-6.793-.559.957-.883 2.077-.883 3.261 0 2.253 1.149 4.246 2.895 5.424-.849-.026-1.646-.26-2.34-.647-.005.021-.005.042-.005.063 0 3.166 2.262 5.8 5.26 6.39-.547.148-1.12.227-1.703.227-.417 0-.82-.041-1.215-.116.834 2.606 3.251 4.504 6.101 4.554-2.245 1.76-5.087 2.812-8.15 2.812-.53 0-1.053-.031-1.566-.092 2.905 1.86 6.356 2.946 10.063 2.946 12.071 0 18.67-10.003 18.67-18.67 0-.6-.013-1.196-.039-1.79z"/></svg>
                </a>
                <a href="#" className="w-9 h-9 flex items-center justify-center bg-white text-blue-700 rounded-full hover:bg-gray-100 transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5 1.11-2.5 2.48-2.5 2.48 1.119 2.48 2.5zm.02 6.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.59-11.011-3.6z"/></svg>
                </a>
              </div>
            </motion.div>
          </motion.aside>

          {/* Main Content Area (for sections before "Roles and Responsibilities") */}
          <div id="main-content-scroll-section-top">
            {content.mainContent.slice(0, rolesAndResponsibilitiesIndex !== -1 ? rolesAndResponsibilitiesIndex : content.mainContent.length).map((section, idx) => (
              <motion.div
                key={idx}
                className="mb-12 p-6 bg-white/40 backdrop-blur-lg border border-white/30 rounded-xl shadow-xl" // Applied Glassmorphism
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">{section.title}</h2> {/* Text color adjusted */}
                {section.paragraphs.map((paragraph, pIdx) => (
                  <p key={pIdx} className="text-gray-700 mb-4 text-lg leading-relaxed">{paragraph}</p> 
                ))}

                {/* Images Section */}
                {section.images && section.images.length > 0 && (
                  <div className={`grid ${section.images.length > 1 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'} gap-6 mt-8`}>
                    {section.images.map((img, imgIdx) => (
                      <motion.img
                        key={imgIdx}
                        src={img.src}
                        alt={img.alt}
                        className="rounded-2xl shadow-lg w-full object-cover h-64 md:h-72"
                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/DDA0DD/FFFFFF?text=Image+Load+Error'; }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: imgIdx * 0.1 }}
                      />
                    ))}
                  </div>
                )}

                {/* Benefits Section */}
                {section.benefits && section.benefits.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Benefits With Our Service</h3> {/* Text color adjusted */}
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 text-lg"> {/* Text color adjusted */}
                      {section.benefits.map((benefit, bIdx) => (
                        <li key={bIdx} className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"> {/* Icon color adjusted */}
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Full-width content from "Roles and Responsibilities" onwards AND FAQ */}
        {rolesAndResponsibilitiesIndex !== -1 && (
          <div className="w-full mt-12"> {/* Added mt-12 for spacing from previous section */}
            {content.mainContent.slice(rolesAndResponsibilitiesIndex).map((section, idx) => (
              <motion.div
                key={idx}
                className="mb-12 p-6 bg-white/40 backdrop-blur-lg border border-white/30 rounded-xl shadow-xl" // Applied Glassmorphism
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">{section.title}</h2> {/* Text color adjusted */}
                {section.paragraphs.map((paragraph, pIdx) => (
                  <p key={pIdx} className="text-gray-700 mb-4 text-lg leading-relaxed">{paragraph}</p> 
                ))}

                {/* Images Section */}
                {section.images && section.images.length > 0 && (
                  <div className={`grid ${section.images.length > 1 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'} gap-6 mt-8`}>
                    {section.images.map((img, imgIdx) => (
                      <motion.img
                        key={imgIdx}
                        src={img.src}
                        alt={img.alt}
                        className="rounded-2xl shadow-lg w-full object-cover h-64 md:h-72"
                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/DDA0DD/FFFFFF?text=Image+Load+Error'; }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: imgIdx * 0.1 }}
                      />
                    ))}
                  </div>
                )}

                {/* Benefits Section (if it appears after Roles and Responsibilities) */}
                {section.benefits && section.benefits.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Benefits With Our Service</h3> {/* Text color adjusted */}
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 text-lg"> {/* Text color adjusted */}
                      {section.benefits.map((benefit, bIdx) => (
                        <li key={bIdx} className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"> {/* Icon color adjusted */}
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Advisory Members Section (if it appears after Roles and Responsibilities) */}
                {section.advisoryMembers && section.advisoryMembers.length > 0 && (
                  <div className="mt-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Esteemed Advisory Members</h3> {/* Text color adjusted */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                      {section.advisoryMembers.map((member, mIdx) => (
                        <motion.div
                          key={mIdx}
                          className="bg-white/30 rounded-xl shadow-md p-6 text-center flex flex-col items-center" // Applied Glassmorphism
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true, amount: 0.3 }}
                          transition={{ duration: 0.5, delay: mIdx * 0.1 }}
                        >
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-blue-400"
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/96x96/CCCCCC/000000?text=Member'; }}
                          />
                          <h4 className="text-xl font-bold text-gray-900">{member.name}</h4> {/* Text color adjusted */}
                          <p className="text-sm text-gray-600">{member.role}</p> {/* Text color adjusted */}
                          {member.bio && <p className="text-sm text-gray-600 mt-2 italic">{member.bio}</p>} {/* Text color adjusted */}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
            {/* FAQ Section - Now explicitly placed here to be full-width if rolesAndResponsibilitiesIndex is found */}
            {content.faq && content.faq.length > 0 && (
              <motion.div
                className="mt-12 p-6 bg-white/40 backdrop-blur-lg border border-white/30 rounded-xl shadow-lg" // Applied Glassmorphism
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2> {/* Text color adjusted */}
                <div className="space-y-4">
                  {content.faq.map((item, faqIdx) => (
                    <motion.div
                      key={faqIdx}
                      className="bg-white/30 rounded-xl shadow-md p-6 cursor-pointer" // Inner FAQ item styling with Glassmorphism
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.5, delay: faqIdx * 0.1 }}
                      onClick={(e) => {
                        const answer = e.currentTarget.querySelector('.faq-answer');
                        const icon = e.currentTarget.querySelector('svg');
                        if (answer) {
                          answer.classList.toggle('hidden');
                          icon.classList.toggle('rotate-180');
                        }
                      }}
                    >
                      <h3 className="text-lg font-semibold text-gray-800 flex justify-between items-center"> {/* Text color adjusted */}
                        {item.question}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 transform transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor"> {/* Icon color adjusted */}
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </h3>
                      <p className="faq-answer hidden mt-3 text-gray-600">{item.answer}</p> {/* Text color adjusted */}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        )}
        {/* If Roles and Responsibilities is NOT found, but FAQ exists, render it here (full width) */}
        {rolesAndResponsibilitiesIndex === -1 && content.faq && content.faq.length > 0 && (
          <motion.div
            className="w-full mt-12 p-6 bg-white/40 backdrop-blur-lg border border-white/30 rounded-xl shadow-lg" // Applied Glassmorphism
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2> {/* Text color adjusted */}
            <div className="space-y-4">
              {content.faq.map((item, faqIdx) => (
                <motion.div
                  key={faqIdx}
                  className="bg-white/30 rounded-xl shadow-md p-6 cursor-pointer" // Inner FAQ item styling with Glassmorphism
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: faqIdx * 0.1 }}
                  onClick={(e) => {
                    const answer = e.currentTarget.querySelector('.faq-answer');
                    const icon = e.currentTarget.querySelector('svg');
                    if (answer) {
                      answer.classList.toggle('hidden');
                      icon.classList.toggle('rotate-180');
                    }
                  }}
                >
                  <h3 className="text-lg font-semibold text-gray-800 flex justify-between items-center"> {/* Text color adjusted */}
                    {item.question}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 transform transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor"> {/* Icon color adjusted */}
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </h3>
                  <p className="faq-answer hidden mt-3 text-gray-600">{item.answer}</p> {/* Text color adjusted */}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </section>
    </main>
  );
};

export default AdvisoryContentDisplay;
