export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/preline/preline.js',
  ],
   theme: {
    colors:{
      primary: '#10A3B7',
      'primary-dark': '#219199',
      'primary-light': '#5cecf6',
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
          600: '#717D96',
          700: '#5c616a',
          800: '#4a4c51',
        },
      },
      flexBasis: {
        "1/2-gap-4": "calc(50% - 1rem)",
        "1/3-gap-4": "calc(33.3333% - 1rem)",
      },
      flex: {
        6: "1 1 60%"
      },
      width: {
        "1/2-gap-4": "calc(50% - 1rem)"
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