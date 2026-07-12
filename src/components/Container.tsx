import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`container mx-auto max-w-7xl px-6 md:px-12 relative z-10 ${className}`}>
      {children}
    </div>
  );
};
