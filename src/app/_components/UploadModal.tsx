'use client';

import { useCallback, useState, useEffect } from 'react';
import { X, Scroll } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Recipe } from '../types/recipe';
import { DragDropZone } from './DragDropZone';
import { ImagePreview } from './ImagePreview';
import { RecipePreviewCard } from './RecipePreviewCard';
import { useImageUpload } from '../hooks/useImageUpload';
import { UploadModalProps } from '../types/recipe';

export const UploadModal: React.FC<UploadModalProps> = ({
  isOpen,
  onClose,
  onUploadComplete,
  className = ''
}) => {
  const {
    selectedFile,
    previewUrl,
    generatedRecipe,
    showPreview,
    isUploading,
    uploadProgress,
    error,
    handleFileSelect,
    acceptRecipe,
    editRecipe,
    clearUpload,
    setDragging
  } = useImageUpload();

  const [isEditing, setIsEditing] = useState(false);

  const handleClose = useCallback(() => {
    clearUpload();
    setIsEditing(false);
    onClose();
  }, [clearUpload, onClose]);

  const handleFileSelection = useCallback((file: File) => {
    handleFileSelect(file);
  }, [handleFileSelect]);

  const handleEdit = useCallback(() => {
    setIsEditing(true);
  }, []);

  const handleSave = useCallback((updates: Partial<Recipe>) => {
    editRecipe(updates);
    setIsEditing(false);
  }, [editRecipe]);

  const handleAccept = useCallback(async () => {
    console.log('🎭 Royal Accept Button Clicked!', { generatedRecipe });
    if (generatedRecipe) {
      console.log('🎭 Accepting recipe to royal gallery...');
      await acceptRecipe();
      onUploadComplete(generatedRecipe);
      console.log('🎭 Recipe accepted successfully!');
      handleClose();
    } else {
      console.error('🎭 No generated recipe to accept!');
    }
  }, [generatedRecipe, acceptRecipe, onUploadComplete, handleClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${className}`}>
          {/* Mystical Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="scroll-modal fixed inset-0"
            onClick={handleClose}
          />

          {/* Medieval Scroll Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.3, rotateX: -40 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            exit={{ opacity: 0, scale: 0.3, rotateX: 40 }}
            transition={{ 
              duration: 0.4, 
              ease: "easeOut",
              scale: { type: "spring", damping: 20, stiffness: 300 }
            }}
            className="scroll-modal-content relative z-10 w-full max-w-4xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Scroll Header with Royal Seal */}
            <div className="flex items-center gap-4 p-6 border-b border-primary-neon/20">
              <Scroll className="text-primary-neon" size={32} />
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-white flex items-center gap-2">
                  🎭 Royal Recipe Scroll
                </h2>
                <p className="text-gray-300 text-sm">
                  Share thy feast with the court through mystical mandolin magic
                </p>
              </div>
              
              {/* Close Button (Royal Seal) */}
              <button
                onClick={handleClose}
                className="
                  w-10 h-10 rounded-full
                  bg-red-500/20 border-2 border-red-500
                  text-red-400 hover:text-red-300 hover:bg-red-500/30
                  transition-all duration-300 hover:scale-110
                  flex items-center justify-center
                  focus:outline-none focus:ring-2 focus:ring-red-500
                "
                aria-label="Close royal scroll"
                title="Close scroll 📜"
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-200px)]">
              {/* Error Banner with Jester Flair */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mx-6 mt-4 p-4 bg-red-900/50 border border-red-500/50 rounded-lg backdrop-blur-sm"
                >
                  <p className="text-red-300 text-center flex items-center justify-center gap-2">
                    🎭 <span>{error}</span>
                  </p>
                </motion.div>
              )}

              {/* Main Content Area */}
              <div className="p-6">
                {!selectedFile && !showPreview && (
                  /* Initial Upload State */
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                  >
                    <div className="text-center space-y-4">
                      <div className="text-6xl">🪕</div>
                      <div>
                        <h3 className="text-2xl font-bold text-primary-neon">
                          Summon thy Royal Feast
                        </h3>
                        <p className="text-gray-300 mt-2">
                          Drop an image of thy delicious creation into the mystical mandolin below
                        </p>
                      </div>
                    </div>
                    
                    <DragDropZone
                      onFileSelect={handleFileSelection}
                      isDragging={false}
                      isUploading={isUploading}
                      accept={['image/*']}
                      maxSize={5 * 1024 * 1024} // 5MB
                      uploadProgress={uploadProgress}
                    />
                  </motion.div>
                )}

                {selectedFile && !showPreview && (
                  /* Image Upload/Processing State */
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-primary-neon mb-4">
                        🎨 Thy Royal Image
                      </h3>
                    </div>
                    
                    <ImagePreview
                      file={selectedFile}
                      onClear={clearUpload}
                      onEdit={() => {}}
                      className="mx-auto max-w-md"
                    />
                    
                    {isUploading && (
                      <RecipePreviewCard
                        isGenerating={true}
                        className="mx-auto max-w-md"
                      />
                    )}
                  </motion.div>
                )}

                {showPreview && generatedRecipe && (
                  /* Recipe Preview State */
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="grid lg:grid-cols-2 gap-8"
                  >
                    {/* Image Side */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-accent-neon text-center">
                        🖼️ Thy Royal Image
                      </h3>
                      {selectedFile && (
                        <ImagePreview
                          file={selectedFile}
                          onClear={clearUpload}
                          onEdit={() => {}}
                        />
                      )}
                    </div>

                    {/* Recipe Preview Side */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-primary-neon text-center">
                        📜 Generated Recipe
                      </h3>
                      <RecipePreviewCard
                        recipe={generatedRecipe}
                        isPreview={true}
                        isEditing={isEditing}
                        onEdit={handleEdit}
                        onSave={handleSave}
                        onAccept={handleAccept}
                        onCancel={() => setIsEditing(false)}
                      />
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Scroll Footer with Royal Actions */}
            <div className="p-6 border-t border-primary-neon/20 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>🎭 Jester Magic</span>
                  <span>•</span>
                  <span>🪕 Mandolin Mysticism</span>
                  <span>•</span>
                  <span>👑 Royal Court Approved</span>
                </div>
                
                <div className="flex gap-3">
                  <button
                    onClick={handleClose}
                    className="
                      px-6 py-2 bg-gray-700 text-white rounded-lg
                      hover:bg-gray-600 transition-all duration-300
                      font-semibold border border-gray-600
                      focus:outline-none focus:ring-2 focus:ring-gray-500
                    "
                  >
                    Cancel
                  </button>
                  
                  {selectedFile && !showPreview && !isUploading && (
                    <button
                      onClick={() => handleFileSelection(selectedFile)}
                      className="
                        px-6 py-2 bg-primary-neon text-gray-900 rounded-lg
                        hover:bg-primary-neon/80 transition-all duration-300
                        font-semibold flex items-center gap-2
                        hover:shadow-lg hover:shadow-primary-neon/30
                        focus:outline-none focus:ring-2 focus:ring-primary-neon
                      "
                    >
                      🎭 Generate Recipe
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};