const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require('tailwindcss/colors');


/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ["LabelGrotesk", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				'primary-black': '#0A0909',
                'primary-black-base': '#030303',
                'primary-black-800': '#151414',
				'primary-black-700': '#1F1E1E',
				'primary-black-400': '#141414',
				'primary-gray-600': '#282828',
				'primary-gray-500': '#424242',
				'primary-gray-400': '#525252',
				'primary-gray-300': '#858585',
				'primary-gray-200':'#DEDEDE',
				'primary-gray-100':'#EDEDED',
				'primary-gray-50':'#F9F9F9',
				'success': '#29AE29',
				'warning': '#FFC62A',
				'error': '#EF4444',
				'orange-base': '#ED7615',
				'lavender-base': '#6E3CF5',
				'Sussie-base': '#38E1F1',
				'blue-jeans': '#0082FF'
			},
		},
	},
	plugins: [],
}
