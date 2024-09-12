import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true, // Optional: This can be used to ensure the host header is correctly set
        rewrite: (path) => path.replace(/^\/api/, ''), // Optional: Adjusts the path if needed
      },
    },
  },
});

