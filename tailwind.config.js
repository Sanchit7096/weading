/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'wedding-bg': '#E8F5E9',
                'wedding-dark': '#004D40',
                'wedding-text': '#3E2723',
                'wedding-accent': '#D4AF37',
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                script: ['"Great Vibes"', 'cursive'],
                heading: ['"Playfair Display"', 'serif'],
            },
        },
    },
    plugins: [],
}
