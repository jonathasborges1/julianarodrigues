import React from 'react';
import { Grid, Typography } from '@mui/material';
import Title from '../../components/Title';

interface LinksProps {
   children?: React.ReactNode;
}

const Links: React.FC<LinksProps> = () => {

   const links = [
      {
         title: "OAB Nacional",
         site: "https://www.oab.org.br",
       },
       {
         title: "OAB Amazonas",
         site: "https://www.oabam.org.br",
       },
       {
         title: "CNA - OAB",
         site: "https://www.cna.oab.org.br",
       },
       {
         title: "CNJ",
         site: "https://www.cnj.jus.br",
       },
       {
         title: "TRT 11",
         site: "https://www.trt11.jus.br",
       },
       {
         title: "TJAM",
         site: "https://www.tjam.jus.br",
       },
       {
         title: "Portal TRF1",
         site: "https://www.portal.trf1.jus.br",
       },
       {
         title: "STJ",
         site: "https://www.stj.jus.br",
       },
       {
         title: "STF",
         site: "https://www.stf.jus.br",
       },
       {
         title: "MPAM",
         site: "https://www.mpam.gov.br",
       },
       {
         title: "PGR MPF",
         site: "https://www.pgr.mpf.gov.br",
       },
   ]

   return (
      <Grid container id={"links"} className='links-container' sx={{gap:{xs:0.4,lg:2}, padding:{xs:2,lg:4}, justifyContent:"center"  }} >
         <Grid item xs={12} lg={11.4} >
            <Title sx={{border:"0px solid red"}} >Links</Title>
         </Grid>
         <Grid item xs={12} lg={11}>
            <Grid container className='links-body-container' sx={{border:"0px solid blue", px:2, pb:{xs:2,lg:0} }}>
               {links.map((item,index) => (
                  <Grid item xs={6} lg={3} key={index} sx={{ p:{xs:"6px 0px 6px 16px", lg:"12px 0px 12px 8px"}, }}>
                     <a href={item.site} target='_blank' style={{color:"rgba(255,255,255,0.5)",  }}>
                        {item.title}
                        <Typography variant={"caption"} sx={{display:{xs:"none",md:"flex"}}}>{item.site}</Typography>
                     </a>
                  </Grid>
               ))}
            </Grid>
         </Grid>
      </Grid>
   )
}

export default Links;