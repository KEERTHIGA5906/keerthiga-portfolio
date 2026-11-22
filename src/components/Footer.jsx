import React from 'react';
import { Github, Linkedin, ArrowUp, Heart, Code2 } from 'lucide-react';
import { personalData } from '../config/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative z-10 border-t border-slate-200/80 dark:border-white/10 bg-white/50 dark:bg-[#07090f]/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between">
          
          {/* Left Column: Brand & Title */}
          <div className="md:col-span-5 space-y-2">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-600 to-electric-400 p-[1px]">
                <div className="w-full h-full bg-slate-900 dark:bg-[#08090E] rounded-[7px] flex items-center justify-center">
                  <span className="font-mono font-bold text-xs bg-gradient-to-r from-brand-400 to-electric-400 bg-clip-text text-transparent">
                    KC
                  </span>
                </div>
              </div>
              <span className="font-display font-bold text-lg text-slate-900 dark:text-white">
                {personalData.name}
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-sm">
              {personalData.title} &amp; B.E. CSE (AIML) Student at KPR Institute of Engineering and Technology.
            </p>
          </div>

          {/* Middle Column: Quick Navigation Links */}
          <div className="md:col-span-4 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-slate-600 dark:text-slate-400">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-brand-500 dark:hover:text-brand-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Column: Socials & Back to Top */}
          <div className="md:col-span-3 flex items-center md:justify-end gap-3">
            <a
              href={personalData.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:text-brand-500 hover:border-brand-500/30 transition-all"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalData.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:text-brand-500 hover:border-brand-500/30 transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:text-brand-500 hover:border-brand-500/30 transition-all"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright & attribution */}
        <div className="mt-8 pt-8 border-t border-slate-200/60 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-3">
          <p>© {currentYear} {personalData.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5 font-medium">
            <span>Designed &amp; Developed with Passion</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
          </p>
        </div>

      </div>
    </footer>
  );
}
