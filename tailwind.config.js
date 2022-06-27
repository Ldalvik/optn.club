module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'optn': {
          'dark': '#4c4c47',
          'darker': '#2d2d2a',
          'darkest': '#1e1e1e',
          'blue': 'hsl(191, 100%, 32%)',
          'blue-light': 'hsl(191, 93%, 72%)',
          'red': '#ed254e',
          'teal': '#35c1c0',
          'yellow': 'rgb(255, 189, 51)',
        },
        'fot-blue': {
          DEFAULT: 'hsl(191, 100%, 32%)',
          light: 'hsl(191, 93%, 72%)',
          dark: 'hsl(191, 100%, 10%)',
          darkest: 'hsl(191, 100%, 5%)',
        },
        'fot-green': {
          DEFAULT: 'hsl(169, 100%, 40%)',
          dark: 'hsl(169, 100%, 26%)',
        },
        'fot-yellow': {
          DEFAULT: 'rgb(255, 189, 51)',
        },
        'offwhite': {
          DEFAULT: 'rgb(250, 245, 236)',
        },

      },
    },
  },
  plugins: [],
};
