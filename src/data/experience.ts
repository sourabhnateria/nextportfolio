export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description?: string;
  achievements?: string[];
  type: "work" | "education";
  active?: boolean;
}

export const experienceData: ExperienceItem[] = [
  {
    id: "samsung",
    role: "Software Engineer",
    company: "Qualyval Consulting",
    period: "May 2025 - Jan 2026",
    type: "work",
    description:
      "Took ownership of building production scrapers in Rust using the Chrome DevTools Protocol, pulling structured tender data from government portals in Saudi Arabia (Etimad) and the UK (Bury Council) that clients relied on daily.",
    achievements: [
      "Tackled the challenge of JavaScript-heavy, dynamically rendered pages by engineering robust extraction logic that handled pagination, DOM mutations, and session state without breaking.",
      "Brought down total scraping time by ˜50% by redesigning the pipeline around async and multithreaded execution - a change that also improved reliability under heavy load.",
      "Extended scraping capabilities to platforms like LinkedIn, TripAdvisor, and Instagram, navigating anti-bot protections, rate limiting, and authentication flows to deliver consistent data.",
      "Delivered clean, structured outputs that fed directly into downstream business intelligence workflows, reducing manual data collection effort for the client team.",
    ],
    active: true,
  },
  {
    id: "bluestocks",
    role: "Quality Assurance Engineer",
    company: "Qualyval Consulting",
    period: "Mar 2025 - Apr 2025",
    type: "work",
    description:
      "Joined the QA effort for Quicker Permit, a compliance and permit management platform, where I ran manual functional and regression testing across each release cycle.",
    achievements: [
      "Dug into end-to-end workflows, form validations, and business rules to make sure the application behaved correctly under real-world conditions and met regulatory standards.",
      "Worked closely with developers to log, reproduce, and verify bug fixes - turning around clear defect reports that made it easy for engineers to understand and resolve issues quickly.",
      "Helped the team ship stable, well-tested releases by maintaining thorough test coverage across new features and regressions throughout multiple sprint cycles.",
    ],
    active: false,
  },
  {
    id: "sparks",
    role: "QA Engineer",
    company: "Project-based",
    period: "Aug 2024 - Jan 2025",
    type: "work",
    description: "Curtain Design Application",
    achievements: [
      "Tested a cross-platform web & mobile application used by hospitals and retail stores.",
      "Validated quotation calculations, cost estimation workflows, and UI consistency across devices.",
      "Designed and executed detailed test cases; coordinated defect resolution with the development team.",
    ],
    active: false,
  },
  {
    id: "vit",
    role: "Bachelor of Engineering",
    company: "Lakshmi Narayana College of Technology, Bhopal",
    period: "2015 - 2019",
    type: "education",
    description: "CGPA: 8.15 (Computer Science and Engineering).",
    active: true,
  },
  {
    id: "mps",
    role: "Higher Secondary School",
    company: "kendriya vidyalaya, Bhopal",
    period: "2013 - 2015 ",
    type: "education",
    description: "CGPA: 8",
    active: false,
  },
];
