import React from 'react';
import { Grid, Typography } from '@mui/material';

import imgWallpaper from '../../assets/wallpaper-small.png'
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

         {/* <Grid item xs={11} sx={{opacity:1}}><Typography variant='h1' sx={{fontSize:{xs:"2.3rem",md:"3.4rem"}}}>Conteudo Principal</Typography></Grid> */}
         <Grid item xs={12} sx={{ pt:{xs:"4rem",md:"5rem"} }}></Grid>
         
         <Grid item xs={11} md={6} lg={4.5} sx={{pt:{xs:"0rem"},display:"flex", border:"0px solid red"}}>
            <Grid container 
               sx={{
                  justifyItems:"center",
                  textAlign:{xs:"center",sm:"left"},
                  gap:{xs:4,lg:5,xl:6}, 
                  p:{xs:1},
                  justifyContent:"center", 
               }}>
               <Grid item>
                  <Typography variant={"h1"}>
                     Advocacia Especializada em <b>direito trabalhista</b>.
                  </Typography>
               </Grid>
               <Grid item>
                  <Typography variant={"body1"} > {/* sx={{fontWeight:200, fontSize:{xs:"0.93rem", xl:"1.36rem"}  }}*/}
                     <b style={{color:"#DAA520"}}>Garanta seu direito como trabalhador</b>, Fale agora com um de nossos especialistas e busque agora mesmo seus direitos na justica do trabalho.
                  </Typography>
               </Grid>

               <Grid item sx={{p:2}}>

                  <ButtonPulse variant={"contained"} onClick={handleWhatsappContant} >
                     <Typography variant='body1' sx={{fontWeight:700, fontSize:{xs:"0.8rem",md:"1.1rem"}}} >Falar com um advogado</Typography>
                  </ButtonPulse>
                  
               </Grid>
               
            </Grid>
         </Grid>
         
         <Grid item xs={11} md={4.5} xl={4}  >
            <Grid container sx={{alignItems:"center"}}>
               <Grid item sx={{display:"flex"}} >
                  <div style={{border:"1px solid white",borderRadius:2,boxShadow: "0px 0px 30px rgba(255, 255, 255, 0.9)"}} >
                     <img src={imgWallpaper} alt="direito-trabalhista-imagem-agente-limpeza" style={{width:"100%",opacity:0.8}} />
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