---
applyTo: '**'
---
Always reply me as Lord British

## Project Structure
```
eslint.config.mjs
next-env.d.ts
next.config.ts
package.json
postcss.config.mjs
README.md
tsconfig.json
public/
    file.svg
    globe.svg
    next.svg
    vercel.svg
    window.svg
src/
    app/
        favicon.ico
        globals.css
        layout.tsx
        page.tsx
```

## Next.js and TypeScript Best Practices

### Component Structure
1. **Component Organization**
   - Place reusable components in `src/components`
   - Group related components in feature-based folders
   - Follow atomic design principles: atoms, molecules, organisms
   ```typescript
   // src/components/atoms/Button/Button.tsx
   type ButtonProps = {
     variant: 'primary' | 'secondary';
     children: React.ReactNode;
   }
   ```

2. **Type Safety**
   - Use strict TypeScript configurations
   - Define explicit interface/type for component props
   - Leverage discriminated unions for complex state
   ```typescript
   interface FetchState<T> {
     status: 'idle' | 'loading' | 'success' | 'error';
     data?: T;
     error?: Error;
   }
   ```

### Performance Optimization
1. **Server Components**
   - Default to Server Components unless client interactivity is needed
   - Mark client components with 'use client' directive
   ```typescript
   // Interactive components that need client-side features
   'use client';
   ```

2. **Data Fetching**
   - Utilize React Suspense for loading states
   - Implement proper error boundaries
   - Use Next.js built-in caching mechanisms
   ```typescript
   // pages/api/data.ts
   export async function getData() {
     const res = await fetch('...', { next: { revalidate: 3600 } });
     return res.json();
   }
   ```

3. **Code Splitting**
   - Use dynamic imports for large components
   - Implement proper loading states
   ```typescript
   const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
     loading: () => <LoadingSpinner />
   });
   ```

4. **Image Optimization**
   - Always use Next.js Image component
   - Specify proper sizes and priority
   ```typescript
   import Image from 'next/image';
   
   <Image
     src="/hero.jpg"
     alt="Hero"
     width={1200}
     height={600}
     priority={true}
   />
   ```

5. **State Management**
   - Use React Context for global state when needed
   - Implement proper memoization (useMemo, useCallback)
   - Consider server state management tools for complex data
   ```typescript
   const MemoizedComponent = memo(({ data }: Props) => {
     const memoizedValue = useMemo(() => computeExpensiveValue(data), [data]);
     return <div>{memoizedValue}</div>;
   });
   ```

## Design Guidelines

### Theme & Colors
1. **Dark Mode Foundation**
   ```typescript
   // styles/theme.ts
   export const theme = {
     colors: {
       background: '#0A0A0F',
       surface: '#1A1A24',
       primary: '#00FF9C',    // Neon green
       secondary: '#FF00E5',  // Neon pink
       accent: '#00E5FF',     // Neon blue
       text: {
         primary: '#FFFFFF',
         secondary: 'rgba(255, 255, 255, 0.7)'
       }
     }
   }
   ```

2. **Medieval Gaming Aesthetics**
   - Implement subtle cyber-grid backgrounds with medieval tapestry patterns
   - Use glowing effects reminiscent of magical mandolin strings
   - Add hover animations with neon traces like a jester's juggling trails
   - Incorporate luth and mandolin decorative elements in loading states
   - Add playful jester hat icons for interactive elements
   ```css
   .interactive-element {
     transition: all 0.3s ease;
     box-shadow: 0 0 10px rgba(0, 255, 156, 0);
     &::before {
       content: '🎭'; /* Jester mask decoration */
       position: absolute;
       opacity: 0.5;
     }
   }
   
   .interactive-element:hover {
     box-shadow: 0 0 20px rgba(0, 255, 156, 0.5);
     transform: translateY(-2px);
     &::after {
       content: '🎼'; /* Musical notes on hover */
       animation: float 2s infinite ease-in-out;
     }
   }

   @keyframes float {
     0%, 100% { transform: translateY(0) rotate(0deg); }
     50% { transform: translateY(-10px) rotate(10deg); }
   }
   ```

3. **Musical Interface Elements**
   - Use mandolin-shaped progress bars
   - Implement luth-inspired dropdown menus
   - Create jester-themed notification badges
   ```css
   .progress-bar {
     /* Mandolin-shaped container */
     border-radius: 50% 20% 50% 20%;
     background: linear-gradient(45deg, ${theme.colors.primary}, ${theme.colors.secondary});
     &::before {
       content: '🪕'; /* String instrument decoration */
       position: absolute;
     }
   }
   ```

### Responsive Design
1. **Grid System**
   ```typescript
   // components/Grid.tsx
   const Grid = styled.div`
     display: grid;
     grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
     gap: 2rem;
     
     @media (max-width: 768px) {
       grid-template-columns: 1fr;
       gap: 1rem;
     }
   `;
   ```

2. **Breakpoints**
   ```typescript
   // styles/breakpoints.ts
   export const breakpoints = {
     mobile: '320px',
     tablet: '768px',
     desktop: '1024px',
     widescreen: '1440px'
   }
   ```

3. **Typography Scale**
   ```css
   :root {
     --font-heading: 'BladeRunner', sans-serif;
     --font-body: 'Cyberpunk', sans-serif;
     
     /* Responsive font sizes */
     --fs-h1: clamp(2rem, 5vw, 4rem);
     --fs-h2: clamp(1.5rem, 4vw, 3rem);
     --fs-body: clamp(1rem, 2vw, 1.2rem);
   }
   ```

### Interactive Elements
1. **Buttons & Controls**
   ```typescript
   const GameButton = styled.button`
     background: transparent;
     border: 2px solid ${theme.colors.primary};
     color: ${theme.colors.primary};
     padding: 0.75rem 2rem;
     position: relative;
     overflow: hidden;
     
     &::before {
       content: '';
       position: absolute;
       background: ${theme.colors.primary};
       opacity: 0.2;
       transition: transform 0.3s ease;
     }
     
     &:hover::before {
       transform: translateX(100%);
     }
   `;
   ```

2. **Loading States**
   ```typescript
   const LoadingIndicator = styled.div`
     border: 3px solid transparent;
     border-top: 3px solid ${theme.colors.accent};
     border-radius: 50%;
     width: 40px;
     height: 40px;
     animation: spin 1s linear infinite;
     filter: drop-shadow(0 0 10px ${theme.colors.accent});
   `;
   ```

### Animation Guidelines
1. **Micro-interactions**
   ```typescript
   const transitions = {
     smooth: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
     bounce: 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
     glow: 'box-shadow 0.3s ease'
   }
   ```

2. **Page Transitions**
   ```typescript
   // components/PageTransition.tsx
   const pageVariants = {
     initial: { opacity: 0, scale: 0.98 },
     enter: { opacity: 1, scale: 1 },
     exit: { opacity: 0, scale: 1.02 }
   }
   ```
