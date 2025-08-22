import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Clock, MapPin, CheckCircle, ArrowRight } from 'lucide-react';

const Seminars = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const upcomingSeminars = [
    { title: 'Emerging Trends in Biotechnology', date: 'July 20, 2025', time: '2:00 PM - 4:00 PM', location: 'Hyderabad' },
    { title: 'AI in Drug Discovery', date: 'August 12, 2025', time: '11:00 AM - 1:00 PM', location: 'Hyderabad' },
    { title: 'Ethics in Biomedical Research', date: 'September 5, 2025', time: '3:00 PM - 5:00 PM', location: 'Hyderabad' }
  ];

  const categories = ['Biotechnology', 'AI & Bioinformatics', 'Clinical Research', 'Regulatory Affairs'];

  const benefits = [
    'Learn from industry and academic experts',
    'Stay updated with the latest trends',
    'Network with professionals and peers',
    'Certificates for participation'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center text-white overflow-hidden bg-gradient-to-br from-blue-700 to-purple-600">
        <motion.div
          ref={sectionRef}
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">Seminars</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto px-4">
            Engage with thought leaders and explore the future of science
          </p>
        </motion.div>
      </section>

      <section className="w-full py-12 px-4 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Upcoming Seminars</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {upcomingSeminars.map((seminar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/40 backdrop-blur-lg border border-white/30 rounded-xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{seminar.title}</h3>
                <div className="text-sm text-gray-700 space-y-2 mb-6 text-center">
                  <div className="flex items-center justify-center gap-2"><Calendar className="w-4 h-4" /> {seminar.date}</div>
                  <div className="flex items-center justify-center gap-2"><Clock className="w-4 h-4" /> {seminar.time}</div>
                  <div className="text-gray-600">{seminar.location}</div>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Register Interest
                </button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Seminar Categories</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.map((cat, idx) => (
                <div key={idx} className="bg-white/40 backdrop-blur-lg border border-white/30 rounded-xl p-4 text-center text-sm text-gray-700">
                  {cat}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Host a Seminar with Us</h3>
              <p className="text-lg mb-6 opacity-90">
                Collaborate with us to organize a seminar for your institution or organization
              </p>
              <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors duration-200 flex items-center mx-auto">
                Propose a Seminar <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Seminars; 