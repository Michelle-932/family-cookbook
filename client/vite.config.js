import {resolve} from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [react()],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        dedication: resolve(root, 'dedication', 'index.html'),
        addrecipe: resolve(root, 'addrecipe', 'index.html'),
      },
    },
  },
  server: {
    proxy: {
      '/recipe/': {
        target: 'http://localhost:8000/recipes',
        changeOrigin: true,
      }
    }
  }
})
