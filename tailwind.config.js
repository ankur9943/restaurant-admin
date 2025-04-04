/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'get-started': 'url("../assets/images/footer/get-started.png")'
      // },
      colors: {
        'white': '#FFFFFF',
        'black': '#000',
        'dark-blue': '#36F',
        'gray': '#5D7285',
        'gray-2': '#D9D9D9',
      },
      screens: {
        'xs': '480px',
        // => @media (min-width: 480px) { ... }

        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        'mid-xl': '1440px',
        // => @media (min-width: 1440px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }

        '3xl': '1920px',
        // => @media (min-width: 1920px) { ... }

        '4xl': '2302px',
        // => @media (min-width: 2302px) { ... }

        '5xl': '2500px',
        // => @media (min-width: 2500px) { ... }
      },
      fontFamily: {
        'sans': ['Poppins']
      },
    },
  },
  plugins: [],
}
