import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, FileText, Users, TrendingUp, CheckCircle, ArrowRight, Clock, MapPin, Building } from 'lucide-react';

const JobMate = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const jobFeatures = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Smart Job Matching",
      description: "AI-powered algorithms match you with the perfect opportunities based on your skills and preferences"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Resume Optimization",
      description: "Professional resume writing and optimization to increase your chances of getting noticed"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Interview Preparation",
      description: "Comprehensive interview coaching and mock sessions to boost your confidence"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Career Tracking",
      description: "Monitor your application progress and track your career growth over time"
    }
  ];

  const jobCategories = [
    {
      title: "Research & Development",
      count: "150+",
      icon: <Building className="w-6 h-6" />
    },
    {
      title: "Laboratory Management",
      count: "80+",
      icon: <Building className="w-6 h-6" />
    },
    {
      title: "Quality Assurance",
      count: "120+",
      icon: <Building className="w-6 h-6" />
    },
    {
      title: "Clinical Research",
      count: "95+",
      icon: <Building className="w-6 h-6" />
    },
    {
      title: "Regulatory Affairs",
      count: "60+",
      icon: <Building className="w-6 h-6" />
    },
    {
      title: "Data Analysis",
      count: "110+",
      icon: <Building className="w-6 h-6" />
    }
  ];

  const successMetrics = [
    { number: "85%", label: "Interview Success Rate" },
    { number: "3.2", label: "Average Months to Hire" },
    { number: "2000+", label: "Successful Placements" },
    { number: "95%", label: "Client Satisfaction" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center text-white overflow-hidden bg-gradient-to-br from-orange-600 to-red-600">
        <motion.div
          ref={sectionRef}
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">Job Mate</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto px-4">
            Your AI-Powered Job Search Companion
          </p>
          <p className="text-base text-gray-200 mt-2 max-w-3xl mx-auto px-4">
            Streamline your job search with intelligent matching, resume optimization, and career guidance
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
              Revolutionize Your Job Search with AI Technology
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Job Mate combines cutting-edge artificial intelligence with industry expertise to help 
              biotechnology and life sciences professionals find their dream careers. Our platform 
              streamlines every aspect of your job search journey.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Platform Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {jobFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/40 backdrop-blur-lg border border-white/30 rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Job Categories */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Popular Job Categories</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {jobCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/40 backdrop-blur-lg border border-white/30 rounded-xl p-4 text-center hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white mx-auto mb-3">
                    {category.icon}
                  </div>
                  <div className="text-sm font-semibold text-gray-900 mb-1">{category.title}</div>
                  <div className="text-xs text-gray-600">{category.count} jobs</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Success Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Our Success Metrics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {successMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">{metric.number}</div>
                  <div className="text-sm text-gray-600">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* How It Works */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">How Job Mate Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Create Your Profile</h4>
                <p className="text-gray-600">Upload your resume and complete your professional profile</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">AI Matching</h4>
                <p className="text-gray-600">Our AI analyzes and matches you with relevant opportunities</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Get Hired</h4>
                <p className="text-gray-600">Apply to matched jobs and land your dream position</p>
              </motion.div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Find Your Dream Job?</h3>
              <p className="text-lg mb-6 opacity-90">
                Join thousands of professionals who have already discovered their perfect career match
              </p>
              <button className="bg-white text-orange-600 font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors duration-200 flex items-center mx-auto">
                Start Your Job Search <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default JobMate; 