export type ProjectCategory = "product" | "platform" | "analytics";

export type Project = {
  slug: string;
  name: string;
  category: ProjectCategory;
  description: string;
  details?: string[];
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "vehicle-valuation-ai",
    name: "Vehicle Valuation AI Platform",
    category: "product",
    description:
      "Architected a full-stack agentic system using LangGraph and FastAPI that automates vehicle price discovery via LLM parsing, RAG retrieval, and deterministic valuation logic.",
    details: [
      "Implemented real-time state streaming via SSE and asyncio thread management for agent updates and responsive UX.",
      "Built a complete authentication system using Google OAuth with token verification and user session management.",
      "Deployed a containerized application on DigitalOcean with an automated CI/CD pipeline.",
    ],
    stack: ["LangGraph", "FastAPI", "Supabase", "SSE", "DigitalOcean"],
    githubUrl: "https://github.com/tayloraukward",
    liveUrl: "https://pricing-optimizer-app-85uzv.ondigitalocean.app/",
  },
];
