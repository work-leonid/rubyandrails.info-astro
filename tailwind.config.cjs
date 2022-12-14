/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: { 
			backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--gradient-color-stops))',
      }
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
