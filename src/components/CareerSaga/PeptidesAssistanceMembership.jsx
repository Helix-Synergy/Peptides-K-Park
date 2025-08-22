import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Crown, Users, Award, CheckCircle, ArrowRight, Star, Clock, Globe, Shield } from 'lucide-react';

const PeptidesAssistanceMembership = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const membershipTiers = [
    {
      name: "Basic",
      period: "monthly",
      features: [
        "Access to job board",
        "Basic resume templates",
        "Monthly career newsletter",
        "Community forum access"
      ],
      popular: false,
      icon: <Users className="w-8 h-8" />
    },
    {
      name: "Professional",
      period: "monthly",
      features: [
        "All Basic features",
        "Priority job matching",
        "Resume optimization",
        "Interview coaching sessions",
        "Networking events access",
        "Career assessment tools"
      ],
      popular: true,
      icon: <Award className="w-8 h-8" />
    },
    {
      name: "Executive",
      period: "monthly",
      features: [
        "All Professional features",
        "1-on-1 career coaching",
        "Executive resume writing",
        "Salary negotiation support",
        "Industry mentor matching",
        "Exclusive VIP events",
        "Priority support 24/7"
      ],
      popular: false,
      icon: <Crown className="w-8 h-8" />
    }
  ];

  const exclusiveBenefits = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Network",
      description: "Connect with professionals worldwide in biotechnology and life sciences"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Exclusive Access",
      description: "Early access to job opportunities and industry insights"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Premium Resources",
      description: "Access to exclusive career development materials and tools"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Priority Support",
      description: "Faster response times and dedicated assistance when you need it most"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Jennifer Martinez",
      role: "Senior Research Director",
      company: "BioGen Solutions",
      content: "The membership has opened doors I never thought possible. The networking opportunities alone are worth the investment.",
      rating: 5
    },
    {
      name: "Robert Kim",
      role: "Laboratory Manager",
      company: "Molecular Research Corp",
      content: "Exclusive access to industry leaders and career resources has accelerated my professional growth significantly.",
      rating: 5
    }
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
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">Peptides Assistance</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto px-4">
            Premium Membership Program
          </p>
          <p className="text-base text-gray-200 mt-2 max-w-3xl mx-auto px-4">
            Unlock exclusive career opportunities and accelerate your professional growth
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
              Join the Elite Community of Biotechnology Professionals
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our premium membership program provides exclusive access to career opportunities, 
              industry insights, and professional development resources. Connect with thought leaders, 
              access cutting-edge research, and accelerate your career trajectory.
            </p>
          </motion.div>

          {/* Membership Tiers */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Choose Your Membership Tier</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {membershipTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative bg-white/40 backdrop-blur-lg border border-white/30 rounded-xl p-8 hover:shadow-xl transition-all duration-300 ${
                    tier.popular ? 'ring-2 ring-purple-500 scale-105' : ''
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white mx-auto mb-6">
                    {tier.icon}
                  </div>
                  
                  <h4 className="text-2xl font-bold text-gray-900 mb-2 text-center">{tier.name}</h4>
                  
                  <ul className="space-y-3 mb-8 mt-4">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    tier.popular 
                      ? 'bg-purple-600 text-white hover:bg-purple-700' 
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}>
                    {tier.popular ? 'Get Started' : 'Choose Plan'}
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Exclusive Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Exclusive Member Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {exclusiveBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/40 backdrop-blur-lg border border-white/30 rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h4>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
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
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Member Success Stories</h3>
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
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Elevate Your Career?</h3>
              <p className="text-lg mb-6 opacity-90">
                Join our exclusive membership program and unlock unlimited career possibilities
              </p>
              <button className="bg-white text-purple-600 font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors duration-200 flex items-center mx-auto">
                Become a Member <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PeptidesAssistanceMembership; 