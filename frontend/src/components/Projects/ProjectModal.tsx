import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Cpu, Layers, Terminal, Sparkles } from 'lucide-react';
import type { Project } from '../../data/resume';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto overscroll-contain"
        data-lenis-prevent
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#050505]/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="relative w-full max-w-4xl bg-[#0d0d0d] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 my-8 max-h-[85vh] overflow-y-auto overscroll-contain"
          data-lenis-prevent
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all border border-white/10 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono">
                {project.category}
              </span>
              {project.featured && (
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Featured Showcase
                </span>
              )}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">{project.title}</h2>
            <p className="text-sm text-slate-300 font-mono mt-1">{project.subtitle}</p>
          </div>

          {project.metrics && (
            <div className="mb-6 p-4 rounded-2xl bg-blue-950/20 border border-blue-500/20 flex items-center gap-3 text-blue-300 text-xs sm:text-sm font-mono">
              <Cpu className="w-5 h-5 text-blue-400 shrink-0" />
              <span><strong>Key Metric / Impact:</strong> {project.metrics}</span>
            </div>
          )}

          <div className="space-y-6 mb-8">
            <div>
              <h3 className="text-base font-bold text-white font-heading mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-400" /> Key Engineering Features
              </h3>
              <ul className="space-y-2.5">
                {project.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" /> Architectural Breakdown
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Designed with modular layered architecture separating controllers, services, and repositories. Leverages vectorized search indexing, automated schema compatibility testing, and microservice decoupling for enterprise scalability.
              </p>
            </div>

            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-slate-200 text-xs font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-6 border-t border-white/10">
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 rounded-xl glass-card text-xs sm:text-sm font-semibold text-slate-200 hover:text-white border border-white/10 hover:border-white/30 flex items-center justify-center gap-2 transition-all"
            >
              <Github className="w-4 h-4" />
              <span>View Source Code</span>
            </a>
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs sm:text-sm font-semibold text-white flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25 transition-all"
            >
              <span>Launch Live Demo</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
