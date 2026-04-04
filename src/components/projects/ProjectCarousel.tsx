"use client";

import { useState, useEffect } from "react";
import { motion, PanInfo } from "framer-motion";
import { ArrowLeft, ArrowRight, Github, ExternalLink } from "lucide-react";
import { projectsData } from "@/data/projects";
import Image from "next/image"; // Import Image from next/image

export function ProjectCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check unique mobile breakpoint for 3D effect adjustments
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projectsData.length);
  };

  const prevProject = () => {
    setActiveIndex(
      (prev) => (prev - 1 + projectsData.length) % projectsData.length,
    );
  };

  const getCardStyle = (index: number) => {
    // Handle wrap-around for simpler 3-item logic if needed, but here we strictly calculate relative position
    // We want -1, 0, 1 logic

    // Explicitly finding the shortest distance
    let relativeIndex = index - activeIndex;
    if (relativeIndex > projectsData.length / 2)
      relativeIndex -= projectsData.length;
    if (relativeIndex < -projectsData.length / 2)
      relativeIndex += projectsData.length;

    if (relativeIndex === 0) {
      return {
        zIndex: 20,
        scale: 1,
        x: 0,
        rotateY: 0,
        opacity: 1,
        filter: "brightness(1)",
      };
    } else if (relativeIndex === 1) {
      // Right card
      return {
        zIndex: 10,
        scale: 0.8,
        x: isMobile ? 40 : 300, // Tighter stack on mobile
        rotateY: isMobile ? -5 : -25, // Less rotation on mobile
        opacity: 0.6,
        filter: "brightness(0.6)",
      };
    } else if (relativeIndex === -1) {
      // Left card
      return {
        zIndex: 10,
        scale: 0.8,
        x: isMobile ? -40 : -300,
        rotateY: isMobile ? 5 : 25,
        opacity: 0.6,
        filter: "brightness(0.6)",
      };
    } else {
      // Hide others
      return {
        zIndex: 0,
        scale: 0.5,
        x: relativeIndex > 0 ? 600 : -600,
        rotateY: 0,
        opacity: 0,
        filter: "brightness(0)",
      };
    }
  };

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    if (info.offset.x > 50) {
      prevProject();
    } else if (info.offset.x < -50) {
      nextProject();
    }
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center overflow-visible perspective-[1200px] py-12">
      {/* Navigation Buttons */}
      <button
        onClick={prevProject}
        className="absolute p-3 text-white transition-all border rounded-full md:z-30 left-1 md:left-12 bg-white/10 dark:bg-slate-900/50 backdrop-blur-md border-white/20 hover:bg-white/20"
      >
        <ArrowLeft size={24} />
      </button>
      <button
        onClick={nextProject}
        className="absolute p-3 text-white transition-all border rounded-full md:z-30 right-1 md:right-12 bg-white/10 dark:bg-slate-900/50 backdrop-blur-md border-white/20 hover:bg-white/20"
      >
        <ArrowRight size={24} />
      </button>

      {projectsData.map((project, index) => {
        // Only render if it's visible (optional optimization, but good for react key mgmt)
        const style = getCardStyle(index);

        return (
          <motion.div
            key={project.id}
            className="absolute w-[85vw] md:w-[450px] h-[500px] md:h-[550px] bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            drag={isMobile ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.05}
            onDragEnd={handleDragEnd}
            initial={false}
            animate={{
              zIndex: style.zIndex,
              x: style.x,
              scale: style.scale,
              rotateY: style.rotateY,
              opacity: style.opacity,
              filter: style.filter,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
              transformStyle: "preserve-3d",
              boxShadow:
                index === activeIndex
                  ? "0 0 50px -12px rgba(99, 102, 241, 0.5)"
                  : "none", // Indigo glow for active
            }}
          >
            {/* Image Area */}
            <div className="relative w-full h-1/2 bg-slate-800">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 85vw, 450px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
            </div>

            {/* Content Area */}
            <div className="flex flex-col justify-between p-6 h-1/2">
              <div>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        className="transition-colors text-slate-400 hover:text-white"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        className="transition-colors text-slate-400 hover:text-white"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="mb-4 text-sm text-slate-400 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack?.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium border rounded-md bg-slate-800 text-slate-300 border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack && project.techStack.length > 3 && (
                    <span className="px-2 py-1 text-xs font-medium border rounded-md bg-slate-800 text-slate-300 border-slate-700">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
