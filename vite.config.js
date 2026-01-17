import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  server: {
    host: true,
    port: 5173,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        site: resolve(__dirname, "site_page.html"),
        privacy_policy: resolve(__dirname, "privacy_policy.html"),
        donate: resolve(__dirname, "donate.html"),
        stories: resolve(__dirname, "stories.html"),
      },
    },
  },
})
