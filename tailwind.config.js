module.exports = {
    node: "jit",
    content: ['./src/components/**/*.{js,jsx,tsx, ts}', './src/pages/**/*.{js,jsx,ts,tsx}', './public/**/*.html'], //add this line
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
