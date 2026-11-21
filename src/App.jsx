import React, { useState } from 'react';
import RedCursor from './components/RedCursor';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

export default function App() {
  const [activePage, setActivePage] = useState('Home');
  const [theme, setTheme] = useState('dark');

  return (
    <div className={`relative min-h-screen w-full transition-colors duration-300 ${theme === 'dark' ? 'bg-[#09090b] text-white' : 'bg-[#f4f4f5] text-zinc-900'}`}>
      <RedCursor />
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        theme={theme}
        setTheme={setTheme}
      />

      <main>
        {activePage === 'Home' && <Home theme={theme} onNavigate={setActivePage} />}
        {activePage === 'About' && <About theme={theme} />}
        {activePage === 'Skills' && <Skills theme={theme} />}
        {activePage === 'Projects' && <Projects theme={theme} />}
        {activePage === 'Experience' && <Experience theme={theme} />}
        {activePage === 'Contact' && <Contact theme={theme} />}
      </main>
    </div>
  );
}
