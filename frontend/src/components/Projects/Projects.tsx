import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Sparkles, ArrowUpRight, Cpu, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { resumeData, type Project } from '../../data/resume';
import ProjectModal from './ProjectModal';

const categories = ['All', 'AI & RAG', 'Full-Stack', 'Backend & Systems'] as const;

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredProjects = selectedCategory === 'All'
    ? resumeData.projects
    : resumeData.projects.filter(p => p.category === selectedCategory);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden bg-[#050505] border-y border-white/5">
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-950/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Project Showcase</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading">
            Featured Systems & Projects
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base mt-3">
            Click any project card to expand the full case study and architecture breakdown.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentIndex(0);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20 scale-105'
                  : 'glass-card text-slate-400 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative min-h-[460px] flex items-center justify-center py-4">
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-6 z-30 p-3 rounded-full bg-[#141414]/80 border border-white/10 hover:border-white/30 text-white hover:bg-white/10 transition-all backdrop-blur-md cursor-pointer"
            aria-label="Previous Project"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-6 z-30 p-3 rounded-full bg-[#141414]/80 border border-white/10 hover:border-white/30 text-white hover:bg-white/10 transition-all backdrop-blur-md cursor-pointer"
            aria-label="Next Project"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="relative w-full max-w-2xl h-[440px] flex items-center justify-center">
            {filteredProjects.map((project, idx) => {
              const offset = idx - currentIndex;
              const isCenter = offset === 0;
              const isPrev = offset === -1 || (currentIndex === 0 && idx === filteredProjects.length - 1);
              const isNext = offset === 1 || (currentIndex === filteredProjects.length - 1 && idx === 0);

              if (!isCenter && !isPrev && !isNext) return null;

              let xTransform = '0%';
              let scale = 1;
              let opacity = 1;
              let zIndex = 20;

              if (isPrev) {
                xTransform = '-60%';
                scale = 0.85;
                opacity = 0.4;
                zIndex = 10;
              } else if (isNext) {
                xTransform = '60%';
                scale = 0.85;
                opacity = 0.4;
                zIndex = 10;
              }

              return (
                <motion.div
                  key={project.id}
                  onClick={() => setActiveProject(project as Project)}
                  style={{ zIndex }}
                  animate={{
                    translateX: xTransform,
                    scale: scale,
                    opacity: opacity,
                  }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute w-full max-w-md bg-[#0e0e0e] border border-white/10 hover:border-blue-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl cursor-pointer flex flex-col justify-between h-full backdrop-blur-md group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
                        {project.category}
                      </span>
                      <span className="text-slate-400 group-hover:text-blue-400 transition-colors flex items-center gap-1 text-xs font-mono">
                        <Maximize2 className="w-3.5 h-3.5" /> Details
                      </span>
                    </div>

                    <h3 className="text-2xl font-extrabold text-white font-heading group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-mono mt-1 mb-4 line-clamp-2">
                      {project.subtitle}
                    </p>

                    {project.metrics && (
                      <div className="px-3 py-2 rounded-xl bg-blue-950/30 border border-blue-500/20 text-blue-300 text-xs font-mono mb-4 flex items-center gap-2">
                        <Cpu className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span className="line-clamp-1">{project.metrics}</span>
                      </div>
                    )}

                    <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                      {project.points[0]}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span key={tech} className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-slate-400">
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="text-[10px] font-mono text-slate-500 self-center">
                          +{project.techStack.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 text-slate-400">
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-lg hover:text-white hover:bg-white/10 transition-all"
                        aria-label="GitHub Source"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-lg hover:text-blue-400 hover:bg-white/10 transition-all"
                        aria-label="Live Demo"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}
