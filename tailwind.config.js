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

/*
Regex's for formatting export from coolers.co:

"hex": "([0-9a-fA-F]+)"
"hex": "#$1"

"(rgb|hsb|hsl|lab)": \[\n\s+(-?\d+),\n\s+(-?\d+),\n\s+(-?\d+)\n\s+\]
"$1": "$1($2, $3, $4)"

hsl\((\d+), (\d+), (\d+)\)
hsl($1, $2%, $3%)

"cmyk": \[\n\s+(\d+),\n\s+(\d+),\n\s+(\d+),\n\s+(\d+)\n\s+\]
"cmyk": "cmyk($1, $2, $3, $4)"

^\s+"(cmyk|hsb|lab)": .*,?\n
<empty>

,(\n\s+\})
$1


fot-blue: #0085A3
fot-light-blue: #75E2FA
#0095b7
#00151a
fot-dark-blue: #002A33
fot-green: #00CCA7
fot-yellow: #FFBD33
offwhite: #FAF5EC
*/
