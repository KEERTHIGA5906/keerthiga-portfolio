import React from 'react';
import { 
  ArrowRight, 
  FileDown, 
  Github, 
  Linkedin, 
  Award, 
  Sparkles, 
  Terminal, 
  Eye,
  ChevronDown
} from 'lucide-react';
import { personalData } from '../config/portfolioData';

export default function Hero({ onOpenResumeModal }) {
  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const projectsEl = document.getElementById('projects');
    if (projectsEl) {
      const topOffset = 80;
      const elementPosition = projectsEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Branding, Typography, Introduction & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Status / Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 dark:text-emerald-300 text-xs font-medium tracking-wide shadow-sm shadow-emerald-500/10 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personalData.availability}</span>
            </div>

            {/* Name & Title Header */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-mono text-xs md:text-sm text-brand-500 dark:text-brand-400 tracking-wider uppercase font-semibold">
                <Terminal className="w-4 h-4 inline" />
                <span>Hello, World! I am</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                {personalData.name}
              </h1>
              <p className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-brand-500 via-purple-400 to-electric-400 bg-clip-text text-transparent">
                {personalData.title}
              </p>
            </div>

            {/* Editorial Headline */}
            <div className="relative pl-4 border-l-2 border-brand-500/40">
              <h2 className="text-lg sm:text-xl font-medium text-slate-800 dark:text-slate-200">
                "{personalData.headline}"
              </h2>
              <p className="text-xs sm:text-sm font-mono text-brand-600 dark:text-brand-300 mt-1">
                {personalData.subtitle}
              </p>
            </div>

            {/* Introduction Paragraph */}
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              {personalData.intro}
            </p>

            {/* Call to Actions & Social Links */}
            <div className="pt-2 flex flex-wrap items-center gap-3 w-full sm:w-auto">
              
              {/* Primary CTA */}
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-brand-600 via-purple-600 to-electric-500 hover:from-brand-500 hover:to-electric-400 shadow-lg shadow-brand-600/25 hover:shadow-glow-violet transition-all duration-300 transform active:scale-95 group"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* View Resume in Modal CTA */}
              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-brand-600 dark:text-brand-300 bg-brand-500/10 hover:bg-brand-500/20 border border-brand-500/30 transition-all duration-300 active:scale-95 shadow-sm"
              >
                <Eye className="w-4 h-4 text-brand-500" />
                <span>View Resume</span>
              </button>

              {/* Direct Download Resume CTA */}
              <a
                href={personalData.resumePdf}
                download="Keerthiga_Chelladurai_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-semibold text-sm text-slate-700 dark:text-slate-200 bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 hover:border-brand-500/40 hover:bg-slate-50 dark:hover:bg-white/10 shadow-sm transition-all duration-300 active:scale-95"
                title="Download verified resume PDF"
              >
                <FileDown className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                <span className="hidden sm:inline">PDF</span>
              </a>

              {/* Social Quick Links */}
              <div className="flex items-center gap-2 sm:ml-1">
                <a
                  href={personalData.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3 rounded-xl border border-slate-300 dark:border-white/10 bg-white/80 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-slate-900 dark:hover:bg-brand-600 hover:border-brand-500/50 transition-all duration-200 shadow-sm"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={personalData.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3 rounded-xl border border-slate-300 dark:border-white/10 bg-white/80 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-[#0077B5] dark:hover:bg-[#0077B5] hover:border-blue-500/50 transition-all duration-200 shadow-sm"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>

            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-4 gap-3 pt-6 border-t border-slate-200 dark:border-white/10 w-full max-w-xl">
              <div>
                <p className="text-xl sm:text-2xl font-bold font-mono text-slate-900 dark:text-white">9.32</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">B.E. CGPA</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold font-mono text-purple-600 dark:text-purple-400">97%</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">HSC Score</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold font-mono text-brand-500 dark:text-brand-400">1000+</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Problems Solved</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold font-mono text-electric-500 dark:text-electric-400">₹50K</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">KONE Winner</p>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Framed Photograph with Floating Technical Badges */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-72 sm:w-80 md:w-96 aspect-[4/5] max-w-full">
              
              {/* Ambient Glow behind frame */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand-600/30 via-purple-600/20 to-electric-400/30 rounded-3xl blur-2xl transform rotate-1 scale-95 opacity-70 group-hover:opacity-100 transition duration-500" />
              
              {/* Outer Decorative Tech Frame */}
              <div className="relative w-full h-full rounded-2xl p-1.5 bg-gradient-to-b from-white/20 via-brand-500/30 to-electric-500/30 dark:from-white/15 dark:via-brand-500/25 dark:to-electric-400/20 shadow-2xl overflow-hidden backdrop-blur-sm">
                
                {/* Photo container */}
                <div className="relative w-full h-full rounded-[14px] overflow-hidden bg-slate-900">
                  <img
                    src={personalData.profilePhoto}
                    alt={personalData.name}
                    className="w-full h-full object-cover object-top filter brightness-[0.98] contrast-[1.03] hover:scale-105 transition-transform duration-700 ease-out"
                    onError={(e) => {
                      e.currentTarget.src = personalData.profileFallback;
                    }}
                  />

                  {/* Gradient bottom overlay for smooth blending */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />
                  
                  {/* Internal badge on photo */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/10 text-white">
                    <p className="text-xs font-mono text-brand-400 font-semibold uppercase tracking-wider">
                      Student &amp; Developer
                    </p>
                    <p className="text-sm font-semibold text-slate-100">
                      KPR Institute of Engg &amp; Tech
                    </p>
                  </div>
                </div>

              </div>

              {/* Floating Badge 1: KONE Hackathon Winner (Top Left) */}
              <div className="absolute -top-4 -left-6 sm:-left-8 p-3 rounded-xl bg-white/90 dark:bg-[#0e111c]/90 backdrop-blur-md border border-brand-500/30 shadow-xl shadow-black/20 flex items-center gap-3 animate-float-slow">
                <div className="p-2 rounded-lg bg-brand-500/10 text-brand-500 dark:text-brand-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-mono tracking-wider text-slate-400 dark:text-slate-400 font-semibold">
                    1st Place Winner
                  </p>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">
                    KONE ELEVATE '26
                  </p>
                </div>
              </div>

              {/* Floating Badge 2: AI & ML Focus (Bottom Right) */}
              <div className="absolute -bottom-5 -right-4 sm:-right-6 p-3 rounded-xl bg-white/90 dark:bg-[#0e111c]/90 backdrop-blur-md border border-electric-400/30 shadow-xl shadow-black/20 flex items-center gap-3 animate-float-delayed">
                <div className="p-2 rounded-lg bg-electric-500/10 text-electric-500 dark:text-electric-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-mono tracking-wider text-slate-400 dark:text-slate-400 font-semibold">
                    Class of 2028
                  </p>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">
                    B.E. CSE (AI &amp; ML)
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[11px] font-mono uppercase tracking-widest">Scroll Down</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
}
