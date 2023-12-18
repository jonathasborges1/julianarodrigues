import React from 'react';

import { Avatar, Grid, Typography, useMediaQuery } from '@mui/material';

import imgWallpaper from '../../assets/juliana-rodrigues-advogada-manaus-wallpaper.webp';
import imgWallpaperMobile from '../../assets/juliana-rodrigues-advogada-manaus-wallpaper-mobile-375x190.webp';

import ArrowAnimated from '../../components/ArrowAnimated';
import ButtonPulse from '../../components/ButtonPulse';

import theme from '../../theme';

interface HomeProps {
   children?: React.ReactNode;
}

export const handleWhatsappContant = () => {
   const phoneNumber = '5592982301415'; // Coloque o número de telefone desejado
   const message = 'Olá, gostaria de falar sobre o direito trabalhista.'; // Mensagem padrão
 
   // Cria o link do WhatsApp
   const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
   
   // Abre o link no navegador
   window.open(whatsappLink, '_blank');
}

const Home: React.FC<HomeProps> = () => {

   const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // abaixo de sm = xs

   return (
      <Grid id={"home"} container 
         sx={{
            border:"0px solid blue",
            p:0, justifyContent:"center", 
            gap:{xs:3,md:3,lg:5,xl:6},
            // background:`linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(181, 181, 181, 0.25), rgba(181, 181, 181, 0.35),rgba(181, 181, 181, 0.45) ,rgba(181, 181, 181, 0.1) )`, // b5b5b5
         }}
      >

         <Grid item xs={12} sx={{ pt:{xs:"4rem",md:"5rem"} }}></Grid>
         
         <Grid item xs={11} sm={5} md={6} lg={4.5} sx={{pt:{xs:"0rem"},display:"flex", border:"0px solid red"}}>
            <Grid container 
               sx={{
                  justifyItems:"center",
                  textAlign:{xs:"center",sm:"left"},
                  gap:{xs:4,lg:5,xl:4}, 
                  p:{xs:1},
                  justifyContent:"center", 
               }}>
               <Grid item>
                  <Typography variant={"h1"}  >
                     Advocacia Especializada em <b>direito trabalhista</b>.
                  </Typography>
               </Grid>
               <Grid item sx={{p:{xl:"0px 24px 0px 0px"}}} >
                  <Typography variant={"body1"} sx={{fontWeight:200}} > {/* sx={{fontWeight:200, fontSize:{xs:"0.93rem", xl:"1.36rem"}  }}*/}
                     <b style={{color:"#DAA520"}}>Garanta seu direito como trabalhador</b>, Fale agora com um de nossos especialistas e busque agora mesmo seus direitos na justica do trabalho.
                  </Typography>
               </Grid>

               <Grid item sx={{p:2}}>

                  <ButtonPulse variant={"contained"} onClick={handleWhatsappContant} >
                     <Typography variant='body1' sx={{fontWeight:700, fontSize:{xs:"1rem",md:"1rem"}}} >Falar com um advogado</Typography>
                  </ButtonPulse>
                  
               </Grid>
               
            </Grid>
         </Grid>

         <Grid className={'wallpaperProblematico'} item xs={11} sm={5} md={4.5} xl={4}  sx={{border:"0px solid red"}}>

               <Grid container
                     sx={{
                        display:"flex", justifyContent:"center", 
                        border:"2px solid white",borderRadius:2,boxShadow: "0px 0px 30px rgba(255, 255, 255, 0.9)",
                        width:{xs:"380px",sm:"330px",md:"340px",lg:"520px",xl:"100%"},
                        height:{xs:"200px",sm:"170px",md:"180px",lg:"250px",xl:"auto"}, 
                     }} 
               >
                  <Avatar 
                     src={isMobile ? imgWallpaperMobile : imgWallpaper} 
                     alt={isMobile ? "juliana-rodrigues-direito-trabalhista-imagem-agente-limpeza-wallpaper-mobile" : "juliana-rodrigues-direito-trabalhista-imagem-agente-limpeza-wallpaper"}
                     sx={{
                        border:"0px solid blue",
                        pb:{xs:3,lg:0,xl:4},
                        borderRadius:0,
                        display: "contents",
                     }}
                     imgProps={{
                        width: isMobile ? "380" : "600",
                        height: isMobile ? "192" : "300",
                        sx:{
                           border:"0px solid red",
                           m:{xs:"0px 0px 4px 0px",sm:"0px 0px 8px 0px"},
                           width:{xs:"375px",sm:"330px",md:"340px",lg:"520px",xl:"100%"},
                           height:{xs:"190px",sm:"160px",md:"170px",lg:"250px",xl:"auto"}, 
                           // display:"none"
                        },
                        // loading:"lazy", // para imagens da primeira dobra nao se aplica o carregamento lazy
                        // srcSet: `${imgWallpaperMobile} 380w, ${imgWallpaperMobile} 500w, ${imgWallpaper} 600w`,
                        // sizes: `(max-width: 380px) 100vw, (max-width: 500px) 100vw, 600px`,
                        rel: "preload",
                     }}
                  />
               </Grid>

         </Grid>
         
         <Grid item xs={12} sx={{display:"flex",justifyContent:"center",p:2}} >
            <div style={{position:"relative"}}>
               <div style={{border:"0px solid red",position:"absolute"}}>
                  <ArrowAnimated/>
               </div>
            </div>
         </Grid>
         
      </Grid>
   )
}

export default Home;