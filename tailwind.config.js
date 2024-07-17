/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        auth_primary_Color: "#11175D",
        auth_secondary_Color: "rgba(0, 0, 0, 0.42)",
        primery_Blue: "#5F35F5",
      },
      fontFamily: {
        custom_nunito: ["Nunito", "sans-serif"],
        custom_popins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [
    // ...
    require("tailwind-scrollbar"),
  ],
};
