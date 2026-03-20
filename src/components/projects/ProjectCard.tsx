"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex flex-col h-full overflow-hidden transition-all duration-300 border shadow-sm group bg-slate-800 rounded-2xl hover:shadow-xl border-slate-700"
    >
      <div className="relative w-full h-48 overflow-hidden">
        {/* Using generic Image component handling. If image fails, fallback to color. */}
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 transition-colors duration-300 bg-blue-600/0 group-hover:bg-blue-600/10" />
      </div>

      <div className="flex flex-col flex-grow p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-bold text-white transition-colors group-hover:text-blue-600">
            {project.title}
          </h3>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors text-slate-400 hover:text-blue-600"
          >
            <ArrowUpRight size={20} />
          </a>
        </div>

        <p className="mb-4 text-sm text-slate-400 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags?.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-medium rounded-md bg-slate-700 text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Full card clickable overlay */}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-10"
      />
    </motion.div>
  );
}
