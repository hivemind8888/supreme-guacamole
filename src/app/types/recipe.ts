export interface Recipe {
  id: string;
  title: string;
  imagePath: string;
  image: string;
  createdAt: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  preparationTime?: string;
  servings?: number;
  difficulty?: 'easy' | 'medium' | 'hard';
  cuisine?: 'Southeast Asian' | 'Malaysian' | 'Thai' | 'Vietnamese' | 'Indonesian';
  tags?: string[];
  prepTime?: string;
  cookTime?: string;
  uploadedImage?: File;
}

export interface RecipeFormData {
  name: string;
  description: string;
  imageUrl: string;
}

export interface GalleryState {
  isLoading: boolean;
  error: string | null;
  recipes: Recipe[];
  selectedRecipeId: string | null;
  gridColumns: number;
  containerWidth: number;
}

export interface GalleryActions {
  loadRecipes: () => Promise<void>;
  selectRecipe: (id: string) => void;
  updateLayout: (width: number) => void;
  addRecipe: (recipe: Recipe) => Promise<void>;
}

// Upload Modal Types (Court Documents)
export interface UploadState {
  // UI States (Court Interface)
  isModalOpen: boolean;
  isDragging: boolean;
  isUploading: boolean;
  showPreview: boolean;
  
  // File States (Mystical Assets)
  selectedFile: File | null;
  previewUrl: string | null;
  
  // Recipe States (Feast Management)
  generatedRecipe: Recipe | null;
  previewRecipe: Recipe | null;
  
  // Animation States (Jester Magic)
  isAnimating: boolean;
  uploadProgress: number;
  
  // Error States (Court Troubles)
  error: string | null;
  validationErrors: Record<string, string>;
}

export interface UploadActions {
  openModal: () => void;
  closeModal: () => void;
  setDragging: (isDragging: boolean) => void;
  handleFileSelect: (file: File) => void;
  generateRecipePreview: () => Promise<void>;
  acceptRecipe: () => Promise<void>;
  editRecipe: (updates: Partial<Recipe>) => void;
  clearUpload: () => void;
  setError: (error: string | null) => void;
  setUploadProgress: (progress: number) => void;
}

export interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUploadComplete: (recipe: Recipe) => void;
  className?: string;
}

export interface DragDropZoneProps {
  onFileSelect: (file: File) => void;
  isDragging: boolean;
  isUploading: boolean;
  accept: string[];
  maxSize: number;
  error?: string;
  uploadProgress?: number;
}

export interface ImagePreviewProps {
  file: File;
  onClear: () => void;
  onEdit: () => void;
  className?: string;
}

export interface RecipePreviewState {
  isGenerating: boolean;
  recipe: Recipe | null;
  isEditing: boolean;
  editedFields: Partial<Recipe>;
}