export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  github?: string;
  tags?: string[];
  techStack?: string[];
  problem?: string;
  outcome?: string;
}

export const projectsData: Project[] = [
  {
    id: "Deep Research",
    title: "Deep Research",
    description:
      "intelligent system that generates follow-up questions, crafts optimal search queries, and compiles comprehensive research reports.",
    image: "/images/projects/deepresearch.png",
    link: "https://deep-research-brown-delta.vercel.app/",
    github: "https://github.com/sourabhnateria",
    tags: ["Deep Research Ai Agent", "Next.js", "Full Stack"],
    techStack: [
      "Next.js",
      "Vercel-AI-sdk",
      "Tailwind CSS",
      "OpenAI API",
      "Exa API",
    ],
    problem: "",
    outcome: "",
  },
  {
    id: "EasyAi",
    title: "EasyAi",
    description:
      "A website builder which build website using Ai by just giving a prompt.",
    image: "/images/projects/EasyAi.png",
    link: "https://easyai-sn.vercel.app/",
    github: "https://github.com/sourabhnateria",
    tags: ["Ai Website Builder", "React.js", "Full Stack"],
    techStack: ["React.js", "Node.js", "Tailwind CSS", "OpenAI API", "Neondb"],
    problem: "",
    outcome: "",
  },
  {
    id: "Travel website",
    title: "Travel website",
    description: "Full-stack online travel itinerary platform || B2B || B2C",
    image: "/images/projects/nntravel.png",
    link: "https://n-n-travel-hub.vercel.app/",
    tags: ["Utility", "Security", "Web Tool"],
    techStack: ["React", "Node.js", "Express"],
    problem: "",
    outcome: "",
  },
  {
    id: "scraping",
    title: "LinkedIn automation and scraping",
    description:
      "An app for automating LinkedIn tasks and scraping data using Rust.",
    image: "/images/projects/automation.jpg",
    link: "https://x.com/sourabh_nateria/status/1942460701378801936?t=7n9XOzwN_v6wQGcjzcXiFg&s=19",
    tags: ["3D", "Game Dev", "Interactive"],
    techStack: [
      "Rust",
      "Chrome Devtools Protocol",
      "Headless Chrome",
      "Api integration",
      "Airtable",
    ],
    problem: "",
    outcome: "",
  },
];
