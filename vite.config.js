import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      org: "jsm-t5",
      project: "javascript-react",
    },
  ],

  build: {
    sourcemap: true,
  },
});
