export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  role: string;
  timeline: string;
  tags: string[];
  heroImage?: string;
  problem: string;
  constraints: string[];
  architecture?: string; // Markdown or description
  solution: string; // Detailed technical solution
  tradeoffs: {
    decision: string;
    pros: string;
    cons: string;
  }[];
  outcome: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "Scraping-the-Unscrappable",
    title:
      "Scraping the Unscrappable: High-Performance Government Tender Extraction in Rust",
    description:
      "Government procurement portals are notoriously difficult to scrape — heavy JavaScript rendering, aggressive bot protection, and constantly shifting DOM structures make traditional scraping tools fall flat. This project involved building a production-grade web scraping system in Rust using the Chrome DevTools Protocol (CDP) to reliably extract tender data from real government portals across two countries.",
    role: "Backend Engineer",
    timeline: "Aug 2025 - Jan 2026",
    tags: [
      "Rust",
      "Chrome DevTools Protocol",
      "Async",
      "Multithreading",
      "Web Scraping",
    ],
    problem:
      "Clients needed structured, up-to-date tender data from Etimad Tenders (Saudi Arabia) and Bury Council (UK). Both portals were fully client-side rendered, protected against automated access, and frequently changing their DOM structure and pagination logic. Scale mattered — scraping needed to be fast enough for daily business use.",
    constraints: [
      "Portals were fully client-side rendered — no static HTML to parse.",
      "Aggressive bot protection on government portals.",
      "DOM structure and pagination changed frequently without notice.",
      "Data needed to be production-ready in CSV/JSON for downstream business use.",
    ],
    solution:
      "**Why Rust?**\nMost scraping is done in Python. Rust was chosen deliberately — for memory safety, zero-cost abstractions, and native async/multithreading support that Python simply can't match at scale.\n\n**Why Chrome DevTools Protocol?**\nCDP gives direct programmatic control over a real Chromium browser instance — meaning JavaScript executes fully, dynamic content loads, and the scraper behaves like a real user. This bypassed the rendering limitations of lightweight HTTP scrapers.\n\n**What Was Built**\n- A CDP-based browser automation engine in Rust that controlled headless Chromium\n- Intelligent pagination handling that adapted to DOM structure changes\n- Async + multithreaded pipelines that processed multiple pages simultaneously\n- Extractors for titles, deadlines, and attached documents across both portals\n- Export pipelines delivering clean CSV and JSON datasets ready for downstream use\n- Similar scrapers for platforms like LinkedIn, TripAdvisor, and Instagram",
    tradeoffs: [
      {
        decision: "Rust vs Python for Scraping",
        pros: "Memory safety, zero-cost abstractions, native async/multithreading — ~50% faster scraping.",
        cons: "Steeper learning curve and longer initial development time compared to Python.",
      },
      {
        decision: "CDP vs Lightweight HTTP Scrapers",
        pros: "Full JavaScript execution, behaves like a real user, bypasses bot protection effectively.",
        cons: "Heavier resource usage — requires running a full Chromium instance.",
      },
    ],
    outcome: [
      "Scraping speed improved by ~50% over baseline using async + multithreaded pipelines.",
      "Successfully extracted tender data from two heavily protected government portals across two countries.",
      "Delivered structured CSV and JSON datasets ready for immediate downstream business use.",
    ],
  },
];
