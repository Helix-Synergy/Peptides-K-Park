// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import React from 'react';
// import AdvisoryCouncilDropdown from './components/AdvisoryCouncil/AdvisoryCouncilDropdown';
// import AboutAdvisoryBoard from './components/AdvisoryCouncil/AboutAdvisoryBoard';
// import OurAdvisoryCouncil from './components/AdvisoryCouncil/OurAdvisoryCouncil';
// import BecomeAMemberComp from './components/AdvisoryCouncil/BecomeAMember';
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
// import ServiceSlider from './sections/ServiceSlider';
// import AboutSection from './sections/AboutSection';
// import WhyChooseUsSection from './sections/WhyChooseUsSection';
// import ContactSection from './sections/ContactSection';
// import ServicesWeServe from './sections/ServicesWeServe';
// import AboutUs from './pages/AboutUs';
// import Gallery from './pages/Gallery';
// import advisoryData from './pages/advisoryCouncilData.json';
// import Layout from './layout/Layout';
// // Removed old pages/BecomeMember route component

// const fetchAdvisoryCouncilData = async (pageType) => {
//   return advisoryData;
// };

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route element={<Layout />}>
//           <Route path="/" element={<><Hero /><AboutSection /><WhyChooseUsSection /><ServiceSlider /> <ServicesWeServe/> <ContactSection /></>} />
//           <Route path='/about-us' element={<AboutUs />} />
//           <Route path='/gallery' element={<Gallery />} />
//           {/* Advisory Council */}
//           <Route path="/advisory-council" element={<AdvisoryCouncilDropdown pageType="advisory-council" dataFetcher={fetchAdvisoryCouncilData} />} />
//           <Route path="/advisory-council/:pageType" element={<AdvisoryCouncilDropdown dataFetcher={fetchAdvisoryCouncilData} />} />
//           <Route path="/about-advisory-board" element={<AboutAdvisoryBoard />} />
//           <Route path="/our-advisory-council" element={<OurAdvisoryCouncil />} />
//           <Route path="/become-a-member" element={<BecomeAMemberComp />} />
//           {/* Academic Assist */}
//           <Route path="/academic-assist" element={<AcademicAssistDropdown />} />
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
//           {/* Contact & Registration */}
//           <Route path="/contact" element={<ContactSection />} />
//           <Route path="/register-student" element={<ContactSection />} />
//           <Route path="/register-faculty" element={<ContactSection />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
// These are your existing page components
import AboutUs from './pages/AboutUs';
import Gallery from './pages/Gallery';
import Layout from './layout/Layout';
import Hero from './sections/Hero';
import ServiceSlider from './sections/ServiceSlider';
import AboutSection from './sections/AboutSection';
import WhyChooseUsSection from './sections/WhyChooseUsSection';
import ContactSection from './components/ContactSection/ContactSection';
import CollaborationSection from './sections/CollaborationSection';
import HomeContactSection from './sections/HomeContactSection'
import ActivitiesBenefitsPage from "./components/AdvisoryCouncil/ActivitiesBenefitsPage";


// Components for Panel of Experts (POE)
import AboutAdvisoryBoard from './components/AdvisoryCouncil/AboutAdvisoryBoard';
import OurAdvisoryCouncil from './components/AdvisoryCouncil/OurAdvisoryCouncil';
import BecomeAMemberComp from './components/AdvisoryCouncil/BecomeAMember';

// Components for Academic Assist
import AcademicAssistDropdown from './components/AcademicAssist/AcademicAssistDropdown';
import AcademicProjects from './components/AcademicAssist/AcademicProjects';
import ConferencesSeminars from './components/AcademicAssist/ConferencesAndSeminars/ConferencesSeminars';
import Workshops from './components/AcademicAssist/Workshops';
import TechTalks from './components/AcademicAssist/TechTalks';
import ResearchAssistanceThesisSupport from './components/AcademicAssist/ResearchAssistanceThesisSupport';
import FacultyUpskillingService from './components/AcademicAssist/FacultyUpskillingService';
import ELearnDigitalLearning from './components/AcademicAssist/ELearnDigitalLearning';
import Publications from './components/AcademicAssist/Publications'
import Internships from './components/AcademicAssist/Internships'
import SkillDevelopment from './components/AcademicAssist/SkillDevelopment';
import IndustrialTours from './components/AcademicAssist/IndustrialTours';
import CERT from './components/AcademicAssist/cert'

// Components for Corporate Astute
import CorporateAstuteDropdown from './components/CorporateAstute/CorporateAstuteDropdown';
import CorporateCollaborations from './components/CorporateAstute/CorporateCollaborations';
import CorporateSupportServices from './components/CorporateAstute/CorporateSupportServices';
import StackUp from './components/CorporateAstute/StackUp';
import MemberDetailPage from './components/AdvisoryCouncil/MemberDetailPage';

import AcademicCollaborations from './components/Collaborations/AcademicCollaborations';
import IndustrialCollaborations from './components/Collaborations/IndustrialCollaborations';
import CollaborationForm from './components/Collaborations/CollaborationForm';
import AcademicDetail from "./components/Collaborations/AcademicCollaborationDetail";
import IndustrialDetail from "./components/Collaborations/IndustrialCollaborationDetail";


// Components for Career Saga
import CareerSagaDropdown from './components/CareerSaga/CareerSagaDropdown';
import CareerCoach from './components/CareerSaga/CareerCoach';
import JobMate from './components/CareerSaga/JobMate';
import PeptidesAssistanceMembership from './components/CareerSaga/PeptidesAssistanceMembership';

// Placeholder for new or unassigned pages
const PagePlaceholder = ({ pageName }) => (
  <div style={{ padding: '20px', textAlign: 'center' }}>
    <h2>{pageName} Page</h2>
    <p>This is a placeholder page. Please create the actual component.</p>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          {/* Main Pages */}
          <Route path="/" element={<><Hero /><AboutSection /><WhyChooseUsSection /><CollaborationSection /><ServiceSlider /><HomeContactSection /></>} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact/register-student" element={<ContactSection />} />
          <Route path="/contact/register-faculty" element={<ContactSection />} />
                    
          {/* Panel of Experts (POE) Routes - Mapped from old Advisory Council */}
          <Route path="/panel-of-experts/about-advisory-board" element={<AboutAdvisoryBoard />} />
          <Route path="/panel-of-experts/subject-matter-experts" element={<OurAdvisoryCouncil />} />
          <Route path="/panel-of-experts/become-a-member" element={<BecomeAMemberComp />} />
          <Route path="/panel-of-experts/activities-benefits" element={<ActivitiesBenefitsPage pageType="activities" />} />

          {/* Academic Assist Routes */}
          <Route path="/academic-assist" element={<AcademicAssistDropdown />} />
          <Route path="/academic-assist/projects" element={<AcademicProjects />} />
          <Route path="/academic-assist/conferences" element={<ConferencesSeminars />} />
          <Route path="/academic-assist/workshops" element={<Workshops />} />
          <Route path="/academic-assist/internships" element={<Internships />} />
          <Route path="/academic-assist/publications" element={<Publications />} />
          <Route path="/academic-assist/skill-development" element={<SkillDevelopment/>} />
          <Route path="/academic-assist/industrial-tours" element={<IndustrialTours />} />
          <Route path="/academic-assist/e-learn" element={<ELearnDigitalLearning />} />
          <Route path="/academic-assist/cert" element={<CERT />} />

          {/* Corporate Astute Routes */}
          <Route path="/corporate-astute" element={<CorporateAstuteDropdown />} />
          <Route path="/corporate-astute/css" element={<CorporateSupportServices />} />
          <Route path="/corporate-astute/crs" element={<PagePlaceholder pageName="Contract Research Services (CRS)" />} />
          <Route path="/corporate-astute/fuss" element={<FacultyUpskillingService />} />
          <Route path="/corporate-astute/raws" element={<ResearchAssistanceThesisSupport />} />

          {/* Career Saga Routes */}
          <Route path="/career-saga" element={<CareerSagaDropdown />} />
          <Route path="/career-saga/jot" element={<CareerCoach />} />
          <Route path="/career-saga/plast" element={<JobMate />} />
          <Route path="/career-saga/air" element={<PagePlaceholder pageName="Advanced Industrial Reach (AIR)" />} />
          <Route path="/career-saga/pam" element={<PeptidesAssistanceMembership />} />

<Route path="/collaborations/academic" element={<AcademicCollaborations />} />
<Route path="/collaborations/industry" element={<IndustrialCollaborations />} />
<Route path="/collaborations/contact-peptides" element={<CollaborationForm />} />
<Route path="/academic/:id" element={<AcademicDetail />} />
<Route path="/industry/:id" element={<IndustrialDetail />} />


          {/* Careers Routes */}
          <Route path="/careers" element={<PagePlaceholder pageName="Careers" />} />
          <Route path="/careers/jobs" element={<PagePlaceholder pageName="Jobs @ Peptides" />} />
          <Route path="/careers/post-job" element={<PagePlaceholder pageName="Post a Job with Peptides" />} />

<Route path="/panel-of-experts/member/:id" element={<MemberDetailPage />} />

          {/* Wildcard route for any undefined paths */}
          <Route path="*" element={<PagePlaceholder pageName="404 - Page Not Found" />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;