import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  base: 'https://github.com/Harry8679/100-2-Compteur-React-TypeScript-'
})