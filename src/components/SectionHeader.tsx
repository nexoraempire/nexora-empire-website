import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  badge: string;
  title: React.ReactNode;
  description: string;
  idPrefix?: string;
  className?: string;
  theme?: 'light' | 'dark';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  description,
  idPrefix = 'section',
  className = '',
  theme = 'light',
}) => {
  const badgeStyles = theme === 'dark' 
    ? 'text-brand-electric bg-violet-950/40 border-violet-800/50' 
    : 'text-brand-violet bg-violet-50/70 border-violet-100/50';

  const textStyles = theme === 'dark'
    ? 'text-zinc-400'
    : 'text-slate-500';

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    },
  };

  const descVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    },
  };

  return (
    <motion.div 
      className={`max-w-3xl mx-auto text-center mb-16 sm:mb-20 relative z-10 ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.span 
        id={`${idPrefix}-badge`}
        className={`text-xs font-mono font-bold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full border inline-block ${badgeStyles}`}
        variants={badgeVariants}
      >
        {badge}
      </motion.span>
      <motion.h2 
        id={`${idPrefix}-heading`}
        className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight mt-6 mb-6 leading-none"
        variants={titleVariants}
      >
        {title}
      </motion.h2>
      <motion.p 
        id={`${idPrefix}-description`}
        className={`text-sm sm:text-base md:text-md max-w-2xl mx-auto leading-relaxed font-normal ${textStyles}`}
        variants={descVariants}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};
