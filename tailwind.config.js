/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'mandolin-strings': '#F5E6D3',
        'medieval-night': '#2A2D34',
        'parchment': '#F4E4BC',
        'castle-stone': '#4A4E69',
        'jester-green': '#2ECC71',
        'jester-pink': '#FF69B4',
        'castle-black': '#1E1F23',
        'scroll-white': '#F9F6F0',
        'ink-dark': '#2C3E50',
        'parchment-light': '#FAF3E3',
        'great-hall': '#D4C5B1',
        'dungeon': '#1C1E24',
      },
      fontFamily: {
        'medieval': ['Cinzel', 'serif'],
        'manuscript': ['Lora', 'serif'],
        'bardic': ['Crimson Text', 'serif'],
      },
      boxShadow: {
        'scroll': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'magical': '0 8px 16px -4px rgba(46, 204, 113, 0.2), 0 4px 8px -2px rgba(255, 105, 180, 0.1)',
      },
    },
  },
  plugins: [],
}