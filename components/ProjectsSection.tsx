'use client';

import React, { useState, useMemo, useRef } from 'react';
import { 
  motion, 
  AnimatePresence, 
  useReducedMotion, 
  useScroll, 
  useTransform, 
  useSpring, 
  useMotionValueEvent 
} from 'framer-motion';
import { 
  HiOutlineDocumentMagnifyingGlass, 
  HiOutlineArrowTopRightOnSquare, 
  HiOutlineSparkles,
  HiOutlineArrowPath,
  HiXMark
} from 'react-icons/hi2';
import { projects, Project } from '@/data/projects';
import ProjectModal from './ProjectModal';
import TechnologyFilter from './TechnologyFilter';
import { RoleType } from './RoleLensSection';

interface ProjectsSectionProps {
  selectedRole: RoleType;
  onSelectRole: (role: RoleType) => void;
}

export default function ProjectsSection({ selectedRole, onSelectRole }: ProjectsSectionProps) {
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const shouldReduceMotion = useReducedMotion();

  // Reference for the vertical timeline container to drive scroll progress
  const timelineContainerRef = useRef<HTMLDivElement>(null);

  // Role filter options
  const roles: { id: RoleType; label: string }[] = [
    { id: 'All', label: 'All Projects' },
    { id: 'Data Analyst', label: 'Data Analyst' },
    { id: 'Data Scientist', label: 'Data Scientist' },
    { id: 'Data Engineer', label: 'Data Engineer' },
    { id: 'Business Analyst', label: 'Business Analyst' },
    { id: 'Product Analyst', label: 'Product Analyst' },
  ];

  // Dynamically extract all available technologies and their project counts
  const availableTechnologies = useMemo(() => {
    const counts: Record<string, number> = {};
    projects.forEach(p => {
      p.techStack.forEach(t => {
        counts[t] = (counts[t] || 0) + 1;
      });
    });
    return Object.entries(counts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
  }, []);

  const handleToggleTechnology = (tech: string) => {
    setSelectedTechnologies(prev => 
      prev.includes(tech) ? prev.filter(t => t !== tech) : [...prev, tech]
    );
  };

  const handleClearTechnologies = () => {
    setSelectedTechnologies([]);
  };

  const handleResetAllFilters = () => {
    onSelectRole('All');
    setSelectedTechnologies([]);
  };

  // Combined filtering: Role AND Technology
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesRole = selectedRole === 'All' || project.roles.includes(selectedRole as any);
      if (!matchesRole) return false;

      if (selectedTechnologies.length > 0) {
        const projectTechLower = project.techStack.map(t => t.toLowerCase());
        const hasAllTechs = selectedTechnologies.every(tech => 
          projectTechLower.includes(tech.toLowerCase())
        );
        if (!hasAllTechs) return false;
      }

      return true;
    });
  }, [selectedRole, selectedTechnologies]);

  const isAnyFilterActive = selectedRole !== 'All' || selectedTechnologies.length > 0;

  // Scroll progress linked animation
  const { scrollYProgress } = useScroll({
    target: timelineContainerRef,
    offset: ['start 65%', 'end 75%']
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001
  });

  const progress = shouldReduceMotion ? scrollYProgress : smoothProgress;
  const dotTop = useTransform(progress, [0, 1], ['0%', '100%']);

  const [currentProgress, setCurrentProgress] = useState(0);

  useMotionValueEvent(progress, 'change', (latest) => {
    const rounded = Math.round(latest * 50) / 50;
    setCurrentProgress(prev => (prev !== rounded ? rounded : prev));
  });

  return (
    <section 
      id="projects" 
      className="relative py-24 sm:py-32 bg-transparent text-neutral-900 overflow-hidden border-b border-neutral-200"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 sm:mb-20 gap-6"
        >
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-3">
              Selected Case Studies
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-950">
              Verified Projects &amp; Analytical Artifacts
            </h2>

            <p className="mt-4 text-base sm:text-lg text-neutral-800 leading-relaxed max-w-2xl font-normal">
              Production data pipelines, validated predictive models, and executive dashboards with documented findings and constraints.
            </p>
          </div>

          {/* Dynamic Project Count Badge */}
          <div className="text-xs font-semibold text-neutral-800 bg-[#fafafa] px-4 py-2.5 rounded-full border border-neutral-200 shadow-2xs w-fit flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span>
              Showing <strong className="text-neutral-950 font-bold">{filteredProjects.length}</strong> of{' '}
              <strong className="text-neutral-950 font-bold">{projects.length}</strong> projects
            </span>
          </div>
        </motion.div>

        {/* Filter Controls Bar */}
        <div className="space-y-4 mb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Role Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {roles.map((role) => {
                const isSelected = selectedRole === role.id;
                const count = role.id === 'All' 
                  ? projects.length 
                  : projects.filter(p => p.roles.includes(role.id as any)).length;

                return (
                  <button
                    key={role.id}
                    type="button"
                    onClick={() => onSelectRole(role.id)}
                    className={`relative px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 border cursor-pointer ${
                      isSelected
                        ? 'bg-neutral-950 border-neutral-950 text-white shadow-xs'
                        : 'bg-[#fafafa] border-neutral-200 text-neutral-800 hover:text-neutral-950 hover:bg-neutral-100'
                    }`}
                  >
                    <span>{role.label}</span>
                    <span 
                      className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                        isSelected 
                          ? 'bg-blue-600 text-white font-bold' 
                          : 'bg-neutral-200 text-neutral-700'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Technology Filter Control */}
            <div className="flex-shrink-0">
              <TechnologyFilter
                availableTechnologies={availableTechnologies}
                selectedTechnologies={selectedTechnologies}
                onToggleTechnology={handleToggleTechnology}
                onClearTechnologies={handleClearTechnologies}
              />
            </div>
          </div>

          {/* Active Filter Chips and Reset Action */}
          <AnimatePresence>
            {isAnyFilterActive && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="p-3 rounded-2xl bg-[#fafafa] border border-neutral-200 flex flex-wrap items-center justify-between gap-3 text-xs overflow-hidden"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-neutral-700 text-[11px] uppercase tracking-wider font-bold">
                    Active Filters:
                  </span>

                  {selectedRole !== 'All' && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-neutral-200 text-neutral-900 font-semibold text-[11px]">
                      <span>Role: {selectedRole}</span>
                      <button 
                        type="button" 
                        onClick={() => onSelectRole('All')}
                        className="hover:text-blue-600 cursor-pointer"
                        aria-label="Remove role filter"
                      >
                        <HiXMark className="w-3.5 h-3.5" />
                      </button>
                    </span>
                  )}

                  {selectedTechnologies.map(tech => (
                    <span 
                      key={tech} 
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-neutral-200 text-neutral-900 font-semibold text-[11px]"
                    >
                      <span>Tech: {tech}</span>
                      <button 
                        type="button" 
                        onClick={() => handleToggleTechnology(tech)}
                        className="hover:text-blue-600 cursor-pointer"
                        aria-label={`Remove ${tech} filter`}
                      >
                        <HiXMark className="w-3.5 h-3.5" />
                      </button>
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleResetAllFilters}
                  className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 font-bold cursor-pointer"
                >
                  <HiOutlineArrowPath className="w-3.5 h-3.5" />
                  <span>Reset Filters</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Vertical Timeline Container */}
        <div ref={timelineContainerRef} className="relative max-w-6xl mx-auto pt-4 pb-8">
          
          {/* Continuous Vertical Timeline Spine (Desktop Centered) */}
          <div 
            className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-10 bottom-14 w-[2px] pointer-events-none"
            aria-hidden="true"
          >
            <div className="absolute inset-0 w-full bg-neutral-200 rounded-full" />
            <motion.div 
              className="absolute inset-x-0 top-0 w-full bg-blue-600 origin-top rounded-full"
              style={{ height: dotTop }}
            />
          </div>

          {/* Indicator Dot (Desktop) */}
          <div 
            className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-10 bottom-14 w-[2px] pointer-events-none z-30"
            aria-hidden="true"
          >
            <motion.div
              className="absolute -left-[5px] -translate-y-1/2 w-3 h-3 rounded-full flex items-center justify-center pointer-events-none"
              style={{ top: dotTop }}
            >
              <span className="relative w-3 h-3 rounded-full bg-blue-600 border-2 border-white shadow-sm" />
            </motion.div>
          </div>

          {/* Mobile Spine */}
          <div 
            className="lg:hidden absolute left-6 sm:left-8 -translate-x-1/2 top-10 bottom-14 w-[2px] pointer-events-none"
            aria-hidden="true"
          >
            <div className="absolute inset-0 w-full bg-neutral-200 rounded-full" />
            <motion.div 
              className="absolute inset-x-0 top-0 w-full bg-blue-600 origin-top rounded-full"
              style={{ height: dotTop }}
            />
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 ? (
            <div className="relative z-10 py-16 px-6 sm:px-12 text-center bg-[#fafafa] rounded-3xl border border-neutral-200 max-w-xl mx-auto my-12">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto mb-4 text-blue-600">
                <HiOutlineDocumentMagnifyingGlass className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-neutral-950 mb-2">
                No matching projects found
              </h3>
              <p className="text-xs sm:text-sm text-neutral-700 max-w-md mx-auto mb-6 leading-relaxed font-normal">
                No artifacts match your selected criteria. Try adjusting or clearing your filters.
              </p>
              <button
                type="button"
                onClick={handleResetAllFilters}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold bg-neutral-950 text-white hover:bg-blue-600 transition-colors cursor-pointer"
              >
                <HiOutlineArrowPath className="w-4 h-4" />
                <span>Reset All Filters</span>
              </button>
            </div>
          ) : (
            /* Timeline Items */
            <div className="space-y-12 sm:space-y-16">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, idx) => {
                  const isEven = idx % 2 === 0;
                  const totalProjects = filteredProjects.length;
                  const targetRatio = totalProjects <= 1 ? 0 : idx / (totalProjects - 1);
                  const currentNearestIdx = Math.min(
                    totalProjects - 1,
                    Math.max(0, Math.round(currentProgress * (totalProjects - 1)))
                  );
                  const isActive = idx === currentNearestIdx;
                  const isPassed = currentProgress >= targetRatio - 0.04;

                  return (
                    <motion.div
                      layout
                      key={project.id}
                      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.45 }}
                      className="relative flex flex-col lg:flex-row items-stretch group"
                    >
                      {/* Central Spine Marker (Desktop) */}
                      <div 
                        className={`hidden lg:flex absolute left-1/2 -translate-x-1/2 top-10 w-9 h-9 rounded-full items-center justify-center z-20 transition-all duration-300 ${
                          isActive
                            ? 'bg-neutral-950 text-white border-2 border-blue-600 shadow-md scale-110'
                            : isPassed
                            ? 'bg-blue-600 text-white border-2 border-white shadow-xs'
                            : 'bg-white text-neutral-600 border border-neutral-300'
                        }`}
                      >
                        <span className="text-[11px] font-mono font-bold">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                      </div>

                      {/* Left Spine Marker (Mobile / Tablet) */}
                      <div 
                        className={`lg:hidden absolute left-6 sm:left-8 -translate-x-1/2 top-10 w-8 h-8 rounded-full flex items-center justify-center z-20 transition-all duration-300 ${
                          isActive
                            ? 'bg-neutral-950 text-white border-2 border-blue-600 shadow-md'
                            : isPassed
                            ? 'bg-blue-600 text-white border-2 border-white shadow-xs'
                            : 'bg-white text-neutral-600 border border-neutral-300'
                        }`}
                      >
                        <span className="text-[10px] font-mono font-bold">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                      </div>

                      {/* Card Wrapper */}
                      <div 
                        className={`w-[calc(100%-3.5rem)] sm:w-[calc(100%-4.5rem)] ml-auto ${
                          isEven 
                            ? 'lg:w-[calc(50%-2.5rem)] lg:mr-auto lg:ml-0' 
                            : 'lg:w-[calc(50%-2.5rem)] lg:ml-auto lg:mr-0'
                        }`}
                      >
                        <div
                          className="w-full bg-white rounded-3xl border border-neutral-200 hover:border-neutral-300 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)]"
                        >
                          <div>
                            {/* Card Header */}
                            <div className="p-6 sm:p-8 bg-[#fafafa] border-b border-neutral-200">
                              <div className="flex items-center justify-between gap-2 mb-3 flex-wrap">
                                <div className="flex flex-wrap items-center gap-1.5">
                                  {project.roles.map((r, rIdx) => (
                                    <span
                                      key={rIdx}
                                      className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white border border-neutral-200 text-neutral-800"
                                    >
                                      {r}
                                    </span>
                                  ))}
                                </div>

                                {project.featured && (
                                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-neutral-900 bg-neutral-100 px-2.5 py-0.5 rounded-full border border-neutral-200 flex-shrink-0">
                                    <HiOutlineSparkles className="w-3.5 h-3.5 text-blue-600" />
                                    Featured
                                  </span>
                                )}
                              </div>

                              <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 tracking-tight leading-snug group-hover:text-blue-600 transition-colors">
                                {project.title}
                              </h3>

                              {/* Verified Metrics Strip */}
                              <div className="mt-5 pt-4 border-t border-neutral-200 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                                {project.metrics.map((m, mIdx) => (
                                  <div key={mIdx} className="flex flex-col">
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-700 truncate">
                                      {m.label}
                                    </span>
                                    <span className="font-mono text-base font-bold text-blue-600 mt-0.5">
                                      {m.value}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Card Body (Cut Paragraph in Half) */}
                            <div className="p-6 sm:p-8 space-y-4">
                              <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-normal">
                                {project.shortDescription}
                              </p>

                              {/* Tech Stack Chips */}
                              <div>
                                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-700 block mb-2">
                                  Tech Stack:
                                </span>
                                <div className="flex flex-wrap gap-1.5">
                                  {project.techStack.map((tech, tIdx) => (
                                    <span
                                      key={tIdx}
                                      className="px-2.5 py-1 text-[11px] font-semibold rounded-md bg-[#fafafa] border border-neutral-200 text-neutral-900"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Card Footer with Single Uniform Button */}
                          <div className="p-5 sm:p-6 bg-[#fafafa] border-t border-neutral-200 flex items-center justify-between gap-3">
                            <button
                              type="button"
                              onClick={() => setActiveModalProject(project)}
                              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold tracking-wide text-white bg-neutral-950 hover:bg-blue-600 rounded-full transition-colors shadow-sm cursor-pointer"
                            >
                              <HiOutlineDocumentMagnifyingGlass className="w-4 h-4" />
                              <span>View Case Study</span>
                            </button>

                            {project.githubUrl && (
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 text-neutral-700 hover:text-neutral-950 hover:bg-neutral-200 rounded-full transition-colors"
                                title="View GitHub Code"
                                aria-label="View GitHub Repository"
                              >
                                <HiOutlineArrowTopRightOnSquare className="w-4 h-4" />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>

                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          )}

        </div>

        {/* Strictly ONE Section Action Button at the bottom */}
        <div className="mt-16 flex justify-center">
          <motion.a
            href="https://github.com/Piyushyadav10"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold tracking-wide bg-neutral-950 text-white hover:bg-blue-600 transition-colors duration-200 shadow-sm hover:shadow-md cursor-pointer"
          >
            <span>Explore Complete GitHub Archive</span>
            <HiOutlineArrowTopRightOnSquare className="w-4 h-4" />
          </motion.a>
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
