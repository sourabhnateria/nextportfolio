export interface Post {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string; // Markdown content
}

export const writings: Post[] = [
  {
    id: "optimizing-react-for-ai",
    title: "Optimizing React for High-Frequency Data Streams",
    excerpt:
      "Lessons learned building real-time dashboards for neural network training visualization.",
    date: "Mar 20, 2025",
    readTime: "7 min read",
    tags: ["React", "Performance", "Visualization"],
    content: `
# Optimizing React for High-Frequency Data Streams

Visualizing neural network training in real-time involves rendering thousands of data points per second. 
React's standard reconciliation process can choke on this if not managed correctly.

## The Problem
Using \`useState\` for every socket message triggers a re-render. At 60Hz updates, this kills the UI thread.

## The Solution: Refs and Throttling
We moved the high-frequency state into \`useRef\` (mutable, no re-render) and created a throttled loop using \`requestAnimationFrame\` to sync the UI only when necessary.

\`\`\`typescript
const dataRef = useRef([]);

useEffect(() => {
  const socket = subscribe((data) => {
    dataRef.current.push(data);
  });
  
  let animationFrameId;
  const loop = () => {
    // Batch update canvas/webgl directly
    updateChart(dataRef.current); 
    animationFrameId = requestAnimationFrame(loop);
  };
  loop();
  
  return () => cancelAnimationFrame(animationFrameId);
}, []);
\`\`\`

This approach decouples data ingestion from rendering, keeping the UI buttery smooth even under heavy load.
    `,
  },
];
