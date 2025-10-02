# RECIPE-006 Recipe Details Preview - Implementation Planning

## User Story

As a recipe contributor, I want to see an auto-generated preview of the recipe's name and description based on the uploaded image, so that I can quickly share recipes with the community.

## Pre-conditions

- Upload modal component exists and handles image selection
- Recipe gallery displays recipe cards with consistent layout
- Recipe detail view functionality is implemented
- Existing recipe card components are available for reuse

## Design

### Visual Layout

- **Preview Modal Layout**:
  - Image preview section (left/top)
  - Auto-generated preview section (right/bottom)
  - Confirmation buttons at bottom

### Color and Typography

- **Form Fields**:
  ```
  - Background: bg-white dark:bg-gray-800
  - Border: border border-gray-300 dark:border-gray-600
  - Focus: ring-2 ring-blue-500 focus:border-blue-500
  ```

- **Preview Card**:
  ```
  - Background: bg-white dark:bg-gray-800 shadow-md
  - Typography:
    - Title: font-semibold text-xl text-gray-900 dark:text-white
    - Description: text-gray-600 dark:text-gray-300
  ```

- **Buttons**:
  ```
  - Primary: bg-blue-500 text-white hover:bg-blue-600
  - Secondary: bg-gray-200 text-gray-800 hover:bg-gray-300
  ```

### Interaction Patterns

- **Form Interaction**:
  - Real-time validation
  - Instant preview updates
  - Smooth transitions between states

- **Preview Card**:
  - Matches existing recipe card hover effects
  - Interactive but clearly in preview mode

### Measurements and Spacing

- **Modal Layout**:
  ```
  max-w-4xl mx-auto px-4 sm:px-6
  ```

- **Component Spacing**:
  ```
  - Form fields: space-y-4
  - Sections: space-y-6
  - Preview area: mt-8
  - Button group: mt-6 space-x-4
  ```

### Responsive Behavior

- **Desktop (lg: 1024px+)**:
  ```
  - Two-column layout for form/preview
  - Side-by-side image and form
  - Full-width preview card
  ```

- **Tablet/Mobile (< 1024px)**:
  ```
  - Single column layout
  - Stacked image, form, and preview
  - Scrollable modal content
  ```

## Technical Requirements

### Component Structure

```
src/app/_components/
├── UploadModal.tsx               # Existing upload modal
├── RecipePreviewCard.tsx         # Preview card component
└── hooks/
    ├── useRecipePreview.ts       # Preview state management
    └── useRecipeGeneration.ts    # Recipe generation logic
```

### Required Components

- RecipePreviewCard ⬜ (New)
- useRecipePreview hook ⬜ (New)
- useRecipeGeneration hook ⬜ (New)
- Modified UploadModal ⬜ (Update)

### State Management Requirements

```typescript
interface RecipePreviewState {
  // Generated States
  name: string;
  description: string;
  imageUrl: string;
  
  // UI States
  isSubmitting: boolean;
  isLoading: boolean;
}

interface RecipePreviewActions {
  setImageUrl: (url: string) => void;
  generateRecipeDetails: () => Promise<void>;
  submitRecipe: () => Promise<void>;
  reset: () => void;
}
```

## Acceptance Criteria

### Layout & Content

1. Form Section
   ```
   - Recipe name input field
   - Recipe description textarea
   - Validation feedback
   - Preview toggle button
   ```

2. Preview Section
   ```
   - Recipe card layout
   - Responsive image display
   - Formatted text content
   - Visual feedback for preview state
   ```

3. Action Buttons
   ```
   - Back to edit button
   - Submit button (disabled if invalid)
   - Cancel button
   ```

### Functionality

1. Recipe Generation

   - [ ] Auto-generate recipe name from precanned recipes (initially)
   - [ ] Auto-generate recipe description from precanned recipes (initially)
   - [ ] Show loading state during generation
   - [ ] Handle generation failures gracefully

2. Preview Display

   - [ ] Show recipe card with generated details
   - [ ] Match existing recipe card styling
   - [ ] Show loading states during generation
   - [ ] Display error state if generation fails

3. Upload Process
   - [ ] Automatic submission after generation
   - [ ] Show loading state during upload
   - [ ] Handle upload success/failure
   - [ ] Redirect to gallery on success

### Navigation Rules

- Preview is automatically shown after image upload
- Can cancel upload process at any time
- Redirect to gallery after successful upload

### Error Handling

- Show generation error messages in modal
- Show upload error messages in modal
- Allow retry on generation/upload failure
- Fallback to default recipe if generation fails

## Modified Files

```
src/app/_components/
├── UploadModal.tsx ⬜             # Update with preview functionality
├── RecipePreviewForm.tsx ⬜       # New form component
├── RecipePreviewCard.tsx ⬜       # New preview component
└── hooks/
    └── useRecipePreview.ts ⬜     # New custom hook
```

## Status

🟨 IN PROGRESS

1. Setup & Configuration

   - [ ] Create new components
   - [ ] Set up state management
   - [ ] Configure form validation

2. Layout Implementation

   - [ ] Form layout and styling
   - [ ] Preview card component
   - [ ] Responsive design
   - [ ] Modal flow updates

3. Feature Implementation

   - [ ] Form validation logic
   - [ ] Preview functionality
   - [ ] Upload integration
   - [ ] Error handling

4. Testing
   - [ ] Form validation tests
   - [ ] Preview rendering tests
   - [ ] Upload flow tests
   - [ ] Responsive behavior tests

## Dependencies

- Existing UploadModal component
- Recipe card styling and layout
- Image upload functionality
- Recipe gallery integration

## Related Stories

- RECIPE-001 (View Recipe Gallery)
- RECIPE-002 (Upload Recipe Picture)

## Notes

### Technical Considerations

1. Implement precanned recipe matching system (initial implementation)
2. Prepare for future AI-based recipe generation integration
3. Implement proper image optimization for preview
4. Ensure consistent styling with existing recipe cards
5. Handle large images gracefully
6. Maintain accessibility for generated content

### Business Requirements

- Clear preview of how recipe will appear in gallery
- Consistent user experience with existing features
- Seamless integration with upload flow
- Proper validation to ensure quality content

### API Integration

#### Type Definitions

```typescript
interface RecipeFormData {
  name: string;
  description: string;
  imageUrl: string;
}

interface RecipePreviewProps {
  data: RecipeFormData;
  isPreview: boolean;
  onEdit: () => void;
  onSubmit: () => Promise<void>;
}

interface RecipeFormProps {
  initialData?: RecipeFormData;
  onSubmit: (data: RecipeFormData) => void;
  onPreview: (data: RecipeFormData) => void;
  onCancel: () => void;
}
```

### Custom Hook Implementation

```typescript
### Custom Hooks Implementation

```typescript
// Recipe generation hook
const useRecipeGeneration = () => {
  const [recipeData, setRecipeData] = useState<RecipeData>({
    name: '',
    description: '',
    imageUrl: ''
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const generateRecipe = useCallback(async (imageUrl: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Initially, match with precanned recipes
      // TODO: Replace with AI-based generation in future
      const matchedRecipe = await matchPrecannedRecipe(imageUrl);
      
      setRecipeData({
        name: matchedRecipe.name,
        description: matchedRecipe.description,
        imageUrl
      });
    } catch (err) {
      setError('Failed to generate recipe details');
      // Fallback to default recipe
      setRecipeData({
        name: 'New Recipe',
        description: 'A delicious homemade dish',
        imageUrl
      });
    } finally {
      setIsLoading(false);
    }
  }, []);
  
  return {
    recipeData,
    isLoading,
    error,
    generateRecipe
  };
};
```

## Testing Requirements

### Integration Tests (Target: 80% Coverage)

1. Form Validation Tests

```typescript
describe('Recipe Preview Form', () => {
  it('should validate required fields', async () => {
    // Test implementation
  });

  it('should show validation errors for empty fields', async () => {
    // Test implementation
  });

  it('should enable preview when form is valid', async () => {
    // Test implementation
  });
});
```

2. Preview Functionality Tests

```typescript
describe('Recipe Preview', () => {
  it('should render preview card with form data', async () => {
    // Test implementation
  });

  it('should update preview in real-time', async () => {
    // Test implementation
  });

  it('should maintain consistent styling with recipe cards', async () => {
    // Test implementation
  });
});
```

3. Upload Flow Tests

```typescript
describe('Recipe Upload Flow', () => {
  it('should handle successful upload', async () => {
    // Test implementation
  });

  it('should handle upload errors', async () => {
    // Test implementation
  });

  it('should show loading state during upload', async () => {
    // Test implementation
  });
});
```

### Accessibility Tests

```typescript
describe('Accessibility', () => {
  it('should maintain keyboard navigation in preview mode', async () => {
    // Test implementation
  });

  it('should announce validation errors to screen readers', async () => {
    // Test implementation
  });

  it('should have proper ARIA labels for preview state', async () => {
    // Test implementation
  });
});
```