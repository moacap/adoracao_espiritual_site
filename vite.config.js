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
        adocao_info: resolve(__dirname, 'adocao_info.html'),
        participar_info: resolve(__dirname, 'participar_info.html'),
        privacy_policy: resolve(__dirname, 'privacy_policy.html'),
        donate: resolve(__dirname, 'donate.html'),
        stories: resolve(__dirname, 'stories.html'),
        story_famosos: resolve(__dirname, 'story-famosos.html'),
        story_padre_pio: resolve(__dirname, 'story-padre-pio.html'),
        story_melissa: resolve(__dirname, 'story-melissa.html'),
        story_tong: resolve(__dirname, 'story-tong.html'),
        story_matheus: resolve(__dirname, 'story-matheus.html'),
        recomendacao_info: resolve(__dirname, 'recomendacao_info.html'),
        familia_ulma: resolve(__dirname, 'familia_ulma.html'),
        who_we_are: resolve(__dirname, 'who_we_are.html'),
        site_page: resolve(__dirname, 'site_page.html'),
      },
    },
  },
})
