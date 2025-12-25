import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-blue': '#0077FF',
                'blu-electric': '#167DFF',
                'blu-deep': '#0A1A4A',
                'dark-navy': '#0A0F1A',
            },
            fontFamily: {
                sans: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
};

export default config;
