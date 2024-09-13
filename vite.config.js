import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          $primary: #007bff;
          $secondary: #6c757d;
        `,
      },
    },
  },
});
