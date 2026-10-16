export interface Certification {
  id: string;
  title: string;
  issuer: string;
  credentialId?: string;
  issueDate?: string;
  focus: string;
  verified: boolean;
  skills: string[];
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  period?: string;
  summary: string;
  highlights: string[];
  badge: string;
}

export const certifications: Certification[] = [
  {
    id: "microsoft-linkedin-genai",
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn",
    focus: "Foundations of generative artificial intelligence, core LLM concepts, ethical considerations, and AI-assisted productivity workflows.",
    verified: false,
    skills: ["Generative AI", "Artificial Intelligence Fundamentals"]
  },
  {
    id: "ibm-data-science",
    title: "IBM Data Science Professional Certificate",
    issuer: "IBM",
    focus: "Comprehensive data science curriculum covering Python, relational SQL databases, machine learning algorithms, and interactive data visualization.",
    verified: false,
    skills: ["Python", "SQL", "Machine Learning", "Data Visualization"]
  },
  {
    id: "google-prompt-engineering",
    title: "Google Prompt Engineering Certificate",
    issuer: "Google",
    focus: "Techniques for designing effective LLM prompts, context conditioning, parameter tuning, and generative AI problem solving.",
    verified: false,
    skills: ["Generative AI", "Prompt Engineering"]
  },
  {
    id: "microsoft-data-analyst",
    title: "Microsoft Certified: Data Analyst Associate",
    issuer: "Microsoft",
    focus: "Data preparation, modeling with DAX, Power BI report authoring, and advanced analytical dashboard deployment.",
    verified: true,
    skills: ["Power BI", "DAX", "Data Modeling", "Business Intelligence", "Row-Level Security"]
  },
  {
    id: "cisco-data-analytics",
    title: "Data Analytics Essentials",
    issuer: "Cisco Networking Academy",
    focus: "Core analytics lifecycles, statistical evaluation, data wrangling principles, and data visualization best practices.",
    verified: true,
    skills: ["Data Analysis", "Descriptive Statistics", "Data Ethics", "Visualization"]
  },
  {
    id: "google-data-analytics",
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google",
    focus: "End-to-end data analytics methodology, spreadsheet modeling, SQL data transformations, exploratory data analysis, and data storytelling.",
    verified: true,
    skills: ["SQL", "Data Cleaning", "Data Visualization", "Spreadsheets", "EDA"]
  },
  {
    id: "nptel-python",
    title: "The Joy of Computing using Python",
    issuer: "NPTEL / IIT Madras",
    credentialId: "NPTEL24CS113S750902615",
    issueDate: "Jul - Oct 2024",
    focus: "12-week rigorous university certification covering Python programming, algorithmic thinking, recursion, and computational problem solving.",
    verified: true,
    skills: ["Python", "Algorithms", "Data Processing", "Computational Logic"]
  },
  {
    id: "deloitte-data-analytics",
    title: "Deloitte Data Analytics Certification",
    issuer: "Deloitte",
    focus: "Business analytics case simulations, diagnostic reporting, interpreting commercial client data, and formulating actionable recommendations.",
    verified: true,
    skills: ["Business Analytics", "Forensic Data Analysis", "Executive Insights", "Client Delivery"]
  }
];

export const achievements: Achievement[] = [
  {
    id: "leetcode-hackerrank-problem-solving",
    title: "250+ SQL & Algorithmic Problems Solved",
    organization: "LeetCode & HackerRank",
    summary: "Consistent problem-solving track record focused on complex SQL queries, multi-table joins, window functions, and algorithmic data structures.",
    highlights: [
      "Extensive practice in SQL CTEs, window functions (ROW_NUMBER, DENSE_RANK, LAG/LEAD), and aggregation pivots.",
      "Algorithmic proficiency in arrays, hash maps, trees, and dynamic programming in C++ and Python."
    ],
    badge: "Problem Solving"
  },
  {
    id: "desh-ke-mentor",
    title: "Desh Ke Mentor — Student Mentor",
    organization: "Desh Ke Mentor",
    period: "January 2023 – July 2023",
    summary: "Mentored and guided Class 10 and Class 12 students, providing career guidance and helping them explore academic options and future career pathways.",
    highlights: [
      "Mentored and guided Class 10 and Class 12 students, providing career guidance and helping them explore academic options and future career pathways."
    ],
    badge: "Mentorship"
  },
  {
    id: "dtu-cultural-council-head",
    title: "Head of Cultural Council Society",
    organization: "Delhi Technological University (DTU)",
    period: "December 2022 – August 2025",
    summary: "Elected student leader heading a cross-functional team of 40–50 students, orchestrating major campus-wide cultural initiatives and logistics.",
    highlights: [
      "Coordinated 11+ campus initiatives and cultural events with over 40,000–50,000+ total cumulative attendees.",
      "Managed vendor contracts, budget allocation, schedule dependencies, and stakeholder coordination across university departments."
    ],
    badge: "Leadership"
  }
];
