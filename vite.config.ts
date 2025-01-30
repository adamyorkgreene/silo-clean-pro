import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 50555, // Replace with your desired port
    host: '0.0.0.0', // Allows external access
  },
});