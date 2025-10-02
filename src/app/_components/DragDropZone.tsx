'use client';

import { useState, useCallback } from 'react';
import { Upload, Image as ImageIcon } from 'lucide-react';
import { DragDropZoneProps } from '../types/recipe';

export const DragDropZone: React.FC<DragDropZoneProps> = ({ 
  onFileSelect, 
  isDragging, 
  isUploading,
  accept, 
  maxSize,
  error,
  uploadProgress = 0
}) => {
  const [dragOver, setDragOver] = useState(false);

  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(false);

    const file = e.dataTransfer.files[0];
    if (file) {
      // Validate file type with courtly flair
      if (!accept.some(type => file.type.startsWith(type.replace('*', '')))) {
        return; // Let parent handle validation
      }
      onFileSelect(file);
    }
  }, [onFileSelect, accept]);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileSelect(file);
    }
  }, [onFileSelect]);

  const formatFileSize = (bytes: number) => {
    return `${(bytes / 1024 / 1024).toFixed(1)}MB`;
  };

  const isActive = dragOver || isDragging;

  return (
    <div
      onDragEnter={handleDragEnter}
      onDragOver={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`
        mandolin-drop-zone
        ${isActive ? 'drag-active' : ''}
        aspect-[4/3] p-8 
        transition-all duration-300 ease-in-out
        flex flex-col items-center justify-center gap-6
        relative overflow-hidden
        ${isUploading ? 'pointer-events-none' : 'cursor-pointer'}
      `}
      role="region"
      aria-label="Mandolin-shaped mystical drop zone for royal feast images"
    >
      {/* Cyber-Grid Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-neon/20 via-transparent to-secondary-neon/20" />
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,255,156,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,255,156,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
        />
      </div>

      {/* Upload Progress Indicator */}
      {isUploading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900/80 backdrop-blur-sm">
          <div className="text-center">
            <div className="jester-juggling-animation mb-4">🎭</div>
            <div className="progress-bar w-48 h-3 bg-gray-700 rounded-full overflow-hidden mb-2">
              <div 
                className="h-full bg-gradient-to-r from-primary-neon to-secondary-neon transition-all duration-300"
                style={{ width: `${uploadProgress}%` }}
              />
            </div>
            <p className="text-primary-neon text-sm">
              Jester magic in progress... {uploadProgress}%
            </p>
          </div>
        </div>
      )}

      {/* Main Upload Icon with Musical Decoration */}
      <div className="relative">
        {isActive ? (
          <ImageIcon 
            size={48} 
            className="text-primary-neon animate-bounce" 
          />
        ) : (
          <Upload 
            size={48} 
            className="text-secondary-neon group-hover:text-primary-neon transition-colors duration-300" 
          />
        )}
        
        {/* Luth decoration appears on hover */}
        <div className={`
          absolute -top-2 -right-2 text-xl transition-all duration-300
          ${isActive ? 'opacity-100 scale-110' : 'opacity-60 scale-100'}
        `}>
          🪕
        </div>
      </div>

      {/* Royal Instructions */}
      <div className="text-center space-y-2">
        <p className="text-white font-semibold text-lg">
          {isActive ? 
            '🎼 Release thy royal feast image!' : 
            '🎭 Drop thy feast image in this mystical mandolin'
          }
        </p>
        <p className="text-gray-300 text-sm">
          Or click to browse thy royal archives
        </p>
        
        {/* File Selection Input (Hidden) */}
        <label className="block">
          <input
            type="file"
            className="hidden"
            accept={accept.join(',')}
            onChange={handleFileInput}
            disabled={isUploading}
          />
          <span className={`
            inline-block mt-3 px-6 py-2 rounded-full
            border-2 border-accent-neon text-accent-neon
            hover:bg-accent-neon hover:text-gray-900
            transition-all duration-300 cursor-pointer
            ${isUploading ? 'opacity-50 cursor-not-allowed' : ''}
          `}>
            Browse Royal Gallery
          </span>
        </label>
      </div>

      {/* File Requirements */}
      <div className="text-center text-xs text-gray-400 space-y-1">
        <p>Accepts: {accept.join(', ')}</p>
        <p>Maximum size: {formatFileSize(maxSize)}</p>
      </div>

      {/* Error Message with Courtly Flair */}
      {error && (
        <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-red-900/80 backdrop-blur-sm border border-red-500/50">
          <p className="text-red-300 text-sm text-center">
            {error}
          </p>
        </div>
      )}

      {/* Magical Sparkle Effects on Active */}
      {isActive && (
        <>
          <div className="absolute top-4 left-4 text-accent-neon animate-ping">✨</div>
          <div className="absolute top-4 right-4 text-primary-neon animate-ping animation-delay-100">✨</div>
          <div className="absolute bottom-4 left-4 text-secondary-neon animate-ping animation-delay-200">✨</div>
          <div className="absolute bottom-4 right-4 text-accent-neon animate-ping animation-delay-300">✨</div>
        </>
      )}
    </div>
  );
};