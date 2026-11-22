import React from 'react';

export default function BackgroundGlow() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 dark:opacity-20" />
      
      {/* Top Left Violet Aurora */}
      <div className="absolute -top-32 -left-32 w-96 md:w-[600px] h-96 md:h-[600px] bg-brand-600/15 dark:bg-brand-500/10 rounded-full blur-[120px] transform-gpu" />

      {/* Top Right Electric Cyan Aurora */}
      <div className="absolute top-20 -right-20 w-80 md:w-[500px] h-80 md:h-[500px] bg-electric-400/15 dark:bg-electric-500/10 rounded-full blur-[130px] transform-gpu" />

      {/* Middle Accent Aurora */}
      <div className="absolute top-1/2 left-1/3 w-72 md:w-[550px] h-72 md:h-[550px] bg-purple-700/10 dark:bg-purple-600/08 rounded-full blur-[140px] transform-gpu" />

      {/* Bottom Subtle Aurora */}
      <div className="absolute -bottom-20 right-1/4 w-80 md:w-[500px] h-80 md:h-[500px] bg-blue-600/10 dark:bg-indigo-600/08 rounded-full blur-[130px] transform-gpu" />
    </div>
  );
}
