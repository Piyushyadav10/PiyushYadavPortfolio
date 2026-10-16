'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  HiOutlineCodeBracket, 
  HiOutlineChartBar, 
  HiOutlineCpuChip, 
  HiOutlineCircleStack, 
  HiOutlineArrowTrendingUp, 
  HiOutlineCommandLine,
  HiArrowRight
} from 'react-icons/hi2';
import { skillCategories } from '@/data/skills';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  code: HiOutlineCodeBracket,
  chart: HiOutlineChartBar,
  brain: HiOutlineCpuChip,
  database: HiOutlineCircleStack,
  trending: HiOutlineArrowTrendingUp,
  terminal: HiOutlineCommandLine
};

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const shouldReduceMotion = useReducedMotion();

  const filteredCategories = selectedCategory === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-24 sm:py-32 bg-transparent border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12 sm:mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-3">
            Technical Competencies
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-950">
            Applied Skills &amp; Methodologies
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-800 leading-relaxed font-normal">
            Every capability is backed by verified DTU coursework, production code, or machine learning pipelines.
          </p>
        </motion.div>

        {/* Filter Pills (Tabs) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 text-xs font-semibold scrollbar-none">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full transition-all whitespace-nowrap cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-neutral-950 text-white shadow-xs'
                : 'bg-white text-neutral-800 hover:text-neutral-950 hover:bg-neutral-100 border border-neutral-200'
            }`}
          >
            All Disciplines ({skillCategories.length})
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-neutral-950 text-white shadow-xs'
                  : 'bg-white text-neutral-800 hover:text-neutral-950 hover:bg-neutral-100 border border-neutral-200'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* 3-Column Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full auto-rows-fr">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((cat, idx) => {
              const Icon = iconMap[cat.iconName] || HiOutlineCodeBracket;

              return (
                <motion.div
                  key={cat.id}
                  layout
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, delay: shouldReduceMotion ? 0 : idx * 0.04 }}
                  className="bg-white border border-neutral-200 rounded-3xl p-6 sm:p-7 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] hover:border-neutral-300 transition-all flex flex-col justify-start h-full min-h-[500px]"
                >
                  {/* Header with Hi2 Icon & Title */}
                  <div className="flex items-center gap-3.5 mb-5 min-h-[48px]">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-neutral-950 tracking-tight leading-snug">
                      {cat.title}
                    </h3>
                  </div>

                  {/* Vertical Skill Boxes: One skill per row, full width */}
                  <div className="flex flex-col space-y-2 w-full">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="w-full flex items-center px-3.5 py-2.5 rounded-xl text-xs sm:text-[13px] font-semibold bg-neutral-100/90 text-neutral-900 border border-neutral-200/90 hover:border-neutral-300 hover:bg-neutral-100 transition-colors duration-150 text-left cursor-default"
                      >
                        <span className="leading-snug break-words">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Strictly ONE Action Button at bottom */}
        <div className="mt-16 flex justify-center">
          <motion.a
            href="#projects"
            whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold tracking-wide bg-neutral-950 text-white hover:bg-blue-600 transition-colors duration-200 shadow-sm hover:shadow-md cursor-pointer"
          >
            <span>See Applied Projects</span>
            <HiArrowRight className="w-4 h-4" />
          </motion.a>
        </div>

      </div>
    </section>
  );
}
