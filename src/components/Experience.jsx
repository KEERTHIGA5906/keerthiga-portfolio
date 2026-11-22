import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Layers } from 'lucide-react';
import { experienceData } from '../config/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-28 relative z-10 border-t border-slate-200/60 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-brand-500 dark:text-brand-400 font-semibold uppercase tracking-wider mb-2">
            <span className="w-6 h-[2px] bg-brand-500 rounded-full" />
            <span>Career & Industry Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Internship Experience
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl">
            Practical industry tenures across backend software engineering, virtual enterprise development, and responsive user experience design.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Vertical central timeline line */}
          <div className="hidden md:block absolute top-6 bottom-6 left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-brand-500 via-purple-500 to-electric-500/20" />

          <div className="space-y-12">
            {experienceData.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Timeline Node Point (Desktop) */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-9 h-9 rounded-full bg-[#08090E] border-2 border-brand-500 items-center justify-center shadow-lg shadow-brand-500/30 z-20">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-400 animate-ping opacity-75" />
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-400 absolute" />
                  </div>

                  {/* Empty side for layout balance */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Content Card Side */}
                  <div className="w-full md:w-1/2 md:px-8">
                    <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0f121d] border border-slate-200 dark:border-white/10 shadow-xl shadow-black/5 dark:shadow-none hover:border-brand-500/40 hover:shadow-glow-violet transition-all duration-300 relative group">
                      
                      {/* Top Row: Role, Company & Period */}
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                        <div>
                          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                            {exp.type}
                          </span>
                          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-0.5">
                            {exp.role}
                          </h3>
                          <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5 mt-1">
                            <Briefcase className="w-4 h-4 text-brand-500" />
                            <span>{exp.company}</span>
                          </p>
                        </div>

                        <div className="flex flex-col items-end">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300">
                            <Calendar className="w-3.5 h-3.5 text-brand-500" />
                            <span>{exp.period}</span>
                          </span>
                          <span className="text-[11px] font-mono text-slate-400 dark:text-slate-400 mt-1">
                            {exp.duration}
                          </span>
                        </div>
                      </div>

                      {/* Brief description */}
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Key Contributions Checklist */}
                      <div className="space-y-2.5 mb-6">
                        {exp.contributions.map((contribution, cIdx) => (
                          <div key={cIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
                            <span>{contribution}</span>
                          </div>
                        ))}
                      </div>

                      {/* Skills Tags */}
                      <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex flex-wrap gap-2">
                        {exp.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/10"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
