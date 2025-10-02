'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useRecipeGallery } from '../hooks/useRecipeGallery';
import { useImageUpload } from '../hooks/useImageUpload';
import { RecipeCard } from './RecipeCard';
import { RecipeSkeleton } from './RecipeSkeleton';
import { FloatingAddButton } from './FloatingAddButton';
import { UploadModal } from './UploadModal';
import { Recipe } from '../types/recipe';

export function RecipeGallery() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const { state, actions } = useRecipeGallery();
  const { isLoading, error, recipes, gridColumns } = state;

  const uploadHook = useImageUpload();
  const { 
    isModalOpen,
    openModal,
    closeModal
  } = uploadHook;

  const handleRecipeClick = (id: string) => {
    actions.selectRecipe(id);
    router.push(`/recipe/${id}`);
  };

  const handleUploadComplete = (recipe: Recipe) => {
    actions.addRecipe(recipe);
  };

  useEffect(() => {
    const updateContainerWidth = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        // Debounce the update to prevent rapid re-renders
        requestAnimationFrame(() => {
          actions.updateLayout(width);
        });
      }
    };

    updateContainerWidth();
    window.addEventListener('resize', updateContainerWidth);
    
    return () => window.removeEventListener('resize', updateContainerWidth);
  }, [actions]);

  if (error) {
    throw new Error(error); // This will be caught by the ErrorBoundary
  }

  const gridClassName = `grid gap-6 md:gap-8 grid-cols-${gridColumns}`;

  return (
    <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12 min-h-screen py-12">
      {/* Royal Gallery Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          🎭 Royal Recipe Gallery
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Feast thy eyes upon the most exquisite Southeast Asian delicacies, 
          curated by our royal court jesters and mystical mandolin magic
        </p>
        <div className="flex justify-center space-x-4 mt-6 text-3xl">
          <span>🍜</span>
          <span>🪕</span>
          <span>👑</span>
          <span>🎵</span>
        </div>
      </div>

      {/* Recipe Grid */}
      <div ref={containerRef} className={gridClassName}>
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => (
              <RecipeSkeleton key={index} />
            ))
          : recipes.map(recipe => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onClick={handleRecipeClick}
              />
            ))
        }
      </div>
      
      {/* Floating Add Button */}
      <FloatingAddButton onClick={openModal} />
      
      {/* Medieval Scroll Upload Modal */}
      <UploadModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onUploadComplete={handleUploadComplete}
      />
    </div>
  );
}