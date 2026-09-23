import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { paper: "#F3F4F1", ink: "#14161A", accent: { DEFAULT: "#2B3CE8", dark: "#1F2DC4" } },
    fontFamily: { display: ["var(--font-display)", "system-ui", "sans-serif"], sans: ["var(--font-sans)", "system-ui", "sans-serif"] },
  } },
  plugins: [],
};
export default config;
