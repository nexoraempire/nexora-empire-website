import React, { useRef } from 'react';

interface CardSpotlightProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string; // e.g. "rgba(0, 190, 250, 0.12)"
  borderColor?: string; // e.g. "rgba(99, 102, 241, 0.4)"
  id?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const CardSpotlight: React.FC<CardSpotlightProps> = ({
  children,
  className = '',
  glowColor = 'rgba(99, 102, 241, 0.08)',
  borderColor = 'rgba(99, 102, 241, 0.25)',
  id,
  onClick,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty('--mouse-x', `${x}px`);
    el.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleMouseEnter = () => {
    const el = containerRef.current;
    if (!el) return;
    el.style.setProperty('--hover-opacity', '1');
  };

  const handleMouseLeave = () => {
    const el = containerRef.current;
    if (!el) return;
    el.style.setProperty('--hover-opacity', '0');
  };

  return (
    <div
      id={id}
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`relative overflow-hidden transition-all duration-300 ${className}`}
      style={{
        '--mouse-x': '0px',
        '--mouse-y': '0px',
        '--hover-opacity': '0',
      } as React.CSSProperties}
    >
      {/* Spotlight glow layer */}
      <div
        className="absolute pointer-events-none transition-opacity duration-300 rounded-full"
        style={{
          width: '350px',
          height: '350px',
          background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
          left: `calc(var(--mouse-x) - 175px)`,
          top: `calc(var(--mouse-y) - 175px)`,
          transform: 'translate3d(0, 0, 0)',
          mixBlendMode: 'screen',
          zIndex: 1,
          opacity: 'var(--hover-opacity)',
        }}
      />
      
      {/* Interactive Border Spotlight overlay */}
      <div
        className="absolute inset-0 pointer-events-none rounded-[inherit] transition-opacity duration-300"
        style={{
          border: '1.5px solid transparent',
          background: `radial-gradient(circle 200px at var(--mouse-x) var(--mouse-y), ${borderColor}, transparent)`,
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          zIndex: 2,
          opacity: 'var(--hover-opacity)',
        }}
      />

      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
};
