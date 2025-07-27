/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'skinops': {
          'black': '#0D0D0D',
          'orange': '#FF7A00',
          'gray': '#CCCCCC',
          'dark': '#1A1A1A',
          'darker': '#0A0A0A',
          'accent': '#FF8C00',
          'light-gray': '#E5E5E5',
          'card': '#1E1E1E',
          'border': '#2A2A2A'
        }
      },
      fontFamily: {
        'rajdhani': ['Rajdhani', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'orbitron': ['Orbitron', 'monospace'],
        'anton': ['Anton', 'sans-serif']
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out'
      },
      keyframes: {
        glow: {
          '0%': { 
            'box-shadow': '0 0 5px #FF7A00, 0 0 10px #FF7A00, 0 0 15px #FF7A00' 
          },
          '100%': { 
            'box-shadow': '0 0 10px #FF7A00, 0 0 20px #FF7A00, 0 0 30px #FF7A00' 
          }
        },
        slideUp: {
          '0%': { 
            transform: 'translateY(100%)', 
            opacity: '0' 
          },
          '100%': { 
            transform: 'translateY(0)', 
            opacity: '1' 
          }
        },
        slideDown: {
          '0%': { 
            transform: 'translateY(-100%)', 
            opacity: '0' 
          },
          '100%': { 
            transform: 'translateY(0)', 
            opacity: '1' 
          }
        },
        fadeIn: {
          '0%': { 
            opacity: '0' 
          },
          '100%': { 
            opacity: '1' 
          }
        },
        scaleIn: {
          '0%': { 
            transform: 'scale(0.9)', 
            opacity: '0' 
          },
          '100%': { 
            transform: 'scale(1)', 
            opacity: '1' 
          }
        }
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '12px',
        'lg': '24px',
        'xl': '40px'
      }
    },
  },
  plugins: [],
};