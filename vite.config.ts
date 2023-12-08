import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import svgr from "vite-plugin-svgr";
import svgr from '@svgr/rollup';
// import commonjs from '@rollup/plugin-commonjs';

const port = parseInt(process.env.PORT ?? '5000', 10);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    // commonjs(),
  ],
  build:{
    sourcemap: false,
    outDir: 'build', // Altere para o nome do diretório desejado de 'dist' para 'build'
    modulePreload: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      resolveDependencies: (url, deps, context) => {
        return [];
      }
    },
    rollupOptions: {
      output: {
        sourcemap: false,
        manualChunks: {
          ethers: ['ethers'],
          router: ['react-router-dom'],
          rtk: ['@reduxjs/toolkit'],
          redux: ['react-redux'],
          chakra: ['@chakra-ui/react'],
        },
      },
    },
  },
  server: {
    // hmr: {
    //   host: '0.0.0.0',
    //   clientPort: 443,
    // },
    host: '0.0.0.0',
    port,
    open: true,
    cors: true
  },
});
