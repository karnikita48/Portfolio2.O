import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const EXPERIENCE_LINES = [
  {
    role: 'Frontend Engineering Intern — Acowale Technologies',
    meta: 'Bangalore, India · Final-Year Internship (Acodash Creator Team)',
    highlight:
      'Contributed to the frontend of a No-Code Block Builder for Acodash, an AI-powered business operating system.',
  },
  {
    role: 'No-Code Block Builder & UI Architecture',
    meta: 'Acowale Technologies · Component-Based Development',
    highlight:
      'Built UI features for adding and managing form elements, content blocks, block library, editable preview interface, and property configuration panel.',
  },
  {
    role: 'Web Development Intern — TechnoHacks EduTech',
    meta: 'Kolkata, India · Second-Year Internship',
    highlight:
      'Designed and developed responsive, user-friendly landing pages using semantic HTML5 and modern CSS3 styling.',
  },
  {
    role: 'Event Management Team Member — Enactus India',
    meta: 'Sikkim Manipal Institute of Technology · Leadership',
    highlight:
      'Planned, coordinated, and executed college events in collaboration with cross-functional student teams.',
  },
];

export default function Experience({ theme = 'dark' }) {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isDark = theme === 'dark';

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;
    const containerCenter = container.scrollTop + container.clientHeight / 2;

    let closestIdx = 0;
    let closestDist = Infinity;

    Array.from(container.children).forEach((child, idx) => {
      const childCenter = child.offsetTop + child.clientHeight / 2;
      const dist = Math.abs(containerCenter - childCenter);
      if (dist < closestDist) {
        closestDist = dist;
        closestIdx = idx;
      }
    });

    setActiveIndex(closestIdx);
  };

  return (
    <section className={`relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden pt-20 sm:pt-24 pb-8 sm:pb-10 px-3 sm:px-4 transition-colors duration-500 ${isDark ? 'bg-[#09090b] text-white' : 'bg-[#e4e4e7] text-zinc-900'}`}>
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[radial-gradient(#888_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className={`pointer-events-none absolute h-[400px] sm:h-[520px] w-[500px] sm:w-[720px] rounded-full blur-[140px] ${isDark ? 'bg-white/[0.04]' : 'bg-black/[0.04]'}`} />
      <div className={`pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full blur-[130px] ${isDark ? 'bg-zinc-800/20' : 'bg-zinc-300/40'}`} />

      {/* 3D Tilted Laptop Frame */}
      <div className="relative z-10 w-full max-w-4xl">
        <div className={`relative mx-auto w-full rounded-t-2xl sm:rounded-t-3xl border-[6px] sm:border-[10px] shadow-[0_30px_90px_rgba(0,0,0,0.95)] transition-colors ${isDark ? 'border-[#202024] bg-[#0d0d10]' : 'border-zinc-300 bg-white'}`}>
          {/* Laptop Webcam Notch */}
          <div className={`mx-auto h-2.5 sm:h-3 w-20 sm:w-24 rounded-b-lg flex items-center justify-center ${isDark ? 'bg-[#202024]' : 'bg-zinc-300'}`}>
            <div className={`h-1 w-1 rounded-full ${isDark ? 'bg-zinc-700' : 'bg-zinc-500'}`} />
          </div>

          {/* Top Status Header */}
          <div className={`flex flex-col sm:flex-row items-center justify-between border-b px-4 sm:px-6 py-2.5 sm:py-3 text-[10px] sm:text-[11px] font-mono gap-1 text-center sm:text-left ${isDark ? 'border-zinc-800/80 text-zinc-400' : 'border-zinc-200 text-zinc-600'}`}>
            <div className="flex items-center gap-2">
              <span className={`h-1.5 w-1.5 rounded-full animate-pulse ${isDark ? 'bg-white/70' : 'bg-zinc-900'}`} />
              <span>NIKITA_KAR // WORK_HISTORY_LOG</span>
            </div>
            <span className={isDark ? 'text-zinc-500' : 'text-zinc-500'}>SCROLL UP OR DOWN INSIDE SCREEN ↑↓</span>
          </div>

          {/* Scrollable Screen Content */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="no-scrollbar relative h-[300px] sm:h-[390px] overflow-y-auto px-4 sm:px-14 py-16 sm:py-28 space-y-8 sm:space-y-12"
          >
            {EXPERIENCE_LINES.map((item, idx) => {
              const isFocused = idx === activeIndex;
              return (
                <motion.div
                  key={item.role}
                  onClick={() => {
                    setActiveIndex(idx);
                    scrollRef.current?.children[idx]?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'center',
                    });
                  }}
                  data-hover="true"
                  animate={{
                    scale: isFocused ? 1.05 : 0.92,
                    opacity: isFocused ? 1 : 0.3,
                  }}
                  transition={{ duration: 0.25 }}
                  className={`rounded-2xl border p-4 sm:p-5 transition-all cursor-pointer ${
                    isFocused
                      ? isDark
                        ? 'border-white/30 bg-white/[0.05] shadow-[0_0_35px_rgba(255,255,255,0.08)]'
                        : 'border-zinc-900/30 bg-zinc-900/[0.05] shadow-md'
                      : 'border-transparent bg-transparent'
                  }`}
                >
                  <p className={`text-[10px] sm:text-xs font-mono uppercase tracking-wider ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                    {item.meta}
                  </p>
                  <h2
                    className={`mt-1 font-bold transition-all ${
                      isFocused
                        ? isDark
                          ? 'text-lg sm:text-2xl md:text-3xl text-white'
                          : 'text-lg sm:text-2xl md:text-3xl text-zinc-900'
                        : isDark
                        ? 'text-sm sm:text-lg text-zinc-500'
                        : 'text-sm sm:text-lg text-zinc-400'
                    }`}
                  >
                    {item.role}
                  </h2>
                  <p
                    className={`mt-1.5 sm:mt-2 leading-relaxed ${
                      isFocused
                        ? isDark
                          ? 'text-xs sm:text-base text-zinc-300'
                          : 'text-xs sm:text-base text-zinc-700'
                        : isDark
                        ? 'text-[11px] sm:text-xs text-zinc-600'
                        : 'text-[11px] sm:text-xs text-zinc-400'
                    }`}
                  >
                    {item.highlight}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Laptop Base in Brushed Aluminum */}
        <div className={`mx-auto h-4 sm:h-5 w-full sm:w-[104%] sm:-ml-[2%] rounded-b-xl sm:rounded-b-2xl border-t shadow-2xl ${isDark ? 'bg-gradient-to-r from-[#18181b] via-[#27272a] to-[#18181b] border-zinc-700/40' : 'bg-gradient-to-r from-zinc-200 via-zinc-300 to-zinc-200 border-zinc-400'}`}>
          <div className={`mx-auto h-1.5 sm:h-2 w-20 sm:w-28 rounded-b-md ${isDark ? 'bg-[#121215]' : 'bg-zinc-400'}`} />
        </div>
      </div>
    </section>
  );
}
