'use client';

import { useState, useCallback } from 'react';
import { RecipeFormData } from '../types/recipe';

interface RecipePreviewState {
  name: string;
  description: string;
  imageUrl: string;
  isSubmitting: boolean;
  isLoading: boolean;
}

interface RecipePreviewActions {
  setImageUrl: (url: string) => void;
  generateRecipeDetails: () => Promise<void>;
  submitRecipe: () => Promise<void>;
  reset: () => void;
}

interface RecipePreviewReturn extends RecipePreviewState, RecipePreviewActions {
  error: string | null;
}

const DEFAULT_STATE: RecipePreviewState = {
  name: '',
  description: '',
  imageUrl: '',
  isSubmitting: false,
  isLoading: false,
};

const PRECANNED_RECIPES = [
  {
    name: 'Hainanese Chicken Rice',
    description: 'A delicious and aromatic dish featuring poached chicken and fragrant rice cooked in chicken broth.',
  },
  {
    name: 'Laksa',
    description: 'A spicy coconut curry noodle soup with seafood or chicken, a staple of Malaysian and Singaporean cuisine.',
  },
  {
    name: 'Chicken Rendang',
    description: 'A rich and spicy slow-cooked curry where chicken is simmered in coconut milk and aromatic spices.',
  },
];

// Simple matching function - will be replaced with AI in future
const matchPrecannedRecipe = async (imageUrl: string): Promise<RecipeFormData> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // For now, just return a random precanned recipe
  const randomRecipe = PRECANNED_RECIPES[Math.floor(Math.random() * PRECANNED_RECIPES.length)];
  return {
    ...randomRecipe,
    imageUrl,
  };
};

export const useRecipePreview = (): RecipePreviewReturn => {
  const [state, setState] = useState<RecipePreviewState>(DEFAULT_STATE);
  const [error, setError] = useState<string | null>(null);

  const setImageUrl = useCallback((imageUrl: string) => {
    setState(prev => ({ ...prev, imageUrl }));
  }, []);

  const generateRecipeDetails = useCallback(async () => {
    setState(prev => ({ ...prev, isLoading: true }));
    setError(null);

    try {
      const recipe = await matchPrecannedRecipe(state.imageUrl);
      setState(prev => ({
        ...prev,
        name: recipe.name,
        description: recipe.description,
        isLoading: false,
      }));
    } catch (err) {
      setError('Failed to generate recipe details');
      setState(prev => ({
        ...prev,
        isLoading: false,
      }));
    }
  }, [state.imageUrl]);

  const submitRecipe = useCallback(async () => {
    setState(prev => ({ ...prev, isSubmitting: true }));
    setError(null);

    if (!state.name || !state.description || !state.imageUrl) {
      setError('Please fill in all required fields');
      setState(prev => ({ ...prev, isSubmitting: false }));
      throw new Error('Missing required fields');
    }

    try {
      // TODO: Implement actual submission logic
      await new Promise(resolve => setTimeout(resolve, 1000));
      setState(prev => ({ ...prev, isSubmitting: false }));
    } catch (err) {
      setError('Failed to submit recipe');
      setState(prev => ({ ...prev, isSubmitting: false }));
    }
  }, [state.name, state.description, state.imageUrl]);

  const reset = useCallback(() => {
    setState(DEFAULT_STATE);
    setError(null);
  }, []);

  return {
    ...state,
    error,
    setImageUrl,
    generateRecipeDetails,
    submitRecipe,
    reset,
  };
};