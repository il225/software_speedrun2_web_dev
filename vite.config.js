import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/software_speedrun2_web_dev/",
  plugins: [react()],
})
