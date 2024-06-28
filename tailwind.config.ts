import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      screens: {
        'sm': '375px',
        'md': '768px',
        'lg': '-1px',
        'xl': '1440px',
        '2xl': '-1px',
      },
      fontFamily: {
        poppins: "Poppins",
        nunito: "Nunito",
      },
      keyframes: {
        questionAnswerAnimation: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          }
        },
      },
      animation: {
        questionAnswerAnimation: "questionAnswerAnimation 0.5s linear",
      },
    },
  },
  plugins: [],
};
export default config;
