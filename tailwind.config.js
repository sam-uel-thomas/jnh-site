/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        colors: {
            'orange': '#FF4A29',
        },
      	backgroundImage: {
			"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
			"gradient-conic":
			"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      	},
		animation: {
			'infinite-scroll': 'infinite-scroll 40s linear infinite',
            'bobbing-left': 'bobbing-left 1s ease-in-out infinite',
            'bobbing-r': 'bobbing-r 1s ease-in-out infinite',
		},
		keyframes: {
			'infinite-scroll': {
				from: { transform: 'translateX(0)' },
				to: { transform: 'translateX(-100%)' },
			},
            'bobbing-left': {
                '0%, 100%': { transform: 'translateX(0)' },
                '50%': { transform: 'translateX(-10px)' },
            },
            'bobbing-r': {
                '0%, 100%': { transform: 'translateX(0)' },
                '50%': { transform: 'translateX(10px)' },
            },
		},
    },
  },
  plugins: [],
};
