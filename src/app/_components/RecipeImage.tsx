'use client';

import Image from 'next/image';
import { useState } from 'react';

interface Props {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export function RecipeImage({ src, alt, width = 500, height = 500 }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Check if this is a blob URL (uploaded image)
  const isBlobUrl = src.startsWith('blob:');

  // For blob URLs, use regular img tag instead of Next.js Image
  if (isBlobUrl) {
    return (
      <div className="relative w-full h-full bg-parchment dark:bg-castle-stone">
        <img
          src={src}
          alt={alt}
          className={`
            w-full h-full object-cover
            duration-700 ease-in-out
            ${isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'}
            ${hasError ? 'opacity-50' : 'opacity-100'}
          `}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setHasError(true);
            setIsLoading(false);
            console.error('🎭 Failed to load uploaded image:', src);
          }}
          style={{ objectFit: 'cover' }}
        />
        {hasError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-800 text-white">
            <span>🎭 Image Error</span>
          </div>
        )}
      </div>
    );
  }

  // For static URLs, use Next.js Image component
  return (
    <div className="relative w-full h-full bg-parchment dark:bg-castle-stone">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`
          duration-700 ease-in-out
          ${isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'}
        `}
        onLoadingComplete={() => setIsLoading(false)}
        onError={() => {
          setHasError(true);
          console.error('🎭 Failed to load static image:', src);
        }}
        style={{ objectFit: 'cover' }}
      />
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 text-white">
          <span>🎭 Image Error</span>
        </div>
      )}
    </div>
  );
}