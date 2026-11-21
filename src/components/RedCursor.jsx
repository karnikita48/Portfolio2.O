import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function RedCursor() {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const cursorX = useSpring(-100, { stiffness: 600, damping: 30 });
  const cursorY = useSpring(-100, { stiffness: 600, damping: 30 });
  const ringX = useSpring(-100, { stiffness: 200, damping: 24 });
  const ringY = useSpring(-100, { stiffness: 200, damping: 24 });

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);

      const target = e.target.closest('button, a, [data-hover="true"]');
      setHovered(Boolean(target));
    };

    const handleDown = () => setClicked(true);
    const handleUp = () => setClicked(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleDown);
    window.addEventListener('mouseup', handleUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleDown);
      window.removeEventListener('mouseup', handleUp);
    };
  }, [cursorX, cursorY, ringX, ringY]);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 hidden md:block">
      {/* Outer Expanding Red Halo Ring */}
      <motion.div
        style={{ x: ringX, y: ringY }}
        animate={{
          scale: clicked ? 0.8 : hovered ? 1.85 : 1,
          opacity: hovered ? 0.85 : 0.45,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
        className="fixed -translate-x-1/2 -translate-y-1/2 h-11 w-11 rounded-full border-2 border-red-500 bg-red-500/15 shadow-[0_0_20px_rgba(239,68,68,0.6)]"
      />

      {/* Crisp Red Arrow Pointer */}
      <motion.div
        style={{ x: cursorX, y: cursorY }}
        animate={{
          scale: clicked ? 0.85 : hovered ? 1.2 : 1,
          rotate: hovered ? -8 : 0,
        }}
        className="fixed -translate-x-1 -translate-y-1"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="drop-shadow-[0_0_10px_rgba(239,68,68,1)]"
        >
          <path
            d="M4 3L20 11.5L12.5 14L9.5 21L4 3Z"
            fill="#ef4444"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </div>
  );
}