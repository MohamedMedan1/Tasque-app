/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        accent: "var(--accent)",
        secondary: "var(--secondary)",
        "main-text": "var(--main-text)",
        background: "var(--main-bg)",
        input: "var(--input-bg)",
        table: "var(--table-bg)",
        redLabel: "var(--red-label)",
        greenLabel: "var(--green-label)",
        redText: "var(--red-text)",
        greenText: "var(--green-text)",
      },
    },
  },
  plugins: [],
};
