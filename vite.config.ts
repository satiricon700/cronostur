import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Esto evita que Rollup intente cargar el binario nativo que falla
      external: []
    }
  },
  // Esto fuerza a Vite a no usar el caché nativo que está roto
  optimizeDeps: {
    force: true
  }
});