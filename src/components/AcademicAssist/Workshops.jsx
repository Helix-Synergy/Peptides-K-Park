import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  CheckCircle,
  Calendar,
  Clock,
  ArrowRight,
  GraduationCap,
  Microscope,
  Presentation,
  BookOpen,
  FlaskConical,
  Code,
  Brain,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import workshopBanner from "../../assets/images/PageBanners/workshops.jpg";

const Workshops = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const upcomingWorkshops = [
    {
      title: "SwaPrayojana",
      date: "Sept 11-12, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Hyderabad",
    },
    {
      title: "ChemKraftz",
      date: "Sept 13-14, 2025",
      time: "9:00 AM - 3:00 PM",
      location: "Hyderabad",
    },
    {
      title: "LabMate",
      date: "Sept 15-16, 2025",
      time: "11:00 AM - 5:00 PM",
      location: "Hyderabad",
    },
  ];

  const categories = [
    { label: "Academic Writing", icon: BookOpen },
    { label: "Data Analysis", icon: Microscope },
    { label: "Presentation Skills", icon: Presentation },
    { label: "Research Methodology", icon: FlaskConical },
    { label: "Coding Workshops", icon: Code },
    { label: "Critical Thinking", icon: Brain },
  ];

  const benefits = [
    "Hands-on experience with modern lab techniques",
    "Expert instructors with industry experience",
    "Certificate of participation",
    "Networking with peers and professionals",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section
        className="relative h-[50vh] flex items-center justify-end text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${workshopBanner})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-4"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-white">
            Workshops
          </h1>
        </motion.div>
      </section>

      <section className="w-full py-12 px-4 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Upcoming Workshops */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-peptides-dark mb-6">
              Upcoming Workshops
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {upcomingWorkshops.map((workshop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/40 backdrop-blur-lg border border-white/30 rounded-xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-peptides-color-brown mb-4 text-center">
                  {workshop.title}
                </h3>
                <div className="text-sm text-black space-y-2 mb-6 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <Calendar className="w-4 h-4" /> {workshop.date}
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="w-4 h-4" /> {workshop.time}
                  </div>
                  <div className="text-gray-600">{workshop.location}</div>
                </div>
                <button
                  onClick={() => navigate("/contact")}
                  className="w-full btn-primary text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Register Interest
                </button>
              </motion.div>
            ))}
          </div>

          {/* Workshop Categories */}
          <div className="mt-8 md:mt-10 py-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#0f2920] to-[#714819] flex justify-center items-center">
              <GraduationCap size={32} className="inline-block mr-2" /> Workshop
              Categories
            </h2>
            <div
              className="flex overflow-x-auto gap-4 p-4 items-center justify-start md:justify-center"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {/* Hide scrollbar for Webkit */}
              <style>
                {`
                  div::-webkit-scrollbar {
                    display: none;
                  }
                `}
              </style>
              {categories.map((cat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  className="flex items-center justify-center bg-[#e0ede6] border border-[#a2b5aa] rounded-full py-2 px-4 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#a2b5aa] flex-shrink-0"
                >
                  <cat.icon size={30} className="text-[#714819] mr-2" />
                  <span className="text-base font-semibold text-[#0f2920]">
                    {cat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-peptides-color-brown text-center mb-8">
              Benefits
            </h3>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-center mx-auto max-w-4xl">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center text-center gap-3">
                  <CheckCircle className="w-5 h-5 text-peptides-color-brown border-white" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Custom Workshop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="gradient-bg rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Want a Custom Workshop?</h3>
              <p className="text-lg mb-6 opacity-90">
                Tell us your requirements and we will design a workshop for your
                team
              </p>
              <button
                onClick={() => navigate("/contact")}
                className="btn-outline font-bold py-3 px-8 rounded-xl transition-colors duration-200 flex items-center mx-auto"
              >
                Request Custom Workshop{" "}
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Workshops;
