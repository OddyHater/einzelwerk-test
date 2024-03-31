/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        arboria: ['"Arboria-medium"'],
      },
      maxWidth: {
        '640px': '640px',
      },
      maxHeight: {
        '24px': '24px',
        '120px': '120px',
      },
      width: {
        '24px': '24px',
      },
      height: {
        '24px': '24px',
        '64px': '64px',
      },
      padding: {
        '3px': '3px',
        '4px': '4px',
        '6px': '6px',
        '18px': '18px',
        '20px': '20px',
        '24px': '24px',
        '40px': '40px',
      },
      margin: {
        '4px': '4px',
        '8px': '8px',
        '12px': '12px',
        '16px': '16px',
        '24px': '24px',
        '32px': '32px',
      },
      gap: {
        '8px': '8px',
        '16px': '16px',
        '32px': '32px',
      },
      colors: {
        'ui-blue': {
          500: '#6366F1',
          600: '#4F46E5',
        },
        'ui-gray': {
          100: '#F3F4F6',
          200: '#E5E7EB',
          400: '#9CA3AF',
          500: '#6B7280',
          700: '#374151',
          950: '#030712',
          'bg': 'rgba(3, 7, 18, 0.72)',
        },
        'ui-red': {
          1: '#FF2525',
        }
      },
      borderRadius: {
        '8px': '8px',
        '20px': '20px',
        '24px': '24px',
        '32px': '32px',
        '1000px': '1000px',
        '10000px': '10000px',
      },
      fontSize: {
        '7xl': '90px',
        '6xl': '64px',
        '5xl': '48px',
        '4xl': '40px',
        '3xl': '32px',
        '2xl': '24px',
        'xl': '20px',
        'lg': '18px',
        'base': '16px',
        'sm': '14px',
        'xs': '12px',
      },
      lineHeight: {
        '7xl': '96px',
        '6xl': '72px',
        '5xl': '56px',
        '4xl': '44px',
        '3xl': '40px',
        '2xl': '32px',
        'xl': '30px',
        'lg': '26px',
        'base': '24px',
        'sm': '20px',
        'xs': '16px',
      },
      letterSpacing: {
        '-1.2px': '-1.2px',
        '-0.2px': '-0.2px'
      },
    },
  },
  plugins: [],
};
