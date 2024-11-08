import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',  // Permite que Vite escuche en todas las interfaces
    port: process.env.PORT || 3000,  // Usar el puerto proporcionado por el entorno
  },
});
