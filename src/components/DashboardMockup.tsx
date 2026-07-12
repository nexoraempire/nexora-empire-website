import React from 'react';
import dashboardImg from '../assets/images/dashboard.png';

interface DashboardMockupProps {
  className?: string;
  isFloating?: boolean;
}

export const DashboardMockup: React.FC<DashboardMockupProps> = ({ className = '', isFloating = false }) => {
  return (
    <div 
      className={`w-full overflow-hidden rounded-2xl border border-slate-200/80 shadow-2xl ${className} ${
        isFloating ? 'hover:shadow-brand-violet/10 select-none' : ''
      }`}
      id="nexora-dashboard-mockup"
    >
      <img 
        src={dashboardImg} 
        alt="Dashboard Mockup" 
        className="w-full h-auto object-cover"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};
