import React from 'react';
import { Avatar, Grid, Typography } from '@mui/material';

import imgWallpaper from '../../assets/juliana-rodrigues-advogada-manaus-wallpaper.webp'
import ArrowAnimated from '../../components/ArrowAnimated';
import ButtonPulse from '../../components/ButtonPulse';

interface HomeProps {
   children?: React.ReactNode;
}

const Home: React.FC<HomeProps> = ({ children }) => {

   const handleWhatsappContant = () => {
      const phoneNumber = '5592982301415'; // Coloque o número de telefone desejado
      const message = 'Olá, gostaria de falar sobre o direito trabalhista.'; // Mensagem padrão
    
      // Cria o link do WhatsApp
      const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
      
      // Abre o link no navegador
      window.open(whatsappLink, '_blank');
   }

   return (
      <Grid id={"home"} container sx={{p:0, justifyContent:"center", border:"0px solid blue",gap:{xs:3,md:3,lg:5,xl:6}}}>

         <Grid item xs={12} sx={{ pt:{xs:"4rem",md:"5rem"} }}></Grid>
         
         <Grid item xs={11} md={6} lg={4.5} sx={{pt:{xs:"0rem"},display:"flex", border:"0px solid red"}}>
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
         
         <Grid item xs={11} md={4.5} xl={4}  >
            <Grid container sx={{alignItems:"center",justifyContent:"center"}}>
               <Grid item sx={{display:"flex", justifyContent:"center", border:"0px solid white",p:1}}  >
                  <div style={{display:"flex", justifyContent:"center",border:"2px solid white",borderRadius:2,boxShadow: "0px 0px 30px rgba(255, 255, 255, 0.9)"}} >

                     <Avatar 
                        src={imgWallpaper} 
                        alt="juliana-rodrigues-direito-trabalhista-imagem-agente-limpeza-wallpaper"
                        sx={{
                           // border:"2px solid blue",
                           pb:{lg:0,xl:4},
                           borderRadius:0,
                           height:{xs:"auto",md:"130px", lg:"auto",xl:"300px"}, 
                           width:{xs:"auto",md:"130px",lg:"auto",xl:"600px"}
                        }}
                        imgProps={{
                           sx:{
                              // border:"2px solid red",
                              pb:{xs:1,md:0},
                              height:{xs:"200px",md:"200px",lg:"250px",xl:"300px"}, 
                              width:{xs:"380px",md:"400px",lg:"500px",xl:"600px"},
                           },
                        }}
                     />

                  </div>
               </Grid>
            </Grid>

         </Grid>
         
         <Grid item xs={12} sx={{display:"flex",justifyContent:"center",p:2}} >
            <div style={{position:"relative"}}>
               <div style={{border:"0px solid red",position:"absolute"}}>
                  <ArrowAnimated/>
               </div>
            </div>
         </Grid>
         
         {children}
      </Grid>
   )
}

export default Home;