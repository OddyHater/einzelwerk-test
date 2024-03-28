/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        arboria: ['"Arboria-medium"']
      },
      maxWidth: {
        '640px': '640px',
      },
      height: {
        '64px': '64px',
      },
      padding: {
        '20px': '20px',
        '18px': '18px',
        '24px': '24px',
        '40px': '40px',
      },
      margin: {
        '8px': '8px',
        '12px': '12px',
        '16px': '16px',
        '24px': '24px',
        '32px': '32px',
      },
      gap: {
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
        '20px': '20px',
        '24px': '24px',
        '32px': '32px',
        '10000px': '10000px',
      },
      fontSize: {
        '40px': '40px',
        '20px': '20px',
        '18px': '18px',
        '16px': '16px',
        '12px': '12px',
      },
      letterSpacing: {
        '-1.2px': '-1.2px',
        '-0.2px': '-0.2px'
      },
      lineHeigh: {
        '1.1': '1.1',
        '1.5': '1.5',
        '26px': '26px'
      }
    },
  },
  plugins: [],
};
