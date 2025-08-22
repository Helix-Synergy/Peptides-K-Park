import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BookOpen, Users, Award, Target, CheckCircle, ArrowRight } from 'lucide-react';

const AcademicProjects = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const features = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Project Planning & Design",
      description: "Comprehensive project planning with research methodology, timeline development, and resource allocation strategies."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Guidance",
      description: "One-on-one mentorship from experienced researchers and industry professionals throughout your project journey."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "Rigorous quality checks, peer reviews, and validation processes to ensure your project meets academic standards."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Implementation Support",
      description: "Practical assistance with data collection, analysis, and project execution using industry-standard tools and methodologies."
    }
  ];

  const projectTypes = [
    {
      title: "Research Projects",
      description: "Comprehensive research projects in biotechnology, molecular biology, and related fields.",
      duration: "3-6 months",
      complexity: "Advanced"
    },
    {
      title: "Capstone Projects",
      description: "Final year projects that demonstrate comprehensive understanding and practical application.",
      duration: "4-8 months",
      complexity: "Intermediate"
    },
    {
      title: "Innovation Projects",
      description: "Cutting-edge projects focusing on novel solutions and breakthrough technologies.",
      duration: "6-12 months",
      complexity: "Expert"
    }
  ];

  const benefits = [
    "Enhanced research skills and methodology",
    "Industry-relevant project experience",
    "Publication opportunities in peer-reviewed journals",
    "Networking with industry professionals",
    "Portfolio development for career advancement",
    "Access to advanced research facilities and tools"
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
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">Academic Projects</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto px-4">
            Transform your ideas into impactful research projects with expert guidance
          </p>
          <p className="text-base text-gray-200 mt-2 max-w-3xl mx-auto px-4">
            From concept to completion, we support your academic journey with comprehensive project assistance
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
              Elevate Your Academic Excellence
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our Academic Projects service provides comprehensive support for students, researchers, and institutions. 
              We help you develop, implement, and present research projects that make a real impact in your field.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/40 backdrop-blur-lg border border-white/30 rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Project Types */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Project Categories</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projectTypes.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/40 backdrop-blur-lg border border-white/30 rounded-xl p-6 hover:shadow-xl transition-all duration-300"
                >
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h4>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Duration: {project.duration}</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                      {project.complexity}
                    </span>
                  </div>
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
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Why Choose Our Academic Projects Service?</h3>
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
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Academic Project?</h3>
              <p className="text-lg mb-6 opacity-90">
                Let's discuss your project requirements and create a roadmap for success
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

export default AcademicProjects; 