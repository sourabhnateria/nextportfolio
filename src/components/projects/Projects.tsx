"use client";

import { ProjectCarousel } from "./ProjectCarousel";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 overflow-hidden text-white bg-slate-950"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.1)_0%,_transparent_70%)] pointer-events-none" />

      <div className="container relative z-10 px-6 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight md:text-5xl">
            Selected <span className="text-blue-500">Works</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400">
            A showcase of complex systems, interactive experiments, and
            engineering problems solved.
          </p>
        </div>

        {/* 3D Carousel Implementation */}
        <ProjectCarousel />

        <div className="mt-12 text-center">
          <a
            href="https://github.com/sourabhnateria"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium text-blue-500 hover:text-blue-400 hover:underline"
          >
            View more on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
