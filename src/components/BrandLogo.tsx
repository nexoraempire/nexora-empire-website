import React from 'react';
import nexoraLogo from '../assets/images/nexora-empire-logo.png';

interface BrandLogoProps {
  className?: string; // Optional class for sizing or layout adjustments
  size?: number;      // Size in pixels (default: 40)
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = '', size = 40 }) => {
  return (
    <img
      src={nexoraLogo}
      alt="Nexora Empire Logo"
      width={size}
      height={size}
      className={`inline-block select-none transition-transform duration-300 hover:scale-105 ${className}`}
      style={{ width: size, height: size, objectFit: 'contain' }}
      referrerPolicy="no-referrer"
    />
  );
};
