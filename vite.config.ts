/// <reference types="vite/client" />
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import type { InlineConfig } from "vitest";
import type { UserConfig } from "vite";

type ViteConfig = UserConfig & { test: InlineConfig };
const config: ViteConfig = {
  plugins: [react()],
  server: {
    port: 3000,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    css: true,
  },
};

export default defineConfig(config);
