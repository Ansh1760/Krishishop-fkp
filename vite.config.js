import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,   // mobile/other devices same WiFi se access kar saken
    port: 5173    // default port, chahe to change bhi kar sakte ho
  }
})
