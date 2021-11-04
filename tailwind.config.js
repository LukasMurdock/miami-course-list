const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ['Inter', ...defaultTheme.fontFamily.sans]
      // },
      // colors: {
      //   // Configure your color palette here
      //   'virra-dark': '#8d39fa',
      //   'virra-darker': '#6228AD',
      //   'virra-light': '#9D54FC',
      //   'virra-super-light': '#ece1fa',
      //   'green-dark': '#1C7C46',
      //   'green-light': '#249C58',
      //   'custom-red': '#c8314d'
      // },
      // zIndex: {
      //   '-10': '-10'
      // }
      // outline: {
      //   // grey: '2px solid #9CA3AF'
      // },
      // gridTemplateColumns: {
      //   // Complex site-specific row configuration
      //   customgrid: 'repeat(auto-fill,minmax(250px,1fr))'
      // }
    },
    variants: {}
  },
  plugins: [
    // require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography')
  ]
};
