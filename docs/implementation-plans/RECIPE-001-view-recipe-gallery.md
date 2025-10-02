# RECIPE-001 Recipe Gallery View - Implementation Planning

## User Story

As a user, I want to see a tiled view of all my dish pictures on the landing page, so that I can easily browse through my recipe collection.

## Pre-conditions

- Next.js 13+ app directory structure is set up
- TailwindCSS is installed and configured
- Local storage or similar persistence method is available for storing recipe data
- Mock recipe data structure is defined

## Design

### Visual Layout

- Main components:
  - Recipe Gallery Container (full width)
  - Recipe Card Grid (responsive grid layout)
  - Recipe Cards (individual tiles)
  - Loading States (skeleton loading)

- Layout structure:
  - Centered container with max-width
  - Responsive grid of recipe cards (fixed 3 columns)
  - Square aspect ratio (1:1) for all recipe images
  - Consistent spacing between cards
  - No empty/placeholder images allowed

- Key UI elements:
  - Recipe image (dominant element)
  - Recipe title (overlay or below image)
  - Interactive hover states
  - Loading skeletons

### Color and Typography

- **Background Colors**: 
  - Primary: bg-mandolin-strings dark:bg-medieval-night
  - Secondary: bg-parchment dark:bg-castle-stone
  - Accent: bg-jester-green hover:bg-jester-pink

- **Typography**:
  - Headings: font-medieval text-2xl font-bold text-castle-black dark:text-scroll-white
  - Body: font-manuscript text-base text-ink-dark dark:text-parchment-light
  - Recipe Titles: font-bardic text-lg font-medium text-castle-black dark:text-scroll-white

- **Component-Specific**:
  - Recipe Cards: bg-parchment dark:bg-castle-stone shadow-scroll hover:shadow-magical
  - Gallery Container: bg-great-hall dark:bg-dungeon

### Interaction Patterns

- **Recipe Card Interaction**: 
  - Hover: Gentle float animation (200ms ease)
  - Click: Scale down to 98%
  - Loading: Skeleton pulse animation
  - Accessibility: Focus ring with medieval border style
  - Hover shows recipe title if not already visible

### Measurements and Spacing

- **Container**:
  ```
  max-w-8xl mx-auto px-6 sm:px-8 lg:px-12
  ```

- **Component Spacing**:
  ```
  - Grid gap: gap-6 md:gap-8
  - Card aspect ratio: aspect-[4/3]
  - Card padding: p-4 md:p-6
  ```

### Responsive Behavior

- **Desktop (lg: 1024px+)**:
  ```
  - Grid: grid-cols-3 gap-8
  - Card width: ~320px
  - Card height: ~320px (1:1 ratio)
  - Typography: text-base
  ```

- **Tablet (md: 768px - 1023px)**:
  ```
  - Grid: grid-cols-3 gap-6
  - Card width: ~240px
  - Card height: ~240px (1:1 ratio)
  - Typography: text-sm
  ```

- **Mobile (sm: < 768px)**:
  ```
  - Grid: grid-cols-2 gap-4
  - Card width: ~160px
  - Card height: ~160px (1:1 ratio)
  - Typography: text-xs
  ```

## Technical Requirements

### Mock Data Structure

```json
{
  "recipes": [
    {
      "id": "string",
      "title": "string",
      "imagePath": "string",  // relative path to image in public/images/recipes/
      "createdAt": "string",
      "description": "string"
    }
  ]
}
```

Mock data will be stored in `src/app/_data/recipes.json` and will include at least 12 initial recipes for testing the gallery layout and responsive behavior.

### Component Structure

```
src/app/
├── page.tsx                    # Landing page with gallery
├── layout.tsx                  # Root layout
├── _components/
│   ├── RecipeGallery.tsx      # Main gallery container
│   ├── RecipeCard.tsx         # Individual recipe card
│   ├── RecipeImage.tsx        # Optimized image component
│   ├── RecipeSkeleton.tsx     # Loading state
│   └── useRecipeGallery.ts    # Gallery data and state management
├── _data/
│   └── recipes.json           # Mock recipe data
└── public/
    └── images/
        └── recipes/           # Local storage for recipe images
```

### Required Components

- RecipeGallery ⬜ (Container for all recipe cards)
- RecipeCard ⬜ (Individual recipe display)
- RecipeImage ⬜ (Optimized image handling)
- RecipeSkeleton ⬜ (Loading state component)
- useRecipeGallery ⬜ (Custom hook for gallery logic)

### State Management Requirements

```typescript
interface Recipe {
  id: string;
  title: string;
  imageUrl: string;
  createdAt: string;
}

interface GalleryState {
  // UI States
  isLoading: boolean;
  error: string | null;
  
  // Data States
  recipes: Recipe[];
  selectedRecipeId: string | null;
  
  // Layout States
  gridColumns: number;
  containerWidth: number;
}

interface GalleryActions {
  loadRecipes: () => Promise<void>;
  selectRecipe: (id: string) => void;
  updateLayout: (width: number) => void;
}
```

## Acceptance Criteria

### Layout & Content

1. Gallery Grid
   ```
   - Responsive grid layout
   - Equal-sized recipe cards
   - Consistent spacing
   - Smooth transitions between breakpoints
   ```

2. Recipe Cards
   ```
   - Image with consistent aspect ratio
   - Title display
   - Hover effects
   - Click interaction
   ```

3. Loading States
   ```
   - Skeleton loading for cards
   - Smooth transition to content
   - Placeholder animations
   ```

### Functionality

1. Gallery Display

   - [ ] Display grid of recipe cards
   - [ ] Maintain consistent card sizes
   - [ ] Handle different image aspect ratios
   - [ ] Show loading states while images load

2. Responsive Layout

   - [ ] Adapt grid columns based on screen size
   - [ ] Maintain spacing and proportions
   - [ ] Handle orientation changes
   - [ ] Optimize for different devices

3. User Interaction
   - [ ] Handle card click events
   - [ ] Implement hover effects
   - [ ] Provide keyboard navigation
   - [ ] Support touch interactions

### Navigation Rules

- Direct landing on gallery view
- No authentication required
- Card clicks navigate to recipe detail
- Maintain scroll position on back navigation

### Error Handling

- Show placeholder for failed image loads
- Graceful fallback for missing recipe data
- Error boundary for gallery component
- Retry mechanism for failed data loads

## Modified Files

```
src/app/
├── page.tsx ⬜                    # Add gallery page
├── layout.tsx ⬜                  # Update layout
├── _components/
│   ├── RecipeGallery.tsx ⬜      # Create gallery component
│   ├── RecipeCard.tsx ⬜         # Create card component
│   ├── RecipeImage.tsx ⬜        # Create image component
│   └── RecipeSkeleton.tsx ⬜     # Create skeleton
├── _data/
│   └── recipes.json ⬜           # Create mock data file
├── hooks/
│   └── useRecipeGallery.ts ⬜    # Create gallery hook
├── utils/
│   └── imageUtils.ts ⬜          # Image processing utilities
├── types/
│   └── recipe.ts ⬜              # Add type definitions
└── public/
    └── images/
        └── recipes/ ⬜           # Create image storage directory
```

## Status

🟨 IN PROGRESS

1. Setup & Configuration
   - [ ] Create component directory structure
   - [ ] Set up TailwindCSS configuration
   - [ ] Configure image optimization
   - [ ] Set up mock data structure

2. Layout Implementation
   - [ ] Create responsive grid layout
   - [ ] Implement recipe card component
   - [ ] Create loading skeleton
   - [ ] Add hover and animation effects

3. Feature Implementation
   - [ ] Implement data fetching hook
   - [ ] Add click handlers
   - [ ] Implement error boundaries
   - [ ] Add keyboard navigation

4. Testing
   - [ ] Component unit tests
   - [ ] Responsive layout tests
   - [ ] Accessibility testing
   - [ ] Performance testing

## Dependencies

- Next.js 13+ with App Router
- TailwindCSS for styling
- next/image for image optimization
- Mock data configuration

## Related Stories

- RECIPE-002 (Recipe Detail View)
- RECIPE-003 (Recipe Search Implementation)

## Notes

### Technical Considerations

1. Use Next.js Image component for optimal performance
2. Implement virtual scrolling if recipe list grows large
3. Consider using IntersectionObserver for lazy loading
4. Enforce square aspect ratio (1:1) for all images
5. Implement image upload with square cropping tool
   - Allow user to position/adjust crop area
   - Preview cropped result before saving
   - Save cropped image to public/images/recipes/
   - Generate unique filenames based on recipe ID
   - Maintain original image in temp storage for future edits
6. Implement local file system operations
   - Handle image file writing/deletion
   - Clean up temporary files after processing
   - Ensure proper file permissions
7. Validate image presence before recipe creation
8. Use proper error boundaries and fallbacks

### Business Requirements

- Gallery must load quickly and feel responsive
- Images should load progressively
- UI should be intuitive and accessible
- Support for future search/filter features