/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  corePlugins: {
    // Disable Tailwind's .container — we use our own full-width version
    container: false,
  },
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0066CC',
          dark: '#004499',
          light: '#3399FF',
        },
        secondary: {
          DEFAULT: '#FF6600',
          dark: '#CC5200',
          light: '#FF9933',
        },
        dark: '#0A0A0A',
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
