import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import svgr from "vite-plugin-svgr";
import svgr from '@svgr/rollup';

const port = parseInt(process.env.PORT ?? '5000', 10);

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    outDir: 'build', // Altere para o nome do diretório desejado de 'dist' para 'build'
  },
  plugins: [
    react(),
    svgr(),
  ],
  server: {
    // hmr: {
    //   host: '0.0.0.0',
    //   clientPort: 443,
    // },
    host: '0.0.0.0',
    port,
  },
});
