import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // 判斷 dev, prod 路徑設定
  base: process.env.NODE_ENV === 'production' ? '/react_project/' : '/',
  plugins: [react()],
})
