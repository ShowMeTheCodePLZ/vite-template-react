import type { UserConfigFn, UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";
import viteEslint from "vite-plugin-eslint";
import tsconfigPaths from "vite-tsconfig-paths";
import mkcert from "vite-plugin-mkcert";

const defineConfig: UserConfigFn = ({ command, mode }) => {
  const config: UserConfig = {
    server: {
      https: true,
    },
    plugins: [
      react(),
      tsconfigPaths(),
      legacy(),
      viteEslint(),
      mkcert({
        source: "coding",
      }),
    ],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            react: ["react"],
            "react-dom": ["react-dom"],
          },
        },
      },
    },
  };
  return config;
};

export default defineConfig;
