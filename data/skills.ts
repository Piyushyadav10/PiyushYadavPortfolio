export interface SkillItem {
  name: string;
  level?: 'Hands-on' | 'Core' | 'Conceptual';
  context?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  description: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "programming-query",
    title: "Programming & Query Languages",
    iconName: "code",
    description: "Core languages used for data transformation, querying relational engines, building algorithmic logic, and web integration.",
    skills: [
      { name: "Python", level: "Core", context: "Data manipulation, statistical analysis & machine learning modeling" },
      { name: "SQL", level: "Core", context: "Complex joins, window functions, CTEs & multi-table aggregations" },
      { name: "DAX", level: "Hands-on", context: "Time-intelligence measures, dynamic filtering & calculated tables" },
      { name: "C++", level: "Core", context: "Data structures, algorithms & performance-critical logic at DTU" },
      { name: "HTML & CSS", level: "Hands-on", context: "Responsive layouts, web semantics & modern styling" }
    ]
  },
  {
    id: "data-analysis-viz",
    title: "Data Analysis & Visualization",
    iconName: "chart",
    description: "Translating raw transactional data into intuitive visual narratives, interactive dashboards, and executive KPI reports.",
    skills: [
      { name: "Power BI", level: "Core", context: "Star schemas, interactive reports, DAX modeling & role-based security" },
      { name: "Advanced Excel", level: "Core", context: "Power Query, Pivot Tables, XLOOKUP & scenario modeling" },
      { name: "Pandas & NumPy", level: "Core", context: "Data cleansing, vectorized operations & exploratory data analysis" },
      { name: "Tableau", level: "Hands-on", context: "Visual analytics, calculated fields & interactive dashboards" },
      { name: "Exploratory Data Analysis (EDA)", level: "Core", context: "Distribution checks, outlier profiling & correlation heatmaps" },
      { name: "Data Cleaning & Wrangling", level: "Core", context: "Handling missing values, type coercions & normalization" },
      { name: "Executive KPI Reporting", level: "Core", context: "Card metrics, trend decomposition & variance tracking" },
      { name: "Data Storytelling", level: "Hands-on", context: "Connecting quantitative metrics to strategic business context" }
    ]
  },
  {
    id: "ml-statistics",
    title: "Machine Learning & Statistics",
    iconName: "brain",
    description: "Developing validated predictive classifiers, managing class imbalance, and applying rigorous statistical evaluations.",
    skills: [
      { name: "Scikit-Learn", level: "Core", context: "Preprocessing pipelines, classification & model validation" },
      { name: "XGBoost", level: "Core", context: "Gradient boosting for fraud detection, churn & credit risk" },
      { name: "Classification & Regression", level: "Core", context: "Supervised predictive modeling & threshold calibration" },
      { name: "Feature Engineering", level: "Core", context: "Velocity ratios, rolling aggregates & categorical encodings" },
      { name: "Model Evaluation & Metrics", level: "Core", context: "Precision, Recall, ROC-AUC, PR-AUC, F1-Score & Confusion Matrix" },
      { name: "Class Imbalance Handling", level: "Hands-on", context: "SMOTE and cost-sensitive loss for skewed datasets" },
      { name: "Statistical Hypothesis Testing", level: "Hands-on", context: "Two-sample z-tests, t-tests, p-values & confidence intervals" },
      { name: "Generative AI & LLM Fundamentals", level: "Conceptual", context: "Prompt engineering, embeddings & API-driven workflows" }
    ]
  },
  {
    id: "data-engineering-db",
    title: "Data Engineering & Databases",
    iconName: "database",
    description: "Designing reliable database schemas, authoring robust transformation queries, and maintaining data validation checks.",
    skills: [
      { name: "PostgreSQL", level: "Core", context: "Normalized relational schemas, indexing & transactional consistency" },
      { name: "MySQL", level: "Core", context: "Relational querying, foreign key constraints & performance tuning" },
      { name: "Relational Schema Design", level: "Hands-on", context: "Star schemas, fact/dimension separation & 3NF normalization" },
      { name: "SQL Data Processing", level: "Core", context: "Common Table Expressions (CTEs), window functions & staging tables" },
      { name: "ETL & Transformation Concepts", level: "Hands-on", context: "Data extraction, transformation rules & loading into BI models" },
      { name: "Data Validation & Hygiene", level: "Hands-on", context: "Duplicate detection, constraint enforcement & range checks" },
      { name: "REST API Data Ingestion", level: "Hands-on", context: "Consuming JSON payloads and formatting structured records" }
    ]
  },
  {
    id: "business-product-analytics",
    title: "Business & Product Analytics",
    iconName: "trending",
    description: "Aligning analytical findings with commercial objectives, analyzing conversion funnels, and tracking customer retention.",
    skills: [
      { name: "Business KPI Analysis", level: "Core", context: "Revenue breakdown, profit margin variance & cost drivers" },
      { name: "Funnel Analysis", level: "Core", context: "Mapping multi-step conversion paths and isolating exit friction" },
      { name: "Customer Churn & Retention", level: "Core", context: "Contract duration analysis, attrition modeling & risk tiers" },
      { name: "Cohort Analysis", level: "Core", context: "Tenure-based retention curves & repeat purchase cadences" },
      { name: "Product Metrics", level: "Core", context: "AOV, CLV, MRR, ARR, CTR & feature adoption rates" },
      { name: "Root Cause Diagnostics", level: "Hands-on", context: "Drill-down decomposition to identify operational bottlenecks" },
      { name: "A/B Testing Fundamentals", level: "Hands-on", context: "MDE calculation, sample split checks (SRM) & uplift analysis" }
    ]
  },
  {
    id: "tools-platforms",
    title: "Development Tools & Platforms",
    iconName: "terminal",
    description: "Productivity, collaboration, version control, and lightweight deployment tools utilized across engineering projects.",
    skills: [
      { name: "Git & GitHub", level: "Core", context: "Version control, branching, PR collaboration & repository maintenance" },
      { name: "Jupyter Notebooks", level: "Core", context: "Interactive data analysis, model prototyping & visualization" },
      { name: "VS Code", level: "Core", context: "Primary development environment for Python, SQL & TypeScript" },
      { name: "Streamlit", level: "Hands-on", context: "Rapid prototyping of interactive machine learning user interfaces" },
      { name: "Flask", level: "Hands-on", context: "Lightweight Python REST APIs for delivering model inference" },
      { name: "Postman", level: "Hands-on", context: "Testing and validating API endpoints and JSON responses" }
    ]
  }
];
