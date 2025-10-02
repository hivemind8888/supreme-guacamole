'use client';

import { useEffect } from 'react';
import { X, Edit3 } from 'lucide-react';
import { ImagePreviewProps } from '../types/recipe';

export const ImagePreview: React.FC<ImagePreviewProps> = ({ 
  file, 
  onClear, 
  onEdit,
  className = '' 
}) => {
  const previewUrl = URL.createObjectURL(file);

  // Cleanup object URL on unmount to prevent memory leaks (Royal Efficiency)
  useEffect(() => {
    return () => URL.revokeObjectURL(previewUrl);
  }, [previewUrl]);

  const formatFileSize = (bytes: number) => {
    return `${(bytes / 1024 / 1024).toFixed(1)}MB`;
  };

  return (
    <div className={`relative group ${className}`}>
      {/* Tapestry-Style Frame */}
      <div className="
        relative overflow-hidden rounded-xl
        border-4 border-gradient-to-br from-primary-neon/50 to-secondary-neon/50
        bg-gradient-to-br from-gray-800 to-gray-900
        shadow-2xl shadow-primary-neon/20
        transform transition-all duration-300
        group-hover:scale-105 group-hover:shadow-primary-neon/40
      ">
        {/* Medieval Tapestry Border Pattern */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-2 border border-accent-neon/30 rounded-lg" />
          <div className="absolute inset-4 border border-secondary-neon/20 rounded-md" />
        </div>

        {/* Royal Image Display */}
        <div className="relative overflow-hidden">
          <img
            src={previewUrl}
            alt="Royal feast preview"
            className="
              w-full h-64 object-cover
              filter hover:brightness-110 transition-all duration-300
            "
          />
          
          {/* Mystical Overlay on Hover */}
          <div className="
            absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent
            opacity-0 group-hover:opacity-100 transition-opacity duration-300
            flex items-end justify-center p-4
          ">
            <p className="text-primary-neon text-sm font-semibold">
              🎭 Royal Feast Image Ready
            </p>
          </div>
        </div>

        {/* File Information Banner */}
        <div className="
          absolute bottom-0 left-0 right-0
          bg-gradient-to-t from-gray-900 to-transparent
          p-3 text-white text-xs
        ">
          <div className="flex justify-between items-center">
            <span className="text-primary-neon font-semibold">
              📜 {file.name}
            </span>
            <span className="text-gray-300">
              {formatFileSize(file.size)}
            </span>
          </div>
        </div>
      </div>

      {/* Control Buttons (Jester's Tools) */}
      <div className="absolute -top-3 -right-3 flex gap-2">
        {/* Edit Button */}
        <button
          onClick={onEdit}
          className="
            w-8 h-8 rounded-full
            bg-accent-neon text-gray-900
            hover:bg-accent-neon/80 hover:scale-110
            transition-all duration-300
            flex items-center justify-center
            shadow-lg shadow-accent-neon/30
            group/edit
          "
          aria-label="Edit royal feast image"
          title="Edit thy feast! ✨"
        >
          <Edit3 size={16} className="group-hover/edit:rotate-12 transition-transform duration-300" />
        </button>

        {/* Clear Button */}
        <button
          onClick={onClear}
          className="
            w-8 h-8 rounded-full
            bg-red-500 text-white
            hover:bg-red-600 hover:scale-110
            transition-all duration-300
            flex items-center justify-center
            shadow-lg shadow-red-500/30
            group/clear
          "
          aria-label="Clear royal feast image"
          title="Remove from court! 🗑️"
        >
          <X size={16} className="group-hover/clear:rotate-90 transition-transform duration-300" />
        </button>
      </div>

      {/* Decorative Musical Notes (Floating Animation) */}
      <div className="absolute -top-6 -left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="animate-bounce text-secondary-neon">🎵</div>
      </div>
      <div className="absolute -bottom-6 -right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animation-delay-300">
        <div className="animate-bounce text-accent-neon">🎶</div>
      </div>

      {/* Magical Glow Effect */}
      <div className="
        absolute inset-0 rounded-xl
        bg-gradient-to-r from-primary-neon/10 to-secondary-neon/10
        opacity-0 group-hover:opacity-100
        transition-opacity duration-500
        pointer-events-none
        blur-xl -z-10
      " />
    </div>
  );
};