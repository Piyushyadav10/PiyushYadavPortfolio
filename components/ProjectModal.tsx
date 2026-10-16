'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  HiXMark, 
  HiOutlineCircleStack, 
  HiOutlineWrenchScrewdriver, 
  HiOutlineCheckBadge, 
  HiOutlineLightBulb, 
  HiOutlineExclamationTriangle,
  HiOutlineArrowTopRightOnSquare,
  HiOutlineSparkles,
  HiOutlineChartBar
} from 'react-icons/hi2';
import { Project } from '@/data/projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop with Fade */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-neutral-950/60 backdrop-blur-sm transition-opacity" 
            onClick={onClose}
            aria-hidden="true"
          />

          <div className="flex min-h-full items-center justify-center p-4 sm:p-6 lg:p-8">
            <motion.div 
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 15 }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1.0] as const }}
              className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden text-neutral-900 my-8 z-10"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              {/* Header */}
              <div className="p-6 sm:p-8 bg-[#fafafa] border-b border-neutral-200 flex items-start justify-between gap-4">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                      Verified Case Study
                    </span>
                    {project.featured && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-neutral-900 bg-neutral-100 px-2.5 py-0.5 rounded-full border border-neutral-200">
                        <HiOutlineSparkles className="w-3.5 h-3.5 text-blue-600" />
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 id="modal-title" className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight leading-tight">
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap gap-1.5">
                    {project.roles.map((role, idx) => (
                      <span 
                        key={idx}
                        className="px-2.5 py-0.5 text-xs font-semibold rounded-md bg-white text-neutral-800 border border-neutral-200"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  className="p-2 text-neutral-500 hover:text-neutral-950 hover:bg-neutral-100 rounded-full transition-colors cursor-pointer"
                  aria-label="Close dialog"
                >
                  <HiXMark className="w-6 h-6" />
                </button>
              </div>

              {/* Verified Metrics Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-white border-b border-neutral-200">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-[#fafafa] border border-neutral-200">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-700 block truncate">
                      {m.label}
                    </span>
                    <span className="text-xl sm:text-2xl font-bold text-blue-600 font-mono mt-0.5 block">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Scrollable Content Body */}
              <div className="p-6 sm:p-8 space-y-8 max-h-[60vh] overflow-y-auto">
                {/* 1. Problem Statement */}
                <div>
                  <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-neutral-950 mb-2">
                    <HiOutlineExclamationTriangle className="w-4 h-4 text-blue-600" />
                    Problem Context &amp; Objective
                  </h4>
                  <p className="text-sm text-neutral-800 leading-relaxed font-normal">
                    {project.caseStudy.businessProblem}
                  </p>
                </div>

                {/* 2. Analytical Approach & Architecture */}
                <div>
                  <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-neutral-950 mb-2">
                    <HiOutlineCircleStack className="w-4 h-4 text-blue-600" />
                    Methodology &amp; Implementation
                  </h4>
                  <div className="space-y-2">
                    {project.caseStudy.methodology.slice(0, 4).map((step, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-[#fafafa] border border-neutral-200 text-xs text-neutral-900 leading-relaxed flex items-start gap-2.5 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Key Findings & Business Impact */}
                <div>
                  <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-neutral-950 mb-3">
                    <HiOutlineCheckBadge className="w-4 h-4 text-blue-600" />
                    Measurable Outcomes &amp; Strategic Findings
                  </h4>
                  <p className="text-sm text-neutral-800 leading-relaxed font-normal mb-3">
                    {project.caseStudy.results.summary}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.caseStudy.businessRecommendations.map((rec, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-[#fafafa] border border-neutral-200 text-xs text-neutral-900 leading-relaxed flex items-start gap-2.5 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
                        <span>{rec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Limitations & Engineering Tradeoffs */}
                <div>
                  <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-neutral-950 mb-2">
                    <HiOutlineLightBulb className="w-4 h-4 text-blue-600" />
                    Limitations &amp; Trade-Offs
                  </h4>
                  <div className="space-y-1.5">
                    {project.caseStudy.limitations.map((lim, idx) => (
                      <p key={idx} className="text-xs text-neutral-700 leading-relaxed font-normal">
                        • {lim}
                      </p>
                    ))}
                  </div>
                </div>

                {/* 5. Tools & Stack */}
                <div className="pt-4 border-t border-neutral-200">
                  <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-900 mb-3">
                    <HiOutlineWrenchScrewdriver className="w-4 h-4 text-blue-600" />
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-neutral-100 text-neutral-900 border border-neutral-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer with Single Uniform Button */}
              <div className="p-6 bg-[#fafafa] border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-neutral-600 font-medium">
                  Verified DTU Project Artifact
                </span>

                <div className="flex flex-wrap items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wide bg-neutral-950 text-white hover:bg-blue-600 transition-colors shadow-sm"
                    >
                      <span>View GitHub Source</span>
                      <HiOutlineArrowTopRightOnSquare className="w-4 h-4" />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wide bg-white text-neutral-950 border border-neutral-300 hover:border-neutral-950 transition-colors shadow-2xs"
                    >
                      <span>Interactive Demo</span>
                      <HiOutlineArrowTopRightOnSquare className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
