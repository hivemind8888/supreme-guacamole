'use client';

import Image from 'next/image';
import { Recipe } from '../../../types/recipe';

interface RecipeDetailHeaderProps {
  recipe: Recipe;
}

export const RecipeDetailHeader = ({ recipe }: RecipeDetailHeaderProps) => {
  return (
    <div className="relative w-full">
      <div className="h-[400px] relative w-full">
        <Image
          src={recipe.imagePath}
          alt={recipe.title}
          fill
          className="object-cover rounded-lg shadow-lg transition-transform hover:scale-[1.01]"
          priority
        />
      </div>
      <h1 className="mt-6 font-inter text-3xl font-bold text-gray-900 dark:text-white">
        {recipe.title}
      </h1>
      {recipe.preparationTime && (
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Preparation time: {recipe.preparationTime}
        </p>
      )}
      {recipe.difficulty && (
        <p className="mt-1 text-gray-600 dark:text-gray-400">
          Difficulty: {recipe.difficulty}
        </p>
      )}
      {recipe.servings && (
        <p className="mt-1 text-gray-600 dark:text-gray-400">
          Servings: {recipe.servings}
        </p>
      )}
    </div>
  );
};