/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sanfelix: {
          50: '#ecffed',
          100: '#d2ffd8',
          200: '#a8ffb2',
          300: '#65ff78',
          400: '#1bff34',
          500: '#00f90b',
          600: '#00d004',
          700: '#00a207',
          800: '#007e0b',
          900: '#005c0b',
          950: '#001f04',
        },
      },
    },
  },
  plugins: [],
};
