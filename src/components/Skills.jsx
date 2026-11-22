import React, { useState } from 'react';
import { 
  Code2, 
  Globe, 
  Database, 
  Brain, 
  Wrench, 
  Terminal, 
  Layers, 
  Cpu, 
  Sparkles,
  CheckCircle,
  FileCode,
  Palette,
  Server,
  Coffee,
  Binary,
  Table,
  GitBranch,
  Layout,
  HardDrive,
  Sliders
} from 'lucide-react';
import { skillsData } from '../config/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Technologies', icon: Sparkles },
    { id: 'languages', label: 'Languages', icon: Code2, data: skillsData.languages },
    { id: 'web', label: 'Web Development', icon: Globe, data: skillsData.webDevelopment },
    { id: 'database', label: 'Databases', icon: Database, data: skillsData.databases },
    { id: 'ml', label: 'Machine Learning', icon: Brain, data: skillsData.machineLearning },
    { id: 'tools', label: 'Tools & Platforms', icon: Wrench, data: skillsData.tools },
  ];

  const iconComponents = {
    Code2,
    Coffee,
    Binary,
    FileCode,
    Palette,
    Sparkles,
    Server,
    Database,
    Layers,
    Brain,
    Table,
    Cpu,
    GitBranch,
    Terminal,
    Layout,
    HardDrive,
    Sliders
  };

  const allSkills = [
    ...skillsData.languages.map(s => ({ ...s, group: 'Programming Languages' })),
    ...skillsData.webDevelopment.map(s => ({ ...s, group: 'Web Development' })),
    ...skillsData.databases.map(s => ({ ...s, group: 'Database' })),
    ...skillsData.machineLearning.map(s => ({ ...s, group: 'Machine Learning' })),
    ...skillsData.tools.map(s => ({ ...s, group: 'Tools & Workflow' })),
  ];

  const displayedSkills = activeTab === 'all'
    ? allSkills
    : (categories.find(c => c.id === activeTab)?.data || []).map(s => ({
        ...s,
        group: categories.find(c => c.id === activeTab)?.label
      }));

  return (
    <section id="skills" className="py-20 lg:py-28 relative z-10 border-t border-slate-200/60 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-brand-500 dark:text-brand-400 font-semibold uppercase tracking-wider mb-2">
              <span className="w-6 h-[2px] bg-brand-500 rounded-full" />
              <span>Technical Arsenal</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Skills & Expertise
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl">
              Clean engineering stack focused on foundational systems, full-stack web development, relational data, and machine learning pipelines.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-white dark:bg-[#0f121d] border border-slate-200 dark:border-white/10 shadow-sm">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-brand-600 text-white shadow-sm shadow-brand-600/30'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {displayedSkills.map((skill, index) => {
            const Icon = iconComponents[skill.icon] || Code2;
            return (
              <div
                key={index}
                className="group relative p-5 rounded-2xl bg-white dark:bg-[#0f121d] border border-slate-200 dark:border-white/10 hover:border-brand-500/50 hover:shadow-glow-violet dark:hover:bg-[#141726] transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Row: Icon + Category Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-200 group-hover:bg-brand-500/10 group-hover:text-brand-400 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-400">
                    {skill.category}
                  </span>
                </div>

                {/* Skill Name & Focus Area */}
                <div>
                  <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-brand-500 dark:group-hover:text-brand-300 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
                    {skill.tag}
                  </p>
                </div>

                {/* Subtle Group Marker */}
                <div className="mt-3 pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-400">
                  <span className="truncate">{skill.group}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Informative Note (No fake percentages guarantee) */}
        <div className="mt-10 p-4 rounded-2xl bg-white/50 dark:bg-[#0f121d]/50 border border-slate-200 dark:border-white/5 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-500" />
            <span>Honest representation of practical tools, frameworks, and academic proficiencies.</span>
          </div>
          <span className="hidden sm:inline font-mono">17 Technologies Mastered</span>
        </div>

      </div>
    </section>
  );
}

