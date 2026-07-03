import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// Deployed to <username>.github.io, which is served from the domain root,
// so base stays '/'. If you ever move this to a project repo instead
// (username.github.io/portfolio), change base to '/portfolio/'.
export default defineConfig({
  base: '/',
  plugins: [tailwindcss()],
  build: {
    outDir: 'dist',
  },
})
