const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      // Build your palette here
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.blueGray,
      blue: colors.lightBlue,
      white: colors.white,
      'ao-mid-blue': {
        100: '#F3F6F7',
        200: '#E7EDF0',
        300: '#D0DBE1',
        400: '#A1B7C3',
        500: '#7192A4',
        600: '#426E86',
        DEFAULT: '#134A68',
        700: '#0F3B53',
        800: '#0B2C3E',
        900: '#081E2A',
      },
      'ao-dk-blue': {
        100: '#F2F4F5',
        200: '#E5E9EB',
        300: '#CCD4D8',
        400: '#99AAB1',
        500: '#667F89',
        600: '#335562',
        DEFAULT: '#002A3B',
        700: '#00222F',
        800: '#001923',
        900: '#001118',
      },
      'ao-lt-blue': {
        100: '#F2FBFC',
        200: '#E5F7F8',
        300: '#CCEFF2',
        400: '#99DFE5',
        500: '#66CFD8',
        600: '#33BFCB',
        DEFAULT: '#00AFBE',
        700: '#008C98',
        800: '#006972',
        900: '#00464C',
      },
      'ao-teal': {
        100: '#F2F8F9',
        200: '#E5F1F3',
        300: '#CCE3E8',
        400: '#99C8D1',
        500: '#66ACBB',
        600: '#3391A4',
        DEFAULT: '#00758D',
        700: '#005E71',
        800: '#004655',
        900: '#002F38',
      },
      'ao-aqua': {
        100: '#F2FAF9',
        200: '#E5F5F4',
        300: '#CCEBE9',
        400: '#99D8D3',
        500: '#66C4BE',
        600: '#33B1A8',
        DEFAULT: '#009D92',
        700: '#007E75',
        800: '#005E58',
        900: '#003F3A',
      },
      'ao-green': {
        100: '#F4FAF8',
        200: '#E8F6F1',
        300: '#D3EDE3',
        400: '#A7DBC7',
        500: '#7AC9AB',
        600: '#4EB78F',
        DEFAULT: '#22A573',
        700: '#1B845C',
        800: '#146345',
        900: '#0E422E',
      },
    },
    extend: {
      gridTemplateColumns: {

        // Complex site-specific column configuration
        'control-header': '4rem 1fr',

      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
