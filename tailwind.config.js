/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'desktop': "url('/images/desktop/image-header.jpg')",
        'mobile': "url('/images/mobile/image-header.jpg')"
      },
      fontFamily: {
        'barlow': ['Barlow', 'sans-serif'],
        'fraunces': ['Fraunces', 'serif']
      },
      screens: {
        'mobile': '300px'
      },
      colors: {
        'soft-red': 'hsl(7, 99%, 70%)',
        'graphic-design': 'hsl(167, 40%, 24%)',
        'photography': 'hsl(198, 62%, 26%)',
        'footer': 'hsl(168, 34%, 41%)',
        'vddes-blue': 'hsl(212, 27%, 19%)',
        'vdg-blue': 'hsl(213, 9%, 39%)',
        'dg-blue': 'hsl(232, 10%, 55%)',
        'g-blue': 'hsl(210, 4%, 67%)'
      }
    },
  },
  plugins: [],
}

