import './maps.css';
import React, { useState } from 'react';
import { Button, Divider, Grid, Typography, TypographyProps,} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PlaceIcon from '@mui/icons-material/Place';

import { handleWhatsappContant } from '../Home';
interface Props {
   children?: React.ReactNode;
}

const Maps: React.FC<Props> = () => {
   const [origin, setOrigin] = useState<{ lat: number; lng: number } | null>(null);

   const destination = { lat: -3.1079797, lng: -60.0147917, };

   const openGoogleMaps = () => {
      if (origin) {
        // Abra o Google Maps com as coordenadas de origem e destino
        // console.log("origin-lat: ",origin.lat);console.log("origin-lng: ",origin.lng);
        const url = `https://www.google.com/maps/dir/?api=1&origin=${origin.lat},${origin.lng}&destination=${destination.lat},${destination.lng}`;
        window.open(url, '_blank');
      } else {
        console.error('Não foi possível obter a localização do usuário.');
        const url = `https://www.google.com/maps/dir/?api=1&destination=${destination.lat},${destination.lng}`;
        window.open(url, '_blank');
      }
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const requestLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setOrigin({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          (error) => {
            console.error('Erro ao obter a localização do usuário:', error.message);
          }
        );
      } else {
        console.error('Geolocalização não suportada pelo navegador.');
      }
    };

   const TypographyBlack: React.FC<TypographyProps> = ({children,...props}) => {
      const blackColor = "#000";
      return(<Typography {...props} sx={{color:blackColor, ...props.sx}} >{children}</Typography>)
   }

   return (
      <Grid container sx={{border:"0px solid red", padding:{xs:2,lg:8} ,gap:{xs:1,lg:1.5,xl:3}, justifyContent:"center",background:"rgba(255,255,255,0.9)"}}>

         <Grid item xs={12} md={12} sx={{p:{xs:"1.5rem 0rem",md:"0px 0px"}}}>
            <Typography variant={"h1"} sx={{color:"black"}} >Mapa do Escritorio</Typography>
            <Grid container>
               <Grid item xs={2.5} lg={1}>
                  <Divider sx={{ border:"3px solid red",borderRadius:2,m:{xs:"12px 0px"} }} />
               </Grid>
            </Grid>
         </Grid>

         <Grid item xs={12} sx={{border:"0px solid red"}}>
            <iframe 
               className='iframe'
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.9498122253094!2d-60.01966262134781!3d-3.107979688790828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6dd1fa2003c0bec5%3A0xf4c05aa28567bade!2sJuliana%20Rodrigues%20-%20Escrit%C3%B3rio%20de%20Advocacia%20-%20Advogado%20Manaus!5e0!3m2!1spt-BR!2sbr!4v1702855296577!5m2!1spt-BR!2sbr" 
               width="inherit" 
               height="450"  
               loading="lazy"
               style={{width:"inherit !important"}}
            />
         </Grid>

         <Grid item xs={12} sx={{border:"0px solid black"}}>
            <Grid container sx={{border:"0px solid red", justifyContent:"center", gap:{xs:5,sm:1,md:2,lg:4}}}>

               <Grid item xs={12} sm={11} md={10} lg={5} sx={{border:"0px solid blue",}}>

                  <Grid container sx={{border:"0px solid black",gap:{xs:1,md:2,lg:2}, alignItems:"center", justifyContent:"center"}} >
                     <Grid item xs={1.5} sx={{border:"0px solid red"}} >
                        <PlaceIcon sx={{fill:"lightcoral", fontSize:"3rem"}} />
                     </Grid>
                     <Grid item xs={10} sx={{border:"0px solid red"}}>
                        <TypographyBlack variant={"h3"}>Manaus - AM</TypographyBlack>
                        <TypographyBlack variant={"body2"} sx={{fontSize:{xs:"0.92rem",}}} >R. Salvador, 120 - Adrianópolis, Manaus - AM, 69057-040</TypographyBlack>
                        <Button variant={"contained"} onClick={openGoogleMaps} sx={{ marginTop: '0.8rem' }} >
                           <Typography variant='body1'>Abrir no Google Maps</Typography>
                        </Button>
                     </Grid>
                  </Grid>

               </Grid>

               <Grid item xs={12} sm={11} md={10} lg={4} sx={{border:"0px solid black"}}>
                  <Grid container sx={{border:"0px solid black",gap:{xs:1,md:2,lg:2}, alignItems:"center", justifyContent:"center"}} >
                     <Grid item xs={1.5} sx={{border:"0px solid red"}} >
                        <WhatsAppIcon sx={{fill:"forestgreen", fontSize:"3rem"}}/> 
                     </Grid>
                     <Grid item xs={10} sx={{border:"0px solid red"}}>
                        <TypographyBlack variant={"h3"}>Contato</TypographyBlack>
                        <TypographyBlack variant={"body2"}>55 92 9 8230 1415 </TypographyBlack>
                        <Button variant={"contained"} onClick={handleWhatsappContant} sx={{ marginTop: '0.8rem' }} >
                           <Typography variant='body1'>Falar com um advogado</Typography>
                        </Button>
                     </Grid>
                  </Grid>
               </Grid>
               
            </Grid>
         </Grid>
      </Grid>
   )
}

export default Maps;