import React from 'react';
import { Divider, Grid, GridProps, Typography } from '@mui/material';

interface TitleProps extends GridProps {
   children?: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ children, ...props }) => {
   return (
      <Grid container className='title-container' {...props} sx={{border:"0px solid red", alignItems:"center" ,p:{xs:2}, ...props.sx }}>
         <Grid item xs={12} sx={{border:"0px solid red"}}>
            <Typography variant={"h1"} sx={{border:"0px solid blue",width:"fit-content"}}>
               {children}
               <Divider sx={{ border:"3px solid red",borderRadius:2,m:{xs:"10px 0px 0px 0px"}, width:"80%" }} />
            </Typography>
         </Grid>
      </Grid>
   )
}

export default Title;