import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, Tv, Radio } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import vintageTvBg from '../assets/vintage_tv.jpg';

const PROJECTS = [
  {
    id: 'calorie',
    channel: 'CH 01',
    model: 'RETRO-CRT // MODEL A-10',
    title: 'Calorie Deficit Calculator',
    subtitle: 'Health & Fitness Metric Platform',
    tech: 'HTML5 · CSS3 · JavaScript',
    description:
      'Calculates user daily calorie and fitness goals through structured input forms. Features client-side JavaScript algorithms that dynamically evaluate Basal Metabolic Rate (BMR), calculate targeted caloric deficit zones, and recommend personalized nutritional intake ratios.',
    image:
      'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80',
    github: 'https://github.com/karnikita48',
    live: 'https://github.com/karnikita48',
  },
  {
    id: 'student-portal',
    channel: 'CH 02',
    model: 'ACADEMIC-OS // CRT ED-20',
    title: 'Student Marks & Calculation Portal',
    subtitle: 'Grade Engine, Analytics & Attendance Portal',
    tech: 'HTML5 · CSS3 · Modern JavaScript · Canvas API',
    description:
      'Comprehensive student management and evaluation portal. Features real-time quiz and sessional marks normalization (scaled to 100), automated letter grading (A+ to F), embedded arithmetic calculator with history stack, semester attendance tracking with dual dynamic HTML5 Canvas charts (pie & bar charts), backlog tracking, faculty directory, and theme personalization.',
    image:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    github: 'https://github.com/karnikita48',
    live: 'https://github.com/karnikita48',
  },
  {
    id: 'task',
    channel: 'CH 03',
    model: 'MONOCHROME // TUBE B-24',
    title: 'Smart Task Manager',
    subtitle: 'Productivity & Lifecycle Organizer',
    tech: 'HTML5 · CSS3 · JavaScript',
    description:
      'Interactive task management web application designed for creating, prioritizing, editing, and tracking daily workflows. Built with clean semantic DOM manipulation, task completion toggles, status sorting, and local data persistence.',
    image:
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80',
    github: 'https://github.com/karnikita48',
    live: 'https://github.com/karnikita48',
  },
  {
    id: 'timezone',
    channel: 'CH 04',
    model: 'TELE-SALON // BROADCAST C-08',
    title: 'Global Time Zone Clock',
    subtitle: 'Multi-Region World Time Monitor',
    tech: 'HTML5 · CSS3 · JavaScript',
    description:
      'Responsive international world clock application tracking and rendering real-time hours, minutes, and seconds across multiple countries and standard GMT/UTC offsets with dynamic clock faces and day/night period indicators.',
    image:
      'https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&w=800&q=80',
    github: 'https://github.com/karnikita48',
    live: 'https://github.com/karnikita48',
  },
  {
    id: 'powerbi',
    channel: 'CH 05',
    model: 'ANALOG MONITOR // CONSOLE D-44',
    title: 'Power BI & Excel Dashboard',
    subtitle: 'Business Intelligence & KPI Visuals',
    tech: 'Power BI · Microsoft Excel · DAX',
    description:
      'Interactive executive analytics dashboard converting raw multi-sheet datasets into structured KPI trend cards, breakdown charts, interactive slicers, and actionable business insights with complex DAX formulas and PivotTable modeling.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    github: 'https://github.com/karnikita48',
    live: 'https://github.com/karnikita48',
  },
];

export default function Projects({ theme = 'dark' }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const isDark = theme === 'dark';

  return (
    <section className={`relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden pt-20 sm:pt-24 pb-16 px-3 sm:px-6 md:px-8 transition-colors duration-500 ${isDark ? 'bg-[#09090b] text-white' : 'bg-[#e4e4e7] text-zinc-900'}`}>
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[radial-gradient(#888_1px,transparent_1px)] [background-size:20px_20px]" />
      <div className="pointer-events-none absolute inset-0 opacity-10 mix-blend-overlay">
        <img
          src={vintageTvBg}
          alt="Vintage TV Display Backdrop"
          className="h-full w-full object-cover filter grayscale contrast-150 brightness-50"
        />
      </div>
      <div className={`pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full blur-[140px] ${isDark ? 'bg-white/5' : 'bg-black/5'}`} />
      <div className={`pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full blur-[140px] ${isDark ? 'bg-white/5' : 'bg-black/5'}`} />

      {/* Main Vintage TV Showcase Grid */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center my-auto">
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 items-center justify-center">
          {PROJECTS.map((proj) => {
            const isSelected = selectedProject?.id === proj.id;

            return (
              <motion.div
                key={proj.id}
                whileHover={{ scale: 1.03, y: -4 }}
                whileTap={{ scale: 0.97 }}
                animate={{
                  scale: isSelected ? 1.05 : 1,
                }}
                transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                onClick={() => setSelectedProject(isSelected ? null : proj)}
                data-hover="true"
                className="group relative flex flex-col cursor-pointer"
              >
                {/* Vintage Antenna */}
                <div className="relative h-4 w-full flex items-end justify-center pointer-events-none">
                  <div className={`h-4 w-[2px] -rotate-12 origin-bottom transition-transform group-hover:-rotate-16 ${isDark ? 'bg-zinc-600' : 'bg-zinc-700'}`} />
                  <div className={`h-5 w-[2px] rotate-12 origin-bottom ml-1 transition-transform group-hover:rotate-16 ${isDark ? 'bg-zinc-500' : 'bg-zinc-600'}`} />
                </div>

                {/* Vintage CRT TV Chassis */}
                <div
                  className={`relative flex flex-col rounded-2xl border-2 sm:border-[3px] p-3 sm:p-4 transition-all duration-300 shadow-2xl overflow-hidden ${
                    isSelected
                      ? isDark
                        ? 'border-white bg-[#141418] shadow-[0_20px_50px_rgba(255,255,255,0.25)] ring-2 ring-white/60'
                        : 'border-zinc-950 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.3)] ring-2 ring-zinc-950'
                      : isDark
                      ? 'border-zinc-800 bg-[#111115] hover:border-zinc-500 hover:bg-[#15151a]'
                      : 'border-zinc-300 bg-white/95 hover:border-zinc-600 hover:bg-zinc-50'
                  }`}
                >
                  {/* Top Branding Plate */}
                  <div className={`flex items-center justify-between pb-2.5 px-1 border-b ${isDark ? 'border-zinc-800/80' : 'border-zinc-200'}`}>
                    <div className="flex items-center gap-1.5">
                      <Tv size={13} className={isDark ? 'text-zinc-400 group-hover:text-white' : 'text-zinc-600 group-hover:text-zinc-950'} />
                      <span className={`font-mono text-[10px] sm:text-[11px] font-bold tracking-wider ${isDark ? 'text-zinc-400 group-hover:text-white' : 'text-zinc-600 group-hover:text-zinc-950'}`}>
                        {proj.channel} · {proj.model}
                      </span>
                    </div>

                    <div className="flex items-center gap-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-red-600 animate-pulse" />
                      <span className={`text-[9px] font-mono ${isDark ? 'text-zinc-500' : 'text-zinc-600'}`}>LIVE</span>
                    </div>
                  </div>

                  {/* Main TV Frame */}
                  <div className="mt-3 flex flex-col sm:flex-row gap-3 items-stretch">
                    {/* Convex CRT Tube Screen */}
                    <div className="relative flex-1 aspect-[4/3] rounded-2xl border-2 border-zinc-700/80 bg-zinc-950 overflow-hidden shadow-[inset_0_0_20px_rgba(0,0,0,0.9)]">
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/[0.03] via-transparent to-white/[0.08] z-20 rounded-2xl" />
                      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.25)_0px,rgba(0,0,0,0.25)_1px,transparent_1px,transparent_3px)] z-20 opacity-70" />

                      <img
                        src={proj.image}
                        alt={proj.title}
                        className="h-full w-full object-cover filter grayscale contrast-125 group-hover:contrast-110 transition duration-500"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40 p-3 sm:p-4 flex flex-col justify-between z-10">
                        <span className="self-start rounded-full border border-white/20 bg-black/75 px-2 py-0.5 text-[9px] font-mono font-semibold text-zinc-300">
                          {proj.channel}
                        </span>

                        <div>
                          <h3 className="text-sm sm:text-base font-bold text-white tracking-tight leading-snug drop-shadow-md">
                            {proj.title}
                          </h3>
                          <p className="mt-1 text-[10px] sm:text-[11px] font-mono text-zinc-300 line-clamp-1">
                            {proj.tech}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Analog Controls Panel */}
                    <div className={`flex sm:flex-col items-center justify-between sm:justify-start gap-2.5 sm:w-20 rounded-xl border p-2.5 sm:py-3 ${isDark ? 'border-zinc-800/80 bg-[#16161c]' : 'border-zinc-300 bg-zinc-100'}`}>
                      <div className="flex flex-col items-center">
                        <div className="relative h-7 w-7 sm:h-8 sm:w-8 rounded-full border-2 border-zinc-600 bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-950 flex items-center justify-center shadow-inner transition-transform group-hover:rotate-45">
                          <div className="h-3 w-[2px] bg-white/80 rounded-full" />
                        </div>
                        <span className={`mt-1 text-[8px] font-mono font-bold uppercase ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                          TUNING
                        </span>
                      </div>

                      <div className="flex flex-col items-center">
                        <div className="relative h-6 w-6 sm:h-7 sm:w-7 rounded-full border-2 border-zinc-600 bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-950 flex items-center justify-center shadow-inner transition-transform group-hover:-rotate-30">
                          <div className="h-2.5 w-[2px] bg-white/80 rounded-full" />
                        </div>
                        <span className={`mt-1 text-[8px] font-mono font-bold uppercase ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                          VOL
                        </span>
                      </div>

                      <div className="hidden sm:flex flex-col gap-1 w-full pt-1">
                        <div className={`h-[2px] w-full ${isDark ? 'bg-zinc-800' : 'bg-zinc-300'}`} />
                        <div className={`h-[2px] w-full ${isDark ? 'bg-zinc-800' : 'bg-zinc-300'}`} />
                        <div className={`h-[2px] w-full ${isDark ? 'bg-zinc-800' : 'bg-zinc-300'}`} />
                        <div className={`h-[2px] w-full ${isDark ? 'bg-zinc-800' : 'bg-zinc-300'}`} />
                      </div>

                      <div className={`mt-auto hidden sm:flex items-center gap-1 text-[8px] font-mono ${isDark ? 'text-zinc-400 group-hover:text-white' : 'text-zinc-600 group-hover:text-zinc-950'}`}>
                        <Radio size={10} />
                        <span>SELECT</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Modal Popup */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 15 }}
                transition={{ type: 'spring', stiffness: 280, damping: 24 }}
                onClick={(e) => e.stopPropagation()}
                className={`relative w-full max-w-lg rounded-2xl border p-5 sm:p-7 shadow-[0_25px_60px_rgba(0,0,0,0.95)] overflow-hidden max-h-[90vh] overflow-y-auto no-scrollbar ${isDark ? 'border-zinc-700/80 bg-[#121216] text-white' : 'border-zinc-300 bg-white text-zinc-900 shadow-2xl'}`}
              >
                <div className={`flex items-center justify-between border-b pb-3.5 ${isDark ? 'border-zinc-800' : 'border-zinc-200'}`}>
                  <div className="flex items-center gap-2">
                    <span className={`h-2 w-2 rounded-full ${isDark ? 'bg-white' : 'bg-zinc-900'}`} />
                    <span className={`text-xs font-mono uppercase tracking-wider ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
                      BROADCASTING // {selectedProject.channel}
                    </span>
                  </div>

                  <button
                    onClick={() => setSelectedProject(null)}
                    data-hover="true"
                    className={`rounded-full border p-1.5 transition ${isDark ? 'border-zinc-700 bg-zinc-900 text-zinc-400 hover:border-white hover:bg-zinc-800 hover:text-white' : 'border-zinc-300 bg-zinc-100 text-zinc-600 hover:border-zinc-900 hover:bg-zinc-200 hover:text-zinc-900'}`}
                    aria-label="Close Project Modal"
                  >
                    <X size={16} />
                  </button>
                </div>

                <div className="relative mt-4 h-44 sm:h-52 w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
                  <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.3)_0px,rgba(0,0,0,0.3)_1px,transparent_1px,transparent_3px)] z-20 opacity-60" />
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="h-full w-full object-cover filter grayscale contrast-125 hover:grayscale-0 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-3 rounded-full border border-white/20 bg-black/70 px-2.5 py-0.5 text-[10px] font-mono text-zinc-300">
                    {selectedProject.tech}
                  </span>
                </div>

                <div className="mt-4 space-y-2.5">
                  <h2 className={`text-xl sm:text-2xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                    {selectedProject.title}
                  </h2>
                  <p className={`text-xs sm:text-sm font-mono ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    {selectedProject.subtitle}
                  </p>
                  <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                    {selectedProject.description}
                  </p>
                </div>

                <div className={`mt-6 flex items-center gap-3 pt-3 border-t ${isDark ? 'border-zinc-800' : 'border-zinc-200'}`}>
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noreferrer"
                    data-hover="true"
                    className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs sm:text-sm font-bold transition ${isDark ? 'bg-white text-zinc-950 hover:bg-zinc-200' : 'bg-zinc-900 text-white hover:bg-zinc-800'}`}
                  >
                    <span>Open Project</span>
                    <ExternalLink size={14} />
                  </a>

                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    data-hover="true"
                    className={`inline-flex items-center gap-2 rounded-full border px-5 py-2 text-xs sm:text-sm font-medium transition ${isDark ? 'border-zinc-700 bg-zinc-900 text-zinc-200 hover:border-white hover:text-white' : 'border-zinc-300 bg-zinc-100 text-zinc-800 hover:border-zinc-900 hover:text-zinc-950'}`}
                  >
                    <FaGithub size={15} />
                    <span>Source Code</span>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
