'use client';

import { Recipe } from '../types/recipe';
import { useEffect, useState } from 'react';
import { recipeStore } from '../_data/recipeStore';

export const useRecipeDetail = (id: string) => {
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setIsLoading(true);
        
        // First, check uploaded recipes in the royal store
        const uploadedRecipe = recipeStore.getRecipe(id);
        if (uploadedRecipe) {
          console.log('🎭 Found uploaded recipe in royal store:', uploadedRecipe.title);
          setRecipe(uploadedRecipe);
          return;
        }
        
        // If not found in uploads, check static recipes
        const { recipes } = await import('../_data/recipes.json');
        const foundRecipe = recipes.find(recipe => recipe.id === id);
        
        if (!foundRecipe) {
          throw new Error('Recipe not found in royal archives');
        }
        
        console.log('🎭 Found static recipe:', foundRecipe.title);
        setRecipe(foundRecipe as Recipe);
      } catch (err) {
        console.error('🎭 Recipe search failed:', err);
        setError(err instanceof Error ? err : new Error('Failed to fetch recipe'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecipe();

    // Subscribe to recipe store updates in case recipe is added later
    const unsubscribe = recipeStore.subscribe(() => {
      const uploadedRecipe = recipeStore.getRecipe(id);
      if (uploadedRecipe && !recipe) {
        console.log('🎭 Recipe found after store update:', uploadedRecipe.title);
        setRecipe(uploadedRecipe);
        setError(null);
      }
    });

    return unsubscribe;
  }, [id, recipe]);

  return { recipe, isLoading, error };
};