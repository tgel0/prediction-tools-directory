import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        'terminal-black': '#0C0C0C',
        'terminal-dark': '#121212',
        'terminal-slate': '#1E293B',
        'neon-green': '#00FF41',
        'neon-blue': '#00F0FF',
        'gold': '#FFD700',
        'dim-gray': '#4B5563',
      },
      fontFamily: {
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      }
    }
  },

  plugins: []
} as Config;

