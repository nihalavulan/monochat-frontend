/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0f172a",          // slate-900
        panel: "#111827",       // gray-900
        primary: "#22c55e",     // green-500
        bubbleMe: "#22c55e",
        bubbleOther: "#1f2937", // gray-800
      },
    },
  },
  plugins: [],
};
