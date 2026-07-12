import React from 'react';

export const HeroHeadline: React.FC = () => {
  return (
    <div className="mb-8">
      <h1 className="font-display text-[44px] sm:text-[58px] md:text-[72px] font-extrabold text-white leading-[1.05] tracking-tight">
        <span className="block">Your Partner for</span>
        <span className="block">Websites, Apps &</span>
        <span className="block bg-gradient-to-r from-brand-electric via-[#3b82f6] to-brand-violet bg-clip-text text-transparent">
          Digital Solutions
        </span>
      </h1>
    </div>
  );
};
