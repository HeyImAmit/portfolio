import { Cpu, Server, Database, Code, ShieldCheck, Sparkles, Layers, Terminal, Cloud, Workflow } from 'lucide-react';

interface SkillItem {
  name: string;
  category: string;
  icon: any;
}

const row1Skills: SkillItem[] = [
  { name: 'Spring Boot', category: 'Backend', icon: Server },
  { name: 'Java', category: 'Language', icon: Code },
  { name: 'RESTful APIs', category: 'Backend', icon: Terminal },
  { name: 'Microservices Architecture', category: 'Backend', icon: Layers },
  { name: 'FastAPI', category: 'Backend', icon: Server },
  { name: 'Node.js', category: 'Backend', icon: Cpu },
  { name: 'Express.js', category: 'Backend', icon: Terminal },
  { name: 'Hibernate / JPA', category: 'Backend', icon: Database },
  { name: 'Apache Kafka', category: 'Event Streaming', icon: Workflow },
  { name: 'RabbitMQ', category: 'Messaging', icon: Workflow },
];

const row2Skills: SkillItem[] = [
  { name: 'RAG Platforms', category: 'AI', icon: Sparkles },
  { name: 'LLMs Integration', category: 'AI', icon: Cpu },
  { name: 'LangChain', category: 'AI Orchestration', icon: Workflow },
  { name: 'LangGraph', category: 'AI Workflows', icon: Layers },
  { name: 'ChromaDB', category: 'Vector Database', icon: Database },
  { name: 'Vector Embeddings', category: 'AI Search', icon: Sparkles },
  { name: 'Semantic Search', category: 'AI', icon: Sparkles },
  { name: 'Generative AI', category: 'AI', icon: Cpu },
  { name: 'Prompt Engineering', category: 'AI', icon: Code },
  { name: 'NLP', category: 'AI', icon: Sparkles },
];

const row3Skills: SkillItem[] = [
  { name: 'PostgreSQL', category: 'Database', icon: Database },
  { name: 'MongoDB', category: 'Database', icon: Database },
  { name: 'Redis Caching', category: 'Database', icon: Database },
  { name: 'Docker Containers', category: 'DevOps', icon: Cloud },
  { name: 'MySQL', category: 'Database', icon: Database },
  { name: 'Vector Indexing', category: 'Database', icon: Database },
  { name: 'SQL Query Optimization', category: 'Database', icon: Database },
  { name: 'SCADA Telemetry', category: 'Systems', icon: Server },
  { name: 'Agile & Scrum', category: 'Methodology', icon: ShieldCheck },
];

const row4Skills: SkillItem[] = [
  { name: 'React 19', category: 'Frontend', icon: Code },
  { name: 'TypeScript', category: 'Language', icon: Code },
  { name: 'JavaScript (ES6+)', category: 'Language', icon: Code },
  { name: 'Angular', category: 'Frontend', icon: Code },
  { name: 'Tailwind CSS v4', category: 'Styling', icon: Layers },
  { name: 'System Design', category: 'Core CS', icon: Layers },
  { name: 'DSA (700+ Solved)', category: 'Core CS', icon: ShieldCheck },
  { name: 'LeetCode Knight (1950+)', category: 'Algorithms', icon: Sparkles },
  { name: 'Operating Systems', category: 'Core CS', icon: Cpu },
  { name: 'Computer Networks', category: 'Core CS', icon: Cloud },
];

function MarqueeRow({ items, direction = 'left' }: { items: SkillItem[]; direction?: 'left' | 'right' }) {
  const duplicatedItems = [...items, ...items, ...items, ...items];
  const animClass = direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right';

  return (
    <div className="overflow-hidden w-full py-2 group marquee-container">
      <div className={animClass}>
        {duplicatedItems.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div
              key={`${skill.name}-${index}`}
              className="inline-flex items-center gap-2.5 px-4 py-2.5 mx-2 rounded-xl bg-[#101010]/80 border border-white/10 hover:border-blue-500/40 hover:bg-[#161616] text-slate-200 hover:text-white text-xs sm:text-sm font-medium transition-all duration-200 transform hover:scale-105 shadow-sm cursor-default shrink-0"
            >
              <Icon className="w-4 h-4 text-blue-400 opacity-80" />
              <span>{skill.name}</span>
              <span className="text-[10px] font-mono uppercase text-slate-500 bg-white/5 px-2 py-0.5 rounded">
                {skill.category}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function SkillsMarquee() {
  return (
    <div className="flex flex-col gap-4 py-8 relative">
      <div className="flex flex-col gap-2">
        <span className="text-xs font-mono uppercase text-slate-500 px-2 tracking-wider">Backend & Systems Engineering</span>
        <MarqueeRow items={row1Skills} direction="left" />
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xs font-mono uppercase text-slate-500 px-2 tracking-wider">AI, RAG & Vector Intelligence</span>
        <MarqueeRow items={row2Skills} direction="right" />
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xs font-mono uppercase text-slate-500 px-2 tracking-wider">Databases, Caching & Cloud Infrastructure</span>
        <MarqueeRow items={row3Skills} direction="left" />
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xs font-mono uppercase text-slate-500 px-2 tracking-wider">Frontend, Algorithms & Core CS</span>
        <MarqueeRow items={row4Skills} direction="right" />
      </div>
    </div>
  );
}
