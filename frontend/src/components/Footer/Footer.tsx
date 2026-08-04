import { Github, Linkedin, Code2, Mail, ArrowUp } from 'lucide-react';
import { resumeData } from '../../data/resume';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#040508] border-t border-white/10 pt-16 pb-12 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="flex items-center justify-between w-full pb-12 border-b border-white/10 mb-8 flex-wrap gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center font-bold text-white font-heading text-sm">
              APL
            </div>
            <div>
              <h3 className="font-heading font-bold text-white text-base">Amit Prasad Lal</h3>
              <p className="text-xs text-slate-400 font-mono">Software Developer & AI/RAG Engineer</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <a
              href={resumeData.personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 hover:text-white transition-all border border-white/5"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={resumeData.personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 hover:text-white transition-all border border-white/5"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={resumeData.personalInfo.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 hover:text-amber-400 transition-all border border-white/5"
              aria-label="LeetCode"
            >
              <Code2 className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${resumeData.personalInfo.email}`}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 hover:text-blue-400 transition-all border border-white/5"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between w-full text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Amit Prasad Lal. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with React 19, Three.js & Tailwind CSS
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all cursor-pointer border border-white/10"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
