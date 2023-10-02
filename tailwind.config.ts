import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['"Work Sans"', '"sans-serif"'],
        'outfit': ['"Outfit"', '"sans-serif"'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
export default config
