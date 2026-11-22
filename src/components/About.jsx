import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Calendar, 
  Award, 
  BookOpen, 
  Code2, 
  Server, 
  Brain, 
  Cpu, 
  CheckCircle2 
} from 'lucide-react';
import { personalData } from '../config/portfolioData';

export default function About() {
  const { education, interests } = personalData;

  const iconMap = {
    "Software Engineering": Code2,
    "Full-Stack Web Dev": Server,
    "Backend Development": Server,
    "Machine Learning": Brain,
    "Problem Solving": Cpu
  };

  return (
    <section id="about" className="py-20 lg:py-28 relative z-10 border-t border-slate-200/60 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-brand-500 dark:text-brand-400 font-semibold uppercase tracking-wider mb-2">
            <span className="w-6 h-[2px] bg-brand-500 rounded-full" />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            A Little About Me
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
            Computer Science undergraduate specializing in Artificial Intelligence & Machine Learning, building practical software systems.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Education Spotlight Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0f121d] border border-slate-200 dark:border-white/10 shadow-xl shadow-black/5 dark:shadow-none relative overflow-hidden group">
            
            {/* Top Accent Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-500 via-purple-500 to-electric-400" />
            
            <div className="space-y-6">
              
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-brand-500/10 text-brand-500 dark:text-brand-400">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 dark:text-emerald-400 font-mono font-bold text-xs">
                  <span>CGPA:</span>
                  <span className="text-sm">{education.cgpa}</span>
                </div>
              </div>

              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-400 font-semibold">
                  Education & Degree
                </p>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1 leading-snug">
                  {education.degree}
                </h3>
              </div>

              <div className="space-y-3 pt-2 border-t border-slate-100 dark:border-white/5 text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-4 h-4 text-brand-500 flex-shrink-0" />
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    {education.institution}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-brand-500 flex-shrink-0" />
                  <span>{education.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-brand-500 flex-shrink-0" />
                  <span>Expected Graduation: {education.graduation} ({education.period})</span>
                </div>
              </div>

              {/* Highlights checklist */}
              <div className="pt-4 border-t border-slate-100 dark:border-white/5 space-y-2.5">
                <p className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-400 font-semibold">
                  Academic Highlights
                </p>
                {education.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Bottom Status strip */}
            <div className="mt-8 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span className="font-mono">Status: Enrolled Full-Time</span>
              <span className="font-mono text-brand-500 font-semibold">AIML Department</span>
            </div>

          </div>

          {/* Right Column: Engineering Philosophy & Core Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            {/* Story Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0f121d] border border-slate-200 dark:border-white/10 shadow-xl shadow-black/5 dark:shadow-none space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>Passionate About Building & Problem Solving</span>
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                I am a Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning at KPR Institute of Engineering and Technology.
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                I am passionate about software development, backend engineering, and intelligent applications. I enjoy understanding problems, designing practical solutions, and building applications that create meaningful impact.
              </p>
            </div>

            {/* Interests & Core Pillars Grid */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-400 font-semibold px-1">
                Core Domains of Interest
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {interests.map((interest, idx) => {
                  const Icon = iconMap[interest.title] || Code2;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-white/70 dark:bg-[#0f121d]/70 backdrop-blur-md border border-slate-200 dark:border-white/10 hover:border-brand-500/40 hover:bg-slate-50 dark:hover:bg-[#151928] transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-brand-500/10 text-brand-500 dark:text-brand-400 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h5 className="font-bold text-sm text-slate-900 dark:text-white">
                            {interest.title}
                          </h5>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                            {interest.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
