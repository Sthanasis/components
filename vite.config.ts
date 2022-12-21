import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  mode: "development",
  root: "./public",
  esbuild: {
    include: "./src/**.(ts | tsx)",
  },
  server: { open: "./public/index.html" },
});
