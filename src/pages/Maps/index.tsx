import './maps.css';
import React from 'react';
import { Grid,  } from '@mui/material'; // Typography
// import PlaceIcon from '@mui/icons-material/Place';

interface Props {
   children?: React.ReactNode;
}

const Maps: React.FC<Props> = ({ ...props }) => {
   return (
      <Grid container sx={{border:"0px solid blue",p:1}} {...props}>
         
         <Grid item xs={12} sx={{border:"0px solid red"}}>
            <iframe 
               className='iframe'
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.9498122253094!2d-60.01966262134781!3d-3.107979688790828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6dd1fa2003c0bec5%3A0xf4c05aa28567bade!2sJuliana%20Rodrigues%20-%20Escrit%C3%B3rio%20de%20Advocacia%20-%20Advogado%20Manaus!5e0!3m2!1spt-BR!2sbr!4v1702855296577!5m2!1spt-BR!2sbr" 
               // width="inherit" 
               height="450"  
               loading="lazy"
               style={{width:"inherit !important"}}
            />
         </Grid>

         {/* <Grid item xs={12} sx={{border:"1px solid yellow"}}> 
            <Grid container sx={{gap:{xs:0.4,sm:1,md:1.5}}}>
               <Grid item xs={12} sm={11} md={10} lg={3.5} sx={{display:"flex"}} >
                  <PlaceIcon/>
                  <Typography variant={"h3"}>Manaus - AM</Typography>
                  <Typography variant={"body2"}>R. Salvador, 120 - Adrianópolis, Manaus - AM, 69057-040</Typography>
               </Grid>
               <Grid item xs={12} sm={11} md={10} lg={3.5}></Grid>
               <Grid item xs={12} sm={11} md={10} lg={3.5}></Grid>
            </Grid>
         </Grid> */}
      </Grid>
   )
}

export default Maps;