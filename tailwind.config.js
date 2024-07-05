/** @type {import('tailwindcss').Config} */
export default {
  content: [    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      order: {
        reset: '0',
      },
    },
  },
  variants: {},
  plugins: [],
}

