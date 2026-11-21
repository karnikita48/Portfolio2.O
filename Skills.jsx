import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import brainImg from '../assets/brain.jpg';
import {
  FaReact,
  FaHtml5,
  FaJs,
  FaJava,
  FaGitAlt,
  FaDatabase,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiTypescript,
  SiRedux,
  SiVite,
} from 'react-icons/si';
import {
  BarChart3,
  FileSpreadsheet,
  Cpu,
} from 'lucide-react';

const SKILLS = [
  {
    id: 'react',
    name: 'React.js',
    icon: FaReact,
    category: 'Frontend',
    desc: 'Functional components, custom Hooks, Virtual DOM reconciliation, and modular component architectures.',
    x: 500,
    y: 75,
    brainX: 500,
    brainY: 310,
  },
  {
    id: 'ts',
    name: 'TypeScript',
    icon: SiTypescript,
    category: 'Frontend',
    desc: 'Static typing, custom generics, strict interfaces, and scalable enterprise frontend systems.',
    x: 710,
    y: 115,
    brainX: 575,
    brainY: 335,
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    category: 'Frontend',
    desc: 'Utility-first CSS styling, responsive flexbox/grid layouts, animations, and dark mode theming.',
    x: 870,
    y: 220,
    brainX: 635,
    brainY: 385,
  },
  {
    id: 'js',
    name: 'JavaScript (ES6+)',
    icon: FaJs,
    category: 'Frontend',
    desc: 'Asynchronous event loops, Promises/async-await, ES6+ array methods, and dynamic DOM interaction.',
    x: 930,
    y: 390,
    brainX: 665,
    brainY: 460,
  },
  {
    id: 'redux',
    name: 'Redux Toolkit',
    icon: SiRedux,
    category: 'Frontend',
    desc: 'Predictable global state management, Redux slices, dispatch workflows, and immutable updates.',
    x: 890,
    y: 580,
    brainX: 650,
    brainY: 540,
  },
  {
    id: 'htmlcss',
    name: 'HTML5 & CSS3',
    icon: FaHtml5,
    category: 'Frontend',
    desc: 'Semantic HTML markup, web accessibility (a11y), CSS variables, flexbox, grid, and smooth transitions.',
    x: 780,
    y: 765,
    brainX: 605,
    brainY: 615,
  },
  {
    id: 'vite',
    name: 'Vite',
    icon: SiVite,
    category: 'Tools & Backend',
    desc: 'Blazing fast ESM dev server, Hot Module Replacement (HMR), and Rollup-powered production builds.',
    x: 600,
    y: 910,
    brainX: 545,
    brainY: 670,
  },
  {
    id: 'apis',
    name: 'DOM & REST APIs',
    icon: Cpu,
    category: 'Tools & Backend',
    desc: 'RESTful API integration, JSON processing, asynchronous fetch handlers, and real-time state sync.',
    x: 400,
    y: 910,
    brainX: 455,
    brainY: 670,
  },
  {
    id: 'java',
    name: 'Java',
    icon: FaJava,
    category: 'Tools & Backend',
    desc: 'Core OOP concepts, data structures, algorithms, memory management, and backend fundamentals.',
    x: 220,
    y: 765,
    brainX: 395,
    brainY: 615,
  },
  {
    id: 'sql',
    name: 'SQL & Database',
    icon: FaDatabase,
    category: 'Analytics',
    desc: 'Relational database schema modeling, queries, joins, indexing, and structured data handling.',
    x: 110,
    y: 580,
    brainX: 350,
    brainY: 540,
  },
  {
    id: 'powerbi',
    name: 'Power BI',
    icon: BarChart3,
    category: 'Analytics',
    desc: 'Interactive business intelligence reports, KPI executive dashboards, DAX queries, and visual analytics.',
    x: 70,
    y: 390,
    brainX: 335,
    brainY: 460,
  },
  {
    id: 'excel',
    name: 'Microsoft Excel',
    icon: FileSpreadsheet,
    category: 'Analytics',
    desc: 'Advanced formulas, PivotTables, VLOOKUP/XLOOKUP, data wrangling, and statistical chart models.',
    x: 130,
    y: 220,
    brainX: 365,
    brainY: 385,
  },
  {
    id: 'git',
    name: 'Git & GitHub',
    icon: FaGitAlt,
    category: 'Tools & Backend',
    desc: 'Branch workflows, pull requests, version control, conflict resolution, and team collaboration.',
    x: 290,
    y: 115,
    brainX: 425,
    brainY: 335,
  },
];

const CATEGORIES = ['All', 'Frontend', 'Analytics', 'Tools & Backend'];

export default function Skills({ theme = 'dark' }) {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const isDark = theme === 'dark';

  const activeSkill = hoveredSkill || selectedSkill;

  const isSkillVisible = (skill) => {
    if (activeCategory === 'All') return true;
    return skill.category === activeCategory;
  };

  const filteredSkills = SKILLS.filter(isSkillVisible);

  return (
    <section className={`relative flex min-h-screen w-full flex-col items-center justify-start overflow-hidden pt-20 sm:pt-24 pb-16 px-3 sm:px-8 transition-colors duration-500 ${isDark ? 'bg-[#000000] text-white' : 'bg-[#f4f4f5] text-zinc-900'}`}>
      {/* Circuit Background Grid Texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[radial-gradient(#888_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className={`pointer-events-none absolute inset-0 ${isDark ? 'bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_0%,transparent_65%)]' : 'bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04)_0%,transparent_65%)]'}`} />

      {/* Header Section (Title & Filter Pills Only) */}
      <div className="relative z-20 mx-auto max-w-3xl text-center mb-4 sm:mb-6">
        <h1 className={`text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-zinc-900'}`}>
          Skills & Knowledge
        </h1>

        {/* Category Filter Pills */}
        <div className="mt-4 sm:mt-5 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              data-hover="true"
              className={`rounded-full border px-3 sm:px-4 py-1 sm:py-1.5 text-xs font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? isDark
                    ? 'border-white bg-white text-black shadow-lg scale-105'
                    : 'border-zinc-900 bg-zinc-900 text-white shadow-lg scale-105'
                  : isDark
                  ? 'border-zinc-800 bg-zinc-950/60 text-zinc-400 hover:border-zinc-500 hover:text-white'
                  : 'border-zinc-300 bg-white/80 text-zinc-600 hover:border-zinc-800 hover:text-zinc-950'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* DESKTOP / TABLET VIEW: Radial PCB Circuit radiating from Central Brain */}
      <div className="relative z-10 mx-auto hidden md:flex w-full max-w-[940px] items-center justify-center aspect-[1000/1000] my-auto">
        <svg
          viewBox="0 0 1000 1000"
          className="absolute inset-0 h-full w-full pointer-events-none select-none"
        >
          {SKILLS.map((skill) => {
            const isTarget = activeSkill?.id === skill.id;
            const isDimmed = !isSkillVisible(skill);

            const midX = (skill.brainX + skill.x) / 2;
            const midY = (skill.brainY + skill.y) / 2;

            return (
              <g
                key={`circuit-${skill.id}`}
                opacity={isDimmed ? 0.12 : 1}
                style={{ transition: 'opacity 0.3s ease' }}
              >
                <path
                  d={`M ${skill.brainX} ${skill.brainY} Q ${midX} ${midY} ${skill.x} ${skill.y}`}
                  fill="none"
                  stroke={isTarget ? (isDark ? '#ffffff' : '#000000') : (isDark ? '#3f3f46' : '#cbd5e1')}
                  strokeWidth={isTarget ? 2.5 : 1.3}
                  strokeDasharray={isTarget ? 'none' : '4 3'}
                  style={{ transition: 'all 0.3s ease' }}
                />

                <circle
                  cx={skill.brainX}
                  cy={skill.brainY}
                  r={isTarget ? 4.5 : 2.5}
                  fill={isTarget ? (isDark ? '#ffffff' : '#000000') : '#71717a'}
                />

                <circle
                  cx={skill.x}
                  cy={skill.y}
                  r={isTarget ? 7 : 4}
                  fill={isTarget ? (isDark ? '#ffffff' : '#000000') : '#52525b'}
                />
              </g>
            );
          })}
        </svg>

        {/* Central Circuit Brain */}
        <div className="relative flex items-center justify-center w-[36%] aspect-square rounded-full">
          <div className={`pointer-events-none absolute inset-0 rounded-full blur-2xl animate-pulse ${isDark ? 'bg-white/5' : 'bg-black/5'}`} />
          <div className={`pointer-events-none absolute -inset-6 rounded-full border border-dashed ${isDark ? 'border-zinc-800/80' : 'border-zinc-300'}`} />

          <img
            src={brainImg}
            alt="Circuit Brain"
            className={`relative z-10 h-full w-full object-contain filter contrast-125 brightness-110 select-none ${isDark ? 'mix-blend-screen' : 'mix-blend-multiply'}`}
            draggable={false}
          />
        </div>

        {/* Radiating Skill Nodes with Large Gray Icons */}
        {SKILLS.map((skill) => {
          const Icon = skill.icon;
          const isTarget = activeSkill?.id === skill.id;
          const isDimmed = !isSkillVisible(skill);

          return (
            <div
              key={skill.id}
              style={{
                left: `${(skill.x / 1000) * 100}%`,
                top: `${(skill.y / 1000) * 100}%`,
              }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 z-30 transition-opacity duration-300 ${
                isDimmed ? 'opacity-20 pointer-events-none' : 'opacity-100 pointer-events-auto'
              }`}
            >
              {isTarget && (
                <span className={`pointer-events-none absolute -inset-2.5 rounded-full border animate-ping opacity-40 ${isDark ? 'border-white/40' : 'border-black/40'}`} />
              )}

              <motion.button
                onClick={() => setSelectedSkill(skill)}
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.94 }}
                data-hover="true"
                aria-label={skill.name}
                className={`group relative flex flex-col items-center justify-center rounded-2xl border transition-all duration-300 p-3.5 shadow-2xl ${
                  isTarget
                    ? isDark
                      ? 'border-white bg-zinc-950 text-white shadow-[0_0_25px_rgba(255,255,255,0.4)] scale-110'
                      : 'border-zinc-950 bg-white text-zinc-950 shadow-[0_0_25px_rgba(0,0,0,0.25)] scale-110'
                    : isDark
                    ? 'border-zinc-800 bg-[#0d0d10]/95 text-zinc-400 hover:border-zinc-500 hover:bg-zinc-900'
                    : 'border-zinc-300 bg-white/95 text-zinc-600 hover:border-zinc-800 hover:bg-zinc-50 shadow-sm'
                }`}
              >
                <Icon
                  size={40}
                  className={`transition-colors duration-200 ${
                    isTarget ? (isDark ? 'text-white' : 'text-zinc-950') : (isDark ? 'text-zinc-400 group-hover:text-zinc-200' : 'text-zinc-600 group-hover:text-zinc-900')
                  }`}
                />

                <span
                  className={`mt-1.5 text-xs font-semibold tracking-tight whitespace-nowrap transition-colors ${
                    isTarget ? 'font-bold' : isDark ? 'text-zinc-400 group-hover:text-zinc-200' : 'text-zinc-600 group-hover:text-zinc-900'
                  }`}
                >
                  {skill.name.split(' ')[0]}
                </span>
              </motion.button>
            </div>
          );
        })}
      </div>

      {/* MOBILE VIEW: Interactive Neural Grid */}
      <div className="relative z-10 flex md:hidden w-full max-w-lg flex-col items-center space-y-4 my-2">
        <div className={`relative flex items-center justify-center w-36 h-36 rounded-full border p-2 shadow-2xl ${isDark ? 'border-zinc-800/80 bg-zinc-950/70' : 'border-zinc-300 bg-white/80'}`}>
          <div className={`pointer-events-none absolute inset-0 rounded-full blur-xl animate-pulse ${isDark ? 'bg-white/5' : 'bg-black/5'}`} />
          <img
            src={brainImg}
            alt="Circuit Brain"
            className={`relative z-10 h-full w-full object-contain filter contrast-125 brightness-110 select-none ${isDark ? 'mix-blend-screen' : 'mix-blend-multiply'}`}
            draggable={false}
          />
        </div>

        <div className="grid w-full grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
          {filteredSkills.map((skill) => {
            const Icon = skill.icon;
            const isTarget = activeSkill?.id === skill.id;

            return (
              <motion.button
                key={skill.id}
                onClick={() => setSelectedSkill(skill)}
                whileTap={{ scale: 0.95 }}
                className={`relative flex flex-col items-center justify-center rounded-xl border p-3 transition-all duration-200 ${
                  isTarget
                    ? isDark
                      ? 'border-white bg-zinc-950 text-white shadow-[0_0_15px_rgba(255,255,255,0.3)]'
                      : 'border-zinc-950 bg-white text-zinc-950 shadow-[0_0_15px_rgba(0,0,0,0.2)]'
                    : isDark
                    ? 'border-zinc-800 bg-[#0e0e12] text-zinc-400 hover:border-zinc-600'
                    : 'border-zinc-300 bg-white text-zinc-600 hover:border-zinc-800 shadow-sm'
                }`}
              >
                <Icon
                  size={34}
                  className={isTarget ? (isDark ? 'text-white' : 'text-zinc-950') : (isDark ? 'text-zinc-400' : 'text-zinc-600')}
                />

                <span className={`mt-2 text-xs font-semibold text-center leading-tight ${isTarget ? (isDark ? 'text-white' : 'text-zinc-950') : (isDark ? 'text-zinc-300' : 'text-zinc-700')}`}>
                  {skill.name}
                </span>

                <span className="mt-0.5 text-[9px] font-mono text-zinc-500">
                  {skill.category}
                </span>

                <div
                  className={`mt-1.5 h-1.5 w-1.5 rounded-full ${
                    isTarget ? (isDark ? 'bg-white' : 'bg-zinc-900') : (isDark ? 'bg-zinc-700' : 'bg-zinc-300')
                  }`}
                />
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Floating HUD Inspector Card at Bottom */}
      <div className="relative z-20 mx-auto w-full max-w-xl mt-4 sm:mt-6">
        <AnimatePresence mode="wait">
          {activeSkill && (
            <motion.div
              key={activeSkill.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className={`rounded-2xl border p-4 sm:p-6 shadow-2xl backdrop-blur-md transition-colors ${isDark ? 'border-zinc-800 bg-[#101014]/95 text-white shadow-[0_15px_40px_rgba(0,0,0,0.85)]' : 'border-zinc-300 bg-white/95 text-zinc-900 shadow-xl'}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 sm:gap-3.5">
                  <div className={`flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl border ${isDark ? 'border-zinc-700 bg-zinc-900 text-zinc-300' : 'border-zinc-300 bg-zinc-100 text-zinc-800'}`}>
                    <activeSkill.icon size={30} className="sm:w-8 sm:h-8" />
                  </div>
                  <div>
                    <h3 className={`text-base sm:text-xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                      {activeSkill.name}
                    </h3>
                    <p className={`text-[11px] sm:text-xs font-mono ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                      {activeSkill.category}
                    </p>
                  </div>
                </div>

                <span className={`rounded-full border px-2.5 sm:px-3 py-1 text-[10px] sm:text-[11px] font-mono ${isDark ? 'border-zinc-800 bg-white/5 text-zinc-300' : 'border-zinc-300 bg-zinc-100 text-zinc-700'}`}>
                  Active Synapse
                </span>
              </div>

              <p className={`mt-3 text-xs sm:text-sm leading-relaxed ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                {activeSkill.desc}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
