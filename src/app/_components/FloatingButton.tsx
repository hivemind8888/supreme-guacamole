'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface FloatingButtonProps {
  onClick: () => void;
  icon: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  className?: string;
  disabled?: boolean;
  ariaLabel: string;
  title?: string;
}

interface ResponsiveConfig {
  desktop: { bottom: string; right: string; width: string; height: string; };
  tablet: { bottom: string; right: string; width: string; height: string; };
  mobile: { bottom: string; right: string; width: string; height: string; };
}

const getPositionConfig = (position: string): ResponsiveConfig => {
  const configs = {
    'bottom-right': {
      desktop: { bottom: '2rem', right: '2rem', width: '3.5rem', height: '3.5rem' },
      tablet: { bottom: '1.5rem', right: '1.5rem', width: '3rem', height: '3rem' },
      mobile: { bottom: '1.5rem', right: '1rem', width: '3rem', height: '3rem' }
    }
  };
  
  return configs[position as keyof typeof configs] || configs['bottom-right'];
};

const getSizeClasses = (size: string): string => {
  const sizes = {
    small: 'w-12 h-12 lg:w-12 lg:h-12',
    medium: 'w-12 h-12 lg:w-14 lg:h-14',
    large: 'w-14 h-14 lg:w-16 lg:h-16'
  };
  
  return sizes[size as keyof typeof sizes] || sizes.medium;
};

const getResponsivePositionClasses = (position: string): string => {
  const positions = {
    'bottom-right': 'fixed bottom-6 right-4 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8'
  };
  
  return positions[position as keyof typeof positions] || positions['bottom-right'];
};

export const FloatingButton: React.FC<FloatingButtonProps> = ({
  onClick,
  icon,
  size = 'medium',
  position = 'bottom-right',
  className = '',
  disabled = false,
  ariaLabel,
  title
}) => {
  const sizeClasses = getSizeClasses(size);
  const positionClasses = getResponsivePositionClasses(position);

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${positionClasses}
        ${sizeClasses}
        flex items-center justify-center
        text-primary-neon hover:text-white
        disabled:opacity-50 disabled:cursor-not-allowed
        disabled:hover:transform-none disabled:hover:shadow-none
        focus:outline-none focus:ring-2 focus:ring-primary-neon focus:ring-offset-2 focus:ring-offset-gray-900
        group z-50
        rounded-full
        border-2 border-primary-neon
        hover:shadow-lg hover:shadow-primary-neon/30
        active:scale-95
        ${className}
      `}
      style={{
        background: 'linear-gradient(135deg, #6b46c1 0%, #4338ca 100%)',
        boxShadow: '0 4px 15px rgba(0, 255, 156, 0.2)',
        overflow: 'hidden',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 17
      }}
      aria-label={ariaLabel}
      title={title}
    >
      {/* Icon Container */}
      <div className="
        transition-transform duration-300 ease-out
        group-hover:rotate-90 group-hover:scale-110
        group-active:scale-95
        relative z-10
      ">
        {icon}
      </div>
      
      {/* Jester Hat Decoration */}
      <div className="
        absolute -top-2 -right-2
        text-xs opacity-70
        transform -rotate-12
        pointer-events-none
      ">
        🎭
      </div>
      
      {/* Mystical Glow Effect */}
      <div 
        className="
          absolute inset-0 rounded-full
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
          pointer-events-none
          animate-pulse
        "
        style={{
          background: 'linear-gradient(to right, rgba(0, 255, 156, 0.2), rgba(255, 0, 229, 0.2))'
        }}
      />
      
      {/* Jester Bell Effect */}
      <div 
        className="
          absolute -top-1 -right-1 
          w-2 h-2 md:w-3 md:h-3 rounded-full
          opacity-0 group-hover:opacity-100
          group-hover:animate-ping
          transition-opacity duration-300
        "
        style={{
          backgroundColor: 'var(--accent-neon)'
        }}
      />
      
      {/* Musical Note on Hover */}
      <div className="
        absolute -top-3 -left-3
        text-xs opacity-0 group-hover:opacity-100
        transition-opacity duration-300
        pointer-events-none
        animate-pulse
      ">
        🎼
      </div>
    </motion.button>
  );
};