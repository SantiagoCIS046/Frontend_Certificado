import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import https from 'https'

// Configuración de Vite: https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      "/api": {
        target: "https://857zg6m1-3000.use2.devtunnels.ms",
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
