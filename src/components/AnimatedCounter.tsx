'use client';

import React, { useEffect, useState, useRef } from 'react';

interface ParsedValue {
  prefix: string;
  numberValue: number;
  suffix: string;
  decimals: number;
  hasCommas: boolean;
}

export function parseNumericString(val: string): ParsedValue | null {
  // Extract optional prefix, numeric sequence (supporting minus, digits, dots, commas), and optional suffix
  const match = val.match(/^([^0-9-]*)(-[0-9,.]+|[0-9,.]+)(.*)$/);
  if (!match) return null;

  const prefix = match[1];
  const numStr = match[2];
  const suffix = match[3];

  const hasCommas = numStr.includes(',');
  const cleanNumStr = numStr.replace(/,/g, '');
  const numberValue = parseFloat(cleanNumStr);

  if (isNaN(numberValue)) return null;

  const dotIndex = numStr.indexOf('.');
  const decimals = dotIndex !== -1 ? (numStr.split('.')[1] || '').length : 0;

  return {
    prefix,
    numberValue,
    suffix,
    decimals,
    hasCommas
  };
}

interface AnimatedCounterProps {
  value: string | number;
  duration?: number; // duration in ms
  className?: string;
  id?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 1500,
  className = "",
  id
}) => {
  const [displayValue, setDisplayValue] = useState<string>(String(value));
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef<boolean>(false);

  useEffect(() => {
    const stringValue = String(value);
    const parsed = parseNumericString(stringValue);

    if (!parsed) {
      setDisplayValue(stringValue);
      return;
    }

    const { prefix, numberValue, suffix, decimals, hasCommas } = parsed;

    const formatNumber = (num: number) => {
      let formatted = num.toFixed(decimals);
      if (hasCommas) {
        const parts = formatted.split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        formatted = parts.join('.');
      }
      return `${prefix}${formatted}${suffix}`;
    };

    // Set initial display to 0 (or start value)
    setDisplayValue(formatNumber(0));

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          let startTime: number | null = null;
          const startValue = 0;
          const endValue = numberValue;

          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            
            // Easing: easeOutExpo (1 - 2^(-10t))
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const currentValue = startValue + (endValue - startValue) * easeProgress;
            
            setDisplayValue(formatNumber(currentValue));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplayValue(formatNumber(endValue));
            }
          };

          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const currentEl = elementRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      observer.disconnect();
    };
  }, [value, duration]);

  return (
    <span ref={elementRef} className={className} id={id}>
      {displayValue}
    </span>
  );
};
