import React from 'react';
import { motion } from 'framer-motion';
import { CardSpotlight } from './CardSpotlight.tsx';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  theme?: 'light' | 'dark';
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  id,
  onClick,
  theme = 'light',
}) => {
  const cardStyles = theme === 'dark'
    ? 'bg-slate-950/40 border-[#1e1b4b]/30 hover:border-brand-electric/30 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]'
    : 'bg-white border-slate-100 hover:border-indigo-500/40 shadow-[0_5px_15px_-5px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(109,40,217,0.05)]';

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="h-full w-full"
    >
      <CardSpotlight
        id={id}
        onClick={onClick}
        className={`group flex flex-col rounded-3xl overflow-hidden transition-all duration-500 border ${cardStyles} ${className}`}
      >
        {children}
      </CardSpotlight>
    </motion.div>
  );
};
