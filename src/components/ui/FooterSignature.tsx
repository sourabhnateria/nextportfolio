"use client";

export function FooterSignature() {
  return (
    <div className="relative flex justify-center py-12 overflow-hidden select-none cursor-default">
  <div className="relative group">
    <h1 className="text-4xl md:text-8xl font-bold tracking-tighter text-transparent transition-colors duration-700" style={{ WebkitTextStroke: "1px rgba(100, 116, 139, 0.2)" }}>
      Sourabh Nateria
    </h1>
    <div className="absolute inset-0 overflow-hidden w-0 group-hover:w-full transition-[width] duration-700 ease-in-out">
      <h1 className="text-4xl md:text-8xl font-bold tracking-tighter text-slate-900 dark:text-white whitespace-nowrap">
        Sourabh Nateria
      </h1>
    </div>
  </div>
</div>
  );
}
