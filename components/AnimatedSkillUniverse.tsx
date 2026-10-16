'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  TbBrandPython, 
  TbDatabase, 
  TbChartBar, 
  TbTable, 
  TbBrain, 
  TbChartPie, 
  TbMathFunction, 
  TbTarget, 
  TbBriefcase, 
  TbCursorText, 
  TbFlask, 
  TbTimeline 
} from 'react-icons/tb';

export interface SkillNode {
  id: string;
  name: string;
  shortDesc: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  glowColor: string;
  trackId: 'inner' | 'middle' | 'outer';
  angle: number;
}

export interface TrackConfig {
  id: 'inner' | 'middle' | 'outer';
  diameterPercent: number;
  duration: number;
}

export const tracks: TrackConfig[] = [
  { id: 'inner', diameterPercent: 40, duration: 55 },
  { id: 'middle', diameterPercent: 68, duration: 55 },
  { id: 'outer', diameterPercent: 94, duration: 55 },
];

export const skillNodes: SkillNode[] = [
  // Inner Track (4 core data & querying tools: 0, 90, 180, 270 deg)
  {
    id: 'sql',
    name: 'SQL',
    shortDesc: 'Complex queries, window functions & CTEs',
    category: 'Database Querying',
    icon: TbDatabase,
    accentColor: '#2563eb', // royal blue-600
    glowColor: 'rgba(37, 99, 235, 0.45)',
    trackId: 'inner',
    angle: 0,
  },
  {
    id: 'powerbi',
    name: 'Power BI',
    shortDesc: 'Executive dashboards & DAX data models',
    category: 'Business Intelligence',
    icon: TbChartBar,
    accentColor: '#d97706', // amber-600
    glowColor: 'rgba(217, 119, 6, 0.45)',
    trackId: 'inner',
    angle: 90,
  },
  {
    id: 'excel',
    name: 'Excel',
    shortDesc: 'Power Query, pivot modeling & financial analysis',
    category: 'Spreadsheets',
    icon: TbTable,
    accentColor: '#059669', // emerald-600
    glowColor: 'rgba(5, 150, 105, 0.45)',
    trackId: 'inner',
    angle: 180,
  },
  {
    id: 'python',
    name: 'Python',
    shortDesc: 'Data processing, pandas & analytics pipelines',
    category: 'Core Language',
    icon: TbBrandPython,
    accentColor: '#0284c7', // sky-600
    glowColor: 'rgba(2, 132, 199, 0.45)',
    trackId: 'inner',
    angle: 270,
  },

  // Middle Track (4 analytical methodologies: 45, 135, 225, 315 deg)
  {
    id: 'stats',
    name: 'Statistics',
    shortDesc: 'Hypothesis testing, distributions & risk metrics',
    category: 'Statistical Theory',
    icon: TbMathFunction,
    accentColor: '#e11d48', // rose-600
    glowColor: 'rgba(225, 29, 72, 0.45)',
    trackId: 'middle',
    angle: 45,
  },
  {
    id: 'abtesting',
    name: 'A/B Testing',
    shortDesc: 'Experiment design, sample sizing & uplift analysis',
    category: 'Experimentation',
    icon: TbFlask,
    accentColor: '#7c3aed', // violet-600
    glowColor: 'rgba(124, 58, 237, 0.45)',
    trackId: 'middle',
    angle: 135,
  },
  {
    id: 'forecasting',
    name: 'Forecasting',
    shortDesc: 'Time series patterns & operational projection',
    category: 'Predictive Modeling',
    icon: TbTimeline,
    accentColor: '#0284c7', // vibrant cyan-600
    glowColor: 'rgba(2, 132, 199, 0.45)',
    trackId: 'middle',
    angle: 225,
  },
  {
    id: 'kpi',
    name: 'KPI Analysis',
    shortDesc: 'Business metrics, variance & executive reporting',
    category: 'Performance Measurement',
    icon: TbTarget,
    accentColor: '#0d9488', // teal-600
    glowColor: 'rgba(13, 148, 136, 0.45)',
    trackId: 'middle',
    angle: 315,
  },

  // Outer Track (4 specialized disciplines: 0, 90, 180, 270 deg)
  {
    id: 'business',
    name: 'Business Analytics',
    shortDesc: 'Process optimization & root-cause diagnostics',
    category: 'Commercial Strategy',
    icon: TbBriefcase,
    accentColor: '#4f46e5', // indigo-600
    glowColor: 'rgba(79, 70, 229, 0.45)',
    trackId: 'outer',
    angle: 0,
  },
  {
    id: 'product',
    name: 'Product Analytics',
    shortDesc: 'User journeys, funnel drop-off & cohort retention',
    category: 'Product Growth',
    icon: TbCursorText,
    accentColor: '#2563eb', // royal blue-600
    glowColor: 'rgba(37, 99, 235, 0.45)',
    trackId: 'outer',
    angle: 90,
  },
  {
    id: 'ml',
    name: 'Machine Learning',
    shortDesc: 'Predictive modeling, classification & XGBoost',
    category: 'Data Science',
    icon: TbBrain,
    accentColor: '#9333ea', // purple-600
    glowColor: 'rgba(147, 51, 234, 0.45)',
    trackId: 'outer',
    angle: 180,
  },
  {
    id: 'analytics',
    name: 'Data Analytics',
    shortDesc: 'Exploratory data analysis & statistical insights',
    category: 'Analytics Foundation',
    icon: TbChartPie,
    accentColor: '#0891b2', // cyan-600
    glowColor: 'rgba(8, 145, 178, 0.45)',
    trackId: 'outer',
    angle: 270,
  },
];

export default function AnimatedSkillUniverse() {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [autoIndex, setAutoIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const resetSelectedTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Automatic skill-highlighting sequence runs smoothly without interrupting rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setAutoIndex((prev) => (prev + 1) % skillNodes.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Handle user hover, click, and keyboard focus WITHOUT pausing rotation
  const handleNodeMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleNodeMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleNodeClick = (index: number) => {
    setSelectedIndex(index);
    if (resetSelectedTimerRef.current) clearTimeout(resetSelectedTimerRef.current);
    resetSelectedTimerRef.current = setTimeout(() => {
      setSelectedIndex(null);
    }, 5000);
  };

  const handleNodeFocus = (index: number) => {
    setHoveredIndex(index);
  };

  const handleNodeBlur = () => {
    setHoveredIndex(null);
  };

  // Active skill: hovered node takes precedence, then clicked node, then automatic sequence
  const activeIndex = hoveredIndex ?? selectedIndex ?? autoIndex;
  const activeSkill = skillNodes[activeIndex];
  const ActiveIcon = activeSkill.icon;

  return (
    <div className="relative w-full flex flex-col items-center select-none">
      {/* Dynamic Keyframes for Continuous Clockwise and Counter-Clockwise Rotation */}
      <style>{`
        @keyframes orbit-cw {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes orbit-ccw {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }
      `}</style>

      {/* Main Orbital Stage (Clean light background with subtle ambient back-glow) */}
      <div className="relative w-full max-w-[280px] min-[360px]:max-w-[320px] min-[420px]:max-w-[350px] sm:max-w-[480px] lg:max-w-[500px] aspect-square flex items-center justify-center overflow-visible lg:-translate-x-8 scale-[0.84] min-[360px]:scale-[0.90] min-[440px]:scale-[0.95] sm:scale-100 origin-center">

        {/* Subtle Ambient Radial Back-Glow Behind Central Circle */}
        <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-sky-400/15 via-blue-500/10 to-indigo-500/15 blur-3xl pointer-events-none -z-10" />

        {/* Restrained Subtle Decorative Particles (Stationary celestial accents in negative space) */}
        {mounted && (
          <>
            <div className="absolute left-[34%] top-[34%] -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400/40 pointer-events-none" />
            <div className="absolute left-[66%] top-[34%] -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-blue-400/35 pointer-events-none" />
            <div className="absolute left-[34%] top-[66%] -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-violet-400/35 pointer-events-none" />
            <div className="absolute left-[66%] top-[66%] -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-sky-400/40 pointer-events-none" />
            <div className="absolute left-[50%] top-[4%] -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-cyan-400/30 pointer-events-none" />
            <div className="absolute left-[50%] top-[96%] -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-blue-400/30 pointer-events-none" />
          </>
        )}

        {/* Simplified Central PY Circle (Visual Anchor, displaying only 'PY') */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    boxShadow: [
                      '0 0 16px rgba(6, 182, 212, 0.35), 0 4px 16px rgba(10, 27, 77, 0.25)',
                      '0 0 28px rgba(6, 182, 212, 0.55), 0 6px 20px rgba(10, 27, 77, 0.35)',
                      '0 0 16px rgba(6, 182, 212, 0.35), 0 4px 16px rgba(10, 27, 77, 0.25)',
                    ],
                  }
            }
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#0a1c4a] via-[#0f2d77] to-[#1e40af] border-2 border-cyan-400 flex items-center justify-center pointer-events-auto cursor-default shadow-xl"
            aria-label="Central Node: Piyush Yadav"
          >
            <span className="font-extrabold text-2xl sm:text-3xl tracking-widest text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              PY
            </span>
          </motion.div>
        </div>

        {/* 3 Continuously Rotating Orbital Tracks with Counter-Rotating Upright Pills */}
        {tracks.map((track) => {
          const trackNodes = skillNodes.filter((node) => node.trackId === track.id);

          return (
            <div
              key={track.id}
              className="absolute inset-0 m-auto rounded-full pointer-events-none"
              style={{
                width: `${track.diameterPercent}%`,
                height: `${track.diameterPercent}%`,
                animation: shouldReduceMotion
                  ? 'none'
                  : `orbit-cw ${track.duration}s linear infinite`,
              }}
            >
              {trackNodes.map((node) => {
                const globalIndex = skillNodes.findIndex((s) => s.id === node.id);
                const isActive = activeIndex === globalIndex;
                const Icon = node.icon;
                const rad = (node.angle * Math.PI) / 180;
                const xPercent = 50 + 50 * Math.cos(rad);
                const yPercent = 50 + 50 * Math.sin(rad);

                return (
                  <div
                    key={node.id}
                    className="absolute z-10"
                    style={{
                      left: `${xPercent}%`,
                      top: `${yPercent}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    {/* Counter-Rotating Container: Cancels track rotation to keep pill horizontal & upright */}
                    <div
                      style={{
                        animation: shouldReduceMotion
                          ? 'none'
                          : `orbit-ccw ${track.duration}s linear infinite`,
                        display: 'inline-flex',
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => handleNodeClick(globalIndex)}
                        onMouseEnter={() => handleNodeMouseEnter(globalIndex)}
                        onMouseLeave={handleNodeMouseLeave}
                        onFocus={() => handleNodeFocus(globalIndex)}
                        onBlur={handleNodeBlur}
                        className={`pointer-events-auto group inline-flex items-center gap-1 sm:gap-1.5 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 select-none ${
                          isActive
                            ? 'bg-sky-50 text-slate-950 shadow-[0_4px_18px_rgba(6,182,212,0.32),0_0_14px_rgba(14,165,233,0.35)] border-2 border-cyan-400 z-30'
                            : 'bg-white/95 hover:bg-white text-slate-900 shadow-[0_2px_8px_rgba(15,23,42,0.08),0_1px_3px_rgba(15,23,42,0.06)] hover:shadow-[0_4px_14px_rgba(6,182,212,0.25)] border-2 border-slate-200 hover:border-cyan-400 z-10'
                        }`}
                        aria-label={`Skill: ${node.name} (${node.category}) - ${node.shortDesc}`}
                      >
                        {/* Saturated Icon inside subtle circular badge */}
                        <div 
                          className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full flex items-center justify-center flex-shrink-0 transition-colors"
                          style={{ 
                            color: node.accentColor,
                            backgroundColor: isActive ? `${node.accentColor}28` : `${node.accentColor}18` 
                          }}
                        >
                          <Icon className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
                        </div>

                        {/* High-Contrast Dark Navy Label (Strictly horizontal and readable) */}
                        <span className="text-[10px] sm:text-xs font-semibold tracking-tight whitespace-nowrap text-slate-900">
                          {node.name}
                        </span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}

      </div>

      {/* Floating Active Skill Description Bar (Visible border, generous spacing, responsive wrapping) */}
      <div className="w-full flex justify-center px-3 sm:px-4 mt-6 sm:mt-8 z-20 min-h-[56px] sm:min-h-[44px] lg:-translate-x-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSkill.id}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.18 }}
            style={{ width: 'fit-content' }}
            className="w-fit max-w-[calc(100vw-2rem)] sm:max-w-none inline-flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-2.5 px-4 py-2.5 sm:px-5 sm:py-2 rounded-2xl sm:rounded-full bg-white border border-sky-300/80 shadow-[0_4px_18px_rgba(15,23,42,0.08),0_1px_3px_rgba(15,23,42,0.05)] text-xs text-center sm:text-left transition-all"
          >
            {/* Icon + Skill Name + Category Badge Header Group */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <div 
                className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-colors"
                style={{ 
                  backgroundColor: `${activeSkill.accentColor}18`, 
                  color: activeSkill.accentColor,
                }}
              >
                <ActiveIcon className="w-3.5 h-3.5" />
              </div>
              
              <span className="font-bold text-neutral-900 text-xs sm:text-sm whitespace-nowrap">
                {activeSkill.name}
              </span>

              <span 
                className="text-[10px] font-mono px-2 py-0.5 rounded-full border font-semibold whitespace-nowrap"
                style={{ 
                  color: activeSkill.accentColor,
                  borderColor: `${activeSkill.accentColor}40`,
                  backgroundColor: `${activeSkill.accentColor}12`
                }}
              >
                {activeSkill.category}
              </span>
            </div>

            {/* Separator Bullet on Desktop */}
            <span className="text-neutral-300 hidden sm:inline flex-shrink-0">•</span>

            {/* Full Description: Single line on desktop, wraps cleanly on mobile without ellipsis */}
            <span className="text-neutral-600 text-xs leading-normal font-normal sm:whitespace-nowrap">
              {activeSkill.shortDesc}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
}
