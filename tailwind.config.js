module.exports = {
    node: "jit",
    content: ['../components/**/*.{js,jsx,tsx, ts}', '../pages/**/*.{js,jsx,ts,tsx}', './public/**/*.html'], //add this line
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
