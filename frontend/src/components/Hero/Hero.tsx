import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Download, FileCode, Github, Linkedin, Terminal, Sparkles, Code2 } from 'lucide-react';
import { resumeData } from '../../data/resume';
import HeroBackground from '../3d/HeroBackground';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = resumeData.personalInfo.roles;

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, roles]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 overflow-hidden bg-[#050505]">
      <HeroBackground />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#101010] border border-white/10 text-xs font-mono text-slate-300 mb-8 shadow-md"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>L&T Intern Alumni • IIIT Bhubaneswar CSE (8.96 CGPA)</span>
          <span className="text-slate-600">|</span>
          <span className="text-blue-400 font-semibold flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            LeetCode Knight
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <h2 className="text-base md:text-lg font-medium text-slate-400 mb-2 tracking-wide font-heading uppercase">
            Software Developer & AI Engineer
          </h2>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-4 font-heading">
            Amit Prasad <span className="text-gradient-accent">Lal</span>
          </h1>
        </motion.div>

        {/* Role Cycling Typing Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-12 flex items-center justify-center text-xl sm:text-2xl md:text-3xl font-mono text-slate-200 mb-8"
        >
          <Terminal className="w-6 h-6 mr-3 text-blue-400 inline-block" />
          <span className="font-semibold">{displayText}</span>
          <span className="w-0.5 h-7 bg-blue-400 ml-1 animate-pulse" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-2xl text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed mb-10 text-center"
        >
          Architecting high-throughput <strong className="text-slate-200">Microservices</strong>, production <strong className="text-blue-400">RAG AI search engines</strong>, and robust systems. Driven by algorithms and engineering precision.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="group px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/20 transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Explore Featured Projects</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href="/ResumeUpdated (2).pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Amit_Prasad_Lal_Resume.pdf"
            className="group px-6 py-3 rounded-xl glass-card text-slate-200 font-semibold text-sm hover:text-white border border-white/10 hover:border-white/25 transition-all flex items-center gap-2 cursor-pointer"
          >
            <Download className="w-4 h-4 text-blue-400 group-hover:translate-y-0.5 transition-transform" />
            <span>Download Resume</span>
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 font-semibold text-sm transition-all cursor-pointer"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex items-center gap-5 text-slate-400"
        >
          <a
            href={resumeData.personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl glass-card hover:text-white border border-white/10 hover:border-white/25 transition-all"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={resumeData.personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl glass-card hover:text-white border border-white/10 hover:border-white/25 transition-all"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={resumeData.personalInfo.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl glass-card hover:text-amber-400 border border-white/10 hover:border-white/25 transition-all"
            aria-label="LeetCode Profile"
          >
            <Code2 className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${resumeData.personalInfo.email}`}
            className="p-3 rounded-xl glass-card hover:text-blue-400 border border-white/10 hover:border-white/25 transition-all"
            aria-label="Email Me"
          >
            <FileCode className="w-5 h-5" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
