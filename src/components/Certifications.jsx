import React from 'react';
import { ShieldCheck, Award, ExternalLink, CheckCircle } from 'lucide-react';
import { certificationsData } from '../config/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 lg:py-28 relative z-10 border-t border-slate-200/60 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-brand-500 dark:text-brand-400 font-semibold uppercase tracking-wider mb-2">
            <span className="w-6 h-[2px] bg-brand-500 rounded-full" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Certifications & Learning
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl">
            Specialized coursework, cloud computing credentials, enterprise training programs, and institutional certifications.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-3xl bg-white dark:bg-[#0f121d] border border-slate-200 dark:border-white/10 hover:border-brand-500/40 hover:shadow-glow-violet transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header Icon + Verified Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-brand-500/10 text-brand-500 dark:text-brand-400 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-500 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                    <CheckCircle className="w-3 h-3" />
                    <span>Verified</span>
                  </span>
                </div>

                <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-brand-500 dark:group-hover:text-brand-300 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">
                  {cert.issuer}
                </p>

                {/* Topics / Core Modules */}
                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-white/5 space-y-1.5">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                    Core Competencies
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.topics.map((topic, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* External Verification Link (if link provided in config) */}
              <div className="mt-6 pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs font-mono">
                {cert.link ? (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-brand-500 hover:text-brand-400 transition-colors"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-slate-400 dark:text-slate-400 text-[11px]">
                    Institutional Certificate
                  </span>
                )}
                <span className="text-[10px] text-slate-400 uppercase tracking-widest">
                  Academic
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

