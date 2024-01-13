import React, { useMemo } from 'react';

import { Divider, Grid, Typography, useTheme } from '@mui/material';

import { BalanceIcon, CourtIcon, GavelIcon } from '../../components/Icons';

import mobileBackgroundBalance from "../../assets/mobile-background-balance.png";
import desktopBackgroundBalance from "../../assets/desktop-background-balance.png";

interface ServiceProps {
   children?: React.ReactNode;
}

const Service: React.FC<ServiceProps> = () => {

   const theme = useTheme();
   
   const mapMemo = useMemo(() =>{
      
      const gold = theme.palette.custom.gold;

      const iconStyle = {
         fontSize:"3rem",
         color:gold
      }

      const conteudo = [
         {
            icon: <GavelIcon sx={iconStyle}/>, // gavelIcon GavelTwoToneIcon
            title: "DIREITO TRABALHISTA.",
            subtitle:"É o ramo do direito que contém normas jurídicas relacionadas com a estrutura, organização e proteção da família. Trata das relações familiares e das obrigações e direitos decorrentes dessas relações, ou seja, regula e estabelece as normas de convivência familiar...",
         },
         {
            icon: <BalanceIcon sx={iconStyle}/>, // BalanceIcon - BalanceOutlinedIcon
            title: "DIREITO DO CONSUMIDOR.",
            subtitle:"É o ramo do direito que lida com as relações jurídicas entre fornecedores de bens e serviços e seus consumidores. Tem por objetivo assegurar que os consumidores obtenham acesso a informações quanto a origem e qualidade dos produtos e serviços..."
         },
         {
            icon: <CourtIcon sx={iconStyle}/>,//AccountBalanceTwoToneIcon
            title: "DIREITO PREVIDENCIARIO.",
            subtitle:`É a área jurídica que regem a seguridade social e os direitos relacionados aos benefícios previdenciários. 
                     o Direito Previdenciário engloba temas como aposentadoria, pensões, auxílios e demais prestações destinadas a assegurar a dignidade do trabalhador...`
         }
      ]
      return conteudo.map((item,index) => {
         return(
            <Grid item key={index} xs={12} lg={3.9} xl={3.8} sx={{p:{xs:2,md:2,lg:2,xl:2},border:"0px solid red"}} >
               <Grid container sx={{gap:{xs:4,md:4,lg:2,xl:4}}}>

                  <Grid item sx={{display:"flex", flexDirection:"row" ,justifyItems:"center", justifyContent:"center",border:"0px solid red"}}>
                     {item.icon}
                     <Typography variant={"h6"} 
                        sx={{
                           pl:1, m:0, lineHeight:"50px",fontWeight:600,
                           // fontSize:{
                           //    xs:"1.3rem", 
                           //    lg:"1.2rem",
                           //    xl:"1.2rem"
                           // } 
                        }} 
                        >
                           {item.title}
                        </Typography>                  
                  </Grid>

                  <Grid item>
                     <Typography variant={"body2"} sx={{textAlign:{xs:"justify"},lineHeight:{xs:"25px",lg:"30px"}}} >
                        {item.subtitle}
                     </Typography>
                  </Grid>
               </Grid>
            </Grid>
         )
      })
   },[theme]);

   return (
      <Grid id={"service"} className='service-container' container 
         sx={{
            border:"0px solid white",justifyContent:"center", p:{xs:"3rem 0px"},
            backgroundImage:{
               xs:`linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${mobileBackgroundBalance})`,
               lg:`linear-gradient(to bottom,rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)), url(${desktopBackgroundBalance})`
            },
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
            backgroundSize:"contain",
         }}
      >
         <Grid className='service-container-item' item xs={11.5} lg={10} xl={9}>

            <Grid container sx={{gap:{xs:1,lg:1.5,xl:3}, justifyContent:"center"}}>
{/*TITULO*/}
               <Grid item xs={11} md={12} sx={{p:{xs:"1.5rem 0rem",md:"0px 0px"}}}>
                  <Typography variant={"h1"}>ÁREAS DE ATUAÇÃO</Typography>
                  <Grid container>
                     <Grid item xs={3} lg={1}>
                        <Divider sx={{ border:"3px solid red",borderRadius:2,m:{xs:"12px 0px"} }} />
                     </Grid>
                  </Grid>
               </Grid>

{/*AREAS DO DIREITO*/}

               <Grid item xs={12}>
                  <Grid container>
                     {mapMemo}
                  </Grid>
               </Grid>
               
            </Grid>

         </Grid>

      </Grid>
   )
}

export default Service;