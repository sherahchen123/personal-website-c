// vite.config.js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  base: "/personal-website-c/",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    },
  },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // 2. 使用更简洁、更可靠的 manualChunks 策略
        manualChunks: {
          // 将 Vue 相关的库打包在一起
          vue: ['vue', 'vue-router', 'vuex'],
          // 将其他所有 node_modules 打包成一个 vendor chunk
          vendor: ['node_modules'],
        },
        // 保留你其他的 output 配置
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: ({ name }) => {
          return /\.(css|png|jpe?g|gif|svg)$/.test(name ?? '')
            ? 'assets/[name]-[hash][extname]'
            : 'assets/[name]-[hash][extname]';
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
