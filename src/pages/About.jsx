import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import IndiaMap from '@svg-maps/india';
import {
  School,
  GraduationCap,
  Building2,
  Code2,
  MapPin,
  Compass,
  Calendar,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

const LOCATIONS = [
  {
    id: 'arunachal',
    stateId: 'ar',
    state: 'Arunachal Pradesh',
    tag: 'Schooling',
    category: 'Class 10 & Class 12',
    name: 'Kendriya Vidyalaya No. 1, Itanagar',
    subtitle: 'Arunachal Pradesh · School Education',
    address: 'Sector-E, Naharlagun / Itanagar, Arunachal Pradesh 791111',
    timeline: 'Class 10 & 12 Schooling',
    description:
      'Grew up in Naharlagun, Arunachal Pradesh. Completed both secondary (Class 10) and higher secondary (Class 12) education at Kendriya Vidyalaya No. 1, Itanagar, building strong academic foundations in science and mathematics.',
    highlights: [
      'Born in Naharlagun, Arunachal Pradesh',
      'Completed Class 10 & Class 12 CBSE curricula at KV No. 1, Itanagar',
      'Built early foundations in analytical thinking and problem solving',
    ],
    percent: { x: '86%', y: '35%' },
    colorHex: '#71717a',
    icon: School,
  },
  {
    id: 'sikkim',
    stateId: 'sk',
    state: 'Sikkim',
    tag: 'College',
    category: 'B.Tech in CSE (2022–2026)',
    name: 'Sikkim Manipal Institute of Technology (SMIT)',
    subtitle: 'Majitar, Rangpo, Sikkim · Engineering Degree',
    address: 'Majitar, Rangpo, East Sikkim, Sikkim 737136',
    timeline: '2022 – 2026',
    description:
      'Completed Bachelor of Technology (B.Tech) in Computer Science and Engineering at SMIT. Gained deep hands-on expertise in React.js, modern web architectures, data visualization, and led college events with Enactus India.',
    highlights: [
      'B.Tech in Computer Science & Engineering (2022–2026)',
      'Built responsive web apps, data dashboards, and modular React UIs',
      'Event Management Team Member at Enactus India (SMIT chapter)',
    ],
    percent: { x: '69.5%', y: '34%' },
    colorHex: '#9ca3af',
    icon: GraduationCap,
  },
  {
    id: 'kolkata',
    stateId: 'wb',
    state: 'West Bengal',
    tag: 'Internship',
    category: 'Web Development Intern',
    name: 'TechnoHacks EduTech',
    subtitle: 'Kolkata, West Bengal · Web Development',
    address: 'Kolkata, West Bengal, India',
    timeline: 'June 2024 – July 2024',
    description:
      'Worked as a Web Development Intern at TechnoHacks EduTech in Kolkata from June 2024 to July 2024. Designed and developed user-friendly, responsive landing pages and interfaces using semantic HTML5, modern CSS3 styling, and JavaScript.',
    highlights: [
      'Web Development Intern (June 2024 – July 2024)',
      'Built responsive and accessible landing pages with clean UI/UX standards',
      'Strengthened core frontend skills in modern CSS, layout design, and DOM manipulation',
    ],
    percent: { x: '68.5%', y: '49.5%' },
    colorHex: '#52525b',
    icon: Code2,
  },
  {
    id: 'bangalore',
    stateId: 'ka',
    state: 'Karnataka',
    tag: 'Current Work',
    category: 'Frontend Engineering Intern',
    name: 'Acowale Technologies',
    subtitle: 'BTM Layout 1st Stage, Bangalore · Currently Working',
    address: 'BTM Layout 1st Stage, Bengaluru, Karnataka 560076',
    timeline: 'Currently Working',
    description:
      'Currently working at Acowale Technologies located in BTM Layout 1st Stage, Bangalore. Contributing to the frontend of a No-Code Block Builder for Acodash, building reusable components, form builders, and responsive web interfaces.',
    highlights: [
      'Currently working as a Frontend Engineering Intern at Acowale Technologies',
      'Office located in BTM Layout 1st Stage, Bengaluru',
      'Building features for the No-Code Block Builder module in Acodash',
      'Designing component libraries, editable live preview interfaces, and property panels',
    ],
    percent: { x: '30.5%', y: '80%' },
    colorHex: '#d4d4d8',
    icon: Building2,
  },
];

export default function About({ theme = 'dark' }) {
  const [selected, setSelected] = useState(LOCATIONS[3]);
  const [hoveredId, setHoveredId] = useState(null);
  const isDark = theme === 'dark';

  const getLocationByStateId = (stateId) => {
    return LOCATIONS.find((loc) => loc.stateId === stateId);
  };

  return (
    <section className={`relative flex min-h-screen w-full flex-col items-center justify-start overflow-hidden pt-20 sm:pt-24 pb-16 px-3 sm:px-8 lg:px-12 transition-colors duration-500 ${isDark ? 'bg-[#0c0c0e] text-white' : 'bg-[#f4f4f5] text-zinc-900'}`}>
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[radial-gradient(#888_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className={`pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full blur-[120px] ${isDark ? 'bg-white/5' : 'bg-black/5'}`} />
      <div className={`pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full blur-[140px] ${isDark ? 'bg-white/5' : 'bg-black/5'}`} />

      {/* Header Title */}
      <div className="relative z-10 mx-auto max-w-3xl text-center mb-6 sm:mb-8">
        <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium backdrop-blur-md ${isDark ? 'border-white/10 bg-white/5 text-zinc-300' : 'border-black/10 bg-black/5 text-zinc-700'}`}>
          <Compass size={14} className={isDark ? 'text-zinc-200' : 'text-zinc-800'} />
          <span>Interactive Journey Map · India</span>
        </div>
        <h1 className={`mt-2.5 text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-zinc-900'}`}>
          Where I’ve Studied & Worked
        </h1>
        <p className={`mt-2 text-xs sm:text-sm md:text-base max-w-xl mx-auto ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
          Click any miniature building on the map or select a milestone below to explore my education and work journey across India.
        </p>

        {/* Quick Selection Buttons */}
        <div className="mt-4 sm:mt-5 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5">
          {LOCATIONS.map((loc) => {
            const isCurrent = selected.id === loc.id;
            const Icon = loc.icon;
            return (
              <button
                key={loc.id}
                onClick={() => setSelected(loc)}
                data-hover="true"
                className={`inline-flex items-center gap-1.5 sm:gap-2 rounded-full border px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-xs font-semibold transition-all duration-200 ${
                  isCurrent
                    ? isDark
                      ? 'border-white bg-white text-zinc-950 shadow-lg scale-105'
                      : 'border-zinc-900 bg-zinc-900 text-white shadow-lg scale-105'
                    : isDark
                    ? 'border-white/15 bg-white/5 text-zinc-300 hover:border-white/40 hover:bg-white/10'
                    : 'border-black/15 bg-black/5 text-zinc-700 hover:border-black/40 hover:bg-black/10'
                }`}
              >
                <Icon size={13} className={isCurrent ? (isDark ? 'text-zinc-950' : 'text-white') : (isDark ? 'text-zinc-400' : 'text-zinc-600')} />
                <span>{loc.tag} ({loc.name.split(' ')[0]})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col lg:flex-row items-center lg:items-start justify-center gap-6 sm:gap-8 lg:gap-12">
        {/* Left Side: India Map with Miniature Buildings */}
        <div className="relative flex w-full max-w-[540px] flex-col items-center">
          <div className={`relative w-full aspect-[612/696] rounded-2xl sm:rounded-3xl border p-2 sm:p-5 shadow-2xl backdrop-blur-md overflow-hidden ${isDark ? 'border-white/10 bg-[#141418]/90' : 'border-black/10 bg-white/95'}`}>
            <svg
              viewBox={IndiaMap.viewBox}
              className="h-full w-full select-none"
              style={{ filter: isDark ? 'drop-shadow(0 10px 20px rgba(0,0,0,0.4))' : 'drop-shadow(0 5px 15px rgba(0,0,0,0.1))' }}
            >
              {IndiaMap.locations.map((location) => {
                const landmark = getLocationByStateId(location.id);
                const isSelectedState = selected.stateId === location.id;
                const isHoveredState = hoveredId === landmark?.id;
                const isKeyLocation = Boolean(landmark);

                let fill = isDark ? '#ffffff' : '#e4e4e7';
                let stroke = isDark ? '#1c1c20' : '#71717a';
                let strokeWidth = '1.2';
                let cursorStyle = 'default';

                if (isKeyLocation) {
                  cursorStyle = 'pointer';
                  if (isSelectedState || isHoveredState) {
                    fill = isDark ? '#3f3f46' : '#52525b';
                    stroke = isDark ? '#ffffff' : '#000000';
                    strokeWidth = '2';
                  } else {
                    fill = isDark ? '#e2e8f0' : '#a1a1aa';
                  }
                }

                return (
                  <path
                    key={location.id}
                    id={location.id}
                    name={location.name}
                    d={location.path}
                    fill={fill}
                    stroke={stroke}
                    strokeWidth={strokeWidth}
                    strokeLinejoin="round"
                    style={{
                      transition: 'all 0.3s ease',
                      cursor: cursorStyle,
                    }}
                    onMouseEnter={() => {
                      if (landmark) setHoveredId(landmark.id);
                    }}
                    onMouseLeave={() => {
                      if (landmark) setHoveredId(null);
                    }}
                    onClick={() => {
                      if (landmark) setSelected(landmark);
                    }}
                  />
                );
              })}
            </svg>

            {/* Miniature 3D Building Pins Positioned on Key States */}
            {LOCATIONS.map((loc) => {
              const Icon = loc.icon;
              const isSelected = selected.id === loc.id;
              const isHovered = hoveredId === loc.id;
              const posX = parseFloat(loc.percent.x);
              const tooltipAlignClass =
                posX > 75
                  ? 'right-0 translate-x-0'
                  : posX < 25
                  ? 'left-0 translate-x-0'
                  : 'left-1/2 -translate-x-1/2';

              return (
                <div
                  key={loc.id}
                  style={{ left: loc.percent.x, top: loc.percent.y }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto"
                >
                  <span
                    className={`absolute -inset-2 sm:-inset-2.5 rounded-full animate-ping opacity-30 ${isDark ? 'bg-zinc-500' : 'bg-zinc-700'}`}
                  />

                  <AnimatePresence>
                    {(isHovered || isSelected) && (
                      <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 4, scale: 0.9 }}
                        transition={{ duration: 0.18 }}
                        className={`pointer-events-none absolute bottom-full mb-2 sm:mb-3 ${tooltipAlignClass} w-max max-w-[180px] sm:max-w-[210px] rounded-xl border px-2.5 sm:px-3 py-1 sm:py-1.5 text-center shadow-2xl backdrop-blur-md ${isDark ? 'border-white/20 bg-[#18181b]/95 text-white' : 'border-black/20 bg-white/95 text-zinc-900'}`}
                      >
                        <p className="text-[10px] sm:text-[11px] font-bold leading-tight">
                          {loc.name.split(',')[0]}
                        </p>
                        <p className={`text-[8px] sm:text-[9px] mt-0.5 ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
                          {loc.tag} · {loc.state}
                        </p>
                        <div className={`mx-auto mt-1 h-1.5 w-1.5 rotate-45 ${isDark ? 'bg-[#18181b]' : 'bg-white'}`} />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.button
                    onClick={() => setSelected(loc)}
                    onMouseEnter={() => setHoveredId(loc.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.94 }}
                    data-hover="true"
                    aria-label={`Select ${loc.name}`}
                    className={`relative flex flex-col items-center justify-center rounded-xl sm:rounded-2xl border-2 px-1.5 sm:px-2.5 py-1 sm:py-2 shadow-2xl transition-all duration-300 ${
                      isSelected
                        ? isDark
                          ? 'border-white bg-zinc-950 text-white shadow-[0_0_20px_rgba(255,255,255,0.4)] scale-110'
                          : 'border-zinc-950 bg-white text-zinc-950 shadow-[0_0_20px_rgba(0,0,0,0.3)] scale-110'
                        : isDark
                        ? 'border-zinc-800 bg-[#1e1e24] text-zinc-200 hover:border-white/60 hover:bg-zinc-900'
                        : 'border-zinc-300 bg-zinc-100 text-zinc-800 hover:border-zinc-800 hover:bg-white'
                    }`}
                  >
                    <div className="h-0.5 sm:h-1 w-4 sm:w-6 rounded-full mb-0.5 sm:mb-1 transition-transform group-hover:scale-110 bg-zinc-600" />
                    <Icon
                      size={15}
                      className={`sm:w-[18px] sm:h-[18px] ${isSelected ? (isDark ? 'text-white' : 'text-zinc-950') : (isDark ? 'text-zinc-400 group-hover:text-zinc-200' : 'text-zinc-600 group-hover:text-zinc-900')}`}
                      strokeWidth={2.4}
                    />
                    <span className={`mt-0.5 sm:mt-1 text-[7px] sm:text-[8px] font-extrabold uppercase tracking-tight ${isDark ? 'text-zinc-200' : 'text-zinc-700'}`}>
                      {loc.tag.split(' ')[0]}
                    </span>
                  </motion.button>
                </div>
              );
            })}
          </div>

          <div className={`mt-2.5 flex items-center justify-between w-full px-2 text-[10px] sm:text-[11px] font-mono ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
            <span>Map of India · State Boundaries</span>
            <span className="hidden sm:inline">Arunachal · Sikkim · Kolkata · Bengaluru</span>
          </div>
        </div>

        {/* Right Side: Structured Information Card */}
        <div className="relative flex w-full max-w-xl flex-col space-y-4">
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className={`overflow-hidden rounded-2xl sm:rounded-3xl border shadow-2xl transition-colors ${isDark ? 'border-white/15 bg-[#16161a]' : 'border-black/10 bg-white'}`}
          >
            {/* Top Bar */}
            <div className={`flex items-center justify-between border-b px-4 sm:px-6 py-3.5 sm:py-4 ${isDark ? 'border-white/10 bg-[#121215]' : 'border-zinc-200 bg-zinc-50'}`}>
              <div className="flex items-center gap-2 sm:gap-2.5">
                <span className={`h-2 w-2 rounded-full ${isDark ? 'bg-white/80' : 'bg-zinc-800'}`} />
                <span className={`text-[11px] sm:text-xs font-bold tracking-wider uppercase ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                  {selected.tag} — {selected.state}
                </span>
              </div>

              <div className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 sm:px-3 py-1 text-[10px] sm:text-[11px] font-medium ${isDark ? 'border-white/15 bg-white/5 text-zinc-200' : 'border-black/10 bg-black/5 text-zinc-800'}`}>
                <Calendar size={12} className={isDark ? 'text-zinc-400' : 'text-zinc-600'} />
                <span>{selected.timeline}</span>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-4 sm:p-7 md:p-8 space-y-4 sm:space-y-5">
              <div>
                <span className={`inline-flex items-center gap-1.5 sm:gap-2 rounded-full px-3 py-1 text-[10px] sm:text-[11px] font-semibold border ${isDark ? 'border-white/15 bg-white/5 text-white' : 'border-black/15 bg-zinc-100 text-zinc-900'}`}>
                  <span className={`h-1.5 w-1.5 rounded-full shrink-0 ${isDark ? 'bg-white/70' : 'bg-zinc-700'}`} />
                  <span>{selected.category}</span>
                </span>

                <h2 className={`mt-2.5 sm:mt-3 text-xl sm:text-2xl md:text-3xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                  {selected.name}
                </h2>
                <p className={`mt-1.5 flex items-start sm:items-center gap-1.5 text-xs font-mono ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  <MapPin size={13} className="shrink-0 mt-0.5 sm:mt-0 text-zinc-500" />
                  <span>{selected.address}</span>
                </p>
              </div>

              <p className={`text-xs sm:text-sm md:text-base leading-relaxed ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                {selected.description}
              </p>

              {/* Highlights Bullet List */}
              <div className={`rounded-xl sm:rounded-2xl border p-4 sm:p-5 space-y-2.5 sm:space-y-3 ${isDark ? 'border-white/10 bg-white/[0.02]' : 'border-black/10 bg-zinc-50'}`}>
                <p className={`text-[11px] sm:text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  <Sparkles size={13} className={isDark ? 'text-zinc-300' : 'text-zinc-700'} />
                  <span>Key Details & Highlights</span>
                </p>

                <div className="space-y-2 sm:space-y-2.5">
                  {selected.highlights.map((point, idx) => (
                    <div key={idx} className={`flex items-start gap-2.5 text-xs sm:text-sm leading-snug ${isDark ? 'text-zinc-200' : 'text-zinc-800'}`}>
                      <CheckCircle2 size={15} className={`shrink-0 mt-0.5 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`} />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
