/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}','./components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0b0b0b',
        panel: '#111111',
        accent: '#39ff14'
      },
      fontFamily: {
        mono: ['Fira Code','ui-monospace','SFMono-Regular','Menlo','Monaco','monospace'],
        sans: ['Inter','ui-sans-serif','system-ui']
      }
    }
  },
  plugins: []
}
