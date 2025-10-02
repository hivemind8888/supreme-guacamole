import { ErrorBoundary } from './_components/ErrorBoundary';
import { RecipeGallery } from './_components/RecipeGallery';

export default function Home() {
  return (
    <ErrorBoundary>
      <RecipeGallery />
    </ErrorBoundary>
  );
}
