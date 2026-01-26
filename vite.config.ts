import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Use the function form of defineConfig to access the 'mode' variable
export default defineConfig(({ mode }) => ({
  server: {
    port: 5173,
    strictPort: true,
    // Fix: Removed the extra closing brace that was here
  },
  plugins: [
    react(),
    // Now 'mode' is correctly defined from the function arguments above
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));