/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          900: '#0F172A',
          800: '#1E293B',
          700: '#334155',
          600: '#475569',
          400: '#94A3B8',
          100: '#F8FAFC',
        },
        blue: {
          500: '#3B82F6',
          600: '#2563EB',
          400: '#60A5FA',
        },
        mint: {
          500: '#10B981',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'blue-glow': '0 4px 20px -5px rgba(59, 130, 246, 0.25)',
      }
    },
  },
  plugins: [],
};
