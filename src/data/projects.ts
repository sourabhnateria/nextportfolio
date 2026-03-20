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
    id: "EasyAi",
    title: "EasyAi",
    description:
      "A website builder which build website using Ai by just giving a prompt.",
    image: "/images/projects/EasyAi.png",
    link: "https://easyai-sn.vercel.app/",
    github: "https://github.com/sourabhnateria",
    tags: ["Ai Website Builder", "React.js", "Full Stack"],
    techStack: ["React.js", "Node.js", "Tailwind CSS", "OpenAI API", "Neondb"],
    problem:
      "Organizing Secret Santa events manually is chaotic and lacks privacy.",
    outcome:
      "Streamlined event creation and participant assignment with a polished UI.",
  },
  {
    id: "Travel website",
    title: "Travel website",
    description: "Full-stack online travel itinerary platform || B2B || B2C",
    image: "/images/projects/nntravel.png",
    link: "https://n-n-travel-hub.vercel.app/",
    tags: ["Utility", "Security", "Web Tool"],
    techStack: ["React", "Node.js", "Express"],
    problem:
      "Sharing complex WiFi passwords manually is error-prone and insecure.",
    outcome:
      "Created a pure client-side solution that ensures credentials never leave the user's device.",
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
    problem:
      "Building a performant 3D puzzle in the browser requires low-level optimization.",
    outcome:
      "Achieved 60fps rendering on mobile devices with smooth touch controls.",
  },
];
