import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';
import SkillsMarquee from './SkillsMarquee';

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden bg-[#050505] border-y border-white/5">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-96 bg-blue-950/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3"
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Ecosystem</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading">
            Skills & Technology Architecture
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base mt-3">
            Hover over any technology tag to pause the continuous flow.
          </p>
        </div>

        {/* Infinite Multi-Row Marquee */}
        <SkillsMarquee />

      </div>
    </section>
  );
}
