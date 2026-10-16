export interface Project {
  id: string;
  title: string;
  roles: ('Data Analyst' | 'Data Scientist' | 'Data Engineer' | 'Business Analyst' | 'Product Analyst')[];
  featured: boolean;
  shortDescription: string;
  techStack: string[];
  metrics: { label: string; value: string }[];
  caseStudy: {
    businessProblem: string;
    dataset: {
      name: string;
      size: string;
      description: string;
      features?: string[];
    };
    methodology: string[];
    results: {
      metrics: { name: string; value: string; context: string }[];
      summary: string;
    };
    businessRecommendations: string[];
    limitations: string[];
  };
  githubUrl?: string;
  demoUrl?: string;
  demoType?: 'colab' | 'live' | 'dashboard';
  roleHighlights: Record<string, string>;
}

export const projects: Project[] = [
  {
    id: "banking-fraud-detection",
    title: "Banking Fraud Detection Analytics",
    roles: ["Data Analyst", "Data Scientist", "Data Engineer", "Business Analyst"],
    featured: true,
    shortDescription: "End-to-end anomaly detection and risk scoring framework analyzing 300K+ financial transactions to detect high-risk fraud patterns with high recall.",
    techStack: ["SQL", "Python", "Power BI", "Scikit-Learn", "XGBoost", "Pandas"],
    metrics: [
      { label: "Accuracy", value: "84%" },
      { label: "Precision", value: "81%" },
      { label: "Recall", value: "87%" },
      { label: "Transactions Analyzed", value: "300K+" }
    ],
    caseStudy: {
      businessProblem: "Financial institutions face severe loss and reputational risk from credit card and transfer fraud. With fraudulent transactions representing less than 1% of total volume, simple rules generate excessive false positives that frustrate legitimate customers while missing sophisticated multi-hop anomalies.",
      dataset: {
        name: "Financial Banking & Card Transactions Dataset",
        size: "300,000+ transaction records",
        description: "Transaction-level financial logs containing timestamp, customer demographic profiles, merchant category codes (MCC), transaction amounts, geographic origins, and historical velocity indicators.",
        features: ["Transaction Amount", "Time Delta between Transactions", "Merchant Risk Score", "Geographic Distance", "Device Fingerprint Discrepancy", "Transaction Frequency (1h/24h)"]
      },
      methodology: [
        "Data Hygiene & Ingestion: Processed raw transactional logs using SQL aggregations, handling missing merchant coordinates and resolving currency conversion anomalies.",
        "Exploratory Data Analysis (EDA): Uncovered severe right-skewed amount distributions and identified high-frequency off-peak transaction bursts as primary fraud indicators.",
        "Feature Engineering: Created 25+ risk-weighted features, including customer expenditure z-scores, velocity ratios (transactions in last 60 minutes vs. 30-day average), and cross-border distance leaps.",
        "Class Imbalance Handling: Leveraged SMOTE (Synthetic Minority Over-sampling Technique) combined with Tomek Links on training splits to prevent majority class bias.",
        "Model Development: Trained and benchmarked Logistic Regression, Random Forest, and XGBoost classifiers with custom threshold tuning prioritizing Recall to minimize false negatives.",
        "Dashboard & Monitoring: Built an interactive Power BI dashboard tracking Fraud Rate by MCC, geographic risk heatmaps, high-risk merchant segments, and daily loss trends."
      ],
      results: {
        metrics: [
          { name: "Model Recall", value: "87%", context: "Successfully caught 87% of fraudulent transactions in test set" },
          { name: "Precision", value: "81%", context: "Reduced unnecessary card blocking compared to baseline heuristic rules" },
          { name: "Model Accuracy", value: "84%", context: "Overall balanced test set classification rate" },
          { name: "Engineered Signals", value: "25+", context: "Risk variables deployed for model inference" }
        ],
        summary: "The XGBoost model achieved an optimal balance between sensitivity and precision, capturing 87% of fraudulent transactions while maintaining 81% precision, substantially cutting manual audit queue load."
      },
      businessRecommendations: [
        "Implement a tiered transaction verification protocol: transactions with risk scores > 0.85 undergo immediate automated step-up MFA or hold, while 0.50-0.85 are queued for expedited analyst review.",
        "Introduce merchant velocity caps for newly registered merchant IDs exhibiting sudden spikes in micro-transactions within 24 hours.",
        "Establish continuous feedback loops where analyst chargeback outcomes regularly retrain the inference pipeline monthly."
      ],
      limitations: [
        "Offline static evaluation: The model was trained on historical transaction batches and does not yet account for adversarial fraud drift without periodic retraining.",
        "Cold-start latency: New cardholders with under 7 days of transaction history lack baseline velocity features, necessitating fallback rule-based checks."
      ]
    },
    githubUrl: "https://github.com/Piyushyadav10/Fraud-Detection-System.git",
    roleHighlights: {
      "Data Analyst": "Extracted transaction patterns via SQL CTEs, identified geographic risk hotspots, and built executive KPI monitoring in Power BI.",
      "Data Scientist": "Engineered 25+ velocity features, handled extreme 1:99 class imbalance with SMOTE, and tuned XGBoost for high recall (87%).",
      "Data Engineer": "Structured data cleaning pipelines, validated schema constraints, and prepared clean partitioned transaction features.",
      "Business Analyst": "Quantified fraud loss exposure across merchant categories and defined automated risk escalation workflows."
    }
  },
  {
    id: "customer-churn-analytics",
    title: "Customer Churn and Retention Analytics",
    roles: ["Data Analyst", "Data Scientist", "Business Analyst", "Product Analyst"],
    featured: true,
    shortDescription: "Predictive subscriber lifecycle analytics on 120K+ customer accounts to diagnose attrition drivers, predict churn risk, and calculate Customer Lifetime Value (CLV).",
    techStack: ["SQL", "Python", "Power BI", "Scikit-Learn", "XGBoost", "Pandas"],
    metrics: [
      { label: "Accuracy", value: "87%" },
      { label: "F1-Score", value: "0.84" },
      { label: "Records Analyzed", value: "120K+" },
      { label: "CLV Segmentation", value: "4 Tiers" }
    ],
    caseStudy: {
      businessProblem: "Customer acquisition costs in subscription services are 5x higher than retention. Without predictive churn warnings, marketing teams cannot intervene before dissatisfied subscribers cancel, leading to recurring monthly revenue erosion.",
      dataset: {
        name: "Telecom & SaaS Subscriber Behavior Dataset",
        size: "120,000+ subscriber records",
        description: "Demographic information, contract duration (month-to-month vs. 1-year/2-year), payment methods, monthly bill amounts, tenure, support ticket frequency, and service usage logs.",
        features: ["Tenure in Months", "Contract Type", "Monthly Charges", "Total Charges", "Payment Method", "Tech Support Tickets", "Internet Service Type", "Paperless Billing"]
      },
      methodology: [
        "Data Wrangling & Transformation: Cleaned null charges, formatted tenure buckets, and created SQL views joining account usage records with billing logs.",
        "Cohort & Churn Driver Analysis: Analyzed retention curves across customer tenure, uncovering that month-to-month contract holders exhibited a 42% churn rate compared to under 8% for 2-year contracts.",
        "Feature Importance & Encoding: Applied one-hot encoding for categorical variables and evaluated feature correlations; identified high monthly charges paired with fiber optic service as the top churn predictor.",
        "Predictive Modeling: Trained XGBoost and Random Forest classifiers using stratified 5-fold cross-validation, achieving an F1-score of 0.84.",
        "Executive Power BI Dashboard: Designed an end-to-end dashboard tracking Churn Rate, At-Risk Monthly Recurring Revenue, Customer Lifetime Value (CLV), and Net Promoter correlations."
      ],
      results: {
        metrics: [
          { name: "Model Accuracy", value: "87%", context: "Classification accuracy on holdout test set" },
          { name: "F1-Score", value: "0.84", context: "Balanced harmonic mean of precision and recall for churners" },
          { name: "Primary Churn Cluster", value: "Month-to-month contracts with tenure < 6 months", context: "Accounts for 64% of total churn volume" },
          { name: "Customer Records", value: "120,000+", context: "End-to-end dataset evaluated" }
        ],
        summary: "The predictive model identified subscribers at risk of cancellation up to 60 days before contract expiry with 87% accuracy, enabling proactive retention workflows."
      },
      businessRecommendations: [
        "Incentivize month-to-month subscribers with targeted discounts to migrate to annual contracts after their 3rd active month.",
        "Trigger proactive customer success outreach when a customer files more than two tech support tickets within a single billing cycle.",
        "Review pricing tiers for premium fiber optic plans where churn was disproportionately driven by perception of cost-to-value."
      ],
      limitations: [
        "Lacks qualitative feedback data: Survey sentiment or exit interview notes were not integrated into the structured feature set.",
        "Static billing cycles: Real-time telemetry on daily feature usage within the app was summarized into monthly aggregates."
      ]
    },
    githubUrl: "https://github.com/Piyushyadav10/Customer-Churn-Prediction.git",
    roleHighlights: {
      "Data Analyst": "Uncovered churn drivers through SQL aggregations and built executive KPI views tracking CLV and churn rates in Power BI.",
      "Data Scientist": "Trained XGBoost model with hyperparameter tuning, achieving 87% accuracy and 0.84 F1-score with clear feature importance rankings.",
      "Business Analyst": "Translated churn risk probabilities into potential annual revenue savings and retention campaign ROI projections.",
      "Product Analyst": "Conducted cohort retention analysis across onboarding tenure, identifying the 30-to-90 day window as the critical retention inflection point."
    }
  },
  {
    id: "ecommerce-performance-dashboard",
    title: "E-commerce Business Performance Dashboard",
    roles: ["Data Analyst", "Business Analyst", "Product Analyst"],
    featured: true,
    shortDescription: "Multi-channel retail intelligence dashboard evaluating 50K+ transactions to track revenue, profit margins, Average Order Value (AOV), and customer growth.",
    techStack: ["Power BI", "SQL", "Excel", "Power Query", "DAX"],
    metrics: [
      { label: "Transactions", value: "50K+" },
      { label: "Metrics Tracked", value: "18+ KPIs" },
      { label: "Data Sources", value: "Multi-Table Relational" },
      { label: "Core Dimensions", value: "Regional & Category" }
    ],
    caseStudy: {
      businessProblem: "E-commerce leadership lacked a single source of truth across orders, inventory, discounts, and regional logistics, making it difficult to pinpoint why top-line revenue was growing while net profit margins were declining.",
      dataset: {
        name: "E-commerce Orders & Sales Multi-Table Dataset",
        size: "50,000+ transactional records",
        description: "Relational database comprising Orders, Customers, Products, Shipping, and Returns tables across 4 geographic regions and 15 product sub-categories.",
        features: ["Order ID", "Order Date", "Customer Segment", "Product Category", "Sales Amount", "Discount Rate", "Profit Margin", "Shipping Mode", "Return Status"]
      },
      methodology: [
        "Data Modeling & Normalization: Constructed a clean Star Schema in Power BI with Fact_Orders surrounded by Dim_Customers, Dim_Products, Dim_Date, and Dim_Geography.",
        "SQL & Power Query Transformations: Utilized Common Table Expressions (CTEs) and window functions in SQL to pre-aggregate customer acquisition cohorts and clean inconsistent regional codes.",
        "Advanced DAX Measures: Developed dynamic time-intelligence calculations (YoY Growth, MTD, YTD), dynamic discount impact measures, and customer segment contribution ratios.",
        "Executive UI/UX Design: Built a 4-page responsive dashboard covering Executive Summary, Product Profitability, Regional Logistics, and Customer Cohort Retention.",
        "Root Cause Diagnostics: Isolated a specific product category (Tables and Bookcases) where aggressive discounting (>25%) produced negative gross margins despite high volume."
      ],
      results: {
        metrics: [
          { name: "Profit Leak Identified", value: "Negative margin on 2 sub-categories", context: "Uncontrolled discounting caused 18% loss in furniture sector" },
          { name: "AOV Variance", value: "Corporate segment leads by 28%", context: "Higher basket size identified in B2B repeat purchasers" },
          { name: "Return Rate Impact", value: "12% average returns", context: "Standard shipping experienced 2x higher damage return rate than express" },
          { name: "Records Processed", value: "50,000+", context: "Consolidated into synchronized star schema" }
        ],
        summary: "Provided executive stakeholders with transparent visibility into true unit economics, proving that volume growth in discounted categories was cannibalizing overall profitability."
      },
      businessRecommendations: [
        "Enforce strict discount caps: Cap promotional discounting at 15% for heavy furniture items where freight costs erode margin.",
        "Prioritize B2B Corporate buyers: Shift ad spend toward corporate accounts exhibiting 28% higher Average Order Value and 40% lower return rates.",
        "Renegotiate regional logistics contracts in southern shipping zones where transit delays correlated with elevated customer cancellations."
      ],
      limitations: [
        "Excludes off-platform marketing spend: Cost per Acquisition (CAC) figures were estimated as ad platform clickstream data was not directly piped into the ERP.",
        "Weekly update cadence: Dashboard relies on daily batch refreshes rather than real-time streaming."
      ]
    },
    githubUrl: "https://github.com/Piyushyadav10/Marketing-Campaign-Analysis.git",
    roleHighlights: {
      "Data Analyst": "Architected star schema data model, authored complex DAX time-intelligence formulas, and built interactive Power BI visualizations.",
      "Business Analyst": "Identified margin-eroding discount patterns and delivered actionable category repricing recommendations to management.",
      "Product Analyst": "Analyzed purchase conversion by channel and tracked customer reorder frequencies across acquisition cohorts."
    }
  },
  {
    id: "credit-risk-loan-approval",
    title: "Loan Approval & Credit Risk Prediction System",
    roles: ["Data Scientist", "Business Analyst", "Data Analyst"],
    featured: true,
    shortDescription: "Machine learning risk classification framework analyzing 200K+ loan applications to automate credit underwriting, evaluate default probability, and optimize approval thresholds.",
    techStack: ["Python", "SQL", "Pandas", "Scikit-Learn", "XGBoost", "Streamlit", "Power BI"],
    metrics: [
      { label: "Accuracy", value: "87%" },
      { label: "ROC-AUC", value: "0.89" },
      { label: "Applications", value: "200K+" },
      { label: "Models Compared", value: "3 Algorithms" }
    ],
    caseStudy: {
      businessProblem: "Manual credit appraisal is slow, inconsistent, and expensive. Lenders need automated predictive underwriting that reliably flags high-risk defaults without unnecessarily turning away creditworthy applicants.",
      dataset: {
        name: "Retail Banking Credit & Loan Applications Dataset",
        size: "200,000+ loan application records",
        description: "Demographic profiles, credit history, debt-to-income ratios (DTI), annual income, loan amount requested, employment stability, home ownership status, and loan repayment status.",
        features: ["Credit Score", "Annual Income", "Debt-to-Income (DTI) Ratio", "Loan Amount", "Interest Rate", "Delinquency in 2 Years", "Revolving Utilization", "Employment Length"]
      },
      methodology: [
        "Data Preprocessing: Imputed missing credit history indicators using median by income tier, capped extreme outlier incomes, and encoded categorical loan purposes.",
        "Exploratory Data Analysis: Discovered that applicants with DTI > 35% and credit scores < 620 exhibited a 4.2x higher default probability.",
        "Feature Engineering: Created financial health ratios including Loan-to-Income, Disposable Income post Debt Obligation, and Credit Line Utilization velocity.",
        "Model Comparison & Validation: Evaluated Logistic Regression, Random Forest, and XGBoost using Stratified K-Fold. XGBoost outperformed with 87% accuracy and 0.89 ROC-AUC.",
        "Interactive Deployment: Created a Streamlit application allowing loan officers to input applicant attributes and receive instant default probability scores with SHAP-based feature explanations."
      ],
      results: {
        metrics: [
          { name: "Model ROC-AUC", value: "0.89", context: "Demonstrated strong discrimination between defaulters and non-defaulters" },
          { name: "Accuracy", value: "87%", context: "Verified on out-of-time validation holdout" },
          { name: "Underwriting Time", value: "< 2 seconds", context: "Instant score generation vs. days of manual review" },
          { name: "Dataset Scale", value: "200,000+", context: "Comprehensive historical loan portfolio records" }
        ],
        summary: "Delivered a high-performing risk classifier capable of automating up to 70% of standard loan approval decisions while isolating borderline cases for senior underwriter review."
      },
      businessRecommendations: [
        "Establish automated approval for applicant scores exceeding 0.90 credit confidence, freeing senior credit underwriters to focus on complex borderline applications.",
        "Adjust risk-based pricing: Offer dynamic interest rates that reflect predicted default probability rather than static credit tiers.",
        "Monitor economic cycle drift: Recalibrate DTI cutoffs quarterly to account for macro-economic inflation and interest rate adjustments."
      ],
      limitations: [
        "Historical bias: Training data reflects past credit approval guidelines, which may under-represent unbanked or gig-economy applicants with non-traditional income streams.",
        "Explainability requirements: Complex ensemble models require SHAP proxy values to satisfy fair lending regulatory audit requirements."
      ]
    },
    githubUrl: "https://github.com/Piyushyadav10/Credit-Risk-Analysis.git",
    roleHighlights: {
      "Data Scientist": "Benchmarked multiple classifiers, optimized hyperparameters via GridSearchCV, and achieved 0.89 ROC-AUC with explainable SHAP values.",
      "Business Analyst": "Modeled credit portfolio default risk distributions and evaluated risk-versus-volume trade-offs for loan book growth.",
      "Data Analyst": "Extracted risk profiles via SQL, analyzed DTI distributions, and produced credit quality dashboards in Power BI."
    }
  },
  {
    id: "ab-testing-experimentation",
    title: "A/B Testing & Product Experimentation Analytics",
    roles: ["Product Analyst", "Data Analyst", "Business Analyst"],
    featured: false,
    shortDescription: "Statistical experimentation framework analyzing 20+ feature rollouts using two-tailed hypothesis testing, sample size calculation, and user behavior metrics.",
    techStack: ["Python", "SQL", "SciPy", "Statsmodels", "Power BI", "Pandas"],
    metrics: [
      { label: "Experiments Run", value: "20+" },
      { label: "Stat Sig Uplift", value: "+14%" },
      { label: "Confidence Level", value: "95% (p < 0.05)" },
      { label: "Metrics Tracked", value: "CTR, Conv, ARPU" }
    ],
    caseStudy: {
      businessProblem: "Product teams were making roadmap decisions based on intuition rather than data, risking engineering resources on features that failed to improve user engagement or conversion.",
      dataset: {
        name: "User Product Engagement & Variant Split Dataset",
        size: "20+ experiments with 500K+ cumulative user sessions",
        description: "User session logs with variant group tags (Control vs. Variant A/B), clickstream timestamps, feature interactions, conversion flags, and revenue generated per session.",
        features: ["User ID", "Experiment ID", "Variant Group", "Device Type", "User Tenure Segment", "Primary CTA Clicks", "Checkout Completed", "Session Revenue"]
      },
      methodology: [
        "Sample Size & Power Calculation: Pre-calculated required sample size using baseline conversion rates and Minimum Detectable Effect (MDE) of 3% at 80% statistical power and 5% alpha.",
        "Data Hygiene & SRM Verification: Ran Chi-Square goodness-of-fit tests to verify that Sample Ratio Mismatch (SRM) did not corrupt the 50/50 variant split.",
        "Statistical Testing: Applied two-sample z-tests for conversion proportions and Welch's t-tests for continuous revenue metrics, controlling for non-normal spend distributions with bootstrapping.",
        "Interactive Experiment Dashboard: Built a Power BI reporting tool showing daily conversion trends, cumulative p-values, confidence intervals, and segmented lift across mobile vs. desktop users."
      ],
      results: {
        metrics: [
          { name: "Feature Adoption Uplift", value: "+14%", context: "Statistically significant improvement in redesigned checkout flow" },
          { name: "P-Value", value: "< 0.01", context: "Far below standard alpha threshold of 0.05" },
          { name: "Experiments Analyzed", value: "20+", context: "Product feature tests evaluated" },
          { name: "Revenue per User", value: "+8.4%", context: "Observed lift in Variant group ARPU" }
        ],
        summary: "Validated that the streamlined checkout variant produced a statistically significant 14% lift in feature adoption and 8.4% increase in ARPU without cannibalizing other offerings."
      },
      businessRecommendations: [
        "Roll out the winning checkout variant to 100% of user traffic, beginning with mobile users who exhibited the largest lift.",
        "Adopt pre-experiment power analysis as a mandatory product launch prerequisite to eliminate underpowered tests.",
        "Monitor novelty effect: Track cohort metrics at 30 and 60 days post-launch to ensure observed engagement gains persist over time."
      ],
      limitations: [
        "Network effects: Potential user spillover in social sharing features could slightly blur independence between control and variant groups.",
        "Short measurement window: Experiments were capped at 21 days to prevent seasonal holiday confounding."
      ]
    },
    githubUrl: "https://github.com/Piyushyadav10/Marketing-Campaign-Analysis.git",
    roleHighlights: {
      "Product Analyst": "Formulated experiment hypotheses, verified sample balance (SRM), and translated statistical p-values into product rollout recommendations.",
      "Data Analyst": "Extracted session events via SQL, computed variance and confidence intervals, and automated reporting in Power BI.",
      "Business Analyst": "Forecasted annual revenue impact of winning variants and aligned testing schedules with product sprint milestones."
    }
  },
  {
    id: "user-behavior-funnel-analytics",
    title: "User Behavior & Clickstream Funnel Analytics",
    roles: ["Product Analyst", "Business Analyst", "Data Analyst"],
    featured: false,
    shortDescription: "Clickstream behavioral analytics on 5M+ interaction events to map user journey drop-offs, quantify funnel friction, and improve onboarding activation.",
    techStack: ["SQL", "Python", "Power BI", "Pandas", "Data Modeling"],
    metrics: [
      { label: "Interaction Events", value: "5M+" },
      { label: "Funnel Stages", value: "5 Steps" },
      { label: "Drop-Off Pinpointed", value: "Stage 3 (46%)" },
      { label: "Cohort Retention", value: "12-Week Curve" }
    ],
    caseStudy: {
      businessProblem: "A digital product observed that despite high landing page traffic, overall account activation remained stubbornly low. The product team needed clear diagnostic insights on where and why prospective users dropped off during onboarding.",
      dataset: {
        name: "Clickstream User Telemetry & Event Log Dataset",
        size: "5,000,000+ interaction events",
        description: "Granular timestamped clickstream events spanning session starts, screen views, CTA clicks, form input errors, onboarding steps, and payment completions across mobile and web platforms.",
        features: ["Session ID", "User ID", "Event Timestamp", "Event Name", "Page URL", "Device OS", "Referral Source", "Form Error Count", "Completed Step"]
      },
      methodology: [
        "Event Sequence Processing: Formatted unstructured event logs using SQL window functions (LEAD, LAG) to reconstruct user journey transition paths.",
        "Funnel Drop-Off Modeling: Built 5-step conversion funnels tracking: Landing Page -> Sign Up -> Profile Creation -> Feature Setup -> First Value Action.",
        "Error Analysis: Filtered sessions encountering form validation errors, proving that complex password requirements and redundant fields drove 46% of drop-offs at Step 3.",
        "Cohort Retention Mapping: Grouped users by signup week to build retention heatmaps evaluating Day-1, Day-7, Day-14, and Day-30 activity curves.",
        "Visualization: Developed an interactive Power BI report with Sankey diagrams and step-by-step conversion drill-downs."
      ],
      results: {
        metrics: [
          { name: "Primary Friction Point", value: "Step 3 (Profile & Setup)", context: "46% of total onboarding drop-offs concentrated here" },
          { name: "Form Error Correlation", value: "3.2x higher exit", context: "Users experiencing validation errors abandoned session within 90 seconds" },
          { name: "Events Processed", value: "5M+", context: "High-volume clickstream logs transformed via SQL" },
          { name: "Mobile vs Desktop", value: "Mobile drop-off 18% higher", context: "Unoptimized mobile form layout identified" }
        ],
        summary: "Pinpointed the exact onboarding screen causing nearly half of all lost signups, providing product managers with clear UI simplification evidence."
      },
      businessRecommendations: [
        "Defer non-essential profile questions until after the user experiences the product's primary core feature value.",
        "Introduce social sign-on (Google/Apple) to reduce friction on mobile devices where typing errors were most frequent.",
        "Trigger contextual in-app guidance if a user remains inactive on Step 3 for more than 45 seconds."
      ],
      limitations: [
        "Unauthenticated guest tracking: Cookie resets occasionally fragmented guest sessions into multiple visitor IDs before sign-up completion."
      ]
    },
    githubUrl: "https://github.com/Piyushyadav10/Customer-Churn-Prediction.git",
    roleHighlights: {
      "Product Analyst": "Analyzed user journey transition matrices, identified onboarding bottlenecks, and designed streamlined activation flows.",
      "Data Analyst": "Authored advanced SQL queries utilizing LEAD/LAG functions to trace multi-step event paths across 5M+ rows.",
      "Business Analyst": "Quantified customer acquisition cost wasted on bounced users and established clear activation benchmark targets."
    }
  },
  {
    id: "airline-operations-analytics",
    title: "Airline Operations & Flight Delay Analytics",
    roles: ["Data Analyst", "Business Analyst", "Data Engineer"],
    featured: false,
    shortDescription: "Operational logistics dashboard analyzing 1M+ flights to identify turnaround bottlenecks, evaluate delay cascades, and optimize route profitability.",
    techStack: ["SQL", "Power BI", "Python", "Excel", "Data Modeling"],
    metrics: [
      { label: "Flight Records", value: "1M+" },
      { label: "Routes Tracked", value: "250+ Airports" },
      { label: "Primary Delay Driver", value: "Late Aircraft Cascade" },
      { label: "Reporting Cadence", value: "Daily Ops" }
    ],
    caseStudy: {
      businessProblem: "Flight delays cost airlines billions annually in passenger compensation, gate penalties, and unscheduled maintenance. Operations managers needed clear visibility into delay causes and cascading turnaround impacts across domestic routes.",
      dataset: {
        name: "Commercial Flight Operations & Delays Dataset",
        size: "1,000,000+ flight operational records",
        description: "Scheduled vs. actual departure/arrival timestamps, origin/destination airport codes, carrier IDs, cancellation reasons, taxi-out/in times, and detailed delay categorizations.",
        features: ["Tail Number", "Origin Airport", "Destination Airport", "Scheduled Departure", "Departure Delay", "Arrival Delay", "Carrier Delay", "Weather Delay", "NAS Delay", "Late Aircraft Delay"]
      },
      methodology: [
        "Data Cleaning & Indexing: Handled timezone disparities between departure and arrival hubs, calculated net air time, and standardized cancellation codes.",
        "Cascading Delay Analysis: Traced individual aircraft tail numbers across sequential flight legs to quantify how a 30-minute morning delay amplified into 90+ minutes by evening.",
        "Route & Hub Profiling: Ranked airports and routes by On-Time Performance (OTP) and average gate wait times.",
        "Operations Dashboard: Built a multi-page Power BI dashboard featuring delay category decomposition, route map heatmaps, fleet utilization metrics, and ground turnaround time distributions."
      ],
      results: {
        metrics: [
          { name: "Dominant Delay Source", value: "Late Aircraft Delay (52%)", context: "Propagating delay from previous flight leg was the leading contributor" },
          { name: "Hub Bottleneck", value: "Evening departures (17:00-20:00)", context: "OTP drops by 34% during peak evening congestion window" },
          { name: "Dataset Scale", value: "1M+ flights", context: "Full multi-hub domestic operational history" },
          { name: "Ground Turnaround", value: "48 min median", context: "Tight scheduled buffers left zero resilience for weather delays" }
        ],
        summary: "Demonstrated that schedule buffer compression on high-density routes was the root cause of cascading delays, providing evidence for schedule rescheduling."
      },
      businessRecommendations: [
        "Increase scheduled turnaround buffers by 12 minutes for aircraft operating high-congestion hub routes during afternoon banks.",
        "Implement predictive gate assignment algorithms at major hubs to minimize taxi-in delays for arriving flights with tight connections.",
        "Establish pre-emptive flight re-routing protocols during regional weather advisories before tarmac delay penalties trigger."
      ],
      limitations: [
        "Excludes crew duty hour rosters: Crew scheduling constraints that occasionally forced cancellations were not available in the public telemetry dataset."
      ]
    },
    githubUrl: "https://github.com/Piyushyadav10/Marketing-Campaign-Analysis.git",
    roleHighlights: {
      "Data Analyst": "Analyzed flight delay distributions, created OTP KPIs in Power BI, and evaluated route-level variance using SQL.",
      "Business Analyst": "Evaluated the operational cost impact of cascading turnaround delays and proposed buffer optimizations for flight scheduling.",
      "Data Engineer": "Structured multi-table schema linking airport geographic metadata with transactional flight logs and scheduled timetables."
    }
  },
  {
    id: "hr-analytics-dashboard",
    title: "HR Workforce & Employee Attrition Analytics",
    roles: ["Data Analyst", "Business Analyst"],
    featured: false,
    shortDescription: "Strategic human resources dashboard evaluating 80K+ employee records to identify attrition hotspots, analyze pay equity, and support workforce retention planning.",
    techStack: ["Power BI", "Excel", "SQL", "Python", "DAX"],
    metrics: [
      { label: "Employee Records", value: "80K+" },
      { label: "Attrition Hotspot", value: "Sales & Tech (2-3 yr)" },
      { label: "Key Predictor", value: "Overtime & Stagnant Pay" },
      { label: "Dashboard Views", value: "3 Modules" }
    ],
    caseStudy: {
      businessProblem: "Unplanned employee turnover drives up recruiting costs and disrupts project delivery. HR leadership needed a data-driven understanding of which departments were losing talent and the root factors driving voluntary resignations.",
      dataset: {
        name: "Enterprise Workforce & HR Demographics Dataset",
        size: "80,000+ employee records",
        description: "Anonymized employee records encompassing job role, department, tenure, monthly salary, performance rating, overtime status, commute distance, promotion history, and attrition status.",
        features: ["Employee ID", "Department", "Job Level", "Monthly Income", "Years at Company", "Years in Current Role", "Overtime", "Performance Rating", "Attrition"]
      },
      methodology: [
        "Data Hygiene & Verification: Validated tenure logic, eliminated duplicate IDs, and categorized salary into departmental quartiles.",
        "Segmentation Analysis: Cross-tabulated attrition rates across tenure bands, department functions, and overtime frequency.",
        "Advanced DAX Measures: Created dynamic headcount tracking, annual voluntary attrition percentage, average tenure by role, and salary disparity indices.",
        "Executive Dashboard: Built an interactive HR executive suite in Power BI featuring department filters, compensation distribution scatter plots, and an attrition risk matrix."
      ],
      results: {
        metrics: [
          { name: "Attrition Spike", value: "24% in Sales & R&D", context: "Employees working frequent overtime exhibited 2.8x higher attrition rate" },
          { name: "Critical Tenure Window", value: "Year 2 to Year 3", context: "Greatest voluntary exit rate occurred when employees passed 24 months without role promotion" },
          { name: "Records Evaluated", value: "80,000+", context: "Comprehensive historical enterprise workforce dataset" },
          { name: "Satisfaction Correlation", value: "-0.62 correlation", context: "Strong inverse relationship between low work-life balance scores and resignation" }
        ],
        summary: "Delivered actionable retention insights showing that uncompensated overtime paired with promotional stagnation at the 2-year mark was the primary catalyst for talent flight."
      },
      businessRecommendations: [
        "Implement mandatory 24-month career progression reviews for high-performing individual contributors in technical and sales teams.",
        "Institute compensation guardrails for roles requiring frequent overtime, ensuring salary stays aligned with market median.",
        "Equip department heads with real-time flight risk dashboards to address team dissatisfaction before formal resignation submissions."
      ],
      limitations: [
        "Exit interview qualitative text was not NLP-processed into the structured metrics table.",
        "External market competition: Regional hiring market trends and competing employer compensation benchmarks were not modeled."
      ]
    },
    githubUrl: "https://github.com/Piyushyadav10/Marketing-Campaign-Analysis.git",
    roleHighlights: {
      "Data Analyst": "Cleaned and aggregated workforce data using SQL and Excel, building interactive DAX measures and Power BI visual narratives.",
      "Business Analyst": "Translated attrition findings into talent retention strategies, calculating the estimated replacement cost savings from targeted promotion policies."
    }
  },
  {
    id: "ecommerce-recommendation-engine",
    title: "E-commerce Product Recommendation Engine",
    roles: ["Data Scientist", "Product Analyst", "Data Engineer"],
    featured: false,
    shortDescription: "Machine learning recommendation system utilizing collaborative filtering and matrix factorization on 1M+ user ratings to personalize product discovery and raise basket size.",
    techStack: ["Python", "Pandas", "Scikit-Learn", "Flask", "SQL", "Power BI"],
    metrics: [
      { label: "Ratings Analyzed", value: "1M+" },
      { label: "Precision Score", value: "0.91" },
      { label: "Algorithm", value: "Collaborative + Content" },
      { label: "Cold-Start", value: "Hybrid Fallback" }
    ],
    caseStudy: {
      businessProblem: "Digital shoppers frequently struggle to locate relevant complementary products across vast inventories. Generic top-seller carousels fail to personalize discovery, leading to lower conversion and missed cross-sell opportunities.",
      dataset: {
        name: "E-commerce User Ratings & Product Metadata Dataset",
        size: "1,000,000+ user interactions & item ratings",
        description: "User interaction logs comprising User IDs, Product IDs, 1-5 star ratings, review timestamps, category tags, and textual product descriptions.",
        features: ["User ID", "Product ID", "Rating", "Timestamp", "Category", "Brand", "Price Tier", "Product Description Vector"]
      },
      methodology: [
        "Sparsity Reduction: Filtered out users with fewer than 5 ratings and products with fewer than 10 reviews to ensure robust matrix density.",
        "Collaborative Filtering: Built item-based and user-based collaborative filtering models using cosine similarity and Truncated SVD matrix factorization.",
        "Cold-Start Solution: Implemented content-based TF-IDF vectorization on product metadata as a fallback for new users lacking interaction history.",
        "Evaluation & Benchmarking: Evaluated Top-K recommendation accuracy using Precision@K, Recall@K, and Mean Average Precision (MAP), achieving 0.91 precision on test holdouts.",
        "API Service & Dashboard: Wrapped model inference into a lightweight Flask endpoint and visualized recommendation performance metrics in Power BI."
      ],
      results: {
        metrics: [
          { name: "Precision@K", value: "0.91", context: "High accuracy in Top-10 relevant items presented to returning users" },
          { name: "Data Volume", value: "1,000,000+ ratings", context: "Sparsity reduced via filtered interaction matrix" },
          { name: "Cold-Start Coverage", value: "100%", context: "Content similarity fallback guarantees zero recommendation failures for new users" }
        ],
        summary: "Created a production-ready hybrid recommendation prototype capable of generating personalized suggestions within 45ms per query."
      },
      businessRecommendations: [
        "Deploy recommendation carousels dynamically on the Cart page showcasing complementary items tailored to the active basket contents.",
        "A/B test collaborative suggestions against baseline popular items to evaluate real-world lift on Average Order Value (AOV).",
        "Introduce real-time session embedding updates to adjust recommendations based on immediate in-session clicks rather than solely historical purchases."
      ],
      limitations: [
        "Offline accuracy vs. online CTR: Offline metric improvements do not always guarantee equivalent conversion gains in production without live traffic testing.",
        "Memory scaling: Large in-memory similarity matrices require approximate nearest neighbor (ANN) indexing for enterprise inventory scaling."
      ]
    },
    demoUrl: "https://colab.research.google.com/drive/1jlNryMej0MKvhjMwq5BC1HzbKnAFrORy?usp=sharing",
    demoType: "colab",
    roleHighlights: {
      "Data Scientist": "Engineered collaborative and content-based recommendation pipelines, tuned SVD hyperparameters, and evaluated Top-K precision metrics.",
      "Product Analyst": "Evaluated recommendation engagement metrics (CTR, conversion uplift) and designed personalized cart-page product touchpoints.",
      "Data Engineer": "Structured user-item rating matrices and developed lightweight REST endpoint for model inference delivery."
    }
  },
  {
    id: "ipl-cricket-analytics",
    title: "IPL Sports Performance & Match Intelligence Dashboard",
    roles: ["Data Analyst", "Business Analyst"],
    featured: false,
    shortDescription: "Multidimensional sports analytics dashboard analyzing ball-by-ball tournament data across multiple IPL seasons to benchmark player performance and match phases.",
    techStack: ["Power BI", "SQL", "Excel", "Data Modeling", "DAX"],
    metrics: [
      { label: "Matches Analyzed", value: "800+ Matches" },
      { label: "Ball-by-Ball Rows", value: "200K+ Deliveries" },
      { label: "Phases Modeled", value: "Powerplay, Middle, Death" },
      { label: "Measures Built", value: "35+ DAX Measures" }
    ],
    caseStudy: {
      businessProblem: "Cricket strategists and sports analysts need granular performance evaluation beyond simple batting averages to evaluate how players perform under specific match conditions, bowling types, and game phases.",
      dataset: {
        name: "Indian Premier League (IPL) Complete Ball-by-Ball Dataset",
        size: "200,000+ delivery-level records across 800+ matches",
        description: "Delivery-level data including match date, batting team, bowling team, striker, non-striker, bowler, runs scored, extras, dismissal type, match venue, and toss decisions.",
        features: ["Match ID", "Innings", "Over", "Ball", "Batter", "Bowler", "Batsman Runs", "Extra Runs", "Wicket Type", "Venue", "Match Winner"]
      },
      methodology: [
        "Data Modeling & Schema: Designed a star schema linking Delivery Fact with Batter Dim, Bowler Dim, Match Dim, and Venue Dim.",
        "Phase Segmentation: Categorized match overs into three critical tactical phases: Powerplay (Overs 1-6), Middle Overs (7-15), and Death Overs (16-20).",
        "Advanced DAX Measures: Programmed metrics for Strike Rate, Economy Rate, Dot Ball Percentage, Boundary Percentage, Wickets per Over, and Phase Effectiveness.",
        "Interactive UI: Built a comprehensive Power BI dashboard featuring Head-to-Head Batter vs. Bowler matchup matrices, venue pitch bias indicators, and team win-rate factors."
      ],
      results: {
        metrics: [
          { name: "Deliveries Processed", value: "200,000+", context: "Granular ball-by-ball records analyzed" },
          { name: "Key Tactical Finding", value: "Death overs boundary rate > 18%", context: "Strongest correlation with winning second-innings chases" },
          { name: "Toss Decision Advantage", value: "54% win rate when chasing at specific venues", context: "Isolated dew factor impact at specific stadiums" }
        ],
        summary: "Delivered a sports intelligence dashboard that allows coaches and analysts to evaluate situational matchups with statistical rigor."
      },
      businessRecommendations: [
        "Prioritize specialist death-overs hitters with proven strike rates > 165 in overs 16-20 for high-pressure chase situations.",
        "Base team bowling selection on venue pitch trends: Deploy spin-heavy attacks at venues exhibiting lower middle-overs scoring rates.",
        "Utilize batter-versus-bowler historical matchup matrices to dictate real-time batting order adjustments during live matches."
      ],
      limitations: [
        "Excludes weather and pitch moisture sensor telemetry that could provide deeper physical context for ball trajectory."
      ]
    },
    githubUrl: "https://github.com/Piyushyadav10/Marketing-Campaign-Analysis.git",
    roleHighlights: {
      "Data Analyst": "Transformed 200K+ delivery rows into a synchronized star schema, authoring 35+ DAX measures for strike and economy rates in Power BI.",
      "Business Analyst": "Evaluated tactical win probabilities, presenting strategic conclusions through executive-style sports intelligence dashboards."
    }
  }
];
