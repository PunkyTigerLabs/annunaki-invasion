/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          bg: '#0D0A1F',
          card: '#13103A',
          border: '#2A2555',
        },
        cyan: {
          DEFAULT: '#00F0FF',
          glow: 'rgba(0,240,255,0.3)',
        },
        magenta: {
          DEFAULT: '#FF00FF',
          glow: 'rgba(255,0,255,0.3)',
        },
        gold: {
          DEFAULT: '#FFD700',
          glow: 'rgba(255,215,0,0.3)',
          dark: '#B8860B',
        },
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'cosmic-gradient': 'linear-gradient(135deg, #0D0A1F 0%, #1A0D3D 50%, #0D0A1F 100%)',
        'cyan-glow': 'linear-gradient(to right, #00F0FF, #0080FF)',
        'gold-glow': 'linear-gradient(to right, #FFD700, #FF8C00)',
        'magenta-glow': 'linear-gradient(to right, #FF00FF, #9900CC)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(0,240,255,0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(0,240,255,0.8)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
