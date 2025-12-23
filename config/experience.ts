import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "gulf-african-bank-officer",
    position: "Data Analytics Officer",
    company: "Gulf African Bank",
    location: "Nairobi, Kenya",
    startDate: new Date("2025-09-01"),
    endDate: "Present",
    description: [
      "Managing and optimizing ETL processes to ensure timely and accurate data delivery.",
      "Designing and building Power Apps solutions to automate workflows across departments.",
      "Performing comprehensive data analysis to identify trends and forecast performance.",
    ],
    achievements: [
      "Translated raw banking data into actionable visualizations, supporting executive decisions on P&L and risk.",
      "Developed and maintained the foundational data layer (views) used for major Power BI dashboards across the bank.",
      "Partnered with business units to define requirements and deliver custom Power BI solutions for performance tracking.",
      "Led the end-to-end data visualization process, ensuring reports were tailored to meet strategic needs.",
    ],
    skills: ["Power BI", "SQL", "Python", "ETL", "Data Analysis", "Power Apps"],
    companyUrl: "https://gulfafricanbank.com/",
    logo: "/logo.png", // Placeholder
  },
  {
    id: "gulf-african-bank-intern-engineer",
    position: "Data Analytics Engineer Intern",
    company: "Gulf African Bank",
    location: "Nairobi, Kenya",
    startDate: new Date("2025-07-01"),
    endDate: new Date("2025-09-01"),
    description: [
      "Built Microsoft PowerApps solutions to streamline branch-level processes.",
      "Designed and developed interactive Power BI dashboards to visualize key financial metrics.",
      "Integrated Power BI dashboards with MySQL servers for real-time reporting.",
    ],
    achievements: [
      "Built Microsoft PowerApps solutions to streamline branch-level processes, improving efficiency and user experience.",
      "Designed and developed interactive Power BI dashboards to visualize key financial and operational metrics.",
      "Gained hands-on experience in integrating Power BI dashboards with MySQL servers.",
    ],
    skills: ["Power BI", "Power Apps", "MySQL", "Data Visualization"],
    companyUrl: "https://gulfafricanbank.com/",
    logo: "/logo.png", // Placeholder
  },
  {
    id: "gulf-african-bank-intern-support",
    position: "IT Support Specialist Intern",
    company: "Gulf African Bank",
    location: "Nairobi, Kenya",
    startDate: new Date("2025-01-01"),
    endDate: new Date("2025-07-01"),
    description: [
      "Provided responsive end-user support and resolved technical issues.",
      "Delivered on-site and remote technical support for hardware and software.",
      "Assisted in the maintenance, configuration, and monitoring of enterprise systems.",
    ],
    achievements: [
      "Contributed to network troubleshooting and supported RESTful services in internal applications.",
      "Supported the IT Service Desk by handling incident reports and logging issues.",
      "Participated in routine system updates, patching, and maintenance tasks.",
    ],
    skills: ["IT Support", "Networking", "System Administration", "Troubleshooting"],
    companyUrl: "https://gulfafricanbank.com/",
    logo: "/logo.png", // Placeholder
  },
  {
    id: "voi-winners",
    position: "Office Accountant & IT Assistant",
    company: "Voi Winners Housing Cooperative Society Limited",
    location: "Voi, Kenya",
    startDate: new Date("2024-05-01"),
    endDate: new Date("2025-01-01"),
    description: [
      "Managed daily financial operations, including ledger reconciliation and budgeting.",
      "Oversaw real estate property management tasks and tenant interactions.",
      "Led the IT infrastructure management for the cooperative.",
    ],
    achievements: [
      "Managed daily financial operations, including ledger reconciliation, billing, and budgeting processes.",
      "Designed and implemented digital communication strategies to improve engagement.",
      "Proactively troubleshot and resolved IT issues, ensuring minimal downtime.",
    ],
    skills: ["Accounting", "IT Infrastructure", "Property Management", "Communication"],
    companyUrl: "",
    logo: "/logo.png", // Placeholder
  },
  {
    id: "numeral-iot",
    position: "Junior Software Developer Intern",
    company: "Numeral IoT Limited",
    location: "Kenya",
    startDate: new Date("2022-06-01"),
    endDate: new Date("2022-10-01"),
    description: [
      "Developed web applications using AngularJS.",
      "Installed, configured, and maintained Windows Server environments.",
      "Managed web hosting environments using cPanel.",
    ],
    achievements: [
      "Developed web applications using AngularJS, ensuring responsive and user-friendly interfaces.",
      "Installed, configured, and maintained Windows Server environments to support business operations.",
      "Provided ongoing website maintenance and technical support to ensure optimal performance.",
    ],
    skills: ["AngularJS", "Windows Server", "cPanel", "Web Development"],
    companyUrl: "https://numeraliot.com/",
    logo: "/logo.png", // Placeholder
  },
];
