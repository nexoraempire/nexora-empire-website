import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'solid-violet';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  onClick,
  className = '',
  type = 'button',
}) => {
  const baseStyle = "group relative rounded-xl font-sans font-semibold tracking-wide transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer text-center";
  
  const variants = {
    primary: "px-8 py-4 bg-gradient-to-r from-blue-600 to-brand-violet text-white shadow-[0_4px_25px_rgba(99,102,241,0.35)] hover:shadow-[0_4px_35px_rgba(99,102,241,0.55)]",
    secondary: "px-8 py-4 border border-indigo-500/20 bg-slate-950 text-white hover:border-brand-violet/50 hover:bg-violet-950/10",
    outline: "px-6 py-2.5 border border-slate-200 text-slate-600 hover:border-brand-violet hover:bg-brand-violet/5 hover:text-brand-violet",
    'solid-violet': "px-5 py-3 bg-brand-violet text-white hover:bg-violet-700 shadow-md",
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.button>
  );
};
