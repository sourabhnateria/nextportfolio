"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Image from "next/image";

interface Skill {
  name: string;
  level: string;
  icon: string;
  color: string;
}

const skills: Skill[] = [
  {
    name: "React",
    level: "intermediate",
    icon: "/skills/react.png",
    color: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    name: "Node.js",
    level: "intermediate",
    icon: "/skills/nodejs.svg",
    color: "bg-orange-50 dark:bg-orange-900/20",
  },
  {
    name: "Express.js",
    level: "Intermediate",
    icon: "/skills/expressjs_dark.svg",
    color: "bg-yellow-50 dark:bg-yellow-900/20",
  },
  {
    name: "MongoDB",
    level: "Advanced",
    icon: "/skills/mongodb-icon-dark.svg",
    color: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    name: "Postman",
    level: "Advanced",
    icon: "/skills/postman.svg",
    color: "bg-indigo-50 dark:bg-indigo-900/20",
  },
  {
    name: "Python",
    level: "Beginner",
    icon: "/skills/python.png",
    color: "bg-pink-50 dark:bg-pink-900/20",
  },
  {
    name: "Git",
    level: "Intermediate",
    icon: "/skills/git.svg",
    color: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    name: "Github",
    level: "Intermediate",
    icon: "/skills/github_dark.svg",
    color: "bg-cyan-50 dark:bg-cyan-900/20",
  },
  {
    name: "Rust",
    level: "Intermediate",
    icon: "/skills/rust_dark.svg",
    color: "bg-slate-50 dark:bg-slate-900/20",
  },
  {
    name: "Next.js",
    level: "Beginner",
    icon: "/skills/nextjs.png",
    color: "bg-emerald-50 dark:bg-emerald-900/20",
  },
  {
    name: "Tailwind CSS",
    level: "Intermediate",
    icon: "/skills/tailwindcss.svg",
    color: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    name: "OpenAI",
    level: "Beginner",
    icon: "/skills/openai_dark.svg",
    color: "bg-slate-50 dark:bg-slate-900/20",
  },
];

export default function Skills() {
  return (
    <Section id="skills" className="relative overflow-hidden bg-slate-900/50">
      {/* Decorative Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
        <Image
          src="/images/ui/ai-flow.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Skills & Expertise
          </h2>
          <p className="text-slate-400">
            Technologies I use to build amazing web experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)",
              }}
              className="flex flex-col items-center justify-center gap-3 p-6 text-center border shadow-sm bg-slate-800 rounded-xl border-slate-500 group"
            >
              <div
                className={`relative w-16 h-16 p-3 rounded-full flex items-center justify-center transition-colors ${skill.color}`}
              >
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="block font-semibold text-slate-200">
                  {skill.name}
                </span>
                <span className="text-xs font-medium text-slate-400">
                  {skill.level}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
