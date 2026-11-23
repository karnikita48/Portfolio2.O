import React, { useState, useEffect, useRef } from 'react';
import RedCursor from './components/RedCursor';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import { ChevronDown, ChevronUp } from 'lucide-react';

const SECTIONS = [
  { id: 'home', name: 'Home', Component: Home },
  { id: 'about', name: 'About', Component: About },
  { id: 'skills', name: 'Skills', Component: Skills },
  { id: 'projects', name: 'Projects', Component: Projects },
  { id: 'experience', name: 'Experience', Component: Experience },
  { id: 'contact', name: 'Contact', Component: Contact },
];

export default function App() {
  const [activePage, setActivePage] = useState('Home');
  const [theme, setTheme] = useState('dark');

  const containerRef = useRef(null);
  const activePageRef = useRef('Home');
  const isLockedRef = useRef(false);

  // Smooth scroll to target section
  const scrollToSection = (pageName) => {
    const el = document.getElementById(pageName.toLowerCase());
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActivePage(pageName);
      activePageRef.current = pageName;
    }
  };

  // IntersectionObserver to sync Navbar and Dots with the currently visible section
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.45) {
            const sectionId = entry.target.id;
            const matched = SECTIONS.find((s) => s.id === sectionId);
            if (matched) {
              setActivePage(matched.name);
              activePageRef.current = matched.name;
            }
          }
        });
      },
      {
        root: container,
        threshold: 0.45,
      }
    );

    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Scroll Down / Up Gesture Detection: moves to next section when user scrolls down
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Trackpad & Mouse Wheel scroll handler
    const handleWheel = (e) => {
      if (isLockedRef.current) {
        e.preventDefault();
        return;
      }

      // Check if mouse is inside an internal scroll container (e.g., Experience laptop log or project detail modal)
      const target = e.target;
      const scrollableParent = target.closest('.overflow-y-auto, .overflow-y-scroll');
      if (scrollableParent && scrollableParent !== container) {
        const { scrollTop, scrollHeight, clientHeight } = scrollableParent;
        const isAtTop = scrollTop <= 0;
        const isAtBottom = scrollTop + clientHeight >= scrollHeight - 3;

        // If not at scroll boundary of child element, allow internal scrolling
        if ((e.deltaY < 0 && !isAtTop) || (e.deltaY > 0 && !isAtBottom)) {
          return;
        }
      }

      // Threshold to distinguish deliberate scroll from minor jitter
      if (Math.abs(e.deltaY) < 25) return;

      e.preventDefault();
      isLockedRef.current = true;

      const currentIndex = SECTIONS.findIndex((s) => s.name === activePageRef.current);
      if (e.deltaY > 0) {
        // Scroll Down -> Move to Next Section
        if (currentIndex < SECTIONS.length - 1) {
          scrollToSection(SECTIONS[currentIndex + 1].name);
        }
      } else {
        // Scroll Up -> Move to Previous Section
        if (currentIndex > 0) {
          scrollToSection(SECTIONS[currentIndex - 1].name);
        }
      }

      // Lock cooldown to prevent rapid multi-section skips
      setTimeout(() => {
        isLockedRef.current = false;
      }, 750);
    };

    // Mobile Touch swipe handler
    let touchStartY = 0;
    let touchStartX = 0;

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
      touchStartX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
      if (isLockedRef.current) return;

      const touchEndY = e.changedTouches[0].clientY;
      const touchEndX = e.changedTouches[0].clientX;
      const diffY = touchStartY - touchEndY;
      const diffX = touchStartX - touchEndX;

      // Ensure deliberate vertical swipe
      if (Math.abs(diffY) > 40 && Math.abs(diffY) > Math.abs(diffX) * 1.3) {
        isLockedRef.current = true;
        const currentIndex = SECTIONS.findIndex((s) => s.name === activePageRef.current);

        if (diffY > 0) {
          // Swipe Up (Scroll Down) -> Move to Next Section
          if (currentIndex < SECTIONS.length - 1) {
            scrollToSection(SECTIONS[currentIndex + 1].name);
          }
        } else {
          // Swipe Down (Scroll Up) -> Move to Previous Section
          if (currentIndex > 0) {
            scrollToSection(SECTIONS[currentIndex - 1].name);
          }
        }

        setTimeout(() => {
          isLockedRef.current = false;
        }, 750);
      }
    };

    // Keyboard navigation (Arrow keys / Page keys)
    const handleKeyDown = (e) => {
      if (['ArrowDown', 'PageDown', ' '].includes(e.key)) {
        const currentIndex = SECTIONS.findIndex((s) => s.name === activePageRef.current);
        if (currentIndex < SECTIONS.length - 1) {
          e.preventDefault();
          scrollToSection(SECTIONS[currentIndex + 1].name);
        }
      } else if (['ArrowUp', 'PageUp'].includes(e.key)) {
        const currentIndex = SECTIONS.findIndex((s) => s.name === activePageRef.current);
        if (currentIndex > 0) {
          e.preventDefault();
          scrollToSection(SECTIONS[currentIndex - 1].name);
        }
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const currentIndex = SECTIONS.findIndex((s) => s.name === activePage);
  const nextSection = currentIndex < SECTIONS.length - 1 ? SECTIONS[currentIndex + 1] : SECTIONS[0];
  const isLast = currentIndex === SECTIONS.length - 1;

  return (
    <div className={`relative h-screen w-full transition-colors duration-300 overflow-hidden ${theme === 'dark' ? 'bg-[#09090b] text-white' : 'bg-[#f4f4f5] text-zinc-900'}`}>
      <RedCursor />

      {/* Top Navbar */}
      <Navbar
        activePage={activePage}
        setActivePage={(page) => scrollToSection(page)}
        theme={theme}
        setTheme={setTheme}
      />

      {/* Continuous Full-Page Scroll-Snap Container */}
      <main
        ref={containerRef}
        className="relative h-screen w-full overflow-y-scroll overflow-x-hidden snap-y snap-mandatory scroll-smooth no-scrollbar"
      >
        {SECTIONS.map((section) => (
          <section
            id={section.id}
            key={section.id}
            className="relative min-h-screen w-full snap-start snap-always"
          >
            <section.Component
              theme={theme}
              onNavigate={(page) => scrollToSection(page)}
            />
          </section>
        ))}
      </main>

      {/* Floating Vertical Section Indicators (Quick-Jump Pager) */}
      <nav aria-label="Section indicators" className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-3">
        {SECTIONS.map((section) => {
          const isActive = activePage === section.name;
          return (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.name)}
              data-hover="true"
              aria-label={`Jump to ${section.name}`}
              className="group relative flex items-center justify-end p-1.5 cursor-pointer focus:outline-none"
            >
              {/* Tooltip on hover */}
              <span
                className={`absolute right-8 rounded-md px-2.5 py-1 text-[11px] font-mono tracking-wider transition-all duration-200 pointer-events-none opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 shadow-lg ${
                  theme === 'dark'
                    ? 'bg-[#18181c] text-zinc-200 border border-zinc-700/80 shadow-black/60'
                    : 'bg-white text-zinc-800 border border-zinc-300 shadow-zinc-400/40'
                }`}
              >
                {section.name}
              </span>

              {/* Dot Indicator */}
              <span
                className={`block rounded-full transition-all duration-300 ${
                  isActive
                    ? 'h-3.5 w-3.5 bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.95)] ring-2 ring-red-500/40 scale-110'
                    : theme === 'dark'
                    ? 'h-2 w-2 bg-zinc-600 hover:bg-zinc-400 group-hover:scale-125'
                    : 'h-2 w-2 bg-zinc-400 hover:bg-zinc-600 group-hover:scale-125'
                }`}
              />
            </button>
          );
        })}
      </nav>

      {/* Floating Bottom-Center "Scroll or Click for Next Section" Hint */}
      <div className="fixed bottom-3.5 sm:bottom-5 left-1/2 -translate-x-1/2 z-40 pointer-events-none">
        <button
          onClick={() => scrollToSection(nextSection.name)}
          data-hover="true"
          className={`pointer-events-auto flex items-center gap-1.5 rounded-full border px-3 sm:px-4 py-1.5 text-[11px] sm:text-xs font-mono tracking-wide shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer ${
            theme === 'dark'
              ? 'border-white/10 bg-[#141418]/90 text-zinc-300 hover:border-white/30 hover:text-white shadow-black/50'
              : 'border-black/10 bg-white/95 text-zinc-700 hover:border-black/30 hover:text-zinc-950 shadow-zinc-400/30'
          }`}
        >
          {isLast ? (
            <>
              <ChevronUp size={13} className="text-red-500 animate-bounce" />
              <span>Top · Home</span>
            </>
          ) : (
            <>
              <span>Scroll for {nextSection.name}</span>
              <ChevronDown size={13} className="text-red-500 animate-bounce" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
