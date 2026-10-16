'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { 
  HiOutlineBuildingLibrary, 
  HiOutlineCheckBadge, 
  HiOutlineTrophy, 
  HiCheckCircle,
  HiArrowDownTray
} from 'react-icons/hi2';
import { certifications, achievements } from '@/data/certifications';

export default function EducationCertificationsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="credentials" className="py-24 sm:py-32 bg-transparent border-b border-neutral-200">
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
            Academic &amp; Professional Milestones
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-950">
            Education, Certifications &amp; Honors
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-800 leading-relaxed font-normal">
            Verified academic credentials, official technical certifications, and recognized engineering achievements.
          </p>
        </motion.div>

        {/* 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column (5 cols): Education & Coursework */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl border border-neutral-200 p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 flex-shrink-0">
                  <HiOutlineBuildingLibrary className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-700 block">
                    Education
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-950 tracking-tight">
                    Delhi Technological University (DTU)
                  </h3>
                </div>
              </div>

              <div className="space-y-3.5 text-xs text-neutral-800">
                <div className="flex items-center justify-between py-2 border-y border-neutral-100">
                  <span className="font-bold text-neutral-950">Degree:</span>
                  <span className="text-blue-600 font-bold">B.Tech in Software Engineering</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                  <span className="font-bold text-neutral-950">Duration:</span>
                  <span className="font-semibold text-neutral-800">Nov 2022 – Jul 2026</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                  <span className="font-bold text-neutral-950">Status:</span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                    <HiCheckCircle className="w-3.5 h-3.5" />
                    Completed
                  </span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                  <span className="font-bold text-neutral-950">Location:</span>
                  <span className="font-semibold text-neutral-800">New Delhi, India</span>
                </div>

                <div className="pt-3">
                  <span className="font-bold text-neutral-950 block mb-2 text-xs uppercase tracking-wider">
                    Core Engineering Coursework:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      'Database Management (DBMS)',
                      'Data Structures & Algorithms',
                      'Object-Oriented Software Eng.',
                      'Operating Systems',
                      'Computer Networks',
                      'Statistics & Data Analytics'
                    ].map((course) => (
                      <span
                        key={course}
                        className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-neutral-100 text-neutral-900 border border-neutral-200"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Achievements Card */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white rounded-3xl border border-neutral-200 p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 flex-shrink-0">
                  <HiOutlineTrophy className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-700 block">
                    Leadership &amp; Distinction
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-950 tracking-tight">
                    Documented Achievements
                  </h3>
                </div>
              </div>

              <div className="space-y-4">
                {achievements.map((ach) => (
                  <div key={ach.id} className="p-4 rounded-2xl bg-[#fafafa] border border-neutral-200">
                    <div className="flex items-center justify-between mb-1 gap-2">
                      <h4 className="text-xs font-bold text-neutral-950">
                        {ach.title}
                      </h4>
                      {ach.period && (
                        <span className="text-[11px] font-semibold text-blue-600 flex-shrink-0">
                          {ach.period}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-neutral-700 leading-relaxed font-normal">
                      {ach.summary}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column (7 cols): Technical Certifications */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-700 block mb-2">
              {`Technical Certifications (${certifications.length})`}
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 auto-rows-fr">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: shouldReduceMotion ? 0 : idx * 0.05 }}
                  className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.04)] hover:border-neutral-300 transition-all flex flex-col justify-between h-full min-h-[175px]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider">
                        {cert.issuer}
                      </span>
                      <HiOutlineCheckBadge className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    </div>
                    <h4 className="text-sm font-bold text-neutral-950 tracking-tight leading-snug">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-neutral-700 mt-2 line-clamp-2 leading-relaxed">
                      {cert.skills.join(' · ')}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between text-[11px]">
                    <span className="text-neutral-600 font-mono">
                      {cert.issueDate ? `Issued ${cert.issueDate}` : 'Official Credential'}
                    </span>
                    {cert.verified ? (
                      <span className="font-semibold text-neutral-900">Verified</span>
                    ) : (
                      <span className="font-medium text-neutral-600">Completed</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* Strictly ONE Action Button at bottom */}
        <div className="mt-16 flex justify-center">
          <motion.a
            href="/resumes/Piyush_Yadav_Resume.pdf"
            download="Piyush_Yadav_Resume.pdf"
            whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold tracking-wide bg-neutral-950 text-white hover:bg-blue-600 transition-colors duration-200 shadow-sm hover:shadow-md cursor-pointer"
          >
            <span>Download Verified Credentials</span>
            <HiArrowDownTray className="w-4 h-4" />
          </motion.a>
        </div>

      </div>
    </section>
  );
}
