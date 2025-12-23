import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "atm-logistics",
    companyName: "ATM Logistics Command Center",
    type: "Personal",
    category: ["Data Analysis", "Power BI", "SQL"],
    shortDescription:
      "A geospatial BI project visualizing cash inventory of 50 ATMs to optimize logistics and prevent cash-out events.",
    githubLink: "https://github.com/fytroy/ATMCashLogistics",
    techStack: ["Power BI", "SQL", "Python", "Geospatial BI"],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-03-01"),
    companyLogoImg: "/projects/atm-logistics/logo.png", // Placeholder
    pagesInfoArr: [
      {
        title: "Dashboard Overview",
        description: "Interactive Power BI Map visualizing ATM cash levels.",
        imgArr: ["/projects/atm-logistics/dashboard.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "This project simulates a 'Last Mile' logistics operation for retail banking. It visualizes the cash inventory of 50 ATMs across a city in real-time, allowing the Cash Management Unit (CMU) to optimize armored truck routes and prevent 'Cash-Out' events.",
        "Key Technical Achievement: Integration of Python scripting for synthetic geospatial data generation with SQL Server logic to categorize inventory health, visualized on an interactive Power BI Map.",
      ],
      bullets: [
        "Visualized cash inventory for 50 ATMs in real-time.",
        "Optimized armored truck routes to prevent cash-outs.",
        "Integrated Python for synthetic geospatial data generation.",
        "Utilized SQL Server for inventory health categorization.",
      ],
    },
  },
  {
    id: "market-feeder",
    companyName: "Bank Treasury System",
    type: "Personal",
    category: ["Data Analysis", "SQL", "Power BI"],
    shortDescription:
      "Comprehensive Bank Treasury System tracking live market data and calculating treasury rates.",
    githubLink: "https://github.com/fytroy/MarketFeeder",
    techStack: ["Python", "SQL", "Power BI", "Treasury Pricing"],
    startDate: new Date("2024-02-01"),
    endDate: new Date("2024-04-01"),
    companyLogoImg: "/projects/market-feeder/logo.png", // Placeholder
    pagesInfoArr: [
      {
        title: "Treasury Dashboard",
        description: "Live market data feed for assets like Gold, Oil, and Bitcoin.",
        imgArr: ["/projects/market-feeder/dashboard.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "A comprehensive Bank Treasury System designed to track live market data, calculate bank treasury rates including margins, and store the data in a SQL Server database.",
        "Features a Live Market Data Feed fetching real-time prices for assets like Gold, Oil, and Bitcoin.",
      ],
      bullets: [
        "Tracks live market data for various assets.",
        "Calculates bank treasury rates and margins.",
        "Stores data securely in a SQL Server database.",
        "Provides real-time updates for Gold, Oil, and Bitcoin prices.",
      ],
    },
  },
  {
    id: "loan-risk-app",
    companyName: "Loan Risk App",
    type: "Personal",
    category: ["Machine Learning", "Python", "Data Analysis"],
    shortDescription:
      "Predictive Analytics app using Random Forest to assess loan default probability.",
    githubLink: "https://github.com/fytroy/LoanRiskApp-aipoweredloanriskassesor-",
    techStack: ["Python", "Scikit-Learn", "Streamlit", "Predictive Analytics"],
    startDate: new Date("2024-03-01"),
    endDate: new Date("2024-05-01"),
    companyLogoImg: "/projects/loan-risk/logo.png", // Placeholder
    pagesInfoArr: [
      {
        title: "App Interface",
        description: "Streamlit web application for real-time risk prediction.",
        imgArr: ["/projects/loan-risk/app.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "A Predictive Analytics application designed to help loan officers make data-driven decisions.",
        "It uses a Random Forest Classifier trained on historical loan data to predict the probability of a borrower defaulting, wrapped in an interactive Streamlit web application for real-time predictions.",
      ],
      bullets: [
        "Helps loan officers make data-driven decisions.",
        "Uses Random Forest Classifier for predictions.",
        "Trained on historical loan data.",
        "Interactive Streamlit web application.",
      ],
    },
  },
  {
    id: "ai-banking-analyst",
    companyName: "AI Banking Analyst",
    type: "Personal",
    category: ["AI", "Data Analysis", "Python"],
    shortDescription:
      "Generative AI application translating natural language into SQL queries for banking data analysis.",
    githubLink: "https://github.com/fytroy/AI-BankingAnalyst-TexttoSQL-0.2",
    techStack: ["Python", "Pandas", "Scikit-learn", "Data Analysis"],
    startDate: new Date("2024-04-01"),
    endDate: new Date("2024-06-01"),
    companyLogoImg: "/projects/ai-analyst/logo.png", // Placeholder
    pagesInfoArr: [
      {
        title: "System Architecture",
        description: "Overview of the Text-to-SQL solution.",
        imgArr: ["/projects/ai-analyst/architecture.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "This project demonstrates the creation and deployment of a Generative AI application capable of analyzing a complex, professional-grade Tier 1 Banking Data Warehouse.",
        "The AI acts as an Intelligent Analyst, translating complex business questions asked in natural language (English) directly into executable MS-SQL queries, running them against the database, and then synthesizing the results into clear, decisive business insights.",
      ],
      bullets: [
        "Translates natural language questions to SQL queries.",
        "Analyzes complex banking data warehouses.",
        "Synthesizes results into business insights.",
        "Built on a custom Star Schema with over 115,000 synthetic records.",
      ],
    },
  },
  {
    id: "financial-data-pipeline",
    companyName: "Financial Data Pipeline",
    type: "Personal",
    category: ["Data Engineering", "Python", "ETL"],
    shortDescription:
      "ETL pipeline extracting financial data from web scraping and APIs.",
    githubLink: "https://github.com/fytroy/Automated_Currency_Exchange_Rate_ETL_Pipeline",
    techStack: ["Python", "Pandas", "Scikit-learn", "Data Analysis"],
    startDate: new Date("2024-05-01"),
    endDate: new Date("2024-07-01"),
    companyLogoImg: "/projects/pipeline/logo.png", // Placeholder
    pagesInfoArr: [
      {
        title: "Pipeline Flow",
        description: "Data extraction, transformation, and load process.",
        imgArr: ["/projects/pipeline/flow.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "This project is a data pipeline that extracts, transforms, and loads financial data from two main sources: Web Scraping (American Banker news) and API Extraction (Frankfurter API for USD rates).",
        "The collected data is then processed and can be loaded into a data warehouse for further analysis.",
      ],
      bullets: [
        "Extracts financial news via web scraping.",
        "Fetches USD exchange rates from Frankfurter API.",
        "Transforms and processes collected data.",
        "Loads data into a warehouse for analysis.",
      ],
    },
  },
  {
    id: "high-value-alerts",
    companyName: "High Value Alerts System",
    type: "Personal",
    category: ["Automation", "SQL", "PowerShell"],
    shortDescription:
      "Automated system detecting high-value anomalies and sending email alerts.",
    githubLink: "https://github.com/fytroy/HighValueTransactionAlerts",
    techStack: ["SQL Server", "PowerShell", "SSRS", "Automation"],
    startDate: new Date("2024-06-01"),
    endDate: new Date("2024-08-01"),
    companyLogoImg: "/projects/alerts/logo.png", // Placeholder
    pagesInfoArr: [
      {
        title: "Alert System",
        description: "Workflow for detecting and alerting high-value transactions.",
        imgArr: ["/projects/alerts/workflow.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "A full-stack data engineering project that simulates banking transactions, detects high-value anomalies (>1M), and automates critical alerts to stakeholders via a custom email pipeline.",
        "Demonstrates how to engineer a custom automation layer using PowerShell to overcome SQL Server Express limitations.",
      ],
      bullets: [
        "Simulates banking transactions for anomaly detection.",
        "Detects high-value transactions (>1M).",
        "Automates critical email alerts.",
        "Uses PowerShell for custom automation.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 4);
