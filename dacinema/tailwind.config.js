/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/"],
  theme: {
    screens: {
      phone: "480px",
      tablet: "640px",
      laptop: "1024px",
    },
    extend: {
      colors: {
        pri: "#ffde59",
        sec: "text-slate-50",
      },
    },
  },
  plugins: [],
};
