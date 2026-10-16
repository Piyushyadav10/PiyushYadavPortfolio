'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  HiOutlineChartBar, 
  HiOutlineCpuChip, 
  HiOutlinePresentationChartLine, 
  HiOutlineLightBulb, 
  HiCheckBadge
} from 'react-icons/hi2';

export default function AboutSection() {
  const shouldReduceMotion = useReducedMotion();

  // 4 Core Capabilities with uniform 2 brand colors & Hi2 icons
  const capabilities = [
    {
      id: 'analytics',
      title: 'Data Analytics',
      desc: 'Advanced SQL queries, exploratory data analysis, and root-cause metric discovery.',
      icon: HiOutlineChartBar,
    },
    {
      id: 'bi',
      title: 'Business Intelligence',
      desc: 'Interactive Power BI dashboards, DAX data modeling, and executive KPI reporting.',
      icon: HiOutlinePresentationChartLine,
    },
    {
      id: 'ml',
      title: 'Machine Learning',
      desc: 'Supervised classification, feature engineering, and class imbalance mitigation.',
      icon: HiOutlineCpuChip,
    },
    {
      id: 'solving',
      title: 'Problem Solving',
      desc: 'Translating ambiguous operational bottlenecks into quantified, actionable solutions.',
      icon: HiOutlineLightBulb,
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-transparent border-b border-neutral-200">
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
            About Me
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-950">
            Engineering Precision Applied to Data Problems
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-800 leading-relaxed font-normal">
            B.Tech in Software Engineering from Delhi Technological University (DTU) specializing in predictive models, exploratory analytics, and commercial dashboards.
          </p>
        </motion.div>

        {/* 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (5 cols): Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            {/* Complete Profile Card */}
            <div className="relative w-full bg-white border border-neutral-200 rounded-3xl p-4 sm:p-5 shadow-[0_1px_3px_rgba(0,0,0,0.05),0_20px_40px_rgba(0,0,0,0.04)]">
              {/* Studio Backdrop for Real Photo */}
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-[#d8d8da] flex items-center justify-center">
                <Image
                  src="/images/Piyushformal.webp"
                  alt="Piyush Yadav - Software Engineering Graduate & Data Scientist"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-contain object-center"
                />
              </div>

              {/* Minimalist Credential Pill */}
              <div className="mt-4 pt-3.5 border-t border-neutral-100 flex items-center justify-between px-2">
                <div>
                  <p className="text-xs font-bold text-neutral-950 tracking-tight">
                    Piyush Yadav
                  </p>
                  <p className="text-[11px] text-neutral-700">
                    B.Tech in Software Engineering · DTU &apos;26
                  </p>
                </div>
                <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                  <HiCheckBadge className="w-3.5 h-3.5" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column (7 cols): How I Work & 4 Capabilities */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950">
                How I Work
              </h3>
              <p className="text-neutral-800 text-base sm:text-lg leading-relaxed font-normal">
                My software engineering training guides how I analyze data: establish clean pipelines, stress-test statistical assumptions, and construct interpretable predictive models that stakeholders trust.
              </p>
              <p className="text-neutral-800 text-base sm:text-lg leading-relaxed font-normal">
                I have built high-recall fraud detection systems, customer churn predictors, and executive Power BI suites that turn ambiguity into quantified, profitable actions.
              </p>
            </motion.div>

            {/* 4 Capability Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {capabilities.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : idx * 0.08 }}
                    className="p-6 rounded-2xl bg-[#fafafa] border border-neutral-200 hover:border-neutral-300 hover:bg-white hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-base font-bold text-neutral-950 tracking-tight">
                        {item.title}
                      </h4>
                      <p className="mt-1.5 text-xs text-neutral-700 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
