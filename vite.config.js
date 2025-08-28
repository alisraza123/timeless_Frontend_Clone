import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],  // Sirf React plugin use karen, tailwindcss ka koi vite plugin nahi hai
})
