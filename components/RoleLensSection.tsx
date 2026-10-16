'use client';

import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  HiOutlineChartBar, 
  HiOutlineCpuChip, 
  HiOutlineCircleStack, 
  HiOutlineBriefcase, 
  HiOutlineCursorArrowRays,
  HiCheckCircle,
  HiArrowRight
} from 'react-icons/hi2';

export type RoleType = 'All' | 'Data Analyst' | 'Data Scientist' | 'Data Engineer' | 'Business Analyst' | 'Product Analyst';

interface RoleLensProps {
  selectedRole: RoleType;
  onSelectRole: (role: RoleType) => void;
}

export const roleDetails: Record<
  Exclude<RoleType, 'All'>, 
  {
    icon: React.ComponentType<{ className?: string }>;
    tagline: string;
    focusAreas: string[];
    sampleProjects: string[];
    valueToTeam: string;
  }
> = {
  'Data Analyst': {
    icon: HiOutlineChartBar,
    tagline: 'SQL Analytics, Power BI DAX Modeling, and Executive Reporting',
    focusAreas: [
      'Complex SQL queries (Window functions, CTEs, multi-table joins)',
      'Advanced Excel (Power Query, Pivot Tables, financial modeling)',
      'Python & Pandas (Data cleaning & exploratory data analysis)',
      'Star Schema DAX modeling & interactive executive KPI dashboards'
    ],
    sampleProjects: ['E-commerce BI Dashboard', 'Banking Fraud Detection', 'Customer Churn Analysis'],
    valueToTeam: 'Delivers reliable, single-source-of-truth dashboards and fast SQL insights for commercial decision-makers.'
  },
  'Data Scientist': {
    icon: HiOutlineCpuChip,
    tagline: 'Predictive ML Modeling, Class Imbalance Handling, and Validation',
    focusAreas: [
      'Supervised Machine Learning (XGBoost, Random Forest, Logistic Regression)',
      'Domain feature engineering (Transaction velocity, risk ratios)',
      'Rigorous cross-validation (Stratified K-Fold, ROC-AUC, Precision-Recall tuning)',
      'Class imbalance solutions (SMOTE & threshold calibration for rare fraud events)'
    ],
    sampleProjects: ['Banking Fraud Classifier (87% Recall)', 'Loan Risk Classifier (0.89 ROC-AUC)', 'Customer Churn Predictor (0.84 F1)'],
    valueToTeam: 'Builds statistically verified predictive models that automate risk evaluation and increase operational accuracy.'
  },
  'Data Engineer': {
    icon: HiOutlineCircleStack,
    tagline: 'Relational Database Schemas, SQL Pipelines, and Data Hygiene',
    focusAreas: [
      'Relational schema design (3NF normalization, Star Schema, Fact/Dim tables)',
      'SQL data transformations, automated staging views, and data profiling',
      'Python REST API ingestion and structured JSON record parsing',
      'Automated schema constraints, deduplication, and anomaly alerts'
    ],
    sampleProjects: ['PostgreSQL Schema Design', 'Banking Transaction Schema', 'Flight Operations Data Pipeline'],
    valueToTeam: 'Constructs dependable schemas and clean data pipelines that power downstream analytics without friction.'
  },
  'Business Analyst': {
    icon: HiOutlineBriefcase,
    tagline: 'Commercial Insights, Profit Leak Diagnostics, and Strategy',
    focusAreas: [
      'Translating ambiguous business problems into quantified analytical goals',
      'KPI architecture (AOV, Margin Erosion, CAC, Attrition velocity)',
      'Root-cause analysis diagnosing regional and product line profit leaks',
      'Executive stakeholder reporting with feasible ROI recommendations'
    ],
    sampleProjects: ['E-commerce Profit Leak Diagnostics', 'HR Workforce Attrition', 'Airline Bottleneck Analysis'],
    valueToTeam: 'Bridges technical database complexity with commercial priorities to drive measurable profitability.'
  },
  'Product Analyst': {
    icon: HiOutlineCursorArrowRays,
    tagline: 'A/B Experimentation, Conversion Funnels, and Cohort Retention',
    focusAreas: [
      'Hypothesis testing & A/B trial design (Sample sizing, z-tests, SRM checks)',
      'Clickstream funnel tracking identifying critical user drop-off stages',
      'Cohort retention analysis evaluating Day-1 to Day-30 activity curves',
      'Data-backed product roadmap recommendations to increase feature adoption'
    ],
    sampleProjects: ['A/B Experimentation Framework (+14% Lift)', 'User Funnel Analytics', 'Recommendation Engine'],
    valueToTeam: 'Guides product roadmaps with statistical experimentation to measurably improve user engagement and retention.'
  }
};

export default function RoleLensSection({ selectedRole, onSelectRole }: RoleLensProps) {
  const shouldReduceMotion = useReducedMotion();
  const currentRole = selectedRole === 'All' ? 'Data Analyst' : selectedRole;
  const current = roleDetails[currentRole];
  const Icon = current.icon;

  const rolesList: Exclude<RoleType, 'All'>[] = [
    'Data Analyst',
    'Data Scientist',
    'Data Engineer',
    'Business Analyst',
    'Product Analyst'
  ];

  return (
    <section id="role-lens" className="py-24 sm:py-32 bg-transparent border-b border-neutral-200">
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
            Recruiter Lens
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-950">
            Tailored to Your Hiring Requirements
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-800 leading-relaxed font-normal">
            Switch perspectives to view relevant skills, core focus areas, and verified deliverables for your specific vacancy.
          </p>
        </motion.div>

        {/* 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column (4 cols): Role Tabs */}
          <div className="lg:col-span-4 flex flex-col space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-700 block mb-1">
              Select Hiring Focus
            </span>
            {rolesList.map((role) => {
              const isSelected = (selectedRole === 'All' && role === 'Data Analyst') || selectedRole === role;
              const RoleIcon = roleDetails[role].icon;

              return (
                <button
                  key={role}
                  type="button"
                  onClick={() => onSelectRole(role)}
                  className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-neutral-950 text-white border-neutral-950 shadow-sm'
                      : 'bg-[#fafafa] text-neutral-800 border-neutral-200 hover:bg-white hover:border-neutral-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <RoleIcon className={`w-5 h-5 ${isSelected ? 'text-blue-400' : 'text-blue-600'}`} />
                    <span className="font-bold text-sm tracking-tight">
                      {role}
                    </span>
                  </div>
                  <HiArrowRight className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-neutral-400'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column (8 cols): Active Role Dossier */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentRole}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -12 }}
                transition={{ duration: 0.35 }}
                className="bg-[#fafafa] border border-neutral-200 rounded-3xl p-8 sm:p-10 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
              >
                {/* Header */}
                <div className="flex items-center gap-4 pb-6 border-b border-neutral-200">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 tracking-tight">
                      {currentRole}
                    </h3>
                    <p className="text-sm font-semibold text-blue-600 mt-0.5">
                      {current.tagline}
                    </p>
                  </div>
                </div>

                {/* Focus Areas */}
                <div className="mt-8 space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                    Core Technical Competencies
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {current.focusAreas.map((area, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-neutral-200">
                        <HiCheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-xs font-semibold text-neutral-900 leading-snug">
                          {area}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Value Statement */}
                <div className="mt-8 pt-6 border-t border-neutral-200">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 mb-2">
                    Value Delivered to Team
                  </h4>
                  <p className="text-sm text-neutral-800 leading-relaxed font-normal">
                    {current.valueToTeam}
                  </p>
                </div>

                {/* Exactly ONE Action Button in this Section */}
                <div className="mt-8 pt-6 border-t border-neutral-200">
                  <a
                    href="#projects"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold tracking-wide bg-neutral-950 text-white hover:bg-blue-600 transition-colors duration-200 shadow-sm cursor-pointer"
                  >
                    <span>View {currentRole} Projects</span>
                    <HiArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
