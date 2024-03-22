export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/preline/preline.js',
  ],
   theme: {
  //   colors:{
  //     primary: '#26C1CD',
  //     secondary: '#B25499',
  //     body: '#2D3648', // base text color
  //     bg: '#FFFFF8',
  //     dark: '#0F0D0E',
  //   },
    extend: {
      colors: {
        greyscale: {
          200: '#F7F9FC',
          300: '#E2E7F0',
          400: '#CBD2E0',
        },
      },
      fontFamily: {
        // font family to be added
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
        "5xl": "3.25rem",
        "6xl": "4rem",
      },
    },
  }
}