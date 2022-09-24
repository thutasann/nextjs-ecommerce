module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'klink-primary': "#151D72",
        'klink-primary-hover': '#1726BD',
        'klink-dim' : "#939DD4",
        'klink-dim-hover' : "#8EA0FF"
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
