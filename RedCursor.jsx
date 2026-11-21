import React, { useEffect, useRef } from 'react';

export default function RedCursor() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let particles = [];
    let animationFrameId;

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const spawnSmoke = (x, y, isHovering) => {
      const count = isHovering ? 4 : 2;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: x + (Math.random() - 0.5) * 10,
          y: y + (Math.random() - 0.5) * 10,
          vx: (Math.random() - 0.5) * 1.3,
          vy: -Math.random() * 1.2 - 0.25, // Gentle upward cloud drift
          size: isHovering ? Math.random() * 24 + 15 : Math.random() * 18 + 11,
          alpha: isHovering ? 0.42 : 0.28,
          growth: Math.random() * 0.55 + 0.35,
          isHovering,
        });
      }
    };

    const handleMouseMove = (e) => {
      const isHovering = Boolean(
        e.target.closest('button, a, [data-hover="true"]')
      );
      spawnSmoke(e.clientX, e.clientY, isHovering);
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.size += p.growth;
        p.alpha -= 0.006;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        // Pure White & Silver Cloud Radial Gradient Puff
        const gradient = ctx.createRadialGradient(
          p.x,
          p.y,
          p.size * 0.1,
          p.x,
          p.y,
          p.size
        );

        if (p.isHovering) {
          gradient.addColorStop(0, `rgba(255, 255, 255, ${p.alpha})`);
          gradient.addColorStop(0.5, `rgba(226, 232, 240, ${p.alpha * 0.65})`);
          gradient.addColorStop(1, 'rgba(203, 213, 225, 0)');
        } else {
          gradient.addColorStop(0, `rgba(255, 255, 255, ${p.alpha * 0.9})`);
          gradient.addColorStop(0.45, `rgba(203, 213, 225, ${p.alpha * 0.55})`);
          gradient.addColorStop(1, 'rgba(148, 163, 184, 0)');
        }

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-50 hidden md:block"
    />
  );
}