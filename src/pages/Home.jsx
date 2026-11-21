import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profilePic from '../assets/nikita.jpg';

export default function Home({ theme, onNavigate }) {
  const [isNearCard, setIsNearCard] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const isDark = theme === 'dark';

  const handleClickAbout = () => {
    setIsClicked(true);
    setTimeout(() => {
      onNavigate('About');
    }, 220);
  };

  return (
    <section
      className={`relative flex min-h-screen w-full items-center justify-center overflow-hidden px-3 sm:px-6 pt-20 sm:pt-0 transition-colors duration-500 ${
        isDark ? 'bg-[#141414] text-white' : 'bg-[#e8e8e8] text-zinc-900'
      }`}
    >
      {/* Subtle Paper Grain Overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[radial-gradient(#888_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* Proximity Hover Zone around the Postcard */}
      <div
        onMouseEnter={() => setIsNearCard(true)}
        onMouseLeave={() => setIsNearCard(false)}
        className="relative flex items-center justify-center w-full max-w-[780px] p-2 sm:p-6 my-auto"
      >
        <motion.div
          animate={{
            scale: isNearCard ? 1.03 : 0.98,
            rotate: isNearCard ? 0 : -1,
          }}
          transition={{ type: 'spring', stiffness: 220, damping: 20 }}
          className={`relative flex w-full flex-col sm:flex-row items-center gap-6 sm:gap-8 rounded-2xl sm:rounded-3xl border p-4 sm:p-10 shadow-2xl transition-colors duration-500 ${
            isDark
              ? 'bg-[#1f1f1f] border-white/10 shadow-black/70'
              : 'bg-[#f7f7f5] border-black/10 shadow-zinc-400/50'
          }`}
        >
          {/* Decorative Metallic Paperclip (Hidden on small mobile to avoid clipping) */}
          <div
            className={`hidden sm:block absolute -top-5 left-12 h-10 w-6 rounded-t-full border-2 ${
              isDark ? 'border-zinc-500' : 'border-zinc-400'
            }`}
          />

          {/* Left: Front-Facing Photo inside Perforated Postage Stamp */}
          <div className="shrink-0">
            <div className="stamp-border w-36 sm:w-52 md:w-56">
              <div className="aspect-[4/5] w-full overflow-hidden bg-zinc-200">
                <img
                  src={profilePic}
                  alt="Nikita Kar"
                  className="h-full w-full object-cover object-top grayscale contrast-110 transition duration-500 hover:grayscale-0"
                />
              </div>
              <div className="mt-2 flex items-center justify-between px-1 text-[9px] sm:text-[10px] font-bold tracking-widest text-zinc-800 uppercase">
                <span>NIKITA KAR</span>
                <span>INDIA</span>
              </div>
            </div>
          </div>

          {/* Right: Postcard Details & CTA */}
          <div className="flex flex-1 flex-col justify-between space-y-4 text-center sm:text-left w-full">
            {/* Postmark Stamp Accent */}
            <div className="hidden sm:flex items-center justify-end gap-3 opacity-35">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border border-dashed border-current flex items-center justify-center text-[9px] font-mono">
                BLR · 26
              </div>
              <div className="space-y-1">
                <div className="h-[1px] w-12 sm:w-14 bg-current" />
                <div className="h-[1px] w-12 sm:w-14 bg-current" />
                <div className="h-[1px] w-12 sm:w-14 bg-current" />
              </div>
            </div>

            <div>
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                Nikita Kar
              </h1>
              <p
                className={`mt-1 sm:mt-2 text-xs sm:text-base font-mono ${
                  isDark ? 'text-zinc-300' : 'text-zinc-700'
                }`}
              >
                B.Tech CSE (2022-2026)
              </p>
              <p
                className={`mt-1.5 inline-flex items-center justify-center sm:justify-start gap-1.5 text-xs sm:text-sm font-medium ${
                  isDark ? 'text-zinc-400' : 'text-zinc-600'
                }`}
              >
                <MapPin size={14} className="text-red-500" />
                <span>Current Location: Bangalore</span>
              </p>
            </div>

            {/* Social Shortcuts */}
            <div className="flex items-center justify-center sm:justify-start gap-4 pt-1">
              <a
                href="https://github.com/karnikita48"
                target="_blank"
                rel="noreferrer"
                data-hover="true"
                aria-label="GitHub Profile"
                className="opacity-75 hover:opacity-100 hover:text-red-500 transition"
              >
                <FaGithub size={19} />
              </a>
              <a
                href="https://linkedin.com/in/nikita-kar"
                target="_blank"
                rel="noreferrer"
                data-hover="true"
                aria-label="LinkedIn Profile"
                className="opacity-75 hover:opacity-100 hover:text-red-500 transition"
              >
                <FaLinkedin size={19} />
              </a>
              <a
                href="mailto:karnikita48@gmail.com"
                data-hover="true"
                aria-label="Send Email"
                className="opacity-75 hover:opacity-100 hover:text-red-500 transition"
              >
                <Mail size={19} />
              </a>
            </div>

            {/* Single Line CTA to About Page (Turns Red When Clicked) */}
            <div className="pt-2">
              <motion.button
                onClick={handleClickAbout}
                whileTap={{ scale: 0.94 }}
                data-hover="true"
                className={`group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isClicked
                    ? 'bg-red-600 text-white shadow-[0_0_25px_rgba(220,38,38,0.7)] scale-95'
                    : isDark
                    ? 'bg-white text-zinc-950 hover:bg-red-600 hover:text-white active:bg-red-600 active:text-white shadow-md'
                    : 'bg-zinc-900 text-white hover:bg-red-600 hover:text-white active:bg-red-600 active:text-white shadow-md'
                }`}
              >
                <span>Let’s know about me more</span>
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
