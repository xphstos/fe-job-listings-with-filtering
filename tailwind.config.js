import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: 'hsl(0, 0%, 100%)',
      cyan: {
        100: 'hsl(180, 52%, 96%)', // Background
        200: 'hsl(180, 31%, 95%)', // Filter tablets
        300: 'hsl(180, 8%, 52%)',
        400: 'hsl(180, 29%, 50%)',
        500: 'hsl(180, 14%, 20%)'
      }
    },
    fontWeight: {
      normal: 500,
      bold: 700
    },
    extend: {
      fontFamily: {
        sans: ['"League Spartan"', 'sans-serif']
      }
    }
  },
  plugins: [
    plugin(({ addVariant }) =>
      addVariant('aria-current', [
        '&:where([aria-current="page"])',
        '&:where([aria-current="step"])',
        '&:where([aria-current="location"])',
        '&:where([aria-current="date"])',
        '&:where([aria-current="time"])',
        '&:where([aria-current="true"])'
      ])
    ),
    plugin(({ addVariant }) => {
      addVariant('hocus', ['&:hover', '&:focus']);
      addVariant('hocus-visible', ['&:hover', '&:focus-visible']);
    }),
    plugin(({ matchVariant }) => {
      matchVariant('nth-range', (value) => {
        const range = value.split('/');
        return `&>:where(:nth-child(n+${range[0]}):nth-child(-n+${range[1]}))`;
      });
    }),
    plugin(({ matchVariant }) => {
      matchVariant(
        'nth',
        (value) => {
          return `& :where(:nth-child(${value}))`;
        },
        {
          values: {
            odd: 'odd',
            even: 'even'
          }
        }
      );
    })
  ]
};
