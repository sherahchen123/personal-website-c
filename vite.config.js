// vite.config.js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  base: "/personal-website-c/",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      'vue': path.resolve(__dirname, 'node_modules/vue/dist/vue.esm-bundler.js')
    },
  },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // format: "es", // 确保输出 ES 模块格式
        // 确保 chunk 文件使用相对路径
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        // 修复静态资源引用
        assetFileNames: ({ name }) => {
          return /\.(css|png|jpe?g|gif|svg)$/.test(name ?? '')
            ? 'assets/[name]-[hash][extname]'
            : 'assets/[name]-[hash][extname]'
        },
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  },
  server: {
    port: 3000,
    open: true,
    proxy: {
      "/api": {
        target: "https://api.example.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  optimizeDeps: {
    include: ["gsap", "axios", "aos"],
  },
});
