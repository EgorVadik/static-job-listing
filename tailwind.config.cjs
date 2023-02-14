/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                darkCyan: 'hsl(180, 29%, 50%)',
                lightGrayCyanBg: 'hsl(180, 52%, 96%)',
                lightGrayCyanTablet: 'hsl(180, 31%, 95%)',
                darkGrayCyan: 'hsl(180, 8%, 52%)',
                veryDarkGrayCyan: 'hsl(180, 14%, 20%)',
            },
            fontFamily: {
                leagueSpartan: ['League Spartan', 'sans-serif'],
            },
            fontSize: {
                text: '15px',
            },
        },
    },
    plugins: [],
}
