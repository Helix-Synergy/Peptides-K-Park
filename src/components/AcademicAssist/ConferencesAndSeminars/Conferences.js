// // src/components/AcademicAssist/ConferencesAndSeminars/Conferences.js
// import React from 'react';
// import AutoScrollingCarousel from './AutoScrollingCarousel';

// const Conferences = ({ hybridData, webinarData }) => {
//     return (
//         <div>
//             {/* Hybrid Events Carousel Section */}
//             <div
//                 className="py-16 text-white relative overflow-hidden"
//                 style={{
//                     background: "linear-gradient(to right, #dfdfdfff, #d8ffccff)",
//                     borderRadius: "0px",
//                     border: "1px solid rgba(217, 254, 224, 0.1)",
//                     boxShadow: "0 8px 32px 0 rgba(10, 46, 16, 0.55)",
//                     backdropFilter: "blur(15px)",
//                     WebkitBackdropFilter: "blur(15px)",
//                     overflow: "hidden",
//                 }}
//             >
//                 <AutoScrollingCarousel
//                     data={hybridData}
//                     speed={50}
//                     direction="left"
//                     title="Upcoming Hybrids"
//                 />
//             </div>

//             {/* Webinars Carousel Section */}
//             <div
//                 className="py-16 text-white relative overflow-hidden mt-8"
//                 style={{
//                     background: "linear-gradient(to right, #f9ebacff, #ffffe4ff)",
//                     borderRadius: "0px",
//                     border: "1px solid rgba(255, 255, 255, 0.1)",
//                     boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.5)",
//                     backdropFilter: "blur(15px)",
//                     WebkitBackdropFilter: "blur(15px)",
//                     overflow: "hidden",
//                 }}
//             >
//                 <AutoScrollingCarousel
//                     data={webinarData}
//                     speed={55}
//                     direction="right"
//                     title="Upcoming Webinars"
//                 />
//             </div>
//         </div>
//     );
// };

// export default Conferences;