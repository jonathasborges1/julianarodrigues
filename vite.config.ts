import fs from 'fs';
import path from 'path';

import { defineConfig } from 'vite';

import VitePreload from 'vite-plugin-preload';
import ViteImagemin from 'vite-plugin-imagemin';
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa'
import { createHtmlPlugin } from 'vite-plugin-html'

import react from '@vitejs/plugin-react';
// import svgr from "vite-plugin-svgr";

import svgr from '@svgr/rollup';
// import commonjs from '@rollup/plugin-commonjs';

import imageminWebp from 'imagemin-webp';

const port = parseInt(process.env.PORT ?? '5000', 10);

const manifestForPlugin: Partial<VitePWAOptions> = {
	registerType: "autoUpdate", // prompt
	includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
	manifest: {
		name: "Juliana Souza Rodrigues",
		short_name: "Juliana Souza",
		description: "Advogada trabalhista especializada em serviços jurídicos para questões trabalhistas. Entre em contato para obter assistência profissional.",
    theme_color: "#171717",
		background_color: "#e8ebf2",
		display: "standalone",
		scope: "/",
		start_url: "/",
		orientation: "portrait",
    lang: 'pt',
    icons: [
			{
				src: "/android-chrome-192x192.png",
				sizes: "192x192",
				type: "image/png",
        purpose: 'any maskable',
			},
			{
				src: "/android-chrome-512x512.png",
				sizes: "512x512",
				type: "image/png",
			},
			{
				src: "/apple-touch-icon.png",
				sizes: "180x180",
				type: "image/png",
				purpose: "any",
			},
			{
				src: "/maskable_icon.png",
				sizes: "225x225",
				type: "image/png",
				purpose: "maskable icon",
			},
		],

	},
};


// Função para gerar as tags de pré-carregamento
function getImagesInAssetsFolder() {
  const assetsFolder = path.resolve(__dirname, 'src/assets');
  const images = fs.readdirSync(assetsFolder).filter(file => /\.(png|jpe?g|gif|webp)$/i.test(file));
  return images.map(image => path.join(assetsFolder, image));
}

function getPreloadAssets() {
  const images = getImagesInAssetsFolder();
  return images.map(image => ({
    rel: 'preload',
    as: 'image',
    href: image,
  }));
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          preloadAssets: getPreloadAssets(),
        },
      },
    }),
    VitePreload(),
    react(),
    svgr(),
    VitePWA(manifestForPlugin),
    ViteImagemin({
      gifsicle: { optimizationLevel: 3, interlaced: false, colors: 10 },
      optipng: { optimizationLevel: 5 },
      pngquant: { quality: [0.8, 0.9], speed: 4 },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
      webp: { quality: 6 },
      mozjpeg: { quality: 75, progressive: true },
    }),
    {
      name: 'defer-scripts',
      enforce: 'post',
      apply: 'build',
      transformIndexHtml(html) {
        return html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, (match) => {
          // Adiciona a propriedade defer a todas as tags <script>
          return match.replace('<script', '<script defer'); //  data-lazy-load
        });
      },
    },
    {
      name: 'defer-modulepreload',
      enforce: 'post',
      apply: 'build',
      transformIndexHtml(html) {
        // Substitua as tags <link rel="modulepreload"> por <script defer>
        return html.replace(/<link\s+rel="modulepreload"[^>]*href="([^"]+)"[^>]*>/gi, (match, href) => {
          return `<script defer type="module" src="${href}"></script>`; //  data-lazy-load
        });
      },
    },
    {
      name: 'defer-css',
      enforce: 'post',
      apply: 'build',
      transformIndexHtml(html) {
        // Adicione um script mínimo para carregar o CSS após o carregamento inicial
        return html.replace(/<link\s+rel="stylesheet"[^>]*href="([^"]+)"[^>]*>/gi, (match, href, rest) => {
          return `<link rel="stylesheet" href="${href}" media="print" onload="this.media='all';this.onload=null;"${rest}>`;
        });
      },
    },
  ],
  build:{
    minify: 'terser',
    outDir: 'build', // Altere para o nome do diretório desejado de 'dist' para 'build'
    sourcemap: false,
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
          react: ['react'],
          reactDom: ['react-dom'],
          reactRouterDom: ['react-router-dom'],
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


const webpOptions = imageminWebp({
  quality: 75,
});

export { webpOptions };