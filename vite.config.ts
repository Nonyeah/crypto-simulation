import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

/// <reference types="vitest/config" />
export default defineConfig({
  plugins: [react()],
   base: '/crypto-simulation/',
   test: {
    globals: true,
    environment: 'jsdom'
   }
})
