import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react')) {
            return 'react'
          }

          if (id.includes('node_modules/react-dom')) {
            return 'react'
          }
        },
      },
    },
    sourcemap: false,
  },
  plugins: [react(), tailwindcss()],
})
