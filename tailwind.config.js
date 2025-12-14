/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Background Colors
        'bg-primary': '#000000',
        'bg-secondary': '#1F1F1F',
        'bg-tertiary': '#2A2A2A',
        'bg-panel': '#1A1A1A',
        
        // Accent Colors (Light Green)
        'accent-primary': '#00FF88',
        'accent-secondary': '#00CC6F',
        'accent-hover': '#00E67A',
        'accent-active': '#00B85C',
        
        // Text Colors
        'text-primary': '#FFFFFF',
        'text-secondary': '#CCCCCC',
        'text-tertiary': '#999999',
        'text-muted': '#666666',
        
        // Chat Bubble Colors
        'bubble-me': '#00FF88',
        'bubble-other': '#2A2A2A',
        'bubble-text-me': '#000000',
        'bubble-text-other': '#FFFFFF',
        
        // Status Colors
        'online': '#00FF88',
        'offline': '#666666',
        
        // Border Colors
        'border-primary': '#333333',
        'border-secondary': '#404040',
        'border-accent': '#00FF88',
        
        // Input Colors
        'input-bg': '#1F1F1F',
        'input-border': '#333333',
        'input-focus': '#00FF88',
        'input-text': '#FFFFFF',
        'input-placeholder': '#666666',
        
        // Button Colors
        'button-primary-bg': '#00FF88',
        'button-primary-text': '#000000',
        'button-primary-hover': '#00E67A',
        'button-secondary-bg': '#2A2A2A',
        'button-secondary-text': '#FFFFFF',
        'button-secondary-hover': '#333333',
        
        // Legacy aliases for backward compatibility
        bg: '#1F1F1F',
        panel: '#1A1A1A',
        primary: '#00FF88',
        bubbleMe: '#00FF88',
        bubbleOther: '#2A2A2A',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      spacing: {
        'xs': '0.25rem',   // 4px
        'sm': '0.5rem',    // 8px
        'md': '1rem',      // 16px
        'lg': '1.5rem',    // 24px
        'xl': '2rem',      // 32px
        '2xl': '3rem',     // 48px
        '3xl': '4rem',     // 64px
      },
      borderRadius: {
        'sm': '0.375rem',  // 6px
        'md': '0.5rem',    // 8px
        'lg': '0.75rem',   // 12px
        'xl': '1rem',      // 16px
        '2xl': '1.5rem',   // 24px
      },
      transitionDuration: {
        'fast': '150ms',
        'base': '200ms',
        'slow': '300ms',
      },
    },
  },
  plugins: [],
};
