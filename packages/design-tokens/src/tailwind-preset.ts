import type { Config } from 'tailwindcss';

const designTokens = {
  colors: {
    background: {
      DEFAULT: '#030305',
      1: '#08080f',
      2: '#0d0d1a',
    },
    surface: {
      DEFAULT: 'rgba(255,255,255,0.035)',
      hover: 'rgba(255,255,255,0.06)',
    },
    border: {
      DEFAULT: 'rgba(255,255,255,0.07)',
      accent: 'rgba(96,165,250,0.4)',
    },
    text: {
      DEFAULT: '#f1f5f9',
      muted: '#64748b',
      dim: '#94a3b8',
    },
    blue: '#60a5fa',
    violet: '#a78bfa',
    green: '#34d399',
    orange: '#fb923c',
    cyan: '#00F0FF',
    success: '#00FF9D',
  },
  backgroundImage: {
    'grad-primary': 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
    'grad-soft': 'linear-gradient(135deg, rgba(96,165,250,0.1) 0%, rgba(167,139,250,0.1) 100%)',
  },
  boxShadow: {
    'glow-blue': '0 0 15px rgba(96,165,250,0.25)',
    'glow-violet': '0 0 15px rgba(167,139,250,0.25)',
    'glow-cyan': '0 0 15px rgba(0,240,255,0.5)',
  },
  fontFamily: {
    display: ['Space Grotesk', 'sans-serif'],
    body: ['Inter', 'sans-serif'],
    mono: ['JetBrains Mono', 'monospace'],
  },
  borderRadius: {
    '2xl': '1rem',
    '3xl': '1.5rem',
  },
  backdropBlur: {
    'glass': '12px',
  },
  transitionDuration: {
    '200': '200ms',
    '300': '300ms',
    '500': '500ms',
  },
  spacing: {
    'section': '80px',
    'section-lg': '120px',
  },
};

export const tailwindPreset: any = {
  theme: {
    extend: designTokens,
  },
  plugins: [],
};

export default tailwindPreset;