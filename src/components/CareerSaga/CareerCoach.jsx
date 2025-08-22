import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { User, Target, TrendingUp, Award, CheckCircle, ArrowRight, Clock, Users, Star } from 'lucide-react';

const CareerCoach = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const coachingPrograms = [
    {
      title: "Career Assessment & Planning",
      duration: "4 weeks",
      features: ["Skills evaluation", "Career path analysis", "Goal setting", "Action plan creation"],
      icon: <Target className="w-8 h-8" />
    },
    {
      title: "Executive Coaching",
      duration: "12 weeks",
      features: ["Leadership development", "Strategic thinking", "Communication skills", "Team management"],
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      title: "Industry Transition",
      duration: "8 weeks",
      features: ["Industry research", "Skill mapping", "Network building", "Transition strategy"],
      icon: <User className="w-8 h-8" />
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Senior Research Scientist",
      company: "BioTech Innovations",
      content: "The career coaching helped me identify my strengths and land my dream role in just 3 months.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Lab Manager",
      company: "Molecular Dynamics",
      content: "Professional guidance that transformed my career trajectory and boosted my confidence.",
      rating: 5
    },
    {
      name: "Dr. Emily Watson",
      role: "Principal Investigator",
      company: "Genetics Research Institute",
      content: "Outstanding support in developing my leadership skills and advancing my research career.",
      rating: 5
    }
  ];

  const benefits = [
    "Personalized 1-on-1 coaching sessions",
    "Industry-specific career guidance",
    "Resume and interview preparation",
    "Networking and relationship building",
    "Salary negotiation strategies",
    "Ongoing support and accountability"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center text-white overflow-hidden bg-gradient-to-br from-green-700 to-teal-600">
        <motion.div
          ref={sectionRef}
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">Career Coach</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto px-4">
            Personalized Professional Development
          </p>
          <p className="text-base text-gray-200 mt-2 max-w-3xl mx-auto px-4">
            Expert guidance to accelerate your career growth and achieve your professional goals
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
              Unlock Your Career Potential with Expert Coaching
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our certified career coaches specialize in the biotechnology and life sciences sectors, 
              providing personalized guidance to help you navigate career challenges, develop essential 
              skills, and achieve your professional aspirations.
            </p>
          </motion.div>

          {/* Coaching Programs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Coaching Programs</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {coachingPrograms.map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/40 backdrop-blur-lg border border-white/30 rounded-xl p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white mx-auto mb-6">
                    {program.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">{program.title}</h4>
                  
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{program.duration}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
                    Get Started
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Why Choose Our Coaching?</h3>
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

          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Success Stories</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
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
            <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Accelerate Your Career?</h3>
              <p className="text-lg mb-6 opacity-90">
                Book your free consultation and discover how our coaching can transform your professional journey
              </p>
              <button className="bg-white text-green-600 font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors duration-200 flex items-center mx-auto">
                Book Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CareerCoach; 