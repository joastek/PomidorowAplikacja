import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  main: "src/main.tsx",
  plugins: [react()],
});
