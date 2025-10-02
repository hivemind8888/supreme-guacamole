'use client';

import { Recipe } from '../types/recipe';
import { RecipeImage } from './RecipeImage';

interface Props {
  recipe: Recipe;
  onClick: (id: string) => void;
}

export function RecipeCard({ recipe, onClick }: Props) {
  return (
    <article
      className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer
                 transform transition-all duration-200 ease-in-out
                 hover:scale-[1.02] hover:shadow-magical
                 focus-within:ring-2 focus-within:ring-jester-green
                 active:scale-[0.98]"
      onClick={() => onClick(recipe.id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(recipe.id);
        }
      }}
    >
      <RecipeImage
        src={recipe.imagePath}
        alt={recipe.title}
      />
      <div className="absolute bottom-0 left-0 right-0 min-h-24 bg-gradient-to-t from-black/80 via-black/50 to-transparent
                    transform transition-transform duration-200 ease-in-out">
        <div className="px-4 py-3 md:px-6 md:py-4">
          <h3 
            className="font-bardic text-lg md:text-xl font-bold text-white tracking-wide leading-tight"
            style={{
              textShadow: `
                0 2px 4px rgba(0, 0, 0, 0.8),
                0 4px 8px rgba(0, 0, 0, 0.6),
                0 0 20px rgba(46, 204, 113, 0.3)
              `
            }}
          >
            {recipe.title}
          </h3>
        </div>
      </div>
    </article>
  );
}