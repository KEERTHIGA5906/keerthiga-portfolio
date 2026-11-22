import React from 'react';
import { Award, Trophy, Sparkles, CheckCircle2, TrendingUp, Zap, Users, Flame } from 'lucide-react';
import { achievementsData } from '../config/portfolioData';

export default function Achievements() {
  const primaryAchievement = achievementsData.find(a => a.isPrimary);
  const otherAchievements = achievementsData.filter(a => !a.isPrimary);

  return (
    <section id="achievements" className="py-20 lg:py-28 relative z-10 border-t border-slate-200/60 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-brand-500 dark:text-brand-400 font-semibold uppercase tracking-wider mb-2">
            <span className="w-6 h-[2px] bg-brand-500 rounded-full" />
            <span>Honors & Competitions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Honors & Achievements
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl">
            National hackathon triumphs, competitive algorithmic problem solving milestones, and AI innovation accolades.
          </p>
        </div>

        {/* Featured Achievement: KONE Elevate '26 Spotlight Card */}
        {primaryAchievement && (
          <div className="mb-12 relative rounded-3xl p-1 bg-gradient-to-r from-amber-500 via-brand-500 to-electric-400 shadow-2xl shadow-brand-500/10">
            <div className="p-8 sm:p-10 rounded-[22px] bg-white dark:bg-[#0c0f1a] relative overflow-hidden">
              
              {/* Background ambient lighting */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                
                {/* Left side details */}
                <div className="lg:col-span-8 space-y-4">
                  
                  {/* Badges */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-mono bg-amber-500/10 border border-amber-500/30 text-amber-500 dark:text-amber-400">
                      <Trophy className="w-3.5 h-3.5 text-amber-400" />
                      <span>{primaryAchievement.badge}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono bg-brand-500/10 border border-brand-500/20 text-brand-400">
                      <Zap className="w-3.5 h-3.5" />
                      <span>30-Hour Hackathon</span>
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono bg-electric-500/10 border border-electric-500/20 text-electric-400">
                      <Users className="w-3.5 h-3.5" />
                      <span>{primaryAchievement.metric}</span>
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {primaryAchievement.title}
                  </h3>

                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs sm:text-sm">
                    <span className="font-semibold text-slate-900 dark:text-white">Project: </span>
                    <span className="text-brand-600 dark:text-brand-300 font-medium">
                      {primaryAchievement.projectTitle}
                    </span>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                    {primaryAchievement.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    {primaryAchievement.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Right side metric showcase card */}
                <div className="lg:col-span-4 flex flex-col justify-center items-center text-center p-6 rounded-2xl bg-slate-50 dark:bg-[#121524] border border-slate-200 dark:border-white/10">
                  <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 mb-3 text-amber-400">
                    <Trophy className="w-10 h-10" />
                  </div>
                  <span className="text-3xl sm:text-4xl font-mono font-extrabold text-slate-900 dark:text-white">
                    ₹50,000
                  </span>
                  <span className="text-xs uppercase font-mono tracking-wider text-slate-500 dark:text-slate-400 mt-1">
                    Cash Prize Awarded
                  </span>
                  <div className="w-full mt-4 pt-4 border-t border-slate-200 dark:border-white/10 text-[11px] font-mono text-slate-500 dark:text-slate-400 flex justify-between">
                    <span>Finalist Stage</span>
                    <span className="text-emerald-400">Top 5 Winners</span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* Other Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherAchievements.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0f121d] border border-slate-200 dark:border-white/10 shadow-lg hover:border-brand-500/40 hover:shadow-glow-violet transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-brand-500/10 text-brand-500 dark:text-brand-400 border border-brand-500/20">
                    <Award className="w-3.5 h-3.5" />
                    <span>{item.badge}</span>
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {item.metric}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h4>
                <p className="text-xs text-brand-600 dark:text-brand-300 font-mono mt-0.5">
                  {item.organization}
                </p>

                <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-4 space-y-2">
                  {item.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                      <CheckCircle2 className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>Verified Milestone</span>
                <span className="text-brand-400">Active Record</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
