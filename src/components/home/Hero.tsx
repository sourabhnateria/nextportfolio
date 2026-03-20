"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github } from "lucide-react";
import Link from "next/link";
import NeuralBackground from "@/components/ui/NeuralBackground";
import { HeroVisual } from "./HeroVisual";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center min-h-screen pt-20 overflow-hidden bg-slate-50 dark:bg-slate-950"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
        <NeuralBackground />
      </div>

      <div className="container relative z-20 px-6 mx-auto -mt-20">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-medium tracking-wide text-blue-400"
            >
              Hello, I&apos;m
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-5xl font-bold leading-tight text-white md:text-7xl"
            >
              Sourabh Nateria
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-3xl font-bold text-transparent md:text-5xl bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
            >
              Full Stack Software Engineer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-2xl mt-6 text-lg leading-relaxed md:text-xl text-slate-300"
            >
              Crafting high-performance, scalable web applications with a focus
              on elegant user experiences and robust backend solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 mt-10"
            >
              <Link
                href="/#projects"
                className="flex items-center gap-2 px-8 py-4 font-medium text-white transition-colors bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 shadow-blue-900/20"
              >
                View Projects
                <ArrowRight size={20} />
              </Link>

              <a
                href="/sourabh_nateria.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 font-medium text-white transition-colors border rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 border-white/10"
              >
                Resume
                <Download size={20} />
              </a>

              <a
                href="https://github.com/sourabhnateria"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center transition-colors border rounded-full w-14 h-14 border-white/20 text-slate-300 hover:border-blue-400 hover:text-blue-400 backdrop-blur-sm bg-white/5"
              >
                <Github size={24} />
              </a>
            </motion.div>
          </div>

          {/* Right Visual */}
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
