"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { experienceData } from "@/data/experience";
import { clsx } from "clsx";

export default function Experience() {
  return (
    <Section id="resume" className="bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Experience
          </h2>
          <p className="text-slate-400">
            My educational and professional journey.
          </p>
        </motion.div>

        <div className="relative ml-4 space-y-12 border-l-2 border-slate-800 md:ml-6">
          {experienceData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Icon */}
              <div
                className={clsx(
                  "absolute -left-[9px] md:-left-[11px] top-0 w-5 h-5 md:w-6 md:h-6 rounded-full border-4 border-slate-950",
                  item.active ? "bg-emerald-500" : "bg-blue-600",
                )}
              />

              <div className="flex flex-col mb-2 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-bold text-white">{item.role}</h3>
                <span className="px-3 py-1 mt-2 text-sm font-medium rounded-full text-slate-400 bg-slate-900 w-fit sm:mt-0">
                  {item.period}
                </span>
              </div>

              <div className="mb-3 text-base font-medium text-blue-400">
                {item.company}
              </div>

              {item.description && (
                <p className="mb-3 text-slate-400">{item.description}</p>
              )}

              {item.achievements && (
                <ul className="ml-4 space-y-1 list-disc list-outside text-slate-400">
                  {item.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/sourabh_nateria.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 font-medium text-white transition-colors bg-blue-600 rounded-full shadow-lg hover:bg-blue-700"
          >
            Download Full Resume
          </a>
        </div>
      </div>
    </Section>
  );
}
