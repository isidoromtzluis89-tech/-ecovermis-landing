/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        eco: {
          // Brief family, vivos y menos oscuros (sin neón)
          primary: '#557B45',
          secondary: '#9ED484',
          accent: '#8FD455',
          bg: '#1A2F20',
          surface: '#243D2A',
          elevated: '#2E4E35',
          text: '#F7FAF5',
          muted: '#D5E6CC',
          light: '#F3F7EF',
          ink: '#142214',
          glow: '#B4EB78',
          field: '#6FA85A',
        },
      },
      fontFamily: {
        display: ['Montserrat', 'system-ui', 'sans-serif'],
        body: ['Dosis', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 8px 30px rgba(26, 47, 32, 0.28)',
        lift: '0 14px 44px rgba(26, 47, 32, 0.35)',
        glow: '0 0 42px rgba(143, 212, 85, 0.28)',
      },
      backgroundImage: {
        'eco-radial':
          'radial-gradient(ellipse 80% 60% at 70% 20%, rgba(158, 212, 132, 0.32), transparent 55%), radial-gradient(ellipse 60% 50% at 10% 80%, rgba(85, 123, 69, 0.4), transparent 50%)',
        'eco-fade':
          'linear-gradient(180deg, #1A2F20 0%, #243D2A 50%, #1A2F20 100%)',
      },
    },
  },
  plugins: [],
};
