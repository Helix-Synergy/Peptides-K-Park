import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import AdvisoryCouncilDropdown from './components/AdvisoryCouncil/AdvisoryCouncilDropdown';
import AboutAdvisoryBoard from './components/AdvisoryCouncil/AboutAdvisoryBoard';
import OurAdvisoryCouncil from './components/AdvisoryCouncil/OurAdvisoryCouncil';
import BecomeAMemberComp from './components/AdvisoryCouncil/BecomeAMember';
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
import ServiceSlider from './sections/ServiceSlider';
import AboutSection from './sections/AboutSection';
import WhyChooseUsSection from './sections/WhyChooseUsSection';
import ContactSection from './sections/ContactSection';
import ServicesWeServe from './sections/ServicesWeServe';
import AboutUs from './pages/AboutUs';
import Gallery from './pages/Gallery';
import advisoryData from './pages/advisoryCouncilData.json';
import Layout from './layout/Layout';
// Removed old pages/BecomeMember route component

const fetchAdvisoryCouncilData = async (pageType) => {
  return advisoryData;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<><Hero /><AboutSection /><WhyChooseUsSection /><ServiceSlider /> <ServicesWeServe/> <ContactSection /></>} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/gallery' element={<Gallery />} />
          {/* Advisory Council */}
          <Route path="/advisory-council" element={<AdvisoryCouncilDropdown pageType="advisory-council" dataFetcher={fetchAdvisoryCouncilData} />} />
          <Route path="/advisory-council/:pageType" element={<AdvisoryCouncilDropdown dataFetcher={fetchAdvisoryCouncilData} />} />
          <Route path="/about-advisory-board" element={<AboutAdvisoryBoard />} />
          <Route path="/our-advisory-council" element={<OurAdvisoryCouncil />} />
          <Route path="/become-a-member" element={<BecomeAMemberComp />} />
          {/* Academic Assist */}
          <Route path="/academic-assist" element={<AcademicAssistDropdown />} />
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
          {/* Contact & Registration */}
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/register-student" element={<ContactSection />} />
          <Route path="/register-faculty" element={<ContactSection />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;