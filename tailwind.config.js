export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 예시
        primary: "#1E40AF",
        secondary: "#64748B",
        mygray: {
          light: "#f7f7f7",
          DEFAULT: "#d4d4d4",
          dark: "#4b5563",
        },
      },
    },
  },
  plugins: [],
}
