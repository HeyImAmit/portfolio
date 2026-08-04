import { motion } from 'framer-motion';
import { Briefcase, Building2, Calendar, ChevronRight, Layers } from 'lucide-react';
import { resumeData } from '../../data/resume';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 relative overflow-hidden bg-[#07090f]/90 border-y border-white/5">
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono uppercase tracking-wider mb-3"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Enterprise Journey</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading">
            Professional Experience
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base mt-3">
            Real-world backend microservices, database migrations, and real-time telemetry systems.
          </p>
        </div>

        <div className="relative border-l border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {resumeData.experience.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#07090f] border-2 border-purple-500 flex items-center justify-center group-hover:scale-125 group-hover:bg-purple-500 transition-all shadow-lg shadow-purple-500/40">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>

              <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-purple-500/40 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-white/10">
                  <div>
                    <div className="flex items-center gap-2 text-purple-400 font-mono text-xs font-semibold uppercase tracking-wider mb-1">
                      <Building2 className="w-3.5 h-3.5" />
                      <span>{exp.company}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">{exp.role}</h3>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-blue-400" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300 text-xs sm:text-sm leading-relaxed">
                      <ChevronRight className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                {exp.techStack && (
                  <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-mono uppercase text-slate-500 mr-2 flex items-center gap-1">
                      <Layers className="w-3 h-3" /> Tech Stack:
                    </span>
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-purple-500/10 text-purple-300 border border-purple-500/20 text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
