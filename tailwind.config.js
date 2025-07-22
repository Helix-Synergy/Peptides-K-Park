// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        // Inferred from footer/sidebar background
        'dark-purple-blue': '#1c1c2a', // A deep, slightly bluish purple for backgrounds
        'dark-purple-blue-light': '#2a2a3e', // Slightly lighter for elements within dark sections
        'peptides-purple-dark': '#4b0082', // Deeper purple for some elements
        'peptides-purple-light': '#6a0dad', // Lighter purple for accents
        // Inferred from header/hero gradients
        'gradient-start-purple': '#8B5CF6', // Example: from-purple-700
        'gradient-end-pink': '#EC4899',   // Example: to-pink-600
        // Other general colors used in the layout
        'purple-600': '#9333ea', // For buttons, active states
        'purple-700': '#7e22ce', // Hover state for purple buttons
        'purple-300': '#d8b4fe', // For lighter purple accents (e.g., sidebar title)
        'blue-100': '#e0f2f7', // Background start
        'green-50': '#f0fdf4',  // Background middle
        'pink-50': '#fce4ec',  // Background end
      },
      fontFamily: {
        // Make sure 'Inter' is included if you use it globally via Google Fonts or @font-face
        inter: ['Inter', 'sans-serif'],
      },
      // Important for Locomotive Scroll with fixed header
      // This adds a top-padding to sections when scrolling to them,
      // preventing content from hiding behind the fixed navbar.
      scrollMargin: {
        'navbar': '96px', // Matches GLOBAL_HEADER_HEIGHT in JSX
      },
    },
  },
  plugins: [],
}