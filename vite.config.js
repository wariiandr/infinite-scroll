import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'

export default defineConfig({
  plugins: [
    vue(),
    eslint({
      include: ['src/**/*.js', 'rc/**/*.vue']
    })
  ],
  server: {
    port: 3000
  }
})