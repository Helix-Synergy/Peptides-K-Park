// import React, { useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// // Register GSAP plugins
// gsap.registerPlugin(ScrollTrigger);

// // Data for sections
// const stats = [
//   { value: '450', label: 'employees from around the world' },
//   { value: '+645', label: 'happy clients from largest corporations' },
//   { value: '+10', label: 'offices in 6 counties worldwide' },
// ];

// const skills = [
//   { name: 'UI/UX Design', value: 95 },
//   { name: 'App Development', value: 82 },
//   { name: 'Business Growth', value: 90 },
//   { name: 'Technology Solution', value: 80 },
// ];

// const team = [
//   { name: 'John Smith', role: 'CEO', image: 'https://placehold.co/150x150/8A2BE2/FFFFFF?text=JS' },
//   { name: 'Emma London', role: 'Co-Founder', image: 'https://placehold.co/150x150/FF69B4/FFFFFF?text=EL' },
//   { name: 'Jessica Brown', role: 'Managing Director', image: 'https://placehold.co/150x150/4682B4/FFFFFF?text=JB' },
//   { name: 'Christine Eve', role: 'Designer', image: 'https://placehold.co/150x150/32CD32/FFFFFF?text=CE' },
// ];

// const blogPosts = [
//   {
//     title: 'How to use React for building scalable web apps',
//     image: 'https://placehold.co/400x250/ADD8E6/000000?text=React+App',
//     date: 'July 1, 2024',
//     link: '#',
//   },
//   {
//     title: 'Understanding the power of Tailwind CSS',
//     image: 'https://placehold.co/400x250/90EE90/000000?text=Tailwind+CSS',
//     date: 'June 25, 2024',
//     link: '#',
//   },
//   {
//     title: 'The future of AI in web development',
//     image: 'https://placehold.co/400x250/FFB6C1/000000?text=AI+Future',
//     date: 'June 18, 2024',
//     link: '#',
//   },
// ];

// const AboutUs = () => {
//   const statsRef = useRef(null); // Ref for the stats section container

//   // GSAP animation for stats counter and ScrollTrigger refresh
//   useEffect(() => {
//     // Use a setTimeout to ensure DOM elements are fully rendered before querying
//     const timer = setTimeout(() => {
//       if (statsRef.current) {
//         const counters = statsRef.current.querySelectorAll('.stat-value');
//         counters.forEach(counter => {
//           const targetValue = parseInt(counter.dataset.target);
//           const isPlus = counter.dataset.plus === 'true';
//           const obj = { val: 0 };

//           gsap.to(obj, {
//             val: targetValue,
//             duration: 2,
//             ease: "power1.out",
//             snap: { val: 1 },
//             scrollTrigger: {
//               trigger: counter,
//               start: "top 80%",
//               toggleActions: "play none none none",
//               once: true,
//             },
//             onUpdate: function () {
//               counter.textContent = isPlus ? `+${Math.round(obj.val)}` : `${Math.round(obj.val)}`;
//             },
//             onComplete: function () {
//               counter.textContent = isPlus ? `+${targetValue}` : `${targetValue}`;
//             }
//           });
//         });
//         // Refresh ScrollTrigger after elements are rendered and animations are set up
//         ScrollTrigger.refresh();
//       }
//     }, 100);

//     // Add event listener for window resize to refresh ScrollTrigger
//     const handleResize = () => {
//       ScrollTrigger.refresh();
//     };
//     window.addEventListener('resize', handleResize);

//     // Cleanup function for setTimeout and event listener
//     return () => {
//       clearTimeout(timer);
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []); // Empty dependency array means this effect runs once on mount

//   return (
//     <main className="bg-white min-h-screen font-inter">
//       {/* Hero/Header Section */}
//       <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center text-white overflow-hidden bg-gradient-to-br from-blue-700 to-purple-600">
//         {/* Background Shapes/Graphics (simulating the screenshot) */}
//         <motion.div
//           initial={{ scale: 0, opacity: 0 }}
//           animate={{ scale: 1, opacity: 0.2 }}
//           transition={{ duration: 1, delay: 0.5 }}
//           className="absolute w-96 h-96 bg-white rounded-full -top-20 -left-20 opacity-10"
//         ></motion.div>
//         <motion.div
//           initial={{ scale: 0, opacity: 0 }}
//           animate={{ scale: 1, opacity: 0.1 }}
//           transition={{ duration: 1, delay: 0.7 }}
//           className="absolute w-72 h-72 bg-white rounded-full -bottom-10 -right-10 opacity-10"
//         ></motion.div>
//         <motion.div
//           initial={{ y: -50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           className="relative z-10 text-center"
//         >
//           <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">About Us</h1>
//           <p className="text-lg md:text-xl max-w-2xl mx-auto px-4">
//             Learn more about Peptides Knowledge Park, our mission, vision, and the dedicated team behind our success.
//           </p>
//         </motion.div>
//       </section>

//       {/* Stats Section */}
//       <section className="bg-gradient-to-b from-blue-900 to-blue-700 py-16 px-4 text-white text-center -mt-16 relative z-20 rounded-t-3xl md:rounded-t-[50px] shadow-lg">
//         <div ref={statsRef} className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
//           {stats.map((stat, idx) => (
//             <motion.div
//               key={idx}
//               className="flex flex-col items-center p-6 rounded-xl bg-white/10 backdrop-blur-md shadow-xl hover:bg-white/20 transition-all duration-300 ease-in-out cursor-pointer"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.5 }}
//               transition={{ duration: 0.6, delay: idx * 0.2 }}
//             >
//               <div
//                 className="text-5xl font-bold text-purple-200 mb-2 stat-value"
//                 data-target={parseInt(stat.value.replace('+', ''))}
//                 data-plus={stat.value.includes('+') ? 'true' : 'false'}
//               >
//                 0 {/* Initial display before animation, always 0 */}
//               </div>
//               <div className="text-base text-purple-100">{stat.label}</div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Core About Section (Image & Skills) */}
//       <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 py-20 px-4 items-center">
//         <motion.div
//           className="flex items-center justify-center relative"
//           initial={{ opacity: 0, x: -100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.8 }}
//         >
//           <img
//             src="https://placehold.co/600x400/DDA0DD/FFFFFF?text=About+Us+Image"
//             alt="About us"
//             className="rounded-3xl shadow-2xl w-full max-w-lg object-cover transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out"
//             onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/DDA0DD/FFFFFF?text=Image+Load+Error'; }}
//           />
//           <motion.div
//             className="absolute -bottom-8 -left-8 w-40 h-40 bg-blue-500 rounded-full opacity-70 blur-xl"
//             animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
//             transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
//           ></motion.div>
//         </motion.div>
//         <motion.div
//           className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 flex flex-col justify-center"
//           initial={{ opacity: 0, x: 100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           <span className="text-sm text-blue-600 tracking-widest uppercase mb-3 font-semibold">About Us</span>
//           <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">We deal With The Aspects Of Professional IT Services</h2>
//           <p className="text-gray-700 mb-8 text-lg leading-relaxed">Peptides Knowledge Park is the partner of choice for many of the world's leading enterprises, SMEs and technology challengers. We help businesses elevate their value through custom software development, product design, and strategic consulting.</p>
//           <div className="space-y-6">
//             {skills.map((skill, idx) => (
//               <motion.div
//                 key={idx}
//                 className="group"
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true, amount: 0.5 }}
//                 transition={{ duration: 0.5, delay: idx * 0.1 }}
//               >
//                 <div className="flex justify-between mb-2">
//                   <span className="text-lg font-medium text-blue-800">{skill.name}</span>
//                   <span className="text-lg font-bold text-blue-800">{skill.value}%</span>
//                 </div>
//                 <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
//                   <motion.div
//                     className="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full group-hover:scale-x-105 origin-left"
//                     style={{ width: `${skill.value}%` }}
//                     initial={{ scaleX: 0 }}
//                     whileInView={{ scaleX: 1 }}
//                     viewport={{ once: true, amount: 0.8 }}
//                     transition={{ duration: 1, delay: idx * 0.2 + 0.5 }}
//                   ></motion.div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </section>

//       {/* Team Section */}
//       <section className="max-w-7xl mx-auto py-20 px-4">
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: -50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.7 }}
//         >
//           <span className="text-sm text-purple-600 tracking-widest uppercase font-semibold">Our Dedicated Team</span>
//           <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-6 leading-tight">Discover Our Trustworthy Team<br />and Experts</h2>
//           <p className="text-lg text-gray-700 max-w-3xl mx-auto">Meet the brilliant minds and passionate individuals who drive innovation and excellence at Peptides Knowledge Park.</p>
//         </motion.div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {team.map((member, idx) => (
//             <motion.div
//               key={idx}
//               className="relative flex flex-col items-center bg-white rounded-3xl shadow-xl p-6 overflow-hidden group cursor-pointer border border-gray-100 hover:border-blue-500 transition-all duration-300"
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 0.6, delay: idx * 0.15 }}
//               whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
//             >
//               <div className="relative w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-blue-400 group-hover:border-purple-500 transition-colors duration-300">
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300 ease-out"
//                   onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/150x150/CCCCCC/000000?text=User'; }}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2">
//                   <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">View Profile</span>
//                 </div>
//               </div>
//               <h3 className="font-bold text-xl text-gray-900 mb-1 group-hover:text-blue-700 transition-colors duration-300">{member.name}</h3>
//               <p className="text-sm text-gray-600 group-hover:text-purple-600 transition-colors duration-300">{member.role}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Client Feedback Section */}
//       <section className="bg-gradient-to-r from-blue-100 to-purple-100 py-20 px-4">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <motion.div
//             className="flex flex-wrap gap-4 justify-center lg:justify-start"
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.8 }}
//           >
//             <img
//               src="https://placehold.co/200x200/FFD700/000000?text=Client+1"
//               alt="Client testimonial"
//               className="rounded-2xl w-48 h-48 object-cover shadow-xl transform hover:scale-105 transition-transform duration-300"
//               onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/200x200/CCCCCC/000000?text=Client'; }}
//             />
//             <img
//               src="https://placehold.co/200x200/FF6347/000000?text=Client+2"
//               alt="Client testimonial"
//               className="rounded-2xl w-48 h-48 object-cover shadow-xl ml-8 mt-8 transform hover:scale-105 transition-transform duration-300"
//               onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/200x200/CCCCCC/000000?text=Client'; }}
//             />
//             <img
//               src="https://placehold.co/200x200/6A5ACD/000000?text=Client+3"
//               alt="Client testimonial"
//               className="rounded-2xl w-48 h-48 object-cover shadow-xl transform hover:scale-105 transition-transform duration-300"
//               onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/200x200/CCCCCC/000000?text=Client'; }}
//             />
//           </motion.div>
//           <motion.div
//             className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12"
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             <span className="text-sm text-blue-600 tracking-widest uppercase mb-3 font-semibold">Client Feedback</span>
//             <h3 className="text-3xl font-extrabold text-gray-900 mb-6 mt-2 leading-tight">What Our Clients Say About Us</h3>
//             <p className="text-gray-700 mb-8 text-lg leading-relaxed italic">"Peptides Knowledge Park has been an invaluable partner. Their expertise in software development and commitment to our project's success exceeded all expectations. Highly recommended!"</p>
//             <div className="flex items-center gap-4 mt-6">
//               <img
//                 src="https://placehold.co/60x60/48D1CC/000000?text=JD"
//                 alt="Client Name"
//                 className="w-16 h-16 rounded-full object-cover border-2 border-blue-400"
//                 onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/60x60/CCCCCC/000000?text=User'; }}
//               />
//               <div>
//                 <div className="font-bold text-xl text-gray-900">Jane Doe</div>
//                 <div className="text-sm text-gray-600">CEO, Tech Innovators</div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Here's What's Happening / Blog Section */}
//       <section className="max-w-7xl mx-auto py-20 px-4">
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: -50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.7 }}
//         >
//           <span className="text-sm text-purple-600 tracking-widest uppercase font-semibold">Latest Insights</span>
//           <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-6 leading-tight">Here's What's Happening<br />in Our World</h2>
//           <p className="text-lg text-gray-700 max-w-3xl mx-auto">Stay updated with our latest news, articles, and industry insights.</p>
//         </motion.div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {blogPosts.map((post, idx) => (
//             <motion.div
//               key={idx}
//               className="bg-white rounded-3xl shadow-xl overflow-hidden group cursor-pointer border border-gray-100 hover:border-purple-500 transition-all duration-300"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 0.6, delay: idx * 0.15 }}
//               whileHover={{ scale: 1.03, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1), 0 8px 16px -5px rgba(0, 0, 0, 0.04)" }}
//             >
//               <div className="overflow-hidden">
//                 <img
//                   src={post.image}
//                   alt={post.title}
//                   className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
//                   onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x250/CCCCCC/000000?text=Blog+Image'; }}
//                 />
//               </div>
//               <div className="p-6">
//                 <span className="text-xs text-gray-500 mb-2 block">{post.date}</span>
//                 <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">{post.title}</h3>
//                 <Link to={post.link} className="text-blue-600 font-semibold hover:underline flex items-center">
//                   Read More
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                   </svg>
//                 </Link>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Contact/CTA Section (Placeholder based on screenshot) */}
//       <section className="bg-gradient-to-br from-blue-700 to-purple-600 py-20 px-4 text-white text-center rounded-t-3xl md:rounded-t-[50px] shadow-lg">
//         <motion.h2
//           className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg"
//           initial={{ opacity: 0, y: -30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 0.7, delay: 0.2 }}
//         >
//           Ready to Elevate Your Research?
//         </motion.h2>
//         <motion.p
//           className="text-lg md:text-xl max-w-3xl mx-auto mb-10 opacity-90"
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 0.7, delay: 0.4 }}
//         >
//           Contact us today to discuss your project and discover how Peptides Knowledge Park can support your goals.
//         </motion.p>
//         <motion.button
//           className="bg-white text-blue-700 font-bold py-4 px-10 rounded-full text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
//           initial={{ opacity: 0, scale: 0.8 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 0.7, delay: 0.6 }}
//           onClick={() => window.location.href = '/contact'}
//         >
//           Get in Touch
//         </motion.button>
//       </section>
//     </main>
//   );
// };

// export default AboutUs;





// import React, { useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// // GSAP plugins are registered globally in App.js now.

// // Data for sections
// const stats = [
//   { value: '450', label: 'employees from around the world' },
//   { value: '+645', label: 'happy clients from largest corporations' },
//   { value: '+10', label: 'offices in 6 counties worldwide' },
// ];

// const skills = [
//   { name: 'UI/UX Design', value: 95 },
//   { name: 'App Development', value: 82 },
//   { name: 'Business Growth', value: 90 },
//   { name: 'Technology Solution', value: 80 },
// ];

// const team = [
//   { name: 'John Smith', role: 'CEO', image: 'https://placehold.co/150x150/8A2BE2/FFFFFF?text=JS' },
//   { name: 'Emma London', role: 'Co-Founder', image: 'https://placehold.co/150x150/FF69B4/FFFFFF?text=EL' },
//   { name: 'Jessica Brown', role: 'Managing Director', image: 'https://placehold.co/150x150/4682B4/FFFFFF?text=JB' },
//   { name: 'Christine Eve', role: 'Designer', image: 'https://placehold.co/150x150/32CD32/FFFFFF?text=CE' },
// ];

// const blogPosts = [
//   {
//     title: 'How to use React for building scalable web apps',
//     image: 'https://placehold.co/400x250/ADD8E6/000000?text=React+App',
//     date: 'July 1, 2024',
//     link: '#',
//   },
//   {
//     title: 'Understanding the power of Tailwind CSS',
//     image: 'https://placehold.co/400x250/90EE90/000000?text=Tailwind+CSS',
//     date: 'June 25, 2024',
//     link: '#',
//   },
//   {
//     title: 'The future of AI in web development',
//     image: 'https://placehold.co/400x250/FFB6C1/000000?text=AI+Future',
//     date: 'June 18, 2024',
//     link: '#',
//   },
// ];

// const AboutUs = () => {
//   const statsRef = useRef(null); // Ref for the stats section container

//   // GSAP animation for stats counter
//   useEffect(() => {
//     // Ensure all previous ScrollTriggers are killed before setting up new ones
//     // This is crucial for pages that might re-render or if navigating back and forth
//     ScrollTrigger.getAll().forEach(trigger => trigger.kill());

//     // Use a setTimeout to ensure DOM elements are fully rendered before querying
//     const timer = setTimeout(() => {
//       if (statsRef.current) {
//         const counters = statsRef.current.querySelectorAll('.stat-value');
//         counters.forEach(counter => {
//           const targetValue = parseInt(counter.dataset.target);
//           const isPlus = counter.dataset.plus === 'true';
//           const obj = { val: 0 }; // Create a plain object to animate

//           gsap.to(obj, {
//             val: targetValue,
//             duration: 2,
//             ease: "power1.out",
//             snap: { val: 1 }, // Snap to integer values during animation
//             scrollTrigger: {
//               trigger: counter,
//               start: "top 80%", // When the top of the counter enters 80% of the viewport
//               toggleActions: "play none none none", // Play animation once
//               once: true, // Ensures it only plays once
//               // markers: true, // Uncomment for debugging ScrollTrigger positions
//               // scroller property is not needed here as it defaults to window
//             },
//             onUpdate: function () {
//               // Update the counter's text content during the animation
//               counter.textContent = isPlus ? `+${Math.round(obj.val)}` : `${Math.round(obj.val)}`;
//             },
//             onComplete: function () {
//               // Ensure the final value is exactly the target value to avoid rounding issues
//               counter.textContent = isPlus ? `+${targetValue}` : `${targetValue}`;
//             }
//           });
//         });
//         // Refresh ScrollTrigger after elements are rendered and animations are set up
//         // This is important for individual pages when using native scroll
//         ScrollTrigger.refresh();
//       }
//     }, 100); // Small delay to ensure DOM is ready

//     // Add event listener for window resize to refresh ScrollTrigger
//     const handleResize = () => {
//       ScrollTrigger.refresh();
//     };
//     window.addEventListener('resize', handleResize);

//     // Cleanup function for setTimeout and event listener
//     return () => {
//       clearTimeout(timer);
//       window.removeEventListener('resize', handleResize);
//       // Ensure all ScrollTriggers created in this effect are killed on unmount
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, []); // Empty dependency array means this effect runs once on mount

//   return (
//     <main className="bg-white min-h-screen font-inter">
//       {/* Hero/Header Section */}
//       <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center text-white overflow-hidden bg-gradient-to-br from-blue-700 to-purple-600">
//         {/* Background Shapes/Graphics (simulating the screenshot) */}
//         <motion.div
//           initial={{ scale: 0, opacity: 0 }}
//           animate={{ scale: 1, opacity: 0.2 }}
//           transition={{ duration: 1, delay: 0.5 }}
//           className="absolute w-96 h-96 bg-white rounded-full -top-20 -left-20 opacity-10"
//         ></motion.div>
//         <motion.div
//           initial={{ scale: 0, opacity: 0 }}
//           animate={{ scale: 1, opacity: 0.1 }}
//           transition={{ duration: 1, delay: 0.7 }}
//           className="absolute w-72 h-72 bg-white rounded-full -bottom-10 -right-10 opacity-10"
//         ></motion.div>
//         <motion.div
//           initial={{ y: -50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           className="relative z-10 text-center"
//         >
//           <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">About Us</h1>
//           <p className="text-lg md:text-xl max-w-2xl mx-auto px-4">
//             Learn more about Peptides Knowledge Park, our mission, vision, and the dedicated team behind our success.
//           </p>
//         </motion.div>
//       </section>

//       {/* Stats Section */}
//       <section className="bg-gradient-to-b from-blue-900 to-blue-700 py-16 px-4 text-white text-center -mt-16 relative z-20 rounded-t-3xl md:rounded-t-[50px] shadow-lg">
//         <div ref={statsRef} className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
//           {stats.map((stat, idx) => (
//             <motion.div
//               key={idx}
//               className="flex flex-col items-center p-6 rounded-xl bg-white/10 backdrop-blur-md shadow-xl hover:bg-white/20 transition-all duration-300 ease-in-out cursor-pointer"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.5 }}
//               transition={{ duration: 0.6, delay: idx * 0.2 }}
//             >
//               <div
//                 className="text-5xl font-bold text-purple-200 mb-2 stat-value"
//                 data-target={parseInt(stat.value.replace('+', ''))}
//                 data-plus={stat.value.includes('+') ? 'true' : 'false'}
//               >
//                 {stat.value.includes('+') ? `+0` : `0`} {/* Initial display before animation */}
//               </div>
//               <div className="text-base text-purple-100">{stat.label}</div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Core About Section (Image & Skills) */}
//       <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 py-20 px-4 items-center">
//         <motion.div
//           className="flex items-center justify-center relative"
//           initial={{ opacity: 0, x: -100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.8 }}
//         >
//           <img
//             src="https://placehold.co/600x400/DDA0DD/FFFFFF?text=About+Us+Image"
//             alt="About us"
//             className="rounded-3xl shadow-2xl w-full max-w-lg object-cover transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out"
//             onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/DDA0DD/FFFFFF?text=Image+Load+Error'; }}
//           />
//           <motion.div
//             className="absolute -bottom-8 -left-8 w-40 h-40 bg-blue-500 rounded-full opacity-70 blur-xl"
//             animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
//             transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
//           ></motion.div>
//         </motion.div>
//         <motion.div
//           className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 flex flex-col justify-center"
//           initial={{ opacity: 0, x: 100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           <span className="text-sm text-blue-600 tracking-widest uppercase mb-3 font-semibold">About Us</span>
//           <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">We deal With The Aspects Of Professional IT Services</h2>
//           <p className="text-gray-700 mb-8 text-lg leading-relaxed">Peptides Knowledge Park is the partner of choice for many of the world's leading enterprises, SMEs and technology challengers. We help businesses elevate their value through custom software development, product design, and strategic consulting.</p>
//           <div className="space-y-6">
//             {skills.map((skill, idx) => (
//               <motion.div
//                 key={idx}
//                 className="group"
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true, amount: 0.5 }}
//                 transition={{ duration: 0.5, delay: idx * 0.1 }}
//               >
//                 <div className="flex justify-between mb-2">
//                   <span className="text-lg font-medium text-blue-800">{skill.name}</span>
//                   <span className="text-lg font-bold text-blue-800">{skill.value}%</span>
//                 </div>
//                 <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
//                   <motion.div
//                     className="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full group-hover:scale-x-105 origin-left"
//                     style={{ width: `${skill.value}%` }}
//                     initial={{ scaleX: 0 }}
//                     whileInView={{ scaleX: 1 }}
//                     viewport={{ once: true, amount: 0.8 }}
//                     transition={{ duration: 1, delay: idx * 0.2 + 0.5 }}
//                   ></motion.div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </section>

//       {/* Team Section */}
//       <section className="max-w-7xl mx-auto py-20 px-4">
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: -50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.7 }}
//         >
//           <span className="text-sm text-purple-600 tracking-widest uppercase font-semibold">Our Dedicated Team</span>
//           <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-6 leading-tight">Discover Our Trustworthy Team<br />and Experts</h2>
//           <p className="text-lg text-gray-700 max-w-3xl mx-auto">Meet the brilliant minds and passionate individuals who drive innovation and excellence at Peptides Knowledge Park.</p>
//         </motion.div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {team.map((member, idx) => (
//             <motion.div
//               key={idx}
//               className="relative flex flex-col items-center bg-white rounded-3xl shadow-xl p-6 overflow-hidden group cursor-pointer border border-gray-100 hover:border-blue-500 transition-all duration-300"
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 0.6, delay: idx * 0.15 }}
//               whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
//             >
//               <div className="relative w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-blue-400 group-hover:border-purple-500 transition-colors duration-300">
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300 ease-out"
//                   onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/150x150/CCCCCC/000000?text=User'; }}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2">
//                   <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">View Profile</span>
//                 </div>
//               </div>
//               <h3 className="font-bold text-xl text-gray-900 mb-1 group-hover:text-blue-700 transition-colors duration-300">{member.name}</h3>
//               <p className="text-sm text-gray-600 group-hover:text-purple-600 transition-colors duration-300">{member.role}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Client Feedback Section */}
//       <section className="bg-gradient-to-r from-blue-100 to-purple-100 py-20 px-4">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <motion.div
//             className="flex flex-wrap gap-4 justify-center lg:justify-start"
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.8 }}
//           >
//             <img
//               src="https://placehold.co/200x200/FFD700/000000?text=Client+1"
//               alt="Client testimonial"
//               className="rounded-2xl w-48 h-48 object-cover shadow-xl transform hover:scale-105 transition-transform duration-300"
//               onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/200x200/CCCCCC/000000?text=Client'; }}
//             />
//             <img
//               src="https://placehold.co/200x200/FF6347/000000?text=Client+2"
//               alt="Client testimonial"
//               className="rounded-2xl w-48 h-48 object-cover shadow-xl ml-8 mt-8 transform hover:scale-105 transition-transform duration-300"
//               onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/200x200/CCCCCC/000000?text=Client'; }}
//             />
//             <img
//               src="https://placehold.co/200x200/6A5ACD/000000?text=Client+3"
//               alt="Client testimonial"
//               className="rounded-2xl w-48 h-48 object-cover shadow-xl transform hover:scale-105 transition-transform duration-300"
//               onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/200x200/CCCCCC/000000?text=Client'; }}
//             />
//           </motion.div>
//           <motion.div
//             className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12"
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             <span className="text-sm text-blue-600 tracking-widest uppercase mb-3 font-semibold">Client Feedback</span>
//             <h3 className="text-3xl font-extrabold text-gray-900 mb-6 mt-2 leading-tight">What Our Clients Say About Us</h3>
//             <p className="text-gray-700 mb-8 text-lg leading-relaxed italic">"Peptides Knowledge Park has been an invaluable partner. Their expertise in software development and commitment to our project's success exceeded all expectations. Highly recommended!"</p>
//             <div className="flex items-center gap-4 mt-6">
//               <img
//                 src="https://placehold.co/60x60/48D1CC/000000?text=JD"
//                 alt="Client Name"
//                 className="w-16 h-16 rounded-full object-cover border-2 border-blue-400"
//                 onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/60x60/CCCCCC/000000?text=User'; }}
//               />
//               <div>
//                 <div className="font-bold text-xl text-gray-900">Jane Doe</div>
//                 <div className="text-sm text-gray-600">CEO, Tech Innovators</div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Here's What's Happening / Blog Section */}
//       <section className="max-w-7xl mx-auto py-20 px-4">
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: -50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.7 }}
//         >
//           <span className="text-sm text-purple-600 tracking-widest uppercase font-semibold">Latest Insights</span>
//           <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-6 leading-tight">Here's What's Happening<br />in Our World</h2>
//           <p className="text-lg text-gray-700 max-w-3xl mx-auto">Stay updated with our latest news, articles, and industry insights.</p>
//         </motion.div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {blogPosts.map((post, idx) => (
//             <motion.div
//               key={idx}
//               className="bg-white rounded-3xl shadow-xl overflow-hidden group cursor-pointer border border-gray-100 hover:border-purple-500 transition-all duration-300"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 0.6, delay: idx * 0.15 }}
//               whileHover={{ scale: 1.03, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1), 0 8px 16px -5px rgba(0, 0, 0, 0.04)" }}
//             >
//               <div className="overflow-hidden">
//                 <img
//                   src={post.image}
//                   alt={post.title}
//                   className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
//                   onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x250/CCCCCC/000000?text=Blog+Image'; }}
//                 />
//               </div>
//               <div className="p-6">
//                 <span className="text-xs text-gray-500 mb-2 block">{post.date}</span>
//                 <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">{post.title}</h3>
//                 <Link to={post.link} className="text-blue-600 font-semibold hover:underline flex items-center">
//                   Read More
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                   </svg>
//                 </Link>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Contact/CTA Section (Placeholder based on screenshot) */}
//       <section className="bg-gradient-to-br from-blue-700 to-purple-600 py-20 px-4 text-white text-center rounded-t-3xl md:rounded-t-[50px] shadow-lg">
//         <motion.h2
//           className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg"
//           initial={{ opacity: 0, y: -30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 0.7, delay: 0.2 }}
//         >
//           Ready to Elevate Your Research?
//         </motion.h2>
//         <motion.p
//           className="text-lg md:text-xl max-w-3xl mx-auto mb-10 opacity-90"
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 0.7, delay: 0.4 }}
//         >
//           Contact us today to discuss your project and discover how Peptides Knowledge Park can support your goals.
//         </motion.p>
//         <motion.button
//           className="bg-white text-blue-700 font-bold py-4 px-10 rounded-full text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
//           initial={{ opacity: 0, scale: 0.8 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 0.7, delay: 0.6 }}
//           onClick={() => window.location.href = '/contact'}
//         >
//           Get in Touch
//         </motion.button>
//       </section>
//     </main>
//   );
// };

// export default AboutUs;















// import React, { useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// // GSAP plugins are registered globally in App.js now.

// // Data for sections
// const stats = [
//   { value: '450', label: 'employees from around the world' },
//   { value: '+645', label: 'happy clients from largest corporations' },
//   { value: '+10', label: 'offices in 6 counties worldwide' },
// ];

// const skills = [
//   { name: 'UI/UX Design', value: 95 },
//   { name: 'App Development', value: 82 },
//   { name: 'Business Growth', value: 90 },
//   { name: 'Technology Solution', value: 80 },
// ];

// const team = [
//   { name: 'John Smith', role: 'CEO', image: 'https://placehold.co/150x150/8A2BE2/FFFFFF?text=JS' },
//   { name: 'Emma London', role: 'Co-Founder', image: 'https://placehold.co/150x150/FF69B4/FFFFFF?text=EL' },
//   { name: 'Jessica Brown', role: 'Managing Director', image: 'https://placehold.co/150x150/4682B4/FFFFFF?text=JB' },
//   { name: 'Christine Eve', role: 'Designer', image: 'https://placehold.co/150x150/32CD32/FFFFFF?text=CE' },
// ];

// const blogPosts = [
//   {
//     title: 'How to use React for building scalable web apps',
//     image: 'https://placehold.co/400x250/ADD8E6/000000?text=React+App',
//     date: 'July 1, 2024',
//     link: '#',
//   },
//   {
//     title: 'Understanding the power of Tailwind CSS',
//     image: 'https://placehold.co/400x250/90EE90/000000?text=Tailwind+CSS',
//     date: 'June 25, 2024',
//     link: '#',
//   },
//   {
//     title: 'The future of AI in web development',
//     image: 'https://placehold.co/400x250/FFB6C1/000000?text=AI+Future',
//     date: 'June 18, 2024',
//     link: '#',
//   },
// ];

// const AboutUs = () => {
//   const statsRef = useRef(null); // Ref for the stats section container
//   const skillBarsRefs = useRef([]); // Ref to hold an array of skill bar elements

//   // GSAP animation for stats counter and skill bars
//   useEffect(() => {
//     // Ensure all previous ScrollTriggers are killed before setting up new ones
//     ScrollTrigger.getAll().forEach(trigger => trigger.kill());

//     // Use a setTimeout to ensure DOM elements are fully rendered before querying
//     const timer = setTimeout(() => {
//       // --- Stats Counter Animation ---
//       if (statsRef.current) {
//         const counters = statsRef.current.querySelectorAll('.stat-value');
//         counters.forEach(counter => {
//           const targetValue = parseInt(counter.dataset.target);
//           const isPlus = counter.dataset.plus === 'true';
//           const obj = { val: 0 };

//           gsap.to(obj, {
//             val: targetValue,
//             duration: 2,
//             ease: "power1.out",
//             snap: { val: 1 },
//             scrollTrigger: {
//               trigger: counter,
//               start: "top 80%",
//               toggleActions: "play none none none",
//               once: true,
//             },
//             onUpdate: function () {
//               counter.textContent = isPlus ? `+${Math.round(obj.val)}` : `${Math.round(obj.val)}`;
//             },
//             onComplete: function () {
//               counter.textContent = isPlus ? `+${targetValue}` : `${targetValue}`;
//             }
//           });
//         });
//       }

//       // --- Skill Bars Animation ---
//       skillBarsRefs.current.forEach((bar, idx) => {
//         if (bar) {
//           const targetWidth = parseFloat(bar.dataset.targetWidth); // Get target width from data attribute
//           gsap.fromTo(bar,
//             { scaleX: 0, transformOrigin: 'left' }, // Start from 0 width, scale from left
//             {
//               scaleX: 1, // Animate to full width (100% scale)
//               duration: 1.5,
//               ease: "power2.out",
//               scrollTrigger: {
//                 trigger: bar,
//                 start: "top 85%", // When the top of the bar enters 85% of the viewport
//                 toggleActions: "play none none none",
//                 once: true,
//                 // markers: true, // Uncomment for debugging
//               }
//             }
//           );
//         }
//       });

//       // Refresh ScrollTrigger after all animations are set up
//       ScrollTrigger.refresh();
//     }, 100); // Small delay to ensure DOM is ready

//     // Add event listener for window resize to refresh ScrollTrigger
//     const handleResize = () => {
//       ScrollTrigger.refresh();
//     };
//     window.addEventListener('resize', handleResize);

//     // Cleanup function for setTimeout and event listener
//     return () => {
//       clearTimeout(timer);
//       window.removeEventListener('resize', handleResize);
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, []); // Empty dependency array means this effect runs once on mount

//   return (
//     <main className="bg-white min-h-screen font-inter">
//       {/* Hero/Header Section */}
//       <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center text-white overflow-hidden bg-gradient-to-br from-blue-700 to-purple-600">
//         {/* Background Shapes/Graphics (simulating the screenshot) */}
//         <motion.div
//           initial={{ scale: 0, opacity: 0 }}
//           animate={{ scale: 1, opacity: 0.2 }}
//           transition={{ duration: 1, delay: 0.5 }}
//           className="absolute w-96 h-96 bg-white rounded-full -top-20 -left-20 opacity-10"
//         ></motion.div>
//         <motion.div
//           initial={{ scale: 0, opacity: 0 }}
//           animate={{ scale: 1, opacity: 0.1 }}
//           transition={{ duration: 1, delay: 0.7 }}
//           className="absolute w-72 h-72 bg-white rounded-full -bottom-10 -right-10 opacity-10"
//         ></motion.div>
//         <motion.div
//           initial={{ y: -50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           className="relative z-10 text-center"
//         >
//           <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">About Us</h1>
//           <p className="text-lg md:text-xl max-w-2xl mx-auto px-4">
//             Learn more about Peptides Knowledge Park, our mission, vision, and the dedicated team behind our success.
//           </p>
//         </motion.div>
//       </section>

//       {/* Stats Section */}
//       <section className="bg-gradient-to-b from-blue-900 to-blue-700 py-16 px-4 text-white text-center -mt-16 relative z-20 rounded-t-3xl md:rounded-t-[50px] shadow-lg">
//         <div ref={statsRef} className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
//           {stats.map((stat, idx) => (
//             <motion.div
//               key={idx}
//               className="flex flex-col items-center p-6 rounded-xl bg-white/10 backdrop-blur-md shadow-xl hover:bg-white/20 transition-all duration-300 ease-in-out cursor-pointer"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.5 }}
//               transition={{ duration: 0.6, delay: idx * 0.2 }}
//             >
//               <div
//                 className="text-5xl font-bold text-purple-200 mb-2 stat-value"
//                 data-target={parseInt(stat.value.replace('+', ''))}
//                 data-plus={stat.value.includes('+') ? 'true' : 'false'}
//               >
//                 {stat.value.includes('+') ? `+0` : `0`} {/* Initial display before animation */}
//               </div>
//               <div className="text-base text-purple-100">{stat.label}</div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Core About Section (Image & Skills) */}
//       <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 py-20 px-4 items-center">
//         <motion.div
//           className="flex items-center justify-center relative"
//           initial={{ opacity: 0, x: -100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.8 }}
//         >
//           <img
//             src="https://placehold.co/600x400/DDA0DD/FFFFFF?text=About+Us+Image"
//             alt="About us"
//             className="rounded-3xl shadow-2xl w-full max-w-lg object-cover transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out"
//             onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/DDA0DD/FFFFFF?text=Image+Load+Error'; }}
//           />
//           <motion.div
//             className="absolute -bottom-8 -left-8 w-40 h-40 bg-blue-500 rounded-full opacity-70 blur-xl"
//             animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
//             transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
//           ></motion.div>
//         </motion.div>
//         <motion.div
//           className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 flex flex-col justify-center"
//           initial={{ opacity: 0, x: 100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           <span className="text-sm text-blue-600 tracking-widest uppercase mb-3 font-semibold">About Us</span>
//           <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">We deal With The Aspects Of Professional IT Services</h2>
//           <p className="text-gray-700 mb-8 text-lg leading-relaxed">Peptides Knowledge Park is the partner of choice for many of the world's leading enterprises, SMEs and technology challengers. We help businesses elevate their value through custom software development, product design, and strategic consulting.</p>
//           <div className="space-y-6">
//             {skills.map((skill, idx) => (
//               <motion.div
//                 key={idx}
//                 className="group"
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true, amount: 0.5 }} /* Retained 0.5 for parent div */
//                 transition={{ duration: 0.5, delay: idx * 0.1 }}
//               >
//                 <div className="flex justify-between mb-2">
//                   <span className="text-lg font-medium text-blue-800">{skill.name}</span>
//                   <span className="text-lg font-bold text-blue-800">{skill.value}%</span>
//                 </div>
//                 <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
//                   {/* Using a regular div with a ref for GSAP animation */}
//                   <div
//                     ref={el => skillBarsRefs.current[idx] = el}
//                     className="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full"
//                     style={{ width: `${skill.value}%` }} // Initial width for correct layout
//                     data-target-width={skill.value} // Store target width for GSAP
//                   ></div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </section>

//       {/* Team Section */}
//       <section className="max-w-7xl mx-auto py-20 px-4">
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: -50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.7 }}
//         >
//           <span className="text-sm text-purple-600 tracking-widest uppercase font-semibold">Our Dedicated Team</span>
//           <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-6 leading-tight">Discover Our Trustworthy Team<br />and Experts</h2>
//           <p className="text-lg text-gray-700 max-w-3xl mx-auto">Meet the brilliant minds and passionate individuals who drive innovation and excellence at Peptides Knowledge Park.</p>
//         </motion.div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {team.map((member, idx) => (
//             <motion.div
//               key={idx}
//               className="relative flex flex-col items-center bg-white rounded-3xl shadow-xl p-6 overflow-hidden group cursor-pointer border border-gray-100 hover:border-blue-500 transition-all duration-300"
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 0.6, delay: idx * 0.15 }}
//               whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
//             >
//               <div className="relative w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-blue-400 group-hover:border-purple-500 transition-colors duration-300">
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300 ease-out"
//                   onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/150x150/CCCCCC/000000?text=User'; }}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2">
//                   <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">View Profile</span>
//                 </div>
//               </div>
//               <h3 className="font-bold text-xl text-gray-900 mb-1 group-hover:text-blue-700 transition-colors duration-300">{member.name}</h3>
//               <p className="text-sm text-gray-600 group-hover:text-purple-600 transition-colors duration-300">{member.role}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Client Feedback Section */}
//       <section className="bg-gradient-to-r from-blue-100 to-purple-100 py-20 px-4">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <motion.div
//             className="flex flex-wrap gap-4 justify-center lg:justify-start"
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.8 }}
//           >
//             <img
//               src="https://placehold.co/200x200/FFD700/000000?text=Client+1"
//               alt="Client testimonial"
//               className="rounded-2xl w-48 h-48 object-cover shadow-xl transform hover:scale-105 transition-transform duration-300"
//               onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/200x200/CCCCCC/000000?text=Client'; }}
//             />
//             <img
//               src="https://placehold.co/200x200/FF6347/000000?text=Client+2"
//               alt="Client testimonial"
//               className="rounded-2xl w-48 h-48 object-cover shadow-xl ml-8 mt-8 transform hover:scale-105 transition-transform duration-300"
//               onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/200x200/CCCCCC/000000?text=Client'; }}
//             />
//             <img
//               src="https://placehold.co/200x200/6A5ACD/000000?text=Client+3"
//               alt="Client testimonial"
//               className="rounded-2xl w-48 h-48 object-cover shadow-xl transform hover:scale-105 transition-transform duration-300"
//               onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/200x200/CCCCCC/000000?text=Client'; }}
//             />
//           </motion.div>
//           <motion.div
//             className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12"
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             <span className="text-sm text-blue-600 tracking-widest uppercase mb-3 font-semibold">Client Feedback</span>
//             <h3 className="text-3xl font-extrabold text-gray-900 mb-6 mt-2 leading-tight">What Our Clients Say About Us</h3>
//             <p className="text-gray-700 mb-8 text-lg leading-relaxed italic">"Peptides Knowledge Park has been an invaluable partner. Their expertise in software development and commitment to our project's success exceeded all expectations. Highly recommended!"</p>
//             <div className="flex items-center gap-4 mt-6">
//               <img
//                 src="https://placehold.co/60x60/48D1CC/000000?text=JD"
//                 alt="Client Name"
//                 className="w-16 h-16 rounded-full object-cover border-2 border-blue-400"
//                 onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/60x60/CCCCCC/000000?text=User'; }}
//               />
//               <div>
//                 <div className="font-bold text-xl text-gray-900">Jane Doe</div>
//                 <div className="text-sm text-gray-600">CEO, Tech Innovators</div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Here's What's Happening / Blog Section */}
//       <section className="max-w-7xl mx-auto py-20 px-4">
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: -50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.7 }}
//         >
//           <span className="text-sm text-purple-600 tracking-widest uppercase font-semibold">Latest Insights</span>
//           <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-6 leading-tight">Here's What's Happening<br />in Our World</h2>
//           <p className="text-lg text-gray-700 max-w-3xl mx-auto">Stay updated with our latest news, articles, and industry insights.</p>
//         </motion.div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {blogPosts.map((post, idx) => (
//             <motion.div
//               key={idx}
//               className="bg-white rounded-3xl shadow-xl overflow-hidden group cursor-pointer border border-gray-100 hover:border-purple-500 transition-all duration-300"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 0.6, delay: idx * 0.15 }}
//               whileHover={{ scale: 1.03, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1), 0 8px 16px -5px rgba(0, 0, 0, 0.04)" }}
//             >
//               <div className="overflow-hidden">
//                 <img
//                   src={post.image}
//                   alt={post.title}
//                   className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
//                   onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x250/CCCCCC/000000?text=Blog+Image'; }}
//                 />
//               </div>
//               <div className="p-6">
//                 <span className="text-xs text-gray-500 mb-2 block">{post.date}</span>
//                 <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">{post.title}</h3>
//                 <Link to={post.link} className="text-blue-600 font-semibold hover:underline flex items-center">
//                   Read More
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                   </svg>
//                 </Link>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Contact/CTA Section (Placeholder based on screenshot) */}
//       <section className="bg-gradient-to-br from-blue-700 to-purple-600 py-20 px-4 text-white text-center rounded-t-3xl md:rounded-t-[50px] shadow-lg">
//         <motion.h2
//           className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg"
//           initial={{ opacity: 0, y: -30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 0.7, delay: 0.2 }}
//         >
//           Ready to Elevate Your Research?
//         </motion.h2>
//         <motion.p
//           className="text-lg md:text-xl max-w-3xl mx-auto mb-10 opacity-90"
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 0.7, delay: 0.4 }}
//         >
//           Contact us today to discuss your project and discover how Peptides Knowledge Park can support your goals.
//         </motion.p>
//         <motion.button
//           className="bg-white text-blue-700 font-bold py-4 px-10 rounded-full text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
//           initial={{ opacity: 0, scale: 0.8 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 0.7, delay: 0.6 }}
//           onClick={() => window.location.href = '/contact'}
//         >
//           Get in Touch
//         </motion.button>
//       </section>
//     </main>
//   );
// };

// export default AboutUs;








import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// GSAP plugins are registered globally in App.js now.

// Data for sections
const stats = [
  { value: '450', label: 'employees from around the world' },
  { value: '+645', label: 'happy clients from largest corporations' },
  { value: '+10', label: 'offices in 6 counties worldwide' },
];

const skills = [
  { name: 'UI/UX Design', value: 95 },
  { name: 'App Development', value: 82 },
  { name: 'Business Growth', value: 90 },
  { name: 'Technology Solution', value: 80 },
];

const team = [
  { name: 'John Smith', role: 'CEO', image: 'https://placehold.co/150x150/8A2BE2/FFFFFF?text=JS' },
  { name: 'Emma London', role: 'Co-Founder', image: 'https://placehold.co/150x150/FF69B4/FFFFFF?text=EL' },
  { name: 'Jessica Brown', role: 'Managing Director', image: 'https://placehold.co/150x150/4682B4/FFFFFF?text=JB' },
  { name: 'Christine Eve', role: 'Designer', image: 'https://placehold.co/150x150/32CD32/FFFFFF?text=CE' },
];

const blogPosts = [
  {
    title: 'How to use React for building scalable web apps',
    image: 'https://placehold.co/400x250/ADD8E6/000000?text=React+App',
    date: 'July 1, 2024',
    link: '#',
  },
  {
    title: 'Understanding the power of Tailwind CSS',
    image: 'https://placehold.co/400x250/90EE90/000000?text=Tailwind+CSS',
    date: 'June 25, 2024',
    link: '#',
  },
  {
    title: 'The future of AI in web development',
    image: 'https://placehold.co/400x250/FFB6C1/000000?text=AI+Future',
    date: 'June 18, 2024',
    link: '#',
  },
];

const AboutUs = () => {
  const statsRef = useRef(null); // Ref for the stats section container
  const skillBarsRefs = useRef([]); // Ref to hold an array of skill bar elements

  // GSAP animation for stats counter and skill bars
  useEffect(() => {
    // Ensure all previous ScrollTriggers are killed before setting up new ones
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // Use a setTimeout to ensure DOM elements are fully rendered before querying
    const timer = setTimeout(() => {
      // --- Stats Counter Animation ---
      if (statsRef.current) {
        const counters = statsRef.current.querySelectorAll('.stat-value');
        counters.forEach(counter => {
          const targetValue = parseInt(counter.dataset.target);
          const isPlus = counter.dataset.plus === 'true';
          const obj = { val: 0 };

          gsap.to(obj, {
            val: targetValue,
            duration: 2,
            ease: "power1.out",
            snap: { val: 1 },
            scrollTrigger: {
              trigger: counter,
              start: "top 80%",
              toggleActions: "play none none none",
              once: true,
            },
            onUpdate: function () {
              counter.textContent = isPlus ? `+${Math.round(obj.val)}` : `${Math.round(obj.val)}`;
            },
            onComplete: function () {
              counter.textContent = isPlus ? `+${targetValue}` : `${targetValue}`;
            }
          });
        });
      }

      // --- Skill Bars Animation ---
      skillBarsRefs.current.forEach((bar, idx) => {
        if (bar) {
          const targetWidth = parseFloat(bar.dataset.targetWidth);
          gsap.fromTo(bar,
            { width: '0%' }, // Start from 0% width
            {
              width: `${targetWidth}%`, // Animate to the target percentage width
              duration: 1.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: bar,
                start: "top 85%", // When the top of the bar enters 85% of the viewport
                toggleActions: "play none none none",
                once: true,
                // markers: true, // Uncomment for debugging
              }
            }
          );
        }
      });

      // Refresh ScrollTrigger after all animations are set up
      ScrollTrigger.refresh();
    }, 100); // Small delay to ensure DOM is ready

    // Add event listener for window resize to refresh ScrollTrigger
    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', handleResize);

    // Cleanup function for setTimeout and event listener
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <main className="bg-white min-h-screen font-inter">
      {/* Hero/Header Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center text-white overflow-hidden bg-gradient-to-br from-blue-700 to-purple-600">
        {/* Background Shapes/Graphics (simulating the screenshot) */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute w-96 h-96 bg-white rounded-full -top-20 -left-20 opacity-10"
        ></motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute w-72 h-72 bg-white rounded-full -bottom-10 -right-10 opacity-10"
        ></motion.div>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">About Us</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto px-4">
            Learn more about Peptides Knowledge Park, our mission, vision, and the dedicated team behind our success.
          </p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-b from-blue-900 to-blue-700 py-16 px-4 text-white text-center -mt-16 relative z-20 rounded-t-3xl md:rounded-t-[50px] shadow-lg">
        <div ref={statsRef} className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center p-6 rounded-xl bg-white/10 backdrop-blur-md shadow-xl hover:bg-white/20 transition-all duration-300 ease-in-out cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <div
                className="text-5xl font-bold text-purple-200 mb-2 stat-value"
                data-target={parseInt(stat.value.replace('+', ''))}
                data-plus={stat.value.includes('+') ? 'true' : 'false'}
              >
                {stat.value.includes('+') ? `+0` : `0`} {/* Initial display before animation */}
              </div>
              <div className="text-base text-purple-100">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core About Section (Image & Skills) */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 py-20 px-4 items-center">
        <motion.div
          className="flex items-center justify-center relative"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://placehold.co/600x400/DDA0DD/FFFFFF?text=About+Us+Image"
            alt="About us"
            className="rounded-3xl shadow-2xl w-full max-w-lg object-cover transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out"
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/DDA0DD/FFFFFF?text=Image+Load+Error'; }}
          />
          <motion.div
            className="absolute -bottom-8 -left-8 w-40 h-40 bg-blue-500 rounded-full opacity-70 blur-xl"
            animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          ></motion.div>
        </motion.div>
        <motion.div
          className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 flex flex-col justify-center"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-sm text-blue-600 tracking-widest uppercase mb-3 font-semibold">About Us</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">We deal With The Aspects Of Professional IT Services</h2>
          <p className="text-gray-700 mb-8 text-lg leading-relaxed">Peptides Knowledge Park is the partner of choice for many of the world's leading enterprises, SMEs and technology challengers. We help businesses elevate their value through custom software development, product design, and strategic consulting.</p>
          <div className="space-y-6">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                className="group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }} /* Retained 0.5 for parent div */
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-lg font-medium text-blue-800">{skill.name}</span>
                  <span className="text-lg font-bold text-blue-800">{skill.value}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  {/* Using a regular div with a ref for GSAP animation */}
                  <div
                    ref={el => skillBarsRefs.current[idx] = el}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full"
                    style={{ width: `0%` }} // Set initial width to 0% for GSAP to animate from
                    data-target-width={skill.value} // Store target width for GSAP
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto py-20 px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-sm text-purple-600 tracking-widest uppercase font-semibold">Our Dedicated Team</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-6 leading-tight">Discover Our Trustworthy Team<br />and Experts</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">Meet the brilliant minds and passionate individuals who drive innovation and excellence at Peptides Knowledge Park.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              className="relative flex flex-col items-center bg-white rounded-3xl shadow-xl p-6 overflow-hidden group cursor-pointer border border-gray-100 hover:border-blue-500 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <div className="relative w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-blue-400 group-hover:border-purple-500 transition-colors duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300 ease-out"
                  onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/150x150/CCCCCC/000000?text=User'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2">
                  <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">View Profile</span>
                </div>
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-1 group-hover:text-blue-700 transition-colors duration-300">{member.name}</h3>
              <p className="text-sm text-gray-600 group-hover:text-purple-600 transition-colors duration-300">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Client Feedback Section */}
      <section className="bg-gradient-to-r from-blue-100 to-purple-100 py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img // Changed to motion.img
              src="https://placehold.co/200x200/FFD700/000000?text=Client+1"
              alt="Client testimonial"
              className="rounded-2xl w-48 h-48 object-cover shadow-xl transform hover:scale-105 transition-transform duration-300"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/200x200/CCCCCC/000000?text=Client'; }}
              // Add floating animation
              animate={{ y: [0, -20, 0, 20, 0] }} // Increased vertical movement
              transition={{
                duration: 4.5, // Slightly faster duration
                repeat: Infinity, // Repeat indefinitely
                repeatType: "reverse", // Go up then down
                ease: "easeInOut", // Smooth easing
              }}
            />
            <motion.img // Changed to motion.img
              src="https://placehold.co/200x200/FF6347/000000?text=Client+2"
              alt="Client testimonial"
              className="rounded-2xl w-48 h-48 object-cover shadow-xl ml-8 mt-8 transform hover:scale-105 transition-transform duration-300"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/200x200/CCCCCC/000000?text=Client'; }}
              // Add floating animation with a slight delay for variation
              animate={{ y: [0, 20, 0, -20, 0] }} // Increased vertical movement, starting slightly down
              transition={{
                duration: 5, // Different duration
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
                delay: 0.2, // Slight delay
              }}
            />
            <motion.img // Changed to motion.img
              src="https://placehold.co/200x200/6A5ACD/000000?text=Client+3"
              alt="Client testimonial"
              className="rounded-2xl w-48 h-48 object-cover shadow-xl transform hover:scale-105 transition-transform duration-300"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/200x200/CCCCCC/000000?text=Client'; }}
              // Add floating animation with another slight delay
              animate={{ y: [0, -15, 0, 15, 0] }} // Moderate vertical movement
              transition={{
                duration: 4.8, // Another duration
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
                delay: 0.4, // Another delay
              }}
            />
          </motion.div>
          <motion.div
            className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-sm text-blue-600 tracking-widest uppercase mb-3 font-semibold">Client Feedback</span>
            <h3 className="text-3xl font-extrabold text-gray-900 mb-6 mt-2 leading-tight">What Our Clients Say About Us</h3>
            <p className="text-gray-700 mb-8 text-lg leading-relaxed italic">"Peptides Knowledge Park has been an invaluable partner. Their expertise in software development and commitment to our project's success exceeded all expectations. Highly recommended!"</p>
            <div className="flex items-center gap-4 mt-6">
              <img
                src="https://placehold.co/60x60/48D1CC/000000?text=JD"
                alt="Client Name"
                className="w-16 h-16 rounded-full object-cover border-2 border-blue-400"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/60x60/CCCCCC/000000?text=User'; }}
              />
              <div>
                <div className="font-bold text-xl text-gray-900">Jane Doe</div>
                <div className="text-sm text-gray-600">CEO, Tech Innovators</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Here's What's Happening / Blog Section */}
      <section className="max-w-7xl mx-auto py-20 px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-sm text-purple-600 tracking-widest uppercase font-semibold">Latest Insights</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-6 leading-tight">Here's What's Happening<br />in Our World</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">Stay updated with our latest news, articles, and industry insights.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-3xl shadow-xl overflow-hidden group cursor-pointer border border-gray-100 hover:border-purple-500 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ scale: 1.03, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1), 0 8px 16px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                  onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x250/CCCCCC/000000?text=Blog+Image'; }}
                />
              </div>
              <div className="p-6">
                <span className="text-xs text-gray-500 mb-2 block">{post.date}</span>
                <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">{post.title}</h3>
                <Link to={post.link} className="text-blue-600 font-semibold hover:underline flex items-center">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact/CTA Section (Placeholder based on screenshot) */}
      <section className="bg-gradient-to-br from-blue-700 to-purple-600 py-20 px-4 text-white text-center rounded-t-3xl md:rounded-t-[50px] shadow-lg">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Ready to Elevate Your Research?
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl max-w-3xl mx-auto mb-10 opacity-90"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Contact us today to discuss your project and discover how Peptides Knowledge Park can support your goals.
        </motion.p>
        <motion.button
          className="bg-white text-blue-700 font-bold py-4 px-10 rounded-full text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          onClick={() => window.location.href = '/contact'}
        >
          Get in Touch
        </motion.button>
      </section>
    </main>
  );
};

export default AboutUs;
