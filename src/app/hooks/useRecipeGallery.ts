'use client';

import { useState, useEffect } from 'react';
import { Recipe, GalleryState } from '../types/recipe';
import mockRecipes from '../_data/recipes.json';
import { recipeStore } from '../_data/recipeStore';

export function useRecipeGallery() {
  const [state, setState] = useState<GalleryState>({
    isLoading: true,
    error: null,
    recipes: [],
    selectedRecipeId: null,
    gridColumns: 3,
    containerWidth: 0,
  });

  useEffect(() => {
    const loadRecipes = async () => {
      try {
        // Simulate API call with timeout
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Combine static recipes with uploaded recipes
        const staticRecipes = mockRecipes.recipes as Recipe[];
        const uploadedRecipes = recipeStore.getAllUploadedRecipes();
        const allRecipes = [...staticRecipes, ...uploadedRecipes];
        
        console.log('🎭 Loading royal gallery:', {
          staticCount: staticRecipes.length,
          uploadedCount: uploadedRecipes.length,
          totalCount: allRecipes.length
        });
        
        setState(prev => ({
          ...prev,
          recipes: allRecipes,
          isLoading: false,
        }));
      } catch (error) {
        setState(prev => ({
          ...prev,
          error: 'Failed to load recipes',
          isLoading: false,
        }));
      }
    };

    loadRecipes();

    // Subscribe to recipe store updates
    const unsubscribe = recipeStore.subscribe(() => {
      const staticRecipes = mockRecipes.recipes as Recipe[];
      const uploadedRecipes = recipeStore.getAllUploadedRecipes();
      const allRecipes = [...staticRecipes, ...uploadedRecipes];
      
      console.log('🎭 Recipe store updated, refreshing gallery');
      setState(prev => ({
        ...prev,
        recipes: allRecipes,
      }));
    });

    return unsubscribe;
  }, []);

  const updateLayout = (width: number) => {
    const columns = width < 768 ? 2 : 3;
    setState(prev => {
      // Only update if values have actually changed
      if (prev.gridColumns === columns && prev.containerWidth === width) {
        return prev;
      }
      return {
        ...prev,
        gridColumns: columns,
        containerWidth: width,
      };
    });
  };

  const selectRecipe = (id: string) => {
    setState(prev => ({
      ...prev,
      selectedRecipeId: id,
    }));
  };

  const addRecipe = (recipe: Recipe) => {
    console.log('🎭 Adding recipe to royal store:', recipe.title);
    
    // Add to global store (this will trigger the subscription update)
    recipeStore.addRecipe(recipe);
    
    // Note: The subscription will automatically update the state
    // so we don't need to manually update state here
  };

  return {
    state,
    actions: {
      updateLayout,
      selectRecipe,
      addRecipe,
    },
  };
}