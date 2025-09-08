




import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Seminars from './Seminars';
import Conferences from './AutoScrollingCarousel';
import AutoScrollingCarousel from './AutoScrollingCarousel';
import hybridEventsData from '../../../data/hybridsData1';
import webinarsData from '../../../data/webinarsData1';
import IDOM2025 from '../../../assets/images/Webinar/IDOM_2025.jpg';
import GENT2025 from '../../../assets/images/Webinar/GENT_2025.jpeg';
import Ican2025 from '../../../assets/images/Webinar/Ican_2025.jpg';
import ARM2025 from '../../../assets/images/Webinar/ARM_2025.jpg';
import Techmatics_2026 from '../../../assets/images/Hybrid/TECHMATICS_2026.jpg'
import Pharmatech_2026 from '../../../assets/images/Hybrid/Pharmacy_2026.jpg'
import Biocon_2025 from '../../../assets/images/Hybrid/BIOCON_2025.jpg'
import Pharmatech_2025 from '../../../assets/images/Hybrid/PHARMATECH_2025.jpg'
import Mediclave_2025 from '../../../assets/images/Hybrid/MEDICLAVE_2025.jpg'
import Foodmeet_2026 from "../../../assets/images/Hybrid/Foodmeet_2026.jpg";


// You will need to replace this with your actual conference data,
// either from an API or a local file.
const featuredConferenceData = [
    {
    title: "World Agriculture & Food Sciences Conclave",
    code: "FOODMEET-2025",
    date: "Nov 25-27, 2025",
    location: "Valencia | Spain",
    image: Foodmeet_2026,
    link: "https://foodmeet.helixconferences.com/",
    type: "Hybrid",
    year: 2025
  },
  {
    title: "International Science & Technology Summit",
    code: "TECHMATICS-2025",
    date: "Nov 25-27, 2025",
    location: "Valencia | Spain",
    image: Techmatics_2026,
    link: "https://techmatics.helixconferences.com/",
    type: "Hybrid",
    year: 2025
  },
  {
    title: "Global Pharmaceutical Conclave",
    code: "PHARMATECH-2025",
    date: "Nov 25-27, 2025",
    location: "Valencia | Spain",
    image: Pharmatech_2025,
    link: "https://pharmatech.helixconferences.com/",
    type: "Hybrid",
    year: 2025
  },
  {
    title: "World Biotechnology Summit",
    code: "BIOCON-2025",
    date: "Nov 25-27, 2025",
    location: "Valancia | Spain",
    image: Biocon_2025,
    link: "https://biocon.helixconferences.com/",
    type: "Hybrid",
    year: 2025
  },
  {
    title: "Global Medical Conclave",
    code: "MEDICLAVE-2025",
    date: "Nov 25-27, 2025",
    location: "Valancia | Spain",
    image: Mediclave_2025,
    link: "https://mediclave.helixconferences.com/",
    type: "Hybrid",
    year: 2025
  },
  {
    title: "International Conference on Public Health & Nursing",
    code: "PUBLICHEALTH-2025",
    date: "Nov 25-27, 2025",
    location: "Valancia | Spain",
    image: "https://apollouniversity.edu.in/blog/wp-content/uploads/2025/02/Public-Health.jpg",
    link: "https://publichealth.helixconferences.com/",
    type: "Hybrid",
    year: 2025
  },
    {
    title: "International Conference on Dentistry & Oral Medicine",
    code: "IDOM-2025",
    date: "Sep 12, 2025",
    type: "webinar",
    image: IDOM2025,
    link: "https://IDOM.helixconferences.com/",
    year: 2025
  },
  {
    title: "Global Summit on Graphene and Nano Technology",
    code: "GENT-2025",
    date: "Sep 16, 2025",
    type: "webinar",
    image: GENT2025,
    link: "https://GENT.helixconferences.com/",
    year: 2025
  },
  {
    title: "International Conference on Autism and Neuropsychiatry",
    code: "ICAN-2025",
    date: "October 10, 2025",
    type: "webinar",
    image: Ican2025,
    link: "https://ICAN.helixconferences.com/",
    year: 2025
  },
  {
    title: "Global Conclave on AI, Robotics, & Metaverse",
    code: "ARM-2025",
    date: "October 24, 2025",
    type: "webinar",
    image: ARM2025,
    link: "https://ARM.helixconferences.com/",
    year: 2025
  },
  {
    title: "Global Women Empowerment & Sustainability Congress",
    code: "WEST-2025",
    date: "Aug 22, 2025",
    type: "webinar",
    image: "https://women.helixconferences.com/static/media/about_img.67ed4ac21add9f07bf21.jpg",
    link: "https://women.helixconferences.com/",
    year: 2025
  },
];

const Events = () => {
  const [activeTab, setActiveTab] = useState("Conferences");
  const conferenceBanner = "https://placehold.co/1200x600/0f2920/ffffff?text=CONFERENCES";

  return (
    <main className="min-h-screen font-inter bg-white text-[#0f2920]">
      {/* Hero Section */}
      <section
        className="relative h-[50vh] flex items-center justify-end text-center bg-cover bg-center rounded-b-xl overflow-hidden"
        style={{ backgroundImage: `url(${conferenceBanner})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-4"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-white">
            <span className="gradient-text">Conferences & Seminars</span>
          </h1>
        </motion.div>
      </section>

      {/* Pill Toggle */}
      <section className="flex justify-center mt-8 px-4">
        <div className="flex border-2 border-[#0f2920] rounded-full w-full max-w-sm overflow-hidden">
          <motion.button
            layout
            onClick={() => setActiveTab("Conferences")}
            className={`flex-1 py-2 text-center font-semibold relative transition-colors z-10 rounded-full ${
              activeTab === "Conferences" ? "text-white" : "text-[#0f2920]"
            }`}
          >
            {activeTab === "Conferences" && (
              <motion.span
                layoutId="pill-bg"
                className="absolute inset-0 bg-[#0f2920] rounded-full"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
            <span className="relative z-10">Conferences</span>
          </motion.button>
          <motion.button
            layout
            onClick={() => setActiveTab("Seminars")}
            className={`flex-1 py-2 text-center font-semibold relative transition-colors z-10 rounded-full ${
              activeTab === "Seminars" ? "text-white" : "text-[#0f2920]"
            }`}
          >
            {activeTab === "Seminars" && (
              <motion.span
                layoutId="pill-bg"
                className="absolute inset-0 bg-[#0f2920] rounded-full"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
            <span className="relative z-10">Seminars</span>
          </motion.button>
        </div>
      </section>

      {/* Content Section */}
      <section className="mt-8 px-4 section-padding">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "Conferences" ? (
              <Conferences data={featuredConferenceData} title="Featured Conferences" />
            ) : (
              <Seminars />
            )}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Hybrid Events Carousel Section - NOW USING THE GLOBAL GRADIENT */}
      <div
        className=" text-white relative overflow-hidden"
        style={{
          // Applied the new background gradient
          background: "linear-gradient(to right, #dfdfdfff, #d8ffccff)",
          borderRadius: "0px", // Ensure no rounded corners for full width sections
          border: "1px solid rgba(255, 255, 255, 0.1)", // Subtle white border
          boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.5)", // Darker shadow for dark glassmorphism
          backdropFilter: "blur(15px)", // Keep the blur for the glassmorphism effect
          WebkitBackdropFilter: "blur(15px)", // For Safari compatibility
          overflow: "hidden", // Essential for carousel contents
        }}
      >
        <AutoScrollingCarousel
          data={hybridEventsData}
          speed={50} // Adjust speed as needed
          direction="left"
          title="Upcoming Hybrids"
        />
      </div>

      {/* Webinars Carousel Section - NOW USING THE GLOBAL GRADIENT */}
      <div
        className="text-white relative overflow-hidden"
        style={{
          // Applied the new background gradient
          background: "linear-gradient(to right, #dfdfdfff, #d8ffccff)",
          borderRadius: "0px", // Ensure no rounded corners
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(15px)", // Keep the blur for the glassmorphism effect
          WebkitBackdropFilter: "blur(15px)",
          overflow: "hidden",
        }}
      >
        <AutoScrollingCarousel
          data={webinarsData}
          speed={55} // Adjust speed as needed, slightly different from hybrid for variety
          direction="right"
          title="Upcoming Webinars"
        />
      </div>
    </main>
  );
};

export default Events;