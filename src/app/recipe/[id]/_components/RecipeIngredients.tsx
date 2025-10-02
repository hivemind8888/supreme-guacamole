'use client';

import { Recipe } from '../../../types/recipe';

interface RecipeIngredientsProps {
  recipe: Recipe;
}

export const RecipeIngredients = ({ recipe }: RecipeIngredientsProps) => {
  return (
    <section className="mt-8 bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md">
      <h2 className="font-inter text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
        Ingredients
      </h2>
      <ul className="space-y-2">
        {recipe.ingredients.map((ingredient, index) => (
          <li 
            key={index}
            className="font-inter text-base text-gray-700 dark:text-gray-300 flex items-center"
          >
            <span className="mr-2">•</span>
            {ingredient}
          </li>
        ))}
      </ul>
    </section>
  );
};