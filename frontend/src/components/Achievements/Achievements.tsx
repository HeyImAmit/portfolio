import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Trophy, Code2, Sparkles, Cpu } from 'lucide-react';

interface Milestone {
  id: string;
  hasNumber: boolean;
  startValue?: number;
  numberValue?: number;
  numberPrefix?: string;
  numberSuffix?: string;
  largeText?: string;
  title: string;
  subTitle: string;
  description: string;
  icon: any;
  align: 'left' | 'right';
}

const milestones: Milestone[] = [
  {
    id: 'dsa-knight',
    hasNumber: true,
    startValue: 0,
    numberValue: 700,
    numberSuffix: '+',
    title: 'LeetCode Knight & Algorithmic Excellence',
    subTitle: '700+ DSA Problems Solved',
    description: 'Mastered data structures, algorithms, and graph theory across 700+ problems on LeetCode (1950+ Knight rating, Top 8% globally), CodeChef, and Codeforces.',
    icon: Code2,
    align: 'left',
  },
  {
    id: 'gdg-hackathon',
    hasNumber: true,
    startValue: 6000,
    numberValue: 105,
    numberPrefix: 'Top ',
    title: 'GDG Hack2Skill Hackathon 2025',
    subTitle: 'National Top 105 Rank',
    description: 'Ranked among the Top 105 nationwide out of 37,000+ project submissions and 6,000+ competing engineering teams across India.',
    icon: Trophy,
    align: 'right',
  },
  {
    id: 'rag-ai-platform',
    hasNumber: false,
    largeText: 'RAG / AI',
    title: 'KnowledgeHub AI & Production Microservices',
    subTitle: 'Enterprise System Architecture',
    description: 'Engineered citation-aware conversational AI engines with FastAPI, LangChain, LangGraph workflows, ChromaDB vector search, and Spring Boot microservices.',
    icon: Cpu,
    align: 'left',
  },
];

function MilestoneItem({ milestone }: { milestone: Milestone }) {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });
  const Icon = milestone.icon;

  return (
    <div
      ref={ref}
      className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center my-16 md:my-24"
    >
      {/* Central Node Indicator */}
      <div className="absolute left-5 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
        <motion.div
          animate={{
            scale: inView ? 1.3 : 1,
            borderColor: inView ? '#3b82f6' : 'rgba(255, 255, 255, 0.15)',
            backgroundColor: inView ? '#2563eb' : '#090909',
            boxShadow: inView ? '0 0 25px rgba(59, 130, 246, 0.8)' : '0 0 0px transparent',
          }}
          transition={{ duration: 0.3 }}
          className="w-4 h-4 rounded-full border-2 cursor-pointer transition-all"
        />
      </div>

      {/* Content Side */}
      <div
        className={`pl-12 md:pl-0 ${
          milestone.align === 'left'
            ? 'md:pr-16 md:text-right md:col-start-1'
            : 'md:pl-16 md:text-left md:col-start-2'
        }`}
      >
        <motion.div
          initial={{ opacity: 0.3, y: 30, scale: 0.96 }}
          animate={{
            opacity: inView ? 1 : 0.4,
            y: inView ? 0 : 20,
            scale: inView ? 1 : 0.96,
          }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col"
        >
          {/* Sub-Header Tag */}
          <div
            className={`inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-blue-400 mb-2 ${
              milestone.align === 'left' ? 'md:justify-end' : 'md:justify-start'
            }`}
          >
            <Icon className="w-3.5 h-3.5" />
            <span>{milestone.subTitle}</span>
          </div>

          {/* Large Animated Number Display */}
          <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading text-white tracking-tight mb-2">
            {milestone.hasNumber ? (
              <span>
                {milestone.numberPrefix}
                {inView ? (
                  <CountUp
                    start={milestone.startValue ?? 0}
                    end={milestone.numberValue || 0}
                    duration={2.2}
                    useEasing={true}
                  />
                ) : (
                  milestone.startValue ?? 0
                )}
                {milestone.numberSuffix}
              </span>
            ) : (
              <span className="text-gradient-accent">{milestone.largeText}</span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-bold text-slate-100 font-heading mb-3">
            {milestone.title}
          </h3>

          {/* Concise Description */}
          <p
            className={`text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md ${
              milestone.align === 'left' ? 'md:ml-auto' : 'md:mr-auto'
            }`}
          >
            {milestone.description}
          </p>
        </motion.div>
      </div>

      <div className="hidden md:block" />
    </div>
  );
}

export default function Achievements() {
  const containerRef = useRef<HTMLDivElement>(null!);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 60%', 'end 70%'],
  });

  const scaleY = useSpring(scrollYProgress, { stiffness: 400, damping: 40 });

  return (
    <section
      id="achievements"
      className="py-28 px-4 relative overflow-hidden bg-[#050505] border-y border-white/5"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-950/15 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10" ref={containerRef}>
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-widest mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Milestones & Impact</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading">
            Engineering Milestones
          </h2>
          <p className="text-slate-400 max-w-xl text-sm sm:text-base mt-3">
            A journey defined by algorithmic performance, national competitions, and intelligent software engines.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-5 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/10" />

          <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute left-5 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-cyan-400 to-emerald-400 shadow-[0_0_15px_rgba(59,130,246,0.8)] z-10"
          />

          <div className="py-4">
            {milestones.map((milestone) => (
              <MilestoneItem key={milestone.id} milestone={milestone} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
