'use client';

export function RecipeSkeleton() {
  return (
    <div className="relative w-full aspect-square bg-parchment dark:bg-castle-stone rounded-lg overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-scroll-white/10 to-transparent animate-shimmer" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-castle-black/60 to-transparent p-4">
        <div className="h-4 w-2/3 bg-scroll-white/20 rounded animate-pulse" />
      </div>
    </div>
  );
}

// Add shimmer animation to tailwind config if needed
// animation: {
//   shimmer: 'shimmer 2s infinite linear',
// },
// keyframes: {
//   shimmer: {
//     '0%': { transform: 'translateX(-100%)' },
//     '100%': { transform: 'translateX(100%)' },
//   },
// },