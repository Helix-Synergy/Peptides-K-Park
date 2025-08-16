// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import React, { useRef, useEffect, useState } from 'react';
// import LocomotiveScroll from 'locomotive-scroll';
// import 'locomotive-scroll/dist/locomotive-scroll.css';
// import Navbar from './components/Navbar';
// import AdvisoryCouncilDropdown from './components/AdvisoryCouncil/AdvisoryCouncilDropdown';
// import AboutAdvisoryBoard from './components/AdvisoryCouncil/AboutAdvisoryBoard';
// import OurAdvisoryCouncil from './components/AdvisoryCouncil/OurAdvisoryCouncil';
// import BecomeAMember from './components/AdvisoryCouncil/BecomeAMember';
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
// import advisoryData from './pages/advisoryCouncilData.json';

// // Data fetcher for AdvisoryCouncilDropdown
// const fetchAdvisoryCouncilData = async (pageType) => {
//   // You can expand this logic to fetch different data for different page types
//   // For now, return the whole JSON for all page types
//   return advisoryData;
// };

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
//     const LocomotiveScroll = require('locomotive-scroll').default;
//     const scroll = new LocomotiveScroll({
//       el: scrollRef.current,
//       smooth: true,
//     });
//     setLocomotive(scroll);
//     return () => {
//       scroll.destroy();
//     };
//   }, []);

//   useEffect(() => {
//     if (locomotive) {
//       locomotive.scrollTo(0, { duration: 0, disableLerp: true });
//     }
//   }, [location, locomotive]);

//   return (
//     <>
//       <Navbar />
//       <div ref={scrollRef} data-scroll-container>
//         <Routes>
//           <Route path="/" element={<><Hero /><AboutSection /><WhyChooseUsSection /><ServiceSlider /> <ServicesWeServe/> <ContactSection /></>} />
//           <Route path='/about-us' element={<AboutUs />} />
//           {/* Advisory Council */}
//           <Route path="/advisory-council" element={<AdvisoryCouncilDropdown pageType="advisory-council" dataFetcher={fetchAdvisoryCouncilData} />} />
//           <Route path="/advisory-council/:pageType" element={<AdvisoryCouncilDropdown dataFetcher={fetchAdvisoryCouncilData} />} />
//           <Route path="/about-advisory-board" element={<AboutAdvisoryBoard />} />
//           <Route path="/our-advisory-council" element={<OurAdvisoryCouncil />} />
//           <Route path="/become-a-member" element={<BecomeAMember />} />
//           {/* Academic Assist */}
//           <Route path="/academic-assist" element={<AcademicAssistDropdown locomotive={locomotive} />} />
//           <Route path="/academic-projects" element={<AcademicProjects />} />
//           <Route path="/seminars" element={<Seminars />} />
//           <Route path="/workshops" element={<Workshops />} />
//           <Route path="/tech-talks" element={<TechTalks />} />
//           <Route path="/research-assistance-thesis-support" element={<ResearchAssistanceThesisSupport />} />
//           <Route path="/faculty-upskilling-service" element={<FacultyUpskillingService />} />
//           <Route path="/e-learn-digital-learning" element={<ELearnDigitalLearning />} />
//           {/* Corporate Astute */}
//           <Route path="/corporate-astute" element={<CorporateAstuteDropdown />} />
//           <Route path="/corporate-collaborations" element={<CorporateCollaborations />} />
//           <Route path="/corporate-support-services" element={<CorporateSupportServices />} />
//           <Route path="/stackup" element={<StackUp />} />
//           {/* Career Saga */}
//           <Route path="/career-saga" element={<CareerSagaDropdown />} />
//           <Route path="/career-coach" element={<CareerCoach />} />
//           <Route path="/job-mate" element={<JobMate />} />
//           <Route path="/peptides-assistance-membership" element={<PeptidesAssistanceMembership />} />
//           {/* Contact Page*/}
//           <Route path="/contact" element={<ContactSection />} />
//         </Routes>
//         <ScrollToTopButton locomotive={locomotive} />
//         <Chatbot />
//         <Footer />
//       </div>
//     </>
//   );
// }

// export default App;







// src/App.js
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import React, { useRef, useEffect, useState } from 'react';
import LocomotiveScroll from 'locomotive-scroll'; // Changed to standard import
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
    // Ensure LocomotiveScroll is only initialized once
    if (scrollRef.current && !locomotive) {
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        tablet: {
          smooth: false, // Disable smooth scroll on tablets, use native scrolling
          breakpoint: 1024,
        },
        mobile: {
          smooth: false, // Disable smooth scroll on mobiles, use native scrolling
          breakpoint: 768,
        },
        // Add `lerp` for more control over smoothness if needed (e.g., lerp: 0.08)
        // Add `getDirection: true` and `getSpeed: true` if you plan to use these events
      });
      setLocomotive(scroll);

      // Initial update to ensure all elements are registered
      scroll.update();
    }

    // Cleanup: Destroy Locomotive Scroll instance on component unmount
    return () => {
      if (locomotive) {
        locomotive.destroy();
        setLocomotive(null); // Clear state to allow re-initialization if needed
      }
    };
  }, [locomotive]); // Dependency on `locomotive` state to prevent re-initialization issues

  useEffect(() => {
    // Scroll to top on route change, ensuring Locomotive Scroll instance exists
    if (locomotive) {
      // Update Locomotive Scroll after route changes to recalculate element positions
      // This is crucial for correct scrolling and active state detection.
      locomotive.update();
      // Scroll to the top of the new page instantly
      locomotive.scrollTo(0, { duration: 0, disableLerp: true });
    }
  }, [location, locomotive]); // Trigger when location or locomotive instance changes

  return (
    <>
      <Navbar />
      {/* The data-scroll-container is the main element Locomotive Scroll manages */}
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
          {/* Pass the locomotive instance to AcademicAssistDropdown */}
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
          {/* Contact Page - Added this route to match Navbar link */}
          <Route path="/contact" element={<ContactSection />} />
        </Routes>
        <ScrollToTopButton locomotive={locomotive} />
        <Chatbot />
        {/* Footer is inside data-scroll-container, so it will scroll with content */}
        {/* If you want Footer to be fixed, it needs to be outside data-scroll-container */}
        <Footer />
      </div>
    </>
  );
}

export default App;