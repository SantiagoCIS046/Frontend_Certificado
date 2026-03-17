import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import https from 'https'

// Configuración de Vite: https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
