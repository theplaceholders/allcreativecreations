import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // or specify a specific host like '0.0.0.0' to listen on all addresses
  }

});
