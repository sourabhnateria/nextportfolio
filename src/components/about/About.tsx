"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "@/components/ui/Section";

import { useRef, useState } from "react";
import { TubeLight } from "@/components/ui/TubeLight";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  return (
    <Section id="about" className="relative overflow-hidden bg-slate-950">
      <div ref={sectionRef} className="relative w-full py-10">
        <TubeLight sectionRef={sectionRef} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-20 md:flex-row xl:gap-32"
        >
          {/* Image Side */}
          <div className="flex justify-center w-full md:w-1/2">
            <div
              className={`relative w-64 h-64 md:w-80 md:h-80 group perspective-1000`}
              onTouchStart={() => setIsActive(true)}
              onTouchEnd={() => setIsActive(false)}
            >
              {/* Photo 3 (Left Wing) */}
              <div
                className={`absolute inset-0 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 z-10 bg-slate-200 origin-bottom-right
        rotate-[-6deg] translate-x-[-10px] scale-95 opacity-80
        group-hover:rotate-[-12deg] group-hover:translate-x-[-50%] group-hover:scale-100 group-hover:opacity-100
        ${isActive ? "!rotate-[-12deg] !-translate-x-[50%] !scale-100 !opacity-100" : ""}`}
              >
                <Image
                  src="/images/profiles/photo3.jpg"
                  alt="Sourabh Nateria 3"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Photo 2 (Right Wing) */}
              <div
                className={`absolute inset-0 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 z-20 bg-slate-200 origin-bottom-left
        rotate-[6deg] translate-x-[10px] scale-95 opacity-80
        group-hover:rotate-[12deg] group-hover:translate-x-[50%] group-hover:scale-100 group-hover:opacity-100
        ${isActive ? "!rotate-[12deg] !translate-x-[50%] !scale-100 !opacity-100" : ""}`}
              >
                <Image
                  src="/images/profiles/photo21.png"
                  alt="Sourabh Nateria 2"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Photo 1 (Center) */}
              <div
                className={`absolute inset-0 z-30 overflow-hidden transition-all duration-500 scale-100 rotate-0 shadow-2xl rounded-2xl bg-slate-200
        group-hover:scale-105 group-hover:-translate-y-2 group-hover:shadow-blue-500/20
        ${isActive ? "!scale-105 !-translate-y-2" : ""}`}
              >
                <Image
                  src="/images/profiles/photo1.jpeg"
                  alt="Sourabh Nateria 1"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full md:w-1/2">
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
              About Me
            </h2>
            <div className="space-y-4 leading-relaxed text-slate-400">
              <p>
                Hi, I&apos;m Sourabh Nateria - a passionate MERN Stack Software
                Engineer with 2+ years of experience building and deploying
                robust, scalable, and user-friendly web applications. My
                expertise lies in crafting efficient backend APIs with Node.js
                and Express.js, managing data with MongoDB, and developing
                dynamic, responsive frontends using React.js.
              </p>
              <p>
                I thrive on solving complex problems and am constantly learning
                new technologies to stay ahead in the fast-paced world of web
                development. Beyond MERN, I have hands-on experience with Rust,
                Reqwest, GraphQL, TypeScript, Redux, PostgreSQL, Docker, AWS
                (S3, EC2), Web scraping & automation and various testing
                frameworks, allowing me to contribute effectively across the
                entire development lifecycle.
              </p>
              <p>
                My goal is to create impactful digital solutions that not only
                meet business needs but also provide exceptional user
                experiences. I'm always eager to collaborate on challenging
                projects and contribute to innovative teams.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2">
              <InfoItem label="Name" value="Sourabh Nateria" />
              <InfoItem label="Role" value="Full-stack Engineer" />
              <InfoItem label="Location" value="Bhopal, India" />
              <InfoItem label="Email" value="sourabhnateria.cse@gmail.com" />
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-sm font-semibold tracking-wider uppercase text-slate-400">
        {label}
      </span>
      <span className="font-medium text-slate-200">{value}</span>
    </div>
  );
}
