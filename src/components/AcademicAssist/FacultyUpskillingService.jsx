import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Users, Award, Target, CheckCircle, ArrowRight, BookOpen, Video, Globe } from 'lucide-react';

const FacultyUpskillingService = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const programs = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Teaching Excellence",
      description: "Enhance pedagogical skills and modern teaching methodologies.",
      duration: "6 weeks",
      level: "Intermediate"
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Digital Learning",
      description: "Master online teaching tools and e-learning platforms.",
      duration: "4 weeks",
      level: "Beginner"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Research Leadership",
      description: "Develop research management and leadership skills.",
      duration: "8 weeks",
      level: "Advanced"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Academic Writing",
      description: "Improve research paper writing and publication skills.",
      duration: "5 weeks",
      level: "Intermediate"
    }
  ];

  const programFeatures = [
    {
      title: "Flexible Learning",
      description: "Online and hybrid learning options to fit your schedule",
      icon: "🕒"
    },
    {
      title: "Expert Mentors",
      description: "Learn from experienced educators and industry professionals",
      icon: "👨‍🏫"
    },
    {
      title: "Practical Projects",
      description: "Apply new skills through real-world projects and case studies",
      icon: "📋"
    },
    {
      title: "Certification",
      description: "Earn recognized certificates to advance your career",
      icon: "🏆"
    }
  ];

  const benefits = [
    "Enhanced teaching effectiveness and student engagement",
    "Access to cutting-edge educational technologies",
    "Improved research productivity and publication success",
    "Career advancement opportunities",
    "Networking with academic professionals",
    "Continuous professional development"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center text-white overflow-hidden bg-gradient-to-br from-purple-700 to-pink-600">
        <motion.div
          ref={sectionRef}
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">FUSS</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto px-4">
            Faculty Upskilling Service
          </p>
          <p className="text-base text-gray-200 mt-2 max-w-3xl mx-auto px-4">
            Empower your faculty with the latest teaching methodologies and research skills
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="w-full py-12 px-4 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Elevate Your Faculty's Teaching and Research Excellence
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our Faculty Upskilling Service (FUSS) is designed to enhance the capabilities of academic professionals 
              through comprehensive training programs, modern teaching methodologies, and advanced research skills development.
            </p>
          </motion.div>

          {/* Programs Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Upskilling Programs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {programs.map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/40 backdrop-blur-lg border border-white/30 rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    {program.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h4>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Duration: {program.duration}</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                      {program.level}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Program Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Program Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {programFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/40 backdrop-blur-lg border border-white/30 rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-4xl mb-3">{feature.icon}</div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Benefits for Faculty Members</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Upskill Your Faculty?</h3>
              <p className="text-lg mb-6 opacity-90">
                Contact us to discuss customized upskilling programs for your institution
              </p>
              <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors duration-200 flex items-center mx-auto">
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FacultyUpskillingService; 