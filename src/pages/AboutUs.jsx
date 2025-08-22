import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const statsRef = useRef(null); // Ref for the stats section container
  const skillBarsRefs = useRef([]); // Ref to hold an array of skill bar elements

  // GSAP animation for stats counter and skill bars
  useEffect(() => {
    // Ensure all previous ScrollTriggers are killed before setting up new ones
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // Use a setTimeout to ensure DOM elements are fully rendered before querying
    const timer = setTimeout(() => {
      // --- Stats Counter Animation ---
      if (statsRef.current) {
        const counters = statsRef.current.querySelectorAll('.stat-value');
        counters.forEach(counter => {
          const targetValue = parseInt(counter.dataset.target);
          const isPlus = counter.dataset.plus === 'true';
          const obj = { val: 0 };

          gsap.to(obj, {
            val: targetValue,
            duration: 2,
            ease: "power1.out",
            snap: { val: 1 },
            scrollTrigger: {
              trigger: counter,
              start: "top 80%",
              toggleActions: "play none none none",
              once: true,
            },
            onUpdate: function () {
              counter.textContent = isPlus ? `+${Math.round(obj.val)}` : `${Math.round(obj.val)}`;
            },
            onComplete: function () {
              counter.textContent = isPlus ? `+${targetValue}` : `${targetValue}`;
            }
          });
        });
      }

      // --- Skill Bars Animation ---
      skillBarsRefs.current.forEach((bar, idx) => {
        if (bar) {
          const targetWidth = parseFloat(bar.dataset.targetWidth);
          gsap.fromTo(bar,
            { width: '0%' }, // Start from 0% width
            {
              width: `${targetWidth}%`, // Animate to the target percentage width
              duration: 1.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: bar,
                start: "top 85%", // When the top of the bar enters 85% of the viewport
                toggleActions: "play none none none",
                once: true,
                // markers: true, // Uncomment for debugging
              }
            }
          );
        }
      });

      // Refresh ScrollTrigger after all animations are set up
      ScrollTrigger.refresh();
    }, 100); // Small delay to ensure DOM is ready

    // Add event listener for window resize to refresh ScrollTrigger
    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', handleResize);

    // Cleanup function for setTimeout and event listener
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <main className="bg-white min-h-screen font-inter">
      {/* Hero/Header Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center text-white overflow-hidden bg-gradient-to-br from-blue-700 to-purple-600">
        {/* Background Shapes/Graphics (simulating the screenshot) */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute w-96 h-96 bg-white rounded-full -top-20 -left-20 opacity-10"
        ></motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute w-72 h-72 bg-white rounded-full -bottom-10 -right-10 opacity-10"
        ></motion.div>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">About Us</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto px-4">
            Pioneering the Future of Biotechnology and Life Sciences
          </p>
          <p className="text-base text-gray-200 mt-2 max-w-3xl mx-auto px-4">
            We are dedicated to advancing scientific research and providing innovative solutions 
            that shape the future of healthcare and biotechnology.
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 px-4 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission & Vision
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At Peptides, we are committed to advancing scientific research and providing 
              innovative solutions that shape the future of healthcare and biotechnology. 
              Our mission is to bridge the gap between research and practical applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To accelerate scientific discovery and innovation in biotechnology by providing 
                cutting-edge research support, advanced laboratory services, and comprehensive 
                solutions that empower researchers and organizations worldwide.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the global leader in biotechnology research and development, driving 
                breakthroughs that improve human health and advance scientific understanding 
                through innovation, collaboration, and excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 lg:px-12 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={statsRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Impact in Numbers
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                <span className="stat-value" data-target="450" data-plus="false">450</span>
              </div>
              <div className="text-lg text-gray-700">Research Projects Completed</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
                <span className="stat-value" data-target="645" data-plus="true">+645</span>
              </div>
              <div className="text-lg text-gray-700">Happy Clients Worldwide</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-pink-600 mb-2">
                <span className="stat-value" data-target="10" data-plus="true">+17</span>
              </div>
              <div className="text-lg text-gray-700">Years of Excellence</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 px-4 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              These fundamental principles guide everything we do and shape our culture of excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Innovation",
                description: "Pushing boundaries and embracing new technologies to solve complex challenges",
                icon: "🚀"
              },
              {
                title: "Excellence",
                description: "Maintaining the highest standards in research, service, and delivery",
                icon: "⭐"
              },
              {
                title: "Collaboration",
                description: "Working together with partners and clients to achieve shared goals",
                icon: "🤝"
              },
              {
                title: "Integrity",
                description: "Upholding ethical standards and transparency in all our endeavors",
                icon: "🔒"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 lg:px-12 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Join us in advancing the future of biotechnology and life sciences research
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors duration-200"
              >
                Get in Touch
              </Link>
              <Link
                to="/gallery"
                className="border-2 border-white text-white font-bold py-3 px-8 rounded-xl hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
