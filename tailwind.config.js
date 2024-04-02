export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/preline/preline.js',
  ],
   theme: {
    colors:{
      primary: '#26C1CD',
      secondary: '#B25499',
      tertiary: '#FAB354',
      body: '#2D3648', // base text color
      bg: '#FFFFF8',
      dark: '#0F0D0E',
      white: "#fff",
      black: "#000",
      warning: "#CD3226",
      transparent: "transparent"
    },
    extend: {
      colors: {
        greyscale: {
          200: '#F7F9FC',
          300: '#E2E7F0',
          400: '#CBD2E0',
          600: '#717D96'
        },
      },
      flexBasis: {
        "1/2-gap-4": "calc(50% - 1rem)"
      },
      width: {
        "1/2-gap-4": "calc(50% - 1rem)"
      },
      boxShadow:{
        "subtle": "rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;"
      },
      fontFamily: {
        "poppins": ['Poppins', 'sans-serif']
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