import { Grid, Typography } from '@mui/material';
import React from 'react';

interface Props {
   children?: React.ReactNode;
}

const Footer: React.FC<Props> = () => {
   return (
      <Grid container sx={{background:"#3a3a3a",textAlign:"center",justifyContent:"center"}} >
         <Grid item xs={11}  >
            <Typography variant={"caption"} sx={{fontSize:{xs:"0.8rem"}}}>
               Copyright © 2023. Juliana Souza Rodrigues Advocacia
            </Typography> 
         </Grid>
         <Grid item xs={11}>
            <Typography variant={"caption"} sx={{fontSize:{xs:"0.6rem"}}}>
               Desenvolvido por <a href="https://www.linkedin.com/in/jonathascavalcante/" style={{color:"#fff",}} >Jonathas Borges</a> 
            </Typography>
         </Grid>
      </Grid>
   )
}

export default Footer;