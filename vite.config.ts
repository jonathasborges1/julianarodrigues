  /* eslint-disable @typescript-eslint/no-unused-vars */

  import { defineConfig } from 'vite';

  import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa';
  import viteCompression from 'vite-plugin-compression';
  import { createHtmlPlugin } from 'vite-plugin-html'
  import ViteImagemin from 'vite-plugin-imagemin';

  import react from '@vitejs/plugin-react';
  import svgr from '@svgr/rollup';
  import dotenv from 'dotenv';


  // Carrega as variáveis de ambiente do arquivo .env
  dotenv.config()

  // import wallpaperHome from 'src/assets/juliana-rodrigues-advogada-manaus-wallpaper-mobile-375x190.webp';

  const port = parseInt(process.env.PORT ?? '5000', 10);

  const manifestForPlugin: Partial<VitePWAOptions> = {
    registerType: "autoUpdate", 
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
          purpose: 'maskable',
        },
        {
          src: "/android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: 'maskable',
        },
        {
          src: "/apple-touch-icon.png",
          sizes: "180x180",
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: "/maskable_icon.png",
          sizes: "225x225",
          type: "image/png",
          purpose: "maskable",
        },
      ],
    },
  };

  const alterScriptPlugin = () => ({
    name: 'alter-script-plugin',
    transformIndexHtml(html) {
      // Use uma expressão regular para encontrar todas as ocorrências de <script>
      const modifiedHtml = html.replace(/<script\b(?! defer\b)/gi, '<script defer');
      return modifiedHtml;
    },
  });

  const replaceCssPlugin = () => ({
    name:'replace-css-plugin',
    transformIndexHtml(html) {
      // Use uma expressão regular para encontrar todas as ocorrências de <link>
      const modifiedHtml = html.replace(/<link\b([^>]*)\brel=["']?stylesheet["']?([^>]*)>/g, '<link $1 rel="stylesheet" media="print" onload="this.media=\'all\'" $2>');
      return modifiedHtml;
    },
  })

  // const PreloadImagesPlugin = () => {
  //   return {
  //     name: 'preload-images-plugin',
  //     transformIndexHtml(html) {
  //       // const { include, exclude } = options;
  
  //       // Diretório onde suas imagens estão localizadas
  //       const imagesDirectory = 'src/assets/';
  
  //       // Encontrar todas as imagens no diretório
  //       const images = fs.readdirSync(imagesDirectory).filter(file => /\.(png|jpe?g|gif|svg)$/i.test(file));
  
  //       // Filtrar imagens com base nas opções de inclusão/exclusão
  //       // const filteredImages = images.filter(file => (!include || include.test(file)) && (!exclude || !exclude.test(file)));
        
  //       const filteredImages = images;

  //       // Gerar as tags <link rel="preload"> para as imagens
  //       const preloadTags = filteredImages.map(image => {
  //         const imagePath = path.join(imagesDirectory, image);
  //         const relPath = path.relative(__dirname, imagePath);
  //         const url = '/' + relPath.replace(/\\/g, '/'); // Ajuste para caminhos no Windows
  
  //         return `<link rel="preload" as="image" href="${url}" />`;
  //       });
  
  //       // Adicionar as tags geradas ao HTML
  //       const modifiedHtml = html.replace('</head>', `${preloadTags.join('\n')}\n</head>`);
  //       return modifiedHtml;
  //     },
  //   };
  // }

  // https://vitejs.dev/config/
  export default defineConfig({
    plugins: [  
      // PreloadImagesPlugin(),
      replaceCssPlugin(), 
      alterScriptPlugin(),
      createHtmlPlugin({
        minify: true,
        inject:{
          data:{
            injectScript:`<link rel='preload' as='image' href='/assets/juliana-rodrigues-advogada-manaus-wallpaper-mobile-375x190-IXlWYTjv.webp'>`,
          }
        }
      }),
      react(),
      svgr(),
      viteCompression(),
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
    ],
    build:{
      assetsInlineLimit:0,
      target:"esnext",
      cssMinify: true,
      cssCodeSplit:true,
      chunkSizeWarningLimit: 1000, // Defina o limite desejado
      minify: 'terser',
      terserOptions: {
        ecma: 2020, // ou a versão do ECMAScript desejada
        compress: {
          drop_console: true, // Remover console.log
        },
        format: {
          comments: false, // Remover comentários
        },
        mangle: true,
      },
      outDir: 'build', // Altere para o nome do diretório desejado de 'dist' para 'build'
      sourcemap: false,
      modulePreload: {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        resolveDependencies: (url, deps, context) => {
          return [];
        },
      },
      rollupOptions: {
        output: {
          sourcemap: false,
          manualChunks: {
            react: ['react'],
            reactDom:['react-dom'],
            router: ['react-router-dom'],
          },
          format:"es",
        },
      },
    },
    server: {
      host: '0.0.0.0',
      port,
      open: true,
      cors: true
    },
  });