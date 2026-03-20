"use client";

import { useState } from "react";

export function FooterSignature() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="relative flex justify-center py-12 overflow-hidden cursor-default select-none">
      <div
        className="relative group"
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
        onTouchStart={() => setIsActive((prev) => !prev)}
      >
        <h1
          className="text-4xl font-bold tracking-tighter text-transparent transition-colors duration-700 md:text-8xl"
          style={{ WebkitTextStroke: "1px rgba(100, 116, 139, 0.2)" }}
        >
          Sourabh Nateria
        </h1>
        <div
          className={`absolute inset-0 overflow-hidden transition-[width] duration-700 ease-in-out ${isActive ? "w-full" : "w-0"}`}
        >
          <h1 className="text-4xl font-bold tracking-tighter text-slate-400 md:text-8xl whitespace-nowrap">
            Sourabh Nateria
          </h1>
        </div>
      </div>
    </div>
  );
}
