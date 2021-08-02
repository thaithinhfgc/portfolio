const colors = require('tailwindcss/colors');
const theme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: {
        content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        spacing: { ...theme.spacing },
        extend: {},
        colors: {
            ...colors,
            'dawn-pink': {
                DEFAULT: '#F4ECE6',
                50: '#FFFFFF',
                100: '#FFFFFF',
                200: '#FFFFFF',
                300: '#FFFFFF',
                400: '#FFFFFF',
                500: '#F4ECE6',
                600: '#E4D1C3',
                700: '#D5B69F',
                800: '#C59B7C',
                900: '#B68058',
            },
            sisal: {
                DEFAULT: '#D8CCC2',
                50: '#FFFFFF',
                100: '#FFFFFF',
                200: '#FFFFFF',
                300: '#FFFFFF',
                400: '#ECE6E1',
                500: '#D8CCC2',
                600: '#C4B2A3',
                700: '#B09884',
                800: '#9C7E65',
                900: '#7E6550',
            },
        },
        backgroundImage: {
            ...theme.backgroundImage,
        },
        gridTemplateColumns: {
            ...theme.gridTemplateColumns,
        },
        boxShadow: {
            ...theme.boxShadow,
        },
    },
    variants: {
        extend: {},
    },
    corePlugins: {
        float: false,
    },
    plugins: [],
};
