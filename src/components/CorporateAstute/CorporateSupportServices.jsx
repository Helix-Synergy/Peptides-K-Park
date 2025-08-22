import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Building, Shield, Target, Users, CheckCircle, ArrowRight, BarChart3, Settings, FileText } from 'lucide-react';

const CorporateSupportServices = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const services = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Regulatory Compliance",
      description: "Ensure your business meets all industry standards and regulatory requirements",
      features: ["FDA compliance", "ISO certification", "Quality management systems", "Audit preparation"]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Business Strategy",
      description: "Develop comprehensive business strategies for growth and market expansion",
      features: ["Market analysis", "Competitive positioning", "Growth planning", "Risk assessment"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Operational Excellence",
      description: "Optimize your operations for maximum efficiency and productivity",
      features: ["Process optimization", "Quality improvement", "Cost reduction", "Performance metrics"]
    }
  ];

  const supportAreas = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Documentation & SOPs",
      count: "100+",
      description: "Standard operating procedures and documentation systems"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Process Optimization",
      count: "50+",
      description: "Workflow improvements and efficiency enhancements"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Performance Analytics",
      count: "25+",
      description: "Data-driven insights and performance tracking"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quality Assurance",
      count: "75+",
      description: "Quality management and compliance systems"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Robert Chen",
      role: "CEO",
      company: "BioTech Solutions",
      content: "The corporate support services transformed our operations and helped us achieve ISO certification in record time.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "Operations Director",
      company: "Molecular Research Labs",
      content: "Professional guidance that streamlined our processes and improved our overall efficiency by 40%.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center text-white overflow-hidden bg-gradient-to-br from-emerald-700 to-green-600">
        <motion.div
          ref={sectionRef}
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">Corporate Support Services</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto px-4">
            Comprehensive Business Solutions
          </p>
          <p className="text-base text-gray-200 mt-2 max-w-3xl mx-auto px-4">
            Expert guidance and support to optimize your business operations and ensure compliance
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
              Elevate Your Business Operations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our corporate support services provide biotechnology companies with the expertise, 
              tools, and guidance needed to optimize operations, ensure compliance, and drive 
              sustainable growth. We partner with you to build robust, efficient, and compliant 
              business systems.
            </p>
          </motion.div>

          {/* Core Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Core Services</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/40 backdrop-blur-lg border border-white/30 rounded-xl p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center text-white mx-auto mb-6">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">{service.title}</h4>
                  <p className="text-gray-600 mb-6 text-center">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Support Areas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Areas of Support</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/40 backdrop-blur-lg border border-white/30 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center text-white mx-auto mb-3">
                    {area.icon}
                  </div>
                  <div className="text-2xl font-bold text-emerald-600 mb-2">{area.count}</div>
                  <div className="text-sm font-semibold text-gray-900 mb-2">{area.title}</div>
                  <div className="text-xs text-gray-600">{area.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Client Success Stories</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/40 backdrop-blur-lg border border-white/30 rounded-xl p-6"
                >
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div key={i} className="text-yellow-500">★</div>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  </div>
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
            <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Optimize Your Operations?</h3>
              <p className="text-lg mb-6 opacity-90">
                Let's discuss how our support services can transform your business
              </p>
              <button className="bg-white text-emerald-600 font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors duration-200 flex items-center mx-auto">
                Get Started Today <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CorporateSupportServices; 