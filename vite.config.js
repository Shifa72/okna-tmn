import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_URL || '/', // Динамическая база URL
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'] // Изолируем зависимости в отдельный chunk
        }
      }
    },
    minify: 'terser', // Используем terser для минификации
    terserOptions: {
      compress: {
        drop_console: true // Удаляем консольные логи в production
      }
    }
  },
  server: {
    port: 3000 // Порт для локального сервера
  }
})