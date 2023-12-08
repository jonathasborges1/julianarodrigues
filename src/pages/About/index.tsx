import React from 'react';
import { Avatar, Typography, Grid, useMediaQuery } from '@mui/material';

import avatarIMG from '../../assets/juliana-rodrigues-advogada-avatar.webp';

import avatarIMGMOBILE from '../../assets/juliana-rodrigues-advogada-avatar-mobile-120x125.webp';
import MagicCard from '../../components/MagicCard';
import theme from '../../theme';

interface AboutProps {
   children?: React.ReactNode;
}

const About: React.FC<AboutProps> = () => {

   const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // abaixo de sm = xs
   
   const textColorBlack = "#000";
   const backgroundColorWhite = "#b5b5b5" // 212534 // e9e7e1

   // const responsiveStyle = isMobile ? {
   //    height: '120px', 
   //    width:"120px",
   // } : {
   //    height: '150px', 
   //    width:"150px",
   // }

   return (
      <Grid id={"about"} container 
         sx={{
            gap:{xs:3,md:6},
            textAlign:{xs:"center",md:"left"},
            border:"0px solid yellow",
            background:backgroundColorWhite,
            justifyContent:"center",
         }}
      >
         <Grid item xs={12} sx={{pt:2}}></Grid>
         
         <Grid item xs={11} md={10} lg={3.1} xl={3} sx={{border:"0px solid red", textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"center"}}>
            <MagicCard>
               <Grid container 
                  sx={{background:"rgba(0,0,0,0.5)",backdropFilter: "sepia(0.8)", 
                     m:{xs:"6px 0px",md:0,lg:"0px 1px",xl:"0px 0px"},
                     p:{xs:1,md:2,lg:2.5,xl:1.5},border:"1px solid purple", borderRadius:2, justifyContent:"center",                     
                  }}
               >
                  <Grid item xs={12} sx={{pt:{xs:4,lg:6,xl:7}}}></Grid>
                  <Grid item xs={4} lg={9} xl={7} sx={{display:"flex",justifyContent:"center",pb:{xs:1,lg:1.5,xl:1.5}}}>
                     <Avatar 
                        src={isMobile ? avatarIMGMOBILE : avatarIMG } 
                        alt={isMobile ? "juliana-rodrigues-advogada-mobile" : "juliana-rodrigues-advogada-desktop"} 
                         
                        sx={{
                           opacity:0.9, 
                           // border:"3px solid blue",
                           width:{xs:"120px",md:"130px",lg:"140px",xl:"150px"},
                           height:{xs:"125px",md:"130px", lg:"140px",xl:"150px"}, 
                           
                        }}
                        imgProps={{
                           width:  isMobile ? "120px" : "150px",  
                           height: isMobile ? "125px" : "150px",
                           sx:{
                              // border:"5px solid red",
                              height:{xs:"120px",md:"130px",lg:"140px",xl:"150px"}, 
                              width:{xs:"120px",md:"130px",lg:"140px",xl:"150px"},
                           },
                           // style:responsiveStyle,
                           // srcSet: `${avatarIMGMOBILE} 380w, ${avatarIMG} 500w, ${avatarIMG} 600w`,
                           // sizes: `(max-width: 380px) 100vw, (max-width: 500px) 100vw, 600px`,
                           // loading:"lazy"
                        }}
                     />
                  </Grid>
                  <Grid item xs={12}><Typography variant={"h6"} sx={{border:"0px solid blue",color:"#fff"}}>Advogada Trabalhista</Typography></Grid>
                  <Grid item xs={12}><Typography variant={"body2"} sx={{color:"#fff"}} >OAB/AM - 10547</Typography></Grid>
                  <Grid item xs={12} sx={{pt:{xs:4,lg:6,xl:7}}}></Grid>
               </Grid>
            </MagicCard>
         </Grid>

         <Grid item xs={11} md={10} lg={6.5} xl={5.5} sx={{border:"0px solid blue",pb:0}}>
            
            <Grid container sx={{ gap:3, textAlign:{xs:"justify",md:"justify"} }} >
               <Grid item xs={12}>
                  <Typography variant={"h3"} 
                     sx={{
                        border:"0px solid red",color:textColorBlack, 
                        // fontSize:{xs:"1.4rem",md:"1.2rem",lg:"1.5rem",xl:"1.9rem",},
                        textAlign:{xs:"center",md:"center",lg:"left",xl:"left"}
                     }}
                  >
                     SEJA BEM VINDO AO NOSSO WEBSITE JULIANA SOUZA RODRIGUES ADVOCACIA
                  </Typography>
               </Grid>
               <Grid item xs={12}>
                  <Typography variant={"body2"} sx={{color:textColorBlack}}>
                     É um escritório de advocacia que atua eminentemente na área de Direito do Trabalho, Direito Previdenciário e Direito do Consumidor, prestando assessoria jurídica, consultiva e contenciosa através de advogados altamente especializados.
                  </Typography>
               </Grid>
               <Grid item xs={12}>
                  <Typography variant={"body2"} sx={{color:textColorBlack}}>
                     Somos um escritório de advocacia com grande reconhecimento. Temos uma equipe bastante capacitada que se empenha e se dedica nas demandas e na unificação de todos os assuntos com responsabilidade, integridade, respeito e celeridade.
                  </Typography>
               </Grid>
               <Grid item xs={12}>
                  <Typography variant={"body2"} sx={{color:textColorBlack}}>
                     Mantendo os valores da sociedade, nosso foco é o cliente, e com isso, somos considerados um dos principais escritório de advogados de Manaus.
                  </Typography>
               </Grid>
               <Grid item xs={12}>
                  <Typography variant={"body2"} sx={{color:textColorBlack}}>
                     É com espírito de luta que tratamos cada uma de nossas causas.
                  </Typography>
               </Grid>
            </Grid>

         </Grid>

         <Grid item xs={12} sx={{pb:2,m:0,color:"#e9e7e1",fontSize:"1rem",border:"0px solid red"}}></Grid>
      </Grid>
   )
}

export default About;