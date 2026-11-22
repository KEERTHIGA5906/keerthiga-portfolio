import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, FileDown, Sparkles, Terminal } from 'lucide-react';
import { personalData } from '../config/portfolioData';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ isDark, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scrollspy logic
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(href.substring(1));
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#08090E]/80 dark:bg-[#08090E]/85 bg-white/80 backdrop-blur-xl border-b border-white/10 dark:border-white/10 border-slate-200/80 shadow-lg shadow-black/10'
          : 'bg-transparent py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo / Brand */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center space-x-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-lg p-1"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-electric-400 p-[1px] shadow-sm shadow-brand-500/20 group-hover:shadow-glow-violet transition-all duration-300">
              <div className="w-full h-full bg-slate-900 dark:bg-[#08090E] rounded-[11px] flex items-center justify-center">
                <span className="font-mono font-bold text-sm bg-gradient-to-r from-brand-400 to-electric-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                  KC
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5">
                {personalData.name}
              </span>
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400 -mt-0.5 tracking-wide">
                Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 p-1.5 rounded-full border border-white/10 dark:border-white/10 border-slate-200 bg-white/50 dark:bg-slate-900/40 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-brand-600 to-brand-500 shadow-sm shadow-brand-500/30'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center space-x-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2.5 rounded-xl border border-white/10 dark:border-white/10 border-slate-200 bg-white/60 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:text-brand-500 dark:hover:text-brand-400 hover:border-brand-500/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500/40"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400 animate-spin-slow" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* Quick Resume Button */}
            <a
              href={personalData.resumePdf}
              download="Keerthiga_Chelladurai_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-brand-600 to-electric-500 hover:from-brand-500 hover:to-electric-400 text-white shadow-md shadow-brand-500/20 hover:shadow-glow-violet transition-all duration-300 transform active:scale-95"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="lg:hidden p-2.5 rounded-xl border border-white/10 dark:border-white/10 border-slate-200 bg-white/60 dark:bg-white/5 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0c14]/95 dark:bg-[#0a0c14]/98 bg-white/95 backdrop-blur-2xl border-b border-white/10 dark:border-white/10 border-slate-200 px-6 pt-4 pb-6 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-brand-600/20 text-brand-400 font-semibold border border-brand-500/30'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          <div className="pt-4 border-t border-white/10 dark:border-white/10 border-slate-200 flex flex-col gap-2">
            <a
              href={personalData.resumePdf}
              download="Keerthiga_Chelladurai_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-brand-600 to-electric-500 text-white shadow-md shadow-brand-500/25"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
