'use client';

import { useState } from 'react';
import { Edit3, Check, Crown, Clock, Users } from 'lucide-react';
import { Recipe } from '../types/recipe';

interface RecipePreviewCardProps {
  recipe?: Recipe | null;
  isGenerating?: boolean;
  isPreview?: boolean;
  isEditing?: boolean;
  onEdit?: () => void;
  onSave?: (updates: Partial<Recipe>) => void;
  onAccept?: () => Promise<void>;
  onCancel?: () => void;
  className?: string;
}

export const RecipePreviewCard: React.FC<RecipePreviewCardProps> = ({
  recipe,
  isGenerating = false,
  isPreview = false,
  isEditing = false,
  onEdit,
  onSave,
  onAccept,
  onCancel,
  className = '',
}) => {
  const [editTitle, setEditTitle] = useState(recipe?.title || '');
  const [editDescription, setEditDescription] = useState(recipe?.description || '');

  // Debug logging for Royal Court
  console.log('🎭 RecipePreviewCard Debug:', {
    hasRecipe: !!recipe,
    isGenerating,
    isPreview,
    isEditing,
    hasOnAccept: !!onAccept,
    recipeTitle: recipe?.title
  });

  const handleSave = () => {
    if (onSave) {
      onSave({
        title: editTitle,
        description: editDescription
      });
    }
  };

  // Jester Juggling Loading State
  if (isGenerating) {
    return (
      <div className={`
        scroll-modal-content p-8 text-center space-y-6
        ${className}
      `}>
        <div className="jester-juggling-animation text-6xl">🎭</div>
        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-primary-neon">
            Jester Magic in Progress...
          </h3>
          <p className="text-gray-300">
            Our court jester is consulting the royal recipe scrolls
          </p>
          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-primary-neon rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-secondary-neon rounded-full animate-bounce animation-delay-100"></div>
            <div className="w-2 h-2 bg-accent-neon rounded-full animate-bounce animation-delay-200"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!recipe) {
    return null;
  }

  return (
    <div className={`
      scroll-modal-content overflow-hidden
      transform transition-all duration-300 hover:scale-105
      ${isPreview ? 'ring-2 ring-primary-neon shadow-primary-neon/50' : ''}
      ${className}
    `}>
      {/* Royal Crown Header */}
      <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-primary-neon/10 to-secondary-neon/10 border-b border-primary-neon/20">
        <Crown className="text-primary-neon" size={24} />
        <h2 className="text-xl font-bold text-primary-neon">
          Royal Recipe Preview
        </h2>
        {isPreview && (
          <span className="ml-auto px-3 py-1 bg-primary-neon text-gray-900 rounded-full text-sm font-semibold">
            🎭 Preview
          </span>
        )}
      </div>

      {/* Recipe Image with Tapestry Frame */}
      <div className="relative">
        {recipe.image && (
          <div className="relative h-48 overflow-hidden">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-full object-cover filter brightness-110"
            />
            {/* Mystical Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
            
            {/* Cuisine Badge */}
            <div className="absolute top-3 left-3">
              <span className="px-3 py-1 bg-accent-neon/90 text-gray-900 rounded-full text-sm font-semibold backdrop-blur-sm">
                {recipe.cuisine} 🍜
              </span>
            </div>

            {/* Difficulty Crown */}
            <div className="absolute top-3 right-3">
              <span className={`
                px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm
                ${recipe.difficulty === 'easy' ? 'bg-green-500/90 text-white' :
                  recipe.difficulty === 'medium' ? 'bg-yellow-500/90 text-gray-900' :
                  'bg-red-500/90 text-white'
                }
              `}>
                {recipe.difficulty === 'easy' ? '👑 Easy' : 
                 recipe.difficulty === 'medium' ? '👑👑 Medium' : 
                 '👑👑👑 Hard'}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Recipe Details */}
      <div className="p-6 space-y-4">
        {/* Title Section */}
        <div>
          {isEditing ? (
            <input
              type="text"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              className="
                w-full text-2xl font-bold bg-transparent text-white 
                border-b-2 border-primary-neon focus:outline-none focus:border-secondary-neon
                transition-colors duration-300
              "
              placeholder="Royal feast title..."
            />
          ) : (
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
              🍽️ {recipe.title}
            </h3>
          )}
        </div>

        {/* Description */}
        <div>
          {isEditing ? (
            <textarea
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
              rows={3}
              className="
                w-full bg-gray-800 text-gray-300 rounded-lg p-3
                border border-primary-neon/30 focus:border-primary-neon
                focus:outline-none transition-colors duration-300
                resize-none
              "
              placeholder="Describe thy royal feast..."
            />
          ) : (
            <p className="text-gray-300 leading-relaxed">
              {recipe.description}
            </p>
          )}
        </div>

        {/* Recipe Metadata */}
        <div className="grid grid-cols-3 gap-4 py-4 border-t border-gray-700">
          <div className="text-center">
            <Clock className="text-accent-neon mx-auto mb-1" size={20} />
            <p className="text-xs text-gray-400">Total Time</p>
            <p className="text-sm font-semibold text-white">{recipe.preparationTime}</p>
          </div>
          <div className="text-center">
            <Users className="text-secondary-neon mx-auto mb-1" size={20} />
            <p className="text-xs text-gray-400">Serves</p>
            <p className="text-sm font-semibold text-white">{recipe.servings}</p>
          </div>
          <div className="text-center">
            <span className="text-primary-neon text-xl block mb-1">🏷️</span>
            <p className="text-xs text-gray-400">Tags</p>
            <p className="text-sm font-semibold text-white">{recipe.tags?.length || 0}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4">
          {isEditing ? (
            <>
              <button
                onClick={handleSave}
                className="
                  flex-1 px-6 py-3 bg-primary-neon text-gray-900 rounded-lg
                  hover:bg-primary-neon/80 transition-all duration-300
                  font-semibold flex items-center justify-center gap-2
                  hover:shadow-lg hover:shadow-primary-neon/30
                "
              >
                <Check size={20} />
                Save Changes
              </button>
              <button
                onClick={onCancel}
                className="
                  px-6 py-3 bg-gray-700 text-white rounded-lg
                  hover:bg-gray-600 transition-all duration-300
                  font-semibold
                "
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              {onEdit && (
                <button
                  onClick={onEdit}
                  className="
                    px-6 py-3 bg-accent-neon text-gray-900 rounded-lg
                    hover:bg-accent-neon/80 transition-all duration-300
                    font-semibold flex items-center justify-center gap-2
                    hover:shadow-lg hover:shadow-accent-neon/30
                  "
                >
                  <Edit3 size={20} />
                  Edit Recipe
                </button>
              )}
              
              {/* ROYAL ACCEPT BUTTON - ALWAYS VISIBLE WHEN onAccept PROVIDED */}
              <button
                onClick={onAccept}
                disabled={!onAccept}
                className={`
                  royal-accept-button
                  flex-1 px-8 py-4 
                  rounded-xl 
                  transition-all duration-300
                  flex items-center justify-center gap-3
                  disabled:opacity-30 disabled:cursor-not-allowed
                  disabled:hover:scale-100 disabled:hover:shadow-none
                  disabled:bg-gray-600 disabled:border-gray-500
                  animate-pulse hover:animate-none
                  font-black text-xl
                  ${!onAccept ? 'pointer-events-none' : ''}
                `}
                title="Accept this royal recipe to thy gallery!"
              >
                <Crown size={28} className="animate-bounce" />
                <span className="drop-shadow-lg tracking-wide">
                  🎭 ACCEPT TO ROYAL GALLERY 👑
                </span>
              </button>
            </>
          )}
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center space-x-4 pt-4 text-2xl opacity-60">
          <span>🎭</span>
          <span>🍜</span>
          <span>🎵</span>
          <span>🪕</span>
        </div>
      </div>
    </div>
  );
};