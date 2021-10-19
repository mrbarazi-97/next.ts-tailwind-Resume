module.exports = {
  purge: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      kaushan: ['Kaushan Script'],
    },
    extend: {
      colors: {
        blue: {
          DEFAULT: '#60A5FA',
        },
      },
    },
  },
  variants: {
    extend: {},
  },

  plugins: [],
};
