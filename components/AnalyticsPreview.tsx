'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  HiOutlineChartBar, 
  HiOutlineCommandLine, 
  HiOutlineScale, 
  HiCheckCircle,
  HiCheck,
  HiArrowTrendingUp,
  HiOutlineShieldCheck
} from 'react-icons/hi2';

interface AnalyticsPreviewProps {
  mouseX?: any;
  mouseY?: any;
}

export default function AnalyticsPreview({ mouseX, mouseY }: AnalyticsPreviewProps) {
  const [activeTab, setActiveTab] = useState<'kpi' | 'sql' | 'ab'>('kpi');
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-full max-w-xl mx-auto">
      
      {/* Floating Satellite Card 1: Top-Right (Fraud Detection Signal) */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                y: [0, -8, 0],
                transition: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' }
              }
        }
        className="absolute -top-7 -right-3 sm:-right-6 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-slate-200/90 shadow-lg flex items-center gap-3 text-xs pointer-events-none"
      >
        <div className="p-2 rounded-xl bg-sky-50 text-sky-600 border border-sky-100/80">
          <HiOutlineShieldCheck className="w-4 h-4" />
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-bold text-slate-900 text-xs">87.2% Recall</span>
          </div>
          <p className="text-[10px] text-slate-500 font-mono">Fraud XGBoost · 300K+ txns</p>
        </div>
      </motion.div>

      {/* Floating Satellite Card 2: Bottom-Left (A/B Test Lift Pill) */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                y: [0, 8, 0],
                transition: { duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }
              }
        }
        className="absolute -bottom-6 -left-3 sm:-left-6 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-slate-200/90 shadow-lg flex items-center gap-3 text-xs pointer-events-none"
      >
        <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100/80">
          <HiArrowTrendingUp className="w-4 h-4" />
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <span className="text-emerald-700 font-bold text-xs">+14.0% Adoption Lift</span>
          </div>
          <p className="text-[10px] text-slate-500 font-mono">p &lt; 0.01 · 95% Confidence</p>
        </div>
      </motion.div>

      {/* Main Console Box */}
      <div className="relative bg-white rounded-2xl border border-slate-200/90 shadow-xl overflow-hidden transition-all">
        
        {/* Terminal Title Bar */}
        <div className="bg-slate-900 px-4 py-3 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-xs font-mono text-slate-400">piyush-analytics-suite // production</span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Verified Models</span>
          </div>
        </div>

        {/* Animated Tabs */}
        <div className="flex items-center bg-slate-100 border-b border-slate-200 px-3 pt-2 gap-1 overflow-x-auto text-xs">
          <button
            type="button"
            onClick={() => setActiveTab('kpi')}
            className={`relative flex items-center gap-1.5 px-3 py-2 rounded-t-lg font-semibold transition-colors ${
              activeTab === 'kpi'
                ? 'bg-white text-sky-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <HiOutlineChartBar className="w-4 h-4" />
            <span>Executive KPIs</span>
            {activeTab === 'kpi' && (
              <motion.span
                layoutId="activeHeroTab"
                transition={shouldReduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 350, damping: 25 }}
                className="absolute top-0 left-0 right-0 h-0.5 bg-sky-600"
              />
            )}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('sql')}
            className={`relative flex items-center gap-1.5 px-3 py-2 rounded-t-lg font-semibold transition-colors ${
              activeTab === 'sql'
                ? 'bg-white text-sky-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <HiOutlineCommandLine className="w-4 h-4" />
            <span>SQL Query Engine</span>
            {activeTab === 'sql' && (
              <motion.span
                layoutId="activeHeroTab"
                transition={shouldReduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 350, damping: 25 }}
                className="absolute top-0 left-0 right-0 h-0.5 bg-sky-600"
              />
            )}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('ab')}
            className={`relative flex items-center gap-1.5 px-3 py-2 rounded-t-lg font-semibold transition-colors ${
              activeTab === 'ab'
                ? 'bg-white text-sky-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <HiOutlineScale className="w-4 h-4" />
            <span>A/B Experimentation</span>
            {activeTab === 'ab' && (
              <motion.span
                layoutId="activeHeroTab"
                transition={shouldReduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 350, damping: 25 }}
                className="absolute top-0 left-0 right-0 h-0.5 bg-sky-600"
              />
            )}
          </button>
        </div>

        {/* Tab Content with Animated Entrance */}
        <div className="p-5 bg-white min-h-[310px]">
          <AnimatePresence mode="wait">
            
            {/* Tab 1: Executive KPIs */}
            {activeTab === 'kpi' && (
              <motion.div
                key="kpi"
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Validated Model Performance</h4>
                    <p className="text-xs text-slate-500">Benchmark results extracted from 300K+ banking transactions</p>
                  </div>
                  <span className="text-[11px] font-mono text-sky-700 bg-sky-50 px-2 py-0.5 rounded font-medium border border-sky-100">
                    Holdout Test
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {/* Metric 1 */}
                  <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-200/80 hover:bg-white hover:shadow-xs transition-all">
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                      <span>Fraud Recall</span>
                      <span className="text-emerald-700 font-semibold font-mono">XGBoost</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-slate-900">87.2%</span>
                      <span className="text-xs text-emerald-600 font-semibold">+16% lift</span>
                    </div>
                    <div className="mt-2 w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '87.2%' }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
                        className="bg-sky-600 h-full rounded-full"
                      />
                    </div>
                    <p className="mt-1.5 text-[10px] text-slate-500 font-mono">300K+ txns · 25+ features</p>
                  </div>

                  {/* Metric 2 */}
                  <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-200/80 hover:bg-white hover:shadow-xs transition-all">
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                      <span>Churn F1-Score</span>
                      <span className="text-sky-700 font-semibold font-mono">5-Fold CV</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-slate-900">0.84</span>
                      <span className="text-xs text-slate-600 font-mono">Acc: 87%</span>
                    </div>
                    <div className="mt-2 w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '84%' }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                        className="bg-blue-600 h-full rounded-full"
                      />
                    </div>
                    <p className="mt-1.5 text-[10px] text-slate-500 font-mono">120K+ accounts · CLV</p>
                  </div>

                  {/* Metric 3 */}
                  <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-200/80 hover:bg-white hover:shadow-xs transition-all">
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                      <span>Credit ROC-AUC</span>
                      <span className="text-indigo-700 font-semibold font-mono">SMOTE</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-slate-900">0.89</span>
                      <span className="text-xs text-emerald-600 font-mono">Acc: 87%</span>
                    </div>
                    <div className="mt-2 w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '89%' }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
                        className="bg-indigo-600 h-full rounded-full"
                      />
                    </div>
                    <p className="mt-1.5 text-[10px] text-slate-500 font-mono">200K+ loans · Underwriting</p>
                  </div>

                  {/* Metric 4 */}
                  <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-200/80 hover:bg-white hover:shadow-xs transition-all">
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                      <span>E-Commerce BI</span>
                      <span className="text-teal-700 font-semibold font-mono">Power BI</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-slate-900">18+ KPIs</span>
                      <span className="text-xs text-slate-500 font-mono">DAX</span>
                    </div>
                    <div className="mt-2 w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '92%' }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
                        className="bg-teal-600 h-full rounded-full"
                      />
                    </div>
                    <p className="mt-1.5 text-[10px] text-slate-500 font-mono">50K+ orders · Star Schema</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Tab 2: SQL Query Engine */}
            {activeTab === 'sql' && (
              <motion.div
                key="sql"
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="space-y-3 font-mono text-xs"
              >
                <div className="flex items-center justify-between text-slate-500 pb-1 border-b border-slate-100">
                  <span className="text-[11px] text-slate-700 font-semibold">customer_retention_cohort.sql</span>
                  <span className="text-[10px] text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-100 font-medium">PostgreSQL</span>
                </div>

                <div className="bg-slate-900 text-slate-200 p-3.5 rounded-xl overflow-x-auto text-[11px] leading-relaxed border border-slate-800">
                  <span className="text-purple-400">WITH</span> cohort_base <span className="text-purple-400">AS</span> (
                  <br />
                  &nbsp;&nbsp;<span className="text-purple-400">SELECT</span> user_id, DATE_TRUNC(<span className="text-emerald-300">&apos;month&apos;</span>, MIN(signup_date)) <span className="text-purple-400">AS</span> cohort_month
                  <br />
                  &nbsp;&nbsp;<span className="text-purple-400">FROM</span> users <span className="text-purple-400">GROUP BY</span> 1
                  <br />
                  ),
                  <br />
                  retention_table <span className="text-purple-400">AS</span> (
                  <br />
                  &nbsp;&nbsp;<span className="text-purple-400">SELECT</span> c.cohort_month,
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;COUNT(<span className="text-purple-400">DISTINCT</span> c.user_id) <span className="text-purple-400">AS</span> total_users,
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;ROUND(100.0 * COUNT(DISTINCT a.user_id) / COUNT(DISTINCT c.user_id), 1) <span className="text-purple-400">AS</span> m1_retention_pct
                  <br />
                  &nbsp;&nbsp;<span className="text-purple-400">FROM</span> cohort_base c
                  <br />
                  &nbsp;&nbsp;<span className="text-purple-400">LEFT JOIN</span> user_activity a
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">ON</span> c.user_id = a.user_id
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">AND</span> a.activity_month = c.cohort_month + <span className="text-emerald-300">INTERVAL &apos;1 month&apos;</span>
                  <br />
                  &nbsp;&nbsp;<span className="text-purple-400">GROUP BY</span> 1
                  <br />
                  )
                  <br />
                  <span className="text-purple-400">SELECT</span> * <span className="text-purple-400">FROM</span> retention_table <span className="text-purple-400">ORDER BY</span> 1 <span className="text-purple-400">DESC</span>;
                </div>

                <div className="rounded-xl border border-slate-200 overflow-hidden shadow-2xs">
                  <table className="w-full text-left text-[11px] font-sans">
                    <thead className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
                      <tr>
                        <th className="px-3 py-1.5">Cohort</th>
                        <th className="px-3 py-1.5">Users</th>
                        <th className="px-3 py-1.5">M1 Retention</th>
                        <th className="px-3 py-1.5">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-600 bg-white">
                      <tr>
                        <td className="px-3 py-1.5 font-mono">2024-Q3</td>
                        <td className="px-3 py-1.5 font-mono">14,280</td>
                        <td className="px-3 py-1.5 font-mono text-emerald-600 font-semibold">68.4%</td>
                        <td className="px-3 py-1.5 text-xs"><span className="text-emerald-600 flex items-center gap-1 font-medium"><HiCheck className="w-3.5 h-3.5 inline" /> Above Target</span></td>
                      </tr>
                      <tr>
                        <td className="px-3 py-1.5 font-mono">2024-Q2</td>
                        <td className="px-3 py-1.5 font-mono">11,940</td>
                        <td className="px-3 py-1.5 font-mono text-emerald-600 font-semibold">62.1%</td>
                        <td className="px-3 py-1.5 text-xs"><span className="text-emerald-600 flex items-center gap-1 font-medium"><HiCheck className="w-3.5 h-3.5 inline" /> Above Target</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}

            {/* Tab 3: A/B Experimentation with Animated Chart */}
            {activeTab === 'ab' && (
              <motion.div
                key="ab"
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="space-y-3"
              >
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Checkout Redesign Experiment</h4>
                    <p className="text-xs text-slate-500">Two-tailed z-test across 500K+ user sessions</p>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Statistically Significant (p &lt; 0.01)
                  </span>
                </div>

                {/* Animated Chart Visual */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-slate-600 font-semibold">Conversion Rate Distribution Curve</span>
                    <span className="font-mono text-emerald-700 font-bold">+14.0% Lift</span>
                  </div>

                  <svg viewBox="0 0 400 110" className="w-full h-24 overflow-visible">
                    {/* Gridlines */}
                    <line x1="20" y1="90" x2="380" y2="90" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 3" />
                    
                    {/* Control Curve (A) - Grey / Slate */}
                    <motion.path
                      d="M 40,90 Q 130,15 220,90"
                      fill="none"
                      stroke="#94a3b8"
                      strokeWidth="2.5"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.9, ease: 'easeOut' }}
                    />
                    
                    {/* Variant Curve (B) - Cyan / Sky */}
                    <motion.path
                      d="M 120,90 Q 210,5 300,90"
                      fill="none"
                      stroke="#0284c7"
                      strokeWidth="2.5"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
                    />

                    {/* Peak Marker for B */}
                    <motion.circle
                      cx="210"
                      cy="20"
                      r="4"
                      fill="#0284c7"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.8, type: 'spring' }}
                    />
                    <text x="218" y="22" fill="#0369a1" fontSize="10" fontFamily="monospace" fontWeight="bold">
                      14.1% (Variant)
                    </text>

                    {/* Peak Marker for A */}
                    <motion.circle
                      cx="130"
                      cy="45"
                      r="4"
                      fill="#64748b"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.6, type: 'spring' }}
                    />
                    <text x="75" y="45" fill="#475569" fontSize="10" fontFamily="monospace">
                      12.3% (Ctrl)
                    </text>
                  </svg>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs">
                    <span className="text-slate-500 block text-[10px] uppercase font-semibold">Control (A)</span>
                    <span className="text-base font-bold text-slate-800">12.3%</span>
                    <span className="text-[10px] text-slate-500 block font-mono">n = 254,120</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-sky-50 border border-sky-200 text-xs">
                    <span className="text-sky-800 block text-[10px] uppercase font-semibold">Variant (B) Winner</span>
                    <span className="text-base font-bold text-sky-900">14.1%</span>
                    <span className="text-[10px] text-sky-700 block font-mono">n = 253,980</span>
                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* Console Footer */}
        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Interactive Visualization Suite
          </span>
          <a href="#projects" className="text-sky-600 font-semibold hover:text-sky-700 hover:underline">
            View All 11 Projects &rarr;
          </a>
        </div>

      </div>
    </div>
  );
}
