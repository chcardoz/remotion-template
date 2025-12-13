import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    host: "0.0.0.0",
    allowedHosts: true, // Allow all hosts (needed for e2b.app subdomains)
  },
  build: {
    rollupOptions: {
      input: "./index.html",
    },
  },
});
