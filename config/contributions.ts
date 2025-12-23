export interface contributionsInterface {
  repo: string;
  contibutionDescription: string;
  repoOwner: string;
  link: string;
}

export const contributionsUnsorted: contributionsInterface[] = [
  {
    repo: "HighValueTransactionAlerts",
    contibutionDescription:
      "Automated High-Value Transaction Alert System using PowerShell and SQL Server.",
    repoOwner: "fytroy",
    link: "https://github.com/fytroy/HighValueTransactionAlerts",
  },
  {
    repo: "NetworkReport.py",
    contibutionDescription:
      "A Python script for generating network reports.",
    repoOwner: "fytroy",
    link: "https://github.com/fytroy/NetworkReport.py",
  },
  {
    repo: "DailySystemReporter.py",
    contibutionDescription:
      "Automated Regulatory Compliance & Health Reporter script.",
    repoOwner: "fytroy",
    link: "https://github.com/fytroy/DailySystemReporter.py",
  },
];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted.slice(0, 3);
