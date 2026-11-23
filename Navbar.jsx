import React, { useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const NAV_ITEMS = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];

export default function Navbar({ activePage, setActivePage, theme, setTheme }) {
  const [clickedItem, setClickedItem] = useState(null);

  const handleNavClick = (item) => {
    setActivePage(item);
    setClickedItem(item);
    setTimeout(() => {
      setClickedItem(null);
    }, 200);
  };

  const getNavTheme = () => {
    if (theme === 'light') {
      return 'bg-white/95 border-black/10 text-zinc-700 shadow-md';
    }
    return 'bg-[#141418]/95 border-white/10 text-zinc-200 shadow-lg';
  };

  return (
    <header className="fixed top-2.5 sm:top-5 left-0 right-0 z-40 flex items-center justify-center px-2 sm:px-6 pointer-events-none">
      {/* Top Adaptive Navigation Pill */}
      <nav
        className={`pointer-events-auto flex items-center gap-0.5 sm:gap-1.5 md:gap-2 rounded-full border px-2 sm:px-3 py-1 sm:py-1.5 backdrop-blur-md transition-colors duration-300 max-w-[calc(100vw-82px)] sm:max-w-none overflow-x-auto no-scrollbar shadow-2xl ${getNavTheme()}`}
      >
        {NAV_ITEMS.map((item) => {
          const isActive = activePage === item;
          const isClicked = clickedItem === item;

          let buttonStyle =
            'opacity-70 hover:opacity-100 hover:bg-red-600 hover:text-white active:bg-red-600 active:text-white';

          if (isClicked) {
            buttonStyle =
              'bg-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.7)] scale-95 font-semibold';
          } else if (isActive) {
            buttonStyle =
              theme === 'light'
                ? 'bg-zinc-900 text-white shadow-sm font-semibold hover:bg-red-600 hover:text-white'
                : 'bg-white text-zinc-950 shadow-sm font-semibold hover:bg-red-600 hover:text-white';
          }

          return (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              data-hover="true"
              className={`shrink-0 rounded-full px-2.5 sm:px-3.5 py-1 text-[11px] sm:text-xs md:text-sm font-medium transition-all duration-150 cursor-pointer ${buttonStyle}`}
            >
              {item}
            </button>
          );
        })}
      </nav>

      {/* Light / Dark Mode Toggle Available on Every Section */}
      <div
        className={`pointer-events-auto fixed right-2 sm:right-6 top-2.5 sm:top-5 flex items-center gap-1 rounded-full border p-1 backdrop-blur-md transition-colors shadow-lg z-50 ${
          theme === 'dark'
            ? 'bg-[#18181c]/90 border-white/10 text-white shadow-black/40'
            : 'bg-white/95 border-black/10 text-zinc-900 shadow-zinc-400/30'
        }`}
      >
        <button
          onClick={() => setTheme('light')}
          data-hover="true"
          aria-label="Light mode"
          className={`rounded-full p-1 sm:p-1.5 transition ${
            theme === 'light' ? 'bg-zinc-900 text-white shadow-sm' : 'text-zinc-400 hover:text-zinc-900'
          }`}
        >
          <Sun size={13} className="sm:w-3.5 sm:h-3.5" />
        </button>
        <button
          onClick={() => setTheme('dark')}
          data-hover="true"
          aria-label="Dark mode"
          className={`rounded-full p-1 sm:p-1.5 transition ${
            theme === 'dark' ? 'bg-white text-zinc-900 shadow-sm' : 'text-zinc-500 hover:text-white'
          }`}
        >
          <Moon size={13} className="sm:w-3.5 sm:h-3.5" />
        </button>
      </div>
    </header>
  );
}
