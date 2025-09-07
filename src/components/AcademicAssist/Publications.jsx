import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';
import { BookOpen, Users, Feather, Award, Globe, Handshake, ChevronDown, Rocket, Check, Lightbulb, TrendingUp, HeartHandshake, GraduationCap, Hospital, UserCog, Sparkles } from 'lucide-react';

// === DATA ===
const timelineStages = [
  {
    icon: BookOpen,
    title: "Submission",
    description: "Researchers submit their manuscript to a journal. The manuscript is checked for basic formatting and suitability before moving to the next stage."
  },
  {
    icon: Users,
    title: "Peer Review",
    description: "Experts in the field evaluate the manuscript's quality, methodology, and significance. This is the core of the process, ensuring scientific rigor and integrity."
  },
  {
    icon: Feather,
    title: "Revisions",
    description: "Based on feedback, authors revise their work, addressing reviewer comments and improving the manuscript. This iterative step enhances the final publication's quality."
  },
  {
    icon: Award,
    title: "Acceptance",
    description: "After successful revisions, the manuscript is accepted for publication. This marks a major milestone, validating the research findings and their contribution to the field."
  },
  {
    icon: Globe,
    title: "Publication",
    description: "The research is published in a journal and becomes available to the global scientific community. This is when the new knowledge is shared and begins its journey."
  },
  {
    icon: Handshake,
    title: "Impact & Collaboration",
    description: "The published work influences future research, informs policy, and fosters new collaborations. The peer review process ensures this impact is built on a foundation of trust."
  },
];

const highlights = [
  {
    icon: Check,
    title: "Ensures Quality",
    description: "Expert evaluation guarantees the research is sound, accurate, and trustworthy."
  },
  {
    icon: Lightbulb,
    title: "Fosters Innovation",
    description: "Constructive feedback and discussion lead to stronger, more impactful discoveries."
  },
  {
    icon: TrendingUp,
    title: "Builds Trust",
    description: "A transparent process provides confidence in the integrity of scientific findings."
  },
  {
    icon: HeartHandshake,
    title: "Promotes Collaboration",
    description: "Engaging with peers creates opportunities for new partnerships and shared insights."
  },
];

const whoCanBenefit = [
  { icon: GraduationCap, label: "Researchers" },
  { icon: UserCog, label: "Students" },
  { icon: Hospital, label: "Healthcare Professionals" },
  { icon: BookOpen, label: "Policy Makers" },
  { icon: Globe, label: "The Public" },
  { icon: Feather, label: "Journal Editors" },
];

const glowAnimation = {
  whileHover: {
    scale: 1.05,
    boxShadow: "0 0 8px #714819, 0 0 25px #b2874b",
    transition: { duration: 0.3, ease: "easeInOut" }
  },
};

const iconVariants = {
  initial: { y: -50, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 10, delay: 0.5 } }
};

// === COMPONENT ===
const PeerReviewProcess = () => {
  const [expandedCards, setExpandedCards] = useState(Array(timelineStages.length).fill(false));
  const timelineRef = useRef(null);
  const isInView = useInView(timelineRef, { once: true, amount: 0.1 });
  
  const handleToggleExpand = (index) => {
    setExpandedCards(prev => {
      const newExpanded = [...prev];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <div className="bg-white text-[#0f2920] min-h-screen font-inter overflow-hidden relative">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#1f3b30] rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 left-0 w-80 h-80 bg-[#3a4a3f] rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#714819] rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Main Content Container */}
      <div className="relative z-10 px-4 py-8 md:py-16 max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 md:mb-32">
          <motion.div
            variants={iconVariants}
            initial="initial"
            animate="animate"
            className="mb-6 flex justify-center">
            <Rocket size={100} className="text-[#714819]" />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#0f2920] to-[#714819]">
            The Journey of a Scientific Paper
          </h1>
          <p className="text-lg md:text-xl text-[#1f3b30] max-w-2xl mx-auto">
            Explore the essential stages of the peer review process, a trusted system that ensures the quality and reliability of scientific research.
          </p>
          <motion.a 
            href="#timeline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-8 inline-block px-8 py-4 text-lg font-semibold rounded-full bg-[#0f2920] text-white shadow-xl transition-all duration-300 ease-in-out hover:bg-[#1f3b30] hover:scale-105">
            Scroll to Explore the Journey ↓
          </motion.a>
        </motion.div>

        {/* Scroll-Driven Timeline */}
        <div id="timeline" ref={timelineRef}>
          <div className="flex flex-col items-center">
            {timelineStages.map((stage, index) => {
              const isExpanded = expandedCards[index];
              const zIndex = timelineStages.length - index;
              const rotation = (index - timelineStages.length / 2) * (isExpanded ? 0 : 0.5);
              const translateY = isExpanded ? 0 : index * 4;

              return (
                <motion.div
                  key={stage.title}
                  initial={{ opacity: 0, y: 50, rotate: 2 }}
                  animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  layout
                  className="relative group w-full max-w-md md:max-w-lg mb-8"
                  style={{
                    zIndex,
                    transform: `translateY(${translateY}px) rotate(${rotation}deg)`,
                  }}
                >
                  <motion.div
                    className={`relative p-6 md:p-8 rounded-2xl bg-gray-50 border border-gray-200 shadow-2xl transition-all duration-300 ease-in-out transform ${!isExpanded ? 'hover:scale-[1.02]' : ''}`}
                    style={{
                      transformOrigin: "bottom center",
                      rotate: index % 2 === 0 ? "1deg" : "-1deg",
                    }}
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <stage.icon size={36} className="text-[#714819]" />
                      <h3 className="text-2xl font-bold">{stage.title}</h3>
                    </div>
                    <p className="text-[#1f3b30] text-sm md:text-base">
                      {stage.description}
                    </p>
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4"
                        >
                          <p className="text-[#1f3b30] text-sm md:text-base">
                            {stage.description} (Extended content for demonstration purposes. This would be a more detailed paragraph in a real app.)
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <button
                      onClick={() => handleToggleExpand(index)}
                      className="absolute bottom-4 right-4 text-[#714819] hover:text-[#b2874b] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#714819] rounded-full"
                    >
                      <ChevronDown
                        className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                      />
                    </button>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Highlights Section */}
        <div className="mt-20 md:mt-32">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-[#0f2920] to-[#714819] flex justify-center items-center">
            <Sparkles size={32} className="inline-block mr-2" /> Highlights of the Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {highlights.map((item) => (
              <motion.div
                key={item.title}
                variants={glowAnimation}
                whileHover="whileHover"
                className="p-6 rounded-2xl bg-gray-50 border border-gray-200 flex flex-col items-center text-center group transition-all duration-300 ease-in-out"
              >
                <item.icon size={48} className="text-[#714819] mb-4 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-[#1f3b30]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Who Can Benefit Section */}
        <div className="mt-20 md:mt-32">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#0f2920] to-[#714819] flex justify-center items-center">
            <Users size={32} className="inline-block mr-2" /> Who Can Benefit?
          </h2>
          <div className="flex overflow-x-auto gap-4 p-4 scrollbar-hide">
            {whoCanBenefit.map((chip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="flex items-center bg-[#e0ede6] border border-[#a2b5aa] rounded-full py-2 px-4 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#a2b5aa] flex-shrink-0"
              >
                <chip.icon size={20} className="text-[#714819] mr-2" />
                <span className="text-sm font-semibold text-[#0f2920]">{chip.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing CTA */}
        <div className="mt-20 md:mt-32 text-center pb-16">
          <p className="text-lg md:text-2xl font-semibold mb-8 text-[#1f3b30] max-w-2xl mx-auto">
            Peer-reviewed science ensures <span className="text-[#714819]">trust</span>, <span className="text-[#714819]">impact</span>, and <span className="text-[#714819]">global recognition</span>.
          </p>
          <motion.button
            variants={glowAnimation}
            whileHover="whileHover"
            className="relative overflow-hidden px-12 py-5 text-xl font-bold rounded-full bg-[#0f2920] text-white shadow-xl focus:outline-none focus:ring-4 focus:ring-[#714819] focus:ring-opacity-50"
          >
            Start Your Journey →
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="absolute inset-0 bg-white opacity-10 blur-md"
            />
          </motion.button>
        </div>

      </div>
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
        }
        body {
            font-family: 'Inter', sans-serif;
        }
      `}</style>
    </div>
  );
};

export default PeerReviewProcess;
