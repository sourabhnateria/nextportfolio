"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Linkedin, Mail } from "lucide-react";
import { SiGithub, SiX } from "@icons-pack/react-simple-icons";

export const SOCIALS = [
  { name: "GitHub", href: "https://github.com/sourabhnateria", icon: SiGithub },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/sourabhnateria",
    icon: Linkedin,
  },
  { name: "Twitter", href: "https://x.com/sourabh_nateria", icon: SiX },
  { name: "Email", href: "mailto:sourabhnateria.cse@gmail.com", icon: Mail },
];

export function SocialFloater() {
  return (
    <div className="fixed z-50 flex flex-col gap-3 bottom-8 right-8">
      {SOCIALS.map((social) => (
        <SocialIcon key={social.name} social={social} />
      ))}
    </div>
  );
}

function SocialIcon({ social }: { social: (typeof SOCIALS)[0] }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex items-center justify-center cursor-none" // cursor-none
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{
        scale: isHovered ? 1.2 : 1, // Slight scale up
      }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {/* Icon Container */}
      <div className="relative z-10 p-3 transition-colors duration-300 border rounded-full shadow-lg bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400">
        <social.icon size={20} />
      </div>

      {/* Target Box Cursor */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1.5 }} // Scale around the circle
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
          >
            <div className="relative w-12 h-12">
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-blue-500 rounded-tl-md" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-blue-500 rounded-tr-md" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-blue-500 rounded-bl-md" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-blue-500 rounded-br-md" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: -50 }} // Slide out to left
            exit={{ opacity: 0, x: 20 }}
            className="absolute px-2 py-1 text-xs font-semibold text-white rounded pointer-events-none right-12 bg-slate-900 dark:bg-white dark:text-slate-900 whitespace-nowrap"
          >
            {social.name}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.a>
  );
}
