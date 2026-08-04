import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, BrainCircuit, Code, Cpu, Sparkles } from 'lucide-react';
import { resumeData } from '../../data/resume';

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden bg-[#07090f]/80 border-y border-white/5">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono uppercase tracking-wider mb-3"
          >
            <BrainCircuit className="w-3.5 h-3.5" />
            <span>Engineering Story & Background</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading"
          >
            Driven by Systems & Algorithms
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 max-w-2xl text-sm sm:text-base mt-3"
          >
            Building the intersection of enterprise microservices and intelligent vector AI engines.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-7 glass-card p-8 rounded-3xl relative border border-white/10"
          >
            <h3 className="text-xl font-bold text-white font-heading mb-4 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-blue-400" />
              Software Engineering with Precision
            </h3>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-4">
              I am a Computer Science undergraduate at <strong className="text-white">IIIT Bhubaneswar</strong> (CGPA: 8.96/10) with a focused passion for backend microservices architecture, RAG AI systems, and competitive problem solving.
            </p>
            <p className="text-slate-400 leading-relaxed text-sm mb-6">
              During my internship at <strong className="text-purple-300">Larsen & Toubro – Digital Energy Solutions</strong>, I engineered production Spring Boot microservices, migrated databases to PostgreSQL, and connected real-time backend telemetry to Angular SCADA dashboards.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
              {resumeData.education.map((edu, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-2 text-purple-400 text-xs font-mono mb-1">
                    <GraduationCap className="w-4 h-4" />
                    <span>{edu.duration}</span>
                  </div>
                  <h4 className="text-white font-semibold text-xs leading-snug">{edu.institution}</h4>
                  <p className="text-slate-400 text-[11px] mt-1">{edu.degree}</p>
                  <span className="inline-block mt-2 px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 text-[10px] font-bold">
                    {edu.score}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {resumeData.stats.map((stat, idx) => (
              <div
                key={idx}
                className="glass-card p-6 rounded-3xl border border-white/10 flex flex-col justify-between hover:border-purple-500/40 transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="w-8 h-8 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                    {idx === 0 ? <Code className="w-4 h-4" /> : idx === 1 ? <Sparkles className="w-4 h-4" /> : idx === 2 ? <Award className="w-4 h-4" /> : <GraduationCap className="w-4 h-4" />}
                  </span>
                  <span className="text-[10px] font-mono uppercase text-slate-500">Metric</span>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight mb-1">
                    {stat.prefix}
                    {inView ? (
                      <CountUp
                        start={0}
                        end={stat.value}
                        duration={2.5}
                        decimals={stat.decimal ? 2 : 0}
                      />
                    ) : (
                      stat.value
                    )}
                    {stat.suffix}
                  </div>
                  <p className="text-xs text-slate-400 font-medium leading-snug">{stat.label}</p>
                </div>
              </div>
            ))}

            <div className="col-span-2 glass-panel p-4 rounded-2xl border border-amber-500/20 bg-gradient-to-r from-amber-500/10 via-purple-500/10 to-transparent flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase text-amber-400 font-bold tracking-wider">LeetCode Knight Badge</span>
                <p className="text-xs text-white font-semibold mt-0.5">Top 8% Globally • Peak 1950+ Rating</p>
              </div>
              <a
                href={resumeData.personalInfo.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-xs font-bold transition-all"
              >
                View Profile
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
