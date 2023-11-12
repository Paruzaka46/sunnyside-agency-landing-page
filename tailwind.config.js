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
        'mobile': "url('/images/mobile/image-header.jpg')",
        'ph-desktop': "url('/images/desktop/image-photography.jpg')",
        'ph-mobile': "url('/images/mobile/image-photography.jpg')",
        'gh-desktop': "url('/images/desktop/image-graphic-design.jpg')",
        'gh-mobile': "url('/images/mobile/image-graphic-design.jpg')"
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
        'my-yellow': 'hsl(51, 100%, 49%)',
        'graphic-design': 'hsl(167, 40%, 24%)',
        'photography': 'hsl(198, 62%, 26%)',
        'footer': 'hsl(168, 34%, 41%)',
        'footer-bg': 'hsl(168, 53%, 61%)',
        'vddes-blue': 'hsl(212, 27%, 19%)',
        'vdg-blue': 'hsl(213, 9%, 39%)',
        'dg-blue': 'hsl(232, 10%, 55%)',
        'g-blue': 'hsl(210, 4%, 67%)'
      }
    },
  },
  plugins: [],
}

