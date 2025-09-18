// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import React from "react";
// // These are your existing page components
// import AboutUs from "./pages/AboutUs";
// import Gallery from "./pages/Gallery";
// import Layout from "./layout/Layout";
// import Hero from "./sections/Hero";
// import ServiceSlider from "./sections/ServiceSlider";
// import AboutSection from "./sections/AboutSection";
// import WhyChooseUsSection from "./sections/WhyChooseUsSection";
// import ContactSection from "./components/ContactSection/ContactSection";
// import CollaborationSection from "./sections/CollaborationSection";
// import HomeContactSection from "./sections/HomeContactSection";
// import ActivitiesBenefitsPage from "./components/AdvisoryCouncil/ActivitiesBenefitsPage";

// // Components for Panel of Experts (POE)
// import AboutAdvisoryBoard from "./components/AdvisoryCouncil/AboutAdvisoryBoard";
// import OurAdvisoryCouncil from "./components/AdvisoryCouncil/OurAdvisoryCouncil";
// import BecomeAMemberComp from "./components/AdvisoryCouncil/BecomeAMember";

// // Components for Academic Assist
// import AcademicAssistDropdown from "./components/AcademicAssist/AcademicAssistDropdown";
// import AcademicProjects from "./components/AcademicAssist/AcademicProjects";
// import ConferencesSeminars from "./components/AcademicAssist/ConferencesAndSeminars/ConferencesSeminars";
// import Workshops from "./components/AcademicAssist/Workshops";
// import TechTalks from "./components/AcademicAssist/TechTalks";
// import ResearchAssistanceThesisSupport from "./components/CorporateAstute/ResearchAssistanceThesisSupport";
// import FacultyUpskillingService from "./components/CorporateAstute/FacultyUpskillingService";
// import ELearnDigitalLearning from "./components/AcademicAssist/ELearnDigitalLearning";
// import Publications from "./components/AcademicAssist/Publications";
// import Internships from "./components/AcademicAssist/Internships";
// import SkillDevelopment from "./components/AcademicAssist/SkillDevelopment";
// import IndustrialTours from "./components/AcademicAssist/IndustrialTours";
// import CERT from "./components/AcademicAssist/cert";

// // Components for Corporate Astute
// import CorporateAstuteDropdown from "./components/CorporateAstute/CorporateAstuteDropdown";
// import CorporateCollaborations from "./components/CorporateAstute/CorporateCollaborations";
// import ContractResearchServices from "./components/CorporateAstute/ContractResearchServices";
// import AnalyticAssessmentServices from "./components/CorporateAstute/AnalyticAssessmentServices";
// import StackUp from "./components/CorporateAstute/StackUp";
// import MemberDetailPage from "./components/AdvisoryCouncil/MemberDetailPage";

// import AcademicCollaborations from "./components/Collaborations/AcademicCollaborations";
// import IndustrialCollaborations from "./components/Collaborations/IndustrialCollaborations";
// import CollaborationForm from "./components/Collaborations/CollaborationForm";
// import AcademicDetail from "./components/Collaborations/AcademicCollaborationDetail";
// import IndustrialDetail from "./components/Collaborations/IndustrialCollaborationDetail";

// // Components for Career Saga
// import CareerSagaDropdown from "./components/CareerSaga/CareerSagaDropdown";
// import CareerCoach from "./components/CareerSaga/CareerCoach";
// import JobMate from "./components/CareerSaga/JobMate";
// import PeptidesAssistanceMembership from "./components/CareerSaga/PeptidesAssistanceMembership";
// import AdvancedIndustrialReach from "./components/CareerSaga/AdvancedIndustrialReach";

// // Placeholder for new or unassigned pages
// const PagePlaceholder = ({ pageName }) => (
//   <div style={{ padding: "20px", textAlign: "center" }}>
//     <h2>{pageName} Page</h2>
//     <p>This is a placeholder page. Please create the actual component.</p>
//   </div>
// );

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route element={<Layout />}>
//           {/* Main Pages */}
//           <Route
//             path="/"
//             element={
//               <>
//                 <Hero />
//                 <AboutSection />
//                 <WhyChooseUsSection />
//                 <CollaborationSection />
//                 <ServiceSlider />
//                 <HomeContactSection />
//               </>
//             }
//           />
//           <Route path="/about-us" element={<AboutUs />} />
//           <Route path="/contact" element={<ContactSection />} />
//           <Route path="/gallery" element={<Gallery />} />
//           <Route
//             path="/contact/register-student"
//             element={<ContactSection />}
//           />
//           <Route
//             path="/contact/register-faculty"
//             element={<ContactSection />}
//           />

//           {/* Panel of Experts (POE) Routes - Mapped from old Advisory Council */}
//           <Route
//             path="/panel-of-experts/about-advisory-board"
//             element={<AboutAdvisoryBoard />}
//           />
//           <Route
//             path="/panel-of-experts/subject-matter-experts"
//             element={<OurAdvisoryCouncil />}
//           />
//           <Route
//             path="/panel-of-experts/become-a-member"
//             element={<BecomeAMemberComp />}
//           />
//           <Route
//             path="/panel-of-experts/activities-benefits"
//             element={<ActivitiesBenefitsPage pageType="activities" />}
//           />

//           {/* Academic Assist Routes */}
//           <Route path="/academic-assist" element={<AcademicAssistDropdown />} />
//           <Route
//             path="/academic-assist/projects"
//             element={<AcademicProjects />}
//           />
//           <Route
//             path="/academic-assist/conferences"
//             element={<ConferencesSeminars />}
//           />
//           <Route path="/academic-assist/workshops" element={<Workshops />} />
//           <Route
//             path="/academic-assist/internships"
//             element={<Internships />}
//           />
//           <Route
//             path="/academic-assist/publications"
//             element={<Publications />}
//           />
//           <Route
//             path="/academic-assist/skill-development"
//             element={<SkillDevelopment />}
//           />
//           <Route
//             path="/academic-assist/industrial-tours"
//             element={<IndustrialTours />}
//           />
//           <Route
//             path="/academic-assist/e-learn"
//             element={<ELearnDigitalLearning />}
//           />
//           <Route path="/academic-assist/cert" element={<CERT />} />

//           {/* Corporate Astute Routes */}
//           <Route
//             path="/corporate-astute"
//             element={<CorporateAstuteDropdown />}
//           />
//           <Route
//             path="/corporate-astute/aas"
//             element={<AnalyticAssessmentServices />}
//           />
//           <Route
//             path="/corporate-astute/crs"
//             element={<ContractResearchServices />}
//           />
//           <Route
//             path="/corporate-astute/fuss"
//             element={<FacultyUpskillingService />}
//           />
//           <Route
//             path="/corporate-astute/raws"
//             element={<ResearchAssistanceThesisSupport />}
//           />

//           {/* Career Saga Routes */}
//           <Route path="/career-saga" element={<CareerSagaDropdown />} />
//           <Route path="/career-saga/jot" element={<CareerCoach />} />
//           <Route path="/career-saga/plast" element={<JobMate />} />
//           <Route
//             path="/career-saga/air"
//             element={<AdvancedIndustrialReach />}
//           />
//           <Route
//             path="/career-saga/pam"
//             element={<PeptidesAssistanceMembership />}
//           />

//           <Route
//             path="/collaborations/academic"
//             element={<AcademicCollaborations />}
//           />
//           <Route
//             path="/collaborations/industry"
//             element={<IndustrialCollaborations />}
//           />
//           <Route
//             path="/collaborations/collab-peptides"
//             element={<CollaborationForm />}
//           />
//           <Route path="/academic/:id" element={<AcademicDetail />} />
//           <Route path="/industry/:id" element={<IndustrialDetail />} />

//           {/* Careers Routes */}
//           <Route
//             path="/careers"
//             element={<PagePlaceholder pageName="Careers" />}
//           />
//           <Route
//             path="/careers/jobs"
//             element={<PagePlaceholder pageName="Jobs @ Peptides" />}
//           />
//           <Route
//             path="/careers/post-job"
//             element={<PagePlaceholder pageName="Post a Job with Peptides" />}
//           />

//           <Route
//             path="/panel-of-experts/member/:id"
//             element={<MemberDetailPage />}
//           />

//           {/* Wildcard route for any undefined paths */}
//           <Route
//             path="*"
//             element={<PagePlaceholder pageName="404 - Page Not Found" />}
//           />
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Placeholder components to make the app self-contained in a single file
const PlaceholderPage = ({ pageName }) => (
  <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6 text-center animate-fadeIn">
    <div className="w-24 h-24 mb-6 text-blue-500 animate-pulse">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-compass"
      >
        <path d="M14 2L2 14V22H10L22 10V2H14ZM14 2H22M14 2V10M10 14V22M10 14H2M2 14V22"></path>
        <path d="M12 12L22 22"></path>
      </svg>
    </div>
    <h1 className="text-4xl md:text-5xl font-bold mb-4">
      {pageName} Coming Soon
    </h1>
    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-8">
      We're working hard to bring you this new page. Stay tuned for exciting
      updates!
    </p>
    <div className="flex space-x-4">
      <a
        href="/"
        className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
      >
        Go Home
      </a>
    </div>
  </div>
);

// All components must be defined within this single file
const AboutUs = () => <PlaceholderPage pageName="About Us" />;
const Gallery = () => <PlaceholderPage pageName="Gallery" />;
const Layout = ({ children }) => (
  <div className="bg-gray-800 text-white min-h-screen">
    {/* This is a simple placeholder layout, replace with your actual navigation and footer */}
    <header className="py-4 px-6 bg-gray-900 shadow-md">
      <h1 className="text-xl font-bold">Peptides</h1>
    </header>
    <main>{children}</main>
    <footer className="py-4 px-6 text-center text-gray-400">
      &copy; 2023 Peptides. All rights reserved.
    </footer>
  </div>
);
const Hero = () => (
  <div className="bg-gray-900 text-white py-20 px-6 text-center">
    <h1 className="text-5xl font-bold">Hero Section</h1>
  </div>
);
const ServiceSlider = () => (
  <div className="bg-gray-800 text-white py-12 px-6 text-center">
    <h2 className="text-3xl font-bold">Services</h2>
  </div>
);
const AboutSection = () => (
  <div className="bg-gray-900 text-white py-12 px-6 text-center">
    <h2 className="text-3xl font-bold">About Section</h2>
  </div>
);
const WhyChooseUsSection = () => (
  <div className="bg-gray-800 text-white py-12 px-6 text-center">
    <h2 className="text-3xl font-bold">Why Choose Us</h2>
  </div>
);
const ContactSection = () => (
  <div className="bg-gray-900 text-white py-12 px-6 text-center">
    <h2 className="text-3xl font-bold">Contact Us</h2>
  </div>
);
const CollaborationSection = () => (
  <div className="bg-gray-800 text-white py-12 px-6 text-center">
    <h2 className="text-3xl font-bold">Collaborations</h2>
  </div>
);
const HomeContactSection = () => (
  <div className="bg-gray-900 text-white py-12 px-6 text-center">
    <h2 className="text-3xl font-bold">Home Contact</h2>
  </div>
);
const ActivitiesBenefitsPage = () => (
  <PlaceholderPage pageName="Activities & Benefits" />
);
const AboutAdvisoryBoard = () => (
  <PlaceholderPage pageName="About Advisory Board" />
);
const OurAdvisoryCouncil = () => (
  <PlaceholderPage pageName="Our Advisory Council" />
);
const BecomeAMemberComp = () => (
  <PlaceholderPage pageName="Become a Member" />
);
const AcademicAssistDropdown = () => (
  <PlaceholderPage pageName="Academic Assist" />
);
const AcademicProjects = () => <PlaceholderPage pageName="Academic Projects" />;
const ConferencesSeminars = () => (
  <PlaceholderPage pageName="Conferences & Seminars" />
);
const Workshops = () => <PlaceholderPage pageName="Workshops" />;
const TechTalks = () => <PlaceholderPage pageName="Tech Talks" />;
const ResearchAssistanceThesisSupport = () => (
  <PlaceholderPage pageName="Research & Thesis Support" />
);
const FacultyUpskillingService = () => (
  <PlaceholderPage pageName="Faculty Upskilling Service" />
);
const ELearnDigitalLearning = () => (
  <PlaceholderPage pageName="E-Learn Digital Learning" />
);
const Publications = () => <PlaceholderPage pageName="Publications" />;
const Internships = () => <PlaceholderPage pageName="Internships" />;
const SkillDevelopment = () => (
  <PlaceholderPage pageName="Skill Development" />
);
const IndustrialTours = () => <PlaceholderPage pageName="Industrial Tours" />;
const CERT = () => <PlaceholderPage pageName="CERT" />;
const CorporateAstuteDropdown = () => (
  <PlaceholderPage pageName="Corporate Astute" />
);
const CorporateCollaborations = () => (
  <PlaceholderPage pageName="Corporate Collaborations" />
);
const ContractResearchServices = () => (
  <PlaceholderPage pageName="Contract Research Services" />
);
const AnalyticAssessmentServices = () => (
  <PlaceholderPage pageName="Analytic Assessment Services" />
);
const StackUp = () => <PlaceholderPage pageName="Stack Up" />;
const MemberDetailPage = () => <PlaceholderPage pageName="Member Detail" />;
const AcademicCollaborations = () => (
  <PlaceholderPage pageName="Academic Collaborations" />
);
const IndustrialCollaborations = () => (
  <PlaceholderPage pageName="Industrial Collaborations" />
);
const CollaborationForm = () => (
  <PlaceholderPage pageName="Collaboration Form" />
);
const AcademicDetail = () => (
  <PlaceholderPage pageName="Academic Collaboration Detail" />
);
const IndustrialDetail = () => (
  <PlaceholderPage pageName="Industrial Collaboration Detail" />
);
const CareerSagaDropdown = () => <PlaceholderPage pageName="Career Saga" />;
const CareerCoach = () => <PlaceholderPage pageName="Career Coach" />;
const JobMate = () => <PlaceholderPage pageName="Job Mate" />;
const PeptidesAssistanceMembership = () => (
  <PlaceholderPage pageName="Peptides Assistance Membership" />
);
const AdvancedIndustrialReach = () => (
  <PlaceholderPage pageName="Advanced Industrial Reach" />
);

function App() {
  // Use useEffect to send a "warmup" ping to the server
  // This is a common practice for free-tier hosting services that put the
  // server to sleep after a period of inactivity.
  useEffect(() => {
    const serverUrl = 'https://peptidesbackend.onrender.com/warmup'; // Replace with your actual server endpoint
    
    // Function to send the ping
    const sendPing = () => {
      // The `fetch` call below is commented out because the placeholder URL
      // will cause a 'Failed to fetch' error.
      // To enable this functionality, replace `serverUrl` with your actual
      // server endpoint and uncomment the `fetch` block.
      
      // fetch(serverUrl)
      //   .then(response => {
      //     if (!response.ok) {
      //       console.error('Warmup ping failed:', response.statusText);
      //     }
      //   })
      //   .catch(error => {
      //     console.error('Error during warmup ping:', error);
      //   });
      console.log(`Warmup ping simulated. Please replace the placeholder URL and uncomment the fetch call to activate.`);
    };

    // Send the first ping immediately
    sendPing();

    // Set up an interval to send a ping every 14 minutes (14 * 60 * 1000 ms)
    const intervalId = setInterval(sendPing, 840000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          {/* Main Pages */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <AboutSection />
                <WhyChooseUsSection />
                <CollaborationSection />
                <ServiceSlider />
                <HomeContactSection />
              </>
            }
          />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route
            path="/contact/register-student"
            element={<ContactSection />}
          />
          <Route
            path="/contact/register-faculty"
            element={<ContactSection />}
          />

          {/* Panel of Experts (POE) Routes - Mapped from old Advisory Council */}
          <Route
            path="/panel-of-experts/about-advisory-board"
            element={<AboutAdvisoryBoard />}
          />
          <Route
            path="/panel-of-experts/subject-matter-experts"
            element={<OurAdvisoryCouncil />}
          />
          <Route
            path="/panel-of-experts/become-a-member"
            element={<BecomeAMemberComp />}
          />
          <Route
            path="/panel-of-experts/activities-benefits"
            element={<ActivitiesBenefitsPage />}
          />

          {/* Academic Assist Routes */}
          <Route path="/academic-assist" element={<AcademicAssistDropdown />} />
          <Route
            path="/academic-assist/projects"
            element={<AcademicProjects />}
          />
          <Route
            path="/academic-assist/conferences"
            element={<ConferencesSeminars />}
          />
          <Route path="/academic-assist/workshops" element={<Workshops />} />
          <Route
            path="/academic-assist/internships"
            element={<Internships />}
          />
          <Route
            path="/academic-assist/publications"
            element={<Publications />}
          />
          <Route
            path="/academic-assist/skill-development"
            element={<SkillDevelopment />}
          />
          <Route
            path="/academic-assist/industrial-tours"
            element={<IndustrialTours />}
          />
          <Route
            path="/academic-assist/e-learn"
            element={<ELearnDigitalLearning />}
          />
          <Route path="/academic-assist/cert" element={<CERT />} />

          {/* Corporate Astute Routes */}
          <Route
            path="/corporate-astute"
            element={<CorporateAstuteDropdown />}
          />
          <Route
            path="/corporate-astute/aas"
            element={<AnalyticAssessmentServices />}
          />
          <Route
            path="/corporate-astute/crs"
            element={<ContractResearchServices />}
          />
          <Route
            path="/corporate-astute/fuss"
            element={<FacultyUpskillingService />}
          />
          <Route
            path="/corporate-astute/raws"
            element={<ResearchAssistanceThesisSupport />}
          />

          {/* Career Saga Routes */}
          <Route path="/career-saga" element={<CareerSagaDropdown />} />
          <Route path="/career-saga/jot" element={<CareerCoach />} />
          <Route path="/career-saga/plast" element={<JobMate />} />
          <Route
            path="/career-saga/air"
            element={<AdvancedIndustrialReach />}
          />
          <Route
            path="/career-saga/pam"
            element={<PeptidesAssistanceMembership />}
          />

          <Route
            path="/collaborations/academic"
            element={<AcademicCollaborations />}
          />
          <Route
            path="/collaborations/industry"
            element={<IndustrialCollaborations />}
          />
          <Route
            path="/collaborations/collab-peptides"
            element={<CollaborationForm />}
          />
          <Route path="/academic/:id" element={<AcademicDetail />} />
          <Route path="/industry/:id" element={<IndustrialDetail />} />

          {/* Careers Routes - Now with the "Coming Soon" page */}
          <Route path="/careers" element={<PlaceholderPage pageName="Careers" />} />
          <Route path="/careers/jobs" element={<PlaceholderPage pageName="Jobs @ Peptides" />} />
          <Route path="/careers/post-job" element={<PlaceholderPage pageName="Post a Job with Peptides" />} />

          <Route
            path="/panel-of-experts/member/:id"
            element={<MemberDetailPage />}
          />

          {/* Wildcard route for any undefined paths */}
          <Route
            path="*"
            element={<PlaceholderPage pageName="404 - Page Not Found" />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
