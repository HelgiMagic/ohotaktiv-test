import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/goods': {
        target: 'http://react.ohotaktiv.ru:5000',
        changeOrigin: true,
      },
    },
  },
});
