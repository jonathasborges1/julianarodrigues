import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import svgr from "vite-plugin-svgr";
import svgr from '@svgr/rollup';
// import commonjs from '@rollup/plugin-commonjs';
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa'

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

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    VitePWA(manifestForPlugin)
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
