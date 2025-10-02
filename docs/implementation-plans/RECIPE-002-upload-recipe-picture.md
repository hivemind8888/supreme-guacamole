# RECIPE-002 Upload Recipe Picture - Implementation Planning

## User Story

As a user, I want to upload a picture of a dish using drag-and-drop or file selection, so that I can add new recipes to my collection.

## Pre-conditions

- Recipe gallery view is implemented (RECIPE-001)
- Static recipe data structure exists in `recipes.json`
- Basic layout and styling foundations are in place

## Design

### Visual Layout

- Main components:
  - Upload button ("+") in recipe gallery
  - Modal dialog with upload interface
  - Drag-and-drop zone
  - File selection button
  - Preview area
  - Loading state indicator

### Color and Typography

- **Upload Button**:
  - Base: bg-gray-100 dark:bg-gray-800
  - Hover: bg-gray-200 dark:bg-gray-700
  - Active: bg-gray-300 dark:bg-gray-600
  - Icon: text-gray-600 dark:text-gray-300

- **Modal**:
  - Background: bg-white dark:bg-gray-900
  - Overlay: bg-black/50
  - Border: border border-gray-200 dark:border-gray-700
  - Shadow: shadow-xl

- **Drag Zone**:
  - Base: border-2 border-dashed border-gray-300 dark:border-gray-600
  - Active: border-blue-500 dark:border-blue-400
  - Background: bg-gray-50 dark:bg-gray-800

### Interaction Patterns

- **Upload Button**:
  ```
  - Hover: Scale up to 105%
  - Active: Scale down to 95%
  - Transition: 150ms ease-in-out
  ```

- **Drag Zone**:
  ```
  - Drag Over: Border highlight + background change
  - Drop: Success animation
  - Invalid File: Error shake animation
  ```

- **Modal**:
  ```
  - Open: Fade + Scale from center
  - Close: Fade + Scale to center
  - Duration: 200ms ease-out
  ```

### Measurements and Spacing

- **Container**:
  ```
  max-w-lg mx-auto px-4 sm:px-6
  ```

- **Modal**:
  ```
  - Width: max-w-md
  - Padding: p-6
  - Border Radius: rounded-lg
  ```

- **Drag Zone**:
  ```
  - Aspect Ratio: aspect-video
  - Padding: p-8
  - Border Radius: rounded-lg
  ```

### Responsive Behavior

- **Desktop**:
  ```
  - Modal: max-w-md centered
  - Drag Zone: Large interactive area
  - Preview: Side-by-side with controls
  ```

- **Tablet**:
  ```
  - Modal: max-w-sm with padding
  - Preview: Below upload controls
  ```

- **Mobile** (not in MVP):
  ```
  - Future support planned
  ```

## Technical Requirements

### Component Structure

```
src/app/
└── _components/
    ├── UploadButton.tsx           # "+" button trigger
    ├── UploadModal.tsx            # Modal container
    ├── DragDropZone.tsx           # File drop area
    ├── ImagePreview.tsx           # Preview component
    └── hooks/
        └── useImageUpload.ts      # Upload logic hook
```

### Required Components

- UploadButton ⬜
- UploadModal ⬜
- DragDropZone ⬜
- ImagePreview ⬜
- useImageUpload hook ⬜

### State Management Requirements

```typescript
interface UploadState {
  // UI States
  isModalOpen: boolean;
  isDragging: boolean;
  isUploading: boolean;
  
  // File States
  selectedFile: File | null;
  previewUrl: string | null;
  
  // Result States
  uploadedRecipe: Recipe | null;
  error: string | null;
}

// State Updates
const actions = {
  openModal: () => void;
  closeModal: () => void;
  setDragging: (isDragging: boolean) => void;
  handleFileSelect: (file: File) => void;
  clearUpload: () => void;
  setError: (error: string | null) => void;
}
```

## Acceptance Criteria

### Layout & Content

1. Upload Button
   ```
   - Fixed position in recipe gallery
   - "+" icon centered
   - Consistent with design system
   - Hover/active states
   ```

2. Modal Layout
   ```
   - Centered on screen
   - Proper spacing and padding
   - Backdrop overlay
   - Close button
   ```

3. Drag Zone
   ```
   - Clear drop target indication
   - Visual feedback for drag events
   - File type instructions
   - Fallback upload button
   ```

### Functionality

1. Upload Trigger

   - [ ] "+" button visible in recipe gallery
   - [ ] Click opens modal with upload interface
   - [ ] Modal can be closed via button/overlay/escape

2. File Selection

   - [ ] Support drag-and-drop file upload
   - [ ] Support button-click file selection
   - [ ] Validate file is image format
   - [ ] Show preview of selected image
   - [ ] Allow canceling/retrying upload

3. Processing

   - [ ] Show loading state during processing
   - [ ] Randomly select pre-canned recipe
   - [ ] Associate uploaded image with recipe
   - [ ] Add new recipe to gallery
   - [ ] Show success confirmation

### Navigation Rules

- Modal prevents background interaction
- Escape key closes modal
- Clicking overlay closes modal
- Success redirects to recipe gallery

### Error Handling

- Invalid file type shows error message
- Failed upload shows retry option
- Network errors handled gracefully
- Clear error state on retry

## Modified Files

```
src/app/
├── _components/
│   ├── UploadButton.tsx ⬜
│   ├── UploadModal.tsx ⬜
│   ├── DragDropZone.tsx ⬜
│   ├── ImagePreview.tsx ⬜
│   └── RecipeGallery.tsx ⬜ (modify)
├── hooks/
│   └── useImageUpload.ts ⬜
└── _data/
    └── recipes.json ⬜ (modify)
```

## Status

🟨 IN PROGRESS

1. Setup & Configuration

   - [ ] Create new components
   - [ ] Add modal dependencies
   - [ ] Setup file upload utilities

2. Layout Implementation

   - [ ] Upload button in gallery
   - [ ] Modal structure
   - [ ] Drag-drop zone
   - [ ] Preview area

3. Feature Implementation

   - [ ] Drag-drop handlers
   - [ ] File selection
   - [ ] Image preview
   - [ ] Recipe assignment
   - [ ] Gallery integration

4. Testing
   - [ ] File upload validation
   - [ ] UI interaction tests
   - [ ] Error handling
   - [ ] Integration testing

## Dependencies

- TailwindCSS (styling)
- shadcn/ui (modal component)
- Browser File API support
- Pre-canned recipe data

## Related Stories

- RECIPE-001 (View Recipe Gallery)

## Notes

### Technical Considerations

1. Use `window.FileReader` for image preview
2. Implement proper cleanup of object URLs
3. Consider adding file size limits
4. Add file type validation
5. Handle browser compatibility

### Business Requirements

- Support only desktop/laptop in MVP
- Use pre-canned recipes instead of AI
- Maintain consistent gallery appearance
- Ensure responsive design (except mobile)

### Type Definitions

```typescript
interface Recipe {
  id: string;
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  image: {
    url: string;
    alt: string;
  };
  prepTime: string;
  cookTime: string;
  servings: number;
}

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUploadComplete: (recipe: Recipe) => void;
}

interface DragDropZoneProps {
  onFileSelect: (file: File) => void;
  isDragging: boolean;
  accept: string[];
}

interface ImagePreviewProps {
  file: File;
  onClear: () => void;
}
```

## Testing Requirements

### Integration Tests (Target: 80% Coverage)

1. Upload Flow Tests

```typescript
describe('Upload Flow', () => {
  it('should open modal when upload button is clicked', async () => {
    // Test implementation
  });

  it('should handle drag and drop file upload', async () => {
    // Test implementation
  });

  it('should handle file selection via button', async () => {
    // Test implementation
  });

  it('should show preview after file selection', async () => {
    // Test implementation
  });
});
```

2. Validation Tests

```typescript
describe('File Validation', () => {
  it('should reject non-image files', async () => {
    // Test implementation
  });

  it('should handle large files appropriately', async () => {
    // Test implementation
  });
});
```

3. Error Handling

```typescript
describe('Error Handling', () => {
  it('should display error for invalid file types', async () => {
    // Test implementation
  });

  it('should allow retry after failed upload', async () => {
    // Test implementation
  });
});
```

### Component Tests

1. DragDropZone

```typescript
describe('DragDropZone', () => {
  it('should show active state while dragging', async () => {
    // Test implementation
  });

  it('should handle file drops correctly', async () => {
    // Test implementation
  });
});
```

2. ImagePreview

```typescript
describe('ImagePreview', () => {
  it('should display selected image', async () => {
    // Test implementation
  });

  it('should allow removing selected image', async () => {
    // Test implementation
  });
});
```

### Accessibility Tests

```typescript
describe('Accessibility', () => {
  it('should maintain focus trap in modal', async () => {
    // Test implementation
  });

  it('should have proper ARIA labels', async () => {
    // Test implementation
  });

  it('should support keyboard navigation', async () => {
    // Test implementation
  });
});
```