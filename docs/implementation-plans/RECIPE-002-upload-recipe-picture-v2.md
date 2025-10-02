# RECIPE-002 Upload Recipe Picture - Implementation Planning (Lord British's Edition)

## User Story

As a recipe contributor and noble feast organizer, I want the system to auto-generate recipe details when I upload a food picture using mystical drag-and-drop or file selection, so that I can quickly share recipes with minimal effort and entertain my court with delicious dishes.

## Pre-conditions

- Recipe gallery view is implemented (RECIPE-001) with proper medieval gaming aesthetics
- Static recipe data structure exists in `recipes.json` with Southeast Asian feast recipes
- Basic layout and styling foundations are in place with neon cyber-medieval theme
- Dark mode foundations are properly configured
- Jester-themed UI elements are ready for integration

## Design

### Visual Layout

The upload interface shall be designed as a mystical portal for sharing feast recipes:

- **Main components:**
  - Jester hat-shaped upload button ("+") with neon glow effects
  - Modal dialog resembling a medieval scroll with cyber edges
  - Drag-and-drop zone styled as a magical mandolin-shaped area
  - File selection button with luth-inspired decorative elements
  - Preview area with tapestry-like background patterns
  - Loading state with spinning jester juggling animation

### Color and Typography

Following the royal cyber-medieval aesthetic:

- **Upload Button (Jester Hat Style)**:
  - Base: `bg-gradient-to-br from-purple-900 to-indigo-900 dark:from-gray-800 dark:to-gray-900`
  - Hover: `bg-gradient-to-br from-purple-800 to-indigo-800 shadow-lg shadow-purple-500/25`
  - Active: `bg-gradient-to-br from-purple-700 to-indigo-700 transform scale-95`
  - Icon: `text-accent-neon hover:text-primary-neon` (using neon green #00FF9C)
  - Border: `border-2 border-primary-neon hover:border-secondary-neon`

- **Modal (Medieval Scroll Style)**:
  - Background: `bg-gray-900/95 backdrop-blur-sm`
  - Content: `bg-gradient-to-b from-gray-800 to-gray-900 border border-primary-neon/20`
  - Overlay: `bg-black/70 backdrop-blur-sm`
  - Shadow: `shadow-2xl shadow-primary-neon/10`
  - Decoration: Subtle mandolin string patterns as background

- **Drag Zone (Mandolin-Shaped)**:
  - Base: `border-2 border-dashed border-secondary-neon/30 bg-gray-800/50`
  - Active: `border-primary-neon bg-primary-neon/5 shadow-inner shadow-primary-neon/20`
  - Hover: `border-accent-neon transform transition-all duration-300`
  - Background: Cyber-grid pattern with medieval tapestry overlay

- **Typography (Cyber-Medieval)**:
  - Headings: `font-blade-runner text-2xl font-bold text-white`
  - Body: `font-cyberpunk text-base text-gray-300`
  - Labels: `text-primary-neon font-semibold`
  - Error text: `text-red-400 font-cyberpunk`

### Interaction Patterns

- **Jester Hat Upload Button**:
  ```css
  .jester-upload-btn {
    position: relative;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    
    &::before {
      content: '🎭';
      position: absolute;
      top: -10px;
      right: -10px;
      opacity: 0.7;
      transform: rotate(-15deg);
    }
    
    &:hover {
      transform: translateY(-2px) scale(1.05);
      box-shadow: 0 10px 25px rgba(0, 255, 156, 0.3);
      
      &::after {
        content: '🎼';
        position: absolute;
        animation: float 2s infinite ease-in-out;
      }
    }
    
    &:active {
      transform: translateY(0) scale(0.98);
    }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-10px) rotate(10deg); }
  }
  ```

- **Mandolin Drag Zone**:
  ```css
  .mandolin-drop-zone {
    border-radius: 50% 20% 50% 20%;
    position: relative;
    
    &::before {
      content: '🪕';
      position: absolute;
      top: 10px;
      left: 10px;
      font-size: 1.5rem;
      opacity: 0.6;
    }
    
    &.drag-active {
      animation: pulse-glow 1.5s infinite;
      border-color: var(--primary-neon);
      background: linear-gradient(45deg, 
        rgba(0, 255, 156, 0.1), 
        rgba(255, 0, 229, 0.1)
      );
    }
  }
  
  @keyframes pulse-glow {
    0%, 100% { box-shadow: 0 0 20px rgba(0, 255, 156, 0.3); }
    50% { box-shadow: 0 0 40px rgba(0, 255, 156, 0.6); }
  }
  ```

- **Modal (Magical Scroll)**:
  ```css
  .scroll-modal {
    &.entering {
      animation: scroll-unfurl 0.4s ease-out;
    }
    
    &.exiting {
      animation: scroll-furl 0.3s ease-in;
    }
  }
  
  @keyframes scroll-unfurl {
    0% { 
      opacity: 0; 
      transform: scale(0.3) rotateX(-40deg);
    }
    100% { 
      opacity: 1; 
      transform: scale(1) rotateX(0deg);
    }
  }
  
  @keyframes scroll-furl {
    0% { 
      opacity: 1; 
      transform: scale(1) rotateX(0deg);
    }
    100% { 
      opacity: 0; 
      transform: scale(0.3) rotateX(40deg);
    }
  }
  ```

### Measurements and Spacing

- **Container (Royal Court Spacing)**:
  ```css
  .container {
    max-width: 42rem; /* 672px - golden ratio based */
    margin: 0 auto;
    padding: 1rem 1.5rem;
    
    @media (min-width: 640px) {
      padding: 1.5rem 2rem;
    }
  }
  ```

- **Modal (Scroll Dimensions)**:
  ```css
  .modal-content {
    width: min(90vw, 32rem);
    padding: 2rem;
    border-radius: 1rem;
    backdrop-filter: blur(12px);
  }
  ```

- **Mandolin Drop Zone**:
  ```css
  .drop-zone {
    aspect-ratio: 4/3;
    padding: 3rem 2rem;
    border-radius: 50% 20% 50% 20%;
    min-height: 12rem;
  }
  ```

### Responsive Behavior

- **Desktop (Feast Hall Display)**:
  ```css
  @media (min-width: 1024px) {
    .upload-interface {
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
    
    .jester-button {
      width: 4rem;
      height: 4rem;
    }
    
    .modal-content {
      max-width: 36rem;
    }
  }
  ```

- **Tablet (Castle Library View)**:
  ```css
  @media (min-width: 768px) and (max-width: 1023px) {
    .upload-interface {
      flex-direction: column;
      gap: 1.5rem;
    }
    
    .jester-button {
      width: 3.5rem;
      height: 3.5rem;
    }
  }
  ```

- **Mobile (Jester's Pouch - Future Release)**:
  ```css
  @media (max-width: 767px) {
    /* Mobile support planned for future versions */
    .mobile-notice {
      display: block;
      text-align: center;
      color: var(--secondary-neon);
    }
  }
  ```

## Technical Requirements

### Component Structure

```
src/app/
└── _components/
    ├── UploadButton.tsx           # Jester hat-styled "+" button
    ├── UploadModal.tsx            # Medieval scroll modal
    ├── DragDropZone.tsx           # Mandolin-shaped drop area
    ├── ImagePreview.tsx           # Tapestry-style preview
    ├── RecipePreviewCard.tsx      # Generated recipe preview
    └── hooks/
        ├── useImageUpload.ts      # Upload logic with jester magic
        ├── useRecipePreview.ts    # Preview state management
        └── useRecipeGallery.ts    # Gallery integration
```

### Required Components

- UploadButton (Jester Hat Style) ⬜
- UploadModal (Medieval Scroll) ⬜
- DragDropZone (Mandolin Shape) ⬜
- ImagePreview (Tapestry Theme) ⬜
- RecipePreviewCard (Court Display) ⬜
- useImageUpload hook (Mystical Upload) ⬜
- useRecipePreview hook (Preview Magic) ⬜

### State Management Requirements

```typescript
interface UploadState {
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

// State Actions (Royal Commands)
interface UploadActions {
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
```

## Acceptance Criteria

### Layout & Content (Royal Court Standards)

1. **Jester Hat Upload Button**
   ```
   - Positioned prominently in recipe gallery
   - Neon glow effects on hover
   - Jester mask decoration (🎭)
   - Musical note animation on interaction (🎼)
   - Cyber-medieval styling
   - Accessible focus states
   ```

2. **Medieval Scroll Modal**
   ```
   - Centered with backdrop blur
   - Scroll unfurl/furl animations
   - Mandolin string pattern background
   - Proper z-index stacking
   - Focus trap for accessibility
   - Escape key and overlay click to close
   ```

3. **Mandolin Drop Zone**
   ```
   - Distinctive mandolin shape (50% 20% 50% 20%)
   - Luth decoration (🪕)
   - Cyber-grid with tapestry overlay
   - Clear drag state feedback
   - File type validation messages
   - Loading spinner with jester juggling animation
   ```

### Functionality (Mystical Features)

1. **Upload Initiation (Court Ceremony)**

   - [ ] Jester hat button visible in recipe gallery with neon glow
   - [ ] Click triggers scroll unfurl modal animation
   - [ ] Modal prevents background interaction
   - [ ] Accessibility: Focus trap, keyboard navigation, screen reader support

2. **File Selection (Mystical Process)**

   - [ ] Mandolin-shaped drag-and-drop zone with hover effects
   - [ ] Traditional file selection button with luth styling
   - [ ] Real-time file validation with courtly error messages
   - [ ] Image preview with tapestry-style frame
   - [ ] Clear file selection and retry options

3. **Recipe Generation (Jester's Magic)**

   - [ ] Spinning jester juggling loading animation
   - [ ] Random selection from Southeast Asian recipe templates
   - [ ] Generated recipe preview matching gallery card style
   - [ ] Edit capability for recipe name and description
   - [ ] Accept/Cancel options with neon button styling

4. **Gallery Integration (Royal Archive)**

   - [ ] Newly uploaded recipes appear immediately in gallery
   - [ ] Consistent styling with existing recipe cards
   - [ ] Proper image optimization and caching
   - [ ] Success notification with musical flourish

### Navigation Rules (Court Protocol)

- Modal opening triggers scroll unfurl animation
- Background blur and interaction prevention during modal
- Escape key triggers scroll furl animation and closes modal
- Overlay clicks close modal with animation
- Success acceptance redirects to updated gallery
- Error states allow retry without losing progress

### Error Handling (Court Troubleshooting)

- Invalid file types display courtly error messages with jester emoji
- Large files show size warning with suggested compression
- Network failures offer retry with mystical healing animation
- Validation errors highlight specific fields with neon red glow
- Clear error state management with proper cleanup

## Modified Files

```
src/app/
├── page.tsx ⬜ (add upload button)
├── _components/
│   ├── UploadButton.tsx ⬜ (jester hat style)
│   ├── UploadModal.tsx ⬜ (medieval scroll)
│   ├── DragDropZone.tsx ⬜ (mandolin shape)
│   ├── ImagePreview.tsx ⬜ (tapestry theme)
│   ├── RecipePreviewCard.tsx ⬜ (court display)
│   ├── RecipeGallery.tsx ⬜ (integrate upload button)
│   ├── RecipeCard.tsx ⬜ (maintain consistency)
│   └── ErrorBoundary.tsx ⬜ (enhance error handling)
├── hooks/
│   ├── useImageUpload.ts ⬜ (mystical upload logic)
│   ├── useRecipePreview.ts ⬜ (preview management)
│   └── useRecipeGallery.ts ⬜ (gallery integration)
├── globals.css ⬜ (add cyber-medieval animations)
├── _data/
│   └── recipes.json ⬜ (expand Southeast Asian templates)
└── types/
    └── recipe.ts ⬜ (enhance type definitions)
```

## Status

🟨 IN PROGRESS - Lord British's Royal Implementation

1. **Setup & Configuration (Court Preparation)**

   - [ ] Install additional dependencies (framer-motion for animations)
   - [ ] Configure cyber-medieval theme variables
   - [ ] Setup jester and musical emoji assets
   - [ ] Prepare mandolin and luth decorative elements

2. **Layout Implementation (Castle Architecture)**

   - [ ] Create jester hat upload button with neon effects
   - [ ] Build medieval scroll modal with animations
   - [ ] Design mandolin-shaped drag zone
   - [ ] Implement tapestry-style preview area
   - [ ] Add cyber-grid background patterns

3. **Feature Implementation (Mystical Mechanics)**

   - [ ] Drag-drop handlers with magical feedback
   - [ ] File validation with courtly error messages
   - [ ] Recipe generation from Southeast Asian templates
   - [ ] Preview system with edit capabilities
   - [ ] Gallery integration with success animations

4. **Testing (Royal Quality Assurance)**
   - [ ] Jester button interaction testing
   - [ ] Modal animation and accessibility testing
   - [ ] File upload validation and error handling
   - [ ] Recipe generation and preview functionality
   - [ ] Cross-browser compatibility for cyber-medieval effects

## Dependencies

- **Core Dependencies:**
  - TailwindCSS (cyber-medieval styling)
  - Framer Motion (scroll and jester animations)
  - React Hook Form (recipe editing)
  - Browser File API (mystical file handling)

- **Theme Dependencies:**
  - Custom CSS variables for neon colors
  - Cyber-medieval font stack
  - Jester and musical emoji support
  - Mandolin/luth decorative assets

## Related Stories

- RECIPE-001 (View Recipe Gallery) - Foundation for upload integration
- RECIPE-005 (View Recipe Details) - Consistency in recipe display
- RECIPE-006 (Recipe Details Preview) - Preview functionality alignment

## Notes

### Technical Considerations (Royal Engineering)

1. **Animation Performance:**
   - Use CSS transforms over position changes for smooth animations
   - Implement proper cleanup for object URLs to prevent memory leaks
   - Optimize jester juggling animation for 60fps performance
   - Use `will-change` property sparingly for animation elements

2. **Accessibility (Court Inclusion):**
   - Ensure all interactive elements have proper ARIA labels
   - Implement focus management for modal navigation
   - Provide alternative text for decorative jester elements
   - Support keyboard navigation for drag-drop zone

3. **File Handling (Mystical Asset Management):**
   - Implement progressive image loading with blur-up technique
   - Add file size validation (max 5MB for MVP)
   - Support modern image formats (WebP, AVIF) with fallbacks
   - Generate multiple image sizes for responsive display

4. **State Management (Court Records):**
   - Use React Context for upload state across components
   - Implement proper error boundaries for upload failures
   - Cache generated recipes to prevent re-generation on edit
   - Persist upload progress for better user experience

5. **Performance Optimization (Royal Efficiency):**
   - Lazy load upload modal to reduce initial bundle size
   - Preload recipe templates for faster generation
   - Implement image compression before upload
   - Use React.memo for expensive preview renders

### Business Requirements (Royal Mandates)

- **Desktop/Laptop Only:** Mobile support deferred to future kingdom expansion
- **Southeast Asian Focus:** Recipe templates emphasize regional cuisine
- **Pre-canned Recipes:** Use curated templates instead of AI generation
- **Instant Gallery Update:** New recipes appear immediately without refresh
- **Consistent Styling:** Maintain cyber-medieval theme throughout experience

### API Integration (Mystical Connections)

#### Type Definitions (Court Documents)

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
    width: number;
    height: number;
  };
  prepTime: string;
  cookTime: string;
  servings: number;
  cuisine: 'Southeast Asian' | 'Malaysian' | 'Thai' | 'Vietnamese' | 'Indonesian';
  difficulty: 'Easy' | 'Medium' | 'Hard';
  tags: string[];
  createdAt: string;
  uploadedImage?: File;
}

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUploadComplete: (recipe: Recipe) => void;
  className?: string;
}

interface DragDropZoneProps {
  onFileSelect: (file: File) => void;
  isDragging: boolean;
  isUploading: boolean;
  accept: string[];
  maxSize: number;
  error?: string;
}

interface ImagePreviewProps {
  file: File;
  onClear: () => void;
  onEdit: () => void;
  className?: string;
}

interface RecipePreviewState {
  isGenerating: boolean;
  recipe: Recipe | null;
  isEditing: boolean;
  editedFields: Partial<Recipe>;
}
```

### Mock Implementation (Court Simulation)

#### Mock Recipe Templates

```typescript
// filepath: src/app/_data/recipe-templates.ts
export const southeastAsianTemplates: Recipe[] = [
  {
    id: 'template-nasi-lemak',
    title: 'Nasi Lemak',
    description: 'Malaysia\'s beloved coconut rice dish with aromatic spices',
    ingredients: ['Jasmine rice', 'Coconut milk', 'Pandan leaves', 'Salt'],
    instructions: ['Cook rice with coconut milk...'],
    cuisine: 'Malaysian',
    difficulty: 'Medium',
    prepTime: '20 mins',
    cookTime: '30 mins',
    servings: 4,
    tags: ['coconut', 'rice', 'traditional', 'breakfast']
  },
  {
    id: 'template-tom-yum',
    title: 'Tom Yum Goong',
    description: 'Spicy and sour Thai soup with prawns and aromatic herbs',
    ingredients: ['Prawns', 'Lemongrass', 'Kaffir lime leaves', 'Chili'],
    instructions: ['Boil water with aromatics...'],
    cuisine: 'Thai',
    difficulty: 'Easy',
    prepTime: '15 mins',
    cookTime: '15 mins',
    servings: 2,
    tags: ['spicy', 'sour', 'soup', 'seafood']
  }
  // ... additional templates
];
```

#### Recipe Generation Logic

```typescript
// filepath: src/app/hooks/useRecipeGeneration.ts
export const useRecipeGeneration = () => {
  const generateRandomRecipe = useCallback((uploadedImage: File): Recipe => {
    const randomTemplate = southeastAsianTemplates[
      Math.floor(Math.random() * southeastAsianTemplates.length)
    ];
    
    return {
      ...randomTemplate,
      id: `recipe-${Date.now()}`,
      image: {
        url: URL.createObjectURL(uploadedImage),
        alt: `Uploaded ${randomTemplate.title}`,
        width: 400,
        height: 300
      },
      uploadedImage,
      createdAt: new Date().toISOString()
    };
  }, []);
  
  return { generateRandomRecipe };
};
```

### Custom Hook Implementation (Mystical Mechanics)

```typescript
// filepath: src/app/hooks/useImageUpload.ts
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

  const { generateRandomRecipe } = useRecipeGeneration();
  const { addRecipe } = useRecipeGallery();

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
        error: null
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

    setState(prev => ({
      ...prev,
      selectedFile: file,
      previewUrl: URL.createObjectURL(file),
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
          return {
            ...prev,
            uploadProgress: 100,
            isUploading: false,
            generatedRecipe: generateRandomRecipe(file),
            showPreview: true
          };
        }
        return { ...prev, uploadProgress: newProgress };
      });
    }, 200);
  }, [generateRandomRecipe]);

  const acceptRecipe = useCallback(async () => {
    if (!state.generatedRecipe) return;

    setState(prev => ({ ...prev, isUploading: true }));
    
    try {
      await addRecipe(state.generatedRecipe);
      closeModal();
      // Show success notification with musical flourish
      // Implementation depends on notification system
    } catch (error) {
      setState(prev => ({
        ...prev,
        error: '🎭 Alas! The recipe could not be saved to the royal archives.',
        isUploading: false
      }));
    }
  }, [state.generatedRecipe, addRecipe, closeModal]);

  const editRecipe = useCallback((updates: Partial<Recipe>) => {
    setState(prev => ({
      ...prev,
      generatedRecipe: prev.generatedRecipe 
        ? { ...prev.generatedRecipe, ...updates }
        : null
    }));
  }, []);

  return {
    ...state,
    openModal,
    closeModal,
    handleFileSelect,
    acceptRecipe,
    editRecipe,
    setDragging: (isDragging: boolean) => 
      setState(prev => ({ ...prev, isDragging })),
    clearUpload: () => 
      setState(prev => ({ 
        ...prev, 
        selectedFile: null, 
        previewUrl: null, 
        generatedRecipe: null,
        showPreview: false,
        error: null 
      }))
  };
};
```

## Testing Requirements (Royal Quality Assurance)

### Integration Tests (Target: 85% Coverage - Royal Standard)

1. **Jester Button Upload Flow**

```typescript
describe('Jester Upload Button', () => {
  it('should display jester hat with neon glow effects', async () => {
    render(<UploadButton />);
    
    const button = screen.getByRole('button', { name: /upload recipe/i });
    expect(button).toHaveClass('jester-upload-btn');
    
    // Test hover effects
    fireEvent.mouseEnter(button);
    expect(button).toHaveClass('hover:shadow-primary-neon');
  });

  it('should trigger scroll unfurl animation when clicked', async () => {
    const mockOpen = jest.fn();
    render(<UploadButton onUploadClick={mockOpen} />);
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    expect(mockOpen).toHaveBeenCalledTimes(1);
    // Verify animation classes are applied
    await waitFor(() => {
      expect(document.querySelector('.scroll-modal')).toHaveClass('entering');
    });
  });
});
```

2. **Mandolin Drag Zone Tests**

```typescript
describe('Mandolin Drag Zone', () => {
  it('should show mandolin shape with luth decoration', async () => {
    render(<DragDropZone onFileSelect={jest.fn()} />);
    
    const dropZone = screen.getByRole('region', { name: /drop zone/i });
    expect(dropZone).toHaveClass('mandolin-drop-zone');
    expect(dropZone).toHaveTextContent('🪕');
  });

  it('should handle drag events with glow animation', async () => {
    const mockFileSelect = jest.fn();
    render(<DragDropZone onFileSelect={mockFileSelect} isDragging={true} />);
    
    const dropZone = screen.getByRole('region');
    expect(dropZone).toHaveClass('drag-active');
    
    // Test drag over effects
    fireEvent.dragOver(dropZone);
    expect(dropZone).toHaveStyle('animation: pulse-glow 1.5s infinite');
  });

  it('should validate file types with courtly error messages', async () => {
    const mockFileSelect = jest.fn();
    render(<DragDropZone onFileSelect={mockFileSelect} />);
    
    const dropZone = screen.getByRole('region');
    const invalidFile = new File(['test'], 'test.txt', { type: 'text/plain' });
    
    fireEvent.drop(dropZone, {
      dataTransfer: { files: [invalidFile] }
    });
    
    expect(screen.getByText(/🎭.*only images are accepted/i)).toBeInTheDocument();
  });
});
```

3. **Recipe Generation and Preview**

```typescript
describe('Recipe Generation', () => {
  it('should generate Southeast Asian recipe from template', async () => {
    const { generateRandomRecipe } = renderHook(() => useRecipeGeneration());
    const mockFile = new File(['test'], 'food.jpg', { type: 'image/jpeg' });
    
    const recipe = generateRandomRecipe.current(mockFile);
    
    expect(recipe.cuisine).toMatch(/Malaysian|Thai|Vietnamese|Indonesian/);
    expect(recipe.tags).toContain('traditional');
    expect(recipe.image.url).toContain('blob:');
  });

  it('should show jester juggling animation during generation', async () => {
    render(<RecipePreviewCard isGenerating={true} />);
    
    const loadingElement = screen.getByRole('progressbar');
    expect(loadingElement).toHaveClass('jester-juggling-animation');
  });

  it('should allow editing generated recipe details', async () => {
    const mockRecipe = {
      id: 'test',
      title: 'Original Title',
      description: 'Original Description'
    };
    
    render(<RecipePreviewCard recipe={mockRecipe} onEdit={jest.fn()} />);
    
    const editButton = screen.getByRole('button', { name: /edit/i });
    fireEvent.click(editButton);
    
    const titleInput = screen.getByDisplayValue('Original Title');
    expect(titleInput).toBeInTheDocument();
  });
});
```

### Accessibility Tests (Court Inclusion Standards)

```typescript
describe('Accessibility', () => {
  it('should maintain focus trap in modal', async () => {
    render(<UploadModal isOpen={true} onClose={jest.fn()} />);
    
    const modal = screen.getByRole('dialog');
    const firstFocusable = within(modal).getAllByRole('button')[0];
    const lastFocusable = within(modal).getAllByRole('button').pop();
    
    // Test focus trap
    firstFocusable.focus();
    fireEvent.keyDown(document, { key: 'Tab', shiftKey: true });
    expect(lastFocusable).toHaveFocus();
  });

  it('should provide proper ARIA labels for jester elements', async () => {
    render(<UploadButton />);
    
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 
      expect.stringContaining('Upload recipe with jester magic'));
  });

  it('should announce upload progress to screen readers', async () => {
    render(<UploadModal isOpen={true} uploadProgress={50} />);
    
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuenow', '50');
    expect(progressBar).toHaveAttribute('aria-label', 
      expect.stringContaining('Upload progress: 50%'));
  });
});
```

### Performance Tests (Royal Efficiency)

```typescript
describe('Performance', () => {
  it('should optimize jester animations for 60fps', async () => {
    const { container } = render(<UploadButton />);
    
    const button = container.querySelector('.jester-upload-btn');
    const computedStyle = window.getComputedStyle(button);
    
    // Verify hardware acceleration
    expect(computedStyle.transform).toBeDefined();
    expect(computedStyle.willChange).toBe('transform');
  });

  it('should clean up object URLs to prevent memory leaks', async () => {
    const mockRevokeObjectURL = jest.spyOn(URL, 'revokeObjectURL');
    
    const { unmount } = render(<ImagePreview file={mockFile} onClear={jest.fn()} />);
    unmount();
    
    expect(mockRevokeObjectURL).toHaveBeenCalled();
  });

  it('should lazy load modal to reduce bundle size', async () => {
    const { container } = render(<App />);
    
    // Modal should not be in DOM initially
    expect(container.querySelector('.scroll-modal')).not.toBeInTheDocument();
    
    const uploadButton = screen.getByRole('button', { name: /upload/i });
    fireEvent.click(uploadButton);
    
    // Modal should be loaded dynamically
    await waitFor(() => {
      expect(container.querySelector('.scroll-modal')).toBeInTheDocument();
    });
  });
});
```

---

*May thy implementation bring great feasts and joy to thy royal court! 🎭🪕*

*- Lord British, Master of Cyber-Medieval Recipes*