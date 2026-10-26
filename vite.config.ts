import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5180,
    host: '0.0.0.0',
    allowedHosts: [
      'elijahs-macbook-pro.panga-galaxy.ts.net',
      '.panga-galaxy.ts.net',
      'localhost',
      '127.0.0.1'
    ]
  }
});
