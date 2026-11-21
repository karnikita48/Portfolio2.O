import React, { useState } from 'react';
import { Phone, Copy, Check, Mail } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact({ theme = 'dark' }) {
  const [copied, setCopied] = useState(false);
  const isDark = theme === 'dark';
  const email = 'karnikita48@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className={`relative flex min-h-screen w-full flex-col justify-between overflow-hidden pt-24 sm:pt-32 pb-6 px-4 sm:px-12 md:px-16 transition-colors duration-500 ${isDark ? 'bg-[#0e0e10] text-white' : 'bg-[#f4f4f5] text-zinc-900'}`}>
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col md:flex-row items-start md:items-center justify-between gap-8 sm:gap-12 my-auto">
        {/* Left: LinkedIn, GitHub, and Phone Number */}
        <div className="flex flex-col space-y-4 sm:space-y-5 text-base sm:text-xl font-medium">
          <a
            href="https://linkedin.com/in/nikita-kar"
            target="_blank"
            rel="noreferrer"
            data-hover="true"
            className={`inline-flex items-center gap-3 transition ${isDark ? 'text-zinc-200 hover:text-white' : 'text-zinc-700 hover:text-zinc-950'}`}
          >
            <FaLinkedin size={22} className={isDark ? 'text-zinc-400' : 'text-zinc-600'} />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/karnikita48"
            target="_blank"
            rel="noreferrer"
            data-hover="true"
            className={`inline-flex items-center gap-3 transition ${isDark ? 'text-zinc-200 hover:text-white' : 'text-zinc-700 hover:text-zinc-950'}`}
          >
            <FaGithub size={22} className={isDark ? 'text-zinc-400' : 'text-zinc-600'} />
            <span>GitHub</span>
          </a>

          <a
            href="tel:+916009067532"
            data-hover="true"
            className={`inline-flex items-center gap-3 transition ${isDark ? 'text-zinc-200 hover:text-white' : 'text-zinc-700 hover:text-zinc-950'}`}
          >
            <Phone size={22} className={isDark ? 'text-zinc-400' : 'text-zinc-600'} />
            <span>+91 6009067532</span>
          </a>
        </div>

        {/* Right: Direct Email & Copy Option */}
        <div className="max-w-md w-full space-y-4 sm:space-y-5">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-normal leading-tight tracking-tight ${isDark ? 'text-white' : 'text-zinc-900'}`}>
            I’d like to hear from you.
          </h2>

          <a
            href={`mailto:${email}`}
            data-hover="true"
            className={`block text-lg sm:text-2xl font-normal underline decoration-current/30 underline-offset-8 transition break-all sm:break-normal ${isDark ? 'text-zinc-200 hover:text-white' : 'text-zinc-800 hover:text-zinc-950'}`}
          >
            {email}
          </a>

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 pt-2">
            <a
              href={`mailto:${email}`}
              data-hover="true"
              className={`inline-flex items-center justify-center gap-2 rounded-md px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-semibold transition ${isDark ? 'bg-white text-zinc-950 hover:bg-zinc-200' : 'bg-zinc-900 text-white hover:bg-zinc-800'}`}
            >
              <Mail size={16} />
              <span>Email me</span>
            </a>

            <button
              onClick={handleCopyEmail}
              data-hover="true"
              className={`inline-flex items-center justify-center gap-2 rounded-md border px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-medium transition ${isDark ? 'border-white/25 bg-transparent text-white hover:border-white' : 'border-zinc-400 bg-transparent text-zinc-900 hover:border-zinc-900'}`}
            >
              <span>{copied ? 'Copied!' : 'Copy'}</span>
              {copied ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Contact Typography */}
      <div className="relative z-10 mx-auto w-full max-w-6xl pt-8 sm:pt-12">
        <div className={`flex items-center justify-between border-t py-3 sm:py-4 text-[10px] sm:text-[11px] ${isDark ? 'border-white/15 text-zinc-500' : 'border-zinc-300 text-zinc-500'}`}>
          <span>© 2026 Nikita Kar</span>
          <span>Bangalore, India</span>
        </div>

        <div className="relative overflow-hidden pt-2 pb-2 sm:pb-4 select-none">
          <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(128,128,128,0.08)_0px,transparent_18px,rgba(128,128,128,0.03)_36px)] blur-md" />
          <h1 className={`relative text-center text-[16vw] sm:text-[18vw] leading-[0.85] font-medium tracking-tighter bg-gradient-to-b bg-clip-text text-transparent ${isDark ? 'from-white via-zinc-300 to-zinc-600' : 'from-zinc-900 via-zinc-700 to-zinc-400'}`}>
            Contact
          </h1>
        </div>
      </div>
    </section>
  );
}
