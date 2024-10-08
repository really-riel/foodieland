import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        foodie: "#E7FAFE",
        breakfast: "#708246",
        vegan: "#6CC63F",
        meat: "#CC261B",
        dessert: "#F09E00",
        lunch: "#000000",
        chocolate: "#000000",
      },
      fontSize: {
        foodieSm: "clamp(0.4rem, 0.5rem + 1vw, 1rem)",
        foodieLg: "clamp(1rem, 1.5rem + 1vw, 3rem)",
        foodieXlg: "clamp(1.5rem, 2rem + 1vw, 5rem)",
      },
    },
    plugins: [],
  },
};
export default config;
