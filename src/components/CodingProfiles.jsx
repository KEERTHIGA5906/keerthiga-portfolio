import React from 'react';
import { 
  Github, 
  Linkedin, 
  ExternalLink, 
  Code2, 
  Terminal, 
  Cpu, 
  CheckCircle, 
  ArrowUpRight,
  Flame,
  Award
} from 'lucide-react';
import { codingProfilesData } from '../config/portfolioData';

export default function CodingProfiles() {
  const getPlatformIcon = (id) => {
    switch (id) {
      case 'github':
        return <Github className="w-6 h-6" />;
      case 'linkedin':
        return <Linkedin className="w-6 h-6 text-[#0A66C2]" />;
      case 'leetcode':
        return (
          <div className="w-6 h-6 flex items-center justify-center font-mono font-bold text-amber-500">
            [LC]
          </div>
        );
      case 'hackerrank':
        return (
          <div className="w-6 h-6 flex items-center justify-center font-mono font-bold text-emerald-500">
            [HR]
          </div>
        );
      case 'codechef':
        return (
          <div className="w-6 h-6 flex items-center justify-center font-mono font-bold text-amber-600">
            [CC]
          </div>
        );
      default:
        return <Code2 className="w-6 h-6" />;
    }
  };

  return (
    <section id="profiles" className="py-20 lg:py-28 relative z-10 border-t border-slate-200/60 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-brand-500 dark:text-brand-400 font-semibold uppercase tracking-wider mb-2">
            <span className="w-6 h-[2px] bg-brand-500 rounded-full" />
            <span>Developer Footprint</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Coding Profiles & Presence
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl">
            Direct access to verified competitive programming profiles, code repositories, and professional networks.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {codingProfilesData.map((profile) => (
            <div
              key={profile.id}
              className={`p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#0f121d] border border-slate-200 dark:border-white/10 ${profile.color} transition-all duration-300 flex flex-col justify-between group shadow-lg shadow-black/5 dark:shadow-none`}
            >
              <div>
                {/* Platform Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 group-hover:scale-110 transition-transform">
                    {getPlatformIcon(profile.id)}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/10">
                    {profile.stat}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-500 dark:group-hover:text-brand-300 transition-colors">
                    {profile.platform}
                  </h3>
                  <p className="font-mono text-xs text-brand-600 dark:text-brand-400 font-semibold">
                    @{profile.username}
                  </p>
                </div>

                <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {profile.desc}
                </p>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5">
                <a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-white/5 hover:bg-brand-600 hover:text-white dark:hover:bg-brand-600 text-slate-800 dark:text-slate-200 transition-all duration-200 group/btn"
                >
                  <span>Visit Profile</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

