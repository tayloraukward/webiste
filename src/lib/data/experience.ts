export type ExperienceItem = {
  id: string;
  company: string;
  location: string;
  title: string;
  range: string;
  highlights: string[];
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "aws-sde2",
    company: "Amazon Web Services",
    location: "Austin, TX",
    title: "Software Development Engineer II (L5) — AWS Marketplace Core Platform",
    range: "Apr 2026 — Present",
    highlights: [
      "Promoted to SDE II in 15 months based on delivery of high-complexity distributed systems.",
      "Reduced Marketplace provisioning latency by 34% (125s → 83s) from purchase to active license.",
    ],
  },
  {
    id: "aws-sde1",
    company: "Amazon Web Services",
    location: "Austin, TX",
    title: "Software Development Engineer I (L4) — AWS Marketplace Core Platform",
    range: "Sep 2024 — Mar 2026",
    highlights: [
      "Re-architected core execution workflow for 20× throughput (100+ TPS) enabling full production migration.",
      "Led automated version upgrade platform across 11M+ records with dry-run simulation preventing ~20 sev incidents/week.",
      "First org-wide load testing initiative; Bedrock onboarding and reliability improvements across services.",
      "Top Tier performance rating (top 15%).",
    ],
  },
  {
    id: "aws-intern",
    company: "Amazon Web Services",
    location: "Seattle, WA",
    title: "Software Development Engineer Intern — Marketplace Agreements Execution",
    range: "May 2023 — Aug 2023",
    highlights: [
      "Shipped serverless purchase order workflow (Lambda, API Gateway, CloudFormation).",
      "Completed goals 4 weeks early; extended work on entitlements management.",
    ],
  },
];
