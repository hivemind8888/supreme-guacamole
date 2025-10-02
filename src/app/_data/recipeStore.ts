import { Recipe } from '../types/recipe';

// Global recipe store for uploaded recipes
class RecipeStore {
  private uploadedRecipes: Recipe[] = [];
  private listeners: (() => void)[] = [];
  private blobUrls: Set<string> = new Set(); // Track blob URLs to prevent cleanup

  addRecipe(recipe: Recipe) {
    console.log('🎭 Adding recipe to royal store with image:', recipe.image);
    
    // Track blob URLs to prevent accidental cleanup
    if (recipe.image && recipe.image.startsWith('blob:')) {
      this.blobUrls.add(recipe.image);
    }
    if (recipe.imagePath && recipe.imagePath.startsWith('blob:')) {
      this.blobUrls.add(recipe.imagePath);
    }
    
    this.uploadedRecipes.push(recipe);
    this.notifyListeners();
  }

  getRecipe(id: string): Recipe | null {
    const recipe = this.uploadedRecipes.find(recipe => recipe.id === id) || null;
    if (recipe) {
      console.log('🎭 Found recipe in store:', recipe.title, 'Image URL:', recipe.image);
    }
    return recipe;
  }

  getAllUploadedRecipes(): Recipe[] {
    console.log('🎭 Returning all uploaded recipes:', this.uploadedRecipes.length);
    return [...this.uploadedRecipes];
  }

  subscribe(listener: () => void) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  private notifyListeners() {
    console.log('🎭 Notifying', this.listeners.length, 'listeners of store update');
    this.listeners.forEach(listener => listener());
  }

  // Method to check if a blob URL is being used by stored recipes
  isBlobUrlInUse(url: string): boolean {
    return this.blobUrls.has(url);
  }
}

// Singleton instance for royal recipe management
export const recipeStore = new RecipeStore();