import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import activityBanner from '../../assets/images/about-banner.jpg'

const activitiesData = [
  {
    title: "Hands-On Laboratory Training",
    description:
      "Engage In Practical Experiments And Develop Advanced Laboratory Skills In Biotechnology And Life Sciences.",
    icon: "🧪",
  },
  {
    title: "Collaborative Research Projects",
    description:
      "Work With Corporate And Academic Partners On Real-World Scientific Research Projects In Biotechnology.",
    icon: "🔬",
  },
  {
    title: "Skill Enhancement Workshops",
    description:
      "Participate In Workshops Focused On Biotechnology, Advanced Laboratory Techniques, And Scientific Methods.",
    icon: "🎓",
  },
  {
    title: "Seminars & Scientific Conferences",
    description:
      "Attend Expert-Led Seminars And National/International Conferences To Broaden Knowledge In Life Sciences Research.",
    icon: "📢",
  },
  {
    title: "Mentorship & Career Guidance",
    description:
      "Receive Personalized Mentorship From Industry And Academic Experts For Career Advancement In Biotechnology And Laboratory Sciences.",
    icon: "💼",
  },
  {
    title: "Innovative Project Development",
    description:
      "Engage In Designing And Executing Innovative Projects That Translate Scientific Research Into Practical Applications In Biotechnology.",
    icon: "🧬",
  },
];

const benefitsData = [
  {
    title: "Practical Knowledge & Skills",
    description:
      "Gain Hands-On Experience And Apply Theoretical Knowledge In Real Laboratory Environments In Life Sciences And Biotechnology.",
    icon: "⚡",
  },
  {
    title: "Networking Opportunities",
    description:
      "Connect With Top Researchers, Industry Experts, And Fellow Students In Biotechnology And Scientific Research.",
    icon: "🤝",
  },
  {
    title: "Access To Research Facilities",
    description:
      "Work In Cutting-Edge Laboratories Equipped With Advanced Instruments And Technology For Biotechnology And Life Sciences.",
    icon: "🏭",
  },
  {
    title: "Recognition & Certifications",
    description:
      "Receive Certificates And Awards Recognizing Your Accomplishments And Expertise In Scientific Research And Biotechnology.",
    icon: "🏅",
  },
  {
    title: "Exposure To Real Projects",
    description:
      "Participate In Projects With Real-World Impact And Contribute To Meaningful Research In Biotechnology And Life Sciences.",
    icon: "🌐",
  },
  {
    title: "Career Advancement Opportunities",
    description:
      "Benefit From Strategic Guidance, Internship Programs, And Professional Development Opportunities In The Field Of Biotechnology.",
    icon: "🚀",
  },
];



const ActivitiesBenefitsPage = () => {
  const [activeTab, setActiveTab] = useState("Activities");

  const dataToDisplay = activeTab === "Activities" ? activitiesData : benefitsData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  return (
    <main className="min-h-screen font-inter bg-white text-[#0f2920]">
      {/* Hero Section */}
      <section
        className="relative h-[50vh] flex items-center justify-center text-center bg-cover bg-center"
style={{ backgroundImage: `url(${activityBanner})` }}
        >
        <div className="absolute inset-0 bg-white/80"></div>
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-4"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-[#0f2920]">
            Activities & Benefits
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-[#0f2920]">
            Transforming Research Into Practical Applications And Advancing Life Science Education And Biotechnology Innovation.
          </p>
        </motion.div>
      </section>

      {/* Pill Toggle */}
      <section className="flex justify-center mt-8 px-4">
        <div className="flex border-2 border-[#0f2920] rounded-full w-full max-w-sm overflow-hidden">
          <motion.button
            layout
            onClick={() => setActiveTab("Activities")}
            className={`flex-1 py-2 text-center font-semibold relative transition-colors z-10 ${
              activeTab === "Activities" ? "text-white" : "text-[#0f2920]"
            }`}
          >
            {activeTab === "Activities" && (
              <motion.span
                layoutId="pill-bg"
                className="absolute inset-0 bg-[#0f2920] rounded-full"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
            <span className="relative z-10">Activities</span>
          </motion.button>
          <motion.button
            layout
            onClick={() => setActiveTab("Benefits")}
            className={`flex-1 py-2 text-center font-semibold relative transition-colors z-10 ${
              activeTab === "Benefits" ? "text-white" : "text-[#0f2920]"
            }`}
          >
            {activeTab === "Benefits" && (
              <motion.span
                layoutId="pill-bg"
                className="absolute inset-0 bg-[#0f2920] rounded-full"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
            <span className="relative z-10">Benefits</span>
          </motion.button>
        </div>
      </section>

      {/* Content Cards */}
      <section className="px-4 lg:px-24 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {dataToDisplay.map((item, idx) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white border-2 border-[#0f2920] rounded-xl p-6 flex flex-col items-center text-center shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-[#0f2920]">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Stats / Impact Section */}
      <section className="bg-white py-12 mt-12 border-t-2 border-b-2 border-[#0f2920]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-4">
          {[
            { number: "100+", label: "Workshops Conducted" },
            { number: "500+", label: "Students Trained" },
            { number: "50+", label: "Research Projects" },
            { number: "30+", label: "Collaborations" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <p className="text-3xl font-bold text-[#0f2920]">{stat.number}</p>
              <p className="text-[#0f2920]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 text-center px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[#0f2920] mb-4"
        >
          Join Our Programs Today
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#0f2920] mb-6"
        >
          Explore activities and benefits, and take your career and research to the next level.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          href="/contact"
          className="inline-block px-8 py-3 bg-[#0f2920] text-white font-semibold rounded-full hover:bg-[#1a3b2b] transition"
        >
          Get Started
        </motion.a>
      </section>
    </main>
  );
};

export default ActivitiesBenefitsPage;