import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'gradient-custom': 'linear-gradient(to right, rgba(255, 255, 255, 1), rgba(3, 85, 83, 0.1))'
      },
    },
    colors: {
      "blue-black": "#030C59",
      "white": "#ffff",
      "green": "rgba(3, 85, 83, 1)",
      "light-green": "rgba(255, 255, 255, 1)",
      "black-main": "rgba(0, 0, 0, 1)",
    },
  },
  plugins: [],
};
export default config;
