'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { HiArrowRight, HiArrowDownTray } from 'react-icons/hi2';
import AnimatedSkillUniverse from './AnimatedSkillUniverse';

export const targetRoles = [
  'Data Scientist',
  'Data & Business Analytics',
  'Product Analyst',
];

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1.0] as const },
    },
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-32 overflow-hidden bg-transparent border-b border-neutral-200"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (7 cols): Editorial Typography & Single Button */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col space-y-6"
          >
            {/* Availability Badge (Monochrome Obsidian + Electric Blue dot) */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-neutral-950 text-white text-xs font-semibold w-fit shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                </span>
                <span className="tracking-wide">
                  Available for Opportunities
                </span>
              </div>
            </motion.div>

            {/* Giant Bold Headline */}
            <motion.div variants={itemVariants} className="space-y-3">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-neutral-950 leading-[1.04]">
                Piyush Yadav
              </h1>

              {/* Animated Target Role Subtitle (Strict 2s per title, 250ms fade-out/in) */}
              <div className="h-9 sm:h-11 relative flex items-center overflow-hidden">
                <style>{`
                  @keyframes roleCycle0 {
                    0% { opacity: 0; transform: translateY(6px); visibility: visible; }
                    4.167% { opacity: 1; transform: translateY(0); visibility: visible; }
                    29.167% { opacity: 1; transform: translateY(0); visibility: visible; }
                    33.333% { opacity: 0; transform: translateY(-6px); visibility: visible; }
                    33.334% { opacity: 0; transform: translateY(6px); visibility: hidden; }
                    100% { opacity: 0; transform: translateY(6px); visibility: hidden; }
                  }
                  @keyframes roleCycle1 {
                    0% { opacity: 0; transform: translateY(6px); visibility: hidden; }
                    33.333% { opacity: 0; transform: translateY(6px); visibility: hidden; }
                    33.334% { opacity: 0; transform: translateY(6px); visibility: visible; }
                    37.5% { opacity: 1; transform: translateY(0); visibility: visible; }
                    62.5% { opacity: 1; transform: translateY(0); visibility: visible; }
                    66.667% { opacity: 0; transform: translateY(-6px); visibility: visible; }
                    66.668% { opacity: 0; transform: translateY(6px); visibility: hidden; }
                    100% { opacity: 0; transform: translateY(6px); visibility: hidden; }
                  }
                  @keyframes roleCycle2 {
                    0% { opacity: 0; transform: translateY(6px); visibility: hidden; }
                    66.667% { opacity: 0; transform: translateY(6px); visibility: hidden; }
                    66.668% { opacity: 0; transform: translateY(6px); visibility: visible; }
                    70.833% { opacity: 1; transform: translateY(0); visibility: visible; }
                    95.833% { opacity: 1; transform: translateY(0); visibility: visible; }
                    100% { opacity: 0; transform: translateY(-6px); visibility: visible; }
                  }
                  .role-title-0 { animation: roleCycle0 6s cubic-bezier(0.25, 0.1, 0.25, 1) infinite; }
                  .role-title-1 { animation: roleCycle1 6s cubic-bezier(0.25, 0.1, 0.25, 1) infinite; }
                  .role-title-2 { animation: roleCycle2 6s cubic-bezier(0.25, 0.1, 0.25, 1) infinite; }
                  @media (prefers-reduced-motion: reduce) {
                    .role-title-0 { opacity: 1 !important; visibility: visible !important; transform: none !important; animation: none !important; }
                    .role-title-1, .role-title-2 { display: none !important; }
                  }
                `}</style>

                {targetRoles.map((role, idx) => (
                  <span
                    key={role}
                    aria-hidden="true"
                    className={`role-title-${idx} text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-blue-600 whitespace-nowrap absolute left-0 select-none`}
                  >
                    {role}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Core Value Statement */}
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 tracking-tight leading-snug">
                Turning Complex Data into High-Stakes Decisions.
              </h2>
            </motion.div>

            {/* Paragraph Cut in Half */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-neutral-800 max-w-xl leading-relaxed font-normal"
            >
              Software Engineering graduate from Delhi Technological University (DTU) specializing in predictive machine learning, SQL analytics, and executive business intelligence.
            </motion.p>

            {/* CTA Buttons: Explore Projects & Download Resume */}
            <motion.div variants={itemVariants} className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <motion.a
                href="#projects"
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 rounded-full text-sm font-semibold tracking-wide bg-neutral-950 text-white hover:bg-blue-600 transition-colors duration-200 shadow-sm hover:shadow-md cursor-pointer"
              >
                <span>Explore Projects</span>
                <HiArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                href="/resumes/Piyush_Yadav_Resume.pdf"
                download="Piyush_Yadav_Resume.pdf"
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 rounded-full text-sm font-semibold tracking-wide bg-white text-neutral-900 border border-neutral-300 hover:border-neutral-950 hover:bg-neutral-50 transition-colors duration-200 shadow-sm hover:shadow-md cursor-pointer"
              >
                <span>Download Resume</span>
                <HiArrowDownTray className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column (5 cols): Established Orbital Skills Universe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col items-center justify-center w-full"
          >
            <AnimatedSkillUniverse />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
