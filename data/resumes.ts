export interface ResumeOption {
  id: string;
  role: string;
  fileName: string;
  fileSize: string;
  focus: string;
  highlights: string[];
  isDefault?: boolean;
  lastUpdated?: string;
}

export const resumeOptions: ResumeOption[] = [
  {
    id: "data-analyst",
    role: "Data Analyst",
    fileName: "Piyush_Yadav_Data_Analyst_Resume.pdf",
    fileSize: "119 KB",
    focus: "SQL, Power BI, DAX, Excel, KPI Reporting, and Exploratory Data Analysis.",
    highlights: ["SQL CTEs & Aggregations", "Power BI Dashboards & DAX", "Exploratory Data Analysis", "Business Performance Metrics"],
    isDefault: true,
    lastUpdated: "Recently Updated"
  },
  {
    id: "data-scientist",
    role: "Data Scientist",
    fileName: "Piyush_Yadav_Data_Scientist_Resume.pdf",
    fileSize: "119 KB",
    focus: "Machine Learning, Scikit-learn, XGBoost, Feature Engineering, Classification & Model Evaluation.",
    highlights: ["Supervised ML & Classification", "Feature Engineering & Selection", "Model Evaluation & ROC-AUC", "Python (Pandas, Scikit-learn)"],
    lastUpdated: "Recently Updated"
  },
  {
    id: "business-analyst",
    role: "Business Analyst",
    fileName: "Piyush_Yadav_Business_Analyst_Resume.pdf",
    fileSize: "117 KB",
    focus: "Requirements Analysis, Process Mapping, KPI Dashboards, Power BI & Strategic Recommendations.",
    highlights: ["Requirements Gathering & Gap Analysis", "KPI Reporting & Executive Dashboards", "Process Improvement & Root Cause", "Stakeholder Communication"],
    lastUpdated: "Recently Updated"
  },
  {
    id: "product-analyst",
    role: "Product Analyst",
    fileName: "Piyush_Yadav_Product_Analyst_Resume.pdf",
    fileSize: "116 KB",
    focus: "A/B Testing, Funnel Analysis, Cohort Retention, User Behavior & Product Metrics.",
    highlights: ["A/B Testing & Hypothesis Testing", "Funnel & User Journey Analysis", "Cohort & Retention Curves", "Product Metrics (AOV, CLV, MRR)"],
    lastUpdated: "Recently Updated"
  },
  {
    id: "risk-analytics",
    role: "Risk & Fraud Analytics",
    fileName: "Piyush_Yadav_Risk_Analytics_Resume.pdf",
    fileSize: "118 KB",
    focus: "Banking Fraud Detection, Transaction Anomaly Detection, Credit Risk & Financial KPIs.",
    highlights: ["Anomaly Detection & Velocity Features", "Class Imbalance Handling (SMOTE)", "Transaction Risk Scoring", "Loss Mitigation Modeling"],
    lastUpdated: "Recently Updated"
  }
];
