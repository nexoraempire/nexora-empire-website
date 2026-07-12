import React, { useEffect, useRef } from 'react';

export const CursorSpotlight: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable on mobile/touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      el.style.setProperty('--cursor-x', `${e.clientX}px`);
      el.style.setProperty('--cursor-y', `${e.clientY}px`);
      if (el.style.opacity !== '1') {
        el.style.opacity = '1';
      }
    };

    const handleMouseLeave = () => {
      el.style.opacity = '0';
    };

    const handleMouseEnter = () => {
      el.style.opacity = '1';
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="fixed inset-0 pointer-events-none z-30 transition-opacity duration-500 opacity-0"
      style={{
        background: `radial-gradient(600px circle at var(--cursor-x, -1000px) var(--cursor-y, -1000px), rgba(99, 102, 241, 0.04), transparent 80%)`,
      }}
    />
  );
};
