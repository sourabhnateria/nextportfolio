"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal as TerminalIcon,
  X,
  Maximize2,
  Minimize2,
} from "lucide-react";
import { clsx } from "clsx";

interface Command {
  input: string;
  output: React.ReactNode;
}

export default function Terminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [history, setHistory] = useState<Command[]>([
    {
      input: "welcome",
      output:
        "Welcome to SN-Terminal v1.0. Type 'help' to see available commands.",
    },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, isOpen]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();

    let output: React.ReactNode = "";

    switch (cmd) {
      case "help":
        output = (
          <div className="space-y-1 text-slate-300">
            <p>Available commands:</p>
            <div className="grid grid-cols-[100px_1fr] gap-2">
              <span className="text-blue-400">about</span> Display information
              about me
              <span className="text-blue-400">skills</span> List technical
              skills
              <span className="text-blue-400">projects</span> Show featured
              projects
              <span className="text-blue-400">contact</span> Show contact
              details
              <span className="text-blue-400">clear</span> Clear terminal
              <span className="text-blue-400">exit</span> Close terminal
            </div>
          </div>
        );
        break;
      case "about":
        output =
          "Sourabh Nateria | Full Stack Software Engineer. Crafting high-performance, scalable web applications with a focus on elegant user experiences and robust backend solutions.";
        break;
      case "skills":
        output =
          "React, Node.js, Express.js, MongoDB, Python, Postman, Git, Github, Rust, Next.js, Tailwind CSS.";
        break;
      case "projects":
        output = (
          <ul className="list-disc list-inside">
            <li>EasyAi</li>
            <li>Travel Website</li>
            <li>Automation and Scraping</li>
          </ul>
        );
        break;
      case "contact":
        output = "Email: sourabhnateria.cse@gmail.com | Phone: +91 9479906370";
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      case "exit":
        setIsOpen(false);
        setInput("");
        return;
      case "":
        output = "";
        break;
      default:
        output = (
          <span className="text-red-400">
            Command not found: {cmd}. Type &apos;help&apos; for options.
          </span>
        );
    }

    setHistory([...history, { input: cmd, output }]);
    setInput("");
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => setIsOpen(true)}
            className="fixed z-50 p-4 text-green-400 transition-all border rounded-full shadow-lg bottom-6 right-6 bg-slate-900 border-slate-700 hover:shadow-green-900/20 hover:scale-110 group"
          >
            <TerminalIcon size={24} />
            <span className="absolute px-2 py-1 mr-3 text-xs text-white transition-opacity -translate-y-1/2 rounded opacity-0 pointer-events-none right-full top-1/2 bg-slate-800 group-hover:opacity-100 whitespace-nowrap">
              Open Terminal
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              width: isMaximized ? "100vw" : "min(600px, 90vw)",
              height: isMaximized ? "100vh" : "400px",
              borderRadius: isMaximized ? 0 : "12px",
              bottom: isMaximized ? 0 : "24px",
              right: isMaximized ? 0 : "24px",
            }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className={clsx(
              "fixed z-50 bg-slate-950/95 backdrop-blur-md border border-slate-800 shadow-2xl overflow-hidden flex flex-col font-mono text-sm",
              isMaximized ? "inset-0" : "bottom-6 right-6",
            )}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2 border-b cursor-move bg-slate-900 border-slate-800">
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3 bg-red-500 rounded-full"
                  onClick={() => setIsOpen(false)}
                />
                <div
                  className="w-3 h-3 bg-yellow-500 rounded-full"
                  onClick={() => setIsMaximized(!isMaximized)}
                />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="ml-2 text-xs text-slate-400">
                  sn-terminal — -zsh
                </span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <button
                  onClick={() => setIsMaximized(!isMaximized)}
                  className="hover:text-white"
                >
                  {isMaximized ? (
                    <Minimize2 size={14} />
                  ) : (
                    <Maximize2 size={14} />
                  )}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:text-white"
                >
                  <X size={14} />
                </button>
              </div>
            </div>

            {/* Body */}
            <div
              ref={scrollRef}
              className="flex-1 p-4 space-y-2 overflow-y-auto text-slate-300 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent"
              onClick={() => inputRef.current?.focus()}
            >
              {history.map((entry, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">➜</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-slate-100">{entry.input}</span>
                  </div>
                  {entry.output && (
                    <div className="pl-6 text-slate-400">{entry.output}</div>
                  )}
                </div>
              ))}

              <form
                onSubmit={handleCommand}
                className="flex items-center gap-2"
              >
                <span className="text-green-400">➜</span>
                <span className="text-blue-400">~</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none text-slate-100 placeholder-slate-600"
                  autoFocus
                />
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
