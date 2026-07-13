import React, { useState, useEffect, useRef } from 'react';

interface LazyVideoProps {
  src: string;
  className?: string;
  onMouseEnter?: (e: React.MouseEvent<HTMLVideoElement>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLVideoElement>) => void;
}

export const LazyVideo: React.FC<LazyVideoProps> = ({
  src,
  className,
  onMouseEnter,
  onMouseLeave,
}) => {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full relative overflow-hidden">
      {isInView ? (
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className={className}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      ) : (
        <div className="absolute inset-0 bg-[#05050a]/60" />
      )}
    </div>
  );
};
