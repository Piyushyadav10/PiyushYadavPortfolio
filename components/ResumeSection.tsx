'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  HiArrowDownTray, 
  HiOutlineDocumentText, 
  HiCheckCircle
} from 'react-icons/hi2';
import { resumeOptions } from '@/data/resumes';

export default function ResumeSection() {
  const [selectedResumeId, setSelectedResumeId] = useState<string>('data-analyst');
  const shouldReduceMotion = useReducedMotion();

  const activeResume = resumeOptions.find(r => r.id === selectedResumeId) || resumeOptions[0];

  return (
    <section id="resume" className="py-24 sm:py-32 bg-transparent border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16 sm:mb-20"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-3">
            Recruiter Hub
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-950">
            Tailored Resume Downloads
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-800 leading-relaxed font-normal">
            Download the master curriculum vitae or select a version optimized for your specific analytics or engineering role.
          </p>
        </motion.div>

        {/* 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column (5 cols): Role Selector List */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-700 block mb-1">
              Select Profile ({resumeOptions.length})
            </span>
            {resumeOptions.map((res) => {
              const isSelected = res.id === selectedResumeId;

              return (
                <button
                  key={res.id}
                  type="button"
                  onClick={() => setSelectedResumeId(res.id)}
                  className={`w-full p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between gap-3 ${
                    isSelected
                      ? 'bg-neutral-950 text-white border-neutral-950 shadow-sm'
                      : 'bg-[#fafafa] text-neutral-800 border-neutral-200 hover:bg-white hover:border-neutral-300'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold tracking-tight">
                        {res.role}
                      </span>
                      {res.isDefault && (
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          isSelected ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600 border border-blue-100'
                        }`}>
                          Master
                        </span>
                      )}
                    </div>
                    <p className={`text-xs ${isSelected ? 'text-neutral-300' : 'text-neutral-700'}`}>
                      {res.focus}
                    </p>
                  </div>

                  <span className={`text-[11px] font-mono px-2 py-1 rounded-md ${
                    isSelected ? 'bg-neutral-800 text-neutral-200' : 'bg-white text-neutral-700 border border-neutral-200'
                  }`}>
                    {res.fileSize}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column (7 cols): Active Resume Dossier & Single Download Button */}
          <div className="lg:col-span-7">
            <div className="bg-[#fafafa] border border-neutral-200 rounded-3xl p-8 sm:p-10 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-4 pb-6 border-b border-neutral-200">
                <div className="p-3 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 flex-shrink-0">
                  <HiOutlineDocumentText className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 tracking-tight">
                    {activeResume.role} Resume
                  </h3>
                  <p className="text-xs font-semibold text-blue-600 mt-0.5">
                    {activeResume.lastUpdated || 'Recently Updated'} · {activeResume.fileSize} · PDF Format
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <p className="text-sm text-neutral-800 leading-relaxed font-normal">
                  {activeResume.focus}
                </p>

                <div className="pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-900 block mb-3">
                    Core Technical &amp; Role Highlights:
                  </span>
                  <div className="space-y-2">
                    {activeResume.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs text-neutral-900 font-semibold p-2.5 rounded-xl bg-white border border-neutral-200">
                        <HiCheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Exactly ONE Action Button in this Section with Uniform Style */}
              <div className="mt-8 pt-6 border-t border-neutral-200">
                <motion.a
                  href={`/resumes/${activeResume.fileName}`}
                  download={activeResume.fileName}
                  whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold tracking-wide bg-neutral-950 text-white hover:bg-blue-600 transition-colors duration-200 shadow-sm hover:shadow-md cursor-pointer"
                >
                  <span>Download {activeResume.role} Resume</span>
                  <HiArrowDownTray className="w-4 h-4" />
                </motion.a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
