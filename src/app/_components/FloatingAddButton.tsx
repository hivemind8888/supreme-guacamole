'use client';

import React from 'react';
import { Plus } from 'lucide-react';
import { FloatingButton } from './FloatingButton';

interface FloatingAddButtonProps {
  onClick: () => void;
  className?: string;
  disabled?: boolean;
}

export const FloatingAddButton: React.FC<FloatingAddButtonProps> = ({
  onClick,
  className = '',
  disabled = false
}) => {
  return (
    <FloatingButton
      onClick={onClick}
      icon={
        <Plus 
          size={24} 
          className="w-5 h-5 md:w-6 md:h-6" 
        />
      }
      size="medium"
      position="bottom-right"
      className={className}
      disabled={disabled}
      ariaLabel="Add new recipe - Upload recipe with jester magic"
      title="Share thy royal feast! 🎭"
    />
  );
};