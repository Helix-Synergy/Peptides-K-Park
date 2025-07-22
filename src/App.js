import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import React, { useRef, useEffect, useState } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Navbar from './components/Navbar';
import AdvisoryCouncilDropdown from './components/AdvisoryCouncil/AdvisoryCouncilDropdown';
import AboutAdvisoryBoard from './components/AdvisoryCouncil/AboutAdvisoryBoard';
import OurAdvisoryCouncil from './components/AdvisoryCouncil/OurAdvisoryCouncil';
import BecomeAMember from './components/AdvisoryCouncil/BecomeAMember';
import AcademicAssistDropdown from './components/AcademicAssist/AcademicAssistDropdown';
import AcademicProjects from './components/AcademicAssist/AcademicProjects';
import Seminars from './components/AcademicAssist/Seminars';
import Workshops from './components/AcademicAssist/Workshops';
import TechTalks from './components/AcademicAssist/TechTalks';
import ResearchAssistanceThesisSupport from './components/AcademicAssist/ResearchAssistanceThesisSupport';
import FacultyUpskillingService from './components/AcademicAssist/FacultyUpskillingService';
import ELearnDigitalLearning from './components/AcademicAssist/ELearnDigitalLearning';
import CorporateAstuteDropdown from './components/CorporateAstute/CorporateAstuteDropdown';
import CorporateCollaborations from './components/CorporateAstute/CorporateCollaborations';
import CorporateSupportServices from './components/CorporateAstute/CorporateSupportServices';
import StackUp from './components/CorporateAstute/StackUp';
import CareerSagaDropdown from './components/CareerSaga/CareerSagaDropdown';
import CareerCoach from './components/CareerSaga/CareerCoach';
import JobMate from './components/CareerSaga/JobMate';
import PeptidesAssistanceMembership from './components/CareerSaga/PeptidesAssistanceMembership';
import Hero from './sections/Hero';
import ScrollToTopButton from './components/ScrollToTopButton';
import ServiceSlider from './sections/ServiceSlider';
import Chatbot from './components/ui/Chatbot';
import AboutSection from './sections/AboutSection';
import WhyChooseUsSection from './sections/WhyChooseUsSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';
import ServicesWeServe from './sections/ServicesWeServe';
import AboutUs from './pages/AboutUs';
import advisoryData from './pages/advisoryCouncilData.json';

// Data fetcher for AdvisoryCouncilDropdown
const fetchAdvisoryCouncilData = async (pageType) => {
  // You can expand this logic to fetch different data for different page types
  // For now, return the whole JSON for all page types
  return advisoryData;
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const scrollRef = useRef(null);
  const [locomotive, setLocomotive] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const LocomotiveScroll = require('locomotive-scroll').default;
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });
    setLocomotive(scroll);
    return () => {
      scroll.destroy();
    };
  }, []);

  useEffect(() => {
    if (locomotive) {
      locomotive.scrollTo(0, { duration: 0, disableLerp: true });
    }
  }, [location, locomotive]);

  return (
    <>
      <Navbar />
      <div ref={scrollRef} data-scroll-container>
        <Routes>
          <Route path="/" element={<><Hero /><AboutSection /><WhyChooseUsSection /><ServiceSlider /> <ServicesWeServe/> <ContactSection /></>} />
          <Route path='/about-us' element={<AboutUs />} />
          {/* Advisory Council */}
          <Route path="/advisory-council" element={<AdvisoryCouncilDropdown pageType="advisory-council" dataFetcher={fetchAdvisoryCouncilData} />} />
          <Route path="/advisory-council/:pageType" element={<AdvisoryCouncilDropdown dataFetcher={fetchAdvisoryCouncilData} />} />
          <Route path="/about-advisory-board" element={<AboutAdvisoryBoard />} />
          <Route path="/our-advisory-council" element={<OurAdvisoryCouncil />} />
          <Route path="/become-a-member" element={<BecomeAMember />} />
          {/* Academic Assist */}
          <Route path="/academic-assist" element={<AcademicAssistDropdown locomotive={locomotive} />} />
          <Route path="/academic-projects" element={<AcademicProjects />} />
          <Route path="/seminars" element={<Seminars />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/tech-talks" element={<TechTalks />} />
          <Route path="/research-assistance-thesis-support" element={<ResearchAssistanceThesisSupport />} />
          <Route path="/faculty-upskilling-service" element={<FacultyUpskillingService />} />
          <Route path="/e-learn-digital-learning" element={<ELearnDigitalLearning />} />
          {/* Corporate Astute */}
          <Route path="/corporate-astute" element={<CorporateAstuteDropdown />} />
          <Route path="/corporate-collaborations" element={<CorporateCollaborations />} />
          <Route path="/corporate-support-services" element={<CorporateSupportServices />} />
          <Route path="/stackup" element={<StackUp />} />
          {/* Career Saga */}
          <Route path="/career-saga" element={<CareerSagaDropdown />} />
          <Route path="/career-coach" element={<CareerCoach />} />
          <Route path="/job-mate" element={<JobMate />} />
          <Route path="/peptides-assistance-membership" element={<PeptidesAssistanceMembership />} />
        </Routes>
        <ScrollToTopButton locomotive={locomotive} />
        <Chatbot />
        <Footer />
      </div>
    </>
  );
}

export default App;









// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import React, { useRef, useEffect, useState } from 'react';
// import LocomotiveScroll from 'locomotive-scroll';
// import 'locomotive-scroll/dist/locomotive-scroll.css';
// import Navbar from './components/Navbar';
// // AdvisoryCouncilDropdown is a component for Navbar, not a page route
// import AboutAdvisoryBoard from './components/AdvisoryCouncil/AboutAdvisoryBoard';
// import OurAdvisoryCouncil from './components/AdvisoryCouncil/OurAdvisoryCouncil';
// import BecomeAMember from './components/AdvisoryCouncil/BecomeAMember'; // This will be your contact page later
// import AcademicAssistDropdown from './components/AcademicAssist/AcademicAssistDropdown';
// import AcademicProjects from './components/AcademicAssist/AcademicProjects';
// import Seminars from './components/AcademicAssist/Seminars';
// import Workshops from './components/AcademicAssist/Workshops';
// import TechTalks from './components/AcademicAssist/TechTalks';
// import ResearchAssistanceThesisSupport from './components/AcademicAssist/ResearchAssistanceThesisSupport';
// import FacultyUpskillingService from './components/AcademicAssist/FacultyUpskillingService';
// import ELearnDigitalLearning from './components/AcademicAssist/ELearnDigitalLearning';
// import CorporateAstuteDropdown from './components/CorporateAstute/CorporateAstuteDropdown';
// import CorporateCollaborations from './components/CorporateAstute/CorporateCollaborations';
// import CorporateSupportServices from './components/CorporateAstute/CorporateSupportServices';
// import StackUp from './components/CorporateAstute/StackUp';
// import CareerSagaDropdown from './components/CareerSaga/CareerSagaDropdown';
// import CareerCoach from './components/CareerSaga/CareerCoach';
// import JobMate from './components/CareerSaga/JobMate';
// import PeptidesAssistanceMembership from './components/CareerSaga/PeptidesAssistanceMembership';
// import Hero from './sections/Hero';
// import ScrollToTopButton from './components/ScrollToTopButton';
// import ServiceSlider from './sections/ServiceSlider';
// import Chatbot from './components/ui/Chatbot';
// import AboutSection from './sections/AboutSection';
// import WhyChooseUsSection from './sections/WhyChooseUsSection';
// import ContactSection from './sections/ContactSection';
// import Footer from './components/Footer';
// import ServicesWeServe from './sections/ServicesWeServe';
// import AboutUs from './pages/AboutUs';
// // No need to import advisoryData.json directly here, it's imported in AdvisoryContentDisplay.jsx

// // GSAP ScrollTrigger plugin registration (ensure this is done once globally)
// // If not already done in an index.js or similar, consider adding it here:
// // import { gsap } from 'gsap';
// // import { ScrollTrigger } from 'gsap/ScrollTrigger';
// // gsap.registerPlugin(ScrollTrigger);

// function App() {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// }

// function AppContent() {
//   const scrollRef = useRef(null);
//   const [locomotive, setLocomotive] = useState(null);
//   const location = useLocation();

//   useEffect(() => {
//     // Crucial: Disable default browser scrolling on html and body
//     // This ensures Locomotive Scroll takes full control.
//     document.documentElement.style.overflow = 'hidden';
//     document.body.style.overflow = 'hidden';

//     const initializeLocomotiveScroll = async () => {
//       // Dynamically import LocomotiveScroll to ensure it runs client-side
//       const LocomotiveScrollModule = await import('locomotive-scroll');
//       const LocomotiveScroll = LocomotiveScrollModule.default;

//       const scroll = new LocomotiveScroll({
//         el: scrollRef.current,
//         smooth: true,
//         // Add other LocomotiveScroll options as needed
//       });
//       setLocomotive(scroll);

//       // Cleanup function for LocomotiveScroll
//       return () => {
//         if (scroll) {
//           scroll.destroy();
//         }
//         // Re-enable default scrolling on cleanup to prevent issues if component unmounts
//         document.documentElement.style.overflow = '';
//         document.body.style.overflow = '';
//       };
//     };

//     initializeLocomotiveScroll();

//     // Cleanup for GSAP ScrollTriggers (if used in other components)
//     // This is good practice for hot reloading in development
//     return () => {
//       // Only kill if ScrollTrigger is actually registered and used
//       // if (typeof ScrollTrigger !== 'undefined') {
//       //   ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//       // }
//     };
//   }, []); // Empty dependency array means this effect runs once on mount

//   useEffect(() => {
//     if (locomotive) {
//       // Scroll to top on route change
//       locomotive.scrollTo(0, { duration: 0, disableLerp: true });
//     }
//   }, [location, locomotive]);

//   return (
//     <>
//       <Navbar />
//       {/* This div will be the scroll container for Locomotive Scroll */}
//       {/* It should take up the remaining viewport height and handle its own overflow */}
//       <div ref={scrollRef} data-scroll-container className="relative h-screen w-full overflow-hidden">
//         {/* This div adds padding to push content below the fixed Navbar */}
//         {/* Adjust 'pt-[80px]' based on your Navbar's actual height to avoid content overlap */}
//         <div className="pt-[80px]">
//           <Routes>
//             <Route path="/" element={<><Hero /><AboutSection /><WhyChooseUsSection /><ServiceSlider /> <ServicesWeServe/> <ContactSection /></>} />
//             <Route path='/about-us' element={<AboutUs />} />

//             {/* Advisory Council Routes - These are the actual pages */}
//             <Route path="/about-advisory-board" element={<AboutAdvisoryBoard />} />
//             <Route path="/our-advisory-council" element={<OurAdvisoryCouncil />} />
//             <Route path="/become-a-member" element={<BecomeAMember />} /> {/* This will be your contact page later */}

//             {/* Academic Assist Routes */}
//             <Route path="/academic-assist" element={<AcademicAssistDropdown />} />
//             <Route path="/academic-projects" element={<AcademicProjects />} />
//             <Route path="/seminars" element={<Seminars />} />
//             <Route path="/workshops" element={<Workshops />} />
//             <Route path="/tech-talks" element={<TechTalks />} />
//             <Route path="/research-assistance-thesis-support" element={<ResearchAssistanceThesisSupport />} />
//             <Route path="/faculty-upskilling-service" element={<FacultyUpskillingService />} />
//             <Route path="/e-learn-digital-learning" element={<ELearnDigitalLearning />} />

//             {/* Corporate Astute Routes */}
//             <Route path="/corporate-astute" element={<CorporateAstuteDropdown />} />
//             <Route path="/corporate-collaborations" element={<CorporateCollaborations />} />
//             <Route path="/corporate-support-services" element={<CorporateSupportServices />} />
//             <Route path="/stackup" element={<StackUp />} />

//             {/* Career Saga Routes */}
//             <Route path="/career-saga" element={<CareerSagaDropdown />} />
//             <Route path="/career-coach" element={<CareerCoach />} />
//             <Route path="/job-mate" element={<JobMate />} />
//             <Route path="/peptides-assistance-membership" element={<PeptidesAssistanceMembership />} />
//           </Routes>
//           <ScrollToTopButton locomotive={locomotive} />
//           <Chatbot />
//           <Footer />
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
