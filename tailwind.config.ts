import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'yellobg': "#F8F1DDC2",
       'custom-bg': '#ac8a4a',
       'light-bg':'#fff4e0'
      },
      fontSize: {
        '14xl': '14px',
        '15xl': '15px',
        '16xl': '16px',
        '17xl': '17px',
        '18xl': '18px',
        '20xl': '20px',
        '25xl': '25px',
        '38xl': '38px',
        '42xl': '42px',
        '50xl': '50px',
       
    },
   
    },
  },
  plugins: [],
} satisfies Config;
