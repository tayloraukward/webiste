export type ProjectCategory = "product" | "platform" | "analytics";

export type Project = {
  slug: string;
  name: string;
  category: ProjectCategory;
  description: string;
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "vehicle-valuation-ai",
    name: "Vehicle Valuation AI",
    category: "product",
    description:
      "Agentic full-stack platform for automated vehicle price discovery with LangGraph, RAG, and deterministic valuation logic.",
    stack: ["LangGraph", "FastAPI", "Supabase", "SSE", "DigitalOcean"],
    githubUrl: "https://github.com/tayloraukward",
    liveUrl: undefined,
  },
  {
    slug: "aws-marketplace-core",
    name: "AWS Marketplace Core Platform",
    category: "platform",
    description:
      "High-throughput execution workflows, automated version upgrades across millions of records, and latency wins on critical provisioning paths.",
    stack: ["Java", "AWS", "Step Functions", "DynamoDB", "CloudFormation"],
    githubUrl: undefined,
    liveUrl: "https://aws.amazon.com/marketplace/",
  },
  {
    slug: "serverless-po-workflow",
    name: "Serverless PO Processing",
    category: "platform",
    description:
      "Internship launch: serverless purchase order processing with Lambda, API Gateway, and CloudFormation.",
    stack: ["Lambda", "API Gateway", "CloudFormation"],
    githubUrl: undefined,
    liveUrl: undefined,
  },
  {
    slug: "uva-lacrosse-analytics",
    name: "UVA Lacrosse Offensive Analytics",
    category: "analytics",
    description:
      "Performance models from raw game data plus PLL shot-charting integrations for coaching strategy.",
    stack: ["Python", "Modeling", "Sports analytics"],
    githubUrl: undefined,
    liveUrl: undefined,
  },
];

export const PROJECT_FILTERS: { id: "all" | ProjectCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "product", label: "Product" },
  { id: "platform", label: "Platform" },
  { id: "analytics", label: "Analytics" },
];
