/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['"Barlow Semi Condensed"', 'sans-serif'],
      },
      colors: {
        'score-text': 'hsl(229, 64%, 46%)',
        'header-outline': 'hsl(246, 11%, 37%)',
        'dark-text': 'hsl(229, 25%, 31%)',
      },
      backgroundImage: {
        'radial-bg': 'radial-gradient(circle at top, hsl(214, 47%, 23%), hsl(237, 48%, 15%))',
      },
      boxShadow: {
        'rock-inner': 'inset 0 6px 0 rgba(0,0,0,0.25)',
        'paper-inner': 'inset 0 6px 0 rgba(0,0,0,0.25)',
        'scissors-inner': 'inset 0 6px 0 rgba(0,0,0,0.25)',
        'winner-ring-sm': '0 0 0 40px rgba(255,255,255,0.04), 0 0 0 80px rgba(255,255,255,0.03), 0 0 0 120px rgba(255,255,255,0.02)',
        'winner-ring-lg': '0 0 0 60px rgba(255,255,255,0.04), 0 0 0 120px rgba(255,255,255,0.03), 0 0 0 180px rgba(255,255,255,0.02)',
      },
    },
  },
  plugins: [],
}
