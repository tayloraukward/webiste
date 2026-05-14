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
    name: "Vehicle Valuation AI",
    category: "product",
    description:
      "An end-to-end pricing assistant that helps users reason about vehicle values with transparent, auditable steps — not a black-box number.",
    details: [
      "Orchestrated agent workflows with LangGraph so the app can gather context, call tools, and refine answers while keeping the conversation structured and recoverable.",
      "Combined retrieval (RAG) over domain knowledge with deterministic rules and guardrails so recommendations stay grounded when models drift.",
      "Built as a full-stack product: FastAPI backend, streaming responses (SSE) for responsive UX, Supabase for persistence, and deployment on DigitalOcean for a stable public demo.",
      "Focused on operational clarity: logging, error surfaces, and paths that degrade gracefully when upstream data or models are unavailable.",
    ],
    stack: ["LangGraph", "FastAPI", "Supabase", "SSE", "DigitalOcean"],
    githubUrl: "https://github.com/tayloraukward",
    liveUrl: "https://pricing-optimizer-app-85uzv.ondigitalocean.app/",
  },
];
