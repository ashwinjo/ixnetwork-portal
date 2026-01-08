/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                obsidian: {
                    0: '#0f111a', // Deep Void (Main Background)
                    1: '#181b26', // Card/Header Background
                    2: '#1f2330', // Table/Element Background
                    3: '#2a2f40', // Lighter Elements
                    accent: '#00f2ff', // Electric Cyan
                    accentHover: '#00cbd6',
                    secondary: '#ff4d6d', // Muted Red/Pink
                    textPrimary: '#ffffff',
                    textSecondary: '#94a3b8',
                }
            }
        },
    },
    plugins: [],
}
