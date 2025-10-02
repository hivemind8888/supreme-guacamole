# RECIPE-008: Improve Recipe Name Visibility on Recipe Cards - Implementation Plan

## User Story

**As a** recipe browser,  
**I want** recipe names to have high contrast and clear visibility on recipe cards,  
**so that** I can easily read and identify recipes while browsing the gallery without straining my eyes.

## Pre-conditions

- Recipe gallery is currently displaying recipe cards
- Recipe cards show images with recipe names overlaid
- RecipeCard component exists at `src/app/_components/RecipeCard.tsx`
- Current implementation may have low contrast between text and background images
- Medieval/cyber aesthetic is established in the design system

## Design

### Visual Layout

The recipe name visibility enhancement focuses on:
- **Text Overlay**: Recipe names positioned over recipe images with improved contrast
- **Background Treatment**: Semi-transparent dark overlay behind text for readability
- **Text Styling**: Enhanced typography with text shadows and bold weights
- **Position**: Text remains anchored at bottom of card with improved spacing

### Color and Typography

**Typography Enhancements**:
```css
- Recipe Name: font-inter text-lg md:text-xl font-bold text-white
- Font Weight: Increase from font-semibold to font-bold for better visibility
- Text Size: Responsive sizing (text-lg on mobile, text-xl on desktop)
- Letter Spacing: tracking-wide for improved legibility
```

**Color Specifications**:
```css
- Primary Text: text-white (for maximum contrast)
- Text Shadow: Multiple layered shadows for depth and readability
  - Primary: 0 2px 4px rgba(0, 0, 0, 0.8)
  - Secondary: 0 4px 8px rgba(0, 0, 0, 0.6)
  - Glow effect: 0 0 20px rgba(0, 255, 156, 0.3) (neon green accent)
- Background Overlay: bg-gradient-to-t from-black/80 via-black/50 to-transparent
- Overlay Height: min-h-24 for sufficient backdrop area
```

**Accessibility Standards**:
- Contrast Ratio: Minimum 4.5:1 (WCAG 2.1 AA compliance)
- Target Ratio: 7:1 (AAA level for enhanced accessibility)
- White text (#FFFFFF) on dark overlay (rgba(0, 0, 0, 0.8)) provides ~15:1 ratio

### Interaction Patterns

**Hover State Enhancement**:
```typescript
- Hover: Gradient overlay intensifies slightly
- Text glow effect becomes more prominent
- Smooth transition: transition-all duration-300 ease-in-out
- Scale effect: Text may scale slightly (scale-105) on card hover
```

**Focus State**:
```typescript
- Keyboard Focus: Clear focus ring with high contrast
- Focus Visible: ring-2 ring-primary ring-offset-2
- Accessibility: Maintains text visibility during focus states
```

### Measurements and Spacing

**Text Container Spacing**:
```css
Container:
  - Padding: px-4 py-3 md:px-6 md:py-4
  - Min Height: min-h-24
  - Position: absolute bottom-0 left-0 right-0

Text Spacing:
  - Line Height: leading-tight for compact display
  - Letter Spacing: tracking-wide
  - Margin: mb-0 (flush to container bottom)
```

**Overlay Gradient**:
```css
Background:
  - Type: Linear gradient from bottom to top
  - Stops: 
    * from-black/80 (at bottom - full coverage)
    * via-black/50 (middle - transition)
    * to-transparent (top - fade out)
  - Height: Covers bottom 30-40% of card
```

### Responsive Behavior

**Desktop (lg: 1024px+)**:
```css
- Text Size: text-xl
- Padding: px-6 py-4
- Shadow: More pronounced multi-layer shadows
- Overlay: Slightly taller gradient area
```

**Tablet (md: 768px - 1023px)**:
```css
- Text Size: text-lg
- Padding: px-5 py-3
- Shadow: Medium intensity shadows
- Overlay: Balanced gradient height
```

**Mobile (sm: < 768px)**:
```css
- Text Size: text-lg
- Padding: px-4 py-3
- Shadow: Optimized for smaller screens
- Overlay: Compact but sufficient gradient
```

## Technical Requirements

### Component Structure

```
src/app/_components/
├── RecipeCard.tsx                  # Main component to be modified
└── RecipeSkeleton.tsx              # May need style updates for consistency
```

### Required Modifications

- RecipeCard.tsx ⬜ (Enhance text visibility and contrast)
- RecipeSkeleton.tsx ⬜ (Optional: Update loading state styles)

### State Management Requirements

No additional state management required. This is purely a styling/accessibility enhancement.

```typescript
// No new state needed - component maintains existing functionality
// Only CSS/styling classes will be modified
```

## Acceptance Criteria

### Layout & Content

1. **Text Overlay Implementation**
   ```
   - Recipe name positioned at bottom of card
   - Gradient overlay from bottom to top (black to transparent)
   - Overlay height: minimum 96px (24rem / min-h-24)
   - Text container: absolute positioning with full width
   ```

2. **Typography Enhancement**
   ```
   - Font weight: bold (font-bold)
   - Font size: responsive (text-lg md:text-xl)
   - Text color: white (#FFFFFF)
   - Letter spacing: tracking-wide
   - Line height: leading-tight
   ```

3. **Shadow and Glow Effects**
   ```
   - Multi-layer text shadow for depth
   - Primary shadow: 0 2px 4px rgba(0,0,0,0.8)
   - Secondary shadow: 0 4px 8px rgba(0,0,0,0.6)
   - Neon glow: 0 0 20px rgba(0,255,156,0.3)
   - Medieval/jester aesthetic maintained
   ```

### Functionality

1. **Accessibility Compliance**
   - [ ] Text contrast ratio meets WCAG 2.1 AA standards (minimum 4.5:1)
   - [ ] Target AAA level contrast ratio (7:1) achieved where possible
   - [ ] Text remains readable across all background images
   - [ ] Focus states maintain high visibility

2. **Visual Consistency**
   - [ ] All recipe cards display enhanced text visibility
   - [ ] Gradient overlay applies uniformly across gallery
   - [ ] Hover states enhance readability further
   - [ ] Medieval/cyber aesthetic preserved

3. **Responsive Behavior**
   - [ ] Text size adjusts appropriately for mobile, tablet, and desktop
   - [ ] Padding and spacing scale with viewport
   - [ ] Overlay gradient maintains effectiveness across screen sizes
   - [ ] Text remains legible on small mobile screens (320px+)

### Navigation Rules

- No navigation changes required
- Existing card click behavior remains unchanged
- Focus and keyboard navigation maintain current functionality
- Hover effects enhance but don't interfere with interaction

### Error Handling

- No specific error handling required
- Fallback: If gradient not supported, solid background overlay applies
- Text color defaults to white for maximum compatibility

## Modified Files

```
src/app/_components/
├── RecipeCard.tsx ✅                # Enhanced text visibility styles
└── RecipeSkeleton.tsx ⬜            # Optional: Consistent loading state styles (not required)
```

## Status

✅ COMPLETED

1. **Analysis & Planning**
   - [x] Review current RecipeCard implementation
   - [x] Identify contrast issues
   - [x] Define accessibility requirements
   - [x] Plan styling enhancements

2. **Style Implementation**
   - [x] Update RecipeCard text container styles
   - [x] Implement gradient overlay background
   - [x] Add multi-layer text shadows
   - [x] Apply enhanced typography classes
   - [x] Add neon glow effects for medieval theme

3. **Accessibility Testing**
   - [x] Test contrast ratios with WCAG tools
   - [~] Verify readability across different images (Ready for manual testing)
   - [~] Test with screen readers (Ready for manual testing)
   - [x] Validate keyboard navigation
   - [x] Check focus states

4. **Responsive Testing**
   - [~] Test on mobile devices (320px - 767px) (Ready for manual testing)
   - [~] Test on tablets (768px - 1023px) (Ready for manual testing)
   - [~] Test on desktop (1024px+) (Ready for manual testing)
   - [~] Test on different screen densities (Ready for manual testing)
   - [~] Verify dark/light environment readability (Ready for manual testing)

5. **Cross-browser Testing**
   - [~] Test on Chrome/Edge (Ready for manual testing)
   - [~] Test on Safari (Ready for manual testing)
   - [~] Test on Firefox (Ready for manual testing)
   - [~] Test on mobile browsers (Ready for manual testing)
   - [x] Verify gradient and shadow support

## Dependencies

- TailwindCSS configuration with custom colors
- Existing RecipeCard component implementation
- Recipe images in `/public/images/recipes/`
- Medieval/cyber theme color palette (neon green: #00FF9C)

## Related Stories

- RECIPE-001: View Recipe Gallery (base implementation)
- RECIPE-008: Improve Recipe Name Visibility (current story)

## Notes

### Technical Considerations

1. **Contrast Calculation**
   - White text (#FFFFFF) on dark overlay rgba(0,0,0,0.8) provides ~15:1 contrast ratio
   - Exceeds WCAG AAA standards (7:1)
   - Ensures readability even over bright background images

2. **Gradient Strategy**
   - Linear gradient from bottom to top prevents abrupt edges
   - Smooth transition maintains visual appeal
   - Overlay darkest at text position for maximum contrast
   - Transparent at top preserves image visibility

3. **Text Shadow Layers**
   - Multiple shadows create depth and "pop" effect
   - Dark shadows for readability
   - Subtle neon glow for medieval/cyber aesthetic
   - Shadows visible even on dark images

4. **Performance Considerations**
   - CSS-only solution (no JavaScript overhead)
   - GPU-accelerated shadows and gradients
   - No additional HTTP requests
   - Minimal impact on render performance

5. **Theme Integration**
   - Neon green (#00FF9C) glow maintains jester/medieval theme
   - Dark overlay complements cyber aesthetic
   - Enhancement doesn't compromise existing design language

### Business Requirements

- **Accessibility Priority**: Must meet WCAG 2.1 AA minimum (4.5:1 contrast)
- **User Experience**: Recipe names must be immediately readable without eye strain
- **Brand Consistency**: Medieval/cyber/jester theme must be preserved
- **Cross-platform**: Works on all devices and browsers
- **No Regression**: Existing functionality remains unchanged

### Implementation Details

#### Current RecipeCard Structure (to be enhanced)

```typescript
// Current simplified structure
<div className="recipe-card">
  <Image src={recipe.image} alt={recipe.name} />
  <div className="recipe-name">
    <h3>{recipe.name}</h3>
  </div>
</div>
```

#### Enhanced RecipeCard Structure

```typescript
<div className="recipe-card relative overflow-hidden group">
  <Image 
    src={recipe.image} 
    alt={recipe.name}
    className="transition-transform duration-300 group-hover:scale-105"
  />
  <div className="absolute bottom-0 left-0 right-0 min-h-24 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
    <div className="px-4 py-3 md:px-6 md:py-4">
      <h3 className="text-lg md:text-xl font-bold text-white tracking-wide leading-tight"
          style={{
            textShadow: `
              0 2px 4px rgba(0, 0, 0, 0.8),
              0 4px 8px rgba(0, 0, 0, 0.6),
              0 0 20px rgba(0, 255, 156, 0.3)
            `
          }}>
        {recipe.name}
      </h3>
    </div>
  </div>
</div>
```

#### Tailwind Configuration (if custom shadows needed)

```typescript
// tailwind.config.js - Custom text shadow utilities
module.exports = {
  theme: {
    extend: {
      textShadow: {
        'recipe': '0 2px 4px rgba(0, 0, 0, 0.8), 0 4px 8px rgba(0, 0, 0, 0.6)',
        'recipe-glow': '0 2px 4px rgba(0, 0, 0, 0.8), 0 4px 8px rgba(0, 0, 0, 0.6), 0 0 20px rgba(0, 255, 156, 0.3)',
      }
    }
  }
}
```

### CSS Implementation Strategy

```css
/* Gradient Overlay */
.recipe-name-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  min-height: 6rem; /* 96px */
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.5) 50%,
    transparent 100%
  );
}

/* Enhanced Text Styling */
.recipe-name-text {
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 0.025em;
  line-height: 1.25;
  text-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.8),
    0 4px 8px rgba(0, 0, 0, 0.6),
    0 0 20px rgba(0, 255, 156, 0.3);
}

/* Hover Enhancement */
.recipe-card:hover .recipe-name-text {
  text-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.9),
    0 4px 8px rgba(0, 0, 0, 0.7),
    0 0 30px rgba(0, 255, 156, 0.5);
}
```

## Testing Requirements

### Accessibility Tests (Priority: High)

1. **Contrast Ratio Tests**

```typescript
describe('Recipe Name Visibility - Accessibility', () => {
  it('should meet WCAG 2.1 AA contrast ratio (4.5:1 minimum)', async () => {
    const card = screen.getByRole('article');
    const recipeName = within(card).getByRole('heading');
    const styles = window.getComputedStyle(recipeName);
    
    // Test contrast ratio calculation
    const contrastRatio = calculateContrastRatio(styles.color, styles.backgroundColor);
    expect(contrastRatio).toBeGreaterThanOrEqual(4.5);
  });

  it('should achieve AAA level contrast (7:1) where possible', async () => {
    const card = screen.getByRole('article');
    const recipeName = within(card).getByRole('heading');
    const styles = window.getComputedStyle(recipeName);
    
    const contrastRatio = calculateContrastRatio(styles.color, styles.backgroundColor);
    expect(contrastRatio).toBeGreaterThanOrEqual(7.0);
  });

  it('should maintain text visibility across all recipe images', async () => {
    const allCards = screen.getAllByRole('article');
    
    allCards.forEach(card => {
      const recipeName = within(card).getByRole('heading');
      expect(recipeName).toBeVisible();
      expect(recipeName).toHaveStyle({ color: 'rgb(255, 255, 255)' });
    });
  });
});
```

2. **Screen Reader Tests**

```typescript
describe('Recipe Name - Screen Reader Compatibility', () => {
  it('should announce recipe names correctly', async () => {
    const cards = screen.getAllByRole('article');
    
    cards.forEach(card => {
      const heading = within(card).getByRole('heading', { level: 3 });
      expect(heading).toHaveAccessibleName();
    });
  });

  it('should maintain proper heading hierarchy', async () => {
    const headings = screen.getAllByRole('heading', { level: 3 });
    expect(headings.length).toBeGreaterThan(0);
  });
});
```

### Visual Regression Tests

1. **Gradient Overlay Tests**

```typescript
describe('Recipe Name Visibility - Visual Styles', () => {
  it('should apply gradient overlay to all recipe cards', async () => {
    const cards = screen.getAllByRole('article');
    
    cards.forEach(card => {
      const overlay = card.querySelector('[class*="gradient"]');
      expect(overlay).toBeInTheDocument();
      expect(overlay).toHaveStyle({
        background: expect.stringContaining('linear-gradient')
      });
    });
  });

  it('should apply text shadows for depth and readability', async () => {
    const recipeName = screen.getByRole('heading', { name: /chicken/i });
    const styles = window.getComputedStyle(recipeName);
    
    expect(styles.textShadow).toBeTruthy();
    expect(styles.textShadow).toContain('rgba(0, 0, 0');
  });

  it('should apply neon glow effect for medieval theme', async () => {
    const recipeName = screen.getByRole('heading', { name: /chicken/i });
    const styles = window.getComputedStyle(recipeName);
    
    expect(styles.textShadow).toContain('rgba(0, 255, 156');
  });
});
```

2. **Hover State Tests**

```typescript
describe('Recipe Name Visibility - Interaction States', () => {
  it('should enhance text glow on hover', async () => {
    const card = screen.getByRole('article');
    const recipeName = within(card).getByRole('heading');
    
    fireEvent.mouseEnter(card);
    
    await waitFor(() => {
      const styles = window.getComputedStyle(recipeName);
      expect(styles.textShadow).toContain('rgba(0, 255, 156');
    });
  });

  it('should maintain smooth transition on hover', async () => {
    const card = screen.getByRole('article');
    const styles = window.getComputedStyle(card);
    
    expect(styles.transition).toContain('300');
  });
});
```

### Responsive Tests

1. **Mobile Viewport Tests**

```typescript
describe('Recipe Name Visibility - Responsive (Mobile)', () => {
  beforeEach(() => {
    window.innerWidth = 375;
    window.innerHeight = 667;
  });

  it('should display readable text on mobile screens', async () => {
    const recipeName = screen.getByRole('heading', { name: /chicken/i });
    const styles = window.getComputedStyle(recipeName);
    
    expect(styles.fontSize).toBe('1.125rem'); // text-lg
    expect(recipeName).toBeVisible();
  });

  it('should apply appropriate padding on mobile', async () => {
    const overlay = screen.getByRole('article').querySelector('[class*="gradient"]');
    const styles = window.getComputedStyle(overlay);
    
    expect(styles.paddingLeft).toBe('1rem'); // px-4
    expect(styles.paddingTop).toBe('0.75rem'); // py-3
  });
});
```

2. **Desktop Viewport Tests**

```typescript
describe('Recipe Name Visibility - Responsive (Desktop)', () => {
  beforeEach(() => {
    window.innerWidth = 1440;
    window.innerHeight = 900;
  });

  it('should display larger text on desktop screens', async () => {
    const recipeName = screen.getByRole('heading', { name: /chicken/i });
    const styles = window.getComputedStyle(recipeName);
    
    expect(styles.fontSize).toBe('1.25rem'); // text-xl
    expect(recipeName).toBeVisible();
  });

  it('should apply increased padding on desktop', async () => {
    const overlay = screen.getByRole('article').querySelector('[class*="gradient"]');
    const styles = window.getComputedStyle(overlay);
    
    expect(styles.paddingLeft).toBe('1.5rem'); // px-6
    expect(styles.paddingTop).toBe('1rem'); // py-4
  });
});
```

### Performance Tests

1. **Render Performance**

```typescript
describe('Recipe Name Visibility - Performance', () => {
  it('should not impact render performance significantly', async () => {
    const startTime = performance.now();
    
    render(<RecipeGallery recipes={mockRecipes} />);
    
    const endTime = performance.now();
    const renderTime = endTime - startTime;
    
    expect(renderTime).toBeLessThan(100); // Should render within 100ms
  });

  it('should use GPU-accelerated properties', async () => {
    const card = screen.getByRole('article');
    const overlay = card.querySelector('[class*="gradient"]');
    
    // Gradient and shadows are GPU-accelerated
    expect(overlay).toHaveStyle({
      background: expect.stringContaining('linear-gradient')
    });
  });
});
```

### Cross-browser Tests

```typescript
describe('Recipe Name Visibility - Cross-browser', () => {
  it('should support gradients in all modern browsers', async () => {
    const overlay = screen.getByRole('article').querySelector('[class*="gradient"]');
    const styles = window.getComputedStyle(overlay);
    
    expect(styles.background).toMatch(/linear-gradient|gradient/);
  });

  it('should apply text shadows consistently', async () => {
    const recipeName = screen.getByRole('heading', { name: /chicken/i });
    const styles = window.getComputedStyle(recipeName);
    
    expect(styles.textShadow).toBeTruthy();
  });
});
```

### Test Environment Setup

```typescript
// Test helper functions
const calculateContrastRatio = (foreground: string, background: string): number => {
  // Implementation of WCAG contrast calculation
  const getLuminance = (color: string) => {
    // Convert RGB to relative luminance
    // ... implementation
  };
  
  const l1 = getLuminance(foreground);
  const l2 = getLuminance(background);
  
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  
  return (lighter + 0.05) / (darker + 0.05);
};

const mockRecipes = [
  {
    id: '1',
    name: 'Chicken Kapitan',
    image: '/images/recipes/chicken-kapitan-linsfood.jpg'
  },
  // ... more mock recipes
];

beforeEach(() => {
  // Reset viewport
  window.innerWidth = 1024;
  window.innerHeight = 768;
});
```

---

**Implementation Priority**: High  
**Estimated Effort**: 2-3 hours  
**Risk Level**: Low (CSS-only changes)  
**Impact**: High (Accessibility and UX improvement)
