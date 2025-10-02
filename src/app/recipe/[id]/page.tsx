'use client';

import React from 'react';
import { useRecipeDetail } from '@/app/hooks/useRecipeDetail';
import { RecipeDetailHeader } from './_components/RecipeDetailHeader';
import { RecipeIngredients } from './_components/RecipeIngredients';
import { RecipeInstructions } from './_components/RecipeInstructions';
import { BackToGallery } from './_components/BackToGallery';
import { ErrorBoundary } from '@/app/_components/ErrorBoundary';

interface RecipeDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function RecipeDetailPage({ params }: RecipeDetailPageProps) {
  const { id } = React.use(params);
  const { recipe, isLoading, error } = useRecipeDetail(id);

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="animate-pulse">
          <div className="h-[400px] bg-gray-300 dark:bg-gray-700 rounded-lg mb-6" />
          <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-4" />
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/4" />
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/3" />
          </div>
        </div>
      </div>
    );
  }

  if (error || !recipe) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <BackToGallery />
        <div className="mt-8 text-center">
          <h1 className="text-2xl font-bold text-red-600 dark:text-red-400">
            {error?.message || 'Recipe not found'}
          </h1>
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <BackToGallery />
        <div className="mt-8">
          <RecipeDetailHeader recipe={recipe} />
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <RecipeIngredients recipe={recipe} />
            <RecipeInstructions recipe={recipe} />
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}