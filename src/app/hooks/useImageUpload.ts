import { useState, useCallback } from 'react';
import { Recipe, UploadState } from '../types/recipe';
import { getRandomTemplate } from '../_data/recipe-templates';

export const useImageUpload = () => {
  const [state, setState] = useState<UploadState>({
    isModalOpen: false,
    isDragging: false,
    isUploading: false,
    showPreview: false,
    selectedFile: null,
    previewUrl: null,
    generatedRecipe: null,
    previewRecipe: null,
    isAnimating: false,
    uploadProgress: 0,
    error: null,
    validationErrors: {}
  });

  const openModal = useCallback(() => {
    setState(prev => ({ ...prev, isModalOpen: true, isAnimating: true }));
    // Trigger scroll unfurl animation
    setTimeout(() => {
      setState(prev => ({ ...prev, isAnimating: false }));
    }, 400);
  }, []);

  const closeModal = useCallback(() => {
    setState(prev => ({ ...prev, isAnimating: true }));
    // Trigger scroll furl animation
    setTimeout(() => {
      setState(prev => ({
        ...prev,
        isModalOpen: false,
        isAnimating: false,
        selectedFile: null,
        previewUrl: null,
        generatedRecipe: null,
        showPreview: false,
        error: null,
        uploadProgress: 0,
        isUploading: false
      }));
    }, 300);
  }, []);

  const handleFileSelect = useCallback(async (file: File) => {
    // Validation with courtly flair
    if (!file.type.startsWith('image/')) {
      setState(prev => ({
        ...prev,
        error: '🎭 Pray tell, only images are accepted in this royal court!'
      }));
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setState(prev => ({
        ...prev,
        error: '🎪 This file is too large for the royal archives! Maximum 5MB please.'
      }));
      return;
    }

    // Create a single blob URL for this file
    const imageUrl = URL.createObjectURL(file);

    setState(prev => ({
      ...prev,
      selectedFile: file,
      previewUrl: imageUrl,
      error: null,
      isUploading: true,
      uploadProgress: 0
    }));

    // Simulate upload progress with jester magic
    const progressInterval = setInterval(() => {
      setState(prev => {
        const newProgress = prev.uploadProgress + 10;
        if (newProgress >= 100) {
          clearInterval(progressInterval);
          // Generate recipe from template
          const template = getRandomTemplate();
          const generatedRecipe: Recipe = {
            ...template,
            id: `recipe-${Date.now()}`,
            image: imageUrl, // Use the same URL for consistency
            imagePath: imageUrl, // Use the same URL for consistency
            uploadedImage: file,
            createdAt: new Date().toISOString()
          };

          return {
            ...prev,
            uploadProgress: 100,
            isUploading: false,
            generatedRecipe,
            showPreview: true
          };
        }
        return { ...prev, uploadProgress: newProgress };
      });
    }, 200);
  }, []);

  const acceptRecipe = useCallback(async () => {
    if (!state.generatedRecipe) return;

    setState(prev => ({ ...prev, isUploading: true }));
    
    try {
      // In a real app, this would save to database/API
      // For now, we'll just simulate success
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Recipe will be handled by the modal's onUploadComplete callback
      
    } catch (error) {
      setState(prev => ({
        ...prev,
        error: '🎭 Alas! The recipe could not be saved to the royal archives.',
        isUploading: false
      }));
    }
  }, [state.generatedRecipe]);

  const editRecipe = useCallback((updates: Partial<Recipe>) => {
    setState(prev => ({
      ...prev,
      generatedRecipe: prev.generatedRecipe 
        ? { ...prev.generatedRecipe, ...updates }
        : null
    }));
  }, []);

  const clearUpload = useCallback(() => {
    // Only clean up preview URL if we're canceling (not after successful accept)
    // The recipe store will manage the image URLs for accepted recipes
    if (state.previewUrl && !state.generatedRecipe) {
      URL.revokeObjectURL(state.previewUrl);
    }

    setState(prev => ({ 
      ...prev, 
      selectedFile: null, 
      previewUrl: null, 
      generatedRecipe: null,
      showPreview: false,
      error: null,
      uploadProgress: 0,
      isUploading: false
    }));
  }, [state.previewUrl, state.generatedRecipe]);

  const setDragging = useCallback((isDragging: boolean) => {
    setState(prev => ({ ...prev, isDragging }));
  }, []);

  const setError = useCallback((error: string | null) => {
    setState(prev => ({ ...prev, error }));
  }, []);

  const setUploadProgress = useCallback((progress: number) => {
    setState(prev => ({ ...prev, uploadProgress: progress }));
  }, []);

  return {
    // State
    ...state,
    
    // Actions
    openModal,
    closeModal,
    handleFileSelect,
    acceptRecipe,
    editRecipe,
    clearUpload,
    setDragging,
    setError,
    setUploadProgress
  };
};