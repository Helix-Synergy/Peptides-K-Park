import React, { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

// LettersPullUp component for per-letter animation
function LettersPullUp({ text, className = '' }) {
  const splittedText = text.split('');
  const pullupVariant = {
    initial: { y: 10, opacity: 0 },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
      },
    }),
  };
  const ref = useRef(null); 
  const isInView = (typeof window !== 'undefined' ? require('framer-motion').useInView : () => false)(ref, { once: true });

  return (
    <div className="flex justify-start mb-4">
      {splittedText.map((current, i) => (
        <motion.div
          key={i}
          ref={ref}
          variants={pullupVariant}
          initial="initial"
          animate={isInView ? 'animate' : ''}
          custom={i}
          className={
            'text-sm sm:text-base font-semibold tracking-widest uppercase ' + className
          }
        >
          {current === ' ' ? <span>&nbsp;</span> : current}
        </motion.div>
      ))}
    </div>
  );
}

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: 'easeOut',
    },
  }),
};

const Hero = () => {
  const imageRef = useRef(null);

  // GSAP parallax effect for image on mouse move (desktop only)
  useEffect(() => {
    // Only apply on desktop to avoid issues on touch devices and if GSAP isn't critical for mobile
    const isDesktop = window.innerWidth >= 1024; // Tailwind's 'lg' breakpoint
    const img = imageRef.current;

    if (!img || !isDesktop) return;

    const handleMove = (e) => {
      const { left, top, width, height } = img.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      gsap.to(img, {
        x: x * 20,
        y: y * 20,
        scale: 1.04,
        duration: 0.5,
        ease: 'power2.out',
      });
    };
    const handleLeave = () => {
      gsap.to(img, { x: 0, y: 0, scale: 1, duration: 0.6, ease: 'power2.out' });
    };

    img.addEventListener('mousemove', handleMove);
    img.addEventListener('mouseleave', handleLeave);

    return () => {
      img.removeEventListener('mousemove', handleMove);
      img.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <section className="relative w-full min-h-[80vh] flex flex-col lg:flex-row items-stretch bg-white overflow-hidden">
      {/* Left: Text Content */}
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 py-12 lg:py-0 z-10 text-center lg:text-left">
        {/* Animated subtitle with per-letter pull-up */}
        <div className="lg:justify-start justify-center flex">
           <LettersPullUp text="Empowering Innovation" />
        </div>

        <motion.h1
          className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          custom={2}
        >
          Peptides Knowledge Park<br className="hidden sm:block" />
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl text-gray-500 mb-8 max-w-xl mx-auto lg:mx-0"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          custom={3}
        >
          A leading hub for research, education, and innovation. We support academic projects, contract lab services, digital learning, and biotech solutions tailored for researchers, institutions, and industry partners.
        </motion.p>
        <motion.button
          className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl text-lg shadow transition w-fit mx-auto lg:mx-0 min-w-[200px]"
          whileHover={{ scale: 1.06, boxShadow: '0 8px 32px rgba(91,107,206,0.18)' }}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7, ease: 'easeOut' }}
        >
          EXPLORE SERVICES <ArrowRight className="ml-2 w-5 h-5" />
        </motion.button>
      </div>
      
      {/* Right: Diagonal Image Split */}
      <div className="relative flex-1 min-h-[350px] hidden lg:block">
        <div className="absolute inset-0 w-full h-full">
          {/* Diagonal overlay */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <polygon points="0,0 800,0 800,800" fill="#5B6BCE" fillOpacity="0.8" />
          </svg>
          {/* Placeholder image with diagonal mask */}
          <motion.img
            ref={imageRef}
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Team working"
            className="absolute top-0 right-0 w-full h-full object-cover object-center [clip-path:polygon(30%_0,100%_0,100%_100%,0_100%)]"
            style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0 100%)' }}
            initial={{ x: 600, opacity: 0, scale: 1.05 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
          />
        </div>
      </div>
      
      {/* Mobile Image (no diagonal, displayed on smaller screens) */}
      <div className="lg:hidden w-full h-64 relative">
        <motion.img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
          alt="Team working"
          className="w-full h-full object-cover object-center rounded-t-2xl"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
        />
      </div>
    </section>
  );
};

export default Hero;