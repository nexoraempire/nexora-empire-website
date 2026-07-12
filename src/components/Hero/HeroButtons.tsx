import React from 'react';
import { Phone } from 'lucide-react';
import { Button } from '../Button.tsx';
import { siteConfig } from '../../config/site.ts';

interface HeroButtonsProps {
  onStartProject: () => void;
}

export const HeroButtons: React.FC<HeroButtonsProps> = ({ onStartProject }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
      {/* Primary Action Button */}
      <Button variant="primary" onClick={onStartProject} className="w-full sm:w-auto">
        <span className="relative z-10 flex items-center justify-center gap-1.5 text-base font-semibold">
          Start a Project
          <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            ↗
          </span>
        </span>
        <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand-electric to-brand-violet opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </Button>

      {/* Secondary Action - Call option */}
      <a
        href={siteConfig.phoneRaw}
        className="group flex items-center gap-3.5 py-2 hover:opacity-95 transition-opacity w-full sm:w-auto shrink-0 select-none cursor-pointer"
      >
        <div className="relative w-12 h-12 rounded-full flex items-center justify-center bg-[#00c853] shadow-[0_0_15px_rgba(0,200,83,0.3)] transition-all duration-300 group-hover:scale-105 shrink-0">
          <Phone className="w-5 h-5 text-white fill-current" />
        </div>
        <div className="flex flex-col text-left">
          <span className="font-sans text-[11px] font-bold text-gray-400 tracking-wider uppercase leading-none mb-1.5">
            CONTACT US DAILY
          </span>
          <span className="font-sans text-lg sm:text-xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors duration-300 leading-none">
            {siteConfig.phone}
          </span>
        </div>
      </a>
    </div>
  );
};
