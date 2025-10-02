'use client';

import { Recipe } from '../../../types/recipe';

interface RecipeInstructionsProps {
  recipe: Recipe;
}

export const RecipeInstructions = ({ recipe }: RecipeInstructionsProps) => {
  return (
    <section className="mt-8 bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md">
      <h2 className="font-inter text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
        Instructions
      </h2>
      <ol className="space-y-4">
        {recipe.instructions.map((instruction, index) => (
          <li 
            key={index}
            className="font-inter text-base text-gray-700 dark:text-gray-300"
          >
            <span className="font-semibold mr-2">{index + 1}.</span>
            {instruction}
          </li>
        ))}
      </ol>
    </section>
  );
};