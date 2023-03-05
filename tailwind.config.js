// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#38bdf8",
          secondary: "#94A3B8",
          accent: "#1FB2A6",
          neutral: "#ffffff",
          "base-100": "#1E293B",
          info: "#2DD4BF",
          success: "#38d9a9",
          warning: "#ff922b",
          error: "#fa5252",
        },
      },
      {
        light: {
          primary: "#6d28d9",
          secondary: "#334155",
          accent: "#1FB2A6",
          neutral: "#ffffff",
          "base-100": "#ffffff",
          info: "#2DD4BF",
          success: "#364fc7",
          warning: "#5c940d",
          error: "#c92a2a",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
