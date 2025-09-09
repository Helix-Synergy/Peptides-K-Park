import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
    GraduationCap, FlaskConical,HeartHandshake,UserCog, Laptop, Award, Microscope, Brain, Users, BookOpen, Sparkles,
} from 'lucide-react';

import skillsBanner from '../../assets/images/PageBanners/3.jpg'; // Assuming you have a SkillsBanner image

// === DATA ===
const programHighlights = [
    {
        icon: Microscope,
        title: "Advanced Laboratory Skills",
        description: "Master real-world lab techniques in biotechnology, clinical medical, and pharmaceutical sciences.",
    },
    {
        icon: Laptop,
        title: "Data Science & IT",
        description: "Learn cutting-edge skills in data analysis, bioinformatics, and computer applications.",
    },
    {
        icon: Award,
        title: "Management & Business",
        description: "Develop expertise in marketing, finance, and supply chain management for career success.",
    },
    {
        icon: BookOpen,
        title: "Academic & Communication",
        description: "Enhance your abilities in scientific writing, journalism, and effective communication.",
    },
];

const whoCanBenefit = [
    { icon: GraduationCap, label: "Students" },
    { icon: FlaskConical, label: "Researchers" },
    { icon: UserCog, label: "Professionals" },
    { icon: Brain, label: "Aspiring Entrepreneurs" },
    { icon: HeartHandshake, label: "Academicians" },
];

const glowAnimation = {
    whileHover: {
        scale: 1.05,
        boxShadow: "0 0 8px #714819, 0 0 25px #b2874b",
        transition: { duration: 0.3, ease: "easeInOut" }
    },
};

const iconVariants = {
    initial: { y: -50, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 10, delay: 0.5 } }
};

// === COMPONENT ===
const SkillDevelopment = () => {
    const mainRef = useRef(null);
    const isInView = useInView(mainRef, { once: true, amount: 0.1 });

    return (
        <div className="bg-white text-[#0f2920] min-h-screen font-inter overflow-hidden relative">
            {/* Hero Section */}
            <section
                className="relative h-[50vh] flex items-center justify-end text-center bg-cover bg-center"
                style={{ backgroundImage: `url(${skillsBanner})` }}
            >
                <div className="absolute inset-0 bg-black/50"></div>
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 px-4"
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-white">
                        Skill Development
                    </h1>
                </motion.div>
            </section>

            {/* Main Content Container */}
            <div ref={mainRef} className="relative z-10 px-4 py-8 md:py-16 max-w-7xl mx-auto">

                {/* Main Text Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-center mb-16 md:mb-24"
                >
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#0f2920] to-[#714819]">
                        Empowering Your Future Across Diverse Fields
                    </h2>
                    <p className="text-lg md:text-xl text-[#1f3b30] max-w-3xl mx-auto">
                        We go beyond theory to provide hands-on, practical training that equips students and professionals with the tangible skills needed to succeed in a constantly evolving world.
                    </p>
                </motion.div>

                {/* Program Highlights Section */}
                <div className="mt-20 md:mt-32">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-[#0f2920] to-[#714819] flex justify-center items-center">
                        <Sparkles size={32} className="inline-block mr-2" /> Our Core Programs
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {programHighlights.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                variants={glowAnimation}
                                whileHover="whileHover"
                                className="p-6 rounded-2xl bg-gray-50 border border-gray-200 flex flex-col items-center text-center group transition-all duration-300 ease-in-out"
                            >
                                <item.icon size={48} className="text-[#714819] mb-4 transition-transform duration-300 group-hover:scale-110" />
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-[#1f3b30]">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Who Can Benefit Section */}
                <div className="mt-8 md:mt-10">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#0f2920] to-[#714819] flex justify-center items-center">
                        <Users size={32} className="inline-block mr-2" /> Who Can Benefit?
                    </h2>
                    <div className="flex overflow-x-auto gap-4 items-center justify-center scrollbar-hide">
                        {whoCanBenefit.map((chip, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: index * 0.05 + 0.5, duration: 0.3 }}
                                className="flex items-center justify-center bg-[#e0ede6] border border-[#a2b5aa] rounded-full py-2 px-4 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#a2b5aa] flex-shrink-0"
                            >
                                <chip.icon size={30} className="text-[#714819] mr-2" />
                                <span className="text-base font-semibold text-[#0f2920]">{chip.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Closing CTA */}
                <div className="mt-8 md:mt-10 text-center pb-16">
                    <p className="text-lg md:text-2xl font-semibold mb-8 text-[#1f3b30] max-w-4xl mx-auto">
                        Ready to elevate your career? Join our skill development programs and start your journey toward excellence.
                    </p>
                    <motion.button
                        variants={glowAnimation}
                        whileHover="whileHover"
                        className="relative overflow-hidden px-12 py-5 text-xl font-bold rounded-full bg-[#0f2920] text-white shadow-xl focus:outline-none focus:ring-4 focus:ring-[#714819] focus:ring-opacity-50"
                    >
                        Explore Programs →
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: "100%" }}
                            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                            className="absolute inset-0 bg-white opacity-10 blur-md"
                        />
                    </motion.button>
                </div>

            </div>
            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                body {
                    font-family: 'Inter', sans-serif;
                }
            `}</style>
        </div>
    );
};

export default SkillDevelopment;