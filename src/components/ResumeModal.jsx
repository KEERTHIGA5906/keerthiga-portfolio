import React, { useEffect } from 'react';
import { X, FileDown, ExternalLink, Printer, Sparkles, CheckCircle2 } from 'lucide-react';
import { personalData } from '../config/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-5xl h-[92vh] max-h-[950px] flex flex-col rounded-3xl bg-[#0d0f17] border border-white/10 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-900/80 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-brand-500/10 text-brand-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base text-white flex items-center gap-2">
                <span>{personalData.name} — Official Resume</span>
                <span className="hidden sm:inline px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Verified 2026
                </span>
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                {personalData.title} • {personalData.education.college.shortDegree} (CGPA: 9.32)
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            
            {/* Open in new tab */}
            <a
              href={personalData.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
              title="Open full page in new tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Full Tab</span>
            </a>

            {/* Direct download */}
            <a
              href={personalData.resumePdf}
              download="Keerthiga_Chelladurai_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-brand-600 to-electric-500 hover:from-brand-500 hover:to-electric-400 text-white shadow-md shadow-brand-500/20 transition-all"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Close resume viewer"
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: PDF Embed */}
        <div className="flex-1 w-full h-full bg-[#141724] relative overflow-hidden flex flex-col items-center justify-center">
          <iframe
            src={`${personalData.resumePdf}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`}
            title="Keerthiga Chelladurai Resume"
            className="w-full h-full border-0"
          />
        </div>

        {/* Modal Footer info */}
        <div className="px-6 py-2.5 bg-slate-950/80 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
          <span>KPR Institute of Engineering and Technology • B.E. CSE (AIML)</span>
          <span className="text-brand-400">Updated from Verified Document</span>
        </div>

      </div>

    </div>
  );
}
