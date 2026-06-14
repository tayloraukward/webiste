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
    title: "Software Development Engineer II (L5)- AWS Marketplace Core Platform Team",
    range: "Apr 2026-Present",
    highlights: [
      "Promoted to SDE II (L5) in 15 months, less than half the average 3-year timeline for the organization, based on delivery of high-complexity distributed systems.",
      "Reduced AWS Marketplace provisioning latency by 34% (125s to 83s), accelerating the path from purchase to active license.",
    ],
  },
  {
    id: "aws-sde1",
    company: "Amazon Web Services",
    location: "Austin, TX",
    title: "Software Development Engineer I (L4)- AWS Marketplace Core Platform Team",
    range: "Sep 2024-March 2026",
    highlights: [
      "Engineered the full re-architecture of our core execution workflow, increasing throughput by 20x to 100+ TPS to enable the full migration of production traffic from our legacy system.",
      "Led a 5-engineer team to architect and deliver an automated version upgrade platform, collaborating with 6 internal client teams to integrate zero-impact migrations for 11M+ records directly into their CI/CD pipelines.",
      "Developed a dry run simulation capability allowing client teams to validate migration impacts before execution and has prevented an estimated 20 high-severity production incidents weekly.",
      "Led the organization's first load testing initiative, establishing isolated test environments across multiple services, identifying systemic bottlenecks, and driving fixes that enabled the full onboarding of Amazon Bedrock traffic.",
      "Improved system reliability by overhauling exception handling, retry logic, and rollback configurations across three services.",
      "Earned Top Tier rating (top 15%) for performance, reflecting exceptional delivery, leadership, and organizational impact.",
      "Unblocked a partner team's re:Invent launch by diagnosing and resolving a critical production bug, working extended hours under pressure to deliver the fix.",
    ],
  },
  {
    id: "aws-intern",
    company: "Amazon Web Services",
    location: "Seattle, WA",
    title: "Software Development Engineer Intern - AWS Marketplace Agreements Execution Team",
    range: "May 2023-August 2023",
    highlights: [
      "Launched a serverless purchase order processing workflow using AWS Lambda, API Gateway, and CloudFormation.",
      "Concluded my project goals 4 weeks early and migrated to a new project on the entitlements management system.",
    ],
  },
];
