'use client';

import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-medieval-night flex items-center justify-center">
          <div className="bg-castle-stone p-8 rounded-lg shadow-magical text-scroll-white">
            <h2 className="text-2xl font-medieval mb-4">A mystical error has occurred!</h2>
            <p className="font-manuscript">Our court wizards have been notified and are working to resolve the issue.</p>
            <button
              className="mt-4 bg-jester-green hover:bg-jester-pink text-scroll-white font-bardic py-2 px-4 rounded transition-colors duration-200"
              onClick={() => this.setState({ hasError: false })}
            >
              Try Again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}