/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite-react/**/*.js",
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    screens: {
      xs: '500px',      // Extra small screen
      sm: '640px',      // Small screen
      md: '800px',      // Medium screen
      lg: '1000px',     // Large screen
      xl: '1200px',     // Extra large screen
      '2xl': '1400px',  // Twice extra large screen
    },
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      },
      colors: {
        primary: {
          light: '#6ee7b7',
          DEFAULT: '#3b82f6',
          dark: '#9333ea',
        },
        secondary: {
          light: '#fbcfe8',
          DEFAULT: '#f87171',
          dark: '#ef4444',
        },
        background: {
          light: '#f3f4f6',
          DEFAULT: '#ffffff',
          dark: '#1f2937',
        },
        text: {
          light: '#111827',
          DEFAULT: '#4b5563',
          dark: '#9ca3af',
        },
      },
    },
  },
  
  variants: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),

  ],
}
