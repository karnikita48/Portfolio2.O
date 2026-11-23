import React, { useEffect, useRef, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function RedCursor() {
  const canvasRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  // Smooth springs for the cursor pointer tip
  const cursorX = useSpring(-100, { stiffness: 800, damping: 35 });
  const cursorY = useSpring(-100, { stiffness: 800, damping: 35 });

  useEffect(() => {
    // Only run on desktop devices with fine pointer
    if (typeof window !== 'undefined' && window.matchMedia && !window.matchMedia('(pointer: fine)').matches) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle cloud array for the volumetric red fluid smoke trail
    const particles = [];
    const maxParticles = 380;

    let lastX = -100;
    let lastY = -100;
    let isMoving = false;
    let idleTimer = null;
    let animId = null;

    // Helper to add a 3D fluid smoke puff
    const addPuff = (x, y, vx, vy, baseSize, isSubLobe = false) => {
      if (particles.length >= maxParticles) {
        particles.shift();
      }

      const sizeVar = isSubLobe ? 0.55 + Math.random() * 0.35 : 0.85 + Math.random() * 0.45;
      const initialRadius = baseSize * sizeVar;
      const targetRadius = initialRadius * (1.6 + Math.random() * 0.7);

      particles.push({
        x: x + (Math.random() - 0.5) * 6,
        y: y + (Math.random() - 0.5) * 6,
        vx: vx * 0.12 + (Math.random() - 0.5) * 0.6,
        vy: vy * 0.12 + (Math.random() - 0.5) * 0.6,
        radius: initialRadius,
        targetRadius,
        angle: Math.random() * Math.PI * 2,
        spin: (Math.random() - 0.5) * 0.02,
        life: 0,
        maxLife: 55 + Math.random() * 35, // Lingers gracefully (~1.2 - 1.5s)
        wobbleSpeed: 0.04 + Math.random() * 0.04,
        wobbleAmp: 1.2 + Math.random() * 1.8,
        lightOffsetAngle: Math.PI * 0.75 + (Math.random() - 0.5) * 0.5, // 3D highlight offset
        isSubLobe,
      });
    };

    // Spawn a billowy fluid cluster (primary puff + organic billow lobes)
    const spawnFluidCluster = (x, y, dx, dy, baseSize = 30) => {
      // Main central fluid puff
      addPuff(x, y, dx, dy, baseSize, false);

      // Organic billowing lobes along perpendicular to motion (creates cloud/smoke contours like adrienquichon reference)
      const moveAngle = Math.atan2(dy, dx);
      const perpAngle1 = moveAngle + Math.PI / 2 + (Math.random() - 0.5) * 0.4;
      const perpAngle2 = moveAngle - Math.PI / 2 + (Math.random() - 0.5) * 0.4;
      const offsetDist = baseSize * (0.35 + Math.random() * 0.35);

      if (Math.random() < 0.75) {
        addPuff(
          x + Math.cos(perpAngle1) * offsetDist,
          y + Math.sin(perpAngle1) * offsetDist,
          dx * 0.5,
          dy * 0.5,
          baseSize,
          true
        );
      }
      if (Math.random() < 0.6) {
        addPuff(
          x + Math.cos(perpAngle2) * offsetDist,
          y + Math.sin(perpAngle2) * offsetDist,
          dx * 0.5,
          dy * 0.5,
          baseSize,
          true
        );
      }
    };

    const onMouseMove = (e) => {
      const currentX = e.clientX;
      const currentY = e.clientY;

      cursorX.set(currentX);
      cursorY.set(currentY);

      const target = e.target.closest('button, a, [data-hover="true"]');
      setHovered(Boolean(target));

      if (lastX > -50 && lastY > -50) {
        const dx = currentX - lastX;
        const dy = currentY - lastY;
        const dist = Math.hypot(dx, dy);

        // Vector interpolation: ensures continuous thick fluid plume without gaps during quick mouse movement
        const stepSize = 8;
        const steps = Math.max(1, Math.floor(dist / stepSize));

        for (let i = 0; i <= steps; i++) {
          const t = i / steps;
          const px = lastX + dx * t;
          const py = lastY + dy * t;
          spawnFluidCluster(px, py, dx / steps, dy / steps, hovered ? 38 : 32);
        }
      } else {
        spawnFluidCluster(currentX, currentY, 0, 0, hovered ? 38 : 32);
      }

      lastX = currentX;
      lastY = currentY;

      isMoving = true;
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        isMoving = false;
      }, 120);

      if (!animId) {
        animId = requestAnimationFrame(render);
      }
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    // Animation render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;

        if (p.life >= p.maxLife) {
          particles.splice(i, 1);
          continue;
        }

        const progress = p.life / p.maxLife; // 0 to 1
        // Smooth volumetric emergence and gentle dissipation
        const alpha = Math.sin(progress * Math.PI) * (1 - progress * 0.35);

        // Organic puff expansion as smoke billows outward
        p.radius += (p.targetRadius - p.radius) * 0.045;
        p.angle += p.spin;

        // Subtle fluid curl and friction
        p.x += p.vx + Math.cos(p.life * p.wobbleSpeed) * p.wobbleAmp * 0.25;
        p.y += p.vy + Math.sin(p.life * p.wobbleSpeed) * p.wobbleAmp * 0.25;
        p.vx *= 0.94;
        p.vy *= 0.94;

        if (alpha <= 0.005) continue;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);

        // 3D volumetric lighting: offset light center gives spherical fluid/smoke depth and crevices
        const lightDist = p.radius * 0.22;
        const lx = Math.cos(p.lightOffsetAngle) * lightDist;
        const ly = Math.sin(p.lightOffsetAngle) * lightDist;

        const grad = ctx.createRadialGradient(
          lx, ly, p.radius * 0.04,
          0, 0, p.radius
        );

        if (p.isSubLobe) {
          // Bubbly sub-lobe: darker burgundy core with fiery ruby rim
          grad.addColorStop(0, `rgba(255, 110, 100, ${alpha * 0.9})`);
          grad.addColorStop(0.28, `rgba(220, 38, 38, ${alpha * 0.8})`);
          grad.addColorStop(0.62, `rgba(153, 27, 27, ${alpha * 0.65})`);
          grad.addColorStop(0.85, `rgba(75, 12, 12, ${alpha * 0.45})`);
          grad.addColorStop(1, 'rgba(30, 5, 5, 0)');
        } else {
          // Volumetric main smoke plume: bright vermilion crest, rich crimson body, deep ruby/charcoal crevices
          grad.addColorStop(0, `rgba(255, 140, 120, ${alpha * 0.95})`); // Lit crest highlight
          grad.addColorStop(0.18, `rgba(255, 60, 60, ${alpha * 0.9})`);  // Radiant vermilion
          grad.addColorStop(0.42, `rgba(220, 38, 38, ${alpha * 0.82})`); // Deep vibrant crimson body
          grad.addColorStop(0.70, `rgba(153, 27, 27, ${alpha * 0.65})`); // Rich ruby red
          grad.addColorStop(0.88, `rgba(75, 15, 15, ${alpha * 0.4})`);   // Dark smoky fold contour
          grad.addColorStop(1, 'rgba(25, 5, 5, 0)');                    // Feathered dissipation
        }

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(0, 0, p.radius, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }

      // Continue animation loop if there are active particles or mouse is moving
      if (particles.length > 0 || isMoving) {
        animId = requestAnimationFrame(render);
      } else {
        animId = null;
      }
    };

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      clearTimeout(idleTimer);
      if (animId) cancelAnimationFrame(animId);
    };
  }, [cursorX, cursorY, hovered]);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 hidden md:block overflow-hidden">
      {/* Volumetric Red Fluid Smoke Trail Canvas (works seamlessly across dark & light themes) */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 h-full w-full select-none"
      />

      {/* Glowing Red Cursor Arrow Point */}
      <motion.div
        style={{ x: cursorX, y: cursorY }}
        animate={{
          scale: clicked ? 0.85 : hovered ? 1.25 : 1,
          rotate: hovered ? -8 : 0,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
        className="pointer-events-none fixed -translate-x-1 -translate-y-1 z-50 drop-shadow-[0_0_12px_rgba(239,68,68,0.95)]"
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          className="select-none"
        >
          {/* Outer Red Arrow */}
          <path
            d="M4 3L20 11.5L12.5 14L9.5 21L4 3Z"
            fill="#ef4444"
            stroke="#ffffff"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          {/* Inner Glowing Core Dot */}
          <circle cx="10" cy="10" r="2.2" fill="#ffffff" />
        </svg>
      </motion.div>
    </div>
  );
}
