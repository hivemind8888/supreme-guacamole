# RECIPE-007 Floating Add Button Position - Implementation Planning

## User Story

As a recipe contributor, I want the add recipe button to be floating in the lower right corner of the screen, so that I can easily access the upload functionality from anywhere on the page without losing my current view or scrolling position.

## Pre-conditions

- Recipe gallery page exists and displays recipe cards
- Upload functionality (UploadButton/UploadModal) is already implemented
- Basic page layout structure is established
- Existing navigation and UI components are in place

## Design

### Visual Layout

The floating add button will be positioned as a fixed element in the lower right corner of the viewport, featuring:
- Circular or rounded rectangular button design with neon accent colors
- Musical/jester-themed icon (using a mandolin or lute symbol)
- Glowing hover effects reminiscent of magical instrument strings
- Z-index layering to ensure visibility above all other content
- Responsive sizing that adapts to different screen dimensions

### Color and Typography

- **Button Base**: 
  - Background: `bg-gradient-to-r from-primary to-secondary` (neon green to neon pink)
  - Border: `border-2 border-accent` (neon blue accent)
  - Shadow: `shadow-lg shadow-primary/25` with animated glow effect

- **Icon Styling**:
  - Color: `text-background` (high contrast against gradient)
  - Size: `w-6 h-6` on desktop, `w-5 h-5` on mobile
  - Musical symbol: 🪕 or 🎭 depending on theme preference

- **Interactive States**:
  - Hover: Enhanced glow with `shadow-2xl shadow-primary/50`
  - Active: Scale animation `scale-95`
  - Focus: Accessible focus ring with `ring-2 ring-accent ring-offset-2`

### Interaction Patterns

- **Hover Animation**: 
  - Scale: Subtle grow effect (105%)
  - Glow: Intensified shadow with color transition
  - Icon: Gentle rotation animation (10-15 degrees)
  - Duration: 300ms ease-in-out

- **Click Interaction**:
  - Initial: Scale down to 95% for tactile feedback
  - Completion: Return to normal size with spring animation
  - Modal trigger: Smooth fade-in of upload modal
  - Accessibility: Clear focus states and keyboard navigation

### Measurements and Spacing

- **Desktop Positioning**:
  ```css
  position: fixed;
  bottom: 2rem;    /* 32px from bottom */
  right: 2rem;     /* 32px from right */
  width: 3.5rem;   /* 56px diameter */
  height: 3.5rem;  /* 56px diameter */
  ```

- **Mobile Positioning**:
  ```css
  position: fixed;
  bottom: 1.5rem;  /* 24px from bottom */
  right: 1rem;     /* 16px from right */
  width: 3rem;     /* 48px diameter */
  height: 3rem;    /* 48px diameter */
  ```

- **Z-Index**: `z-50` to ensure visibility above content

### Responsive Behavior

- **Desktop (lg: 1024px+)**:
  ```css
  - Size: w-14 h-14 (56px)
  - Bottom margin: 2rem
  - Right margin: 2rem
  - Icon size: w-6 h-6
  ```

- **Tablet (md: 768px - 1023px)**:
  ```css
  - Size: w-12 h-12 (48px)
  - Bottom margin: 1.5rem
  - Right margin: 1.5rem
  - Icon size: w-5 h-5
  ```

- **Mobile (sm: < 768px)**:
  ```css
  - Size: w-12 h-12 (48px)
  - Bottom margin: 1.5rem
  - Right margin: 1rem
  - Adjusted for mobile touch targets
  ```

## Technical Requirements

### Component Structure

```
src/app/_components/
├── FloatingAddButton.tsx      # Main floating button component
├── FloatingButton.tsx         # Reusable floating button base
└── UploadModal.tsx           # Existing modal (to be updated)
```

### Required Components

- FloatingAddButton ✅
- FloatingButton (base component) ✅
- Updated UploadModal integration ✅
- Responsive utility hooks ✅

### State Management Requirements

```typescript
interface FloatingButtonState {
  // UI States
  isVisible: boolean;
  isHovered: boolean;
  isPressed: boolean;
  
  // Modal States
  isModalOpen: boolean;
  
  // Responsive States
  screenSize: 'mobile' | 'tablet' | 'desktop';
  buttonSize: 'small' | 'medium' | 'large';
}

// State Updates
const actions = {
  setVisibility: (visible: boolean) => void;
  setHoverState: (hovered: boolean) => void;
  toggleModal: () => void;
  updateScreenSize: (size: ScreenSize) => void;
}
```

## Acceptance Criteria

### Layout & Content

1. Button Positioning
   ```
   - Fixed position in lower right corner
   - Maintains position during page scroll
   - Appropriate margins from viewport edges
   - Consistent positioning across all pages
   ```

2. Visual Design
   ```
   - Circular button with musical/jester theming
   - Neon gradient background with glow effects
   - High contrast icon for accessibility
   - Smooth animations and transitions
   ```

3. Responsive Behavior
   ```
   - Scales appropriately for different screen sizes
   - Maintains touch target guidelines (44px minimum)
   - Adjusts margins for mobile viewports
   - Preserves functionality across orientations
   ```

### Functionality

1. Button Behavior

   - [ ] Button remains fixed in position during page scroll
   - [ ] Button triggers upload modal when clicked
   - [ ] Button shows hover effects on mouse interaction
   - [ ] Button provides tactile feedback on touch devices

2. Accessibility

   - [ ] Button is keyboard accessible with Tab navigation
   - [ ] Button has appropriate ARIA labels and descriptions
   - [ ] Button maintains sufficient color contrast ratios
   - [ ] Button works with screen readers and assistive technology

3. Performance
   - [ ] Button animations are smooth and performant
   - [ ] Button doesn't interfere with page scroll performance
   - [ ] Button loads quickly without affecting page load times
   - [ ] Button state management is optimized

### Navigation Rules

- Button appears on all main application pages (gallery, recipe details)
- Button maintains consistent behavior across page transitions
- Button z-index ensures visibility above all content elements
- Button doesn't obstruct important UI elements or content

### Error Handling

- Handle modal opening failures gracefully with user feedback
- Provide fallback styling if CSS animations aren't supported
- Ensure button remains functional if JavaScript fails to load

## Modified Files

```
src/app/_components/
├── FloatingAddButton.tsx ✅    # New floating button component
├── FloatingButton.tsx ✅       # Reusable base component
├── UploadModal.tsx ✅          # Works with floating button
└── RecipeGallery.tsx ✅        # Integrated floating button
src/app/
├── layout.tsx ⬜               # Add floating button to global layout (future)
└── page.tsx ✅                 # Uses RecipeGallery with floating button
src/app/recipe/[id]/
└── page.tsx ⬜                 # Add floating button to recipe detail (future)
```

## Status

� COMPLETED

1. Setup & Configuration

   - [x] Create base FloatingButton component structure
   - [x] Set up responsive breakpoint utilities
   - [x] Configure z-index layering system

2. Layout Implementation

   - [x] Implement fixed positioning with responsive margins
   - [x] Create musical/jester-themed button design
   - [x] Add neon glow effects and animations
   - [x] Ensure proper touch target sizing

3. Feature Implementation

   - [x] Integrate with existing UploadModal component
   - [x] Add hover and focus interaction states
   - [x] Implement keyboard accessibility
   - [x] Add smooth transition animations

4. Testing
   - [ ] Test button positioning across different screen sizes
   - [ ] Verify accessibility compliance and keyboard navigation
   - [ ] Test performance impact on page scroll
   - [ ] Validate modal integration functionality

## Dependencies

- Existing UploadModal component functionality
- TailwindCSS responsive utilities and animation classes
- Lucide React or similar icon library for musical symbols
- React hooks for state management and responsive detection

## Related Stories

- RECIPE-002 (Upload Recipe Picture functionality)
- RECIPE-001 (View Recipe Gallery integration)

## Notes

### Technical Considerations

1. **Z-Index Management**: Use a centralized z-index scale to prevent layering conflicts
2. **Performance Optimization**: Use CSS transforms for animations to leverage GPU acceleration
3. **Accessibility**: Ensure button meets WCAG 2.1 AA guidelines for touch targets and contrast
4. **Browser Compatibility**: Test fixed positioning behavior across different browsers
5. **Mobile Considerations**: Account for virtual keyboard behavior and safe areas

### Business Requirements

- **Consistent Access**: Button must be available on all major application pages
- **User Experience**: Provide quick access to upload functionality without navigation
- **Mobile-First**: Ensure excellent experience on mobile devices
- **Brand Consistency**: Maintain medieval gaming aesthetic with neon cyber elements

### API Integration

#### Type Definitions

```typescript
interface FloatingButtonProps {
  onCLick: () => void;
  icon?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  className?: string;
}

interface UseFloatingButtonProps {
  isVisible?: boolean;
  autoHide?: boolean;
  hideOnScroll?: boolean;
}

interface FloatingButtonState {
  isVisible: boolean;
  isHovered: boolean;
  isPressed: boolean;
  screenSize: ScreenSize;
}

interface PositionConfig {
  bottom: string;
  right: string;
  width: string;
  height: string;
}
```

### Custom Hook Implementation

```typescript
const useFloatingButton = ({ isVisible = true, autoHide = false }: UseFloatingButtonProps) => {
  const [state, setState] = useState<FloatingButtonState>({
    isVisible,
    isHovered: false,
    isPressed: false,
    screenSize: 'desktop'
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const newSize = width < 768 ? 'mobile' : width < 1024 ? 'tablet' : 'desktop';
      setState(prev => ({ ...prev, screenSize: newSize }));
    };

    const handleScroll = () => {
      if (autoHide) {
        const scrollY = window.scrollY;
        const isScrollingDown = scrollY > (handleScroll as any).lastScrollY;
        setState(prev => ({ 
          ...prev, 
          isVisible: !isScrollingDown || scrollY < 100 
        }));
        (handleScroll as any).lastScrollY = scrollY;
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [autoHide]);

  const handleHover = useCallback((hovered: boolean) => {
    setState(prev => ({ ...prev, isHovered: hovered }));
  }, []);

  const handlePress = useCallback((pressed: boolean) => {
    setState(prev => ({ ...prev, isPressed: pressed }));
  }, []);

  return {
    state,
    handleHover,
    handlePress,
    getPositionConfig: () => getPositionForScreenSize(state.screenSize),
  };
};

const getPositionForScreenSize = (screenSize: ScreenSize): PositionConfig => {
  const configs = {
    mobile: { bottom: '1.5rem', right: '1rem', width: '3rem', height: '3rem' },
    tablet: { bottom: '1.5rem', right: '1.5rem', width: '3rem', height: '3rem' },
    desktop: { bottom: '2rem', right: '2rem', width: '3.5rem', height: '3.5rem' }
  };
  
  return configs[screenSize];
};
```

## Testing Requirements

### Integration Tests (Target: 80% Coverage)

1. Core Functionality Tests

```typescript
describe('FloatingAddButton', () => {
  it('should render in the correct position', async () => {
    render(<FloatingAddButton onClick={mockClick} />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('fixed', 'bottom-8', 'right-8');
  });

  it('should trigger modal when clicked', async () => {
    const mockClick = jest.fn();
    render(<FloatingAddButton onClick={mockClick} />);
    await user.click(screen.getByRole('button'));
    expect(mockClick).toHaveBeenCalled();
  });

  it('should maintain position during scroll', async () => {
    render(<FloatingAddButton onClick={mockClick} />);
    fireEvent.scroll(window, { target: { scrollY: 500 } });
    const button = screen.getByRole('button');
    expect(button).toHaveClass('fixed');
  });
});
```

2. Responsive Tests

```typescript
describe('Responsive Behavior', () => {
  it('should adjust size for mobile viewports', async () => {
    mockViewport(375, 667); // iPhone size
    render(<FloatingAddButton onClick={mockClick} />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('w-12', 'h-12');
  });

  it('should maintain proper margins on different screen sizes', async () => {
    mockViewport(1024, 768); // Desktop size
    render(<FloatingAddButton onClick={mockClick} />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bottom-8', 'right-8');
  });
});
```

3. Accessibility Tests

```typescript
describe('Accessibility', () => {
  it('should be keyboard accessible', async () => {
    render(<FloatingAddButton onClick={mockClick} />);
    const button = screen.getByRole('button');
    button.focus();
    expect(button).toHaveFocus();
    
    await user.keyboard('{Enter}');
    expect(mockClick).toHaveBeenCalled();
  });

  it('should have appropriate ARIA labels', async () => {
    render(<FloatingAddButton onClick={mockClick} />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Add new recipe');
  });

  it('should meet color contrast requirements', async () => {
    render(<FloatingAddButton onClick={mockClick} />);
    const button = screen.getByRole('button');
    const styles = getComputedStyle(button);
    // Test contrast ratio meets WCAG AA standards
  });
});
```

### Performance Tests

1. Animation Performance

```typescript
describe('Animation Performance', () => {
  it('should use CSS transforms for smooth animations', async () => {
    render(<FloatingAddButton onClick={mockClick} />);
    const button = screen.getByRole('button');
    
    fireEvent.mouseEnter(button);
    expect(button).toHaveStyle('transform: scale(1.05)');
  });

  it('should not impact scroll performance', async () => {
    const scrollStart = performance.now();
    render(<FloatingAddButton onClick={mockClick} />);
    
    // Simulate rapid scrolling
    for (let i = 0; i < 100; i++) {
      fireEvent.scroll(window, { target: { scrollY: i * 10 } });
    }
    
    const scrollEnd = performance.now();
    expect(scrollEnd - scrollStart).toBeLessThan(100); // Should complete in under 100ms
  });
});
```

### Test Environment Setup

```typescript
const mockViewport = (width: number, height: number) => {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: width,
  });
  Object.defineProperty(window, 'innerHeight', {
    writable: true,
    configurable: true,
    value: height,
  });
  window.dispatchEvent(new Event('resize'));
};

const mockClick = jest.fn();

beforeEach(() => {
  mockClick.mockClear();
  mockViewport(1024, 768); // Default to desktop
});
```