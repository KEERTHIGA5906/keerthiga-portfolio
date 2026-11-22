import React, { useState } from 'react';
import { 
  Github, 
  ExternalLink, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  BarChart3, 
  Smartphone, 
  CalendarDays, 
  Database,
  ArrowUpRight,
  Code
} from 'lucide-react';
import { projectsData } from '../config/portfolioData';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = selectedCategory === 'all'
    ? projectsData
    : projectsData.filter(p => p.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  // Interactive mockups rendering for visual identity
  const renderProjectVisual = (project) => {
    switch(project.id) {
      case 'kuberix':
        return (
          <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-slate-900 to-[#0e1628] text-white">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 font-mono text-xs text-slate-400">kuberix-tracker.local</span>
              </div>
              <span className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                Chart.js Visualizer
              </span>
            </div>
            
            <div className="py-4 space-y-3">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-xs text-slate-400">Total Monthly Outflow</p>
                  <p className="text-2xl font-mono font-bold text-white">₹ 24,580.00</p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-emerald-400 font-mono">+12% vs last month</span>
                </div>
              </div>

              {/* Chart Visual Simulation */}
              <div className="h-20 flex items-end gap-2 pt-2">
                <div className="flex-1 bg-cyan-500/30 rounded-t h-[45%] hover:bg-cyan-500 transition-all"></div>
                <div className="flex-1 bg-cyan-500/50 rounded-t h-[75%] hover:bg-cyan-500 transition-all"></div>
                <div className="flex-1 bg-cyan-500/40 rounded-t h-[60%] hover:bg-cyan-500 transition-all"></div>
                <div className="flex-1 bg-cyan-500/80 rounded-t h-[90%] hover:bg-cyan-500 transition-all"></div>
                <div className="flex-1 bg-cyan-400 rounded-t h-[100%] shadow-glow-electric"></div>
                <div className="flex-1 bg-cyan-500/30 rounded-t h-[40%] hover:bg-cyan-500 transition-all"></div>
              </div>
            </div>

            <div className="pt-2 border-t border-white/10 flex justify-between text-xs text-slate-400 font-mono">
              <span>Local Storage: Synced</span>
              <span className="text-cyan-300">Offline-First Engine</span>
            </div>
          </div>
        );

      case 'stress-prediction':
        return (
          <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-[#120d24] to-[#1e1336] text-white">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-purple-400" />
                <span className="font-mono text-xs text-slate-300">Flutter Mobile ML Client</span>
              </div>
              <span className="text-[11px] font-mono text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                Multi-Class Model
              </span>
            </div>

            <div className="py-4 space-y-3">
              <div className="flex items-center justify-between p-3 rounded-xl bg-purple-950/50 border border-purple-500/20">
                <div>
                  <p className="text-[11px] text-slate-400">Evaluated Stress Tier</p>
                  <p className="text-xl font-bold font-mono text-purple-300">Optimal (Low Stress)</p>
                </div>
                <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 text-xs font-bold font-mono">
                  94%
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-2 rounded-lg bg-white/5">
                  <span className="block text-[10px] text-slate-400">Sleep</span>
                  <span className="font-mono font-semibold text-white">7.5 hrs</span>
                </div>
                <div className="p-2 rounded-lg bg-white/5">
                  <span className="block text-[10px] text-slate-400">Heart Rate</span>
                  <span className="font-mono font-semibold text-white">68 bpm</span>
                </div>
                <div className="p-2 rounded-lg bg-white/5">
                  <span className="block text-[10px] text-slate-400">Mood</span>
                  <span className="font-mono font-semibold text-white">Balanced</span>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-white/10 flex justify-between text-xs text-slate-400 font-mono">
              <span>Scikit-learn Classifier</span>
              <span className="text-purple-300">Trained Pipeline</span>
            </div>
          </div>
        );

      case 'smart-eventsphere':
        return (
          <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-[#091a18] to-[#0f2d29] text-white">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4 text-emerald-400" />
                <span className="font-mono text-xs text-slate-300">Campus Event Portal</span>
              </div>
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                Infosys 7.0
              </span>
            </div>

            <div className="py-4 space-y-3">
              <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/20">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-bold text-white">Annual Tech Hackathon '26</span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded font-mono">Open</span>
                </div>
                <p className="text-[11px] text-slate-300">450+ Registered Students • Main Auditorium</p>
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-slate-300 px-1">
                <span>Frontend API Sync: OK</span>
                <span className="text-emerald-400">Status 200</span>
              </div>
            </div>

            <div className="pt-2 border-t border-white/10 flex justify-between text-xs text-slate-400 font-mono">
              <span>REST Endpoints Integrated</span>
              <span className="text-emerald-300">Auth & Registration</span>
            </div>
          </div>
        );

      case 'student-management':
        return (
          <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-[#1c1306] to-[#291e0a] text-white">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-amber-400" />
                <span className="font-mono text-xs text-slate-300">Flask + MySQL CRUD Engine</span>
              </div>
              <span className="text-[11px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                KICE Internship
              </span>
            </div>

            <div className="py-4 space-y-2">
              <div className="bg-black/40 rounded-lg p-2.5 font-mono text-xs text-amber-200/90 border border-amber-500/20">
                <p className="text-[11px] text-slate-400">// Relational Query Execution</p>
                <p className="text-emerald-400">SELECT * FROM students WHERE dept='AIML';</p>
                <p className="text-slate-400 text-[10px] mt-1">&gt; 120 Rows returned (0.002s)</p>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-300 px-1 font-mono">
                <span>CRUD Ops: [C, R, U, D] Active</span>
                <span className="text-amber-400">DB Connected</span>
              </div>
            </div>

            <div className="pt-2 border-t border-white/10 flex justify-between text-xs text-slate-400 font-mono">
              <span>Flask Application Architecture</span>
              <span className="text-amber-300">MySQL Schema</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-20 lg:py-28 relative z-10 border-t border-slate-200/60 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-brand-500 dark:text-brand-400 font-semibold uppercase tracking-wider mb-2">
              <span className="w-6 h-[2px] bg-brand-500 rounded-full" />
              <span>Engineering Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Featured Projects
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl">
              Practical software engineering applications developed during internships, academic projects, and open-source explorations.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
            <Code className="w-4 h-4 text-brand-500" />
            <span>4 Production & Internship Systems</span>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="flex flex-col rounded-3xl bg-white dark:bg-[#0f121d] border border-slate-200 dark:border-white/10 overflow-hidden shadow-xl shadow-black/5 dark:shadow-none hover:border-brand-500/40 hover:shadow-glow-violet transition-all duration-300 group"
            >
              
              {/* Top Custom Visual Mockup */}
              <div className="relative h-60 w-full overflow-hidden border-b border-slate-100 dark:border-white/10">
                {renderProjectVisual(project)}
                
                {/* Floating badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold font-mono bg-black/60 backdrop-blur-md border border-white/20 text-white">
                    {project.badge}
                  </span>
                </div>
              </div>

              {/* Bottom Details Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-brand-600 dark:text-brand-400 font-semibold">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400 dark:text-slate-400">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-brand-500 dark:group-hover:text-brand-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights Bullet Points */}
                  <div className="mt-4 space-y-2">
                    {project.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Tags & Action CTAs */}
                <div className="pt-4 border-t border-slate-100 dark:border-white/5 space-y-4">
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links Row */}
                  <div className="flex items-center gap-3 pt-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 text-white dark:bg-white/10 hover:bg-brand-600 dark:hover:bg-brand-600 transition-all duration-200"
                      >
                        <Github className="w-4 h-4" />
                        <span>View Repository</span>
                      </a>
                    )}

                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-brand-600/10 text-brand-600 dark:text-brand-400 border border-brand-500/30 hover:bg-brand-600 hover:text-white transition-all duration-200"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
