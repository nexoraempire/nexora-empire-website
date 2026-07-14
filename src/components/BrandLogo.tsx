import React from 'react';
import nexoraLogo from '../assets/images/nexora-empire-logo.webp';

interface BrandLogoProps {
  className?: string; // Optional class for sizing or layout adjustments
  size?: number;      // Size in pixels (default: 40)
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = '', size = 40 }) => {
  const logoSrc = typeof nexoraLogo === 'string' ? nexoraLogo : (nexoraLogo as any).src;
  return (
    <img
      src={logoSrc}
      alt="Nexora Empire Logo"
      width={size}
      height={size}
      className={`inline-block select-none transition-transform duration-300 hover:scale-105 ${className}`}
      style={{ width: size, height: size, objectFit: 'contain' }}
      referrerPolicy="no-referrer"
    />
  );
};
